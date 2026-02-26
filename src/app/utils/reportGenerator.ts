import { getReports, getUserStats, getAllUsers } from './storage';
import { format, startOfWeek, endOfWeek, isWithinInterval } from 'date-fns';

export interface WeeklyReport {
  reportDate: string;
  weekStart: string;
  weekEnd: string;
  summary: {
    totalReports: number;
    pendingReports: number;
    reviewedReports: number;
    resolvedReports: number;
    newMembers: number;
    totalMembers: number;
  };
  reportsByType: Record<string, number>;
  reportsByLocation: Array<{
    area: string;
    count: number;
  }>;
  topContributors: Array<{
    userId: string;
    userName: string;
    reportCount: number;
  }>;
}

export const generateWeeklyReport = (): WeeklyReport => {
  const now = new Date();
  const weekStart = startOfWeek(now, { weekStartsOn: 1 }); // Monday
  const weekEnd = endOfWeek(now, { weekStartsOn: 1 }); // Sunday
  
  const allReports = getReports();
  const stats = getUserStats();
  const allUsers = getAllUsers();
  
  // Filter reports from this week
  const weeklyReports = allReports.filter(report => 
    isWithinInterval(new Date(report.timestamp), { start: weekStart, end: weekEnd })
  );
  
  // Count reports by status
  const pendingReports = weeklyReports.filter(r => r.status === 'pending').length;
  const reviewedReports = weeklyReports.filter(r => r.status === 'reviewed').length;
  const resolvedReports = weeklyReports.filter(r => r.status === 'resolved').length;
  
  // Count reports by type
  const reportsByType: Record<string, number> = {};
  weeklyReports.forEach(report => {
    reportsByType[report.type] = (reportsByType[report.type] || 0) + 1;
  });
  
  // Extract location areas (get suburb/area from address)
  const reportsByLocation: Record<string, number> = {};
  weeklyReports.forEach(report => {
    // Extract suburb from address (usually after first comma)
    const parts = report.location.address.split(',');
    const area = parts.length > 1 ? parts[1].trim() : parts[0].trim();
    reportsByLocation[area] = (reportsByLocation[area] || 0) + 1;
  });
  
  const locationArray = Object.entries(reportsByLocation)
    .map(([area, count]) => ({ area, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10); // Top 10 areas
  
  // Count reports by user
  const userReportCounts: Record<string, { count: number; name: string }> = {};
  weeklyReports.forEach(report => {
    if (!userReportCounts[report.userId]) {
      const user = allUsers.find(u => u.id === report.userId);
      userReportCounts[report.userId] = {
        count: 0,
        name: user?.name || 'Unknown User'
      };
    }
    userReportCounts[report.userId].count++;
  });
  
  const topContributors = Object.entries(userReportCounts)
    .map(([userId, data]) => ({
      userId,
      userName: data.name,
      reportCount: data.count
    }))
    .sort((a, b) => b.reportCount - a.reportCount)
    .slice(0, 10); // Top 10 contributors
  
  return {
    reportDate: format(now, 'MMMM d, yyyy'),
    weekStart: format(weekStart, 'MMMM d, yyyy'),
    weekEnd: format(weekEnd, 'MMMM d, yyyy'),
    summary: {
      totalReports: weeklyReports.length,
      pendingReports,
      reviewedReports,
      resolvedReports,
      newMembers: 0, // This could be calculated if we tracked user registration dates
      totalMembers: stats.totalMembers,
    },
    reportsByType,
    reportsByLocation: locationArray,
    topContributors,
  };
};

export const downloadWeeklyReportAsJSON = (report: WeeklyReport) => {
  const dataStr = JSON.stringify(report, null, 2);
  const dataBlob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(dataBlob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `Sydney_Weekly_Rubbish_Report_${format(new Date(), 'yyyy-MM-dd')}.json`;
  link.click();
  URL.revokeObjectURL(url);
};

export const downloadWeeklyReportAsCSV = (report: WeeklyReport) => {
  let csv = 'Sydney City Council - Weekly Rubbish Report\\n\\n';
  csv += `Report Date,${report.reportDate}\\n`;
  csv += `Week Period,${report.weekStart} to ${report.weekEnd}\\n\\n`;
  
  csv += 'SUMMARY STATISTICS\\n';
  csv += 'Metric,Count\\n';
  csv += `Total Reports,${report.summary.totalReports}\\n`;
  csv += `Pending Reports,${report.summary.pendingReports}\\n`;
  csv += `Reviewed Reports,${report.summary.reviewedReports}\\n`;
  csv += `Resolved Reports,${report.summary.resolvedReports}\\n`;
  csv += `Total Community Members,${report.summary.totalMembers}\\n\\n`;
  
  csv += 'REPORTS BY TYPE\\n';
  csv += 'Type,Count\\n';
  Object.entries(report.reportsByType).forEach(([type, count]) => {
    csv += `${type},${count}\\n`;
  });
  csv += '\\n';
  
  csv += 'TOP AFFECTED AREAS\\n';
  csv += 'Location,Reports\\n';
  report.reportsByLocation.forEach(({ area, count }) => {
    csv += `${area},${count}\\n`;
  });
  csv += '\\n';
  
  csv += 'TOP CONTRIBUTORS\\n';
  csv += 'User Name,Reports Submitted\\n';
  report.topContributors.forEach(({ userName, reportCount }) => {
    csv += `${userName},${reportCount}\\n`;
  });
  
  const dataBlob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(dataBlob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `Sydney_Weekly_Rubbish_Report_${format(new Date(), 'yyyy-MM-dd')}.csv`;
  link.click();
  URL.revokeObjectURL(url);
};

export const getNextSundayDate = (): string => {
  const now = new Date();
  const currentDay = now.getDay();
  const daysUntilSunday = currentDay === 0 ? 7 : 7 - currentDay;
  const nextSunday = new Date(now);
  nextSunday.setDate(now.getDate() + daysUntilSunday);
  return format(nextSunday, 'EEEE, MMMM d, yyyy');
};

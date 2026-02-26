import { Header } from '../components/Header';
import { Users, Mail, Award, Target, Heart, Recycle } from 'lucide-react';
import { motion } from 'motion/react';

const teamMembers = [
  {
    name: 'Nazmus Sakib',
    email: 's8116515@live.vu.edu.au',
    role: 'Project Leader',
  },
  {
    name: 'Md Abudozana Niloy',
    email: 's8138202@live.vu.edu.au',
    role: 'Full Stack Developer',
  },
  {
    name: 'Suvekshya Shrestha',
    email: 's8103527@live.vu.edu.au',
    role: 'UI/UX Designer & Developer',
  },
  {
    name: 'Bisesta Shah',
    email: 's8103504@live.vu.edu.au',
    role: 'Backend Developer',
  },
];

export const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header variant="landing" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full mb-4 sm:mb-6">
            <Users className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About Our Team
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the passionate team behind Sydney's Smart Rubbish Detection System
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-green-600 via-green-500 to-emerald-600 rounded-2xl p-6 sm:p-8 lg:p-12 mb-12 sm:mb-16 text-white"
        >
          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-xl mb-4">
                <Target className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Our Mission</h3>
              <p className="text-sm sm:text-base text-green-50">
                To create a cleaner, more sustainable Sydney through community engagement and innovative technology
              </p>
            </div>
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-xl mb-4">
                <Heart className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Our Values</h3>
              <p className="text-sm sm:text-base text-green-50">
                Community-first approach, transparency, and environmental stewardship guide everything we do
              </p>
            </div>
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-xl mb-4">
                <Recycle className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Our Impact</h3>
              <p className="text-sm sm:text-base text-green-50">
                Empowering citizens to make a real difference in keeping Sydney beautiful for future generations
              </p>
            </div>
          </div>
        </motion.section>

        {/* Team Members Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 sm:mb-16"
        >
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Meet Our Team
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
              Dedicated developers working together to build innovative solutions for a cleaner Sydney
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.email}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8 hover:shadow-lg transition-all hover:border-green-300 group"
              >
                {/* Avatar */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white text-2xl sm:text-3xl font-bold shadow-lg group-hover:scale-110 transition-transform">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>

                {/* Info */}
                <div className="text-center">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 text-green-700 rounded-full text-xs sm:text-sm font-medium mb-4">
                    <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    {member.role}
                  </div>
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center justify-center gap-2 text-sm sm:text-base text-gray-600 hover:text-green-600 transition-colors break-all active:scale-95 min-h-[44px] px-2"
                  >
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    <span className="break-words text-xs sm:text-sm">{member.email}</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Project Info Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8 lg:p-10"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
            About This Project
          </h2>
          <div className="space-y-4 sm:space-y-6 text-sm sm:text-base text-gray-700 max-w-4xl mx-auto">
            <p className="leading-relaxed">
              The <strong className="text-green-600">Smart Rubbish Detection System</strong> is a comprehensive web application designed to empower Sydney residents to actively participate in keeping our city clean. Through innovative technology and community engagement, we're building a transparent and efficient platform for reporting and managing rubbish issues.
            </p>
            <p className="leading-relaxed">
              Our system features real-time GPS detection, interactive heat maps showcasing rubbish hotspots across iconic Sydney locations, and a rewarding eco-points system that converts community efforts into real-world credits. With dual authentication for both community members and administrators, we ensure accountability and transparency at every step.
            </p>
            <p className="leading-relaxed">
              Built with modern web technologies including React, TypeScript, and Leaflet maps, this platform demonstrates our commitment to creating sustainable, user-friendly solutions that make a real difference in our community. Every report submitted helps create a cleaner, greener Sydney for everyone.
            </p>
            <div className="border-t border-gray-200 pt-6 mt-8">
              <p className="text-center text-sm sm:text-base text-gray-600">
                <strong>Technologies Used:</strong> React, TypeScript, Tailwind CSS, Leaflet Maps, React Router, Motion (Framer Motion), LocalStorage API
              </p>
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 sm:mt-16 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 sm:p-8 text-center"
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            Get In Touch
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Have questions or feedback about our platform? We'd love to hear from you!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <a
              href={`mailto:${teamMembers[0].email}`}
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-all shadow-lg hover:shadow-xl active:scale-95 min-h-[48px]"
            >
              <Mail className="w-5 h-5" />
              <span className="text-sm sm:text-base">Contact Team</span>
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
};
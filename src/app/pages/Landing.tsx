import { Link } from 'react-router';
import { Header } from '../components/Header';
import { MapPin, Award, TrendingUp, Users, FileCheck, Zap, ArrowRight, Leaf, Recycle, DollarSign } from 'lucide-react';
import { getUserStats } from '../utils/storage';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { motion } from 'motion/react';

export const Landing = () => {
  const stats = getUserStats();
  
  return (
    <div className="min-h-screen bg-white">
      <Header variant="landing" />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-500 to-emerald-600 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 relative">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6">
                <Leaf className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                <span className="text-white font-medium text-xs sm:text-sm lg:text-base">Sydney's #1 Community Cleanup Platform</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Together We Keep{' '}
                <span className="text-green-200">Sydney Beautiful</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-green-50 mb-6 sm:mb-8 leading-relaxed">
                Join thousands of community members reporting rubbish, earning rewards, and making a real difference in our city's cleanliness.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  to="/auth?tab=register"
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-green-600 rounded-lg text-base sm:text-lg font-medium hover:bg-green-50 transition-all hover:shadow-xl inline-flex items-center justify-center shadow-lg active:scale-95 min-h-[48px]"
                >
                  <span className="hidden sm:inline">Join as Community Member</span>
                  <span className="sm:hidden">Join Community</span>
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/auth"
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-green-700 text-white rounded-lg text-base sm:text-lg font-medium border-2 border-white/30 hover:bg-green-800 transition-all inline-flex items-center justify-center backdrop-blur-sm active:scale-95 min-h-[48px]"
                >
                  Sign In
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative order-first lg:order-last"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-emerald-400 rounded-2xl blur-2xl opacity-30" />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1657622884558-cc7525f93638?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzeWRuZXklMjBvcGVyYSUyMGhvdXNlJTIwaGFyYm9yfGVufDF8fHx8MTc3MjExMTU0Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Sydney Harbour"
                className="rounded-2xl shadow-2xl relative border-4 border-white/20 w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-green-100 rounded-full mb-4">
                <Users className="w-7 h-7 sm:w-8 sm:h-8 text-green-600" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">{stats.totalMembers.toLocaleString()}+</div>
              <div className="text-sm sm:text-base text-gray-600">Community Members</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-green-100 rounded-full mb-4">
                <FileCheck className="w-7 h-7 sm:w-8 sm:h-8 text-green-600" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">{stats.totalReports.toLocaleString()}+</div>
              <div className="text-sm sm:text-base text-gray-600">Rubbish Reports</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-green-100 rounded-full mb-4">
                <TrendingUp className="w-7 h-7 sm:w-8 sm:h-8 text-green-600" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">{stats.satisfaction}%</div>
              <div className="text-sm sm:text-base text-gray-600">Satisfaction Rate</div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to make a real impact in your community
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">GPS Tracking</h3>
              <p className="text-gray-600">
                Automatically detect your location or manually pin exact coordinates for precise reporting.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Eco-Points Rewards</h3>
              <p className="text-gray-600">
                Earn points for every report and convert them to real AUD credits! Every 100 eco-points = $1 AUD.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Real-Time Analytics</h3>
              <p className="text-gray-600">
                View heat maps and insights showing rubbish hotspots across Sydney in real-time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get started in three simple steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sign Up</h3>
              <p className="text-gray-600">
                Create your free account in seconds and join our growing community of eco-warriors.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Report Rubbish</h3>
              <p className="text-gray-600">
                Spot rubbish? Take a photo, add location details, and submit your report instantly.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Earn Rewards</h3>
              <p className="text-gray-600">
                Collect eco-points, track your impact, and help make Sydney cleaner every day.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Join thousands of Sydney residents working together for a cleaner, greener future.
            </p>
            <Link
              to="/auth?tab=register"
              className="inline-flex items-center px-8 py-4 bg-white text-green-600 rounded-lg text-lg font-medium hover:bg-gray-50 transition-all shadow-lg"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                  <Recycle className="w-5 h-5 text-white" />
                </div>
                <span className="font-semibold text-white">Smart Rubbish</span>
              </div>
              <p className="text-sm">
                Making Sydney cleaner, one report at a time.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/auth" className="hover:text-white">Features</Link></li>
                <li><Link to="/auth" className="hover:text-white">Pricing</Link></li>
                <li><Link to="/auth" className="hover:text-white">FAQ</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about-us" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/about-us" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link to="/awareness" className="hover:text-white transition-colors">Awareness</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link to="/" className="hover:text-white">Terms of Service</Link></li>
                <li><Link to="/" className="hover:text-white">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2026 Smart Rubbish Detection System. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
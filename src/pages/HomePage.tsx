import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Calculator, BarChart2, Leaf, Users, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

const HomePage: React.FC = () => {
  const { isLoggedIn } = useApp();
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 300, damping: 24 }
    }
  };

  const handleGetStarted = () => {
    if (isLoggedIn) {
      navigate('/calculator');
    } else {
      navigate('/register');
    }
  };

  const handleLearnMore = () => {
    navigate('/resources');
  };

  return (
    <div className="container mx-auto pb-12 relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-8 sm:py-12 md:py-16 lg:py-24 rounded-3xl bg-gradient-to-r from-green-50 to-blue-50">
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute left-0 right-0 bottom-0 w-full text-green-100 opacity-30" 
            viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
              className="fill-current"></path>
          </svg>
          <svg className="absolute left-0 right-0 bottom-0 w-full text-blue-100 opacity-20 translate-y-1/4" 
            viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
              className="fill-current"></path>
          </svg>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 md:px-8 lg:px-12 max-w-4xl mx-auto">
          <motion.h1 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 sm:mb-6 text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Track & Reduce Your <span className="text-primary">Carbon Footprint</span>
          </motion.h1>
          
          <motion.p 
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 mb-4 sm:mb-6 md:mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Join thousands of others making a real impact on the environment with AI-powered insights, personalized recommendations, and a supportive community.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {isLoggedIn ? (
              <>
                <Link to="/dashboard" className="btn btn-primary px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-sm sm:text-base">
                  Go to Dashboard
                </Link>
                <Link to="/calculator" className="btn btn-outline px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-sm sm:text-base">
                  Calculate Footprint
                </Link>
              </>
            ) : (
              <>
                <button 
                  onClick={handleGetStarted}
                  className="btn btn-primary px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-sm sm:text-base w-full sm:w-auto"
                >
                  Get Started
                </button>
                <button 
                  onClick={handleLearnMore}
                  className="btn btn-outline px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-sm sm:text-base w-full sm:w-auto"
                >
                  Learn More
                </button>
              </>
            )}
          </motion.div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-gray-900">How Carbon Compass Works</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-800 max-w-2xl mx-auto px-4">
            Our comprehensive platform helps you understand, track, and reduce your environmental impact through a variety of powerful features.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <FeatureCard 
            icon={<Calculator className="w-6 sm:w-8 h-6 sm:h-8 text-primary" />}
            title="Calculate"
            description="Measure your carbon footprint from transport, energy usage, diet, and more with our accurate calculator."
            link="/calculator"
            variants={itemVariants}
          />
          
          <FeatureCard 
            icon={<BarChart2 className="w-6 sm:w-8 h-6 sm:h-8 text-primary" />}
            title="Track"
            description="Monitor your progress over time with detailed analytics and visualizations of your carbon reduction journey."
            link="/dashboard"
            variants={itemVariants}
          />
          
          <FeatureCard 
            icon={<Leaf className="w-6 sm:w-8 h-6 sm:h-8 text-primary" />}
            title="Offset"
            description="Neutralize your unavoidable emissions by supporting verified carbon offset projects around the world."
            link="/offset"
            variants={itemVariants}
          />
          
          <FeatureCard 
            icon={<Users className="w-6 sm:w-8 h-6 sm:h-8 text-primary" />}
            title="Connect"
            description="Join a community of like-minded individuals, participate in challenges, and share your sustainability journey."
            link="/community"
            variants={itemVariants}
          />
        </motion.div>
      </section>
      
      {/* AI Recommendations Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-r from-blue-50 to-green-50 rounded-3xl mx-4">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 md:gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-gray-900">
                  AI-Powered <span className="text-primary">Personalized Recommendations</span>
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-800 mb-4 sm:mb-6">
                  Our advanced AI engine analyzes your carbon footprint data to provide tailored suggestions that make the biggest impact based on your lifestyle and habits.
                </p>
                
                <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                  <RecommendationItem 
                    title="Commute Optimization"
                    description="Recommendations for reducing transportation emissions based on your travel patterns."
                  />
                  <RecommendationItem 
                    title="Energy Efficiency"
                    description="Smart suggestions to lower your home energy consumption and utility bills."
                  />
                  <RecommendationItem 
                    title="Dietary Choices"
                    description="Personalized food choices that reduce your carbon footprint while meeting your preferences."
                  />
                </div>
                
                <button 
                  onClick={handleGetStarted}
                  className="btn btn-primary inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base"
                >
                  Get Started <ArrowRight size={16} className="ml-2" />
                </button>
              </motion.div>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <motion.div
                className="relative rounded-xl overflow-hidden shadow-xl"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img 
                  src="https://images.pexels.com/photos/4173137/pexels-photo-4173137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="AI Recommendations Dashboard" 
                  className="w-full h-48 sm:h-64 md:h-72 lg:h-80 object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-3 sm:p-4 md:p-6 text-white">
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-1 sm:mb-2">Your Personalized Impact Plan</h3>
                    <p className="text-xs sm:text-sm md:text-base opacity-90">
                      Smart suggestions tailored to your lifestyle that can reduce your carbon footprint by up to 30%.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Community and Gamification */}
      <section className="py-8 sm:py-12 md:py-16 px-4">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-gray-900">Join Our Growing Community</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-800 max-w-2xl mx-auto">
            Connect with like-minded individuals, participate in challenges, and earn rewards for your sustainable actions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <motion.div 
            className="card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Community Challenges" 
              className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-lg mb-2 sm:mb-4"
            />
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-2 text-gray-900">Group Challenges</h3>
            <p className="text-sm sm:text-base text-gray-800 mb-2 sm:mb-4">
              Participate in team challenges with friends, family, or coworkers to multiply your environmental impact.
            </p>
            <Link to="/challenges" className="text-primary font-medium flex items-center hover:underline text-sm sm:text-base">
              Explore Challenges <ArrowRight size={14} sm:size={16} className="ml-1" />
            </Link>
          </motion.div>
          
          <motion.div 
            className="card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.pexels.com/photos/2277784/pexels-photo-2277784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Green Points" 
              className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-lg mb-2 sm:mb-4"
            />
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-2 text-gray-900">Green Points & Rewards</h3>
            <p className="text-sm sm:text-base text-gray-800 mb-2 sm:mb-4">
              Earn points for sustainable actions and redeem them for eco-friendly rewards or donate to environmental causes.
            </p>
            <Link to="/rewards" className="text-primary font-medium flex items-center hover:underline text-sm sm:text-base">
              View Rewards <ArrowRight size={14} sm:size={16} className="ml-1" />
            </Link>
          </motion.div>
          
          <motion.div 
            className="card sm:col-span-2 lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Community Feed" 
              className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-lg mb-2 sm:mb-4"
            />
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-2 text-gray-900">Social Impact Feed</h3>
            <p className="text-sm sm:text-base text-gray-800 mb-2 sm:mb-4">
              Share your sustainability journey, get inspired by others, and celebrate collective achievements.
            </p>
            <Link to="/community" className="text-primary font-medium flex items-center hover:underline text-sm sm:text-base">
              Join Community <ArrowRight size={14} sm:size={16} className="ml-1" />
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-8 sm:py-12 md:py-16 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 text-gray-900">
            Ready to Reduce Your Carbon Footprint?
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 mb-4 sm:mb-6 md:mb-8">
            Start your journey to a more sustainable lifestyle today.
          </p>
          {isLoggedIn ? (
            <Link to="/dashboard" className="btn btn-primary px-6 sm:px-8 py-3 text-base sm:text-lg">
              Go to Dashboard
            </Link>
          ) : (
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link to="/register" className="btn btn-primary px-6 sm:px-8 py-3 text-base sm:text-lg">
                Get Started
              </Link>
              <Link to="/login" className="btn btn-outline px-6 sm:px-8 py-3 text-base sm:text-lg">
                Sign In
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  variants: any;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, link, variants }) => {
  return (
    <motion.div 
      className="card flex flex-col items-center text-center p-4 sm:p-6 h-full"
      variants={variants}
    >
      <div className="mb-2 sm:mb-4 p-2 sm:p-3 rounded-full bg-primary-light/20">
        {icon}
      </div>
      <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-sm sm:text-base text-gray-800 mb-3 sm:mb-4 flex-grow">{description}</p>
      <Link 
        to={link} 
        className="mt-auto text-primary font-medium flex items-center hover:underline text-sm sm:text-base"
      >
        Learn more <ArrowRight size={14} className="ml-1" />
      </Link>
    </motion.div>
  );
};

interface RecommendationItemProps {
  title: string;
  description: string;
}

const RecommendationItem: React.FC<RecommendationItemProps> = ({ title, description }) => {
  return (
    <div className="flex items-start text-left">
      <div className="flex-shrink-0 mt-1">
        <div className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 rounded-full bg-primary-light/30 flex items-center justify-center">
          <div className="w-1.5 sm:w-2 md:w-2.5 h-1.5 sm:h-2 md:h-2.5 rounded-full bg-primary"></div>
        </div>
      </div>
      <div className="ml-2 sm:ml-3">
        <h4 className="font-medium text-sm sm:text-base text-gray-900">{title}</h4>
        <p className="text-xs sm:text-sm md:text-base text-gray-800">{description}</p>
      </div>
    </div>
  );
};

export default HomePage;
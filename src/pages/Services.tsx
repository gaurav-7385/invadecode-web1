import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Target, Zap, BarChart3, Cog, Rocket, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI-Powered Marketing Intelligence',
      description: 'Transform your marketing with intelligent systems that learn, adapt, and optimize campaigns in real-time.',
      features: [
        'Predictive audience targeting',
        'Automated A/B testing',
        'Real-time campaign optimization',
        'Behavioral pattern analysis',
      ],
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Target,
      title: 'Custom IT Solutions',
      description: 'Tailored technology solutions that integrate seamlessly with your existing systems and scale with your growth.',
      features: [
        'Custom software development',
        'API integrations',
        'Cloud infrastructure setup',
        'System architecture design',
      ],
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: BarChart3,
      title: 'Data Intelligence & Analytics',
      description: 'Turn your data into actionable insights with comprehensive tracking, analysis, and reporting systems.',
      features: [
        'Custom dashboard creation',
        'Advanced analytics setup',
        'Performance tracking',
        'ROI measurement tools',
      ],
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Cog,
      title: 'Marketing Automation',
      description: 'Streamline your marketing workflows with intelligent automation that nurtures leads and drives conversions.',
      features: [
        'Email marketing automation',
        'Lead scoring systems',
        'Customer journey mapping',
        'Multi-channel orchestration',
      ],
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Rocket,
      title: 'Digital Transformation',
      description: 'Complete digital overhaul of your marketing operations with cutting-edge technology and strategic planning.',
      features: [
        'Technology stack optimization',
        'Process automation',
        'Team training & support',
        'Change management',
      ],
      color: 'from-red-500 to-red-600',
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Maximize your marketing ROI with continuous optimization and performance enhancement strategies.',
      features: [
        'Conversion rate optimization',
        'Campaign performance tuning',
        'Cost reduction strategies',
        'Growth acceleration',
      ],
      color: 'from-teal-500 to-teal-600',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We deep-dive into your current systems, challenges, and goals to create a comprehensive strategy.',
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'Develop a customized roadmap with clear milestones, timelines, and success metrics.',
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Execute the plan with precision, keeping you informed every step of the way.',
    },
    {
      step: '04',
      title: 'Optimization & Growth',
      description: 'Continuously monitor, optimize, and scale your systems for maximum performance.',
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <h1 className="text-5xl md:text-6xl font-bold">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive solutions that combine cutting-edge AI technology with 
              strategic marketing expertise to drive measurable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl card-hover group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery and measurable results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center relative"
              >
                <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {step.description}
                </p>
                
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full">
                    <ArrowRight className="w-6 h-6 text-primary-400 mx-auto" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold">
                Why Choose <span className="gradient-text">InvadeCode</span>?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                We don't just deliver projects—we build partnerships that drive long-term success.
              </p>
              
              <div className="space-y-4">
                {[
                  'Expert team with 10+ years of experience',
                  'AI-first approach to all solutions',
                  'Proven track record of 3x ROI improvement',
                  '24/7 support and maintenance',
                  'Transparent pricing and communication',
                  'Scalable solutions that grow with you',
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Ready to Get Started?</h3>
                <p className="text-primary-100 mb-8 leading-relaxed">
                  Let's discuss how we can transform your marketing with intelligent solutions 
                  that deliver real results.
                </p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors group"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

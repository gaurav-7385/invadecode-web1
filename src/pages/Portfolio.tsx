import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-commerce AI Optimization',
      category: 'ai-marketing',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      description: 'Implemented AI-driven product recommendations and dynamic pricing for a major e-commerce platform.',
      longDescription: 'This comprehensive project involved building a machine learning system that analyzes customer behavior, purchase history, and market trends to provide personalized product recommendations. The system also includes dynamic pricing algorithms that adjust prices in real-time based on demand, competition, and inventory levels.',
      technologies: ['React', 'Python', 'TensorFlow', 'AWS', 'PostgreSQL'],
      results: ['45% increase in conversion rate', '30% boost in average order value', '25% reduction in cart abandonment'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'Healthcare Analytics Dashboard',
      category: 'data-intelligence',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
      description: 'Built a comprehensive analytics platform for healthcare providers to track patient outcomes and optimize operations.',
      longDescription: 'A sophisticated dashboard that aggregates data from multiple healthcare systems to provide real-time insights into patient care, resource utilization, and operational efficiency. The platform includes predictive analytics for patient risk assessment and automated reporting for regulatory compliance.',
      technologies: ['Vue.js', 'D3.js', 'Node.js', 'MongoDB', 'Docker'],
      results: ['60% reduction in report generation time', '35% improvement in patient outcomes', '20% cost savings'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 3,
      title: 'SaaS Marketing Automation',
      category: 'automation',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      description: 'Developed a complete marketing automation suite for a B2B SaaS company with lead scoring and nurturing.',
      longDescription: 'A full-featured marketing automation platform that includes email marketing, lead scoring, customer journey mapping, and multi-channel campaign management. The system integrates with popular CRM platforms and provides detailed analytics on campaign performance and ROI.',
      technologies: ['Angular', 'Spring Boot', 'Redis', 'Elasticsearch', 'Kubernetes'],
      results: ['200% increase in qualified leads', '50% reduction in sales cycle', '80% improvement in lead quality'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 4,
      title: 'Financial Trading Platform',
      category: 'custom-development',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop',
      description: 'Created a real-time trading platform with advanced analytics and risk management features.',
      longDescription: 'A high-performance trading platform that handles millions of transactions per day with real-time market data processing, advanced charting capabilities, and sophisticated risk management algorithms. The platform includes automated trading strategies and comprehensive portfolio management tools.',
      technologies: ['React', 'WebSocket', 'Go', 'TimescaleDB', 'Apache Kafka'],
      results: ['99.9% uptime achieved', '50ms average latency', '40% increase in trading volume'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 5,
      title: 'Smart City IoT Dashboard',
      category: 'data-intelligence',
      image: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=600&h=400&fit=crop',
      description: 'Built an IoT data visualization platform for smart city infrastructure monitoring and management.',
      longDescription: 'An intelligent dashboard that collects and visualizes data from thousands of IoT sensors across urban infrastructure including traffic lights, air quality monitors, and energy systems. The platform provides predictive maintenance alerts and optimization recommendations.',
      technologies: ['Next.js', 'InfluxDB', 'Grafana', 'MQTT', 'Azure IoT'],
      results: ['30% reduction in maintenance costs', '25% improvement in energy efficiency', '15% decrease in traffic congestion'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 6,
      title: 'Restaurant Chain Optimization',
      category: 'ai-marketing',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop',
      description: 'Implemented AI-powered demand forecasting and inventory management for a restaurant chain.',
      longDescription: 'A comprehensive solution that uses machine learning to predict customer demand, optimize inventory levels, and reduce food waste. The system analyzes historical sales data, weather patterns, local events, and seasonal trends to make accurate forecasts.',
      technologies: ['Python', 'Scikit-learn', 'FastAPI', 'PostgreSQL', 'Tableau'],
      results: ['35% reduction in food waste', '20% increase in profit margins', '90% forecast accuracy'],
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'ai-marketing', name: 'AI Marketing' },
    { id: 'data-intelligence', name: 'Data Intelligence' },
    { id: 'automation', name: 'Automation' },
    { id: 'custom-development', name: 'Custom Development' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

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
              Our <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Explore our successful projects and see how we've helped businesses 
              transform their operations with intelligent solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden card-hover cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block px-3 py-1 bg-primary-600 text-white text-xs font-medium rounded-full mb-2">
                        {categories.find(c => c.id === project.category)?.name}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-8">
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full mb-4">
                    {categories.find(c => c.id === selectedProject.category)?.name}
                  </span>
                  <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech: string) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Key Results</h3>
                    <ul className="space-y-2">
                      {selectedProject.results.map((result: string, index: number) => (
                        <li key={index} className="text-gray-600 dark:text-gray-400 text-sm">
                          • {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={selectedProject.liveUrl}
                    className="inline-flex items-center btn-primary"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live
                  </a>
                  <a
                    href={selectedProject.githubUrl}
                    className="inline-flex items-center btn-secondary"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;

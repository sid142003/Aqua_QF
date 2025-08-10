import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  LocalDrink, 
  Visibility, 
  Campaign, 
  Star, 
  AttachMoney,
  Share,
  Brush,
  LocalShipping,
  ArrowForward,
  Phone,
  Email,
  LocationOn,
  CheckCircle,
  TrendingUp,
  Groups,
  AutoAwesome
} from '@mui/icons-material';
import { useEffect, useState } from 'react';
import bottleImage from './image.png';
import logoImage from './logo.png';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Animated Background Particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 10 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl z-50 border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-blue-600 flex items-center gap-3"
            >
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-12 h-12"
              >
                <img 
                  src={logoImage} 
                  alt="AquaBrand Logo" 
                  className="w-full h-full object-contain"
                  style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
                />
              </motion.div>
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                AquaBrand
              </span>
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'The Idea', 'Benefits', 'How It Works'].map((item, index) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="text-gray-700 hover:text-blue-600 transition-colors relative group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item}
                  <motion.div
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"
                    whileHover={{ width: '100%' }}
                  />
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-indigo-900/80 to-purple-900/85"></div>
        </div>
        
        {/* Subtle Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-white/10 rounded-full"
              animate={{
                x: [0, 50, 0],
                y: [0, -50, 0],
                scale: [1, 1.3, 1],
                opacity: [0.1, 0.4, 0.1],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                delay: i * 1,
              }}
              style={{
                left: `${25 + i * 20}%`,
                top: `${40 + i * 15}%`,
              }}
            />
          ))}
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="pt-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-6 py-3 text-blue-100 mb-8 border border-white/20">
                <AutoAwesome className="text-yellow-300" />
                <span className="font-medium">Transform Your Brand Today</span>
              </div>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Turn Every Sip Into{' '}
              <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                Brand Awareness
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Custom water bottle labels that put your brand in everyone's hands. 
              <span className="text-cyan-200 font-semibold"> Every sip becomes a marketing opportunity.</span>
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('how-it-works')}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-blue-500/25 flex items-center gap-3 min-w-[180px] justify-center"
              >
                <span>Get Started</span>
                <ArrowForward className="text-xl" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('benefits')}
                className="bg-white/15 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold border border-white/30 hover:bg-white/25 transition-all duration-300 min-w-[180px] justify-center"
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {[
                { number: "500+", label: "Happy Clients" },
                { number: "10K+", label: "Bottles Delivered" },
                { number: "99%", label: "Satisfaction Rate" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-blue-200 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
        
              
      </section>

      {/* The Idea Section */}
      <section id="the-idea" className="py-24 bg-gradient-to-br from-white via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 rounded-full px-6 py-3 text-sm font-semibold mb-6"
            >
              <Star className="text-yellow-500" />
              <span>Our Vision</span>
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              The <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Idea</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We transform ordinary water bottles into powerful marketing tools that keep your brand visible wherever your audience goes.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                We design and print custom water bottle labels featuring your brand's logo, message, or design. 
                Perfect for events, offices, conferences, and giveaways. Transform ordinary water bottles into 
                powerful marketing tools that keep your brand visible wherever your audience goes.
              </p>
              <div className="space-y-4">
                {[
                  "Professional design services with unlimited revisions",
                  "High-quality printing with premium materials",
                  "Fast turnaround times - get your bottles in 5-7 days"
                ].map((feature, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                    whileHover={{ x: 10, scale: 1.02 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="text-white text-xl" />
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                <img 
                  src={bottleImage}
                  alt="Custom branded water bottles"
                  className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-3xl font-bold mb-2">Custom Branded Bottles</h3>
                  <p className="text-blue-100 text-lg">Professional quality, lasting impression</p>
                </div>
                <motion.div
                  className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-3"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <img 
                    src={logoImage} 
                    alt="AquaBrand Logo" 
                    className="w-8 h-8 object-contain"
                    style={{ filter: 'brightness(0) invert(1)' }}
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 rounded-full px-6 py-3 text-sm font-semibold mb-6"
            >
              <TrendingUp className="text-green-500" />
              <span>Why Choose Us</span>
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Why Choose <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Custom Labels?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your water bottles into powerful marketing tools that work 24/7
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Visibility className="text-4xl" />,
                title: "Brand Visibility",
                description: "Your brand in everyone's hands at events, meetings, and parties.",
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: <Campaign className="text-4xl" />,
                title: "Free Marketing",
                description: "People carry your bottles everywhere, turning them into walking billboards.",
                image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: <Star className="text-4xl" />,
                title: "Memorable Impression",
                description: "Stand out from competitors with a personalized touch.",
                image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                color: "from-yellow-500 to-orange-500"
              },
              {
                icon: <AttachMoney className="text-4xl" />,
                title: "Cost-Effective",
                description: "Low investment for high brand exposure.",
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                color: "from-green-500 to-emerald-500"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -15, scale: 1.03 }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={benefit.image}
                    alt={benefit.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-${benefit.color} opacity-20`}></div>
                </div>
                <div className="p-6 relative">
                  <div className={`absolute -top-6 left-6 w-12 h-12 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {benefit.icon}
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 rounded-full px-6 py-3 text-sm font-semibold mb-6"
            >
              <Groups className="text-blue-500" />
              <span>Simple Process</span>
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              How It <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Works</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting your custom branded water bottles is simple and straightforward
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                icon: <Share className="text-4xl" />,
                title: "Share your logo/design",
                description: "Send us your brand assets and requirements",
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                color: "from-blue-500 to-cyan-500"
              },
              {
                step: "2",
                icon: <Brush className="text-4xl" />,
                title: "We design your label",
                description: "Our team creates the perfect design for your brand",
                image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                color: "from-purple-500 to-pink-500"
              },
              {
                step: "3",
                icon: <LocalShipping className="text-4xl" />,
                title: "We deliver your branded bottles",
                description: "Get your custom bottles delivered to your door",
                image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                color: "from-green-500 to-emerald-500"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                <motion.div 
                  className={`w-20 h-20 bg-gradient-to-r ${step.color} text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 relative z-10 shadow-xl`}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {step.step}
                </motion.div>
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <div className={`text-4xl mb-4 flex justify-center text-gradient bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                {index < 2 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-1 bg-gradient-to-r from-blue-200 to-indigo-200 transform translate-x-4 rounded-full">
                    <motion.div 
                      className={`w-full h-full bg-gradient-to-r ${step.color} rounded-full`}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-700 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        ></div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-white/30 rounded-full"
              animate={{
                x: [0, 50, 0],
                y: [0, -50, 0],
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 6 + i * 1,
                repeat: Infinity,
                delay: i * 0.3,
              }}
              style={{
                left: `${10 + i * 12}%`,
                top: `${20 + i * 8}%`,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-white text-sm font-semibold mb-6"
            >
              <AutoAwesome className="text-yellow-300" />
              <span>Ready to Get Started?</span>
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Let's Make Your Brand{' '}
              <span className="bg-gradient-to-r from-cyan-300 to-yellow-300 bg-clip-text text-transparent">
                Unforgettable
              </span>
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Ready to turn every sip into brand awareness? Contact us today to get started with your custom branded water bottles.
            </p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 255, 255, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-10 py-5 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-white/25 flex items-center gap-3"
              >
                <span>Contact Us</span>
                <ArrowForward className="animate-pulse" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-full text-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                Get Quote
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <motion.div 
                className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-10 h-10"
                >
                  <img 
                    src={logoImage} 
                    alt="AquaBrand Logo" 
                    className="w-full h-full object-contain"
                    style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
                  />
                </motion.div>
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  AquaBrand
                </span>
              </motion.div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Custom branded water bottle labels for companies that want to make a lasting impression. 
                Transform every sip into brand awareness.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Contact Info</h3>
              <div className="space-y-4 text-gray-400">
                <motion.div 
                  className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <Phone className="text-blue-400" />
                  <span>+1 (555) 123-4567</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <Email className="text-blue-400" />
                  <span>hello@aquabrand.com</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <LocationOn className="text-blue-400" />
                  <span>123 Brand Street, Marketing City</span>
                </motion.div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
              <div className="space-y-3">
                {['Home', 'The Idea', 'Benefits', 'How It Works'].map((item, index) => (
                  <motion.button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                    className="block text-gray-400 hover:text-white transition-colors duration-300 text-left"
                    whileHover={{ x: 5 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {item}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
          <motion.div 
            className="border-t border-gray-800 pt-8 mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-500">
              © 2024 AquaBrand. All rights reserved. | Made with ❤️ for your brand
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

export default App;

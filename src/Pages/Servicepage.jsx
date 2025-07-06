import React, { useState } from 'react';

const Servicepage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 1,
      icon: '🩸',
      title: 'Blood Donation Centers',
      description: 'State-of-the-art donation facilities with experienced medical staff ensuring safe and comfortable donation experiences.',
      features: [
        'Multiple convenient locations',
        'Walk-in and appointment options',
        'Professional medical screening',
        'Comfortable donation environment',
        'Post-donation refreshments'
      ],
      buttonText: 'Find Center',
      buttonAction: () => console.log('Find Center clicked')
    },
    {
      id: 2,
      icon: '🚐',
      title: 'Mobile Blood Drives',
      description: 'Bringing donation opportunities directly to your community, workplace, or organization for maximum convenience.',
      features: [
        'Fully equipped mobile units',
        'Corporate partnerships',
        'Community event hosting',
        'School and university visits',
        'Flexible scheduling'
      ],
      buttonText: 'Schedule Drive',
      buttonAction: () => console.log('Schedule Drive clicked')
    },
    {
      id: 3,
      icon: '⏰',
      title: 'Emergency Blood Supply',
      description: '24/7 emergency blood supply services for hospitals and medical facilities during critical situations.',
      features: [
        'Rapid response team',
        'Hospital partnerships',
        'Critical inventory management',
        'Emergency donor alerts',
        'Same-day delivery'
      ],
      buttonText: 'Emergency Contact',
      buttonAction: () => console.log('Emergency Contact clicked')
    },
    {
      id: 4,
      icon: '🔬',
      title: 'Blood Testing & Processing',
      description: 'Comprehensive testing and processing services ensuring the highest safety standards for all blood products.',
      features: [
        'Advanced laboratory testing',
        'Disease screening protocols',
        'Blood type verification',
        'Component separation',
        'Quality assurance'
      ],
      buttonText: 'Learn More',
      buttonAction: () => console.log('Learn More clicked')
    },
    {
      id: 5,
      icon: '📱',
      title: 'Donor Management System',
      description: 'Digital platform for managing donations, tracking eligibility, and connecting with our donor community.',
      features: [
        'Online appointment booking',
        'Donation history tracking',
        'Eligibility reminders',
        'Achievement badges',
        'Community features'
      ],
      buttonText: 'Join Platform',
      buttonAction: () => console.log('Join Platform clicked')
    },
    {
      id: 6,
      icon: '🎓',
      title: 'Education & Awareness',
      description: 'Community education programs promoting blood donation awareness and addressing common myths and concerns.',
      features: [
        'Educational workshops',
        'School programs',
        'Awareness campaigns',
        'First-time donor support',
        'Health seminars'
      ],
      buttonText: 'Get Involved',
      buttonAction: () => console.log('Get Involved clicked')
    }
  ];

  const handleEmergencyCall = () => {
    console.log('Emergency hotline called: 1-800-LIFEDROP');
    // In a real app, this could trigger a phone call
  };

  return (
    <div className="min-h-screen mt-20 bg-gradient-to-br from-red-300 via-orange-200 to-pink-500">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Section Header */}
        <div className="text-center mb-16 text-white">
          <h2 className="text-5xl font-bold mb-6 text-shadow-lg">Our Services</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Comprehensive blood donation services connecting donors with those in need. 
            Every drop counts in saving lives.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              className={`bg-white bg-opacity-95 backdrop-blur-lg rounded-2xl p-8 shadow-xl transition-all duration-300 hover:shadow-2xl relative overflow-hidden ${
                hoveredCard === service.id ? 'transform -translate-y-2' : ''
              }`}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Top accent bar */}
              <div 
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-red-600 transition-transform duration-300 ${
                  hoveredCard === service.id ? 'transform translate-x-0' : 'transform -translate-x-full'
                }`}
              />

              {/* Service Icon */}
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <span className="text-3xl">{service.icon}</span>
              </div>

              {/* Service Content */}
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>

              {/* Service Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <span className="text-green-500 font-bold mr-3 mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={service.buttonAction}
                className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-3 px-6 rounded-full font-semibold hover:from-red-600 hover:to-red-700 transform hover:-translate-y-1 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                {service.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Emergency Section */}
        <div className="bg-white bg-opacity-95 backdrop-blur-lg rounded-2xl p-10 text-center shadow-xl border-4 border-red-500 animate-pulse">
          <h3 className="text-3xl font-bold text-red-500 mb-6">
            🚨 Emergency Blood Needed
          </h3>
          <p className="text-gray-700 mb-8 text-lg">
            Critical blood shortages require immediate donor response. Your donation can save up to three lives.
          </p>
          
          <div className="bg-red-500 text-white p-6 rounded-2xl">
            <h4 className="text-2xl font-semibold mb-4">Emergency Hotline</h4>
            <button
              onClick={handleEmergencyCall}
              className="text-4xl font-bold tracking-wider hover:text-red-100 transition-colors duration-200"
            >
              1-800-LIFEDROP
            </button>
            <p className="mt-4 opacity-90">Available 24/7 for urgent blood requests</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .text-shadow-lg {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default Servicepage;
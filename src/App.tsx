import { useState } from 'react'
import { Code, Rocket, Zap, ArrowRight, CheckCircle, FileText, Palette, Smartphone, Globe } from 'lucide-react'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    {
      title: "Analyze Your Static Project",
      description: "Examine your HTML structure, CSS styles, and JavaScript functionality",
      icon: <FileText className="w-8 h-8" />,
      details: [
        "Identify reusable components (header, footer, navigation)",
        "Map out page structure and routing needs",
        "List external dependencies and libraries",
        "Note interactive elements and JavaScript functionality"
      ]
    },
    {
      title: "Set Up React Environment",
      description: "Create a new React project with modern tooling",
      icon: <Rocket className="w-8 h-8" />,
      details: [
        "Run: npx create-react-app my-project --template typescript",
        "Install additional dependencies (React Router, styled-components, etc.)",
        "Configure development environment and build tools",
        "Set up folder structure for components and assets"
      ]
    },
    {
      title: "Convert HTML to JSX",
      description: "Transform your static HTML into React components",
      icon: <Code className="w-8 h-8" />,
      details: [
        "Create component files for each major section",
        "Convert HTML attributes (class → className, for → htmlFor)",
        "Split large pages into smaller, reusable components",
        "Add proper TypeScript types and interfaces"
      ]
    },
    {
      title: "Migrate CSS Styles",
      description: "Adapt your styling approach for React",
      icon: <Palette className="w-8 h-8" />,
      details: [
        "Choose styling method (CSS Modules, Styled Components, Tailwind)",
        "Convert global styles to component-scoped styles",
        "Implement responsive design with modern CSS",
        "Add dark mode support with CSS variables"
      ]
    },
    {
      title: "Add Interactivity",
      description: "Enhance with React state management and hooks",
      icon: <Zap className="w-8 h-8" />,
      details: [
        "Convert jQuery/vanilla JS to React hooks",
        "Implement state management (useState, useContext)",
        "Add form handling and validation",
        "Create smooth animations and transitions"
      ]
    },
    {
      title: "Optimize & Deploy",
      description: "Polish your app and make it production-ready",
      icon: <Globe className="w-8 h-8" />,
      details: [
        "Optimize images and assets for web",
        "Implement code splitting and lazy loading",
        "Add SEO meta tags and accessibility features",
        "Deploy to Vercel, Netlify, or your preferred platform"
      ]
    }
  ]

  return (
    <div className={`min-h-screen transition-all duration-500 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Header */}
      <header className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b sticky top-0 z-50 backdrop-blur-sm bg-opacity-95`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Static to React
                </h1>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Transform your static website into a modern React app
                </p>
              </div>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-3 rounded-lg transition-all duration-300 ${
                darkMode 
                  ? 'bg-gray-700 hover:bg-gray-600 text-yellow-400' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Modernize Your Website
            </h2>
            <p className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Learn how to convert your static HTML/CSS website into a powerful, interactive React application with modern tooling and best practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('tutorial')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Start Tutorial
              </button>
              <button className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
                darkMode 
                  ? 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-600' 
                  : 'bg-white text-gray-900 hover:bg-gray-50 border border-gray-300'
              }`}>
                View Examples
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800/50' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Convert to React?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-12 h-12 text-yellow-500" />,
                title: "Better Performance",
                description: "Virtual DOM and optimized rendering for lightning-fast user experiences"
              },
              {
                icon: <Smartphone className="w-12 h-12 text-green-500" />,
                title: "Mobile-First",
                description: "Responsive design patterns and mobile optimization built-in"
              },
              {
                icon: <Code className="w-12 h-12 text-blue-500" />,
                title: "Maintainable Code",
                description: "Component-based architecture makes your code easier to maintain and scale"
              }
            ].map((benefit, index) => (
              <div key={index} className={`p-6 rounded-xl transition-all duration-300 hover:transform hover:scale-105 ${
                darkMode ? 'bg-gray-700/50 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'
              }`}>
                <div className="mb-4">{benefit.icon}</div>
                <h4 className="text-xl font-semibold mb-2">{benefit.title}</h4>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tutorial Steps */}
      <section id="tutorial" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Step-by-Step Tutorial
          </h3>
          
          {/* Step Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStep(index)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  currentStep === index
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : darkMode
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Step {index + 1}
              </button>
            ))}
          </div>

          {/* Current Step Content */}
          <div className={`rounded-2xl p-8 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl`}>
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mr-4">
                {steps[currentStep].icon}
              </div>
              <div>
                <h4 className="text-2xl font-bold">{steps[currentStep].title}</h4>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {steps[currentStep].description}
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              {steps[currentStep].details.map((detail, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{detail}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-between mt-8">
              <button
                onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                disabled={currentStep === 0}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  currentStep === 0
                    ? 'opacity-50 cursor-not-allowed'
                    : darkMode
                    ? 'bg-gray-700 text-white hover:bg-gray-600'
                    : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                }`}
              >
                Previous
              </button>
              <button
                onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
                disabled={currentStep === steps.length - 1}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                  currentStep === steps.length - 1
                    ? 'opacity-50 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                }`}
              >
                <span>Next</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Code Example Section */}
      <section className={`py-20 ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Before & After Example
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Before - Static HTML */}
            <div className={`rounded-xl p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
              <h4 className="text-xl font-semibold mb-4 text-red-500">❌ Static HTML</h4>
              <pre className={`text-sm overflow-x-auto p-4 rounded-lg ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
                <code>{`<div class="header">
  <nav class="navbar">
    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
  </nav>
</div>

<script>
  $('.menu-toggle').click(function() {
    $('.navbar').toggleClass('active');
  });
</script>`}</code>
              </pre>
            </div>

            {/* After - React Component */}
            <div className={`rounded-xl p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
              <h4 className="text-xl font-semibold mb-4 text-green-500">✅ React Component</h4>
              <pre className={`text-sm overflow-x-auto p-4 rounded-lg ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
                <code>{`import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <nav className="navbar">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="menu-toggle"
        >
          Menu
        </button>
        <ul className={\`nav-list \${isOpen ? 'active' : ''}\`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} border-t`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <h5 className="text-xl font-bold">Static to React Tutorial</h5>
          </div>
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
            Transform your static websites into modern React applications
          </p>
          <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

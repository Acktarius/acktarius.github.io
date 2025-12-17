import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const CONFIG = {
  siteName: 'Acktarius.CryptoAndMining',
  social: {
    twitter: 'https://twitter.com/xchaps',
  },
  navigation: [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
  ],
}

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="bg-gray-900/50 backdrop-blur-md border-b border-neon-cyan/30 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            to="/"
            className="text-2xl font-bold text-neon-blue text-glow-blue hover:text-neon-blue hover:text-glow-blue hover:scale-105 transition-all"
          >
            {CONFIG.siteName}
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {CONFIG.navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-lg transition-all ${
                  location.pathname === item.path
                    ? 'text-neon-orange text-glow-orange'
                    : 'text-neon-cyan hover:text-neon-fuchsia hover:text-glow-fuchsia'
                }`}
              >
                {item.name}
              </Link>
            ))}

            <a
              href={CONFIG.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon-cyan hover:text-neon-blue transition-colors"
              aria-label="Twitter"
            >
              <svg className="w-6 h-6" viewBox="0 0 512 512" fill="currentColor">
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
              </svg>
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-neon-cyan p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-900 border-t border-neon-cyan/30">
          <div className="px-4 py-4 space-y-3">
            {CONFIG.navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2 text-lg ${
                  location.pathname === item.path
                    ? 'text-neon-orange text-glow-orange'
                    : 'text-neon-cyan hover:text-neon-orange'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href={CONFIG.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 text-lg text-neon-cyan hover:text-neon-blue"
            >
              Twitter
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation

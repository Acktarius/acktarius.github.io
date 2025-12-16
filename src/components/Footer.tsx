import { Link } from 'react-router-dom'

const CONFIG = {
  social: {
    twitter: 'https://twitter.com/xchaps',
  },
  links: [{ name: 'The Team', path: '/about' }],
}

function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-neon-cyan/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-neon-orange text-xl mb-4 text-glow-orange">About</h4>
            {CONFIG.links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block text-gray-400 hover:text-neon-cyan transition-colors mb-2"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="md:text-center">
            <h4 className="text-neon-orange text-xl mb-4 text-glow-orange">Connect</h4>
            <a
              href={CONFIG.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-neon-cyan hover:text-neon-blue transition-colors"
              aria-label="Twitter"
            >
              <svg className="w-8 h-8" viewBox="0 0 512 512" fill="currentColor">
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
              </svg>
            </a>
          </div>

          <div className="md:text-right">
            <p className="text-gray-500 text-sm">
              © 2024 Acktarius.CryptoAndMining
              <br />
              All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

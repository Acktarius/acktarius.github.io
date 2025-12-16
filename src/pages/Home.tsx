import { Link } from 'react-router-dom'

const CONFIG = {
  title: 'Topics',
  sections: [
    {
      title: 'Crypto Mining',
      description: 'How to start your crypto journey',
      icon: '₡',
      link: '/crypto',
    },
  ],
}

function Home() {
  return (
    <div className="min-h-screen">
      <div className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 via-transparent to-neon-orange/10 animate-pulse" />

        <div className="relative max-w-7xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold text-center mb-20 text-neon-cyan text-glow-cyan animate-slide-up">
            {CONFIG.title}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {CONFIG.sections.map((section) => (
              <Link
                key={section.title}
                to={section.link}
                className="group relative p-8 bg-gray-900/50 backdrop-blur-sm border-2 border-neon-cyan/30 rounded-lg hover-glow hover:border-neon-orange/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="text-6xl text-neon-orange group-hover:text-neon-cyan transition-colors">
                    {section.icon}
                  </div>

                  <div className="flex-1 text-center md:text-right">
                    <h4 className="text-3xl font-bold text-gray-300 mb-3 group-hover:text-neon-orange transition-colors">
                      {section.title}
                    </h4>
                    <p className="text-lg text-gray-400 group-hover:text-gray-300 transition-colors">
                      {section.description}
                    </p>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/5 to-neon-orange/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-gradient-to-t from-gray-950/50 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block p-8 bg-gray-900/30 backdrop-blur-sm border border-neon-cyan/20 rounded-lg">
            <p className="text-xl text-gray-300 leading-relaxed">
              Welcome to my cryptocurrency and mining journey. Explore guides, tutorials, and
              insights from my experience in the crypto space.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

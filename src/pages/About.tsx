const CONFIG = {
  title: 'About',
  description: "I'm a cryptocurrency enthusiast and hobbyist miner, sharing some of my experience.",
}

function About() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 to-neon-orange/20 blur-3xl" />

          <div className="relative bg-gray-900/50 backdrop-blur-xl border border-neon-cyan/30 rounded-2xl p-12 box-glow-cyan">
            <h1 className="text-5xl md:text-6xl font-bold text-center mb-12 text-neon-cyan text-glow-cyan">
              {CONFIG.title}
            </h1>

            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-2xl text-gray-300 leading-relaxed text-center">
                {CONFIG.description}
              </p>
            </div>

            <div className="mt-12 pt-12 border-t border-neon-cyan/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-gray-950/50 rounded-lg border border-neon-orange/20">
                  <div className="text-4xl text-neon-orange mb-3">⛏️</div>
                  <h3 className="text-xl font-bold text-neon-cyan mb-2">Mining</h3>
                  <p className="text-gray-400">
                    Building and optimizing mining rigs for cryptocurrency
                  </p>
                </div>

                <div className="text-center p-6 bg-gray-950/50 rounded-lg border border-neon-cyan/20">
                  <div className="text-4xl text-neon-cyan mb-3">📚</div>
                  <h3 className="text-xl font-bold text-neon-orange mb-2">Learning</h3>
                  <p className="text-gray-400">
                    Continuously exploring blockchain technology and crypto ecosystems
                  </p>
                </div>

                <div className="text-center p-6 bg-gray-950/50 rounded-lg border border-neon-green/20">
                  <div className="text-4xl text-neon-green mb-3">🤝</div>
                  <h3 className="text-xl font-bold text-neon-cyan mb-2">Sharing</h3>
                  <p className="text-gray-400">
                    Documenting experiences to help others in their crypto journey
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

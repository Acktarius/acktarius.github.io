const CONFIG = {
  title: 'Swap wCCX on Polygon Matic Network',
  subtitle: 'Guide to swapping wCCX using SushiSwap',
  description:
    'Learn how to swap wCCX (wrapped Conceal) tokens on the Polygon network using SushiSwap decentralized exchange.',
  images: [
    '/img/swapCCX_001.jpeg',
    '/img/swapCCX_002.jpeg',
    '/img/swapCCX_003.jpeg',
    '/img/swapCCX_004.jpeg',
    '/img/swapCCX_005.jpeg',
    '/img/swapCCX_006.jpeg',
    '/img/swapCCX_007.jpeg',
  ],
}

function SwapCCX() {
  return (
    <div className="min-h-screen">
      <div className="relative py-16 px-4 bg-gradient-to-b from-gray-900/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-6 mb-4">
            <div className="text-5xl text-neon-orange">₡</div>
            <div>
              <h2 className="text-2xl text-neon-cyan mb-2">Crypto Mining</h2>
              <h1 className="text-4xl md:text-5xl font-bold text-white text-glow-cyan">
                {CONFIG.title}
              </h1>
              <p className="text-xl text-gray-400 mt-2">{CONFIG.subtitle}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-neon-cyan/30 rounded-xl p-8 mb-12">
            <p className="text-gray-300 text-lg text-center">{CONFIG.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CONFIG.images.map((image, index) => (
              <div
                key={image}
                className="bg-gray-900/50 backdrop-blur-sm border border-neon-cyan/20 rounded-lg overflow-hidden hover:border-neon-orange/40 hover-glow transition-all"
              >
                <img src={image} alt={`Swap CCX Step ${index + 1}`} className="w-full h-auto" />
                <div className="p-4">
                  <p className="text-neon-cyan text-center">Step {index + 1}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gray-900/70 backdrop-blur-xl border-2 border-neon-orange/30 rounded-2xl p-8 box-glow-orange">
            <h3 className="text-2xl font-bold text-neon-orange text-glow-orange mb-4">
              Key Points
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-neon-cyan mt-1">▸</span>
                <span>Use Polygon network for lower transaction fees</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-neon-cyan mt-1">▸</span>
                <span>Connect your wallet to SushiSwap</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-neon-cyan mt-1">▸</span>
                <span>Ensure you have MATIC for gas fees</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-neon-cyan mt-1">▸</span>
                <span>Double-check token addresses before swapping</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SwapCCX

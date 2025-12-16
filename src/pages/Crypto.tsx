import { Link } from 'react-router-dom'

const CONFIG = {
  title: 'Crypto Mining',
  subtitle: 'How to help you during your crypto journey',
  articles: [
    {
      title: 'CCX-Box, the wrap-up',
      image: '/img/ccx-box.jpg',
      link: '/ccx-box',
      description: '645 H/s at 26 Watt - Small form factor PC dedicated to Conceal Network',
    },
    {
      title: 'Mining Rig Build',
      image: '/img/img_9821.jpg',
      link: '/mining-rig-build',
      description: 'Step-by-step guide on building a GPU mining rig with up to 8 GPUs',
    },
    {
      title: 'Swap wCCX on Polygon',
      image: '/img/sushi_5.jpeg',
      link: '/swap-ccx',
      description: 'Guide to swapping wCCX on Polygon Matic network using SushiSwap',
    },
    {
      title: 'Ledger Apollo',
      image: '/img/Ledeger-apollo001.jpg',
      link: '/ledger-apollo',
      description: 'Exploring the Ledger Apollo hardware wallet',
    },
  ],
}

function Crypto() {
  return (
    <div className="min-h-screen">
      <div className="relative py-16 px-4 bg-gradient-to-b from-gray-900/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-6 mb-4">
            <div className="text-5xl text-neon-orange">₿</div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-neon-cyan text-glow-cyan">
                {CONFIG.title}
              </h1>
              <p className="text-xl text-gray-400 mt-2">{CONFIG.subtitle}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CONFIG.articles.map((article) => (
              <Link
                key={article.title}
                to={article.link}
                className="group relative bg-gray-900/50 backdrop-blur-sm border border-neon-cyan/30 rounded-xl overflow-hidden hover-glow hover:border-neon-orange/50 transition-all"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-200 mb-3 group-hover:text-neon-orange transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 line-clamp-2">{article.description}</p>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-neon-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Crypto

const CONFIG = {
  title: 'CCX BOX, the wrap-up',
  hashrate: '645 H/s at 26Watt',
  description:
    'CCX-BOX is a small factor PC dedicated to the Conceal Network, and is also ideal for daily operation (browsing internet, email, text-editing).',
  details: [
    'It runs Ubuntu 22.04 LTS in a customized way to integrate all the apps and features making the best of Conceal ecosystem.',
    'All in one iso file: Node+Guardian, Miners, automatic overclock script, Assistant, Conceal Desktop, theme with Conceal backgrounds, colors and font; and of course all the native app of Ubuntu.',
  ],
  hardware: [
    {
      name: 'Case',
      description: 'T80, Shenzhen Jindee. 125mm x 200mm x 250mm',
      link: 'https://www.alibaba.com/product-detail/Custom-Aluminium-PC-Micro-Atx-Case_1600614670078.html',
    },
    {
      name: 'Motherboard + CPU + RAM',
      description: 'H61, SZMZ, 17cm x 17cm',
      link: 'https://www.aliexpress.com/item/1005005008356105.html',
    },
    {
      name: 'Fan',
      description: 'AXP90, Thermalright',
      link: 'https://www.amazon.ca/Thermalright-AXP90-X36-Profile-TL-9015B-Technology/dp/B0BQ658M33',
    },
    {
      name: 'SSD',
      description: 'nvme 256Gb WALRAM',
      link: 'https://www.aliexpress.com/item/1005004896622821.html',
    },
    {
      name: 'Riser',
      description: 'Double Reverse, 18.5cm, BESTAR',
      link: 'https://www.aliexpress.com/item/1005001922014351.html',
    },
    {
      name: 'GPU',
      description: 'RX 6400 Aero, MSI',
      link: 'https://www.amazon.ca/MSI-Radeon-6400-ITX-AERO/dp/B09XSG9H94',
    },
  ],
  donate:
    'https://conceal.cloud/payment/?address=ccx7HGYwA5EQNqdwRr3QR4hfk28ejNs419x8fevRFHW5gE7jtwPTaA7XtznxBsofFP8JB32YYBmtwLdoEirjAbYo4DBZgBW9WF',
}

function CCXBox() {
  return (
    <div className="min-h-screen">
      <div className="relative py-16 px-4 bg-gradient-to-b from-gray-900/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-6 mb-4">
            <div className="text-5xl text-neon-orange">₿</div>
            <div>
              <h2 className="text-2xl text-neon-cyan mb-2">Crypto Mining</h2>
              <h1 className="text-4xl md:text-5xl font-bold text-white text-glow-cyan">
                {CONFIG.title}
              </h1>
            </div>
          </div>
          <div className="text-2xl text-neon-orange text-glow-orange mt-6">{CONFIG.hashrate}</div>
        </div>
      </div>

      <div className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <img src="/img/ccx-box.jpg" alt="CCX-BOX" className="w-full h-auto rounded-lg" />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <p className="text-gray-300 text-lg">{CONFIG.description}</p>
              {CONFIG.details.map((detail, index) => (
                <p key={index} className="text-gray-400">
                  {detail}
                </p>
              ))}
            </div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm border border-neon-cyan/30 rounded-xl p-8 mb-8">
            <p className="text-gray-300 text-lg text-center mb-4">
              For fun, learning experience and cost management* we encourage you to build your own
              and become an active member of the{' '}
              <a
                href="https://discord.conceal.network/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neon-cyan hover:text-neon-orange transition-colors"
              >
                Conceal community
              </a>
              .
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-neon-cyan text-glow-cyan mb-6">
              Hardware Components
            </h3>
            {CONFIG.hardware.map((item) => (
              <div
                key={item.name}
                className="bg-gray-900/50 backdrop-blur-sm border border-neon-cyan/20 rounded-lg p-6 hover:border-neon-orange/40 hover-glow transition-all"
              >
                <h4 className="text-xl font-bold text-neon-orange mb-2">{item.name}</h4>
                <p className="text-gray-300 mb-3">{item.description}</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neon-cyan hover:text-neon-blue transition-colors text-sm break-all"
                >
                  {item.link}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-gradient-to-t from-gray-900/50 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gray-900/70 backdrop-blur-xl border-2 border-neon-orange/30 rounded-2xl p-8 box-glow-orange">
            <h2 className="text-3xl font-bold text-neon-orange text-glow-orange mb-6">
              Don't hesitate to join our friendly community
            </h2>
            <p className="text-gray-300 mb-6">
              Join the CCX-BOX channel on Discord for more information:{' '}
              <a
                href="https://conceal.network"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neon-cyan hover:text-neon-blue transition-colors"
              >
                Conceal.Network
              </a>
            </p>
            <p className="text-gray-400 text-sm mb-8">
              * as of summer 2023 market price, the total cost should average $400 US
            </p>
            <div className="border-t border-neon-cyan/20 pt-6">
              <p className="text-gray-300 mb-4">If you like this post, you can donate some $CCX:</p>
              <a
                href={CONFIG.donate}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-neon-cyan/20 border border-neon-cyan rounded-lg text-neon-cyan hover:bg-neon-cyan/30 hover:scale-105 transition-all"
              >
                DONATE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CCXBox

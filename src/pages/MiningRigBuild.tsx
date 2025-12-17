const CONFIG = {
  title: 'Mining Rig Build',
  subtitle: 'Step-by-step guide on building a GPU mining rig with up to 8 GPUs',
  intro:
    'Often being asked how to build a GPU mining rig, here is a tutorial on how to build one with up to 8 GPUs.',
  sections: [
    {
      image: '/img/img_9807.jpg',
      title: 'Mining Motherboard',
      description:
        "This Mining motherboard comes with an intel cpu Celeron G1630 which avoids the hassle to find/buy one but it needs a cpu cooler to be installed. CPU mining won't be an option here, nevertheless this CPU has integrated graphic which will allow to plug a screen directly on the hdmi plug.",
    },
    {
      image: '/img/img_9811.jpg',
      title: 'Install RAM',
      description:
        'Install the RAM, DDR3 in this build, 4Go is enough. I used the two slots at first, but it turned out the motherboard only boots with only one in use.',
    },
    {
      image: '/img/img_9813-2.jpg',
      title: 'CPU Cooler',
      description:
        'Install the CPU cooler with thermal paste and plug its fan on the appropriate pin connector.',
    },
    {
      image: '/img/img_9815-2.jpg',
      title: 'Plug the SSD',
      description:
        'Plug the SSD with a mining OS installed on it (like HiveOS, SimpleMining, ...). 60Go from GPUriser.com works perfectly.',
    },
    {
      image: '/img/img_9826.jpg',
      title: 'Connect PSU',
      description:
        "Connect the PSU 24ATX pin to the motherboard and 8 pin for the CPU. Here using a 650W PSU at its 80% max outage, so we'll limit to 520Watt.",
    },
    {
      image: '/img/img_9829.jpg',
      title: 'Master PSU Setup',
      description:
        'The master PSU is plugged on a wifi plug for remote control (i.e. reboot after power outage).',
    },
    {
      image: '/img/img_9828.jpg',
      title: 'Server PSU',
      description:
        'Server PSU, with breakout board to power the GPUs and risers with PCI cables (and nothing else). The molex on this breakout board will be use to receive power ON/OFF signal from master PSU. Using a server PSU on 240V will allow to add up to 8 GPUs and stay efficient.',
    },
    {
      image: '/img/img_9822.jpg',
      title: 'Install GPUs',
      description:
        'Install the GPUs in the mining frame with their risers. The gpus are installed vertically so their heatsink fins are also oriented vertically, respecting natural convective air flow. Then plug the risers USBs to the motherboard. Plug the PCIe cable to the PSU 110V and/or Server PSU 240V.',
    },
    {
      image: '/img/img_9821.jpg',
      title: 'Power ON',
      description:
        'For the first setup you can plug a screen to check everything is in order. This motherboard is ready to mine, no need to go in the bios setting. Check the OS boots correctly and all the cards are detected.',
    },
    {
      image: '/img/hiveos_screenshot.jpeg',
      title: 'Initial Setup',
      description:
        'Plug a keyboard and a mouse to do the initial setup of the rig (i.e. "firstrun" command in hiveos). Then remotely access your rig from another computer to setup your miners.',
    },
  ],
  budget: {
    items: [
      { name: 'Mining Motherboard', cost: '170$ (amazon)' },
      { name: 'CPU + Cooler', cost: 'included + 0$ (recycled)' },
      { name: 'RAM', cost: '3$ (amazon return bin)' },
      { name: 'PSU', cost: '100$ + 265$' },
      { name: 'GPUs + GPU risers', cost: 'your Budget! + 5$ (return bin)' },
      { name: 'RIG Frame', cost: '0$ (wood panel left over)' },
      { name: 'Screen (optional)', cost: '5$ (amazon return bin)' },
    ],
    total: 'Total without GPUs = 548$',
    currency: '$CAD (without tax)',
  },
}

function MiningRigBuild() {
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
            </div>
          </div>
          <p className="text-xl text-gray-300 mt-6 max-w-4xl">{CONFIG.intro}</p>
        </div>
      </div>

      <div className="py-8 px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {CONFIG.sections.map((section, index) => (
            <div
              key={section.title}
              className={`bg-gray-900/50 backdrop-blur-sm border border-neon-cyan/20 rounded-xl overflow-hidden hover:border-neon-fuchsia/40 transition-all ${
                index % 2 === 0 ? 'box-glow-cyan' : 'box-glow-fuchsia'
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                <div className="order-2 md:order-1">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div className="order-1 md:order-2 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-neon-cyan mb-4">{section.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{section.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16 px-4 bg-gradient-to-t from-gray-900/50 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-900/70 backdrop-blur-xl border-2 border-neon-green/30 rounded-2xl p-8 box-glow-green">
            <h2 className="text-3xl font-bold text-center text-neon-green text-glow-green mb-8">
              Happy Mining!
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div>
                <h4 className="text-xl font-bold text-neon-cyan mb-4">Hardware List</h4>
                <ul className="space-y-2 text-gray-300">
                  {CONFIG.budget.items.map((item) => (
                    <li key={item.name} className="flex items-start gap-2">
                      <span className="text-neon-orange mt-1">▸</span>
                      <span>{item.name}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold text-neon-cyan mb-4">
                  Budget {CONFIG.budget.currency}
                </h4>
                <ul className="space-y-2 text-gray-300">
                  {CONFIG.budget.items.map((item) => (
                    <li key={item.name}>{item.cost}</li>
                  ))}
                  <li className="text-neon-orange font-bold mt-4">{CONFIG.budget.total}</li>
                </ul>
              </div>
            </div>

            <p className="text-gray-400 text-sm mt-6 italic">
              *this motherboard arrived with some defects: one usb bent, power button broken, and no
              battery. It end up working well in an always ON mode
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MiningRigBuild

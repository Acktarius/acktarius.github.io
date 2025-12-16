const CONFIG = {
  title: 'Connect Ledger Live to FutureBit Apollo BTC Node',
  subtitle:
    'Connect your wallet to your own BTC node, allows you to improve your privacy and independency.',
  disclaimer:
    'This tutorial is delivered "as is" and I deny any and all liability for any damages arising out of using this tutorial. (Ledger Live being used on a Mac computer connected on the same network as the node, not tried yet on a PC)',
  steps: [
    {
      title: '1. Downgrade Ledger Live',
      description:
        'For some reason, last version of Ledger Live is not working, you have to downgrade to version 2.33.1',
      link: 'https://github.com/LedgerHQ/ledger-live-desktop/releases/tag/v2.33.1',
      images: ['/img/Ledeger-apollo001.jpg', '/img/Ledeger-apollo002.jpg'],
    },
    {
      title: '2. Download SatStack',
      description:
        'SatStack bridge your wallet to your node, you will only run it at step #4 of the connection and it might take a while, since it looks for your transactions through the entire blockchain.',
      link: 'https://github.com/LedgerHQ/satstack',
      images: [],
    },
    {
      title: '3. Modify Bitcoin.conf on your node',
      description: 'Follow these steps to configure your Bitcoin node:',
      images: [
        { src: '/img/Ledeger-apollo003.jpg', caption: 'Open Terminal' },
        { src: '/img/Ledeger-apollo004.jpg', caption: 'Open File Finder' },
        { src: '/img/Ledeger-apollo005.jpg', caption: 'Select Other Locations' },
        { src: '/img/Ledeger-apollo006.jpg', caption: 'Select Computer' },
        { src: '/img/Ledeger-apollo007.jpg', caption: 'Select "opt" folder' },
        { src: '/img/Ledeger-apollo008.jpg', caption: 'Select "apolloapi" folder' },
        { src: '/img/Ledeger-apollo009.jpg', caption: 'Select "backend" folder' },
        { src: '/img/Ledeger-apollo010.jpg', caption: 'Drag "node" folder to terminal' },
        {
          src: '/img/Ledeger-apollo011.jpg',
          caption: 'Type "cd " and drop the "node" folder path',
        },
        { src: '/img/Ledeger-apollo012.jpg', caption: 'Type: "sudo nano bitcoin.conf"' },
        {
          src: '/img/Ledeger-apollo013.jpg',
          caption:
            'Note rpcuser and rpcpassword values. Add: rpcbind, rpcallowip, txindex=1, maxconnections',
        },
        { src: '/img/Ledeger-apollo014.jpg', caption: 'Exit "Ctrl + X" and Save by typing "Y"' },
        { src: '/img/Ledeger-apollo015.jpg', caption: 'Valid (return key)' },
        { src: '/img/Ledeger-apollo016.jpg', caption: 'Reboot the node' },
      ],
    },
    {
      title: '4. Connect Ledger Live to Node',
      description: 'Final steps to connect your Ledger wallet to your node:',
      images: [
        {
          src: '/img/Ledeger-apollo017.jpeg',
          caption: 'Open Ledger Live 2.33.1 and click on Experimental Functions',
        },
        { src: '/img/Ledeger-apollo018.jpeg', caption: 'Scroll down and click on connect' },
        {
          src: '/img/Ledeger-apollo019.jpeg',
          caption: 'Fill with your node parameters and click Continue',
        },
        {
          src: '/img/Ledeger-apollo020.jpeg',
          caption: 'Test connectivity and select Bitcoin Account',
        },
        {
          src: '/img/Ledeger-apollo021.jpg',
          caption: 'Have your Ledger nano connected with Bitcoin app open',
        },
        { src: '/img/Ledeger-apollo022.jpeg', caption: 'Run SatStack - BE PATIENT!' },
        {
          src: '/img/Ledeger-apollo023.jpeg',
          caption: 'Notice data symbol beside your Bitcoin account',
        },
        { src: '/img/Ledeger-apollo024.jpeg', caption: 'Status is now "Ready"' },
      ],
    },
  ],
  conclusion:
    'ET VOILÀ! You gained some privacy and independency! You can now even upgrade to the latest version of LedgerLive, make sure you keep SatStack running in the background.',
  donate:
    'https://conceal.cloud/payment/?address=ccx7HGYwA5EQNqdwRr3QR4hfk28ejNs419x8fevRFHW5gE7jtwPTaA7XtznxBsofFP8JB32YYBmtwLdoEirjAbYo4DBZgBW9WF',
}

function LedgerApollo() {
  return (
    <div className="min-h-screen">
      <div className="relative py-16 px-4 bg-gradient-to-b from-gray-900/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-6 mb-4">
            <div className="text-5xl text-neon-orange">₿</div>
            <div>
              <h2 className="text-2xl text-neon-cyan mb-2">Crypto Mining</h2>
              <h1 className="text-3xl md:text-4xl font-bold text-white text-glow-cyan">
                {CONFIG.title}
              </h1>
              <p className="text-lg text-gray-400 mt-2">{CONFIG.subtitle}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 mb-12">
            <h3 className="text-xl font-bold text-red-400 mb-3">Disclaimer</h3>
            <p className="text-gray-300">{CONFIG.disclaimer}</p>
          </div>

          <div className="space-y-16">
            {CONFIG.steps.map((step, stepIndex) => (
              <div
                key={step.title}
                className="bg-gray-900/50 backdrop-blur-sm border border-neon-cyan/30 rounded-xl p-8 hover:border-neon-orange/40 transition-all"
              >
                <h3 className="text-2xl font-bold text-neon-cyan text-glow-cyan mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-300 mb-6">{step.description}</p>

                {step.link && (
                  <a
                    href={step.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mb-6 text-neon-cyan hover:text-neon-blue transition-colors break-all"
                  >
                    {step.link}
                  </a>
                )}

                {step.images && step.images.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    {step.images.map((image, imageIndex) => (
                      <div
                        key={imageIndex}
                        className="bg-gray-950/50 border border-neon-cyan/20 rounded-lg overflow-hidden"
                      >
                        <img
                          src={typeof image === 'string' ? image : image.src}
                          alt={typeof image === 'string' ? `Step ${stepIndex + 1}` : image.caption}
                          className="w-full h-auto"
                        />
                        {typeof image === 'object' && image.caption && (
                          <div className="p-4">
                            <p className="text-gray-400 text-sm">{image.caption}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-neon-green/20 to-neon-cyan/20 backdrop-blur-xl border-2 border-neon-green/30 rounded-2xl p-8 box-glow-green text-center">
            <h2 className="text-4xl font-bold text-neon-green text-glow-green mb-6">
              {CONFIG.conclusion}
            </h2>
            <p className="text-gray-300 mb-8">
              You can now even upgrade to the latest version of LedgerLive, make sure you keep
              SatStack running in the background.
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

export default LedgerApollo

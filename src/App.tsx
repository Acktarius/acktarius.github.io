import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import About from './pages/About'
import CCXBox from './pages/CCXBox'
import Crypto from './pages/Crypto'
import Home from './pages/Home'
import LedgerApollo from './pages/LedgerApollo'
import MiningRigBuild from './pages/MiningRigBuild'
import SwapCCX from './pages/SwapCCX'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-gray-900 to-black">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/crypto" element={<Crypto />} />
            <Route path="/mining-rig-build" element={<MiningRigBuild />} />
            <Route path="/ccx-box" element={<CCXBox />} />
            <Route path="/swap-ccx" element={<SwapCCX />} />
            <Route path="/ledger-apollo" element={<LedgerApollo />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

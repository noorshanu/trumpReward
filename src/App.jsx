import Navbar from "./components/Navbar"
import Hero from "./components/hero"
import TokenInfo from "./components/TokenInfo"
import ContractAddress from "./components/ContractAddress"
import Footer from "./components/Footer"
function App() {
  

  return (
    <>
       <div className="min-h-screen bg-gradient-to-br from-orange-100 to-orange-200">
        <Navbar/>

        <main className="container mx-auto px-4">
          <Hero/>
       
          <ContractAddress/>
          <TokenInfo/>
        </main>
        <Footer/>
        
       </div>
    </>
  )
}

export default App

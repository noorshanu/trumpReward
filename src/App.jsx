import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import TokenInfo from "./components/TokenInfo"
import ContractAddress from "./components/ContractAddress"
import Footer from "./components/Footer"
import AboutUs from "./components/Aboutus"
import ScrollToTop from "./components/ScrollToTop"

function App() {
  

  return (
    <>
       <div className="min-h-screen bg-gradient-to-br from-orange-100 to-orange-200">
        <Navbar/>

        <main className="container mx-auto px-4">
          <Hero/>
       
          <ContractAddress/>
          <TokenInfo/>
          <AboutUs/>  
        </main>
        <Footer/>
        <ScrollToTop/>
        {/* <FloatingButtons/> */}
        
       </div>
    </>
  )
}

export default App

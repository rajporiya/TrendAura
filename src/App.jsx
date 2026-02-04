import { useState } from 'react'
import './App.css'
import Navigation from './Customer/Components/Navigation/Navigation'
import HomePage from './Customer/Pages/HomePAge/HomePage'
import Footer from './Customer/Components/Footer.jsx/Footer'
import Product from './Customer/Components/Product/Product'
import ProductDetails from './Customer/Components/ProductDetails/ProductDetails'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="scroll-none">
    <Navigation />
      <div>
        {/* <HomePage /> */}
        {/* <Product /> */}
        <ProductDetails />
        <Footer />
      </div>
    </div>
  )
}

export default App

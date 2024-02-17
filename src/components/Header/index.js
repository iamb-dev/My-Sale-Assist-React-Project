import {BsSearch} from 'react-icons/bs'
import {FaRegUser, FaRegBookmark, FaShoppingBag} from 'react-icons/fa'
import Footer from '../Footer'
import ProductCard from '../ProductCard'
import './index.css'

const Header = () => (
  <>
    <div className="header-container">
      <div className="top-section-container">
        <h1 className="heading">TANN TRIM</h1>
        <div className="icon-container">
          <BsSearch className="icons" />
          <FaRegUser className="icons" />
          <FaRegBookmark className="icons" />
          <FaShoppingBag className="icons" />
        </div>
      </div>
      <div className="bottom-section-container">
        <li>Bags</li>
        <li>Travel</li>
        <li>Accesories</li>
        <li>Gifting</li>
        <li>Jewelery</li>
      </div>
      <Footer />
      <ProductCard />
    </div>
  </>
)
export default Header

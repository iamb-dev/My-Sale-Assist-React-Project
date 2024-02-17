import {BsDot, BsBoxArrowUp, BsFillBagPlusFill} from 'react-icons/bs'
import {FaRegBookmark, FaRupeeSign} from 'react-icons/fa'

import './index.css'

const ProductCard = () => (
  <>
    <div className="product-container">
      <p className="product-heading">
        Bags
        <span>
          <BsDot className="dot-icon" />
        </span>
        Backpacks
      </p>
      <p className="product-heading">
        13 products
        <span>
          <BsBoxArrowUp className="arrow-icon" />
        </span>
      </p>
    </div>
    <div className="product-card-container">
      <div className="card-container">
        <div className="image-container-1">
          <FaRegBookmark className="bookmark-icon" />
        </div>
        <p className="para">The Brown Metro Movers</p>
        <div className="rupee-container">
          <p className="price">
            <FaRupeeSign className="rupee-sign" />
            <span className="rupee"> 4899 </span> 8999
            <span className="rupee-off"> (50% Off) </span>
          </p>
          <BsFillBagPlusFill className="shopping-bag-icon" />
        </div>
      </div>
      <div className="card-container">
        <div className="image-container-2">
          <FaRegBookmark className="bookmark-icon" />
        </div>
        <p className="para">The Brown Metro Movers</p>
        <div className="rupee-container">
          <p className="price">
            <FaRupeeSign className="rupee-sign" />
            <span className="rupee"> 4899 </span> 8999
            <span className="rupee-off"> (50% Off) </span>
          </p>
          <BsFillBagPlusFill className="shopping-bag-icon" />
        </div>
      </div>
      <div className="card-container">
        <div className="image-container-3">
          <FaRegBookmark className="bookmark-icon" />
        </div>
        <p className="para">The Brown Metro Movers</p>
        <div className="rupee-container">
          <p className="price">
            <FaRupeeSign className="rupee-sign" />
            <span className="rupee"> 4899 </span> 8999
            <span className="rupee-off"> (50% Off) </span>
          </p>
          <BsFillBagPlusFill className="shopping-bag-icon" />
        </div>
      </div>
      <div className="card-container">
        <div className="image-container-4">
          <FaRegBookmark className="bookmark-icon" />
        </div>
        <p className="para">The Brown Metro Movers</p>
        <div className="rupee-container">
          <p className="price">
            <FaRupeeSign className="rupee-sign" />
            <span className="rupee"> 4899 </span> 8999
            <span className="rupee-off"> (50% Off) </span>
          </p>
          <BsFillBagPlusFill className="shopping-bag-icon" />
        </div>
      </div>
    </div>
    <div className="product-card-container">
      <div className="card-container">
        <div className="image-container-1">
          <FaRegBookmark className="bookmark-icon" />
        </div>
        <p className="para">The Brown Metro Movers</p>
        <div className="rupee-container">
          <p className="price">
            <FaRupeeSign className="rupee-sign" />
            <span className="rupee"> 4899 </span> 8999
            <span className="rupee-off"> (50% Off) </span>
          </p>
          <BsFillBagPlusFill className="shopping-bag-icon" />
        </div>
      </div>
      <div className="card-container">
        <div className="image-container-2">
          <FaRegBookmark className="bookmark-icon" />
        </div>
        <p className="para">The Brown Metro Movers</p>
        <div className="rupee-container">
          <p className="price">
            <FaRupeeSign className="rupee-sign" />
            <span className="rupee"> 4899 </span> 8999
            <span className="rupee-off"> (50% Off) </span>
          </p>
          <BsFillBagPlusFill className="shopping-bag-icon" />
        </div>
      </div>
      <div className="card-container">
        <div className="image-container-3">
          <FaRegBookmark className="bookmark-icon" />
        </div>
        <p className="para">The Brown Metro Movers</p>
        <div className="rupee-container">
          <p className="price">
            <FaRupeeSign className="rupee-sign" />
            <span className="rupee"> 4899 </span> 8999
            <span className="rupee-off"> (50% Off) </span>
          </p>
          <BsFillBagPlusFill className="shopping-bag-icon" />
        </div>
      </div>
      <div className="card-container">
        <div className="image-container-4">
          <FaRegBookmark className="bookmark-icon" />
        </div>
        <p className="para">The Brown Metro Movers</p>
        <div className="rupee-container">
          <p className="price">
            <FaRupeeSign className="rupee-sign" />
            <span className="rupee"> 4899 </span> 8999
            <span className="rupee-off"> (50% Off) </span>
          </p>
          <BsFillBagPlusFill className="shopping-bag-icon" />
        </div>
      </div>
    </div>
  </>
)
export default ProductCard

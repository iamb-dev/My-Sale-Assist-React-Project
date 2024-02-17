import {BsFillHandbagFill, BsLaptopFill, BsHandbag} from 'react-icons/bs'
import {
  GiSchoolBag,
  GiDuffelBag,
  GiHandBag,
  GiShoulderBag,
  GiSwapBag,
} from 'react-icons/gi'
import {FiPocket} from 'react-icons/fi'
import './index.css'

const Footer = () => (
  <div className="footer-container">
    <div>
      <GiSchoolBag className="footer-icons" />
      <p className="name">All Bags</p>
    </div>
    <div>
      <FiPocket className="footer-icons" />
      <p className="name">Vanity Pouch</p>
    </div>
    <div>
      <BsFillHandbagFill className="footer-icons" />
      <p className="name">Tote Bag</p>
    </div>
    <div>
      <GiDuffelBag className="footer-icons" />
      <p className="name">Duffle Bag</p>
    </div>
    <div>
      <BsLaptopFill className="footer-icons" />
      <p className="name">Laptop Sleeve</p>
    </div>
    <div>
      <GiHandBag className="footer-icons" />
      <p className="name">Messenger Bags</p>
    </div>
    <div>
      <GiShoulderBag className="footer-icons" />
      <p className="name">Slings Bags</p>
    </div>
    <div>
      <BsHandbag className="footer-icons" />
      <p className="name">Handbags</p>
    </div>
    <div>
      <GiSwapBag className="footer-icons" />
      <p className="name">Bucket Bag</p>
    </div>
  </div>
)

export default Footer

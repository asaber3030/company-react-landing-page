import './features.scss'
import {useState} from "react";
import {dummay_paragraph} from "../../helpers/constants";
import {FaPaperPlane, FaQuoteLeft, FaQuoteRight, FaShoppingBag, FaUserShield} from "react-icons/fa";


const Features = () => {

  const [activeClass, setActiveClass] = useState(0)

  return (
    <section id="features">
      <div className="features-header">
        <h1><span>Platform</span> Features</h1>
        <div className='hr'></div>
        <div className="buttons-list">
          <div onClick={ () => setActiveClass(a => 0) } className={`button-container ${activeClass == 0 ? 'active' : ''}`}>Features</div>
          <div onClick={ () => setActiveClass(a => 1) } className={`button-container ${activeClass == 1 ? 'active' : ''}`}>Staff</div>
          <div onClick={ () => setActiveClass(a => 2) } className={`button-container ${activeClass == 2 ? 'active' : ''}`}>More</div>
        </div>
        <div className="quote">

          <p>
            <span><FaQuoteLeft /></span>
            {dummay_paragraph[activeClass]}
            <span><FaQuoteRight /></span>
          </p>
        </div>

      </div>
      <div className="list-features">
        <div className="feature">
          <h5><FaUserShield /> Web Design</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias blanditiis, commodi consequatur culpa debitis dicta, ex facere iste maxime mollitia optio possimus quae quaerat quibusdam, rem soluta suscipit tenetur velit.</p>
        </div>
        <div className="feature">
          <h5><FaPaperPlane /> Easy Contact</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias blanditiis, commodi consequatur culpa debitis dicta, ex facere iste maxime mollitia optio possimus quae quaerat quibusdam, rem soluta suscipit tenetur velit.</p>
        </div>
        <div className="feature">
          <h5><FaShoppingBag /> Internet Marketing</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias blanditiis, commodi consequatur culpa debitis dicta, ex facere iste maxime mollitia optio possimus quae quaerat quibusdam, rem soluta suscipit tenetur velit.</p>
        </div>
      </div>
    </section>
  )
}

export default Features
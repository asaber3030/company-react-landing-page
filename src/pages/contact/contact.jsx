import './contact.scss'
import { FaPhone, FaEnvelope, FaInstagram, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";
import {FaPaperPlane} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact">
      <section className="left-section">
        <h3>Send us a message!</h3>
        <form action="#">
          <div className="flex-group">
            <input type='text' placeholder='First name' />
            <input type='text' placeholder='Last name' />
          </div>
          <input type="text" placeholder='E-mail Address' />
          <input type="text" placeholder='Phone' />
          <input type="text" placeholder='Subject' />
          <textarea placeholder='Message'></textarea>
          <div className="form-submit">
            <button className='btn btn-success'><FaPaperPlane /> Send</button>
          </div>
        </form>
      </section>
      <section className="right-section">
        <h6>Contact info</h6>
        <ul className='text-contact'>
          <li><FaPhone /> +20 112 352 5123</li>
          <li><FaEnvelope /> abdulrahmansaber120@gmail.com</li>
        </ul>
        <div className='social-icons'>
          <a href=""><span><FaFacebook /></span></a>
          <a href=""><span><FaGithub /></span></a>
          <a href=""><span><FaLinkedin /></span></a>
          <a href=""><span><FaInstagram /></span></a>
        </div>
      </section>
    </section>
  )
}

export default Contact
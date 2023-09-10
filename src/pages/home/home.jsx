import './home.scss'
import {FaPaperPlane, FaUserPlus} from "react-icons/fa6";

const Home = () => {
  return (
    <section id="home">
      <div className="content">
        <div className='container-main'>
          <div>
            <h1 className='title'>Meet Platform the, <br /> visionary landing <br /> page!</h1>
            <p className="description">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>
            <button className="btn btn-success"><FaPaperPlane /> Contact Us</button>
          </div>
          <div className='contact-form'>
            <h1><FaUserPlus /> Register!</h1>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="E-mail Address" />
            <input type="text" placeholder="Phone number" />
            <input type="password" placeholder="Password" />
            <div className="actions">
              <button className="btn btn-success"><FaUserPlus /> Create account</button>
              <a href="#">Already have an account?</a>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Home
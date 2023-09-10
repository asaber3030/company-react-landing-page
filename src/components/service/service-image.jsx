import { FaCheck, FaHandHolding, FaPaperPlane, FaUserPlus } from "react-icons/fa";

const ServiceImage = ({ image }) => {
  return (
    <div className="item">
      <div className="left-side">
        <img src={image} alt="Description 01" />
      </div>
      <div className="right-side">
        <h1 className="title">Designed for startup & <br /> brands</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores atque consequuntur fugiat neque odit quaerat voluptatum? Consectetur, expedita illo. Asperiores commodi, debitis eaque excepturi illo incidunt ipsa nihil provident ut.</p>
        <ul>
          <li><FaCheck /> Write something right here.</li>
          <li><FaUserPlus /> Users features here!</li>
          <li><FaHandHolding /> Complete some other things!</li>
        </ul>
        <button className="btn btn-success"><FaPaperPlane /> Contact us</button>
      </div>
    </div>
  )
}

export default ServiceImage
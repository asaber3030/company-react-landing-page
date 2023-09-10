import {FaCheck, FaUser} from "react-icons/fa6";

const Plan = ({ key, title, price, dot, icon, features }) => {
  return (
    <div className="plan" key={key}>
      <div className="header">
        <div className="icon"><img src={icon} alt=""/></div>
      </div>

      <div className="titles">
        <h1 className="title">{title}</h1>
        {price == 'FREE' ? (
          <p className='no-usd'>{price}</p>
        ) : (
          <p className='price'>
            <span>$ </span>
            <span>{price}</span>
            <span>.{dot}</span>
          </p>
        )}
      </div>

      <div className="features">
        <h6>Features</h6>
        <ul>
          { features.map(feature => <li><FaCheck /> {feature}</li>) }
        </ul>
      </div>

      <div className="plan-footer">
        <button className='btn btn-success'>Choose this plan</button>
      </div>
    </div>
  )
}

export default Plan
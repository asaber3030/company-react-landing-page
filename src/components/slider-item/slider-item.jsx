import {FaStar} from "react-icons/fa6";

const SliderItem = ({ i, currentIndex, persons, img }) => {

  return (
    <div
      key={i}
      className={`item ${currentIndex == i ? 'active' : 'not-active'}`}
    >
      <img src={img} alt=""/>
      <h1>{persons[i]}</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque dolores ex illo laboriosam obcaecati? A aut dignissimos dolores eos iste, laboriosam magnam minima placeat quasi, quos recusandae velit vitae voluptatibus.</p>
      <div className="stars">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
    </div>
  )

}

export default SliderItem

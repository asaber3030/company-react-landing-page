import './reviews.scss'

import Person01 from '../../assets/images/persons/01.svg'
import Person02 from '../../assets/images/persons/02.svg'
import Person03 from '../../assets/images/persons/03.svg'
import Person04 from '../../assets/images/persons/04.svg'

import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa6"
import { useState } from "react"
import SliderItem from "../../components/slider-item/slider-item";

const Reviews = () => {

  const images = [Person01, Person02, Person03, Person04]
  const persons = ["Nadine Austin", "George", "Dalia Jaber", "Walter White"]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState('left')

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    )
  }
  const handlePrevious = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    )
  }

  return (
    <section id="reviews">

      <div className="slider-navigator-container">
        <div className="go-left slider-navigator" onClick={handlePrevious}>
          <FaChevronLeft />
        </div>
      </div>


      <div className="slider">

        {images.map((img, i) => (
          <SliderItem
            i={i}
            img={img}
            persons={persons}
            currentIndex={currentIndex}
          />

        ))}

      </div>

      <div className="slider-navigator-container">
        <div className="go-right slider-navigator" onClick={handleNext}>
          <FaChevronRight />
        </div>
      </div>


    </section>
  )
}

export default Reviews
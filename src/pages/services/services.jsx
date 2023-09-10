import './services.scss'

import { FaUserSecret, FaShield, FaPhone } from "react-icons/fa6";

import ServicesImage01 from '../../assets/images/services-01.svg'
import ServicesImage02 from '../../assets/images/services-02.svg'
import {FaCheck, FaHandHolding, FaPaperPlane, FaUserPlus} from "react-icons/fa";
import Service from "../../components/service/service";
import ServiceImage from "../../components/service/service-image";

const Services = () => {
  return (
    <section id="services">

      <section className="services-list">

        <h1>Platform makes you feel more comfortable with calculations about your application</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto asperiores aspernatur atque aut blanditiis cum dolore, doloribus, eveniet inventore labore nihil quae quasi qui quidem saepe totam! Ipsam, veritatis.</p>

        <div className="items">

          <Service
            icon={<FaUserSecret />}
            title='Secured Data'
            paragraph='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur necessitatibus sunt vel! Accusamus ad dicta dolor'
          />

          <Service
            icon={<FaShield />}
            title='API Keys'
            paragraph='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur necessitatibus sunt vel! Accusamus ad dicta dolor'
          />

          <Service
            icon={<FaPhone />}
            title='24/7 Support'
            paragraph='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur necessitatibus sunt vel! Accusamus ad dicta dolor'
          />

        </div>

      </section>

      <section className="services-images">

        <ServiceImage
          image={ServicesImage01}
        />
        <ServiceImage
          image={ServicesImage02}
        />


      </section>

    </section>
  )
}

export default Services
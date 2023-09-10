import './pricing.scss'

import Plan from '../../components/plan/plan'
import {plans_data} from "../../helpers/constants";

const Pricing = () => {
  return (
    <section id="pricing">
      <div className="container">
        <div className="header">
          <h1>Choose your plan</h1>
          <p>Best choice is to choose us and put your trust in us!</p>
        </div>

        <div className="plans">
          {plans_data.map(plan =>
            <Plan
              title={plan.title}
              price={plan.price}
              icon={plan.image}
              features={plan.features}
              key={plan.id}
              dot={plan.dot}
            />
          )}

        </div>
      </div>

    </section>
  )
}

export default Pricing
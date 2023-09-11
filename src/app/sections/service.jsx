import { services } from "../../../constants"
import { ServicesCard } from "../componets"

const Service = () => {
  return (
    <>
      <section className="max-container flex jc flex-wrap gap-9">

        {services.map((item) => (
          <ServicesCard key={item.label} {...item} />
))}      
      </section> 
    </>
  )
}

export default Service

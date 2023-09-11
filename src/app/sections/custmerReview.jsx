import { reviews } from "../../../constants";
import { ReviewCard } from "../componets";
const CustmerReview = () => {
  return (
    <>
      <section className="max-container">
        <h3 className="font-palanquin text-center text-4xl font-bold">
          What Our
          <span className="text-coral-red"> Customers </span>
          Say?
        </h3>
        <p className="m-auto mt-4 max-w-lg  text-center info-text">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
        <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14 ">
          {reviews.map((item) => (
            <ReviewCard
              key={item.customerName}
              imgURL={item.imgURL}
              CustmerReview={item.CustmerReview}
              rating={item.rating}
              feedback={item.feedback}
              customerName={item.customerName}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default CustmerReview;
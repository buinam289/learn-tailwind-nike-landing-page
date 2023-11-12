import ReviewCard from "../components/ReviewCard"
import { reviews } from "../constants"

const CustomerReviews = () => {
  return (
    <section className="max-container">

      <h2 className="font-palanquin text-4xl font-bold text-center">What Our <span className="text-coral-red">Customers</span> Say?</h2>
      <p className="mt-5 info-text text-center max-w-lg m-auto w-full">Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>

      <div className="mt-24 flex flex-row justify-evenly items-center gap-14 max-lg:flex-col">
        {reviews.map((review) => {
          return (
            <ReviewCard key={review.name} {...review} />
          )
        })}
      </div>

    </section>
  )
}

export default CustomerReviews

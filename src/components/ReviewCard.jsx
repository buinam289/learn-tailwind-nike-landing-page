import Rating from "./Rating"

const ReviewCard = ({ imgURL, customerName, rating: score, feedback }) => {
  return (
    <div className="flex flex-col items-center gap-5 max-w-sm">

      <img src={imgURL} alt="reviewer image" width={120} height={120}
        className="rounded-full bg-cover bg-center" />

      <p className="text-center info-text">{feedback}</p>

      <Rating score={score} />

      <h3 className="mt-1 font-bold font-palanquin text-3xl">{customerName}</h3>

    </div>
  )
}

export default ReviewCard
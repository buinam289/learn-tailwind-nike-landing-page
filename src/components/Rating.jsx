import { star } from '../assets/icons'

const Rating = ({score}) => {
    return (
        <div className="flex justify-start items-center gap-2.5">
            <img src={star} alt="rating icon" width={24} height={24} />
            <p className="font-montserrat text-slate-gray text-xl leading-normal">({score})</p>
        </div>
    )
}

export default Rating

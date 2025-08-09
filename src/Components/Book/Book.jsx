import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const { author,bookId, bookName, category, image, rating, tags } = book;
    return (
        <div className='border border-[rgba(255,255,255,.2)] rounded-2xl p-6'>
            <div className="card w-full">
                <figure className='bg-[#F3F3F3] rounded-2xl py-8 mb-6'>
                    <img
                        className='max-w-36 max-h-[186px] skew-6 rotate-6 rounded-md'
                        src={image}
                        alt={bookName} />
                </figure>

                <div className="card-actions justify-start mb-4">
                    {tags.map((tag, idx) =><div key={idx} className=" bg-[rgba(35,190,10,.05)] rounded-4xl py-2 px-5 text-base font-medium text-[#23BE0A]">{tag}</div>)}
                       
                </div>

                <div className='border-b pb-6 border-dashed border-[rgba(255,255,255,.15)]'>
                    <h2 className=" font-bold text-2xl mb-4">
                        {bookName}
                    </h2>
                    <p className='font-medium text-[rgba(255,255,255,.8)]'>By : {author}</p>
                    
                </div>
                <div className='my-6 flex justify-between items-center'>
                    <p className='font-medium text-[rgba(255,255,255,.8)]'>{category}</p>
                    <p className="flex justify-center items-center gap-2 font-medium text-xl text-[rgba(255,255,255,.8)] ">{rating} <span><FaRegStar /></span></p>
                    
                </div>
                <Link to={`/books/${bookId}`}>
                <button className="py-3 bg-[#23BE0A] rounded-2xl font-bold text-xl cursor-pointer w-full">Details</button></Link>
            </div>
        </div>
    );
};

export default Book;
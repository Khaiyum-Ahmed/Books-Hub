import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList, addToStoredWishList } from "../../Utilities/addToDb";

const BookDetail = () => {
    const { bookId } = useParams();
    const id = parseInt(bookId);
    const data = useLoaderData();
    const book = data.find(book => book.bookId === id);
    const { author, bookName, category, image, publisher, rating, review, tags, totalPages, yearOfPublishing } = book;

    const handleAddToRead = (id)=>{
        addToStoredReadList(id);
    }

    const handleAddToWishList = (id)=>{
        addToStoredWishList(id);
    }

    return (
        <div className="hero mb-20">
            <div className="hero-content flex-col lg:flex-row gap-12">
                <div className="p-16 bg-[rgba(255,255,255,.07)] rounded-xl">
                    <img
                    src={image}
                    className="max-w-md rounded-xl skew-3 rotate-1"
                />
                </div>
                <div>
                    <h1 className="text-5xl font-bold mb-4">{bookName}</h1>
                    <p className="font-medium text-xl text-[rgba(255,255,255,.7)] pb-6 border-b border-[rgba(255,255,255,.15)]">By : {author}</p>
                    <p className="font-medium text-xl text-[rgba(255,255,255,.7)] py-6 border-b border-[rgba(255,255,255,.15)]">{category}</p>
                    <p className="py-6  text-[rgba(255,255,255,.6)]">
                    <span className="font-bold text-[#fff]">Review :</span>   {review}
                    </p>
                    <div className="flex items-center gap-2 py-6 border-b border-[rgba(255,255,255,.15)]">
                        <p className="font-bold text-[#fff]">Tag</p>
                        {
                            tags.map((tag,idx) => <p key={idx} className="py-2 px-4 bg-[rgba(35,190,10,.05)] text-[#23BE0A] rounded-4xl">{tag}</p>
                            )
                        }
                    </div>
                    <div className="max-w-3xs flex items-center justify-between ">
                         <p className="  text-[rgba(255,255,255,.7)] py-3">Number of Pages:</p>
                         <p>{totalPages}</p>
                    </div>
                     <div className="max-w-3xs justify-between flex items-center ">
                         <p className=" text-[rgba(255,255,255,.7)] py-3">Publisher:</p>
                         <p className="">{publisher}</p>
                    </div>
                     <div className="max-w-3xs justify-between flex items-center ">
                         <p className="  text-[rgba(255,255,255,.7)] py-3">Year of Publishing:</p>
                         <p>{yearOfPublishing}</p>
                    </div>
                     <div className="max-w-3xs justify-between flex items-center mb-8 ">
                         <p className="  text-[rgba(255,255,255,.7)] py-3">Rating:</p>
                         <p>{rating}</p>
                    </div>
                    <div className="flex items-center gap-5">
                        <button onClick={()=>handleAddToRead(id)} className="btn py-4 px-8 btn-outline">Marked as Read</button>
                        <button onClick={()=>handleAddToWishList(id)} className="btn py-4 px-8 bg-[#50B1C9]">Add To Wish-List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;
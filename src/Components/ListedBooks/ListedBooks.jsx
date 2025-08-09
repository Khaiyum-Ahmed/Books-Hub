import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadList, getstoredWishList } from "../../Utilities/addToDb";
import Book from "../Book/Book";
import { FaChevronDown } from "react-icons/fa";

const ListedBooks = () => {
    const [readList, setReadList] = useState([]);
    const [wishList, setWishList] = useState([]);
    const [sort, setSort] = useState('');

    const allBooks = useLoaderData();

    useEffect(() => {
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));

        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));

        setReadList(readBookList)
        // wishList
        const storedWishList = getstoredWishList();
        const storedWishListInt = storedWishList.map(id => parseInt(id));

        const wishBookList = allBooks.filter(book => storedWishListInt.includes(book.bookId));

        setWishList(wishBookList);




    }, []);

    const handleSort = sortType =>{
        setSort(sortType);

        // 
        if(sortType  === "No of Pages"){
        const sortedReadList = [...readList].sort((a,b) => b.totalPages - a.totalPages);
            setReadList(sortedReadList)
        }
        if(sortType === "Ratings"){
            const sortedReadList = [...readList].sort((a,b)=> a.rating - b.rating);
            setReadList(sortedReadList)
        }
    }

    return (
        <div>
            <h1 className="py-6 text-center bg-gray-400 rounded-2xl text-4xl mb-16"> Books </h1>
            <div className="flex justify-center">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="cursor-pointer m-1 bg-[#23BE0A] py-3 px-6 rounded-xl flex items-center gap-2 text-xl font-bold">{
                        sort ? `Sort By: ${sort}`: "Sort By"
                        } <span><FaChevronDown />
</span></div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={()=>handleSort("Ratings")}><a>Ratings</a></li>
                        <li onClick={()=>handleSort("No of Pages")}><a>No of Pages</a></li>
                    </ul>
                </div>
            </div>
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift">
                <input type="radio" name="my_tabs_3" className="tab" aria-label="Read Books" />
                <div className="tab-content border-[rgba(255,255,255,.4)] p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {
                            readList.map(book => <Book key={book.bookId} book={book} ></Book>)
                        }
                    </div>
                </div>

                <input type="radio" name="my_tabs_3" className="tab" aria-label="Wishlist Books" defaultChecked />
                <div className="tab-content border-[rgba(255,255,255,.4)] p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {
                            wishList.map(book => <Book key={book.bookId} book={book} ></Book>)
                        }
                    </div>
                </div>


            </div>
        </div>
    );
};

export default ListedBooks;
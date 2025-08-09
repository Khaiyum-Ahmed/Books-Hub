import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadList } from "../../Utilities/addToDb";
import Book from "../Book/Book";

const ListedBooks = () => {
    const [readList, setReadList] = useState([])

    const allBooks = useLoaderData();

    useEffect(()=>{
        const storedReadList = getStoredReadList();
        console.log(storedReadList)
        const storedReadListInt = storedReadList.map(id => parseInt(id));


        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));

        setReadList(readBookList)


    },[])

    return (
        <div>
            <h1 className="py-6 text-center">Listed Books page</h1>
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift">
                <input type="radio" name="my_tabs_3" className="tab" aria-label="Read Books" />
                <div className="tab-content border-[rgba(255,255,255,.4)] p-6">Read Books {readList.length}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {
                      readList.map(book => <Book key={book.bookId} book={book} ></Book>)  
                    }
                    </div>
                </div>

                <input type="radio" name="my_tabs_3" className="tab" aria-label="Wishlist Books" defaultChecked />
                <div className="tab-content border-[rgba(255,255,255,.4)] p-6">Wishlist Books</div>

              
            </div>
        </div>
    );
};

export default ListedBooks;
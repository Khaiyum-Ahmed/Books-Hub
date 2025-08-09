import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('../../../public/booksData.json')
            .then(res => res.json())
            .then(data => setBooks(data))
            
    }, [])
    console.log(books)
    return (
        <div>
            <h1 className='font-bold text-5xl text-center my-9'>Books</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-32'>
                {
                    books.map(book => <Book key={book.bookId} book = {book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;
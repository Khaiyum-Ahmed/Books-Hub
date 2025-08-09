import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import './index.css'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import ListedBooks from './Components/ListedBooks/ListedBooks';
import PagesToRead from './Components/PagesToRead/PagesToRead';
import BookDetail from './Components/BookDetail/BookDetail';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'books/:bookId',
        element:<BookDetail></BookDetail>,
        loader: ()=> fetch('/booksData.json') // do not load all the books for one book.
      },
      {
        path: 'listedBooks',
        element:<ListedBooks></ListedBooks>,
         loader: ()=> fetch('/booksData.json') // do not load all the books for one book.
      },
      {
        path:'pagesToRead',
        element:<PagesToRead></PagesToRead>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

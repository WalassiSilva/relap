import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home } from './routes/Home.tsx'
import { ErrorPage } from './routes/ErrorPage.tsx'
import { Features } from './routes/Features.tsx'
import { Works } from './routes/Works.tsx'
import { About } from './routes/About.tsx'
import { People } from './routes/People.tsx'
import { News } from './routes/News.tsx'
import { Feedbacks } from './routes/Feedbacks.tsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/features",
        element: <Features/>
      },
      {
        path: "/works",
        element: <Works />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/people",
        element: <People />
      },
      {
        path: "/feedbacks",
        element: <Feedbacks />
      },
      {
        path: "/news",
        element: <News />
      },
    ]
  }
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

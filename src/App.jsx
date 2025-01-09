import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ImageContainer from "./components/ImageContainer"
import Navbar from "./components/Navbar"
import ProductDetails from "./components/ProductDetails"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Men from "./pages/Men"
import Women from "./pages/Women"
import Collections from "./pages/Collections"

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      )
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar />
          <About />
        </>
      )
    },
    {
      path: "/contact",
      element: (
        <>
          <Navbar />
          <Contact />
        </>
      )
    },
    {
      path: `/men's`,
      element: (
        <>
          <Navbar />
          <Men />
        </>
      )
    },
    {
      path: `/women's`,
      element: (
        <>
          <Navbar />
          <Women />
        </>
      )
    },
    {
      path: "/collections",
      element: (
        <>
          <Navbar />
          <Collections />
        </>
      )
    },

  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

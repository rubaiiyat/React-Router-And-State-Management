import { Route, Router, Routes } from "react-router";
import Blogs from "./Components/blogs/Blogs";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import Navbar from "./Components/Navbar/Navbar";
import BlogDetails from "./Components/BlogDetails/BlogDetails";

function Home() {
  return <h1 className="text-center text-4xl mt-20">Welcome to Home</h1>;
}
function App() {
  return (
    <>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/blog" element={<Blogs></Blogs>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blog/:id" element={<BlogDetails></BlogDetails>}></Route>
      </Routes>
    </>
  );
}

export default App;

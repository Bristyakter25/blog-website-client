import { Link } from 'react-router-dom';
import logo from '../assets/logo/project logo.png'

const Footer = () => {
    return (
      <div className="bg-[#493D9E] my-5">
      <footer className="footer  text-neutral-content p-10 max-w-6xl mx-auto">
      <aside>
    <img className='w-20 h-20  rounded-full mr-3' src={logo} alt="" />
    <p className='text-2xl  font-bold text-indigo-300'>
    WebSophist
      
    </p>
  </aside>

<nav>
  <h6 className="footer-title">Services</h6>
 
  <Link to='/'><a className="link link-hover">Home</a></Link>
  <Link to='/addBlogs'><a className="link link-hover">Add Blogs</a></Link>
  <Link to='/allBlogs'><a className="link link-hover">All Blogs </a></Link>
  
</nav>
<nav>
  <h6 className="footer-title">Information</h6>
  <Link to='/wishList/user/:email'><a className="link link-hover">WishList</a></Link>
  <Link to='/featuredBlogs'><a className="link link-hover">Featured Blogs</a></Link>
  <Link to='/trendingTechnology'><a className="link link-hover">Trending Technology</a></Link>
  
</nav>
<nav>
  <h6 className="footer-title">Legal</h6>
  <Link to='/signIn'><a className="link link-hover">Sign In</a></Link>
  <Link to='/register'><a className="link link-hover">Register</a></Link>
  
</nav>

</footer>
</div>
    );
};

export default Footer;


const Navbar = () => { 
  return (
    <nav className="bg-teal-600 p-2 shadow-md group justify-between flex space-x-3 ">
      <a className="p-4" href="#">Navbar</a>
      <div className="p-4 flex lg:space-x-8 space-x-1" id="navbarNav">
       <a href="#">HOME</a>
       <a href="#">HOME</a>
       <a href="#">HOME</a>
      </div>
    </nav>
  );
}

export default Navbar;
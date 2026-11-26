import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="bg-purple-900 text-white flex items-center justify-between px-8 py-4">
      <div className="flex items-center gap-3">
      <img src="/ZivyaLogo.png" alt="Logo" className="h-12 w-auto object-contain" />
      <h1 className="text-3xl font-bold">ZIVYA</h1>
      </div>

      <div className="flex items-center gap-6">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/products">Products</Link>
        
      </div>
    </div>
  );
};

export default Navbar;

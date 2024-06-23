import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl">E-Commerce</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="/products" className="hover:underline">
              Products
            </a>
          </li>
          <li>
            <a href="/cart" className="hover:underline">
              Cart
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

import React from "react";

const NavigationMenu = () => {
  return (
    <nav className="bg-gray-200 p-4">
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
  );
};

export default NavigationMenu;

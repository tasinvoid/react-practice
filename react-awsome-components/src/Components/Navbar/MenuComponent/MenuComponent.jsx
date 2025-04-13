import { X } from "lucide-react";
import React from "react";

const MenuComponent = ({ paths }) => {
  return (
    <div className="lg:hidden">
      <X className="relative"></X>

      <ul className="md:flex gap-7 items-center absolute lg:hidden border border-amber-50 rounded-2xl p-5 top-15 left-10">
        {paths.map((path, index) => (
          <li key={index} className="border-b-2">
            <a href={path.path}>{path.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuComponent;

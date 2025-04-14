import { Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import MenuComponent from "./MenuComponent/MenuComponent";

const Navbar = () => {
  const [paths, setPaths] = useState([]);
  useEffect(() => {
    fetchPath();
  }, []);
  async function fetchPath() {
    let res = await fetch("paths.json");
    let data = await res.json();
    setPaths(data);
  }
  const [menuBtn, setMenuBtn] = useState(false);
  function handleMenuBtn() {
    setMenuBtn(!menuBtn);
    console.log("pressed menu");
  }
  return (
    <div className="flex justify-between p-3">
      <span
        className="flex items-center gap-5 cursor-pointer"
        onClick={handleMenuBtn}
      >
        {menuBtn ? (
          <MenuComponent paths={paths}></MenuComponent>
        ) : (
          <Menu className="lg:hidden md:hidden"></Menu>
        )}

        <h2 className="flex items-center cursor-pointer pt-bolder text-2xl">
          Charts
        </h2>
      </span>

      <ul className="hidden md:flex gap-7 items-center ">
        {paths.map((path, index) => (
          <li key={index}>
            <a href={path.path}>{path.name}</a>
          </li>
        ))}
      </ul>
      <button>Log In</button>
    </div>
  );
};

export default Navbar;

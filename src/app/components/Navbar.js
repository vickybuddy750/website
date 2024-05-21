export const Navbar = () => {
  return (
    <div>
      <div className="hidden md:block mb-4 ">
        <ul className="flex w-full grow justify-around  text-xl ">
          <li
            className="p-2
          cursor-pointer hover:bg-yellow-100 transition-all
          "
          >
            Home
          </li>
          <li className="p-2 cursor-pointer hover:bg-yellow-100 transition-all">
            Portfolio
          </li>
          <li className="p-2 cursor-pointer hover:bg-yellow-100 transition-all">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

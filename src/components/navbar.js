import React from "react";
import { 
    useEffect, 
    useState 
} from "react";

const Navbar = () => {
  const menuItems = [
    {
      name: "About Us",
      dropdown: [
        { name: "Introduction", link: "/" },
        { name: "Our Mission & Vision", link: "/" },
        { name: "Mandatory Disclosure", link: "/" },
        { name: "Principal's Desk", link: "/" },
      ],
    },
    {
      name: "Infrastructure",
      dropdown: [
        { name: "Reception", link: "/" },
        { name: "Mathematics Laboratory", link: "/" },
        { name: "Bio, Chem, Phy Lab", link: "/" },
        { name: "Computer Lab", link: "/" },
        { name: "Play Zone", link: "/" },
        { name: "Music", link: "/" },
        { name: "Playground", link: "/" },
        { name: "Library", link: "/" },
        { name: "Transportation", link: "/" },
        { name: "Class Room", link: "/" },
      ],
    },
    {
      name: "Admission",
      dropdown: [
        { name: "Procedure", link: "/" },
        { name: "Registration Form", link: "/" },
        { name: "Admission/Withdrawal Rule", link: "/" },
      ],
    },
    {
      name: "Academics",
      dropdown: [
        { name: "Rules & Regulations", link: "/" },
        { name: "Assessments", link: "/" },
        { name: "Counselling", link: "/" },
      ],
    },
    {
      name: "Activities",
      dropdown: [
        { name: "Glimpse of Activities", link: "/" },
        { name: "Planner", link: "/" },
      ],
    },
  ];

  const [openMenu, setOpenMenu] = useState(null);

  const toggleDropdown = (index) => {
    if (openMenu === index) {
      setOpenMenu(null); 
    } else {
      setOpenMenu(index); 
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest('.navbar')) {
        return;
      }
      setOpenMenu(null); 
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar h-16 flex justify-center items-center">
      <ul className="flex space-x-8">
        <li className="font-semibold">
          <a
            href="/"
            className="text-gray-800 hover:text-white duration-300"
          >
            Home
          </a>
        </li>

        {menuItems.map((menu, index) => (
          <li key={index} className="relative">
            <button
              onClick={() => toggleDropdown(index)}
              className="font-semibold text-gray-800 hover:text-white duration-300 flex items-center"
            >
              {menu.name}
              <svg
                className="w-4 h-4 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {openMenu === index && (
              <ul className="absolute left-0 mt-2 w-48 bg-indigo-400 text-gray-800 rounded-lg shadow-lg z-10">
                {menu.dropdown.map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.link}
                      className="block px-4 py-2 hover:bg-indigo-700"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}

        <li className="font-semibold">
          <a
            href="/"
            className="text-gray-800 hover:text-white duration-300"
          >
            Contact Us
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

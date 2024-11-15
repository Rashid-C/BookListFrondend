import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import { Link, } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [theme, setTheme] = useState("light"); // Theme state


  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <Navbar className="border-b-2">
      {/* Logo */}
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          BOOK
        </span>
        LISTING
      </Link>

      {/* Search */}
      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          icon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>

      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button>

      {/* User Actions */}
      <div className="flex gap-2 md:order-2">
        {/* Theme Toggle */}
        <Button className="w-12 h-10 hidden sm:inline" color="gray" pill onClick={toggleTheme}>
          {theme === "light" ? <FaSun /> : <FaMoon />}
        </Button>

        {/* User Dropdown */}
        <Dropdown
          inline
          label={<Avatar img="https://via.placeholder.com/40" rounded />}
        >
          <Dropdown.Header>
            <span className="block text-sm">John Doe</span>
            <span className="block text-sm font-medium truncate">
              johndoe@example.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Logout</Dropdown.Item>
        </Dropdown>
      </div>

      <Navbar.Toggle />

      {/* Navigation Links */}
      <Navbar.Collapse>
        <Navbar.Link  as={"div"}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link  as={"div"}>
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link  as={"div"}>
          <Link to="/project">Project</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

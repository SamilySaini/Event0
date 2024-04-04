import React from "react";
import { TfiAnnouncement } from "react-icons/tfi";
import { BiSolidToggleRight } from "react-icons/bi";
import Event0 from "/1.svg";
import { NavLink } from "react-router-dom";
import ShowModal from "../components/ShowModal";
import Login from "./Login";
import { useState } from "react";
import Signup from "./Signup";

const Navbar = () => {
  const [showloginModal, setShowloginModal] = useState(false);
  const [showsignupModal, setShowsignupModal] = useState(false);

  const closeloginModal = () => setShowloginModal(false);
  const closesignupModal = () => setShowsignupModal(false);

  const handleCloseloginButton = (
    <button onClick={closeloginModal}>Accept it</button>
  );
  const handleClosesignupButton = (
    <button onClick={closesignupModal}>Accept it</button>
  );

  const loginModal = (
    <ShowModal
      closeModal={closeloginModal}
      handleCloseButton={handleCloseloginButton}
    >
      <Login />
    </ShowModal>
  );

  const signupModal = (
    <ShowModal
      closeModal={closesignupModal}
      handleCloseButton={handleClosesignupButton}
    >
      <Signup />
    </ShowModal>
  );

  return (
    <>
      <nav className="w-full h-auto flex justify-between items-center py-2 px-3 md:px-8 fixed top-0 left-0 right-0 bg-white dark:bg-slate-800 dark:text-white border-b dark:border-black">
        {/* for logo */}
        {/* <div className="logo font-bold text-3xl cursor-pointer md:ml-3 md:block hidden">
          <span className="text-green-500 font-bold">Event</span>
          <span className="font-bold">0</span>
        </div> */}
        <div className="">
          <NavLink className="nav-link" to="/">
            <img src={Event0} alt="Event0" height={100} width={100} cover />
          </NavLink>
        </div>
        {/* for searchBar */}
        {/* <div className="mx-2 flex">
          <input
            className="rounded-lg text-slate-800 px-3 py-1 h-8 w-[500px]"
            placeholder="search"
            type="search"
            name=""
            id=""
          />
        </div> */}
        {/* for other links */}
        {/* <ul className="md:flex hidden font-semibold items-center gap-2">
          <li className="">
            <a className="p-1 hover:bg-slate-400 hover:rounded-full " href="#">
              <span className="text-blue">Find</span>
              <span className="text-green">Event</span>
            </a>
          </li>
          <li className="">
            <a className="p-1 hover:bg-slate-400 hover:rounded-full " href="#">
              <span className="text-blue">Create</span>
              <span className="text-green">Event</span>
            </a>
          </li>
          <li className="mx-1">
            <a className="p-2 " href="#">
              <TfiAnnouncement className="h-7 w-7 " />
            </a>
          </li>
          <li className="mx-1">
            <BiSolidToggleRight className="h-8 w-8 cursor-pointer" />
          </li>
        </ul> */}
        {/* for login and signup */}
        <ul className="md:flex hidden font-semibold items-center gap-2">
          <div className="hidden md:block px-2 py-2  dark:text-white rounded font-bold cursor-pointer">
            <button onClick={() => setShowloginModal(true)}>Log in</button>
            {showloginModal && loginModal}
          </div>
          <div className="hidden md:block px-2 py-2  bg-[#00798a] dark:bg-indigo-800 text-white rounded font-bold cursor-pointer">
            <button onClick={() => setShowsignupModal(true)}>Sign up</button>
            {showsignupModal && signupModal}
          </div>
        </ul>
        <div className="md:hidden dark:text-white py-1 items-center">
          <a className="text-4xl" href="#">
            &#8801;
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
import { onAuthStateChanged, signOut } from "@firebase/auth";
import React, { FC, ReactNode, useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../auth/firebase";
import Toast from "../../components/Toast";
import Dashboard from "../dashboard";
import logo from "../../assets/logo.png";
import Menu from "../../components/Menu";
import { useSelector } from "react-redux";
import { getLoginSelector } from "../../redux/login/loginSlice";
import { getUserSelector, setUser } from "../../redux/user/userSlice";
import { useDispatch } from "react-redux";
import { Coffee, PieChart, ShoppingBag, Sidebar, User } from "react-feather";
import { sidebar } from "./sidebar";

interface HomeProps {
  children?: ReactNode;
}
const Layout: FC<HomeProps> = (props) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector(getUserSelector);
  const handleOnclickMenu = () => {
    setShowMenu((prev) => !prev);
  };
  const handleLeave = () => {
    setShowMenu(false);
  };
  const handleSidebar = (e: number) => {
    let url = sidebar.find((_, idx) => (idx === e ? _.url : null));
    console.log(url);

    navigate(`${url?.url}`);
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // const uid = user.uid;
        // ...
        // console.log("uid", uid);
      } else {
        // User is signed out
        // ...
        console.log("user is logged out");
      }
    });
  }, []);
  return (
    <>
      <div>
        <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <div className="px-3 py-3 lg:px-5 lg:pl-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-start">
                <button
                  data-drawer-target="logo-sidebar"
                  data-drawer-toggle="logo-sidebar"
                  aria-controls="logo-sidebar"
                  type="button"
                  className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                  <span className="sr-only">Open sidebar</span>
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    />
                  </svg>
                </button>
                <a href="" className="flex ml-2 md:mr-24">
                  <img src={logo} className="h-8 mr-3" alt="FlowBite Logo" />
                  <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white animate-pulse">
                    Something JS
                  </span>
                </a>
              </div>
              <div>
                <Menu
                  onMouse={handleLeave}
                  showMenu={showMenu}
                  onClick={handleOnclickMenu}
                  user={users.displayName ?? users?.email?.split("@")[0]}
                  email={users?.email}
                />
              </div>
            </div>
          </div>
        </nav>
        <aside
          className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
          aria-label="Sidebar"
        >
          <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800 ">
            <ul className="space-y-2 font-medium">
              {sidebar.map((item, idx) => {
                return (
                  <li key={idx} className="cursor-pointer">
                    <a
                      onClick={() => handleSidebar(idx)}
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      {idx === 0 ? (
                        <PieChart />
                      ) : idx === 1 ? (
                        <User />
                      ) : idx === 2 ? (
                        <ShoppingBag />
                      ) : idx === 3 ? (
                        <User />
                      ) : (
                        <Coffee />
                      )}
                      <span className="ml-3 capitalize">{item.name}</span>
                    </a>
                  </li>
                );
              })}

              {/* </li>
              <li className="cursor-pointer">
                <a
                  onClick={() => navigate("/customer")}
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                 <User/>
                  <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
                </a>
              </li>
              <li className="cursor-pointer">
                <a
                  onClick={() => navigate("/product")}
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                 <ShoppingBag/>
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Products
                  </span>
                </a>
              </li>
              <li className="cursor-pointer">
                <a
                  onClick={() => navigate("/aboutme")}
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                <Coffee/>

                  <span className="flex-1 ml-3 whitespace-nowrap">
                    About Me
                  </span>
                </a>
              </li> */}
            </ul>
          </div>
        </aside>
        <div className="p-5 mt-10 sm:ml-64">
          <div id="" className="p-5  ">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;

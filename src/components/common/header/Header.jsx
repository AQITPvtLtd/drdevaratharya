"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menuData from "./menuData";
import Top from "./Top";


const Header = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const navbarToggleHandler = () => {
        setNavbarOpen(!navbarOpen);
    };

    // Submenu handler
    const [openIndex, setOpenIndex] = useState(-1);
    const [openSubIndex, setSubOpenIndex] = useState(-1);

    const handleSubmenu = (index) => {
        if (openIndex === index) {
            setOpenIndex(-1);
        } else {
            setOpenIndex(index);
        }
    };
    const handleSubSubmenu = (index) => {
        console.log(index);
        if (openSubIndex === index) {
            setSubOpenIndex(-1);
        } else {
            setSubOpenIndex(index);
        }
    };
    const usePathName = usePathname();
    // Sticky Navbar
    const [sticky, setSticky] = useState(false);
    const handleStickyNavbar = () => {
        if (window.scrollY >= 80) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleStickyNavbar);
    });
    const handleCloseNavbar = () => {
        setNavbarOpen(false);
    };
    return (
        <div className="dark:bg-white">
           <Top />

            <div
                className={`overflow-x-clip bg-white header left-0 z-40 top-0 w-full items-center font-semibold ${sticky
                    ? "fixed bg-[#e81d77] !bg-opacity-80 shadow-sticky backdrop-blur-sm transition"
                    : ""
                    }`}
            >
                <header className="flex justify-around bg-primary bg-[#fa3e93] text-white">
                    <div className="container flex items-center">
                        <div className="flex items-center w-full justify-between lg:w-auto mx-5"></div>
                        <div className=" flex items-center w-full justify-center lg:flex-grow">
                            <button
                                onClick={navbarToggleHandler}
                                id="navbarToggler"
                                aria-label="Mobile Menu"
                                className=" rounded-full px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                            >
                                <span
                                    className={`relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300  ${navbarOpen ? " top-[7px] rotate-45" : ""
                                        }`}
                                />
                                <span
                                    className={`relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300 ${navbarOpen ? "opacity-0" : ""
                                        }`}
                                />
                                <span
                                    className={`relative my-1.5 block h-0.5 w-[30px] bg-white transition-all duration-300  ${navbarOpen ? " top-[-8px] -rotate-45" : ""
                                        }`}
                                />
                            </button>
                            <nav
                                id="navbarCollapse"
                                className={`navbar absolute right-0 z-30 border-2 shadow-2xl bg-[#fa3e93] rounded px-6 py-4 duration-300 dark:bg-dark lg:visible lg:static w-full lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${navbarOpen
                                    ? `visibility ${sticky ? "top-[100%]" : "top-[20%]"
                                    }  opacity-100`
                                    : "invisible top-[120%] opacity-0"
                                    }`}
                            >
                                <ul className="block lg:grid grid-cols-7 gap-2 relative">
                                    {menuData.map((menuItem, index) => (
                                        <li
                                            onMouseEnter={() => handleSubmenu(menuItem.id)}
                                            onMouseLeave={() => {
                                                handleSubmenu(-1);
                                                handleSubSubmenu(-1);
                                            }}
                                            key={index}
                                            className={`group relative text-center  ${usePathName === menuItem.path
                                                ? "bg-orange"
                                                : "text-dark "
                                                }`}
                                        >
                                            {menuItem.path ? (
                                                <Link
                                                    onClick={handleCloseNavbar}
                                                    href={menuItem.path}
                                                    className={`flex py-2 px-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-3 `}
                                                >
                                                    <div>{menuItem.title}</div>
                                                </Link>
                                            ) : (
                                                <>
                                                    <p
                                                        onClick={() => {
                                                            handleSubmenu(menuItem.id);
                                                        }}
                                                        className="px-2 flex cursor-pointer items-center justify-between py-2 text-base text-dark lg:mr-0 lg:inline-flex lg:px-0 lg:py-3"
                                                    >
                                                        {menuItem.title}
                                                        <span className="pl-3">
                                                            <svg width="25" height="24" viewBox="0 0 25 24">
                                                                <path
                                                                    fillRule="evenodd"
                                                                    clipRule="evenodd"
                                                                    d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                                                    fill="currentColor"
                                                                />
                                                            </svg>
                                                        </span>
                                                    </p>
                                                    <div
                                                        className={`submenu relative text-black bg-white shadow-2xl left-0 top-full lg:ml-0 pl-4 rounded-sm transition-[top] duration-300 lg:absolute lg:top-[102%] lg:w-[250px] lg:p-4 bg-primary lg:shadow-lg ${openIndex == menuItem.id ? "block" : "hidden"
                                                            }`}
                                                    >
                                                        {menuItem.submenu.map((submenuItem, index) => (
                                                            <div
                                                                key={index}
                                                                className="group px-4 rounded-lg text-left relative grid hover:bg-[#e81d77] hover:text-white"
                                                            >
                                                                {submenuItem.path ? (
                                                                    <Link
                                                                        onClick={handleCloseNavbar}
                                                                        href={submenuItem.path}
                                                                        key={index}
                                                                        className={`block rounded py-2 text-sm text-dark`}
                                                                    >
                                                                        {submenuItem.title}
                                                                    </Link>
                                                                ) : (
                                                                    <>
                                                                        <p
                                                                            onMouseEnter={() => {
                                                                                handleSubSubmenu(submenuItem.id);
                                                                            }}
                                                                            onClick={() => {
                                                                                handleSubSubmenu(submenuItem.id);
                                                                            }}
                                                                            className="rounded py-2 text-sm lg:px-3 flex cursor-pointer justify-between text-dark "
                                                                        >
                                                                            {submenuItem.title}
                                                                            {/* <span className="pl-3">
                                                                            <svg
                                                                                width="25"
                                                                                height="24"
                                                                                viewBox="0 0 25 24"
                                                                            >
                                                                                <path
                                                                                    fillRule="evenodd"
                                                                                    clipRule="evenodd"
                                                                                    d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                                                                    fill="currentColor"
                                                                                />
                                                                            </svg>
                                                                        </span> */}
                                                                        </p>

                                                                    </>
                                                                )}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    );
};

export default Header;

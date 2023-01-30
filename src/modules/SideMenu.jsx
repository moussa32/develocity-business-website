import React from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import navLogo from "../assets/NavLogo.svg";
import * as Scroll from "react-scroll";

let Link = Scroll.Link;

const navigation = [
  { name: "Home", target: "home" },
  { name: "Web 3.0", target: "web3.0" },
  { name: "NFT", target: "NFT" },
  { name: "Metaverse", target: "Metaverse" },
  { name: "DeFi", target: "DeFi" },
];

const SideMenu = () => {
  return (
    <Disclosure as="nav" className="relative md:hidden z-30 bg-neutral-900/75">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-neutral-300 hover:bg-opacity-5 hover:bg-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <img
                src={`${navLogo}`}
                alt="logo"
                className="block md:hidden mx-auto"
              />
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3 bg-neutral-900/75">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.target}
                  className="text-neutral-300 hover:bg-opacity-5 hover:bg-white hover:text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-neutral-900/75"
                  activeStyle={{
                    color: "white",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                  }}
                  offset={-150}
                  spy
                  smooth
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default SideMenu;

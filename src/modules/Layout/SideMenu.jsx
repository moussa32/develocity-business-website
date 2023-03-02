import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import navLogo from "../../assets/NavLogo.svg";
import * as Scroll from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";

let Link = Scroll.Link;

const navigation = [
  { name: "Home", target: "home" },
  { name: "Web 3.0", target: "web3.0" },
  { name: "NFT", target: "NFT" },
  { name: "Metaverse", target: "Metaverse" },
  { name: "DeFi", target: "DeFi" },
  { name: "Pricing", href: "/pricing" },
];

const SideMenu = () => {
  const { pathname } = useLocation();
  return (
    <Disclosure as="nav" className="relative md:hidden z-30">
      {({ open, close }) => (
        <>
          <div className="mx-auto max-w-7xl px-8 pt-10">
            <div className="relative flex h-16 items-center justify-between">
              <img src={`${navLogo}`} alt="logo" className="block md:hidden" />

              <div className="flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md text-neutral-300 hover:bg-opacity-5 hover:bg-white hover:text-white focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block text-white h-8 w-8" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block text-white h-8 w-8" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3 bg-neutral-900/75">
              {navigation.map(item => {
                if (item.href) {
                  return (
                    <RouterLink
                      to={item.href}
                      className="text-neutral-300 hover:bg-opacity-5 hover:bg-white hover:text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-neutral-900/75"
                      onClick={close}
                      key={`${item.href}${item.name}`}
                    >
                      {item.name}
                    </RouterLink>
                  );
                } else {
                  return (
                    <>
                      {pathname.includes("pricing") ? (
                        <RouterLink
                          to={`/#${item.target.includes("home") ? "" : item.target}`}
                          className="text-neutral-300 hover:bg-opacity-5 hover:bg-white hover:text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-neutral-900/75"
                          onClick={close}
                          key={`${item.href}${item.name}`}
                        >
                          {item.name}
                        </RouterLink>
                      ) : (
                        <Link
                          key={`${item.href}${item.name}`}
                          to={item.target}
                          className="text-neutral-300 hover:bg-opacity-5 hover:bg-white hover:text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-neutral-900/75"
                          activeStyle={{
                            color: "white",
                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                          }}
                          offset={-150}
                          spy
                          smooth
                          onClick={close}
                        >
                          {item.name}
                        </Link>
                      )}
                    </>
                  );
                }
              })}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default SideMenu;

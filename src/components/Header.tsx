"use client";
import { headerNavItems } from "@/app/utils";
import HeaderDropDown from "@/components/HeaderDropDown";
import { List } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import BrandLogo from "../../public/assets/logo.svg";

const Header: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<number>(0);

  const handleNavDropDown = (id: number) => {
    setActiveDropdown(activeDropdown === id ? 0 : id);
  };

  return (
    <header className="bg-black mt-12">
      <div className="container">
        <div className="flex items-center justify-between py-5">
          <Link href={"/"} className="nav-brand block">
            <Image src={BrandLogo} width={320} height={40} alt="brand-logo" />
          </Link>
          <nav>
            <ul className="flex items-center gap-14 relative">
              {headerNavItems &&
                headerNavItems.map((navItem, index) => (
                  <li key={index} className="relative">
                    <Link
                      onClick={() => handleNavDropDown(navItem.id)}
                      href={"#"}
                      className={`text-lg text-white font-semibold`}>
                      {navItem.name}
                    </Link>
                    {activeDropdown === navItem.id && (
                      <HeaderDropDown onNavItem={navItem} />
                    )}
                  </li>
                ))}
            </ul>
          </nav>
          <button>
            <List color="white" size={32} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

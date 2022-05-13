import React, { useEffect, useState } from "react";
import ButtonDefault from "../../atoms/Button/ButtonDefaut";
import Logo from "../../atoms/Logo";
import SearchBar from "../../atoms/SearchBar";
import GroupIcons from "../../molecules/GroupIcons";

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpenSearch = () => {
    setOpen(!open);
  };

  const [isScrolled, setIScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIScrolled(true);
      } else {
        setIScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${isScrolled ? "bg-[#141414dc]" : "bg-[#14141418]"}`}>
      <div className="flex items-center">
        <Logo />
        {/* <Navbar /> */}
      </div>
      <div className="flex items-center">
        {open ? <SearchBar /> : ""}
        <GroupIcons clickSearch={() => handleOpenSearch()} />
      </div>
    </header>
  );
};

export default Header;

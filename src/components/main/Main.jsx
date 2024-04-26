import React from "react";
import SearchInput from "./SearchInput";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import { selectSearchTerm } from "../../features/searchSlice";
import SearchScreen from "./SearchScreen";

const Main = ({ children }) => {
  const searchTerm = useSelector(selectSearchTerm);

  return (
    <>
      <SearchInput />
      <div className="pt-[8px] px-5 pb-5 bg-color-2 rounded-b-4 relative min-h-screen z-[2]">
        {searchTerm ? <SearchScreen /> : children}
      </div>

      <Footer />
    </>
  );
};

export default Main;

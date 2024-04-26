import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSearchTerm, setSearchTerm } from "../../features/searchSlice";

const SearchInput = () => {
  const searchTerm = useSelector(selectSearchTerm);
  const [search, setSearch] = useState(searchTerm);
  const dispatch = useDispatch();

  return (
    <div className="pt-5 bg-color-1 sticky top-[0px] z-[3]">
      <div className="p-3 bg-color-2 rounded-t-4 ">
        <div className="flex relative items-center overflow-hidden bg-color-1 h-[56px] rounded-[100px]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(setSearchTerm(search));
            }}
            className="w-full"
          >
            <input
              type="search"
              placeholder="Искать в Самокате"
              className="w-full h-full text-body-2 px-[44px] bg-inherit border-none outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value.trim())}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;

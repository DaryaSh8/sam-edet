import React, { useState } from "react";
import { useGetCategoriesQuery } from "../../features/categoriesApi";
import { Link } from "react-router-dom";

const Categories = () => {
  const { data: categories = [] } = useGetCategoriesQuery();

  return (
    <div className=" bg-color-2 rounded-2 p-3 flex flex-col gap-[8px] text-body-2  overflow-auto scroll-hide">
      {categories.map((item) => (
        <Category category={item} key={item.id} />
      ))}
    </div>
  );
};

export default Categories;

const Category = ({ category }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className=" py-1"
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        <div className="flex gap-[8px] items-center cursor-pointer">
          <div className="bg-color-6 rounded-[6px]">
            <div
              style={{
                backgroundImage: `url(${category.image})`,
              }}
              className="rounded-[6px] w-[32px] h-[32px] bg-cover bg-no-repeat bg-bottom hover:opacity-[0.8]"
            ></div>
          </div>

          <span className="text-color-4 cursor-pointer">{category.name}</span>
        </div>
      </div>
      {isOpen && (
        <div className="flex flex-col gap-[14px] pt-[3px] pb-[15px] pl-7">
          {category.items.map((child) => (
            <Link to={`/category/${child.id}`} key={child.name}>
              <span className="text-color-4">{child.name}</span>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

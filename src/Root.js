import LeftSideBar from "./components/leftSideBar/LeftSideBar";
import React from "react";
import Main from "./components/main/Main";
import { Outlet, ScrollRestoration } from "react-router-dom";
import RightSideBar from "./components/rightSideBar/RightSideBar";

function Root() {
  return (
    <>
      <ScrollRestoration />
      <section className="flex justify-center gap-5 desktop:gap-3 laptop:gap-2 px-5 desktop:px-3 laptop:px-2 pb-5 desktop:pb-3 laptop:pb-2 min-h-[100vh] bg-color-1 min-w-[1024px]">
        <aside className="max-w-[264px] desktop-l:max-w-[236px] w-full">
          <LeftSideBar />
        </aside>
        <main className="max-w-[1144px] w-full">
          <Main>
            <Outlet></Outlet>
          </Main>
        </main>
        <aside className="max-w-[416px] desktop-l:max-w-[336px]  w-full">
          <RightSideBar />
        </aside>
      </section>
    </>
  );
}

export default Root;

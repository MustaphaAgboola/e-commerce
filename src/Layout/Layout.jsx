import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { UseProductData } from "../Hooks/UseProductData";

const Layout = () => {
  const { data } = UseProductData("products/categories");
 

  return (
    <div className="h-[100svh] grid grid-rows-[4rem_1fr] ">
      <header className="shadow-md flex items-center justify-between px-10 bg-purple-300">
        <h1 className="font-bold text-3xl">Bend Down Pause</h1>
      </header>
      <main className="h-full grid grid-cols-[13rem_1fr]">
        <aside className="shadow-md p-5 bg-purple-800">
          <div className="grid gap-5 mb-5">
            <NavLink
              className={({ isActive }) => {
                return `${isActive && "bg-purple-300 rounded-md p-3"}`;
              }}
              to="/home/dashboard"
            >
              DASHBOARD
            </NavLink>
          </div>
          {data &&
            data.map((item, index) => {
              return (
                <div key={index}  className="grid gap-5 mb-5">
                  <NavLink
                    className={({ isActive }) => {
                      return `${isActive && "bg-purple-300 rounded-md p-3"}`;
                    }}
                    to={item.toLowerCase()}
                  >
                    {item.toUpperCase()}
                  </NavLink>
                </div>
              );
            })}
        </aside>
        <section>
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default Layout;

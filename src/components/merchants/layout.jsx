import React from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

function Layout({ children }) {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-8 h-screen">
        <div className="sticky md:static bottom-0  bg-slate-900  md:pt-[4rem] h-fit md:h-screen order-last md:order-first">
          <Sidebar />
        </div>
        <div className="col-span-7 overflow-auto	">
          <Navbar />
          <div className="mx-2 md:px-6">{children}</div>
        </div>
      </div>
    </section>
  );
}

export default Layout;

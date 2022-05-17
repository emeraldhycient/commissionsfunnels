import React from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

function Layout({ children }) {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-8">
        <div className="hidden md:block bg-slate-900 pt-[4rem] h-screen">
          <Sidebar />
        </div>
        <div className="col-span-7 overflow-y-auto	">
          <Navbar />
          <div className="px-6">{children}</div>
        </div>
      </div>
    </section>
  );
}

export default Layout;

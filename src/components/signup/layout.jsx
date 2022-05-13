import React from "react";

function Layout({ children }) {
  return (
    <section className="w-full h-fit md:h-screen py-5 md:py-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col justify-center items-center  text-left mt-24 md:mt-0">
          {children}
        </div>
        <div className="bg-slate-900 h-screen hidden md:block">
          <img
            src="https://picsum.photos/300/300"
            className="h-screen w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default Layout;

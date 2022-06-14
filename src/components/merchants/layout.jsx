import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

function Layout({ children }) {
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login", { replace: true });
    }
  }, []);

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-8 h-screen">
        <div className="sticky md:static bottom-0  bg-slate-900  md:pt-[4rem] h-fit md:h-screen order-last md:order-first">
          <Sidebar />
        </div>
        <div className="col-span-7 overflow-auto	">
          <Navbar />
          <div className="px-4  md:px-6 bg-gray-100 h-screen overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Layout;

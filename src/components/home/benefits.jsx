import friends from "../../assets/images/friends.png";
import doit from "../../assets/images/doit.png";
import shop from "../../assets/images/shop.svg";
import donefor from "../../assets/images/donefor.svg";
import { Link } from "react-router-dom";

function Benefits() {
  return (
    <section className="w-full h-fit pt-4 pb-8">
      <div className="mx-4 md:w-10/12 md:mx-auto mt-8 ">
        <div className="mb-8">
          <h1 className="text-2xl font-extrabold  capitalize">
            Benefits For everyOne !
          </h1>
          <div className="bg-yellow-500 h-1 w-32"></div>
        </div>
        <div className="">
          <div className="mb-8 md:mb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="">
                <h2 className="text-lg font-bold mb-6 capitalize">
                  Get paid for buying a product you need & Recommending to
                  friends 🤝
                </h2>
                <p className="text-gray-400 mb-4">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laborum aperiam suscipit hic placeat ratione adipisci id?
                  Corporis totam iure explicabo! Rerum itaque in et ipsa unde
                  quasi ea id atque? Autem rem temporibus neque illum ipsam
                  mollitia suscipit, tempore ad ducimus totam quod nisi,
                  laudantium velit amet quidem excepturi, consequatur nemo iure
                  corporis! Pariatur tempore nihil quos, eum ipsam animi. Qui,
                  id impedit deleniti, quaerat laudantium voluptate blanditiis
                  tempora minima ducimus est quo laborum! Ullam, optio saepe!
                  Possimus quisquam laudantium optio quam dolore veritatis
                  excepturi maxime assumenda quaerat, eaque ut!
                </p>
                <center className="w-full">
                  <button className="w-full rounded-md bg-slate-900 border-[.01rem] border-slate-900 text-white px-4 py-2 hover:bg-white hover:text-slate-900 hover:border[#ffce1a]">
                    <Link
                      to="/onboard/"
                      className="hover:text-slate-900 text-white"
                    >
                      <h6 className="text-md font-semibold mb-1">
                        Join as an Affiliate
                      </h6>
                      <p className="text-xs">
                        Get paid for recommending any product{" "}
                      </p>{" "}
                    </Link>
                  </button>
                </center>
              </div>
              <center>
                <img
                  src={shop}
                  loading="lazy"
                  className="w-[80%] mb-6"
                  alt=""
                />
              </center>
            </div>
          </div>
          <div className="mb-8 mt-20 md:mb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <center className="order-last md:order-first">
                <img
                  src={donefor}
                  loading="lazy"
                  className="w-[80%] mb-6"
                  alt=""
                />
              </center>
              <div>
                <h2 className="text-lg font-bold mb-6 capitalize">
                  Done For you Sales Funnel Page hosted by us 🚀
                </h2>
                <p className="text-gray-400 mb-10">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laborum aperiam suscipit hic placeat ratione adipisci id?
                  Corporis totam iure explicabo! Rerum itaque in et ipsa unde
                  quasi ea id atque? Autem rem temporibus neque illum ipsam
                  mollitia suscipit, tempore ad ducimus totam quod nisi,
                  laudantium velit amet quidem excepturi, consequatur nemo iure
                  corporis! Pariatur tempore nihil quos, eum ipsam animi. Qui,
                  id impedit deleniti, quaerat laudantium voluptate blanditiis
                  tempora minima ducimus est quo laborum! Ullam, optio saepe!
                  Possimus quisquam laudantium optio quam dolore veritatis
                  excepturi maxime assumenda quaerat, eaque ut!
                </p>
                <center className="w-full">
                  <button className="w-full rounded-md bg-slate-900 border-[.01rem] border-slate-900 text-white px-4 py-2 hover:bg-white hover:text-slate-900 hover:border[#ffce1a]">
                    <Link
                      to="/onboard/"
                      className="hover:text-slate-900 text-white"
                    >
                      <h6 className="text-md font-semibold mb-1">
                        Book Our Service
                      </h6>
                      <p className="text-xs">
                        Get sales page written by experts
                      </p>
                    </Link>
                  </button>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;

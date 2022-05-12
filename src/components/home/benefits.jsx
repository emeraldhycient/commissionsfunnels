import friends from "../../assets/images/friends.png";
import doit from "../../assets/images/doit.png";

function Benefits() {
  return (
    <section className="w-full bg-gray-100 h-fit pt-4 pb-8">
      <div className="mx-4 md:w-10/12 md:mx-auto mt-8">
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
                <center className="">
                  <button className="bg-slate-900 border-[.01rem] border-slate-900 text-white px-4 py-2 text-lg hover:bg-white hover:text-slate-900 hover:border[#ffce1a]">
                    Join as an Affliate
                  </button>
                </center>
              </div>
              <center>
                <img
                  src={friends}
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
                  src={doit}
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
                <center className="">
                  <button className="bg-white border-[.01rem] border-slate-900 text-[#ffce1a] px-4 py-2 text-lg hover:bg-slate-900 hover:text-white hover:border[#ffce1a] capitalize">
                    Book Our Service
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

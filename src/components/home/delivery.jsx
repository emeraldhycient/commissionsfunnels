import delivery from "../../assets/images/delivery.gif";

function Delivery() {
  return (
    <section className="w-full h-fit pb-8">
      <div className="md:w-10/12 md:mx-auto mx-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:mt-20 mt-12 mb-8 flex flex-col justify-center items-center  text-left">
            <h1 className="text-3xl font-bold mb-6 capitalize">
              To hasten delivery and serve you better , meet the curated and
              vetted Dispatchers.
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
              minima vero excepturi tempora facilis quam, accusantium quae
              temporibus? Minima necessitatibus maiores dignissimos architecto
              sapiente omnis earum praesentium doloribus ab ex. Reprehenderit ad
            </p>
            <div className="flex justify-between mt-8 items-center w-full pr-4">
              <button className="invisible bg-white border-[.01rem] border-slate-900 text-[#ffce1a] px-3 py-1 text-lg hover:bg-slate-900 hover:text-white hover:border[#ffce1a]">
                Learn more
              </button>
              <button className="bg-slate-900 border-[.01rem] border-slate-900 text-white px-4 py-2 text-lg hover:bg-white hover:text-[#ffce1a] hover:border[#ffce1a]">
                Become a Dispatcher
              </button>
            </div>
          </div>
          <div className="mt-8">
            <center>
              <img src={delivery} loading="lazy" className="w-[80%]" alt="" />
            </center>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Delivery;

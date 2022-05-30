import React from "react";
import Hero from "../components/about/hero";
import Footer from "../components/footer";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import laptop from "./../assets/images/laptop.jpg";
import celebrate from "../assets/images/celebrate.png";
import { Link } from "react-router-dom";

function Onboard() {
  return (
    <Layout>
      <Navbar />
      <Hero title="onBoarding information" />
      <section className="bg-[#f4f5f9] h-fit pt-16 md:pt-44 pb-20">
        <div className="md:w-10/12 mx-4 md:mx-auto ">
          <h3 className="text-4xl mb-8 text-center subpixel-antialiased font-semibold">
            Everything you need to know before you start.
          </h3>
          <div
            className="h-44 md:h-56 w-full"
            style={{
              background: `url(${laptop})`,
              backgroundSize: "cover",
              backgroundPosition: "center top",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="bg-gray-50 h-fit p-8 md:w-11/12 mx-4 md:mx-auto -mt-52 shadow 	">
            <h4 className="text-base font-bold mb-2">1. Affliates</h4>
            <p className="bg-gray-50">
              <span>
                Facilis, repellat commodi quidem, vel ex est dicta deleniti
                temporibus molestias beatae fugit eum eligendi reiciendis
                veritatis, odio alias maxime exercitationem quod dolores eius
                quibusdam. Tempore rem vel exercitationem modi.
              </span>
              <span>
                Aliquam numquam velit consectetur quibusdam minus neque aliquid.
                Cumque mollitia ducimus perspiciatis ea minima iure neque
                architecto voluptate, similique dolores et temporibus
                perferendis sapiente corrupti, ab sequi itaque, necessitatibus
                blanditiis.
              </span>
              <span>
                Magni nisi modi atque unde quos placeat non doloribus,
                doloremque, odio ab voluptatibus quasi eius consequatur
                consequuntur quaerat expedita veritatis ullam. Quasi similique
                sint consequuntur distinctio nam temporibus repellendus iure.
              </span>
              <span>
                Animi eos optio vitae exercitationem? Accusamus reprehenderit
                iure unde deserunt soluta id, voluptatibus ipsam, vel suscipit
                rerum ipsa facere quidem? Ab tempora minus expedita, in deserunt
                suscipit voluptatibus vitae voluptatem.
              </span>
              <span>
                Rem a libero mollitia earum eaque provident velit ullam
                voluptates dicta ratione voluptas repellendus modi quis
                accusantium similique illo quibusdam quas ab, voluptatem
                aspernatur. Consequatur dolorem illum non officia maxime!
              </span>
              <span>
                Tenetur, nobis expedita. Explicabo ut laborum vero hic libero
                vel, aperiam rem! Blanditiis, non maiores ab aliquam praesentium
                eum, molestiae modi exercitationem nobis, rerum nesciunt placeat
                est eos cumque suscipit!
              </span>
              <span>
                Reprehenderit inventore quod porro laudantium, earum in
                repudiandae quibusdam consequatur iusto minus aperiam magni
                deleniti asperiores amet est deserunt error velit, fugiat
                cupiditate? Nihil velit optio, quia enim est aut?
              </span>
              <span>
                Rerum, blanditiis quam quibusdam consequuntur repellendus error
                adipisci? Voluptate, officia repudiandae, consequuntur officiis
                ad, sunt placeat aut iure dicta maxime fuga explicabo. Magnam
                aut nulla repellat itaque reprehenderit excepturi laboriosam.
              </span>
            </p>
            <h4 className="text-base font-bold my-2">2. vendors</h4>
            <p className="bg-gray-50">
              <span>
                Facilis, repellat commodi quidem, vel ex est dicta deleniti
                temporibus molestias beatae fugit eum eligendi reiciendis
                veritatis, odio alias maxime exercitationem quod dolores eius
                quibusdam. Tempore rem vel exercitationem modi.
              </span>
              <span>
                Aliquam numquam velit consectetur quibusdam minus neque aliquid.
                Cumque mollitia ducimus perspiciatis ea minima iure neque
                architecto voluptate, similique dolores et temporibus
                perferendis sapiente corrupti, ab sequi itaque, necessitatibus
                blanditiis.
              </span>
              <span>
                Magni nisi modi atque unde quos placeat non doloribus,
                doloremque, odio ab voluptatibus quasi eius consequatur
                consequuntur quaerat expedita veritatis ullam. Quasi similique
                sint consequuntur distinctio nam temporibus repellendus iure.
              </span>
              <span>
                Animi eos optio vitae exercitationem? Accusamus reprehenderit
                iure unde deserunt soluta id, voluptatibus ipsam, vel suscipit
                rerum ipsa facere quidem? Ab tempora minus expedita, in deserunt
                suscipit voluptatibus vitae voluptatem.
              </span>
              <span>
                Rem a libero mollitia earum eaque provident velit ullam
                voluptates dicta ratione voluptas repellendus modi quis
                accusantium similique illo quibusdam quas ab, voluptatem
                aspernatur. Consequatur dolorem illum non officia maxime!
              </span>
              <span>
                Tenetur, nobis expedita. Explicabo ut laborum vero hic libero
                vel, aperiam rem! Blanditiis, non maiores ab aliquam praesentium
                eum, molestiae modi exercitationem nobis, rerum nesciunt placeat
                est eos cumque suscipit!
              </span>
              <span>
                Reprehenderit inventore quod porro laudantium, earum in
                repudiandae quibusdam consequatur iusto minus aperiam magni
                deleniti asperiores amet est deserunt error velit, fugiat
                cupiditate? Nihil velit optio, quia enim est aut?
              </span>
              <span>
                Rerum, blanditiis quam quibusdam consequuntur repellendus error
                adipisci? Voluptate, officia repudiandae, consequuntur officiis
                ad, sunt placeat aut iure dicta maxime fuga explicabo. Magnam
                aut nulla repellat itaque reprehenderit excepturi laboriosam.
              </span>
            </p>
            <h4 className="text-base font-bold my-2">3. dispatchers</h4>
            <p className="bg-gray-50">
              <span>
                Facilis, repellat commodi quidem, vel ex est dicta deleniti
                temporibus molestias beatae fugit eum eligendi reiciendis
                veritatis, odio alias maxime exercitationem quod dolores eius
                quibusdam. Tempore rem vel exercitationem modi.
              </span>
              <span>
                Aliquam numquam velit consectetur quibusdam minus neque aliquid.
                Cumque mollitia ducimus perspiciatis ea minima iure neque
                architecto voluptate, similique dolores et temporibus
                perferendis sapiente corrupti, ab sequi itaque, necessitatibus
                blanditiis.
              </span>
              <span>
                Magni nisi modi atque unde quos placeat non doloribus,
                doloremque, odio ab voluptatibus quasi eius consequatur
                consequuntur quaerat expedita veritatis ullam. Quasi similique
                sint consequuntur distinctio nam temporibus repellendus iure.
              </span>
              <span>
                Animi eos optio vitae exercitationem? Accusamus reprehenderit
                iure unde deserunt soluta id, voluptatibus ipsam, vel suscipit
                rerum ipsa facere quidem? Ab tempora minus expedita, in deserunt
                suscipit voluptatibus vitae voluptatem.
              </span>
              <span>
                Rem a libero mollitia earum eaque provident velit ullam
                voluptates dicta ratione voluptas repellendus modi quis
                accusantium similique illo quibusdam quas ab, voluptatem
                aspernatur. Consequatur dolorem illum non officia maxime!
              </span>
              <span>
                Tenetur, nobis expedita. Explicabo ut laborum vero hic libero
                vel, aperiam rem! Blanditiis, non maiores ab aliquam praesentium
                eum, molestiae modi exercitationem nobis, rerum nesciunt placeat
                est eos cumque suscipit!
              </span>
              <span>
                Reprehenderit inventore quod porro laudantium, earum in
                repudiandae quibusdam consequatur iusto minus aperiam magni
                deleniti asperiores amet est deserunt error velit, fugiat
                cupiditate? Nihil velit optio, quia enim est aut?
              </span>
              <span>
                Rerum, blanditiis quam quibusdam consequuntur repellendus error
                adipisci? Voluptate, officia repudiandae, consequuntur officiis
                ad, sunt placeat aut iure dicta maxime fuga explicabo. Magnam
                aut nulla repellat itaque reprehenderit excepturi laboriosam.
              </span>
            </p>
            <div className="my-4 flex flex-col justify-center items-center">
              <img src={celebrate} className="my-4" />
              <p className="my-2 text-base">
                if you are ready lets get it going
              </p>
              <button className="mt-6 bg-slate-900 border-[.01rem] border-slate-900 text-white px-3 py-1 text-lg hover:bg-white hover:text-slate-900 hover:border[#ffce1a]">
                <Link to="/sign-up">Create account</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Layout>
  );
}

export default Onboard;

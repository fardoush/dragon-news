import React from "react";
import { Outlet, useNavigate } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/homelayout/LeftAside";
import RightAside from "../components/homelayout/RightAside";
import Loading from "../pages/Loading";
import Footer from "../components/Footer";

const HomeLayouts = () => {
    const {state} = useNavigate();
  return (
    <div>
      <header className="py-3">
        <Header />
        <section className="w-11/12 mx-auto my-3 ">
          <LatestNews></LatestNews>
        </section>
        <nav className="w-11/12 mx-auto my-3 ">
          <Navbar></Navbar>
        </nav>
      </header>
      <main className="w-full md:w-11/12 mx-auto my-3 grid grid-cols-1 md:grid-cols-12 gap-5 mb-24">
        <aside className="hidden md:block md:col-span-3 sticky top-0 h-fit">
          <LeftAside />
        </aside>

        <section className="main col-span-3 md:col-span-6">
          {state == "loading" ? <Loading/> : <Outlet/>}
        </section>

        <aside className="col-span-1 md:col-span-3 hidden md:block sticky top-0 h-fit">
          <RightAside />
        </aside>
      </main>

      <Footer/>
    </div>
  );
};

export default HomeLayouts;

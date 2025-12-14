import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import RightAside from "../components/homelayout/RightAside";
import NewsDetailsCard from "../components/NewsDetailsCard";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [news, setNews] = useState({});

  useEffect(() => {
    const NewsDetails = data.find((singleNews) => singleNews.id == id);
    setNews(NewsDetails);
  }, [data, id]);

  return (
    <div className="min-h-screen bg-base-100">
      <header className="py-3">
        <Header />
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5 py-10">
        <section className="lg:col-span-9">
          <h2 className="font-bold mb-5">News Details</h2>

          <NewsDetailsCard news={news} key={news.id} />
        </section>
        <aside className="lg:col-span-3">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;

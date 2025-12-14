import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [categoryNews, setCategoryNews] = useState([]);
//   console.log(id, data);

  useEffect(() => {
    // id = 0 hole sob data dekhabo
    if (id == "0") {
      setCategoryNews(data);
      return;
    }
    // jodi 0 na hoye 1 hoy tahole  jar j data se tai dekhabe specially today kaj gulo
    else if (id == "1") {
      const filteredNews = data.filter(
        (news) => news.others.is_today_pick == true
      );
      setCategoryNews(filteredNews);
    }
    // category_id == id ai ta match hole dekhabe
    else {
      const filteredNews = data.filter((news) => news.category_id == id);
    //   console.log(filteredNews);
      setCategoryNews(filteredNews);
    }
  }, [data, id]);
  return (
    <div className="md:px-0 px-10">
      <h2 className="text-2xl font-bold mb-3">
        {" "}
        Total <span className="text-secondary">{categoryNews.length}</span> news
        Found
      </h2>

      <div className="grid grid-cols-1 gap-5">
        {categoryNews.map((news) => (
          <NewsCard key={news.id} news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;

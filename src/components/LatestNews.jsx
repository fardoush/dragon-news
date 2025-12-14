import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { BiLogoSlack } from "react-icons/bi";


const LatestNews = () => {
    const [allNews, setAllNews] = useState([]);

  useEffect(() => {
    fetch("../../public/demo-data/news.json")
    .then(res => res.json())
    .then(data => setAllNews(data))
  },[]);

  const breakingNews = allNews.filter(item => item.others?.is_trending);



  return (
    <div className="flex items-center gap-5 bg-base-200 p-3">
      <p className="btn text-base-100 bg-secondary px-3 py-2">Latest</p>
      {/* <Marquee className="flex gap-5" pauseOnHover={true} speed={60}>
         {breakingNews.map((news, index) => (
        <h4 key={news.id}>
          {index + 1}. {news.title}
        </h4>
      ))}
      
      </Marquee> */}
      <Marquee className="flex  items-center gap-0" pauseOnHover={true} speed={60}>
        {breakingNews.map((news) => (
          <p key={news.id} className="mr-3 font-bold flex items-center justify-center "><BiLogoSlack className="text-secondary mr-2"/> {news.title}
          </p>
        ))}
      </Marquee>
    </div>
  );
};

export default LatestNews;

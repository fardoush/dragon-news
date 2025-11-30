import React from "react";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  const {
    title,
    author,
    published_date,
    image_url,
    details,
    tags,
  } = news;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="border  border-accent rounded-xl shadow-sm p-6 bg-white">
      {/* Thumbnail / Big Image */}
      <div className="w-full h-72 mb-5 overflow-hidden rounded-xl">
        <img
          src={image_url}
          alt={title}
          className="w-full h-[350px] object-cover"
        />
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold mb-3 text-gray-900 leading-snug">
        {title}
      </h2>

      {/* Meta Info */}
      <div className="text-sm text-gray-500 mb-4">
        {formatDate(published_date)} |{" "}
        <span className="text-gray-700 font-medium">{author?.name}</span>
      </div>

      {/* Details */}
      <p className="text-gray-700 leading-relaxed mb-6">
        {details}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tags?.map((tag) => (
          <span
            key={tag}
            className="text-xs px-3 py-1 bg-gray-100 rounded-full text-gray-600"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Button */}
      <Link to={`/category/${news.category_id}`} className="btn btn-secondary">
        ← All news in this category
      </Link>
    </div>
  );
};

export default NewsDetailsCard;

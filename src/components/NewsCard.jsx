import { FaEye, FaShareAlt, FaRegBookmark, FaStar } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    id,
    title,
    author,
    rating,
    total_view,
    thumbnail_url,
    details,
    tags,
  } = news;

  const formattedDate = new Date(news.author.published_date).toDateString();
  return (
    <div className="card bg-base-100 shadow-md   mb-6 border-base-300 border border-t-0   rounded-tl-xl rounded-tr-xl">
      {/* Author + actions */}
      <div className="flex items-center justify-between bg-base-200 p-4 rounded-tl-xl rounded-tr-xl">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="text-base font-semibold text-primary">
              {author?.name}
            </h2>
            <p className="text-xs text-accent">{formattedDate}</p>
          </div>
        </div>

        <div className="flex gap-4 text-gray-600 text-xl cursor-pointer">
          <FaRegBookmark className="text-accent" />
          <IoShareSocialOutline className="text-accent" />
        </div>
      </div>

      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold mb-5 text-primary">{title}</h3>

        {/* Thumbnail */}
        <figure>
          <img
            src={thumbnail_url}
            alt={title}
            className="w-full rounded-lg object-cover shadow-sm"
          />
        </figure>

        {/* Details text */}
        <p className="text-base text-accent mt-3">
          {/* {details.slice(0, 200)}...
        <span className="text-orange-500 cursor-pointer ml-1 font-semibold">Read More</span> */}
          {details.length > 200 ? (
            <>
              {details.slice(0, 200)}...
              <Link
                to={`/news-details/${id}`}
                className=" font-semibold cursor-pointer hover:underline text-orange-400"
              >
                Read More
              </Link>
            </>
          ) : (
            details
          )}
        </p>

        {/* Tags */}
        <div className="flex gap-2 flex-wrap mt-3">
          {tags?.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-gray-200 rounded-full text-xs text-gray-600"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Rating + views */}
        <div className="border-t pt-3 mt-3 flex justify-between items-center border-base-300">
          <div className="flex items-center gap-2 text-orange-500">
            {Array.from({ length: rating.number }).map((_, i) => (
              <FaStar key={i} />
            ))}

            <span className="font-semibold text-base">{rating?.number}</span>
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <FaEye />
            <span className="text-base">{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

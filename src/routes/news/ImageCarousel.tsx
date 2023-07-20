/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";
import { useState } from "react";

interface Props {
  posts: Post[];
}

interface Post {
  title: string;
  description: string;
  image: string;
  continent: string;
}

function ImageCarousel({ posts }: Props) {
  const [currentPostIndex, setCurrentPostIndex] = useState(0);

  const changeIndexBy = (changeBy: number) => {
    displayArticle(currentPostIndex + changeBy);
  };

  const displayArticle = (index: number) => {
    if (index < 0 || index > posts.length - 1) return;
    setCurrentPostIndex(index);
  };
  return (
    <>
      <div>
        <div className="m-auto w-full max-w-4xl pb-3">
          <div className="hover-img bg-white">
            <a href="#top">
              <img
                className="max-w-full w-full mx-auto"
                src={posts[currentPostIndex].image}
                alt="alt title"
              />
            </a>
            <div className="py-3 px-6">
              <h3 className="text-lg font-bold leading-tight mb-2">
                <a href="#top">{posts[currentPostIndex].title}</a>
              </h3>
              <a className="text-gray-500" href="#top">
                <span className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                {posts[currentPostIndex].continent}
              </a>
            </div>
          </div>
        </div>
        <button
          onClick={() => changeIndexBy(-1)}
          className="cursor-pointer absolute top-1/2 w-auto mt-[-22px] p-4 text-white font-bold text-lg"
        >
          &#10094;
        </button>
        <button
          onClick={() => changeIndexBy(1)}
          className="cursor-pointer absolute top-1/2 w-auto mt-[-22px] p-4 text-white font-bold text-lg right-4"
        >
          &#10095;
        </button>
      </div>
      <div className="text-center">
        {posts.map(function (post, index) {
          return (
            <button
              key={index}
              onClick={() => displayArticle(index)}
              className="cursor-pointer h-4 w-4 mx-1 bg-slate-400 rounded-lg inline-block transition-all hover:bg-slate-100"
            />
          );
        })}
      </div>
    </>
  );
}

export default qwikify$(ImageCarousel, { eagerness: 'load' });
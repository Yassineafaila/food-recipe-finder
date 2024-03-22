import { useState, useEffect } from "react";
import axios from "axios";
import { useInView } from "react-intersection-observer";
import { IData } from "@/constants/types";
import RecipeCard from "./RecipeCard";

const fetchMore = async (link: string) => {
  try {
    const response = await axios.get<IData>(link);
    return response.data;
  } catch (error) {
    console.error("Error while trying to fetch new recipes:", error);
    return null;
  }
};

function LoadMore({ recipes }: { recipes: IData }) {
  const [data, setData] = useState<IData>({
    from: 0,
    to: 0,
    count: 0,
    _links: recipes._links,
    hits: [],
  });
  const [link, setLink] = useState<{ next: { href: string; title: string } }>(
    recipes._links
  );
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchMore(link.next.href)
        .then((res) => {
          if (res && res._links) {
            setLink(res._links);
            setData({ ...res, hits: [...data?.hits, ...res?.hits] });
          }
        })
        .catch((error) =>
          console.log("Error while trying to get the new recipes", error)
        );
    }
  }, [inView, data, link]);
  return (
    <>
      {data && data.hits && (
        <>
          {data.hits?.map((item, index) => (
            <RecipeCard
              key={index * 0.25}
              recipe={item.recipe}
              index={index * 0.25}
            />
          ))}
        </>
      )}
      <div className="w-full flex items-center justify-center col-span-full py-4">
        <button
          ref={ref}
          className="bg-orange-500 mx-auto w-44 text-white rounded px-5 py-2"
        >
          Load More
        </button>
      </div>
    </>
  );
}

export default LoadMore;

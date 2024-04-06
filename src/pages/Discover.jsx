import React, { useState } from "react";
import DocumentTitle from "../utils/documentTitle";
import LatestNews from "../components/LatestNews";
import LatestNewsPost from "../components/LatestNewsPost";
import api from "../utils/api";

export default function Discover({ lastestNewsDesc }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.get(`/posts/search/?query=${searchQuery}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error searching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <DocumentTitle title="Discover" />
      <main className="mainComponent">
        <form onSubmit={handleSearch}>
          <div className="flex rounded-lg items-center">
            <div className="w-full">
              <input
                className="w-full pl-5 pr-2 rounded-l-lg bg-white h-10 outline-none border-none"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyUp={handleSearch }
              />
            </div>
            <div className="w-fit">
              <button
                className="w-10 bg-black text-white rounded-r-lg h-10 cursor-pointer"
                type="submit"
              >
                <i className="fi fi-ts-category relative top-[0.1rem]"></i>
              </button>
            </div>
          </div>
        </form>
        {loading ? (
          <div className="mt-5 text-white">Loading...</div>
        ) : (
          <div className="mt-5">
            {searchResults.length > 0 ? (
              <div className="grid grid-cols-1 md:md:grid-cols-2 lg:grid-cols-3 gap-5">
                {searchResults.map((news, index) => (
                  <LatestNewsPost
                    title={news.title}
                    previewText={news.summary}
                    url={"/post/" + news.slug}
                    thumbnail={news.img_url}
                    author={news.author}
                    key={index}
                  />
                ))}
              </div>
            ) : (
              <div className="text-white flex justify-center items-center min-h-[40vh]">
                <div className="text-center">
                  {(searchQuery == "") ? (
                    <>
                      <div className="font-bold text-2xl">
                        Search for something
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="font-bold text-2xl">No result found</div>
                      <div className="mt-2">Try another search query</div>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
        <LatestNews lastestNewsDesc={lastestNewsDesc} />
      </main>
    </>
  );
}

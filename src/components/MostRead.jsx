import { useState, useEffect } from "react";
import api from "../utils/api"
//components
import ComponentTitle from "../components/__global/ComponentTitle";
import MostReadPostElem from "../components/MostReadPostElem";

export default function MostRead() {
  // const mostReadPosts = [
  //   {
  //     url: "#",
  //     title: "Breaking News: Messi Signs with Paris Saint-Germain",
  //     author: "Football Gazette",
  //     date: "15 Aug 2023",
  //     views: "3.2M",
  //   },
  //   {
  //     url: "#",
  //     title: "Ronaldo Returns to Manchester United: The Comeback Story",
  //     author: "Soccer Insider",
  //     date: "21 Sep 2023",
  //     views: "2.8M",
  //   },
  //   {
  //     url: "#",
  //     title: "Juventus Unveils New Stadium Plans for 2025",
  //     author: "Stadium Watch",
  //     date: "10 Oct 2023",
  //     views: "2.6M",
  //   },
  //   {
  //     url: "#",
  //     title: "Barcelona's Youth Academy Producing Future Stars",
  //     author: "Youth Football Review",
  //     date: "5 Nov 2023",
  //     views: "2.4M",
  //   },
  //   {
  //     url: "#",
  //     title: "Liverpool's Managerial Change: Impact on the Team",
  //     author: "Football Analysis",
  //     date: "12 Dec 2023",
  //     views: "2.2M",
  //   },
  //   {
  //     url: "#",
  //     title: "Bayern Munich's Dominance in European Football",
  //     author: "Football Focus",
  //     date: "28 Jan 2024",
  //     views: "2.0M",
  //   },
  // ];

  const [mostReadPosts, setMostReadPosts] = useState([]);
  useEffect(function(){
    const fetchPost = async () => {
      try{
        const response = await api.get('posts-preview/type-2/');
        setMostReadPosts(response.data);
        console.log(response.data);
      }catch(error){
        console.log('Error fetching posts:', error);
      }
    }
    fetchPost();
  },[])

  return (
    <>
      <div className="mt-5">
        <ComponentTitle title="Most Read" url="/discover?sort_by=most-read" />
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-2">
            {mostReadPosts.map((post, index) => (
                <MostReadPostElem
                  url={'/post/'+post.slug}
                  title={post.title}
                  author={post.author}
                  date={'28 Jan 2024'}
                  views={'32M'}
                  key={index}
                />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

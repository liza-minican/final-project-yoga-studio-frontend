// import React, { useState, useEffect } from "react";
// import { VideoCard } from "components/VideoCard";

// export const VideoList = () => {
//   const [videos, setVideos] = useState([]);
//   const VIDEOS_URL = "http://localhost:8080/videos";

//   useEffect(() => {
//     fetch(VIDEOS_URL)
//       .then((response) => response.json())
//       .then((json) => setVideos(json.results));
//   }, []);

//   return (
//     <section className="video-list">
//       {videos.map((video) => (
//         <VideoCard key={video._id} {...video} />
//       ))}
//     </section>
//   );
// };
//  <Provider store={store}>
//    <LoginForm />
//    {videoList === true ? (
//      <VideoList />
//    ) : (
//      <button type="button" onClick={handleShowVideos}>
//        Video collection
//      </button>
//    )}
//  </Provider>;
import React, { useState, useEffect } from "react";
import { VideoCard } from "components/VideoCard";

export const VideoList = () => {

  const VIDEO_COLLECTION_URL = "http://localhost:8080/videos";
  
  const [videoCollection, setVideoCollection] = useState([])
  
   const getVideos = () => {
     fetch(VIDEO_COLLECTION_URL)
       .then((res) => res.json())
       .then((json) => setVideoCollection(json))
       .catch((err) => console.log(err));
   };
  
     useEffect(getVideos, []);

  return (
    <>
      <h1>Video collection</h1>
      <p>Enjoy our picked colecction and get stronger every day!</p>
      {videoCollection.map(video => {
        return <VideoCard
        key = {video._id}
        {...video}
        />
        })
      }
    </>
  );
};

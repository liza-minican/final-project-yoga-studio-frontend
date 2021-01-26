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
import React from "react";

export const VideoList = () => {
  return (
    <>
      <h1>Videos</h1>
      <p>Some text about our cool videos</p>
    </>
  );
};

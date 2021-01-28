// 
//import ReactPlayer from "react-player";


//export default ({ youtubeId }) => {
//   return (
//     <div
//       className="video"
//       style={{
//         position: "relative",
//         paddingBottom: "56.25%" /* 16:9 */,
//         paddingTop: 25,
//         height: 0,
//       }}
//     >
//       <iframe
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//         }}
//         src={`https://www.youtube.com/embed/${youtubeId}`}
//         frameBorder="0"
//       />
//     </div>
//   );
// };
// <!-- 21:9 aspect ratio -->
// <div class="embed-responsive embed-responsive-21by9">
//   <iframe class="embed-responsive-item" src="..."></iframe>
// </div>

// <!-- 16:9 aspect ratio -->
// <div class="embed-responsive embed-responsive-16by9">
//   <iframe class="embed-responsive-item" src="..."></iframe>
// </div>

// <!-- 4:3 aspect ratio -->
// <div class="embed-responsive embed-responsive-4by3">
//   <iframe class="embed-responsive-item" src="..."></iframe>
// </div>

// <!-- 1:1 aspect ratio -->
// <div class="embed-responsive embed-responsive-1by1">
//   <iframe class="embed-responsive-item" src="..."></iframe>
// </div>

    // <>
    //   <h3>Home page</h3>
    //   <ReactPlayer url="https://www.youtube.com/watch?v=UVCP4bKy9Iw" />
    // </>;

//     .player-wrapper {
//   width: auto; // Reset width
//   height: auto; // Reset height
// }
// .react-player {
//   padding-top: 56.25%; // Percentage ratio for 16:9
//   position: relative; // Set to relative
// }

// .react-player > div {
//   position: absolute; // Scaling will occur since parent is relative now
// }
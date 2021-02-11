// export const getFavoriteVideos = () => {
//   return 
//   fetch(`http://localhost:8080/users/${userId}/favorites`, {
//     method: "GET",
//     headers: { Authorization: accessToken },
//   })
//     .then((res) => {
//       if (res.ok) {
//         return res.json();
//       }
//       throw new Error("Could not get Videos");
//     })
//     .then((json) => {
//       //dispatch(user.actions.setFavoriteVideos(json));
//       setFavoriteVideos(json);
//     });
// };
// useEffect(getFavoriteVideos, []);

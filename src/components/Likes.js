import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addFavoriteVideos, removeFavoriteVideos } from "reducers/user";
import styled from "styled-components";

export const Likes = ({ id }) => {
  // id is a video id that is coming as a prop from the Video Card component
  const dispatch = useDispatch();
  const favoriteVideos = useSelector(
    (store) => store.user.userActions.favoriteVideos
  );
  console.log(favoriteVideos);
  const added = favoriteVideos.some((el) => el._id === id);
  const userId = useSelector((store) => store.user.login.userId);
  const accessToken = useSelector((store) => store.user.login.accessToken);

  const handleSave = () => {
    dispatch(addFavoriteVideos(userId, accessToken, id));
  };

  const handleRemove = () => {
    dispatch(removeFavoriteVideos(userId, accessToken, id));
  };

  return (
    <>
      <FavLink to="/profile">
        <WrapperLikes>
          {!added && <Button onClick={handleSave}>Save</Button>}
          {added && <Button onClick={handleRemove}>Remove</Button>}
        </WrapperLikes>
      </FavLink>
    </>
  );
};

const WrapperLikes = styled.div`
  display: flex;
  justify-content: space-around;
  text-decoration: none !important;
`;
// const Button = styled.button`
//   display: flex;
//   padding: 5px;
//   font-size: 12px;
//   flex-direction: column;
//   color: black;
//   font-weight: bold;
//   align-items: center;
//   justify-content: center;
//   text-align: center;
//   text-transform: uppercase;
//   letter-spacing: 2px;
//   text-decoration: none;
//   &:hover {
//     cursor: pointer;
//     background-color: #a76e43;
//   }
// `;

const Button = styled.button`
  font-size: 16px;
  font-weight: 600;
  font-family: "Cormorant";
  display: inline-block;
  transition: all 0.4s ease 0s;
  border: none;
  background-color: #e6b451;
  color: black;
  padding: 4px;
  border-radius: 1px;

  @media (min-width: 768px) {
    &:hover {
      background: #fdcb6e;
      color: white;
    }
    &:active {
      background: #fdcb6e;
      color: black;
    }
  }
`;

const FavLink = styled(Link)`
  border: none;
  text-decoration: none !important;
`;

// const Image = styled.img`
//   width: 12px;
//   height: 12px;
// `;
// const Text = styled.p`
//   font-family: "Courier New", Courier, monospace;
//   font-size: 14px;
//   margin-left: 7px;
// `;

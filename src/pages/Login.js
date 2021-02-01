// import React, { useState } from "react";
// import { useDispatch } from "react-redux";

// import { SubmitButton } from "components/SubmitButton";
// import { InputField } from "components/InputField";
// import { UserProfile } from "./UserProfile";
// import { user } from "../reducers/user";

// import styled from "styled-components";
// import { rgba } from "polished";

// const LOGIN = "https://project-auth-liza-kat.herokuapp.com/sessions";

// export const Login = () => {
//   const dispatch = useDispatch();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [logInFailed, setLogInFailed] = useState(false);
//   const [logInSuccess, setLogInSuccess] = useState(false);

//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     fetch(LOGIN, {
//       method: "POST",
//       body: JSON.stringify({
//         password,
//         email,
//       }),
//       headers: { "Content-Type": "application/json" },
//     })
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error("Could not create account. Please try again");
//         }
//         return res.json();
//       })
//       .then((json) => {
//         dispatch(user.actions.setUserId({ userId: json.id }));
//         dispatch(
//           user.actions.setAccessToken({ accessToken: json.accessToken })
//         );
//         setLogInSuccess(true);
//       })
//       .catch(() => {
//         setLogInFailed(true);
//       })
//       .finally(() => {
//         setEmail("");
//         setPassword("");
//       });
//   };

//   return (
//     <>
//       {logInSuccess === true ? (
//         <UserProfile />
//       ) : (
//         <Image>
//           <Form onSubmit={handleFormSubmit}>
//             <Text>Log in</Text>
//             <InputField
//               name="email"
//               label="Email"
//               type="email"
//               value={email}
//               placeholder="email"
//               onChange={(event) => setEmail(event.target.value)}
//               minLength="3"
//             />
//             <InputField
//               name="password"
//               label="Password"
//               type="password"
//               value={password}
//               placeholder="password"
//               onChange={(event) => setPassword(event.target.value)}
//               minLength="6"
//             />
//             {logInFailed && (
//               <span>
//                 <Text>
//                   Failed to log in. Email and/or password incorrect. Please try
//                   again.
//                 </Text>
//               </span>
//             )}
//             <SubmitButton title="Log in" />
//           </Form>
//         </Image>
//       )}
//       ;
//     </>
//   );
// };

// const Image = styled.main`
//   background-image: url("${process.env.PUBLIC_URL + "/flower.jpg"}");
//   position: fixed;
//   width: 100%;
//   height: 100%;
//   background-size: cover;
// `;
// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   width: 30%;
//   margin-bottom: 30px;
//   margin: 100px auto;
//   align-items: center;
//   justify-content: center;
//   padding: 5px;
//   border-radius: 5px;
//   background-color: ${rgba("#a1bdc8", 0.5)};
//   @media (max-width: 950px) {
//     margin: 30px auto;
//     width: 60%;
//     margin-bottom: 10px;
//   }
//   @media (max-width: 660px) {
//     margin: 30px auto;
//     width: 60%;
//     margin-bottom: 10px;
//   }
// `;
// const Text = styled.text`
//   display: flex;
//   padding: 10px;
//   font-size: 20px;
//   flex-direction: column;
//   color: #a73e42;
//   font-weight: bold;
//   font-family: "Xanh Mono", monospace;
//   align-items: center;
//   justify-content: center;
//   text-align: center;
//   text-transform: uppercase;
//   margin-top: 30px;
//   letter-spacing: 2px;
//   @media (max-width: 950px) {
//     font-size: 17px;
//     margin-top: 10px;
//   }
//   @media (max-width: 660px) {
//     font-size: 17px;
//     margin-top: 10px;
//   }
// `;
import React from "react";

export const Login = () => {
  return (
    <>
      <h1>Login</h1>
      <button type="submit">Login</button>

    </>
  );
};

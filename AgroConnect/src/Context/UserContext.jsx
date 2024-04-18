//user registration, user details update, farm & user registration
import { useState, createContext } from "react";
import { v4 as uuid } from "uuid";
import { create } from "../api";

export const UserContext = createContext();

async function register(user) {
  let res = await create("api/user", user);
  if (res.status) alert("user created");//נחזיר ערך מתאים למי שקרא על מנת לפעול בהתאם
  else alert("something went wrong");
}

async function updateUser(userId, user) {
  let res = await update(`api/user/${userId}`, user);
  if (res && res.status === 200) { // Assuming 200 is the status code for a successful update
      alert("User updated successfully");
  } else {
      alert("Failed to update user");
  }
}



// export default function UserContextProvider(props) {
//   const [user, setUser] = useState(null);

//   const postUser = (user) => {
//     setUser(user);
//     fetch(apiUrl, {
//       method: "POST",
//       body: JSON.stringify(user),
//       headers: new Headers({
//         "Content-type": "application/json; charset=UTF-8", //very important to add the 'charset=UTF-8'!!!!
//         Accept: "application/json; charset=UTF-8",
//       }),
//     })
//       .then((res) => {
//         console.log("res=", res);
//         return res.json();
//       })
//       .then(
//         (result) => {
//           console.log("fetch POST= ", result);
//           console.log(result.grade);
//         },
//         (error) => {
//           console.log("err post=", error);
//         }
//       );
//   };

//   const getUser = () => {
//     fetch(apiUrl, {
//       method: "GET", //פעולה
//       headers: new Headers({
//         "Content-Type": "application/json; charset=UTF-8", //בתור מה מקבל
//         Accept: "application/json; charset=UTF-8", //שולח בגייסונית
//       }),
//     })
//       //כשיחזור
//       .then((res) => {
//         console.log("res=", res);
//         console.log("res.status", res.status); //להסתכל על הסטטוס של התשובה-אולי קיבלנו שגיאה ואפעל בהתאם
//         console.log("res.ok", res.ok);
//         return res.json(); //אם הכל טוב תביא את הבאדי
//       })
//       //קבלת המידע שיש בפנים והצגתו/פעולה עליו בהתאם לצורך
//       .then(
//         (result) => {
//           console.log("fetch btnFetchGetStudents= ", result);
//           console.log("result.name=", result.name);
//         },
//         (error) => {
//           console.log("err post=", error);
//         }
//       );
//   };

//   const updateUser = (id) => {
//     setHobbies(hobbies.filter((hob) => hob.id !== id));
//   };

//   return (
//     <UserContext.Provider value={{ user, postUser, getUser, updateUser }}>
//       {props.children}
//     </UserContext.Provider>
//   );
// }

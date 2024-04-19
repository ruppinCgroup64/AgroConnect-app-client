//user details, user registration, user details update, farm & user registration
import { useState, createContext } from "react";
import { create } from "../api";

export const UsersContext = createContext();

export default function UsersContextProvider(props) {
  const [user, setUser] = useState({
    firstName: "עדי",
    lastName: "חדד",
    dateOfBirth: "30/08/1998",
    gender: "נקבה",
    email: "adi@gmail.com",
    phoneNum: "0501234567",
    address: "בארותיים, הפלג, 200",
    latitude: "123",
    longitude:"123",
    password: "1234",
    confirmPassword: "1234",
    profilePic:
      "file:///var/mobile/Containers/Data/Application/DA33310A-7189-40D0-AAD7-855F44CD2353/Library/Caches/ExponentExperienceData/@anonymous/AgroConnect-a9363ae1-df3b-4be5-aa0a-fec0396bfdda/ImagePicker/3191E62A-A295-4C27-B4D8-08D4785087DA.jpg",
    isFarmer: false,
  });

  async function register(user) {
    let res = await create("api/user", user);
    if (res.status)
      alert("user created"); //נחזיר ערך מתאים למי שקרא על מנת לפעול בהתאם
    else alert("something went wrong");
  }

  async function updateUser(userId, user) {
    let res = await update(`api/user/${userId}`, user);
    if (res && res.status === 200) {
      // Assuming 200 is the status code for a successful update
      alert("User updated successfully");
    } else {
      alert("Failed to update user");
    }
  }
  return (
    <UsersContext.Provider value={{ user, setUser, register, updateUser }}>
      {props.children}
    </UsersContext.Provider>
  );
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

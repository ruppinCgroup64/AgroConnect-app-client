//API Templates
let local = true;
const BASE_URL = "https://proj.ruppin.ac.il/cgroup64/test2/";
if (!local) BASE_URL = "hproj.ruppint:7075/api/Consumers"; //השרת המקומי

export async function create(url, data) {
  try {
    let res = await fetch(`${BASE_URL}/${url}`, {
      method: "POST",
      body: data ? JSON.stringify(data) : "",
      headers: new Headers({
        "Content-type": "application/json; charset=UTF-8", //very important to add the 'charset=UTF-8'!!!!
        Accept: "application/json; charset=UTF-8",
      }),
    });
    return await res.json(); //ככה נעשה
  } 
  catch (err) {
    return {status:false, err}//בעיה בקוד/שגיאת שרת
  }
}

export async function read(url) {
  await fetch(`${BASE_URL}/${url}`, {
    method: "GET",
    headers: new Headers({
      Accept: "application/json; charset=UTF-8",
    }),
  })
    .then((res) => {
      console.log("Response:", res);
      return res.json();
    })
    .then(
      (result) => {
        console.log("Fetch GET=", result);
      },
      (error) => {
        console.log("Error GET=", error);
      }
    );
}

export async function update(url, data) {
  await fetch(`${BASE_URL}/${url}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: new Headers({
      "Content-Type": "application/json; charset=UTF-8",
      Accept: "application/json; charset=UTF-8",
    }),
  })
    .then((res) => {
      console.log("Response:", res);
      return res.json();
    })
    .then(
      (result) => {
        console.log("Fetch PUT=", result);
      },
      (error) => {
        console.log("Error PUT=", error);
      }
    );
}

export async function remove(url) {
  await fetch(`${BASE_URL}/${url}`, {
    method: "DELETE",
    headers: new Headers({
      Accept: "application/json; charset=UTF-8",
    }),
  })
    .then((res) => {
      console.log("Response:", res);
      return res.json();
    })
    .then(
      (result) => {
        console.log("Fetch DELETE=", result);
      },
      (error) => {
        console.log("Error DELETE=", error);
      }
    );
}

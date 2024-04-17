const BASE_URL = "https://cgroup64.ruppin.ac.il";

export async function create(url, data) {
  let res = await fetch(`${BASE_URL}/${url}`, {
    method: "POST",
    body: data ? JSON.stringify(data) : "",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await res.json();
  fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify(user),
    headers: new Headers({
      "Content-type": "application/json; charset=UTF-8", //very important to add the 'charset=UTF-8'!!!!
      Accept: "application/json; charset=UTF-8",
    }),
  })
    .then((res) => {
      console.log("res=", res);
      return res.json();
    })
    .then(
      (result) => {
        console.log("fetch POST= ", result);
        console.log(result.grade);
      },
      (error) => {
        console.log("err post=", error);
      }
    );
}

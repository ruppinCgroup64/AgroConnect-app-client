//API Templates
let local = true;
let BASE_URL = "https://proj.ruppin.ac.il/cgroup64/test2/tar1";

export async function create(url, data) {
  try {
    let res = await fetch(`${BASE_URL}/${url}`, {
      method: "POST",
      body: data ? JSON.stringify(data) : "",
      headers: new Headers({
        "Content-type": "application/json; charset=UTF-8",
        "Accept": "application/json; charset=UTF-8",
      }),
    });
    if (res.ok) {
      return await res.json();
    } else {
      const errorBody = await res.text();
      alert("something went wrong");
      throw new Error(`HTTP ${res.status}: ${errorBody}`);

    }
  } catch (err) {
    console.error(err);
    return { status: false, err: err.message };
  }
}

export async function read(url) {
  try {
    let res = await fetch(`${BASE_URL}/${url}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8", //very important to add the 'charset=UTF-8'!!!!
        "Accept": "application/json; charset=UTF-8",
      },
    });
    
    return await res.json();
  } catch (err) {
    return { status: false, err };
  }
}



// export async function Get(url){
//   let res=await fetch(${baseURL}/${url},{
//       method:'GET',
//   });
// if(res.status===404){
//   return false;
// }
// return await res.json(); 
// }

export async function update(url, data) {
  try {
    let res = await fetch(`${BASE_URL}/${url}`, {
      method: "PUT",
      body: data ? JSON.stringify(data) : "",
      headers: new Headers({
        "Content-type": "application/json; charset=UTF-8", //very important to add the 'charset=UTF-8'!!!!
        "Accept": "application/json; charset=UTF-8",
      }),
    });
    if (res.ok) {
      return await res.json();
    } else {
      const errorBody = await res.text();
      throw new Error(`HTTP ${res.status}: ${errorBody}`);
    }
  } catch (err) {
    console.error(err);
    return { status: false, err: err.message };
  }
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

export async function uploadFile(selectedImage) {
  try {
    const formData = new FormData();
    formData.append("files", {
      uri: selectedImage,
      type: "image/png",
      name: `${selectedImage.split("/").pop()}`,
    });
    let res = await fetch(`${BASE_URL}/api/Upload`, {
      method: "POST",
      body: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        "Accept": "application/json; charset=UTF-8",
      },
    });
    let fRes = await res.json();
    if (fRes) {
      return BASE_URL + "/images/" + fRes;
    } else return false;
  } catch (err) {
    return { status: false, err };
  }
}

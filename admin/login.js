function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

async function handleSubmit(event) {
  event.preventDefault();
  const fromData = new FormData(event.target);
  const value = Object.fromEntries(fromData.entries());
  console.log(value);
  let headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzcXRvdnFweHlrbmRncG9oYm1sIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcxMzc4OTgsImV4cCI6MTk5MjcxMzg5OH0.zHwnpc9Cbij0yDWF4fIiJ4aH6_4hovd10in2VOnR44I",
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify(value);

  let response = await fetch(
    "https://asqtovqpxykndgpohbml.supabase.co/auth/v1/token?grant_type=password",
    {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    }
  );

  let data = await response.json();
  if (response.status === 400) {
    alert(data["error_description"]);
    return;
  }
  setCookie("key", data["access_token"], 10);
  window.location.href = "./options";
}

const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

// function getCookie(cname) {
//   let name = cname + "=";
//   let decodedCookie = decodeURIComponent(document.cookie);
//   let ca = decodedCookie.split(";");
//   for (let i = 0; i < ca.length; i++) {
//     let c = ca[i];
//     while (c.charAt(0) == " ") {
//       c = c.substring(1);
//     }
//     if (c.indexOf(name) == 0) {
//       return c.substring(name.length, c.length);
//     }
//   }
//   return "";
// }

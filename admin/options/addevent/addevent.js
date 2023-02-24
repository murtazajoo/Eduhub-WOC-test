async function handleSubmit(event) {
  event.preventDefault();
  const loader = document.getElementById("loader-ele");
  loader.classList.add("d-flex");
  loader.classList.remove("d-none");

  const data = new FormData(event.target);
  const value = Object.fromEntries(data.entries());
  if (value["end-url"] === "") {
    delete value["end-url"];
  }
  let headersList = {
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzcXRvdnFweHlrbmRncG9oYm1sIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcxMzc4OTgsImV4cCI6MTk5MjcxMzg5OH0.zHwnpc9Cbij0yDWF4fIiJ4aH6_4hovd10in2VOnR44I",
    Authorization:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzcXRvdnFweHlrbmRncG9oYm1sIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcxMzc4OTgsImV4cCI6MTk5MjcxMzg5OH0.zHwnpc9Cbij0yDWF4fIiJ4aH6_4hovd10in2VOnR44I",
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify(value);

  let response = await fetch(
    "https://asqtovqpxykndgpohbml.supabase.co/rest/v1/events",
    {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    }
  );

  if (response.status !== 201) {
    let responseData = await response.json();
    alert(responseData.details);
  } else {
    alert("Event added successfully");
    window.location.reload();
  }
  loader.classList.add("d-none");
  loader.classList.remove("d-flex");
}

const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

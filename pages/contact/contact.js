async function handleSubmit(event) {
  event.preventDefault();
  document.getElementById("submit-btn").classList.add("disabled");
  const fromData = new FormData(event.target);
  const value = Object.fromEntries(fromData.entries());
  let headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzcXRvdnFweHlrbmRncG9oYm1sIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcxMzc4OTgsImV4cCI6MTk5MjcxMzg5OH0.zHwnpc9Cbij0yDWF4fIiJ4aH6_4hovd10in2VOnR44I",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzcXRvdnFweHlrbmRncG9oYm1sIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcxMzc4OTgsImV4cCI6MTk5MjcxMzg5OH0.zHwnpc9Cbij0yDWF4fIiJ4aH6_4hovd10in2VOnR44I",
    "Content-Type": "application/json",
    Prefer: "return=minimal",
  };

  let bodyContent = JSON.stringify(value);

  let response = await fetch(
    "https://asqtovqpxykndgpohbml.supabase.co/rest/v1/contact",
    {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    }
  );

  let data = await response.text();
  console.log(data);
  document.getElementById("success-message").innerHTML = `      <div
              class="container d-flex justify-content-center align-items-center"
              style="min-height: 30vh; width: 100%"
            >
              <div class="alert alert-success text-center">
                Your query has been submitted, Our team will come back to you
                within a matter of hours to help you.
                <p>Take a look at our latest events for the meanwhile</p>
                <br />
                <a class="btn btn-primary" href="../events/">Latest Events</a>
              </div>
            </div>`;
}

const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

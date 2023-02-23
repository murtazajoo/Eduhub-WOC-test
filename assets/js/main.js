async function getEvents(f) {
  let headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzcXRvdnFweHlrbmRncG9oYm1sIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcxMzc4OTgsImV4cCI6MTk5MjcxMzg5OH0.zHwnpc9Cbij0yDWF4fIiJ4aH6_4hovd10in2VOnR44I",
    Authorization:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzcXRvdnFweHlrbmRncG9oYm1sIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcxMzc4OTgsImV4cCI6MTk5MjcxMzg5OH0.zHwnpc9Cbij0yDWF4fIiJ4aH6_4hovd10in2VOnR44I",
  };

  let response = await fetch(
    "https://asqtovqpxykndgpohbml.supabase.co/rest/v1/events?select=*",
    {
      method: "GET",
      headers: headersList,
    }
  );

  let data = await response.json();
  console.log(data);
  f(data);
}

getEvents(renderHomeEvents);

function renderHomeEvents(data) {
  const events = data.reverse().slice(0, 4);
  const eventsContainer = document.querySelector("#events-container");
  let finalHTML = "";
  events.map((event) => {
    finalHTML += `   <div data-aos="fade-up" class="event round shadow poppins">
              <img
                src="${event.image}"
                class="img-fluid round"
                alt=""
              />
              <div class="container-fluid">
                <h5 class="py-2">${event.title}</h5>
                <div class="row">
                  <div class="col-6"><a href="./event.html?id=${event.id}">details</a></div>
                  <div class="col-6 text-end px-0">
                    <a href="./event.html?id=${event["end-url"]}" class="btn btn-primary round">Watch</a>
                  </div>
                </div>
              </div>
            </div>`;
  });
  finalHTML += `   <div
              class="round d-flex justify-content-center align-items-center py-4 poppins"
            >
              <a href=""> all events</a>
            </div>`;
  eventsContainer.innerHTML = finalHTML;
}

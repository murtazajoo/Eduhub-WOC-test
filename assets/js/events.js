async function getEvents(f, all) {
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
  f(data, all);
}

function DateToMill(d) {
  var date = new Date(d); // some mock date
  var milliseconds = date.getTime();
  console.log(milliseconds);
  return milliseconds;
}

function renderHomeEvents(data, all) {
  let events = data.reverse();
  if (!all) {
    events = events.slice(0, 5);
  }
  const eventsContainer = document.querySelector("#events-container");
  let finalHTML = "";
  events.map((event) => {
    event_ended =
      DateToMill(new Date().toLocaleString()) > DateToMill(event.date);
    finalHTML += `   <div data-aos="fade-up" class="event round shadow poppins">
              <img
                src="${event.image}"
                class="img-fluid round"
                alt=""
              />
              <div class="container-fluid">
                <h5 class="py-2 title">${event.title}</h5>
                <div class="row">
                  <div class="col-6"><a href="${
                    all
                      ? "./event/?id=" + event.id
                      : "./pages/events/event/?id=" + event.id
                  }">details</a></div>
                  <div class="col-6 text-end px-0">
                    <a href="${
                      event_ended
                        ? event["end-url"]
                        : all
                        ? "./event/?id=" + event.id
                        : "./pages/events/event/?id=" + event.id
                    }" class="btn ${
      event_ended ? "btn-dark" : "btn-primary "
    } round">${
      event_ended ? "<i class='fab fa-youtube'></i> Watch" : "Register"
    }</a>
                  </div>
                </div>
              </div>
            </div>`;
  });
  if (!all) {
    finalHTML += `   <div
              class="round d-flex justify-content-center align-items-center py-4 poppins"
            >
              <a href="./pages/events"> all events</a>
            </div>`;
  }

  eventsContainer.innerHTML = finalHTML;
}

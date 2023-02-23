getEvents(renderEventDetails);

function renderEventDetails(data, all) {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  let event = data.filter((event) => event.id == id);
  const { title, date, location, type, description, image } = event[0];
  event_ended =
    DateToMill(new Date().toLocaleString()) > DateToMill(event[0].date);

  console.log(title, date, location, type, description, image);
  let finalHtml = `<div class="row poppins g-4">
          <div class="col-md-4 col-lg-4 col-12">
            <img
              src="${image}"
              class="img-fluid round shadow border border-info"
              alt="image for the event"
            />
          </div>
          <div class="col-md-8 col-lg-8 col-12">
            <h2 class="pb-4">${title}</h2>
            <p class="text-lowercase">
<span class="text-muted text-uppercase">About :</span>

              ${description}

            </p>
            <div class="container-fluid px-0">
              <div class="row py-2 g-4">
                <div class="col-md-6 col-lg-6 col-12">
                  <span class="text-muted">Date|Time : </span> ${
                    event_ended ? "Event has Ended" : date
                  }
                </div>
                <div class="col-md-6 col-lg-6 col-12">
                  <span class="text-muted">Type :</span>
                  <span class="px-2 round text-primary">${type}</span>
                </div>
              </div>
              <div class="row py-2 g-3">
                <div class="col-md-6 col-lg-6 col-12">
                  <span class="text-muted"> location : </span> ${location}
                </div>
              </div>
                 <a href="${
                   event_ended ? event[0]["end-url"] : event[0]["register-url"]
                 }" class="btn ${
    event_ended ? "btn-danger" : "btn-primary "
  } round my-4">${
    event_ended ? "<i class='fab fa-youtube'></i> Watch Recording" : "Register"
  }</a>
            </div>
          </div>
        </div>`;
  document.querySelector("#event-details").innerHTML = finalHtml;
}

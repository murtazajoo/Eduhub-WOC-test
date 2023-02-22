async function getPosts() {
  fetch(
    "https://rss-to-json-serverless-api.vercel.app/api?feedURL=https%3A%2F%2Fsahityaroy.hashnode.dev%2Frss.xml"
  )
    .then(function (response) {
      // The API call was successful!
      return response.json();
    })
    .then(function (data) {
      // This is the JSON from our response

      renderPosts(data);
    })
    .catch(function (err) {
      // There was an error
      console.warn("Something went wrong.", err);
    });
}

getPosts();

function renderPosts(data) {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  const postContainer = document.querySelector("#post-container");
  const post = data.items.filter((post) => post.id === id);
  let finalHtml = `<article class=" my-5   p-3 m-auto container" >
    <div class="card-body">
        <h5 class=" h3">
            ${post[0].title}
            </h5>
            <p class="text-muted"> published at ${new Date(
              post[0].published
            ).toLocaleDateString()}</p>
             <p class="text-muted"> Author : <span class="text-dark"> ${
               post[0].author
             }</span</p>
                <div class="  in-img-fluid">
                    ${post[0].description}
                    </div>    
                    </div>
                    </article>`;
  postContainer.innerHTML = finalHtml;
}

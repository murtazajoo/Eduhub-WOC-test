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
      if (data.items.length > 30) {
        data = data.items.slice(0, 30);
      }
      renderPosts(data);
    })
    .catch(function (err) {
      // There was an error
      console.warn("Something went wrong.", err);
    });
}

getPosts();

function renderPosts(data) {
  const blogContainer = document.querySelector("#blog-container");
  let finalHtml = "";
  data.items.forEach((post) => {
    finalHtml += ` <article class="card my-5 border border-info  p-3 m-auto" style="width: 80%">
        <div class="card-body">
          <h5 class="card-title h3">
           ${post.title}
          </h5>
               <p class="text-muted">${new Date(
                 post.published
               ).toLocaleDateString()}</p>
          <discription class=" text-muted no-img dis">
         ${post.description}
          ...
          </discription>
          </span>
          <br>
          <a href="./post/?id=${post.id.replace(/[./:]/g, '');}" class="btn btn-link">read more</a>
        </div>
      </article>`;
  });
  blogContainer.innerHTML = finalHtml;
}

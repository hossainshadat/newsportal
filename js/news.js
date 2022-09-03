const loadNews = async () => {
  try {
    const res = await fetch(
      "https://openapi.programming-hero.com/api/news/category/01"
    );
    const data = await res.json();

    const newsData = data.data;
    return newsData;
  } catch (error) {
    return error;
  }
};

loadNews();

const displayNews = async () => {
  const news = await loadNews();

  const newsContainer = document.getElementById("news-container");

  newsContainer.innerHTML = "";

  news.forEach((item) => {
    const div = document.createElement("div");

    div.classList.add("card", "mb-3");

    // console.log(item);
    const {
      thumbnail_url: thumbnail,
      title,
      details,
      author,
      total_view,
      _id,
    } = item;

    div.innerHTML = `
    
                <div class="row g-0">
                    <div class="col-md-3">
                        <img src="${thumbnail}" class="img-fluid rounded-start" alt=${title}>
                    </div>
                    <div class="col-md-9">
                        <div class="card-body">
                            <h5 class="card-title">${title}</h5>
                            <p class="card-text">${details}</p>
                            <div class="d-flex justify-content-between">
                                <div class="d-flex">
                                    <img class="me-3 " src="${
                                      author.img
                                    }" alt="Author" srcset="" style="height: 50px; width: 50px; border-radius:50%">
                                    <div class="d-flex flex-column align-items-start ">
                                        <p style="margin-bottom: -7px;">${
                                          author.name
                                        }</p>
                                        <p class="card-text"><small class="text-muted">${
                                          author.published_date
                                        }</small>
                                        </p>
                                    </div>
                                </div>

                                <div class="d-flex align-items-center">
                                    <img class="me-2" src="img/eye.svg" alt="View" style="width: 20px;">
                                    <p class="card-text"><span>${total_view}</span>M</p>
                                </div>
                                <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#product-details" onclick="${loadDetailNews(
                                  _id
                                )}">
                                Product Details</button>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
    
    `;

    newsContainer.appendChild(div);
  });
};
displayNews();

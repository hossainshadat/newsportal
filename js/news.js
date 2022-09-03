const loadNews = async (id) => {
  try {
    const res = await fetch(
      `https://openapi.programming-hero.com/api/news/category/${id}`
    );
    const data = await res.json();

    const newsData = data.data;

    displayNews(newsData);
    // newsData.forEach(data=> console.log(data))
    return newsData;
  } catch (error) {
    console.log(error);
    return error;
  }
};

loadNews("08");

const displayNews = (news) => {
  const spinner = document.getElementById("spinner");
  const notFound = document.getElementById("not-found");
  spinner.classList.remove("d-none");
  console.log(news);

  if (news.length == 0) {
    notFound.classList.remove("d-none");
    spinner.classList.add("d-none");
  }
  // sorting
  news.sort((a, b) => {
    return b.total_view - a.total_view;
  });

  const newsContainer = document.getElementById("news-container");

  newsContainer.innerHTML = "";

  const categoryItemNumber = document.getElementById("category-item-number");
  categoryItemNumber.innerText = news.length;

  news.forEach((item) => {
    const div = document.createElement("div");

    div.classList.add("card", "mb-5", "shadow");

    spinner.classList.add("d-none");
    notFound.classList.add("d-none");
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
    
                <div class="row g-0 p-md-4">
                    <div class="col-lg-3 col-12">
                        <img src="${thumbnail}" class="img-fluid rounded-start" alt=${
      title ? title : "No data available"
    } style="width: 100%;" >
                    </div>
                    <div class="col-lg-9 col-12">
                        <div class="card-body">
                            <h5 class="card-title">${
                              title !== null ? title : "No data available"
                            }</h5>
                            <p class="card-text mb-4">${
                              details.length > 1000
                                ? details.slice(0, 700)
                                : details
                            }${"..."}</p>
                            <div class="d-flex justify-content-between">
                                <div class="d-flex">
                                    <img class="me-3 " src="${
                                      author.img
                                    }" alt="Author" srcset="" style="height: 50px; width: 50px; border-radius:50%">
                                    <div class="d-flex flex-column align-items-start ">
                                        <p style="margin-bottom: -7px;">${
                                          author.name
                                            ? author.name
                                            : "No Author"
                                        }</p>
                                        <p class="card-text"><small class="text-muted">${
                                          author.published_date == null
                                            ? "No Published Date"
                                            : author.published_date
                                        }</small>
                                        </p>
                                    </div>
                                </div>

                                <div class="d-flex align-items-center">
                                    <img class="me-2" src="img/eye.svg" alt="View" style="width: 20px;">
                                    <p class="card-text"><span>${
                                      total_view ? total_view : 0
                                    }</span>M</p>
                                </div>
                                
                                    <img data-bs-toggle="modal" data-bs-target="#product-details" onclick="loadDetailNews( '${_id}')" src="img/arrow.svg" alt="Detail" srcset="">
                            </div>
                        </div>
                    </div>
                </div>
    
    `;

    newsContainer.appendChild(div);
  });
};
displayNews();

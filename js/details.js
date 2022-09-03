const loadDetailNews = async (id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/${id}`
  );
  //   console.log(res);
  const data = await res.json();

  const newsData = data.data[0];
  detailNews(newsData);
};

const detailNews = (data) => {
  const modalContainer = document.getElementById("modal-body");
  modalContainer.innerHTML = "";
  // console.log(data);

  const { title, details, author, total_view, thumbnail_url } = data;

  modalContainer.innerHTML = `
    <div class="card">
        <img src="${thumbnail_url}" class="card-img-top" alt=${
    title ? title : "Not Available"
  } " >
        <div class="card-body">
        <h5 class="card-title">${author.name ? author.name : "No Author"}</h5>
        <p class="card-text">${
          details.length > 600 ? details.slice(0, 350) : details
        }${"..."}</p>
        </div>
        <div class='row ps-3'>
  <div class='col-6 '>Published Date: ${
    author.published_date == null ? "No Published Date" : author.published_date
  }</div>
  <div class='col-6'>Rating Count: ${total_view ? total_view : 0}</div>
  </div>
    `;
};
loadDetailNews();

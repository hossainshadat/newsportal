const loadCatagory = async () => {
  try {
    const res = await fetch(
      "https://openapi.programming-hero.com/api/news/categories"
    );
    const data = await res.json();
    const newsData = data.data.news_category;
    return newsData;
  } catch (error) {
    return error;
  }
};

//  Category view
const categoryView = async () => {
  const categories = await loadCatagory();

  const categoryContainer = document.getElementById("category-container");
  categories.forEach((category) => {
    const li = document.createElement("li");
    li.classList.add("nav-item", "liItem");
    const { category_name, category_id } = category;

    li.innerHTML = `
                <a onclick="loadNews('${category_id}','${category_name}')" 
                class="nav-link" href="#">${category_name}</a>
    `;

    categoryContainer.appendChild(li);
  });
};

categoryView();

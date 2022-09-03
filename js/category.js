const loadCatagory = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories"
  );
  const data = await res.json();
  const newsData = data.data.news_category;
  return newsData;
};

//  Category view
const categoryView = async () => {
  const categories = await loadCatagory();
  //   console.log(categories);

  const categoryContainer = document.getElementById("category-container");
  categories.forEach((category) => {
    // console.log(category);
    const li = document.createElement("li");
    li.classList.add("nav-item");
    const { category_name } = category;

    li.innerHTML = `
                <a onclick='' 
                class="nav-link" href="#">${category_name}</a>
    `;

    categoryContainer.appendChild(li);
  });
};

categoryView();

// category : https://www.youtube.com/watch?v=6nRPrwmxkkE

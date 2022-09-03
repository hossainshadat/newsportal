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
  console.log(categories);

  const categoryContainer = document.getElementById("category-container");
  categories.forEach((category) => {
    // console.log(category);
    const li = document.createElement("li");
    li.classList.add("nav-item", "liItem");
    const { category_name, category_id } = category;

    li.innerHTML = `
                <a onclick="loadNews('${category_id}')" 
                class="nav-link" href="#">${category_name}</a>
    `;

    categoryContainer.appendChild(li);
  });

  const categoryItemName = document.getElementById("category-item-name");
  // categoryItemNumber.innerHTML = ''
  console.log(news.length);

  categoryItemName.innerText = ` ${categories.category_name}`;
};

categoryView();

// category : https://www.youtube.com/watch?v=6nRPrwmxkkE

// const liItem = document.querySelectorAll('.liItem')

// liItem.forEach(li=> {
//   li.onclick = function() {
//     console.log(li)
//     // active
//     liItem.forEach(li => {
//       li.className = ''
//     })
//     li.className = 'active'
//   }

//   console.log(li.textContent)
// })

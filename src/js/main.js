// references
const toggle = document.querySelector("#toggle");
const body = document.body;

// localStorage
const savedMood = localStorage.getItem("mood");
if (savedMood === "dark") {
  body.classList.add("dark");
  toggle.innerHTML = `<i class="fa-solid fa-sun"></i>`;
} else {
  body.classList.remove("dark");
  toggle.innerHTML = `<i class="fa-solid fa-moon"></i>`;
}

// toggle dark light
toggle.addEventListener("click", function () {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    toggle.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    localStorage.setItem("mood", "dark");
  } else {
    toggle.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    localStorage.setItem("mood", "light");
  }
});

// open navbar
let flagToggle = false;
const menuToggle = document.querySelector("#menuToggle");
const mobileMenu = document.querySelector("#mobileMenu");
menuToggle.addEventListener("click", () => {
  flagToggle = !flagToggle;
  flagToggle
    ? (menuToggle.innerHTML = `<i class="fa-solid fa-close "></i>`)
    : (menuToggle.innerHTML = `<i class="fa-solid fa-bars-staggered "></i>`);

  mobileMenu.classList.toggle("hidden");
  mobileMenu.classList.toggle("flex");
});

//active link
const navLinks = document.querySelectorAll("#mobileMenu a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((l) => l.classList.remove("active-link"));
    link.classList.add("active-link");
  });
});

// swiper
const swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

// API menu
const mealsGrid = document.querySelector("#menu .grid");
const tabs = document.querySelectorAll(".tabs li");

function renderMeals(meals) {
  mealsGrid.innerHTML = meals
    .slice(0, 12)
    .map(
      (meal, i) => `
    <div class="card text-center shadow-lg rounded  p-3 dark:bg-[#000]">
      <img src="${
        meal.strMealThumb
      }" class="w-full object-cover rounded" alt="${meal.strMeal}" />
      <p class="text-muted pt-3 ">${meal.strMeal}</p>
      <p class="text-primary font-bold text-2xl">${(
        Math.random() * 100 + //  100 to 200
        100
      ).toFixed(0)}$</p>
    </div>
  `
    )
    .join("");
}
// async Api
async function fetchMeals(category) {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
  );
  const data = await res.json();

  return data.meals;
}

// active
tabs.forEach((tab) => {
  tab.addEventListener("click", async () => {
    tabs.forEach((t) => t.classList.remove("active-tab"));

    tab.classList.add("active-tab");

    const category = tab.innerText.trim();
    const meals = await fetchMeals(category);
    renderMeals(meals);
  });
});

fetchMeals("Beef").then(renderMeals);

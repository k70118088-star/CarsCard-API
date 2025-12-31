const container = document.getElementById("cars");

fetch("https://dummyjson.com/c/68a9-8ef6-4b20-a51c")
  .then(res => res.json())
  .then(data => {
    const cars = data.cars ?? data; 

    cars.forEach(car => {
      const card = document.createElement("div");
      card.className = "car-card";

      card.innerHTML = `
        <img src="${car.image}" alt="${car.name}">
        <div class="car-info">
          <h3>${car.name}</h3>
          <p class="brand">${car.brand}</p>
          <p class="rating">★ ${car.rating}</p>
          <p class="price">${car.price}</p>
        </div>
      `;

      container.appendChild(card);
    });
  })
  .catch(err => {
    console.error("Fetch error:", err);
    container.innerHTML = "<p>Unable to load cars 😕</p>";
  });

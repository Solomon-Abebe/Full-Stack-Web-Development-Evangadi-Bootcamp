// Function to handle form submission
document
  .getElementById("productForm")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    const productData = {
      product_name: document.getElementById("product_name").value,
      product_url: document.getElementById("product_url").value,
      product_brief_description: document.getElementById(
        "product_brief_description"
      ).value,
      product_description: document.getElementById("product_description").value,
      product_img: document.getElementById("product_img").value,
      product_link: document.getElementById("product_link").value,
      starting_price: document.getElementById("starting_price").value,
      price_range: document.getElementById("price_range").value,
      user_name: document.getElementById("user_name").value,
      user_password: document.getElementById("user_password").value,
    };

    try {
      const response = await fetch("http://localhost:7788/add-product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });

      const result = await response.text();
      alert(result); // Displays the result in an alert box
    } catch (error) {
      console.error("Error submitting product data:", error);
    }
  });

// Function to fetch products


document.getElementById("fetchProducts").addEventListener("click", async () => {
  try {
    const response = await fetch("http://localhost:7788/get-products");
    const products = await response.json();

    const productList = document.getElementById("productList");
    productList.innerHTML = ""; // Clear previous product list

    products.forEach((product) => {
      const productItem = document.createElement("div");
      productItem.innerHTML = `
        <h3>${product.product_name}</h3>
        <p>URL: <a href="${product.product_url}">${product.product_url}</a></p>
        <p>Brief Description: ${product.product_brief_description}</p>
        <p>Description: ${product.product_description}</p>
        <p>Starting Price: ${product.starting_price}</p>
        <p>Price Range: ${product.price_range}</p>
        <p>User: ${product.user_name}</p>
      `;
      productList.appendChild(productItem);
    });
  } catch (error) {
    console.error("Error fetching product data:", error);
  }
});

// script.js

document.addEventListener("DOMContentLoaded", () => {
  // Subscribe button alert
  const subscribeBtn = document.getElementById("subscribeBtn");
  if (subscribeBtn) {
    subscribeBtn.addEventListener("click", () => {
      alert("Thank you for subscribing!");
    });
  }

  // Add to Cart functionality
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  document.querySelectorAll(".addToCart").forEach((button, idx) => {
    button.addEventListener("click", () => {
      const itemName = `Item ${idx + 1}`;
      cartItems.push(itemName);
      localStorage.setItem("cart", JSON.stringify(cartItems));
      alert(`${itemName} added to cart.`);
    });
  });

  // View Cart functionality
  const viewCartBtn = document.getElementById("viewCart");
  if (viewCartBtn) {
    viewCartBtn.addEventListener("click", () => {
      const items = JSON.parse(localStorage.getItem("cart")) || [];
      if (items.length === 0) {
        alert("Your cart is empty.");
      } else {
        alert("Cart Contents:\n" + items.join("\n"));
      }
    });
  }

  // Feedback form submission
  const feedbackForm = document.getElementById("feedbackForm");
  if (feedbackForm) {
    feedbackForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      sessionStorage.setItem(
        "feedback",
        JSON.stringify({ name, email, message })
      );
      alert("Feedback submitted. Thank you!");
      feedbackForm.reset();
    });
  }
});

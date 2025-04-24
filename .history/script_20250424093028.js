// Subscribe button alert
document.addEventListener("DOMContentLoaded", () => {
  const subscribeBtn = document.getElementById("subscribeBtn");
  if (subscribeBtn) {
    subscribeBtn.addEventListener("click", () => {
      alert("Thank you for subscribing!");
    });
  }

  // Add to Cart buttons
  const cartItems = [];
  const addToCartButtons = document.querySelectorAll(".addToCart");
  addToCartButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      cartItems.push(`Item ${index + 1}`);
      localStorage.setItem("cart", JSON.stringify(cartItems));
      alert(`Item ${index + 1} added to cart`);
    });
  });

  // View Cart
  const viewCartBtn = document.getElementById("viewCart");
  if (viewCartBtn) {
    viewCartBtn.addEventListener("click", () => {
      const items = JSON.parse(localStorage.getItem("cart")) || [];
      alert(`Cart Contents:\n${items.join("\n")}`);
    });
  }

  // Feedback Form submission
  const feedbackForm = document.getElementById("feedbackForm");
  if (feedbackForm) {
    feedbackForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      sessionStorage.setItem(
        "feedback",
        JSON.stringify({ name, email, message })
      );
      alert("Feedback submitted. Thank you!");
      feedbackForm.reset();
    });
  }
});

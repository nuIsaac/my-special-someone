let selectedFood = null;

document.querySelectorAll(".food-item").forEach(item => {
    item.addEventListener("click", function () {
        // Remove selection from all items
        document.querySelectorAll(".food-item").forEach(i => {
            i.classList.remove("selected");
        });

        // Select this item
        this.classList.add("selected");
        selectedFood = this.getAttribute("data-food");

        // Handle custom food option
        if (this.id === "custom-food-item") {
            document.getElementById("custom-food-input").style.display = "block";
            selectedFood = null; // Reset selected food until custom input is filled
        } else {
            document.getElementById("custom-food-input").style.display = "none";
        }
    });
});

// Handle custom food input
document.getElementById("custom-food-text").addEventListener("input", function () {
    selectedFood = this.value.trim();
});

document.getElementById("confirm-food-btn").addEventListener("click", function () {
    if (selectedFood) {
        localStorage.setItem("selectedFood", selectedFood); // Store the food choice
        window.location.href = "confirmation.html"; // Redirect to confirmation page
    } else {
        alert("Please select a food first or enter a custom choice!");
    }
});
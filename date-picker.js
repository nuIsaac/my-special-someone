const datePicker = flatpickr("#date-picker", {
    minDate: "today", // Prevent selecting past dates
    dateFormat: "Y-m-d", // Format: YYYY-MM-DD
});

document.getElementById("confirm-date-btn").addEventListener("click", function () {
    const selectedDate = datePicker.selectedDates[0];
    if (selectedDate) {
        localStorage.setItem("selectedDate", selectedDate.toISOString()); // Store the date
        window.location.href = "food-selection.html";
    } else {
        alert("Please select a date first!");
    }
});
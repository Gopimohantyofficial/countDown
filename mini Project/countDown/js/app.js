let timerInterval;
const inputs = document.querySelectorAll("input[type='text']");
const startButton = document.getElementById("start-timer");
const endDateInput = document.getElementById("end-date-input");

function clock(endDate) {
    clearInterval(timerInterval); // Clear previous intervals
    timerInterval = setInterval(() => {
        const end = new Date(endDate);
        const now = new Date();
        const diff = (end - now) / 1000;

        if (isNaN(diff) || diff <= 0) {
            clearInterval(timerInterval);
            alert("Countdown Finished!");
            return;
        }

        inputs[0].value = Math.floor(diff / 3600 / 24);  // Days
        inputs[1].value = Math.floor(diff / 3600) % 24;  // Hours
        inputs[2].value = Math.floor(diff / 60) % 60;    // Minutes
        inputs[3].value = Math.floor(diff) % 60;         // Seconds
    }, 1000);
}

startButton.addEventListener("click", () => {
    const userEndDate = endDateInput.value.trim();
    if (userEndDate) {
        clock(new Date(userEndDate).toISOString());
    } else {
        alert("Please select a valid date and time.");
    }
});

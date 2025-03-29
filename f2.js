// // Callbacks Usecases
// API Requests	Fetch user data, weather, stock prices
// Event Listeners	Click, keypress, scroll, form submission
// File Uploads	Track progress, cancel upload
// Authentication	Login validation, session management
// Timers	Delayed actions, countdowns, notifications
// Database Queries	Fetch, insert, update records
// Animations	Smooth transitions, modals, games

function fetchUserData(userId, callback) {
    setTimeout(() => {
        console.log("Fetching data...");
        const userData = { id: userId, name: "John Doe" };
        callback(userData);
    }, 2000);
}

fetchUserData(1, function(user) {
    console.log("User Data:", user);
});

// 1	Event listener is registered but doesn’t execute.
// 2	The browser waits for user interaction.
// 3	When the button is clicked, the event is detected.
// 4	The event callback function is added to the queue.
// 5	JavaScript executes the callback when ready.

// Check if Notifications are supported
// System alerts, messages
if ("Notification" in window) {
    Notification.requestPermission().then(permission => {
        if (permission === "granted") {
            new Notification("Hello!", {
                body: "This is a JavaScript notification.",
                icon: "https://via.placeholder.com/100" // Optional icon
            });
        }
    });
} else {
    console.log("Notifications not supported in this browser.");
}
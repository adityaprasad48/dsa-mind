const now = new Date()

now
now.toLocaleTimeString()

const eventDate = new Date("2025-12-31T23:59:59");

eventDate
eventDate.toLocaleDateString()

const deadline = new Date("2025-02-10");
const now_date = new Date();

if (now_date > deadline) {
    console.log("Deadline has passed!");
} else {
    console.log("You still have time.");
}

new Date().toLocaleString("en-IN");
new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

const sessionExpiry = new Date(Date.now() + 30 * 60 * 1000)

sessionExpiry.toLocaleTimeString()

new Date().toString()

new Date().toISOString()

const timestamp = Date.now()
timestamp

const mobileRegex = /^[6-9]\d{9}$/

mobileRegex.test('7987826387')
mobileRegex.test('123')
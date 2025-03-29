// Navigator Apis

await navigator.credentials

const battery = await navigator.getBattery()
console.log('batter', battery)

navigator.credentials.get({password: true}).then(credential => {
    if (credential) {
        console.log("Retrieved Credentials:", credential);
    } else {
        console.log("No saved credentials.");
    }
}).catch(error => console.error("Error fetching credentials:", error));


// navigator.getBattery()	Check battery level and optimize performance.
// navigator.clipboard.writeText()	Copy text to clipboard.
// navigator.clipboard.readText()	Read clipboard content.
// navigator.geolocation.getCurrentPosition()	Get user’s location.
// navigator.mediaDevices.getUserMedia()	Access webcam/microphone.
// navigator.vibrate()	Trigger phone vibration.
// navigator.connection	Detect internet speed/type.
// navigator.language	Detect user’s preferred language.
// navigator.hardwareConcurrency	Check CPU cores for performance tuning.
// navigator.userAgent	Detect browser and OS details.
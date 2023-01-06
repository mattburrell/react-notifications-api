import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  function showNotification() {
    const text = `HEY! Have a nice day!`;
    const notification = new Notification("I'm a notification", { body: text, icon: reactLogo });
  }

  function checkNotificationPermission() {
    // Check if the browser supports the Notifications API
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notifications.");
    }

    // Check if the user has granted permission to display notifications
    else if (Notification.permission === "granted") {
      showNotification();
    }

    // If permission is not granted, ask the user for permission
    else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function (permission) {
        // If the user grants permission, create a notification
        if (permission === "granted") {
          showNotification();
        }
      });
    }
  }

  return (
    <div className="App">
      <h1>Notifications API</h1>
      <div className="card">
        <button onClick={checkNotificationPermission}>Show Notification</button>
      </div>
    </div>
  );
}

export default App;

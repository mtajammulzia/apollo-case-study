import { useEffect, useState } from "react";
import { AuthProvider } from "./contexts/Auth";
import Router from "./router";

function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    function onlineHandler() {
      setIsOnline(true);
    }

    function offlineHandler() {
      setIsOnline(false);
    }

    window.addEventListener("online", onlineHandler);
    window.addEventListener("offline", offlineHandler);

    return () => {
      window.removeEventListener("online", onlineHandler);
      window.removeEventListener("offline", offlineHandler);
    };
  }, []);

  if (!isOnline) {
    return (
      <div
        style={{
          display: "flex",
          height: "100vh",
          width: "100vw",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Oops! You seem to be disconnected from the Internet</h1>
      </div>
    );
  }

  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

export default App;

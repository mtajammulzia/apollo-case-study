import { AuthProvider } from "./contexts/Auth";
import Router from "./router";

function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

export default App;

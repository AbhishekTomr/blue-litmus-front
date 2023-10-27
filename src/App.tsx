import "./App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Auth } from "./components/Auth/Auth";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/sign-up" element={<Auth isSignInPage={false} />} />
          <Route path="/sign-in" element={<Auth isSignInPage={true} />} />
          <Route path="/" element={<Navigate to="/sign-in" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

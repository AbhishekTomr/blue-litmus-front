import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Auth } from "./components/Auth/Auth";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/sign-up" element={<Auth isSignInPage={false} />} />
          <Route path="/sign-in" element={<Auth isSignInPage={true} />} />
          <Route path="/" element={<Auth isSignInPage={true} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

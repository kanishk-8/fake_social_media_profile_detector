import "./App.css";
import NavBar from "./components/NavBar";
import LoginForm from "./components/Form";

function App() {
  return (
    <>
      <NavBar />
      <div className="container my-3">
        <LoginForm />
      </div>
    </>
  );
}

export default App;

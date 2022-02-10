import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./Components/Navbar";
import Footer from "./Components/Footer";
import T from "./Components/Form";
import { Spinner} from "react-bootstrap";
function App() {
  const person = { firstName: "ahmed", lastName: "hachemi" };
  const spinner = (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
  return (
    <>
      <NavbarComponent />
      <T />
      <Footer />
      {spinner}
    </>
  );
}

export default App;

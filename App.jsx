import "./App.css";
import ContactForm from "./component/ContactForm/ContactForm";
import ContactHeader from "./component/Navigation/ContactHeader/ContactHeader";
import Navigation from "./component/Navigation/Navigation";

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <ContactHeader></ContactHeader>
      <ContactForm></ContactForm>
    </div>
  );
}

export default App;

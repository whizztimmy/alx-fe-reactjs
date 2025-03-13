import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm";

function App() {
  return (
    <div>
      <h1>React Form Handling</h1>
      <h2>Controlled Form 1.0</h2>
      <RegistrationForm />
      <h2>Formik Form</h2>
      <formikForm />
    </div>
  );
}

export default App;

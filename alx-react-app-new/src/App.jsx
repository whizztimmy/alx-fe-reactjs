import './App.css'
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from "./components/UserProfile";
import Counter from './components/Counter';

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <Header />
       <MainContent /> 
       <Footer />
       <Counter />
    </div>
  )
}

export default App

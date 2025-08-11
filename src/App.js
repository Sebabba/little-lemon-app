import "./App.css";
import Topbar from './layouts/Navbar/Navbar';
import Hero from './pages/Sections/Hero/Hero';
import Specials from "./pages/Sections/Specials/Specials";
import Testimonials from "./pages/Sections/Testimonials/Testimonials";

function App() {
  return (
    <div>
      <Topbar />
      <Hero />
      <Specials />
      <Testimonials />
      <div className="App"></div>;
    </div>
  );
}

export default App;
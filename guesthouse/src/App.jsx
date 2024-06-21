import Footer from "./components/Footer/Footer";
import Details from "./components/Details/Details";
import Home from "./components/Home";
import Room from "./components/Room/Room";
import Services from "./components/Services/Services";
import Map from "./components/Map/Map";
import Contact from "./components/Contect/Contect";
import Photo from "./components/Photo/Photo";



const App = () => {
  return (
    // main div
    <>
    <div>
     <div>
      <Home/>
      <Details/>
      <Room/>
      <Services/>
      <Contact/>
      {/* <div className="w-10 h-1 bg-pink-600"></div> */}
<h1 className="text-3xl mb-4 text-center">Gallery <span className="w-10 h-1 bg-pink-600"></span></h1>

      <Photo/>
      <Map/>
      <Footer/>
     </div>

    </div>
    </>
  );
};

export default App;

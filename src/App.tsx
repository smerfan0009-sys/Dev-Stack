import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4">
        <Navbar />
      </div>

      <hr className="border-t-2 border-[rgb(241,245,249)] w-full" />
      
      <main className="max-w-7xl mx-auto px-4">
        <HeroSection />
        
      </main>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
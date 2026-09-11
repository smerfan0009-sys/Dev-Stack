import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4">
        <Navbar />
      </div>

      <hr className="border-t-2 border-[rgb(241,245,249)] w-full" />
      
      <main className="max-w-7xl mx-auto px-4">
        {/* <Hero /> */}
        {/* <Services /> */}
        {/* <Projects /> */}
        {/* <About /> */}
      </main>
    </div>
  );
}

export default App;
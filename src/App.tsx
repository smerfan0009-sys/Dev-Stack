import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Stacks from "./components/Stacks";
import { Suspense } from "react";
import type { IStack } from "./types/stacksType";


const stacksfetch = async ():Promise<IStack[]> => {
  const res = await fetch("/technologies.json");
  const data = await res.json();
  return data;

};


function App() {
  const stacksPromise = stacksfetch();
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4">
        <Navbar />
      </div>

      <hr className="border-t-2 border-[rgb(241,245,249)] w-full" />

      <main className="max-w-7xl mx-auto px-4">
        <HeroSection />
        <Suspense fallback={<h2>Loading.......</h2>}>
          <Stacks stacksPromise={stacksPromise} />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Stacks from "./components/Stacks";
import { Suspense } from "react";
import type { IStack } from "./types/stacksType";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const stacksfetch = async (): Promise<IStack[]> => {
  const res = await fetch("/technologies.json");
  const data = await res.json();
  return data;
};

const stacksPromise = stacksfetch();

const Loader = () => (
  <div className="flex items-center justify-center py-16 gap-3 text-slate-500 font-medium text-sm">
    <div className="w-5 h-5 border-2 border-slate-200 border-t-[rgb(219,39,119)] rounded-full animate-spin"></div>
    <span>Loading technologies</span>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 pt-24">
        <HeroSection />

        <Suspense fallback={<Loader />}>
          <Stacks stacksPromise={stacksPromise} />
        </Suspense>
      </main>

      <Footer />

      <ToastContainer
        position="bottom-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

    </div>
  );
}

export default App;
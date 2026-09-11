import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full bg-white z-50 p-4 border-b border-slate-100 shadow-sm">
            <div className="max-w-7xl mx-auto flex items-center justify-between">

                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-[rgb(71,85,105)] cursor-pointer">
                    <img src="./src/ui/hamburger.png" alt="Hamburger Menu" className="w-6 h-6" />
                </button>

                <div className="flex items-center cursor-pointer">
                    <img src="./src/assets/dev-stack-logo.png" alt="Dev Stack Logo" />
                </div>

                <ul className="hidden md:flex space-x-6 font-['Plus_Jakarta_Sans'] font-medium text-[16px]">
                    <li><a href="#home" className="text-[rgb(219,39,119)] hover:text-[rgb(82,13,43)] transition-colors duration-500">Home</a></li>
                    <li><a href="#services" className="text-[rgb(71,85,105)] hover:text-[rgb(82,13,43)] transition-colors duration-500">Technologies</a></li>
                    <li><a href="#services" className="text-[rgb(71,85,105)] hover:text-[rgb(82,13,43)] transition-colors duration-500">Projects</a></li>
                    <li><a href="#about" className="text-[rgb(71,85,105)] hover:text-[rgb(82,13,43)] transition-colors duration-500">About</a></li>
                    <li><a href="#contact" className="text-[rgb(71,85,105)] hover:text-[rgb(82,13,43)] transition-colors duration-500">Contact</a></li>
                </ul>

                <div className="flex space-x-3 sm:space-x-6 font-['Plus_Jakarta_Sans'] font-medium">
                    <button className="text-[rgb(71,85,105)] hover:text-[rgb(82,13,43)] cursor-pointer transition-colors duration-500">Sign In</button>
                    <button className="bg-[rgb(219,39,119)] text-white py-2 px-6 rounded-3xl hover:bg-[rgb(82,13,43)] cursor-pointer transition-colors duration-500">Sign Up</button>
                </div>
            </div>

            {isOpen && (
                <ul className="md:hidden absolute top-full left-0 w-full bg-[rgb(255,247,251)] p-5 text-center rounded-b-2xl shadow-xl border-t border-slate-100 space-y-3 font-['Plus_Jakarta_Sans'] font-medium text-[16px] transition-transform duration-500 z-50">
                    <li><a href="#home" onClick={() => setIsOpen(false)} className="block text-[rgb(219,39,119)]">Home</a></li>
                    <li><a href="#services" onClick={() => setIsOpen(false)} className="block text-[rgb(71,85,105)]">Technologies</a></li>
                    <li><a href="#services" onClick={() => setIsOpen(false)} className="block text-[rgb(71,85,105)]">Projects</a></li>
                    <li><a href="#about" onClick={() => setIsOpen(false)} className="block text-[rgb(71,85,105)]">About</a></li>
                    <li><a href="#contact" onClick={() => setIsOpen(false)} className="block text-[rgb(71,85,105)]">Contact</a></li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
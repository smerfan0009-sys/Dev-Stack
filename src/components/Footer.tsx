import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full bg-white font-['Plus_Jakarta_Sans'] text-slate-600 pt-12 md:pt-16 pb-8 border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 md:pb-12">

                    <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left space-y-5">
                        <img src="./src/assets/dev-stack-logo.png" alt="Dev Stack Logo" className="h-8 object-contain" 
                        />
                        <p className="text-[rgb(100,116,139)] text-sm max-w-sm leading-relaxed">
                            Curated tools, technologies, and resources for developers building modern software.
                        </p>
                    
                        <div className="flex items-center space-x-3 text-[rgb(71,85,105)] font-medium text-sm">
                            <a href="#github" className="hover:text-[rgb(219,39,119)] transition-colors">GitHub</a>
                            <span className="text-[rgb(75,85,99)] md:hidden">•</span>
                            <a href="#twitter" className="hover:text-[rgb(219,39,119)] transition-colors">Twitter</a>
                            <span className="text-[rgb(75,85,99)] md:hidden">•</span>
                            <a href="#linkedin" className="hover:text-[rgb(219,39,119)] transition-colors">LinkedIn</a>
                        </div>
                    </div>

                    <div className="hidden md:grid md:col-span-7 grid-cols-3 gap-8">
                        <div className="space-y-4">
                            <h3 className="text-[rgb(15,23,42)] font-bold text-sm tracking-wider">PRODUCT</h3>
                            <ul className="space-y-3 text-sm text-[rgb(100,116,139)]">
                                <li><a href="#home" className="hover:text-[rgb(15,23,42)] transition-colors">Home</a></li>
                                <li><a href="#technologies" className="hover:text-[rgb(15,23,42)] transition-colors">Technologies</a></li>
                                <li><a href="#projects" className="hover:text-[rgb(15,23,42)] transition-colors">Projects</a></li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-[rgb(15,23,42)] font-bold text-sm tracking-wider">COMPANY</h3>
                            <ul className="space-y-3 text-sm text-[rgb(100,116,139)]">
                                <li><a href="#about" className="hover:text-[rgb(15,23,42)] transition-colors">About</a></li>
                                <li><a href="#contact" className="hover:text-[rgb(15,23,42)] transition-colors">Contact</a></li>
                                <li><a href="#careers" className="hover:text-[rgb(15,23,42)] transition-colors">Careers</a></li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-[rgb(15,23,42)] font-bold text-sm tracking-wider">LEGAL</h3>
                            <ul className="space-y-3 text-sm text-[rgb(100,116,139)]">
                                <li><a href="#privacy" className="hover:text-[rgb(15,23,42)] transition-colors">Privacy Policy</a></li>
                                <li><a href="#terms" className="hover:text-[rgb(15,23,42)] transition-colors">Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className="pt-6 md:pt-8 border-t border-slate-100 flex flex-row items-center justify-between text-xs text-[rgb(75,85,99)]">
                    <p>© 2026 Dev Stack. All rights reserved.</p>
                    <div className="flex space-x-4">
                        <a href="#privacy" className="hover:text-slate-600 transition-colors">Privacy</a>
                        <a href="#terms" className="hover:text-slate-600 transition-colors">Terms</a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
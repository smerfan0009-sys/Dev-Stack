const HeroSection = () => {
    return (
        <section className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-22 font-['Plus_Jakarta_Sans']">
            <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[rgb(15,23,42)] leading-tight">
                    Build Your Ideal <br />
                    <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent inline-block whitespace-nowrap">
                        Development Stack
                    </span>
                </h1>

                <p className="text-[rgb(100,116,139)] text-base sm:text-lg max-w-xl mx-auto md:mx-0 leading-relaxed">
                    Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that fits your
                    next project.
                </p>

                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
                    <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white font-medium px-6 py-3 rounded-xl shadow-md hover:opacity-75 transition duration-500 cursor-pointer">
                        Explore Technologies
                    </button>

                    <button className="border border-slate-200 text-[rgb(71,85,105)] bg-white font-medium px-15 py-3 rounded-xl hover:bg-[rgb(237,230,233)] transition duration-500 cursor-pointer">
                        Learn More
                    </button>
                </div>
            </div>

            <div className="w-full md:w-1/2 flex justify-center">
                <img
                    src="./src/assets/banner-stack.png"
                    alt="Development Stack Banner"
                    className="w-full max-w-sm lg:max-w-md h-auto object-contain"
                />
            </div>
        </section>
    );
};

export default HeroSection;
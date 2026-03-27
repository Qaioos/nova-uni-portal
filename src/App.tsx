import { Link, Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import StudentLife from "./Components/StudentLife";
function App() {
    return (
        <BrowserRouter>
            <nav className="fixed top-0 w-full z-50 bg-white/60 dark:bg-slate-950/60 backdrop-blur-xl">
                <div className="flex justify-between items-center px-8 py-6 max-w-[1440px] mx-auto">
                    <div className="text-2xl font-black tracking-tighter text-[#000a1e] dark:text-white font-headline">
                        Academic Editorial
                    </div>
                    <div className="scroll md:flex items-center gap-8">
                        <Link
                            className="font-headline font-bold tracking-tight uppercase text-sm text-[#000a1e] dark:text-slate-300 hover:text-[#735c00] transition-colors"
                            to="/"
                        >
                            Home
                        </Link>

                        <Link
                            className="font-headline font-bold tracking-tight uppercase text-sm text-[#000a1e] dark:text-slate-300 hover:text-[#735c00] transition-colors"
                            to="/student-life"
                        >
                            Student Life
                        </Link>
                        <Link
                            className="font-headline font-bold tracking-tight uppercase text-sm text-[#000a1e] dark:text-slate-300 hover:text-[#735c00] transition-colors"
                            to="/about"
                        >
                            About
                        </Link>
                    </div>
                    <div className="flex items-center gap-6">
                        <button className="material-symbols-outlined text-primary">
                            search
                        </button>
                        <button className="bg-primary text-on-primary px-6 py-2 font-headline font-bold tracking-tight uppercase text-sm neo-brutalist-button">
                            Apply Now
                        </button>
                    </div>
                </div>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/student-life" element={<StudentLife />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

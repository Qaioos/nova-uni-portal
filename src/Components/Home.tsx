import { useEffect, useState, useReducer } from "react";
import { counterReducer, initialState } from "../Reducers/CounterReducer";

function Home() {
    const [scroll, setScroll] = useState(0);
    const [state, dispatch] = useReducer(counterReducer, initialState);
    const { counter, facultyCounter } = state;

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (scroll < 450 || counter >= 2500) {
            return;
        }

        const interval = setInterval(() => {
            dispatch({ type: "INCREMENT_COUNTER" });
        }, 50);

        return () => clearInterval(interval);
    }, [scroll, counter]);

    useEffect(() => {
        if (scroll < 450 || facultyCounter >= 1200) {
            return;
        }

        const interval = setInterval(() => {
            dispatch({ type: "INCREMENT_FACULTY" });
        }, 50);

        return () => clearInterval(interval);
    }, [scroll, facultyCounter]);

    return (
        <div className="bg-surface font-body text-on-surface selection:bg-secondary-fixed selection:text-on-secondary-fixed">
            <main>
                {/* <!-- Hero Section --> */}
                <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-primary-container">
                    <div className="absolute inset-0 opacity-40">
                        <img
                            alt="University Hero"
                            className="w-full h-full object-cover"
                            data-alt="Modern university campus architecture at dusk with warm interior lighting reflecting on clean glass surfaces and stone pillars"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKXe9C47pfFdDAk9neZEFyE7bC5lootlTX8g3c1KrgWjeFFsEHLKBRGr8zlgw9HQm82SkYFSpfuMsg7ExVZPiX6KJ-Dl4wVSYNos78S7FKeoNlfFcY2bvMjxXN_Wy_JRUozbsWtFWuT2MN7knjVOEPOkvlJdt9jU2hnOVDx54pn8tHoKU10y4BTWWBKsiEKptJ7Hh2SMPslW6SD9F1gVAaFXmrXmMe2f0JBmhzcKF4vE6cf225rm4UoUYgsTE3vtvlUmY1nzGfmQNA"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
                    </div>
                    <div className="relative z-10 max-w-[1440px] mx-auto px-8 w-full grid md:grid-cols-2 gap-12 items-center">
                        <div className="max-w-2xl">
                            <span className="text-secondary font-headline font-bold tracking-widest uppercase text-xs mb-4 block">
                                Est. 1892 • Global Excellence
                            </span>
                            <h1 className="text-white font-headline font-extrabold text-5xl md:text-7xl leading-[1.1] tracking-tighter mb-8">
                                The Future of <br />
                                <span className="text-secondary-fixed-dim italic">
                                    Intellectual
                                </span>
                                <br />
                                Curating.
                            </h1>
                            <p className="text-on-primary-container text-lg md:text-xl mb-10 font-light leading-relaxed max-w-lg">
                                Empowering the next generation of global leaders
                                through rigorous academic inquiry and a
                                tradition of editorial precision in research.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button className="bg-secondary text-on-secondary px-10 py-4 font-headline font-extrabold uppercase tracking-widest text-sm neo-brutalist-button">
                                    Join Us
                                </button>
                                <button className="border-2 border-white/20 text-white px-10 py-4 font-headline font-extrabold uppercase tracking-widest text-sm hover:bg-white/10 transition-colors">
                                    View Programs
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Statistics Counter --> */}
                <section className="bg-surface py-24 px-8 border-b border-outline-variant/10">
                    <div className="max-w-[1440px] mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                            <div className="flex flex-col md:border-r-2 border-secondary md:pr-12 py-8">
                                <span className="text-primary font-headline font-extrabold text-7xl tracking-tighter mb-2">
                                    {counter}+
                                </span>
                                <span className="text-secondary font-headline font-bold uppercase tracking-widest text-xs">
                                    Students Enrolled
                                </span>
                            </div>
                            <div className="flex flex-col md:border-r-2 border-secondary md:px-12 py-8">
                                <span className="text-primary font-headline font-extrabold text-7xl tracking-tighter mb-2">
                                    {facultyCounter}+
                                </span>
                                <span className="text-secondary font-headline font-bold uppercase tracking-widest text-xs">
                                    Faculty Members
                                </span>
                            </div>
                            <div className="flex flex-col md:pl-12 py-8">
                                <span className="text-primary font-headline font-extrabold text-7xl tracking-tighter mb-2">
                                    TOP 50
                                </span>
                                <span className="text-secondary font-headline font-bold uppercase tracking-widest text-xs">
                                    Global Rankings
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Featured Programs (Glassmorphism Bento) --> */}
                <section className="bg-surface-container-low py-32 px-8 overflow-hidden relative">
                    <div className="max-w-[1440px] mx-auto relative z-10">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                            <div className="max-w-xl">
                                <h2 className="text-primary font-headline font-extrabold text-5xl tracking-tighter mb-6">
                                    Featured Academic Clusters
                                </h2>
                                <p className="text-on-surface-variant leading-relaxed">
                                    Select your path from our elite curriculum
                                    designed to challenge traditional boundaries
                                    and foster disruptive innovation.
                                </p>
                            </div>
                            {/*                         <a
                            className="text-secondary font-headline font-bold uppercase tracking-widest text-xs border-b-2 border-secondary pb-1 mt-6 md:mt-0"
                            href="#"
                            >Explore All Programs</a
                        > */}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-auto">
                            {/* <!-- Medicine - Large Card --> */}
                            <div className="md:col-span-8 group relative overflow-hidden bg-white/40 backdrop-blur-xl h-[500px]">
                                <img
                                    alt="Medicine Program"
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
                                    data-alt="Professional clinical setting with modern medical equipment and focused medical practitioners in the background"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8XlMS65lAXw1YK6azOeR7Zd1JtpNBEOqQl070rbtD-StcuE2ADk4h3E8OfGcoCAOOoFwRnitH5a_K8xrQlXmqNAwKx-tZIoRrVo7A41pgONL38iO12G0AO0PHbs9Cd7ylYLpy8jbPuBk35SbzavSYrPiH5OGlkAlu6XWXcmWqKvLLNlkD1q0TRj1Hxv9zu46vHSjMLBnhwFJSjRLfc3dPN3Ybcppmx_05JVLrvPqyuw7-D96CaQdNteQzdyTTux7xPoHzlIxma2px"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-12 w-full">
                                    <span className="text-secondary-fixed-dim font-headline font-bold uppercase tracking-widest text-xs mb-4 block">
                                        Faculty of Medicine
                                    </span>
                                    <h3 className="text-white font-headline font-extrabold text-4xl mb-4">
                                        Precision Diagnostics &amp; Research
                                    </h3>
                                    <button className="bg-white text-primary px-6 py-2 font-headline font-bold text-xs uppercase tracking-widest neo-brutalist-button">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                            {/* <!-- Engineering --> */}
                            <div className="md:col-span-4 group relative overflow-hidden bg-white/40 backdrop-blur-xl h-[500px]">
                                <img
                                    alt="Engineering Program"
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-40"
                                    data-alt="Abstract view of robotic arm and circuitry with high-tech blue glowing elements"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAzcwfyKqv9mTkqetIYHaWoRT0zzBPIs31vTt6r6QgUA2zAKTibVkEX18KKJGLjDDvzd68FJ6gZKP7w4U6YYeMtp2K7meDPEIq53whSOG9v9w4ThS-fVm5JJV8jLloeLruMHC1e-G7G5z3vw2Ih6Bmty-FJbKOEpG4VUv-mvfNSNcGwEa2SF4_a5WvNLJoW98GD5MaJdKtm7--t6C1fglubTWKztyCpRXOeD_fqhNlOVNzOtp2EIviTgZIw5NNakfGNODT6_kQ3M-S"
                                />
                                <div className="absolute inset-0 bg-primary/20 backdrop-blur-sm"></div>
                                <div className="absolute inset-0 p-12 flex flex-col justify-end">
                                    <span className="text-secondary font-headline font-bold uppercase tracking-widest text-xs mb-4 block">
                                        Engineering
                                    </span>
                                    <h3 className="text-primary font-headline font-extrabold text-3xl mb-4">
                                        Sustainable Infrastructure
                                    </h3>
                                    <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">
                                        Building the resilient cities of
                                        tomorrow with green tech and AI
                                        integration.
                                    </p>
                                    <span className="material-symbols-outlined text-primary text-4xl">
                                        architecture
                                    </span>
                                </div>
                            </div>
                            {/* <!-- Business --> */}
                            <div className="md:col-span-4 group relative overflow-hidden bg-white/40 backdrop-blur-xl h-[400px]">
                                <div className="absolute inset-0 p-12 flex flex-col justify-between border-2 border-white/20">
                                    <div>
                                        <span className="text-secondary font-headline font-bold uppercase tracking-widest text-xs mb-4 block">
                                            Business School
                                        </span>
                                        <h3 className="text-primary font-headline font-extrabold text-3xl">
                                            Strategic Global Markets
                                        </h3>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="material-symbols-outlined text-secondary text-5xl">
                                            trending_up
                                        </span>
                                        <p className="text-on-surface-variant text-sm">
                                            Leading the conversation in global
                                            economic stability.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/*  <!-- Arts --> */}
                            <div className="md:col-span-8 group relative overflow-hidden bg-primary h-[400px]">
                                <img
                                    alt="Arts Program"
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-30"
                                    data-alt="Close up of oil painting canvas with rich textures and deep artistic shadows"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCm_2oQOhj_cZe2vLBrAGDNwDKRzsZcpMOhJmPBrZrQ6qRfOY3BWTNNO2JDm5JYZQ5f7VTyY__wcKCvSnrIrfb8X9xJotVi4ELoE5svn-2fm316IUDrnSPSfBXqx-eYiZJqRaw3s12H3pOSdeNimWYxf7E-C3b6PrzOIjBHbE_lgaFzcEGQqI-3rZC5_MNmNN60cJE7mVlTHhV0lBOczP5mck3xncR4J6IQcvtrqPYVumbPUBAZkPuCKOQKVPLnoX8k11VIXExvCOEu"
                                />
                                <div className="absolute inset-0 flex items-center justify-center p-12">
                                    <div className="text-center max-w-lg">
                                        <h3 className="text-white font-headline font-extrabold text-5xl mb-6 tracking-tighter">
                                            Liberal Arts &amp; Contemporary
                                            Design
                                        </h3>
                                        <p className="text-on-primary-container mb-8">
                                            Nurturing creative minds to redefine
                                            the visual and cultural landscapes
                                            of the 21st century.
                                        </p>
                                        <button className="border-2 border-secondary text-secondary-fixed-dim px-8 py-3 font-headline font-bold uppercase tracking-widest text-xs">
                                            Explore Curricula
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Decorative Element --> */}
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-secondary/10 rounded-full blur-[100px]"></div>
                </section>
                {/* <!-- News & Events --> */}
                <section className="bg-surface py-32 px-8">
                    <div className="max-w-[1440px] mx-auto">
                        <div className="flex flex-col md:flex-row gap-20">
                            <div className="md:w-1/3">
                                <span className="text-secondary font-headline font-bold uppercase tracking-widest text-xs mb-4 block">
                                    Institutional Updates
                                </span>
                                <h2 className="text-primary font-headline font-extrabold text-5xl tracking-tighter mb-8">
                                    News &amp; <br />
                                    Global Events
                                </h2>
                                <p className="text-on-surface-variant leading-relaxed mb-10">
                                    Stay informed with the latest breakthroughs,
                                    policy shifts, and prestigious visitors to
                                    the Academic Editorial campus.
                                </p>
                                <button className="bg-primary text-on-primary px-8 py-4 font-headline font-bold uppercase tracking-widest text-xs neo-brutalist-button">
                                    View All News
                                </button>
                            </div>
                            <div className="md:w-2/3 grid gap-12">
                                {/*  <!-- News Item 1 --> */}
                                <div className="flex gap-8 group cursor-pointer pb-8 border-b border-outline-variant/20 items-center">
                                    <div className="flex-shrink-0 w-24 h-24 bg-surface-container-high overflow-hidden">
                                        <img
                                            alt="News 1"
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            data-alt="Microscope lens and laboratory glassware in a clean white research environment"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuXqRCTyFgOA8wFdGvFPnH8krNK7LSWk1wRY-CkTCFRgt0vVFm3r_h8sY2MOA5Eqw0zYmh7CfODrUueBk35GqZl_3CURUV8aVz5JJWelrcxU4yxRTOIl8tAGgPizBVGQfvPAJ9i_VQImIE1anljP01nFz8VSKb41V6MeQTMr6ckunRtfZQS--BWawPGR4eWpzie2v9lQFToSr7RBswobUPWSxnKqwOC8T6zO8kU9jHPyVEVm_Fqm8rDZc9hTH2IWAblikVLaYfVcUx"
                                        />
                                    </div>
                                    <div className="flex-grow">
                                        <span className="text-secondary font-headline font-bold text-xs uppercase mb-1 block">
                                            June 12, 2024 • Research
                                        </span>
                                        <h4 className="text-primary font-headline font-bold text-xl group-hover:text-secondary transition-colors">
                                            Breakthrough in Quantum Computing
                                            Architecture announced by Editorial
                                            Faculty
                                        </h4>
                                    </div>
                                    <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">
                                        arrow_forward
                                    </span>
                                </div>
                                {/*  <!-- News Item 2 --> */}
                                <div className="flex gap-8 group cursor-pointer pb-8 border-b border-outline-variant/20 items-center">
                                    <div className="flex-shrink-0 w-24 h-24 bg-surface-container-high overflow-hidden">
                                        <img
                                            alt="News 2"
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            data-alt="Student in graduation gown looking out towards a historic university building"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaiqq_EPZEo_hFvLo2-8bozXgw_4TJygX4bMyfL87B7TvMpn-f7Hu3M_tfWk5P97W0429J1HN7KFVkmmwSDYfxzNM8hNil6YLA_xQijqQKpLyMo0ZQkdY882m10vpBTGQKVko3_fYOmBCOhPcLhJ-bfYOL3DkNpmWelE7I-CzzonCLITu2TWisDqpG6Jqch501JHENe5S9eIdfIOPDNebHQIY9AdkV6W8RtDpESniEyB58gs5yQgYX-BthM_iHoeHFktgatyvl-gIK"
                                        />
                                    </div>
                                    <div className="flex-grow">
                                        <span className="text-secondary font-headline font-bold text-xs uppercase mb-1 block">
                                            June 08, 2024 • Campus Life
                                        </span>
                                        <h4 className="text-primary font-headline font-bold text-xl group-hover:text-secondary transition-colors">
                                            2024 Convocation: Celebrating the
                                            largest graduating className in
                                            university history
                                        </h4>
                                    </div>
                                    <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">
                                        arrow_forward
                                    </span>
                                </div>
                                {/* <!-- News Item 3 --> */}
                                <div className="flex gap-8 group cursor-pointer pb-8 items-center">
                                    <div className="flex-shrink-0 w-24 h-24 bg-surface-container-high overflow-hidden">
                                        <img
                                            alt="News 3"
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            data-alt="People gathered in a modern lecture hall for a keynote presentation"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwUVuzvrKC2IGxpnf4Q5de8V66BnEkov6B4PlRFWzft7NKMMXZyJr3WLo8dPbtpuBMBL061xVFz0dW3mQkzTtgSY202-EQYFmVJZrIqVb-v38vLe1fixfsiDkQC1EZuzO0BSPb_UlvP5i-tEy7u8d3Ld5Bmpt75kiy-vO_oJgMFKi54nMx1B7iEP6RY8tm8M840KQSrW976FERmJSfARIvqpDTUibXzQHBkYEwGhun1qCjAH_IliVjsYPvRBd02Uj6BKUgW-BCn9ek"
                                        />
                                    </div>
                                    <div className="flex-grow">
                                        <span className="text-secondary font-headline font-bold text-xs uppercase mb-1 block">
                                            June 02, 2024 • Global
                                        </span>
                                        <h4 className="text-primary font-headline font-bold text-xl group-hover:text-secondary transition-colors">
                                            University enters strategic
                                            partnership with leading European
                                            Research Consortium
                                        </h4>
                                    </div>
                                    <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">
                                        arrow_forward
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            {/* <!-- Footer --> */}
            {/*         <footer
            className="bg-[#000a1e] dark:bg-black text-white w-full pt-20 pb-10"
        >
            <div
                className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 max-w-[1440px] mx-auto"
            >
                <div className="md:col-span-1">
                    <span
                        className="text-3xl font-black text-white mb-6 block font-headline"
                        >Academic Editorial</span>
                    <p
                        className="text-slate-400 font-['Public_Sans'] text-sm leading-relaxed mb-8"
                    >
                        Defining the architectural integrity of higher education
                        since 1892. A hub for innovation, research, and critical
                        inquiry.
                    </p>
                    <div className="flex gap-4">
                        <a
                            className="w-10 h-10 bg-slate-800 flex items-center justify-center neo-brutalist-button border-white/10 border"
                            href="#"
                            ><span className="material-symbols-outlined text-sm"
                                >public</span></a
>
                        <a
                            className="w-10 h-10 bg-slate-800 flex items-center justify-center neo-brutalist-button border-white/10 border"
                            href="#"
                            ><span className="material-symbols-outlined text-sm"
                                >share</span
                            ></a
                        >
                        <a
                            className="w-10 h-10 bg-slate-800 flex items-center justify-center neo-brutalist-button border-white/10 border"
                            href="#"
                            ><span className="material-symbols-outlined text-sm"
                                >mail</span
                            ></a
                        >
                    </div>
                </div>
                <div>
                    <h5
                        className="font-headline font-extrabold uppercase tracking-widest text-xs text-secondary mb-6"
                    >
                        Quick Links
                    </h5>
                    <ul className="space-y-4">
                        <li>
                            <a
                                className="text-slate-400 hover:text-white transition-colors block hover:translate-x-1 transition-transform"
                                href="#"
                                >Research Portal</a
                            >
                        </li>
                        <li>
                            <a
                                className="text-slate-400 hover:text-white transition-colors block hover:translate-x-1 transition-transform"
                                href="#"
                                >Online Library</a
                            >
                        </li>
                        <li>
                            <a
                                className="text-slate-400 hover:text-white transition-colors block hover:translate-x-1 transition-transform"
                                href="#"
                                >Alumni Network</a
                            >
                        </li>
                        <li>
                            <a
                                className="text-slate-400 hover:text-white transition-colors block hover:translate-x-1 transition-transform"
                                href="#"
                                >Support Us</a
                            >
                        </li>
                    </ul>
                </div>
                <div>
                    <h5
                        className="font-headline font-extrabold uppercase tracking-widest text-xs text-secondary mb-6"
                    >
                        Information
                    </h5>
                    <ul className="space-y-4">
                        <li>
                            <a
                                className="text-slate-400 hover:text-white transition-colors block hover:translate-x-1 transition-transform"
                                href="#"
                                >Privacy Policy</a
                            >
                        </li>
                        <li>
                            <a
                                className="text-slate-400 hover:text-white transition-colors block hover:translate-x-1 transition-transform"
                                href="#"
                                >Accessibility</a
                            >
                        </li>
                        <li>
                            <a
                                className="text-slate-400 hover:text-white transition-colors block hover:translate-x-1 transition-transform"
                                href="#"
                                >Directory</a
                            >
                        </li>
                        <li>
                            <a
                                className="text-slate-400 hover:text-white transition-colors block hover:translate-x-1 transition-transform"
                                href="#"
                                >Careers</a
                            >
                        </li>
                    </ul>
                </div>
                <div>
                    <h5
                        className="font-headline font-extrabold uppercase tracking-widest text-xs text-secondary mb-6"
                    >
                        Contact
                    </h5>
                    <address
                        className="not-italic text-slate-400 text-sm leading-relaxed space-y-4"
                    >
                        <p>
                            122 University Avenue<br />Academic District, NY
                            10001
                        </p>
                        <p>P: +1 (212) 555-0198</p>
                        <p>E: admissions@academiceditorial.edu</p>
                    </address>
                </div>
            </div>
            <div
                className="max-w-[1440px] mx-auto px-8 mt-20 pt-10 border-t border-white/10"
            >
                <p
                    classNameName="text-slate-500 font-['Public_Sans'] text-xs uppercase tracking-widest"
                >
                    © 2024 Academic Editorial University. All rights reserved.
                </p>
            </div>
        </footer> */}
        </div>
    );
}

export default Home;

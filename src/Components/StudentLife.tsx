import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Section =
    | "culture"
    | "organizations"
    | "housing"
    | "athletics"
    | "wellness";

function StudentLife() {
    const [activeSection, setActiveSection] = useState<Section>("culture");
    const [scrollY, setScrollY] = useState<number>(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const sections: Section[] = [
            "culture",
            "organizations",
            "housing",
            "athletics",
            "wellness",
        ];
        const sectionOffsets: Record<Section, number> = {
            culture: 0,
            organizations: 800,
            housing: 1600,
            athletics: 2400,
            wellness: 2400, // Same as athletics since it's in the same section
        };

        const currentSection =
            sections.find((section) => scrollY >= sectionOffsets[section]) ||
            "culture";
        setActiveSection(currentSection as Section);
    }, [scrollY]);

    return (
        <motion.div initial={{ x: -250 }} animate={{ x: 0 }} transition={{ duration: 0.5 }}>
        <div className="bg-surface font-body text-on-surface overflow-x-hidden">
            <aside className="hidden lg:flex flex-col h-full w-64 fixed left-0 top-0 py-8 bg-[#f3f4f5] dark:bg-slate-900 z-40 mt-[72px] tonal-shift">
                <div className="px-8 mb-12">
                    <h2 className="font-headline font-black text-[#000a1e] dark:text-white text-xl">
                        Student Life
                    </h2>
                    <p className="font-label uppercase text-[0.75rem] tracking-widest text-slate-500">
                        The Digital Curator
                    </p>
                </div>
                <nav className="flex flex-col gap-4">
                    <a
                        className={`flex items-center gap-3 pl-4 hover:text-[#000a1e] font-label uppercase text-[0.75rem] tracking-widest hover:bg-[#f8f9fa] transition-colors group ${
                            activeSection === "culture"
                                ? "text-[#000a1e] bg-[#f8f9fa]"
                                : "text-slate-500 dark:text-slate-400"
                        }`}
                        href="#culture"
                    >
                        <span
                            className="material-symbols-outlined"
                            data-icon="theater_comedy"
                        >
                            theater_comedy
                        </span>
                        Culture
                    </a>
                    <a
                        className={`flex items-center gap-3 pl-4 hover:text-[#000a1e] font-label uppercase text-[0.75rem] tracking-widest hover:bg-[#f8f9fa] transition-colors group ${
                            activeSection === "organizations"
                                ? "text-[#000a1e] bg-[#f8f9fa]"
                                : "text-slate-500 dark:text-slate-400"
                        }`}
                        href="#organizations"
                    >
                        <span
                            className="material-symbols-outlined"
                            data-icon="groups"
                        >
                            groups
                        </span>
                        Organizations
                    </a>
                    <a
                        className={`flex items-center gap-3 pl-4 hover:text-[#000a1e] font-label uppercase text-[0.75rem] tracking-widest hover:bg-[#f8f9fa] transition-colors group ${
                            activeSection === "housing"
                                ? "text-[#000a1e] bg-[#f8f9fa]"
                                : "text-slate-500 dark:text-slate-400"
                        }`}
                        href="#housing"
                    >
                        <span
                            className="material-symbols-outlined"
                            data-icon="home_work"
                        >
                            home_work
                        </span>
                        Housing
                    </a>
                    <a
                        className={`flex items-center gap-3 pl-4 hover:text-[#000a1e] font-label uppercase text-[0.75rem] tracking-widest hover:bg-[#f8f9fa] transition-colors group ${
                            activeSection === "athletics"
                                ? "text-[#000a1e] bg-[#f8f9fa]"
                                : "text-slate-500 dark:text-slate-400"
                        }`}
                        href="#athletics"
                    >
                        <span
                            className="material-symbols-outlined"
                            data-icon="sports_score"
                        >
                            sports_score
                        </span>
                        Athletics
                    </a>
                    <a
                        className={`flex items-center gap-3 pl-4 hover:text-[#000a1e] font-label uppercase text-[0.75rem] tracking-widest hover:bg-[#f8f9fa] transition-colors group ${
                            activeSection === "wellness"
                                ? "text-[#000a1e] bg-[#f8f9fa]"
                                : "text-slate-500 dark:text-slate-400"
                        }`}
                        href="#wellness"
                    >
                        <span
                            className="material-symbols-outlined"
                            data-icon="self_improvement"
                        >
                            self_improvement
                        </span>
                        Wellness
                    </a>
                </nav>
            </aside>
            <main className="lg:ml-64 pt-20">
                <section className="relative min-h-[921px] flex items-center px-12 overflow-hidden bg-primary-container">
                    <div className="absolute inset-0 z-0 overflow-hidden">
                        <img
                            alt="Campus Life"
                            className="w-full h-full object-cover opacity-40 scale-105"
                            data-alt="cinematic wide shot of a historic university campus quad with students walking under large oak trees during golden hour sunset"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcopuf2mNDmvdt6QMMrJi85iTtgXdAklxQGmSVb7B0ORcFCsmxNk8FctavvKs0G2oZZzsJ3rp1gTYsX1eX3mBoVMbXhquE5onOJ0hPLefw8a2wGt4S02wSYVkaFb8dlVaq66s-6nWIhQ3zEyAfFoJ6nLaRAp_6CkQqx3j8yIrSDatTjnOALbHfYOznPidvnThkyM5l2Tnewe4JX2XgF4Po1w0oPcoQuylSgtMSzGwXUIQoLrYdGTwJYGNVy3yhBroeA9SwmRuFpKQw"
                        />
                    </div>
                    <div className="relative z-10 max-w-4xl">
                        <span className="font-label text-secondary uppercase tracking-[0.4em] text-xs mb-4 block">
                            Institutional Prestige
                        </span>
                        <h1 className="font-headline text-display-lg text-6xl md:text-8xl text-white font-extrabold tracking-tight leading-tight mb-8">
                            The Vibrant{" "}
                            <span className="text-secondary italic">Heart</span>{" "}
                            of Academic Excellence.
                        </h1>
                        <p className="text-on-primary-container text-xl max-w-xl leading-relaxed font-light mb-10">
                            Discover a curated community where tradition meets
                            the avant-garde. Beyond the lecture halls lies a
                            realm of cultural depth and athletic vigor.
                        </p>
                        <div className="flex gap-4">
                            <button className="bg-primary text-white px-8 py-4 font-headline font-bold uppercase text-sm tracking-widest neo-brutal-btn border border-secondary/20">
                                Explore Campus
                            </button>
                            <button className="bg-transparent border-2 border-white/30 text-white px-8 py-4 font-headline font-bold uppercase text-sm tracking-widest hover:bg-white hover:text-primary transition-all duration-300">
                                View Events
                            </button>
                        </div>
                    </div>
                </section>

                <section className="py-24 px-12 bg-surface" id="culture">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                            <div className="max-w-2xl">
                                <span className="font-label text-secondary uppercase tracking-widest text-xs mb-2 block">
                                    Curated Expression
                                </span>
                                <h2 className="font-headline text-5xl font-bold text-primary tracking-tighter">
                                    Culture &amp; Arts
                                </h2>
                            </div>
                            <p className="text-on-surface-variant max-w-sm font-light">
                                A sanctuary for the creative spirit, from
                                neo-classNameical ensembles to radical
                                contemporary installations.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="group relative overflow-hidden h-[500px] flex items-end p-8 glass-card border border-white/20">
                                <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110">
                                    <img
                                        alt="Art Gallery"
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                                        data-alt="modern art gallery interior with white walls, minimalist sculptures, and soft directional lighting on abstract paintings"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6JuNn_0Nin3_zyPLMVuRTqWmHzRZGymHUSEXbV-MBxTwEQFDlO61Ma-LPuwb84HtJm2aw3yFD6hiSw-lF3UK8PH4bnY9KPrHmRagBSCqI9-WNFVwBZaVIDuQR15jp-lD-9EPI52cIFecQ68SyyoKnxERM-TXlTpgx32yeET-a7GhHeuHklvLHBahgxnHs31c5YrsPy-ucN7CKXQDdtPA9-w95MkeWyTQ7i50AuGkVH2HNSEw8LtctBA2ia-NaRCuh328u2OKuadJK"
                                    />
                                </div>
                                <div className="relative z-10">
                                    <h3 className="font-headline text-3xl font-bold text-white mb-2">
                                        Editorial Gallery
                                    </h3>
                                    <p className="text-white/80 text-sm font-body mb-6">
                                        Contemporary perspectives and heritage
                                        collections.
                                    </p>
                                    <a
                                        className="text-secondary font-bold text-xs uppercase tracking-widest flex items-center gap-2"
                                        href="#"
                                    >
                                        Explore Exhibitions{" "}
                                        <span
                                            className="material-symbols-outlined text-sm"
                                            data-icon="arrow_forward"
                                        >
                                            arrow_forward
                                        </span>
                                    </a>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
                            </div>
                            <div className="group relative overflow-hidden h-[500px] flex items-end p-8 glass-card border border-white/20">
                                <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110">
                                    <img
                                        alt="Performing Arts"
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                                        data-alt="grand university theater stage with red velvet curtains and ornate architectural details lit by stage spotlights"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvSp8AT3fj5_stjX54LkN-EX03VIOgb2RZPF-Lwxl6tWoDsq-Ey12VlUuclArQKRaJgxduCO6LWidARiVLx8dcON8gYvqxYUcOWTlwiUfawnKx6igFSxHh_yQtWSTFBDzvglhmO7HZLY5VWj0sUyYlamTOhHiRDX9MAek413At1IUYN56Dg0ST7UmX8H71phnye8mZziKDH5Yv1HnhNTLiwYS2B-0gWoHRGQhryDBPHJRBAYOxXaJSgK_b-Jyl9TM9UJE-xLmM5t2K"
                                    />
                                </div>
                                <div className="relative z-10">
                                    <h3 className="font-headline text-3xl font-bold text-white mb-2">
                                        The Lyceum
                                    </h3>
                                    <p className="text-white/80 text-sm font-body mb-6">
                                        Home to the world-renowned Editorial
                                        Theater Troupe.
                                    </p>
                                    <a
                                        className="text-secondary font-bold text-xs uppercase tracking-widest flex items-center gap-2"
                                        href="#"
                                    >
                                        Season Schedule{" "}
                                        <span
                                            className="material-symbols-outlined text-sm"
                                            data-icon="arrow_forward"
                                        >
                                            arrow_forward
                                        </span>
                                    </a>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
                            </div>
                            <div className="group relative overflow-hidden h-[500px] flex items-end p-8 glass-card border border-white/20">
                                <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110">
                                    <img
                                        alt="Music Ensemble"
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                                        data-alt="professional jazz ensemble performing in a dimly lit wood-paneled hall with dramatic shadows and warm stage lights"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyfBrK45jvzKYCgEaP2W9pxU9opGOUrhYkLcX3Kdkgnst0bOXu0mACyKKA5m0eSgmfOcnbZivUtT5RKTHPILu4bnJyqpyTqO9mmFTC0x-GRPy6zaQPxuvZhNz9qOxAK3JkTixIlZU3laKbs_8cdcYM17mV84jFZ_uUTNfuFI9F-wij51vq-iAtJRJANeLCOgnbZd5B8xKZQwylZhwXBkx7HzzveAbhz2n3xRr5YmljFFIVfnMVna9YX8Ib21xOtmortQo_3ayk2f5l"
                                    />
                                </div>
                                <div className="relative z-10">
                                    <h3 className="font-headline text-3xl font-bold text-white mb-2">
                                        Symphonic Hall
                                    </h3>
                                    <p className="text-white/80 text-sm font-body mb-6">
                                        Chamber music, jazz ensembles, and
                                        electronic synthesis.
                                    </p>
                                    <a
                                        className="text-secondary font-bold text-xs uppercase tracking-widest flex items-center gap-2"
                                        href="#"
                                    >
                                        Live Recitals{" "}
                                        <span
                                            className="material-symbols-outlined text-sm"
                                            data-icon="arrow_forward"
                                        >
                                            arrow_forward
                                        </span>
                                    </a>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    className="py-24 px-12 bg-surface-container-low"
                    id="organizations"
                >
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-16">
                            <span className="font-label text-secondary uppercase tracking-widest text-xs mb-2 block">
                                Collective Power
                            </span>
                            <h2 className="font-headline text-5xl font-bold text-primary tracking-tighter">
                                Student Organizations
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-[700px]">
                            <div className="md:col-span-2 md:row-span-2 bg-primary p-12 flex flex-col justify-between relative overflow-hidden">
                                <div className="relative z-10">
                                    <h3 className="text-white font-headline text-4xl font-bold mb-4">
                                        The Student Senate
                                    </h3>
                                    <p className="text-on-primary-container text-lg font-light leading-relaxed">
                                        Defining the future of the Editorial
                                        experience through policy, advocacy, and
                                        direct university governance.
                                    </p>
                                </div>
                                <button className="relative z-10 self-start bg-secondary text-on-secondary px-8 py-3 font-headline font-bold uppercase text-xs tracking-widest neo-brutal-btn">
                                    Meet the Representatives
                                </button>
                                <div className="absolute bottom-[-10%] right-[-10%] opacity-10">
                                    <span
                                        className="material-symbols-outlined text-[300px]"
                                        data-icon="gavel"
                                    >
                                        gavel
                                    </span>
                                </div>
                            </div>
                            <div className="md:col-span-1 md:row-span-1 bg-surface-container-lowest p-8 border border-outline-variant/30 flex flex-col justify-between">
                                <div>
                                    <span
                                        className="material-symbols-outlined text-secondary text-4xl mb-4"
                                        data-icon="rocket_launch"
                                    >
                                        rocket_launch
                                    </span>
                                    <h4 className="font-headline font-bold text-xl text-primary">
                                        Tech &amp; Innovation
                                    </h4>
                                    <p className="text-on-surface-variant text-sm mt-2">
                                        12+ clubs focused on AI, ethical coding,
                                        and aerospace.
                                    </p>
                                </div>
                                <a
                                    className="text-primary font-bold text-[0.6rem] uppercase tracking-widest underline underline-offset-4"
                                    href="#"
                                >
                                    Browse Hub
                                </a>
                            </div>
                            <div className="md:col-span-1 md:row-span-1 bg-surface-container-lowest p-8 border border-outline-variant/30 flex flex-col justify-between">
                                <div>
                                    <span
                                        className="material-symbols-outlined text-secondary text-4xl mb-4"
                                        data-icon="globe"
                                    >
                                        public
                                    </span>
                                    <h4 className="font-headline font-bold text-xl text-primary">
                                        Global Cultures
                                    </h4>
                                    <p className="text-on-surface-variant text-sm mt-2">
                                        Celebrating the heritage of over 85
                                        represented nations.
                                    </p>
                                </div>
                                <a
                                    className="text-primary font-bold text-[0.6rem] uppercase tracking-widest underline underline-offset-4"
                                    href="#"
                                >
                                    Explore Community
                                </a>
                            </div>
                            <div className="md:col-span-2 md:row-span-1 bg-[#735c00] p-12 flex items-center justify-between group overflow-hidden">
                                <div className="max-w-[60%]">
                                    <h4 className="font-headline text-3xl font-black text-white leading-tight">
                                        Editorial Publishing House
                                    </h4>
                                    <p className="text-white/80 text-sm mt-2">
                                        Our award-winning student-led magazine
                                        and digital journal.
                                    </p>
                                </div>
                                <div className="bg-white/10 p-6 rounded-full transform group-hover:scale-110 transition-transform">
                                    <span
                                        className="material-symbols-outlined text-white text-5xl"
                                        data-icon="edit_note"
                                    >
                                        edit_note
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-24 px-12 bg-white" id="housing">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <span className="font-label text-secondary uppercase tracking-widest text-xs mb-2 block">
                                Residential Heritage
                            </span>
                            <h2 className="font-headline text-5xl font-bold text-primary tracking-tighter mb-8 leading-none">
                                A Residence That <br />
                                Inspires Study.
                            </h2>
                            <p className="text-on-surface-variant text-lg leading-relaxed mb-10 font-light">
                                From the historic ivy-clad halls of North Campus
                                to the glass-and-steel modernism of the Meridian
                                District, our housing is designed as an
                                extension of the classNameroom.
                            </p>
                            <div className="space-y-8">
                                <div className="flex gap-6 pb-8 border-b border-surface-container">
                                    <div className="w-16 h-16 bg-surface-container-low flex items-center justify-center shrink-0">
                                        <span
                                            className="material-symbols-outlined text-primary"
                                            data-icon="restaurant"
                                        >
                                            restaurant
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className="font-headline font-bold text-xl mb-1">
                                            Culinary Excellence
                                        </h4>
                                        <p className="text-on-surface-variant text-sm">
                                            Farm-to-table dining with menus
                                            curated by executive chefs focusing
                                            on nutritional intelligence.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-16 h-16 bg-surface-container-low flex items-center justify-center shrink-0">
                                        <span
                                            className="material-symbols-outlined text-primary"
                                            data-icon="security"
                                        >
                                            verified_user
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className="font-headline font-bold text-xl mb-1">
                                            Architectural Security
                                        </h4>
                                        <p className="text-on-surface-variant text-sm">
                                            24/7 concierge services and
                                            smart-access infrastructure across
                                            all 14 residential colleges.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-[4/5] bg-surface-container-high overflow-hidden">
                                <img
                                    alt="Luxury Dormitory"
                                    className="w-full h-full object-cover"
                                    data-alt="luxury university dormitory room with high ceilings, large windows, minimalist furniture, and a clean modern desk setup"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8La0AW4033aHMhpT-SjyYOKM3GdWF7YM8cwhbNOqCNKnhVqk7epD21SonuBHvYTE8ETP19NO_ZEvbnBCamDC4mdfO2A4DxGJG2R_L7XxlcwThPzzqkq2GmSYRPB7IMsAtx7rDMpaZ_b1u9c6ess-FKZSUOzrs1_BccfK5PeagHZXDZve2GQsd2rpI4TD6JCieu04FF6zeOJLcObfiH6grd990HBN9aPUbAjnKDzJ4LKXu-BA7JngaUISsFE5Dr7CGMXmW3UeUMZGI"
                                />
                            </div>
                            <div className="absolute -bottom-10 -left-10 bg-primary p-10 max-w-[280px]">
                                <p className="text-white font-headline text-3xl font-bold italic leading-none mb-2">
                                    92%
                                </p>
                                <p className="text-on-primary-container text-xs uppercase tracking-widest font-bold">
                                    Of Students Choose Campus Residency
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-24 px-12 bg-primary" id="athletics">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20 items-end">
                            <h2 className="font-headline text-6xl font-black text-white tracking-tighter uppercase leading-[0.85]">
                                The <br />
                                <span className="text-secondary">
                                    Editorial
                                </span>{" "}
                                <br />
                                Lions.
                            </h2>
                            <p className="text-on-primary-container text-xl font-light italic">
                                "Precision in the arena, excellence in the
                                classNameroom. We do not just compete; we define
                                the standard of the collegiate athlete."
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-white/10 border border-white/10">
                            <div className="p-12 bg-primary group hover:bg-secondary/10 transition-colors">
                                <span className="font-label text-secondary text-xs tracking-widest block mb-6">
                                    01. VARSITY TEAMS
                                </span>
                                <h4 className="font-headline text-2xl font-bold text-white mb-4">
                                    Division I Dominance
                                </h4>
                                <p className="text-on-primary-container text-sm font-light leading-relaxed mb-8">
                                    Participate in a legacy of 14 National
                                    Championships across 22 varsity sports.
                                </p>
                                <span
                                    className="material-symbols-outlined text-white/30 text-6xl group-hover:text-secondary transition-colors"
                                    data-icon="sports_football"
                                >
                                    sports_football
                                </span>
                            </div>
                            <div className="p-12 bg-primary group hover:bg-secondary/10 transition-colors">
                                <span className="font-label text-secondary text-xs tracking-widest block mb-6">
                                    02. PERFORMANCE HUB
                                </span>
                                <h4 className="font-headline text-2xl font-bold text-white mb-4">
                                    The Apex Center
                                </h4>
                                <p className="text-on-primary-container text-sm font-light leading-relaxed mb-8">
                                    Access professional-grade biomechanics labs
                                    and olympic-standard aquatic centers.
                                </p>
                                <span
                                    className="material-symbols-outlined text-white/30 text-6xl group-hover:text-secondary transition-colors"
                                    data-icon="fitness_center"
                                >
                                    fitness_center
                                </span>
                            </div>
                            <div
                                className="p-12 bg-primary group hover:bg-secondary/10 transition-colors"
                                id="wellness"
                            >
                                <span className="font-label text-secondary text-xs tracking-widest block mb-6">
                                    03. HOLISTIC WELLNESS
                                </span>
                                <h4 className="font-headline text-2xl font-bold text-white mb-4">
                                    Mind-Body Lab
                                </h4>
                                <p className="text-on-primary-container text-sm font-light leading-relaxed mb-8">
                                    Daily mindfulness workshops, nutritional
                                    counseling, and restorative yoga sessions.
                                </p>
                                <span
                                    className="material-symbols-outlined text-white/30 text-6xl group-hover:text-secondary transition-colors"
                                    data-icon="self_improvement"
                                >
                                    self_improvement
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-24 px-12 bg-surface">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="font-headline text-4xl font-bold text-primary mb-4 tracking-tight">
                                Life at Editorial
                            </h2>
                            <p className="font-label text-secondary uppercase tracking-widest text-xs">
                                Join the Conversation #EditorialExcellence
                            </p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="aspect-square bg-surface-container overflow-hidden group">
                                <img
                                    alt="Student life"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                                    data-alt="candid shot of diverse group of university students laughing and studying together on a grassy campus lawn"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3wxk0YHCJAwSE-8S3KXSoRZhu7L1UVr1r02YRuMwA6RSjfa_fjw1I7G4Ch2UbgCvm-85VQZIQNznTLowCvqhKwyoBGmMP2vgevplfqE6bYt0FrBuVkKpx2q6u73wal4DfDO0yLkhwLRIfkkMBAOMj19YFgz43PhUNiplSc9kUSGKXFtMKFcwBAxqBf_rwsVXZf8JZpY2SWw6YS-gVW-Lhiru5YdLuqecmh35aKi5T9Bjc8annJ6pZQ3E5uMEaFxB0EFTDw_MdpUHM"
                                />
                            </div>
                            <div className="aspect-square bg-surface-container overflow-hidden group">
                                <img
                                    alt="Student life"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                                    data-alt="overhead shot of a group of friends sharing coffee and pastries in a modern minimalist university cafe"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwLxXoAPGslChZJgxj867ODkJ-V4FDWNBA0KtK69A75bv3IK8Y86GFRudol4kSvwfIxRAUCJDi1VDcn7d34LK1p44kn8wjzr4dIqj8fyUGp3Rd8aBF4fn_udrUoUFQE2Dn0oUEWlyu6jx_dZ9u2w5CzO2n1Iokhi0WbiJeOERIRbw-jIc-b1XLb6Qj8ir9uIGXBcvmRu24KkbXBEnum8lzYXoEvHzss3ActigcuZzUK8_h4FDFGt9LK3C4hdvi75P_cMAEfMNOW_pT"
                                />
                            </div>
                            <div className="aspect-square bg-surface-container overflow-hidden group">
                                <img
                                    alt="Student life"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                                    data-alt="student athlete training on a red running track at dusk with stadium lights in the background"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9JOt5dnF6uA5-bYZGIHnIeVoXCh_KXrBzgtkP6Z3YPbwgazorKxBRVfsm1MHBOqnX0y0ekJLd24DKkBk9awj67qjvmP1retoCKAK7miWXSqpcAVTwIWcm1wnFarJrlqFQo0QyfG5IFksN-b1RJMGSk_fEBG3NWERbH9N19817SCHfEjpr2-bbruGFQ26pyTsnu-DncVjhjzHT-fcOFMm4IUu_5vkUq3KCWG2p01SMVhdExHlAqEakX2y5dI85eYo0UtkaeYAhArLG"
                                />
                            </div>
                            <div className="aspect-square bg-surface-container overflow-hidden group">
                                <img
                                    alt="Student life"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                                    data-alt="university student walking through a high-tech library with books and digital screens, holding a tablet"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlz8CZOnqTz2U5rnlbCU-1UFarzLkhFDpFsYLN0un4U6qzptbC2yKy3enhlAfQwMFY5bmbvopil-XscYvvcjujNbX3QBOAUfl7xYYmn7JZFSMchdjsdoDZFEkEBGsfdWdeshKqtOMPYu6SpUC4DyuQ9aSQvQbx0_Yzbfx3PRItPJXo9q5SJ5kTE4xPrpRv2L2pRRktN8wf4kVfetQjOMtosp8SvqZk4eb5UBdY4QVhZVABn7pR2A7ntvXC4dpwuSf8INBl5d6rys2f"
                                />
                            </div>
                        </div>
                        <div className="mt-12 text-center">
                            <button className="bg-primary text-white px-10 py-4 font-headline font-bold uppercase text-xs tracking-[0.3em] neo-brutal-btn">
                                Follow our Journey
                            </button>
                        </div>
                    </div>
                </section>
                <footer className="bg-[#000a1e] dark:bg-black w-full py-12 px-12 border-t-0 tonal-shift">
                    <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-7xl mx-auto gap-8">
                        <div className="flex flex-col items-center md:items-start">
                            <div className="font-headline text-lg font-bold text-white mb-2">
                                Academic Editorial
                            </div>
                            <p className="font-label text-sm tracking-normal text-slate-400">
                                © 2024 University Heritage. All Rights Reserved.
                            </p>
                        </div>
                        <nav className="flex gap-8">
                            <a
                                className="font-label text-sm text-slate-400 hover:text-white transition-colors"
                                href="#"
                            >
                                Privacy Policy
                            </a>
                            <a
                                className="font-label text-sm text-slate-400 hover:text-white transition-colors"
                                href="#"
                            >
                                Directory
                            </a>
                            <a
                                className="font-label text-sm text-slate-400 hover:text-white transition-colors"
                                href="#"
                            >
                                Accessibility
                            </a>
                            <a
                                className="font-label text-sm text-slate-400 hover:text-white transition-colors"
                                href="#"
                            >
                                Contact
                            </a>
                        </nav>
                        <div className="flex gap-4">
                            <span
                                className="text-[#735c00] dark:text-amber-600 material-symbols-outlined cursor-pointer hover:scale-110 transition-transform"
                                data-icon="language"
                            >
                                language
                            </span>
                            <span
                                className="text-[#735c00] dark:text-amber-600 material-symbols-outlined cursor-pointer hover:scale-110 transition-transform"
                                data-icon="verified"
                            >
                                verified
                            </span>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
        </motion.div>
    );
}

export default StudentLife;

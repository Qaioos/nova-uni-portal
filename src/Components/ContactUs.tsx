import {motion} from "framer-motion";
function ContactUs() {
    return (
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
        <div className="bg-surface font-body text-on-surface selection:bg-secondary-container">
            <main className="pt-32 pb-20">
                {/* <!-- Hero Header --> */}
                <header className="max-w-[1440px] mx-auto px-8 mb-20">
                    <div className="flex flex-col md:flex-row gap-12 items-end">
                        <div className="md:w-2/3">
                            <span className="text-secondary font-headline font-bold uppercase tracking-[0.2em] text-sm block mb-4">
                                Connect With Us
                            </span>
                            <h1 className="text-6xl md:text-8xl font-headline font-extrabold text-primary leading-[0.9] tracking-tighter">
                                GET IN <br />
                                TOUCH.
                            </h1>
                        </div>
                        <div className="md:w-1/3 text-on-surface-variant text-lg leading-relaxed border-l-2 border-secondary pl-8">
                            Whether you are a prospective student, a researcher,
                            or a community member, our doors—and lines—are
                            always open. Find the right department or visit our
                            historic campus grounds.
                        </div>
                    </div>
                </header>
                {/* <!-- Main Interaction Section --> */}
                <section className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-0 mb-32 bg-surface-container-low overflow-hidden">
                    {/* <!-- Contact Form --> */}
                    <div className="lg:col-span-5 p-12 bg-white">
                        <h2 className="font-headline text-3xl font-bold text-primary mb-8 tracking-tight">
                            General Inquiry
                        </h2>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                                    Full Name
                                </label>
                                <input
                                    className="w-full border-0 border-b-2 border-surface-variant bg-transparent focus:ring-0 focus:border-secondary transition-colors py-3 px-0 placeholder:text-surface-dim"
                                    placeholder="Jane Doe"
                                    type="text"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                                    Email Address
                                </label>
                                <input
                                    className="w-full border-0 border-b-2 border-surface-variant bg-transparent focus:ring-0 focus:border-secondary transition-colors py-3 px-0 placeholder:text-surface-dim"
                                    placeholder="j.doe@university.edu"
                                    type="email"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                                    Department
                                </label>
                                <select className="w-full border-0 border-b-2 border-surface-variant bg-transparent focus:ring-0 focus:border-secondary transition-colors py-3 px-0 appearance-none">
                                    <option>Admissions</option>
                                    <option>Registrar</option>
                                    <option>Financial Aid</option>
                                    <option>Graduate Studies</option>
                                    <option>General Support</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                                    Message
                                </label>
                                <textarea
                                    className="w-full border-0 border-b-2 border-surface-variant bg-transparent focus:ring-0 focus:border-secondary transition-colors py-3 px-0 placeholder:text-surface-dim"
                                    placeholder="How can we assist your academic journey?"
                                ></textarea>
                            </div>
                            <button
                                className="w-full bg-primary text-on-primary py-5 font-headline font-bold uppercase tracking-widest neo-brutalist-offset hover:translate-y-[-2px] transition-all"
                                type="submit"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                    {/* <!-- Map Section --> */}
                    <div className="lg:col-span-7 relative h-[600px] lg:h-auto overflow-hidden group">
                        <img
                            className="absolute inset-0 w-full h-full object-cover grayscale brightness-50 contrast-125 group-hover:scale-105 transition-transform duration-700"
                            data-alt="Modern architectural blueprint style map of a university campus with gold accent markers and deep navy water features"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCET9xWSgSdjO8t9Uw1xI3ARaKhsigkt0hAz3otXjTcJYO04ND7tvaUTf01qYm38BG3nTZidjknAGC4AEt8Q70DuPy49HRklP0DP-kfQzt8JVjQc38Y19w2bIn6LdlykBb2WKdKAVLq2sjoNUjZ72TMOCBbOQbk7fIx3pjRF4CBVUpeQYMXxsiynUzdaPVPjcrA6uxzB1iglgqSx8V8g2jHIZzg7KXdUG3RCEC8dsIuenvTGG0euqxBstPjHczwp3YPqimTJawyubmz"
                        />
                        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
                        <div className="absolute bottom-12 left-12 right-12 glass-card p-8 border-l-4 border-secondary shadow-2xl">
                            <div className="flex items-start gap-4">
                                <span className="material-symbols-outlined text-secondary">
                                    location_on
                                </span>
                                <div>
                                    <h3 className="font-headline font-bold text-primary text-xl mb-1">
                                        Main Campus
                                    </h3>
                                    <p className="text-on-surface-variant mb-4">
                                        1200 University Avenue, Academic Square
                                        <br />
                                        Cambridge, MA 02138
                                    </p>
                                    <a
                                        className="text-secondary font-bold text-sm uppercase tracking-widest hover:underline flex items-center gap-2"
                                        href="#"
                                    >
                                        Get Directions{" "}
                                        <span className="material-symbols-outlined text-sm">
                                            arrow_outward
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Interactive Markers (Visual Only) --> */}
                        <div className="absolute top-1/3 left-1/2 w-4 h-4 bg-secondary rounded-full animate-pulse shadow-[0_0_20px_#735c00]"></div>
                    </div>
                </section>
                {/* <!-- Department Cards Grid --> */}
                <section className="max-w-[1440px] mx-auto px-8 mb-32">
                    <div className="flex justify-between items-end mb-16">
                        <div>
                            <h2 className="text-4xl font-headline font-extrabold text-primary tracking-tight">
                                Direct Channels
                            </h2>
                            <p className="text-on-surface-variant mt-2">
                                Connect with specific offices for specialized
                                assistance.
                            </p>
                        </div>
                        <div className="hidden md:block h-px flex-grow mx-12 bg-outline-variant opacity-30"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
                        {/* <!-- Card 1 --> */}
                        <div className="bg-white p-10 border-r border-b border-surface-variant/30 hover:bg-surface-container-lowest transition-colors group">
                            <div className="w-12 h-12 flex items-center justify-center bg-primary mb-8 group-hover:bg-secondary transition-colors">
                                <span
                                    className="material-symbols-outlined text-white"
                                    data-weight="fill"
                                >
                                    school
                                </span>
                            </div>
                            <h3 className="font-headline font-bold text-xl text-primary mb-4">
                                Admissions
                            </h3>
                            <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
                                Questions regarding applications, tours, and
                                enrollment requirements for all levels.
                            </p>
                            <div className="space-y-2 text-sm font-bold text-secondary">
                                <a
                                    className="block hover:underline"
                                    href="tel:5550123"
                                >
                                    800.555.0123
                                </a>
                                <a
                                    className="block hover:underline"
                                    href="mailto:apply@academic.edu"
                                >
                                    apply@academic.edu
                                </a>
                            </div>
                        </div>
                        {/* <!-- Card 2 --> */}
                        <div className="bg-white p-10 border-r border-b border-surface-variant/30 hover:bg-surface-container-lowest transition-colors group">
                            <div className="w-12 h-12 flex items-center justify-center bg-primary mb-8 group-hover:bg-secondary transition-colors">
                                <span
                                    className="material-symbols-outlined text-white"
                                    data-weight="fill"
                                >
                                    description
                                </span>
                            </div>
                            <h3 className="font-headline font-bold text-xl text-primary mb-4">
                                Registrar
                            </h3>
                            <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
                                Official transcripts, course registration, and
                                academic record management.
                            </p>
                            <div className="space-y-2 text-sm font-bold text-secondary">
                                <a
                                    className="block hover:underline"
                                    href="tel:5550124"
                                >
                                    800.555.0124
                                </a>
                                <a
                                    className="block hover:underline"
                                    href="mailto:records@academic.edu"
                                >
                                    records@academic.edu
                                </a>
                            </div>
                        </div>
                        {/* <!-- Card 3 --> */}
                        <div className="bg-white p-10 border-r border-b border-surface-variant/30 hover:bg-surface-container-lowest transition-colors group">
                            <div className="w-12 h-12 flex items-center justify-center bg-primary mb-8 group-hover:bg-secondary transition-colors">
                                <span
                                    className="material-symbols-outlined text-white"
                                    data-weight="fill"
                                >
                                    support_agent
                                </span>
                            </div>
                            <h3 className="font-headline font-bold text-xl text-primary mb-4">
                                Student Services
                            </h3>
                            <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
                                Housing, campus life, health services, and
                                extracurricular coordination.
                            </p>
                            <div className="space-y-2 text-sm font-bold text-secondary">
                                <a
                                    className="block hover:underline"
                                    href="tel:5550125"
                                >
                                    800.555.0125
                                </a>
                                <a
                                    className="block hover:underline"
                                    href="mailto:life@academic.edu"
                                >
                                    life@academic.edu
                                </a>
                            </div>
                        </div>
                        {/* <!-- Card 4 --> */}
                        <div className="bg-white p-10 border-b border-surface-variant/30 hover:bg-surface-container-lowest transition-colors group">
                            <div className="w-12 h-12 flex items-center justify-center bg-primary mb-8 group-hover:bg-secondary transition-colors">
                                <span
                                    className="material-symbols-outlined text-white"
                                    data-weight="fill"
                                >
                                    badge
                                </span>
                            </div>
                            <h3 className="font-headline font-bold text-xl text-primary mb-4">
                                Human Resources
                            </h3>
                            <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
                                Employment opportunities, benefits
                                administration, and faculty recruitment.
                            </p>
                            <div className="space-y-2 text-sm font-bold text-secondary">
                                <a
                                    className="block hover:underline"
                                    href="tel:5550126"
                                >
                                    800.555.0126
                                </a>
                                <a
                                    className="block hover:underline"
                                    href="mailto:hr@academic.edu"
                                >
                                    hr@academic.edu
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Newsletter / Quick Link Strip --> */}
                <section className="bg-primary py-20">
                    <div className="max-w-[1440px] mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-12">
                        <div className="text-center md:text-left">
                            <h3 className="font-headline text-3xl font-bold text-white mb-2">
                                Stay informed.
                            </h3>
                            <p className="text-slate-400">
                                Receive weekly editorial digests and campus news
                                directly in your inbox.
                            </p>
                        </div>
                        <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
                            <input
                                className="bg-slate-900 border-0 py-4 px-6 text-white focus:ring-2 focus:ring-secondary min-w-[300px]"
                                placeholder="email@address.edu"
                                type="email"
                            />
                            <button className="bg-secondary text-on-secondary font-headline font-bold px-8 py-4 uppercase tracking-widest hover:bg-secondary-fixed-dim transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </section>
            </main>
            {/* <!-- Footer --> */}
            <footer className="w-full pt-20 pb-10 bg-[#000a1e] dark:bg-black">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 max-w-[1440px] mx-auto">
                    <div className="col-span-1 md:col-span-1">
                        <span className="text-3xl font-black text-white mb-6 block font-headline">
                            Academic Editorial
                        </span>
                        <p className="font-['Public_Sans'] text-sm leading-relaxed text-slate-400 mb-8">
                            Curating the future of higher education through
                            prestigious heritage and modern innovation.
                        </p>
                        <div className="flex gap-4">
                            <a
                                className="w-10 h-10 border border-slate-700 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all"
                                href="#"
                            >
                                <span className="material-symbols-outlined text-white text-sm">
                                    social_leaderboard
                                </span>
                            </a>
                            <a
                                className="w-10 h-10 border border-slate-700 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all"
                                href="#"
                            >
                                <span className="material-symbols-outlined text-white text-sm">
                                    share
                                </span>
                            </a>
                            <a
                                className="w-10 h-10 border border-slate-700 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all"
                                href="#"
                            >
                                <span className="material-symbols-outlined text-white text-sm">
                                    alternate_email
                                </span>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-headline text-white font-bold uppercase tracking-widest text-sm mb-6">
                            Directory
                        </h4>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    className="font-['Public_Sans'] text-sm text-slate-400 hover:text-white hover:translate-x-1 transition-transform inline-block"
                                    href="#"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    className="font-['Public_Sans'] text-sm text-slate-400 hover:text-white hover:translate-x-1 transition-transform inline-block"
                                    href="#"
                                >
                                    Accessibility
                                </a>
                            </li>
                            <li>
                                <a
                                    className="font-['Public_Sans'] text-sm text-slate-400 hover:text-white hover:translate-x-1 transition-transform inline-block"
                                    href="#"
                                >
                                    Campus Map
                                </a>
                            </li>
                            <li>
                                <a
                                    className="font-['Public_Sans'] text-sm text-slate-400 hover:text-white hover:translate-x-1 transition-transform inline-block"
                                    href="#"
                                >
                                    Careers
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-headline text-white font-bold uppercase tracking-widest text-sm mb-6">
                            Campus Life
                        </h4>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    className="font-['Public_Sans'] text-sm text-slate-400 hover:text-white hover:translate-x-1 transition-transform inline-block"
                                    href="#"
                                >
                                    Student Orgs
                                </a>
                            </li>
                            <li>
                                <a
                                    className="font-['Public_Sans'] text-sm text-slate-400 hover:text-white hover:translate-x-1 transition-transform inline-block"
                                    href="#"
                                >
                                    Housing
                                </a>
                            </li>
                            <li>
                                <a
                                    className="font-['Public_Sans'] text-sm text-slate-400 hover:text-white hover:translate-x-1 transition-transform inline-block"
                                    href="#"
                                >
                                    Athletics
                                </a>
                            </li>
                            <li>
                                <a
                                    className="font-['Public_Sans'] text-sm text-slate-400 hover:text-white hover:translate-x-1 transition-transform inline-block"
                                    href="#"
                                >
                                    Arts &amp; Culture
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-headline text-white font-bold uppercase tracking-widest text-sm mb-6">
                            Global
                        </h4>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    className="font-['Public_Sans'] text-sm text-slate-400 hover:text-white hover:translate-x-1 transition-transform inline-block"
                                    href="#"
                                >
                                    International Admissions
                                </a>
                            </li>
                            <li>
                                <a
                                    className="font-['Public_Sans'] text-sm text-slate-400 hover:text-white hover:translate-x-1 transition-transform inline-block"
                                    href="#"
                                >
                                    Research Centers
                                </a>
                            </li>
                            <li>
                                <a
                                    className="font-['Public_Sans'] text-sm text-slate-400 hover:text-white hover:translate-x-1 transition-transform inline-block"
                                    href="#"
                                >
                                    Alumni Network
                                </a>
                            </li>
                            <li>
                                <a
                                    className="font-['Public_Sans'] text-sm text-[#735c00] font-bold"
                                    href="#"
                                >
                                    Contact Support
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="max-w-[1440px] mx-auto px-8 mt-20 pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
                    <span className="font-['Public_Sans'] text-xs text-slate-500 uppercase tracking-widest">
                        © 2026 Academic Editorial University. All rights
                        reserved.
                    </span>
                    <div className="flex gap-8">
                        <a
                            className="text-xs text-slate-500 uppercase tracking-widest hover:text-white transition-colors"
                            href="#"
                        >
                            Terms
                        </a>
                        <a
                            className="text-xs text-slate-500 uppercase tracking-widest hover:text-white transition-colors"
                            href="#"
                        >
                            Ethics
                        </a>
                        <a
                            className="text-xs text-slate-500 uppercase tracking-widest hover:text-white transition-colors"
                            href="#"
                        >
                            Cookies
                        </a>
                    </div>
                </div>
            </footer>
        </div>
        </motion.div>
    );
}

export default ContactUs;

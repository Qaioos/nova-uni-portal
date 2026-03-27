import { useEffect } from "react";

function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-background font-body text-on-background">
            <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-primary overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-container to-transparent"></div>
                </div>
                <div className="max-w-1400px mx-auto px-8 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                    <div className="md:col-span-7">
                        <p className="text-secondary font-headline font-bold tracking-widest uppercase text-xs mb-4">
                            Founded 1892
                        </p>
                        <h1 className="text-white font-headline font-extrabold text-5xl md:text-7xl leading-[1.1] tracking-tighter mb-8">
                            Architects of the Future{" "}
                            <span className="text-secondary-fixed-dim italic">
                                Mind.
                            </span>
                        </h1>
                        <p className="text-slate-300 text-lg md:text-xl max-w-xl font-light leading-relaxed">
                            Defining global standards in editorial rigor and
                            academic innovation for over a century.
                        </p>
                    </div>
                    <div className="md:col-span-5 relative">
                        <div className="aspect-[4/5] bg-surface-container-low relative overflow-hidden">
                            <img
                                className="w-full h-full object-cover"
                                alt="Stately neoclassical university library with tall stone columns and large windows reflecting a deep blue twilight sky"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZQ1If_mSSocDFD49hYu9OyAqbXNDEMl3CkMJa1GiTTRunRaW4cpyEco6cYjhW6YZvZnL9q1h3gO8ACvUdSs0frRdgDXVPCInpfPWBfFO62uZ5AGkiBD2BHs9q55bfIYRZEovRIQjLSOeZIMSmft-mhVjOxjwIQfRwAn9Ou4dwUtsKgZjzng7S-a5Fx5X-YNpU9TEBAGPBH1ltj-q_PwHuzyRinYuiU6agCqsg135rdAh5XUwzaKStiD7pLbBbO0ZNwMFYPQqUPG8E"
                                loading="lazy"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-secondary p-8 hidden md:block">
                                <span className="material-symbols-outlined text-white text-5xl">
                                    account_balance
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section className="py-24 bg-surface">
                <div className="max-w-[1440px] mx-auto px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
                        <div>
                            <span className="text-secondary font-headline font-bold uppercase text-sm tracking-[0.2em] block mb-6">
                                Our Mission
                            </span>
                            <h2 className="text-primary font-headline font-extrabold text-4xl md:text-5xl leading-tight mb-8">
                                To curate knowledge that transcends boundaries
                                and empowers the human spirit.
                            </h2>
                        </div>
                        <div className="flex flex-col gap-10">
                            <div className="p-10 bg-white border-l-4 border-secondary-fixed-dim">
                                <p className="text-on-surface-variant text-xl leading-relaxed italic">
                                    "Academic Editorial is not just an
                                    institution; it is a repository of human
                                    progress. We commit ourselves to the
                                    relentless pursuit of truth through
                                    editorial precision and scholarly
                                    independence."
                                </p>
                                <p className="mt-6 font-headline font-bold text-primary uppercase text-sm">
                                    — Dr. Julian Thorne, President
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <h4 className="text-primary font-headline font-bold text-lg mb-2">
                                        Integrity
                                    </h4>
                                    <p className="text-sm text-on-surface-variant">
                                        Maintaining the highest standards of
                                        peer-review and ethical research
                                        protocols.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-primary font-headline font-bold text-lg mb-2">
                                        Innovation
                                    </h4>
                                    <p className="text-sm text-on-surface-variant">
                                        Pioneering digital curation methods for
                                        the 21st-century global scholar.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-24 bg-surface-container-low">
                <div className="max-w-[1440px] mx-auto px-8">
                    <div className="mb-20 text-center md:text-left">
                        <span className="text-secondary font-headline font-bold uppercase text-sm tracking-[0.2em] block mb-4">
                            The Chronicle
                        </span>
                        <h2 className="text-primary font-headline font-extrabold text-4xl md:text-5xl">
                            Our History
                        </h2>
                    </div>
                    <div className="relative">
                        <div className="absolute left-4 md:left-1/2 h-full w-[2px] bg-outline-variant opacity-20 transform -translate-x-1/2"></div>
                        <div className="space-y-24">
                            <div className="relative flex flex-col md:flex-row items-center">
                                <div className="md:w-1/2 md:pr-24 text-left md:text-right">
                                    <span className="text-secondary font-headline font-extrabold text-3xl block mb-2">
                                        1892
                                    </span>
                                    <h3 className="text-primary font-headline font-bold text-2xl mb-4">
                                        The Foundation
                                    </h3>
                                    <p className="text-on-surface-variant">
                                        Established as the first dedicated
                                        editorial research facility in the
                                        region, bridging classNameical
                                        philosophy with modern scientific
                                        inquiry.
                                    </p>
                                </div>
                                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-surface-container-lowest border-4 border-primary rounded-full transform -translate-x-1/2 z-10 flex items-center justify-center">
                                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                                </div>
                                <div className="md:w-1/2 md:pl-24 hidden md:block">
                                    <img
                                        className="w-full h-64 object-cover grayscale opacity-80"
                                        alt="Vintage black and white photo of scholars in a high-ceilinged library with massive arched windows and mahogany desks"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAT_87GsF2I7Qsj0sNId8wbJ1KWycQsMlle1IrYHGAyeqEC8xCyaFf9Ch9ehrl7-0nTVDajVM-6q8oWtniufph2KSsyD78NiXO49tOhjcSBSSDR5F727p5S8oA2F_i_49rhYx8TO_tRR0UVtdWZJ5ZBb9fjhtSRLiZBd4LNTet8f6MiQLlslOtGjUCe6YAMOvTyCnIBZzZCKFZg7-kxkVdzvsygLYxV-pTCZsHlhcXVmiNSkhvbbwwzNmU1771a3hQl_TvMfBxPHNGo"
                                    />
                                </div>
                            </div>
                            <div className="relative flex flex-col md:flex-row-reverse items-center">
                                <div className="md:w-1/2 md:pl-24">
                                    <span className="text-secondary font-headline font-extrabold text-3xl block mb-2">
                                        1945
                                    </span>
                                    <h3 className="text-primary font-headline font-bold text-2xl mb-4">
                                        Post-War Expansion
                                    </h3>
                                    <p className="text-on-surface-variant">
                                        Reconstruction of the East Wing and the
                                        establishment of the Faculty of Social
                                        Sciences and Applied Ethics.
                                    </p>
                                </div>
                                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-surface-container-lowest border-4 border-primary rounded-full transform -translate-x-1/2 z-10 flex items-center justify-center">
                                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                                </div>
                                <div className="md:w-1/2 md:pr-24 hidden md:block">
                                    <img
                                        className="w-full h-64 object-cover grayscale opacity-80"
                                        alt="Mid-century architectural blueprint of a university building with elegant clean lines and geometric proportions"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBgWr5klFSkELj_xHAKsU964YUnPRqHgj5o-Hz-DsHAlJs9qMh8_Z8Kip7OPt8sDxnBkjbr8hiOeH9t-acwuvYe9nlDPYIPX9c_zZItSqWKnE5ScwW3qfEX3FeekxMavj1SbKC206zGaibgnFibNh21di6Bp2ih6lTUFOIoRfV9uYtkII1mppEnw1TEQRbS3tNHMTeQAKh3UnGD5BkS2jWvhFm2LUgn30JsOIggAoBRpnu9C2ynxVmjEjdXg03c6TKCu_vK7uv1ZaW"
                                    />
                                </div>
                            </div>
                            <div className="relative flex flex-col md:flex-row items-center">
                                <div className="md:w-1/2 md:pr-24 text-left md:text-right">
                                    <span className="text-secondary font-headline font-extrabold text-3xl block mb-2">
                                        2010
                                    </span>
                                    <h3 className="text-primary font-headline font-bold text-2xl mb-4">
                                        The Digital Shift
                                    </h3>
                                    <p className="text-on-surface-variant">
                                        Inauguration of the Digital Curation
                                        Hub, leading the global transition to
                                        open-access academic publishing.
                                    </p>
                                </div>
                                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-surface-container-lowest border-4 border-primary rounded-full transform -translate-x-1/2 z-10 flex items-center justify-center">
                                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                                </div>
                                <div className="md:w-1/2 md:pl-24 hidden md:block">
                                    <img
                                        className="w-full h-64 object-cover"
                                        alt="Modern glass and steel research center interior with minimalist workstations and bright ambient lighting"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeWOmOvEN9TO9ni9AkwqIdopguzrDB54rUKPpY_LalYUJeTW-nI5SPIQ1RvNZMR_nQnhGM55qzyhucaJ8KoPje-TWzE0vDcizs5fLiwAOjGlgH9dRwWfdGDuMOSjAZEcfTq1rq4IF2RNvPCOct19QIGTSt7KSXVJZSdZKZVVDaXmbIuKxtC8iZxauCpFUDEqaMq-fMK6xJy6LwmaxTIPidK-78bO523VciZgOSjozqoXJWab8YqXzOKqnxLAB6nwXaKa0NLVQ-emW3"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-24 bg-white">
                <div className="max-w-[1440px] mx-auto px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-4 grid-rows-2 gap-6 min-h-[800px]">
                        <div className="lg:col-span-2 lg:row-span-2 bg-primary p-12 flex flex-col justify-between relative overflow-hidden group">
                            <div className="relative z-10">
                                <span className="text-secondary font-headline font-bold uppercase text-xs tracking-widest mb-4 block">
                                    The Faculty
                                </span>
                                <h3 className="text-white font-headline font-extrabold text-4xl mb-6">
                                    Pioneering Research Teams
                                </h3>
                                <p className="text-slate-300 max-w-sm">
                                    Home to 14 Nobel Laureates and over 200
                                    Fulbright Scholars driving the next wave of
                                    global innovation.
                                </p>
                            </div>
                            <div className="relative z-10 mt-auto">
                                <button className="bg-white text-primary px-8 py-3 font-headline font-bold text-sm uppercase flex items-center gap-3 w-fit neo-brutalist-btn">
                                    View Faculty Directory
                                    <span className="material-symbols-outlined">
                                        arrow_forward
                                    </span>
                                </button>
                            </div>
                            <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity">
                                <img
                                    className="w-full h-full object-cover"
                                    data-alt="Close-up of a diverse group of academic researchers in a high-tech lab discussing data on a large transparent screen"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiD7F9HgqX1Gf42ida23FNtgGjCP1Fj4hIbKWMkDrs8VJ8rmdpeLkWQu-Mpzi36o8sQLYDCO9f-GRdfMjYWuqw7vI0TDe6YzjD4ucnojb6OVkEGBkRYXfPyeAHK44F8kYNeZxdw2A5fsX5clMvYpUJjlYbbxHJ5lS8MmTppgyBdDVCiN21kg8fGk9LB_z-AbKLr43Dddn5jcUXd2xtuq6oFIbGn6ONBrjyBVCi8SytYxojXkiWlufQLS_lkXRzZVbCRF5vgHDr09Py"
                                />
                            </div>
                        </div>
                        <div className="bg-surface-container-low p-8 flex flex-col justify-center">
                            <span className="material-symbols-outlined text-secondary text-4xl mb-6">
                                workspace_premium
                            </span>
                            <h4 className="text-primary font-headline font-bold text-xl mb-2">
                                #1 Editorial Program
                            </h4>
                            <p className="text-on-surface-variant text-sm">
                                Ranked globally for academic rigor and
                                journalistic ethics in curation.
                            </p>
                        </div>
                        <div className="bg-surface-container-high p-8 flex flex-col justify-between group overflow-hidden relative">
                            <div className="relative z-10">
                                <h4 className="text-primary font-headline font-bold text-xl mb-2">
                                    The Atrium Lab
                                </h4>
                            </div>
                            <div className="absolute inset-0 z-0 transition-transform group-hover:scale-110">
                                <img
                                    className="w-full h-full object-cover"
                                    data-alt="A futuristic laboratory with white surfaces, sleek equipment, and large windows overlooking a green campus courtyard"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBy364VAFQ1kq2ROkwXkXTn_N360vdNUPlDcujMwHTwKC7vNSG3uHLMoZb6l7lX0eJAYMyPBqahbVALaQAAUCceAx83ozIgKA96M8WGMBFPaCyLv2-3ctzCLjZkawl48hsL4t4vLBx6Tch1gWnrWh6X4xJdQWPWHeecIwMx1mJdRw1jQ6xkC0WMNBkJrPC1cj7u9x7Be9PQvune0822PbvyWdZ8LlidKA_ikJIwdvu81SyzP4rA1068fHlE_aiPqgWm9_JOGSFiAkDa"
                                />
                            </div>
                            <div className="absolute inset-0 bg-primary/20"></div>
                        </div>
                        <div className="lg:col-span-2 bg-secondary text-white p-8 flex items-center justify-between">
                            <div>
                                <h3 className="font-headline font-extrabold text-5xl mb-2">
                                    15k+
                                </h3>
                                <p className="font-headline font-bold uppercase text-xs tracking-widest">
                                    Annual Publications
                                </p>
                            </div>
                            <div className="h-16 w-[1px] bg-white/20"></div>
                            <div>
                                <h3 className="font-headline font-extrabold text-5xl mb-2">
                                    98%
                                </h3>
                                <p className="font-headline font-bold uppercase text-xs tracking-widest">
                                    Post-Grad Placement
                                </p>
                            </div>
                            <div className="h-16 w-[1px] bg-white/20"></div>
                            <div>
                                <h3 className="font-headline font-extrabold text-5xl mb-2">
                                    42
                                </h3>
                                <p className="font-headline font-bold uppercase text-xs tracking-widest">
                                    Global Campuses
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-24 bg-surface">
                <div className="max-w-[1440px] mx-auto px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div className="max-w-xl">
                            <span className="text-secondary font-headline font-bold uppercase text-sm tracking-[0.2em] block mb-4">
                                Leadership
                            </span>
                            <h2 className="text-primary font-headline font-extrabold text-4xl md:text-5xl mb-6">
                                Governed by Excellence
                            </h2>
                            <p className="text-on-surface-variant">
                                Our Board of Trustees and Executive Leadership
                                bring together diverse perspectives from the
                                worlds of academia, industry, and international
                                policy.
                            </p>
                        </div>
                        <button className="border-2 border-primary text-primary px-8 py-3 font-headline font-bold text-sm uppercase hover:bg-primary hover:text-white transition-all">
                            Full Board Member List
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="group">
                            <div className="aspect-[3/4] bg-surface-container-high mb-6 overflow-hidden">
                                <img
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                    data-alt="Professional portrait of a woman in a dark suit with graying hair, smiling warmly in a bright modern office"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZJ2TGRE-MkHxqleYVTZV8Mid47qk9SINqzTGKvoZyqqQbvZf6EZg1Y-yVVI8UIW4k2R_lBCxwnO05SKr0GjYvtid_nc7RcjHRBPMKbiR8zopuCNgBbV-3h0BDXcSBoMQ1MVPGZQ1X4MI3b7Sr9DvFE42e1FEyJct3-MkNsiXgvYiwMUCURCou4usdrnjv9kYIPsBA9jyvAI7F2W1pK9Ad9vYAqhOtxFwevr3obj3NA859mlEKEEKWdDz0YQ_Szrb0KcRj_JP9odPE"
                                />
                            </div>
                            <h4 className="text-primary font-headline font-bold text-2xl uppercase tracking-tighter">
                                Dr. Julian Thorne
                            </h4>
                            <p className="text-secondary font-headline font-bold text-xs uppercase tracking-widest mt-1">
                                University President
                            </p>
                            <div className="mt-4 pt-4 border-t border-outline-variant flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="material-symbols-outlined text-outline cursor-pointer hover:text-primary">
                                    mail
                                </span>
                                <span className="material-symbols-outlined text-outline cursor-pointer hover:text-primary">
                                    share
                                </span>
                            </div>
                        </div>
                        <div className="group">
                            <div className="aspect-[3/4] bg-surface-container-high mb-6 overflow-hidden">
                                <img
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                    data-alt="Professional portrait of a man in a navy blazer with glasses, looking focused and authoritative against a bookshelf background"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8YePMA97Gvv_cvFurXD0MBLnLrbcJ0ksU-7YLTVdZjkulM5KAUvHXcboIf1uX7FyREOR3euPz9RnAPXLInI7DsEjlX3Mz23Wn5fF7q8GRPkD5tk-TtvzioVJfik2g-1VF24BcNArTz7G9_REUKR1fUycDm8sNNlgZvJfwRbARMWXOzHt3nYA5PuhGuEZitEx75-72IKqxCaQkkNtxjNbVHRwqxRuqd7bYbaSLqAs-4VO_L6O1IwYhyO7aCZhQFVpIGJ9VQQjjAIio"
                                />
                            </div>
                            <h4 className="text-primary font-headline font-bold text-2xl uppercase tracking-tighter">
                                Marcus Vane
                            </h4>
                            <p className="text-secondary font-headline font-bold text-xs uppercase tracking-widest mt-1">
                                Chair, Board of Trustees
                            </p>
                            <div className="mt-4 pt-4 border-t border-outline-variant flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="material-symbols-outlined text-outline cursor-pointer hover:text-primary">
                                    mail
                                </span>
                                <span className="material-symbols-outlined text-outline cursor-pointer hover:text-primary">
                                    share
                                </span>
                            </div>
                        </div>
                        <div className="group">
                            <div className="aspect-[3/4] bg-surface-container-high mb-6 overflow-hidden">
                                <img
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                    data-alt="Professional portrait of a young woman with a sharp confident gaze, wearing elegant minimalist attire in a sunlit gallery"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9EZdNMjsGwDLj4B1D3QD6MTOWaP6ZR6dv4OyTFke2APjqPgYkUeCgUVvxhsebLq_i6xbEexg9RjD_38aWmtcgz3dO6RmaioqzW4GcSSSQWm5lxFkYOIEmNL6ylzZWGC41yUrA4dpcwBxhS5xO_jc_ld8S-20Q-cdWAfK1d8Gbi-frCSuDnTudgoasJUv0PYAaYWXgZsAfBSB8S3kP4r6SGoEfg3IjouYWxp0naAY3xo1NkWSXJgFm9ZWkESPTsGwu4YVh6EeOhPmZ"
                                />
                            </div>
                            <h4 className="text-primary font-headline font-bold text-2xl uppercase tracking-tighter">
                                Elena Rossi
                            </h4>
                            <p className="text-secondary font-headline font-bold text-xs uppercase tracking-widest mt-1">
                                Provost of Academic Affairs
                            </p>
                            <div className="mt-4 pt-4 border-t border-outline-variant flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="material-symbols-outlined text-outline cursor-pointer hover:text-primary">
                                    mail
                                </span>
                                <span className="material-symbols-outlined text-outline cursor-pointer hover:text-primary">
                                    share
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="bg-[#000a1e] text-white pt-20 pb-10">
                <div className="max-w-[1440px] mx-auto px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                        <div className="md:col-span-1">
                            <span className="text-3xl font-black text-white mb-6 block font-headline uppercase">
                                Academic Editorial
                            </span>
                            <p className="text-slate-400 font-body text-sm leading-relaxed mb-8">
                                Empowering scholars through rigorous editorial
                                curation since 1892.
                            </p>
                            <div className="flex gap-4">
                                <div className="w-10 h-10 bg-slate-800 flex items-center justify-center hover:bg-secondary transition-colors cursor-pointer">
                                    <span className="material-symbols-outlined text-sm">
                                        public
                                    </span>
                                </div>
                                <div className="w-10 h-10 bg-slate-800 flex items-center justify-center hover:bg-secondary transition-colors cursor-pointer">
                                    <span className="material-symbols-outlined text-sm">
                                        alternate_email
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h5 className="font-headline font-bold text-white uppercase text-sm mb-6 tracking-widest">
                                Quick Links
                            </h5>
                            <ul className="space-y-4">
                                <li>
                                    <a
                                        className="text-slate-400 hover:text-white transition-all hover:translate-x-1 inline-block font-body text-sm"
                                        href="#"
                                    >
                                        Campus Map
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-slate-400 hover:text-white transition-all hover:translate-x-1 inline-block font-body text-sm"
                                        href="#"
                                    >
                                        Financial Aid
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-slate-400 hover:text-white transition-all hover:translate-x-1 inline-block font-body text-sm"
                                        href="#"
                                    >
                                        Alumni Network
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-slate-400 hover:text-white transition-all hover:translate-x-1 inline-block font-body text-sm"
                                        href="#"
                                    >
                                        Library Services
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-headline font-bold text-white uppercase text-sm mb-6 tracking-widest">
                                Administration
                            </h5>
                            <ul className="space-y-4">
                                <li>
                                    <a
                                        className="text-slate-400 hover:text-white transition-all hover:translate-x-1 inline-block font-body text-sm"
                                        href="#"
                                    >
                                        Directory
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-slate-400 hover:text-white transition-all hover:translate-x-1 inline-block font-body text-sm"
                                        href="#"
                                    >
                                        Careers
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-slate-400 hover:text-white transition-all hover:translate-x-1 inline-block font-body text-sm"
                                        href="#"
                                    >
                                        Governance
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-slate-400 hover:text-white transition-all hover:translate-x-1 inline-block font-body text-sm"
                                        href="#"
                                    >
                                        Press Office
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-headline font-bold text-white uppercase text-sm mb-6 tracking-widest">
                                Admissions
                            </h5>
                            <p className="text-slate-400 text-sm mb-6">
                                Request more information about our enrollment
                                periods and scholarship opportunities.
                            </p>
                            <button className="w-full bg-secondary py-3 font-headline font-bold text-xs uppercase neo-brutalist-btn">
                                Request Prospectus
                            </button>
                        </div>
                    </div>
                    <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-slate-500 font-body text-xs">
                            © 2024 Academic Editorial University. All rights
                            reserved.
                        </p>
                        <div className="flex gap-8">
                            <a
                                className="text-slate-500 hover:text-white text-xs transition-colors"
                                href="#"
                            >
                                Privacy Policy
                            </a>
                            <a
                                className="text-slate-500 hover:text-white text-xs transition-colors"
                                href="#"
                            >
                                Accessibility
                            </a>
                            <a
                                className="text-slate-500 hover:text-white text-xs transition-colors"
                                href="#"
                            >
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default About;

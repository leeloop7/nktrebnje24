import React, { useState } from "react";
import { Link, Head } from "@inertiajs/react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    // Define menu items with path and name
    const menuItems = [
        { path: "/novice", name: "Novice" },
        { path: "/o-klubu", name: "O klubu" },
        { path: "/selekcije", name: "Selekcije" },
        { path: "/klubska-oprema", name: "Klubska oprema" },
        { path: "/kontakt", name: "Kontakt" },
        { path: "/vpis", name: "Vpis 23/24" },
    ];

    const newsItems = [
        {
            id: 1,
            title: "Spomladanski urniki treningov",
            summary:
                "Summary of the main news. This is a longer text because it's the featured news.",
            image: "https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
            id: 2,
            title: "Vabila na turnirje",
            summary: "Summary of the secondary news.",
            image: "https://images.pexels.com/photos/9519554/pexels-photo-9519554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
            id: 3,
            title: "Prednovoletno druženje",
            summary: "Summary of the secondary news.",
            image: "https://images.pexels.com/photos/3621121/pexels-photo-3621121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
    ];

    // Assuming a 4rem gap between items 2 and 3, and each having equal height
    const secondaryTotalHeight = "calc(50% + 1rem)"; // for a gap of 2rem

    return (
        <>
            <Head title="Welcome" />
            <header className="top-0 left-0 z-50 w-full bg-white text-primary">
                <div className="max-w-6xl px-4 mx-auto sm:px-4 lg:px-4">
                    <div className="flex justify-between py-3">
                        {/* Logo on the left */}
                        <div className="flex">
                            <a href="/">
                                {/* Replace src with your logo image path */}
                                <img
                                    src="/img/logo.png"
                                    alt="Logo"
                                    className="absolute h-24"
                                />
                            </a>
                        </div>

                        {/* Navigation Menu */}
                        <nav className="flex space-x-4">
                            {menuItems.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.path}
                                    className="relative px-1 pt-8 pb-2 font-semibold transition duration-300 ease-in-out text-primary hover:text-gray-500 group"
                                    style={{ textDecoration: "none" }}
                                >
                                    {item.name}
                                    {/* Underline effect */}
                                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
            </header>

            <div className="py-10 news-section font-kanit">
                <div className="max-w-6xl px-4 mx-auto">
                    <div class="bg-secondary w-32 h-4 rounded-md"></div>
                    <div class="flex justify-between items-center">
                        <h2 className="my-4 text-3xl font-bold uppercase text-primary">
                            Zadnje novice
                        </h2>
                        <a href="" className="text-sm text-secondary">
                            Preglej vse novice...
                        </a>
                    </div>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {/* Main News Item with 4:3 Aspect Ratio */}
                        <div
                            className="relative md:col-span-2"
                            style={{ paddingBottom: "calc(75% - 1rem)" }}
                        >
                            <div
                                className="absolute inset-0 flex flex-col justify-end bg-center bg-cover"
                                style={{
                                    backgroundImage: `url(${newsItems[0].image})`,
                                }}
                            >
                                <div className="p-4 text-white bg-gradient-to-t from-black to-transparent">
                                    <h3 className="mb-2 text-2xl font-semibold">
                                        {newsItems[0].title}
                                    </h3>
                                    <p>{newsItems[0].summary}</p>
                                </div>
                            </div>
                        </div>

                        {/* Secondary News Items */}
                        <div className="space-y-8 md:col-span-1">
                            {newsItems.slice(1).map((item, index) => (
                                <div
                                    key={item.id}
                                    className={`bg-cover bg-center  flex flex-col justify-end`}
                                    style={{
                                        backgroundImage: `url(${item.image})`,
                                        height: "calc(50% - 1rem)",
                                    }}
                                >
                                    <div className="p-4 text-white bg-gradient-to-t from-black to-transparent">
                                        <h4 className="mb-2 text-xl font-semibold">
                                            {item.title}
                                        </h4>
                                        <p>{item.summary}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
               .group:hover .group-hover:scale-x-100 {
                transform: scaleX(1);
              }
            `}</style>
            <div class="flex max-w-6xl mx-auto flex-col md:flex-row md:space-x-8 bg-gray-50 p-4">
                {/* Past Matches Section */}
                <div class="flex-1">
                    <h2 class="text-xl font-bold text-primary border-b-4 border-secondary mb-4">
                        ZADNJE TEKME
                    </h2>
                    <div class="divide-y border-b border-t">
                        {/* Repeat this block for each past match */}
                        <div class="">
                            <div class="grid grid-cols-12 items-center">
                                <div className="col-span-3 p-2 py-4 font-bold text-center text-white bg-secondary">
                                    PRVA EKIPA
                                </div>
                                <div className="col-span-3 p-2 text-sm">
                                    <div>NED</div>
                                    <div className="font-bold">18.2.2024</div>
                                </div>
                                <div className="col-span-5 text-sm text-left">
                                    Trebnje : Ivančna Gorica
                                </div>
                                <div className="col-span-1 text-sm text-center ">
                                    2:1
                                </div>
                            </div>
                        </div>
                        {/* ... other matches ... */}
                        <div class="">
                            <div class="grid grid-cols-12 items-center">
                                <div className="col-span-3 p-2 py-4 font-bold text-center text-white bg-secondary">
                                    U17
                                </div>
                                <div className="col-span-3 p-2 text-sm">
                                    <div>NED</div>
                                    <div className="font-bold">18.2.2024</div>
                                </div>
                                <div className="col-span-5 text-sm text-left">
                                    Slovan B : Trebnje
                                </div>
                                <div className="col-span-1 text-sm text-center ">
                                    0:2
                                </div>
                            </div>
                        </div>
                        <div class="">
                            <div class="grid grid-cols-12 items-center">
                                <div className="col-span-3 p-2 py-4 font-bold text-center text-white bg-secondary">
                                    U15
                                </div>
                                <div className="col-span-3 p-2 text-sm">
                                    <div>NED</div>
                                    <div className="font-bold">18.2.2024</div>
                                </div>
                                <div className="col-span-5 text-sm text-left">
                                    Olimpija : Trebnje
                                </div>
                                <div className="col-span-1 text-sm text-center ">
                                    0:2
                                </div>
                            </div>
                        </div>
                        <div class="">
                            <div class="grid grid-cols-12 items-center">
                                <div className="col-span-3 p-2 py-4 font-bold text-center text-white bg-secondary">
                                    U13
                                </div>
                                <div className="col-span-3 p-2 text-sm">
                                    <div>NED</div>
                                    <div className="font-bold">18.2.2024</div>
                                </div>
                                <div className="col-span-5 text-sm text-left">
                                    Dolomiti : Trebnje
                                </div>
                                <div className="col-span-1 text-sm text-center ">
                                    1:6
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Upcoming Matches Section */}
                <div class="flex-1 mt-8 md:mt-0">
                    <h2 class="text-xl font-bold text-gray-700 border-b-4 border-secondary mb-4">
                        NASLEDNJE TEKME
                    </h2>
                    <div class="divide-y border-b border-t">
                        {/* Repeat this block for each past match */}
                        <div class="">
                            <div class="grid grid-cols-12 items-center">
                                <div className="col-span-3 p-2 py-4 font-bold text-center text-white bg-secondary">
                                    PRVA EKIPA
                                </div>
                                <div className="col-span-3 p-2 text-sm">
                                    <div>NED</div>
                                    <div className="font-bold">18.2.2024</div>
                                </div>
                                <div className="col-span-5 text-sm text-left">
                                    Trebnje : Ivančna Gorica
                                </div>
                                <div className="col-span-1 text-sm text-cente ">
                                    19:00
                                </div>
                            </div>
                        </div>
                        {/* ... other matches ... */}
                        <div class="">
                            <div class="grid grid-cols-12 items-center">
                                <div className="col-span-3 p-2 py-4 font-bold text-center text-white bg-secondary">
                                    U17
                                </div>
                                <div className="col-span-3 p-2 text-sm">
                                    <div>NED</div>
                                    <div className="font-bold">18.2.2024</div>
                                </div>
                                <div className="col-span-5 text-sm text-left">
                                    Slovan B : Trebnje
                                </div>
                                <div className="col-span-1 text-sm text-center ">
                                    16:00
                                </div>
                            </div>
                        </div>
                        <div class="">
                            <div class="grid grid-cols-12 items-center">
                                <div className="col-span-3 p-2 py-4 font-bold text-center text-white bg-secondary">
                                    U15
                                </div>
                                <div className="col-span-3 p-2 text-sm">
                                    <div>NED</div>
                                    <div className="font-bold">18.2.2024</div>
                                </div>
                                <div className="col-span-5 text-sm text-left">
                                    Olimpija : Trebnje
                                </div>
                                <div className="col-span-1 text-sm text-center ">
                                    12:30
                                </div>
                            </div>
                        </div>
                        <div class="">
                            <div class="grid grid-cols-12 items-center">
                                <div className="col-span-3 p-2 py-4 font-bold text-center text-white bg-secondary">
                                    U13
                                </div>
                                <div className="col-span-3 p-2 text-sm">
                                    <div>NED</div>
                                    <div className="font-bold">18.2.2024</div>
                                </div>
                                <div className="col-span-5 text-sm text-left">
                                    Dolomiti : Trebnje
                                </div>
                                <div className="col-span-1 text-sm text-center">
                                    10:30
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container mx-auto px-4 py-32">
                <div class="text-center mb-6">
                    <h2 class="text-lg font-bold">
                        Izvajanje programa nogometne šole sofinancira glavni
                        sponzor:
                    </h2>
                    <div class="flex flex-col items-center">
                        <img
                            src="/img/obcina.jpg"
                            alt="REM"
                            class="mb-4 h-40"
                        />
                    </div>
                </div>
                <div class="text-center mb-6">
                    <h2 class="text-2xl font-bold uppercase">
                        Naši sponzorji:
                    </h2>
                </div>

                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-center">
                    <div class="flex flex-col items-center">
                        <img src="/img/rem.jpg" alt="REM" class="mb-4 h-32" />
                    </div>
                    <div class="flex flex-col items-center">
                        <img
                            src="/img/dobrote.jpg"
                            alt="DOBROTE"
                            class="mb-4 h-32"
                        />
                    </div>
                    <div class="flex flex-col items-center">
                        <img src="/img/tem.jpg" alt="TEM" class="mb-4 h-32" />
                    </div>
                    <div class="flex flex-col items-center">
                        <img
                            src="/img/lumenia.jpg"
                            alt="LUMENIA"
                            class="mb-4 h-32"
                        />
                    </div>
                </div>

                <div class="text-center mt-8">
                    <h3 class="text-xl font-semibold uppercase">Donatorji:</h3>
                    <p class="text-base mt-2">
                        G-Trans, JMW fire d.o.o., Lions klub Trebnje, Krik Aksum
                        d.o.o., Orkoplast d.o.o., Elektromehanika Gregorič
                        d.o.o., Trimo MSS
                    </p>
                </div>
            </div>
        </>
    );
}

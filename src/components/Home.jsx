import React from "react";

const Home = () => {
    return (
        <main>
            <div className="main pl-9 pr-9 h-screen">
                <div className="h-screen hero flex flex-col justify-center lg:text-left sm:text-center">
                    <p className="text-1xl pb-10">
                        #SPOTIFYWRAPPED
                    </p>
                    <div className="responsive-text pointer-events-none pb-10 lg:w-2/3 h-auto tracking-tight font-extrabold">
                        2021 Wrapped is ready.
                    </div>
                    <p className="lg:w-1/3 text-2xl pb-10">
                        But it’s only available in the Spotify app. Download it now to discover more.
                    </p>
                    <p className="hover:underline">
                        <a href="/">
                            Listen to 2021 Highlights Here.
                        </a>
                    </p>
                </div>
            </div>
            <div className="jump-back">
                <div className="h-screen flex flex-col justify-center items-center text-center">
                    <div className="lg:text-8xl md:text-6xl sm:text-5xl text-5xl leading-snug tracking-tight font-extrabold mb-14 green">
                        Jump Back In
                    </div>
                    <p className="text-xl green mb-14">
                        Pick up your music right where you left off
                    </p>
                    <button className="green-btn sm:py-4 md:py-4 py-3 px-10 rounded-full text-blue-800 hover:translate-z-3 hover:scale-x-110 hover:scale-y-110 transition-all duration-200">
                        <a href="https://open.spotify.com/playlist/52gtDapY50kKkLEnnnvYgz?si=3a37138c5fc746f0" target="_blank" rel="noreferrer">
                            OPEN WEB PLAYER
                        </a>
                    </button>
                </div>
            </div>
        </main>
    );
};

export default Home;

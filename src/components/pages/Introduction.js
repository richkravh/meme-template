import { useState } from "react";

export default function Introduction () {
    const [togEvil, setTogEvil] = useState(false);

    const handleEvil = () => {
        setTogEvil(!togEvil);
    }

    return (
        <section className={`grid grid-cols-1 relative`}>
            <div id="hero" className={`p-5`}>
                <div className={`bg-secondred p-2 azeban-hero relative`}>
                    <img src="/azeban/azeban-ori.jfif" className={`m-auto azeban-hero ${togEvil ? (`invert`) : (null)}`} />
                    <button onClick={() => handleEvil()} className={`absolute w-full z-10 bottom-1 text-2xl bg-secondred pb-2`}>
                        {togEvil ? (`Cute Mode`) : (`Evil Mode`)}
                    </button>
                </div>
            </div>
            <div id="hero-introduction" className={`azeban-text p-2 bg-secondred mx-2 relative`}>
                <div className={`azeban-text bg-primred py-10 px-5 text-white`}>
                    <h1 className={`text-4xl tracking-widest`}>Meet <span>AZEBAN</span></h1>
                    <p className={`text-2xl tracking-widest`}>{`He's adorable but vicious`}</p>
                    <p className={`text-xl tracking-widest`}>{`He's mischievous`}</p>
                    <p className={`text-2xl tracking-widest`}>{`His cuteness kills people `}</p>
                </div>
            </div>
        </section>
    )
}
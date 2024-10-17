import { useState } from "react";
import { useSpring, animated } from "react-spring";

export default function TextScroller ({ text }) {
    const [key, setKey] = useState(1);

    const scrolling = useSpring({
        from: { transform: "translate(105%, 0)" },
        to : { transform: "translate(-89%, 0)" },
        config: { duration: 2500 },
        reset: true,
        
        onRest: () => {
            setKey(key + 1);
        }
    });

    return (
        <div key={key}>
            <animated.div style={scrolling} className={`text-2xl font-black text-white tracking-[0.6rem]`}>
                {text}
            </animated.div>
        </div>
    )
}
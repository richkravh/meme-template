import TextScroller from "../TextScroller";
import Introduction from "./Introduction";

export default function Home () {
    return (
        <div>
            <div className={`py-2 border-y-2 border-secondred bg-primred mt-5 relative`}>
            <img src="/azeban/azeban-only-caught.png" className={`absolute z-10 w-[25%] -right-[30px] -top-[25px]`} />
                <TextScroller text={"AZEBAN ON SOLANA"} />
            </div>
            <Introduction />
            {/* Moving Text */}
            <div className={`py-2 border-y-2 border-secondred bg-primred mt-5 relative`}>
            <img src="/azeban/azeban-only-caught.png" className={`absolute z-10 w-[25%] -right-[30px] -top-[25px]`} />
                <TextScroller text={"AZEBAN ON SOLANA"} />
            </div>
        </div>
    )
}
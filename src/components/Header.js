import { projectlinks } from "./constants";

export default function Header () {
    return (
        <section className={`flex justify-between bg-primred p-5`}>
            <div id="project-logo my-auto">
                <a className={`text-2xl font-bold uppercase text-white`}>AZEBAN</a>
            </div>
            <div id="project-links" className={`flex space-x-5 my-auto`}>
                {projectlinks?.map((links, i) => {
                    return (
                        <a key={i} className={`my-auto`}>
                            {links.logo}
                        </a>
                    )
                })}
            </div>
        </section>
    )
}
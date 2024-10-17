

const linkpresets = {
    dexs: "",
    dext: "",
    xcom: "",
    telegram: "",
    pump: "",
}

export const projectlinks = [
    {
        title: "Dexscreener",
        href: `https://dexscreener.com/${linkpresets.dexs}`,
        logo: <img src="/dexscreener.png" width={25}/>
    },
    {
        title: "Dextools",
        href: `https://dextools.io/${linkpresets?.dext}`,
        logo: <img src="/dextools.png" width={25} />
    },
    {
        title: "X",
        href: `https://x.com/${linkpresets?.xcom}`,
        logo: <img src="/xlogo.png" width={25} />
    },
    {
        title: "Telegram",
        href: `https://t.me/${linkpresets?.telegram}`,
        logo: <img src="/telegram.png" width={25} />
    }
]
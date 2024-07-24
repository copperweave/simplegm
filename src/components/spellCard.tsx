import PathfinderAction from "./pathfinderAction";

interface SpellCardProps {
    bannerColor: string;
}

export default function SpellCard(props: SpellCardProps){ 
    return <div className="spell-card">
        <h1 className={ `${props.bannerColor} card-header flex flex-row text-2xl text-white p-1 
            mt-1 border-y-2 border-black text-outline`}>
            <span className="title-section flex-grow">
                Spellcard!!
            </span>
            <PathfinderAction className="flex-shrink-0" />
        </h1>
        <p>
            This is sample card text.
        </p>
    </div>
}
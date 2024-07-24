import PathfinderAction from "./pathfinderAction";
import PathfinderTag from "./pathfinderTag";

interface SpellCardProps {
    bannerColor: string;
    title: string;
    text: string;
    actions?: string;
    tags?: string[];
    usage?: {[key: string]: string};
}

export default function SpellCard(props: SpellCardProps){ 
    return <div className="spell-card">
        <h1 className={ `card-header flex flex-row text-2xl text-white p-1 
            mt-1 border-y-2 border-black text-outline ${props.bannerColor}`}>
            <span className="title-section flex-grow">
                {props.title}
            </span>
            <PathfinderAction className="flex-shrink-0" />
        </h1>
        <div className="flex p-1 flex-row flex-wrap gap-px">
            {props.tags?.map(tag => (
                <PathfinderTag key={tag}>{tag}</PathfinderTag>
            ))}
        </div>
        <p className="text-xs leading-normal p-1">
            {props.text}
        </p>
    </div>
}
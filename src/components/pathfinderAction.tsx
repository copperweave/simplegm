import reactStringReplace from "react-string-replace";

interface pathfinderActionProps { 
    className: string;
    children: string;
}

export default function(props: pathfinderActionProps): JSX.Element{    
    return <span className={props.className}>
        {reactStringReplace(props.children, /(\[.*?\])/g, (match, i) => (
            <span key={i} className="font-pathfinder-icons">{match}</span>
        ))}
    </span>
}
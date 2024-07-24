interface pathfinderActionProps { 
    className: string; 
}

export default function(props: pathfinderActionProps): JSX.Element{
    return <span className={props.className + " font-pathfinder-icons"}>
        [one-action]
    </span>
}
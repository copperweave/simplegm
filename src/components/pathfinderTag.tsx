interface TagProps {
    color?: string;
    children: string;
}

export default function(props: TagProps){
    return <span className="bg-red-900 text-xs text-white border-2 px-2 border-black">
        {props.children}
    </span>
}
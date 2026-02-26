
export default function FolderView(props) {
    const nodeList = props.nodeList;
    console.log('FolderView props:', props)
    return <>
        <RenderTree {...nodeList} />
    </>
}

function RenderTree({nodeName, childNodes}) {
    if(childNodes.length > 0) {
        return <details open>
            <summary>{nodeName}</summary>
            {childNodes.map((child) => (
                <RenderTree key={child.nodeName} {...child} />
            ))}
        </details>
    } else {
        return <div>{nodeName}</div>
    }
}
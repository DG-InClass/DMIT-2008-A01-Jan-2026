import projectFiles from '../projectFiles.json';

export default function FolderView(props) {
    return <>
        <RenderTree {...projectFiles} />
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
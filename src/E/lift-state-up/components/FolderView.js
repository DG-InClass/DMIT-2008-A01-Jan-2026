import projectFiles from '../projectFiles.json';
import { useState } from 'react';

export default function FolderView(props) {
    const {nodeList, setNodeList} = useState(projectFiles);
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
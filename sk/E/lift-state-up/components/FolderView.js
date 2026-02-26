import projectFiles from '../projectFiles.json';
import { useState } from 'react';

export default function FolderView(props) {
    const [activeNode, setActiveNode] = useState('');
    const [nodes, setNodes] = useState(projectFiles);

    const handleClick = (evt) => {
        setActiveNode(evt.target.innerText.trim());
    }

    return <>
        <RenderTree onClick={handleClick} active={activeNode} {...nodes} />
    </>
}

function RenderTree({active, onClick, nodeName, childNodes}) {
    const isActive = active === nodeName? 'active': '';

    if(childNodes.length > 0) {
        return <details open>
            <summary className={isActive} onClick={onClick}>{nodeName}</summary>
            {childNodes.map((child) => (
                <RenderTree key={child.nodeName} active={active} onClick={onClick} {...child} />
            ))}
        </details>
    } else {
        return <div className={isActive} onClick={onClick}>{nodeName}</div>
    }
}
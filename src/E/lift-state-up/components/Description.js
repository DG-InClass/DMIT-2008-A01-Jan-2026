import projectFiles from '../projectFiles.json';
// const {description} = projectFiles;
import { useState } from 'react';

export default function Description(props) {
    const {description, setDescription} = useState(projectFiles.description);
    return <section>
        {description}
    </section>
}

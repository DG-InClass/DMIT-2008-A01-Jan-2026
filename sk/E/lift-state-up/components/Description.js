import projectFiles from '../projectFiles.json';
const {description} = projectFiles;
export default function Description(props) {
    return <section>
        {description}
    </section>
}

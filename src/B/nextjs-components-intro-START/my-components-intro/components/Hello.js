import NewConcept from './NewConcept';
import HireAWebDev from './HireAWebDev';

export default function Hello() {
    const bestPractice = 'Do my homework and have fun with it!';
    return <>
        <h1>Hello React Components!</h1>
        <p>I am learning to create React Components. They often use JSX for the "markup". I am learning to:</p>
        <HireAWebDev textColor="blue">
            
            <ul>
                <NewConcept concept='Scaffold new NextJS/React web projects' />
                <NewConcept concept='Create React Components' />
                <NewConcept concept={bestPractice} />
            </ul>
        </HireAWebDev>
    </>
}
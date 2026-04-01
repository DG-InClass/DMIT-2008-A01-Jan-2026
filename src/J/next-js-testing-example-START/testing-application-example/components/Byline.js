// ~/components/Byline.js

export default function Byline({author, githubUsername}) {
    const href = `https://github.com/${githubUsername}`;
    return <div>
        <span>by {author}</span>
        {
            githubUsername &&
            <a href={href} target="_blank">GitHub Profile</a>
        }
    </div>
}

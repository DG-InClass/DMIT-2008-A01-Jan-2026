// ~/components/SimpsonsCharacters.js
const SIMPSON_CHARACTERS = [
	"Homer Simpson",
	"Bart Simpson",
	"Marge Simpson",
	"Mr. Burns",
	"Lisa Simpson",
	"Apu Nahasapeemapetilon",
	"Sideshow Bob",
	"Milhouse Van Houten",
	"Ned Flanders",
]

export default function SimpsonsCharacters() {
    return <ul>
        <li>
            There are {SIMPSON_CHARACTERS.length} main characters.
        </li>
        {
            SIMPSON_CHARACTERS.map((characterName, index) => <li key={index} id={'char-' + (index + 1)} data-key={index}>
                {characterName}
            </li>)
        }
    </ul>
}

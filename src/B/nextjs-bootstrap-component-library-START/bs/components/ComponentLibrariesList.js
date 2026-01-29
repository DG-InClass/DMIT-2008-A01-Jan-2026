// ~/components/ComponentLibrariesList.js
import { ListGroup } from "react-bootstrap";

const UI_LIBRARY_LIST = [
	{
		name: "MUI",
		url: "https://mui.com/"
	},
	{
		name: "React Bootstrap (the one we're looking at)",
		url: "https://react-bootstrap.github.io/"
	},
	{
		name: "Ant Design",
		url: "https://ant.design/docs/react/introduce"
	},
	{
		name: "Semantic UI",
		url: "https://react.semantic-ui.com/"
	}
]

export default function ComponentLibrariesList() {
    return <ListGroup>
        {
            UI_LIBRARY_LIST.map((uiLibrary, index) =>
                <ListGroup.Item key={index}>
                    <a href={uiLibrary.url} target="_blank">{uiLibrary.name}</a>
                </ListGroup.Item>
            )
        }
    </ListGroup>
}
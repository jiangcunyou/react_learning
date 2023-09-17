import ConceptsItem from "./ConceptsItem";

const Concepts = (props) => {
    return (
        <ul id="concepts">
            <ConceptsItem
                concept={props.items[0]}/>
            <ConceptsItem
                concept={props.items[1]}/>
            <ConceptsItem
                concept={props.items[2]}/>
        </ul>
    );
}

export default Concepts;
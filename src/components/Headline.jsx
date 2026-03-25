import LikeCounter from "./LikeCounter"


function Headline(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <LikeCounter />
        </div>
    )
}


export default Headline
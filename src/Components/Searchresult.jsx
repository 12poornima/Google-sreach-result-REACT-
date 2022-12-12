import SearchTitle from "./SearchTitle"
import "./Google.css"
import Serachparagraph from "./Serachparagraph"
import SearchLink from "./SearchLink"

function Searchresult(props) {
    return (
        <div className="google-contanier">
            <div className="card" >
                <SearchLink />
                <SearchTitle myTitle={props.myTitle} />
                <Serachparagraph />
            </div>
        </div>
    )
}

export default Searchresult
import SearchTitle from "./SearchTitle"
import "./Google.css"
import Serachparagraph from "./Serachparagraph"
import SearchLink from "./SearchLink"

function Searchresult(props) {
    return (
        <div className="google-contanier">
            <div className="card" >
                <SearchLink link={props.link} />
                <SearchTitle myTitle={props.myTitle} />
                <Serachparagraph para={props.para} />

            </div>
        </div>
    )
}

export default Searchresult
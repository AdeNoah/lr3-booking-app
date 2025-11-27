import NavBar from "../components/NavBar"
import Header from "../components/Header"

const List = () => {

    return(
        <>
            <NavBar/>
            <Header type="list"/>
            <div className="list-container">
                <div className="list-wrapper">
                    <div className="list-search">
                        <h2 className="ls-title"></h2>
                    </div>
                    <div className="list-results"></div>
                </div>
            </div>
        </>
    )
}

export default List
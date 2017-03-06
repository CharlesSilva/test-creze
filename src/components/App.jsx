import React,{Component} from "react"
import PageHeader from "./PageHeader"
import RootMenu from "./RootMenu"
import SubMenu from "./SubMenu"
import Pages from "./Pages"
import TotalCounter from "./TotalCounter"


class App extends Component{


    render(){
        return(
        <div>
            <PageHeader src="../static/logo.svg" user="Sinuhe" />
            <div className="container">
                <div className="row">
                    <RootMenu />
                </div>
                <div className="row subMenuRow">
                    <SubMenu />
                </div>
                <div className="row paginationRow">
                    <Pages activePage="1"/>
                </div>
                <div className="row conterRow">
                    <TotalCounter totalDeApplicaciones="10"/>
                </div>
            </div>
        </div>
        );
    }
}
//TODO : add counter
//TODO : add reportGrid
export default App
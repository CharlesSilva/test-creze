import React,{Component} from "react"
import PageHeader from "./PageHeader"
import RootMenu from "./RootMenu"


class App extends Component{


    render(){
        return(
        <div>
            <PageHeader src="../static/logo.svg" user="Sinuhe" />
            <div className="container">
                <div className="row">
                    <RootMenu />
                </div>
            </div>
        </div>
        );
    }
}

//TODO : add sub menu element
//TODO : add reportGrid
export default App
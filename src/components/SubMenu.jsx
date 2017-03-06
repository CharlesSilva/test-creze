import React,{Component} from "react"
import SubMenuItem from "./SubMenuItem"
import SubMenuTitle from "./SubMenuTitle"
import "../css/App.css"
//<h3 className="subMenuTitle">SOLICITUDES Y SCORE</h3>
class SubMenu extends Component{

    render(){
        return(
            <div id="subMenuDiv" className="center-block ">
                <div className="container">
                    <SubMenuTitle subMenuTitle="SOLICITUDES Y SCORE"  formPlaceHolder="Buscar Aplicación"/>
                </div>
                <div id="subMenuLabelsDiv">
                    <SubMenuItem id="id1" itemText="Todas" active="true"/>
                    <SubMenuItem id="id2" itemText="Ventas pequeñas" />
                    <SubMenuItem id="id3" itemText="Aplicaciones" />
                    <SubMenuItem id="id3" itemText="Verificados" />
                    <SubMenuItem id="id3" itemText="Aprobados" />
                    <SubMenuItem id="id3" itemText="Solicitados" />
                    <SubMenuItem id="id3" itemText="En proceso" />
                    <SubMenuItem id="id3" itemText="Descartados" />
                    <SubMenuItem id="id3" itemText="Lorem ipsum" />
                </div>
            </div>
        );
    }

}

export default SubMenu
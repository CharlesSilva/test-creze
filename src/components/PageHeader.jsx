import React,{Component} from "react"
import Logo from "./Logo"
import {Navbar, NavDropdown, MenuItem, Nav} from "react-bootstrap"
import "../css/App.css"

class PageHeader extends Component{

    setSaludo(user){
        const saludo = "Bienvenido " + user;
        this.setState({saludo});
    }

    componentWillMount(){
        this.setSaludo(this.props.user);
    }

    goToRepo(){
        const win = window.open("https://github.com/CharlesSilva/test-creze", '_blank');
        win.focus();
    }

    render(){
        return(
            <Navbar className="PageHeader">
                <Navbar.Header>
                    <Navbar.Brand>
                        <Logo/>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight>
                    <NavDropdown title={this.state.saludo} id="UserMenu" >
                        <MenuItem>
                            <span>Configuracion</span>
                        </MenuItem>
                        <MenuItem>
                            <span>Cerrar session</span>
                        </MenuItem>
                        <MenuItem divider />
                        <MenuItem onClick={() => this.goToRepo()}>
                            <span>Repositorio</span>
                        </MenuItem>
                    </NavDropdown>
                </Nav>
            </Navbar>
        );
    }
}
export default PageHeader
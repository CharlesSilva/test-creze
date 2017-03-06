import React,{Component} from "react"
import {FormGroup , FormControl, Form, Col} from "react-bootstrap"
import "../css/App.css"

class SubMenuTitle extends Component{
    constructor(props){
        super(props);
        this.state = {
            subMenuTitle : this.props.subMenuTitle,
            formPlaceHolder : this.props.formPlaceHolder
        }
    }

    render(){
        return(
            <div className="row SubMenuRowTitle">
                <Form >
                    <FormGroup controlId="formBasicText">
                        <Col  lg={10}  md={10} sm={10}>
                            <h3 className="subMenuTitle">{this.state.subMenuTitle}</h3>
                        </Col>
                        <Col lg={2} md={2} sm={2} >
                            <FormControl
                                type="text"
                                value=""
                                placeholder={this.state.formPlaceHolder}
                            />
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default SubMenuTitle
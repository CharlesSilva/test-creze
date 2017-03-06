import React,{Component} from "react"
import Report from "./Report"

class ReportGrid extends Component{
/*
    numDeApli : this.props.numDeApli,
    fecha : this.props.fecha,
    personaFis : this.props.personaFis,
    Monto : this.props.Monto,
    from : this.props.from,
    stat : this.props.stat,
    score : this.props.stat
    */
    render(){
        return(
            <div className="center-block ReportGrid container">
                <Report
                    numDeApli="6666" fecha="02/04/2017"
                    personaFis="Carlos Silva" Monto="$100,000"
                    from="DF" stat="Aplicacion Completa" score="100"
                />
                <Report
                    numDeApli="9999" fecha="02/04/2017"
                    personaFis="Carlos Silva" Monto="$100,000"
                    from="DF" stat="Aplicacion Completa" score="100"
                />
                <Report
                    numDeApli="1111" fecha="02/04/2017"
                    personaFis="Carlos Silva" Monto="$100,000"
                    from="DF" stat="Aplicacion Completa" score="100"
                />
                <Report
                    numDeApli="5555" fecha="02/04/2017"
                    personaFis="Carlos Silva" Monto="$100,000"
                    from="DF" stat="Aplicacion Completa" score="100"
                />
                <Report
                    numDeApli="8888" fecha="02/04/2017"
                    personaFis="Carlos Silva" Monto="$100,000"
                    from="DF" stat="Aplicacion Completa" score="100"
                />
            </div>
        );
    }
}

export default ReportGrid
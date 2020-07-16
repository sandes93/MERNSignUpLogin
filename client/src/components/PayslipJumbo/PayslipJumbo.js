import React, { Component } from "react";

class PayslipJumbo extends Component {

    render() {
        return (
                <div className="d-flex flex-row-reverse mt-5 mr-5">
                    <div className='col-xs-12 col-sm-12 col-md-9 jumbotron jumbotron-fluid cardBackground'>
                        <div className='col-sm-8 mx-auto'>
                            <h1 className='text-center'>Payslips</h1>
                        </div>
                        <table className='table col-md-6 mx-auto'>
                            <tbody>
                                <tr>
                                    <td>Currently no payslips</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
        )
    }
}

export default PayslipJumbo;
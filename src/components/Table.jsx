import "../css/Table.css"
import React, {Component} from 'react'

export default function Table(){
        return (
            <>
                <div className="main">
                    <div className="tablename">
                        <div className="head">
                            Search Result
                        </div>
                        <div className="pageselect">
                        <select className="options" aria-label="Default select example">
                            <option selected>Select Partner</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        </div>
                        <div>
                            <i class="bi bi-file-earmark-bar-graph"></i>
                        </div>

                    </div>

                    <table className="maintable" style={{border:"1px solid grey"}}>
                        <tr className="tablehead" style={{border:"1px solid grey"}}>
                            <th style={{border:"1px solid grey"}}>Sr. No.</th>
                            <th style={{border:"1px solid grey"}}>Partner Name</th>
                            <th style={{border:"1px solid grey"}}>Lead ID</th>
                            <th style={{border:"1px solid grey"}}>Po.No./Pr.No./App.No.</th>
                            <th style={{border:"1px solid grey"}}>Issuance Date</th>
                            <th style={{border:"1px solid grey"}}>Doc. Type</th>
                            <th style={{border:"1px solid grey"}}>Doc. Name</th>
                            <th style={{border:"1px solid grey"}}>Options</th>
                        </tr>

                        <tr style={{border:"1px solid grey"}}>
                            <td style={{border:"1px solid grey"}}>qq</td>
                            <td style={{border:"1px solid grey"}}>qq</td>
                            <td style={{border:"1px solid grey"}}>qq</td>
                            <td style={{border:"1px solid grey"}}>qq</td>
                            <td style={{border:"1px solid grey"}}>qq</td>
                            <td style={{border:"1px solid grey"}}>qq</td>
                            <td style={{border:"1px solid grey"}}>qq</td>
                        </tr>
                    </table>

                    <div>

                    </div>
                </div>

            </>
        )
}
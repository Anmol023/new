import Collapse from "react-bootstrap/Collapse"
import Button from "react-bootstrap/Button"
import React, { useState } from 'react';
import Table from "./Table";

export default function Details (){
        const [open, setOpen] = useState(false)
        const [partner, setPartner] = useState('')
        const [dateStart, setDateStart] = useState('')
        const [dateEnd, setDateEnd] = useState('')
        const [field, setField] = useState('')
        const [fieldValue, setFieldValue] = useState('')
        const result = [{"partnerName":"max", "leadId":"1234","proposalNo":"0001","issuanceDate":"12-05-2020","docType":"BI","docname":"sdsad","options":""},
        {"partnerName":"balic", "leadId":"2345","proposalNo":"01200","issuanceDate":"","docType":"kyc","docname":"dsd","options":""},
        {"partnerName":"max", "leadId":"1234","proposalNo":"0001","issuanceDate":"12-05-2020","docType":"Prop","docname":"dgfg","options":""},
        {"partnerName":"max", "leadId":"3456","proposalNo":"0101","issuanceDate":"11-01-2019","docType":"Application","docname":"bgbf","options":""}]
    
    const handleSubmit = (event) =>{
        event.preventDefault()
        const query = {
            "partner": partner,
            "dateStart": dateStart,
            "dateEnd": dateEnd,
            "field": field,
            "fieldvalue": fieldValue
        }
        console.log(query)
    }
        return (
            <>
            <form onSubmit={handleSubmit}>
                <div className="row" style={{ padding: "10px 0px 10px 0px", width: "100%", margin: "0px", border: "1px solid grey", borderRadius: "8px",backgroundColor:"#EBEBEB" }}>
                    <div className="col-6">
                        <select className="form-select" name = "partner" onChange={e =>setPartner(e.target.value)}>
                            <option selected>Select Partner</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="col-6">
                        <select className="form-select" aria-label="Default select example" disabled>
                            <option selected>Select Channel</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div>
                        <div className="row">
                            <div>
                                Date Range
                            </div>
                            <div className="col-3">
                                <div className="input-group input-group-sm mb-3">
                                    <input type="date" className="form-control" name="dateStart" onChange={e =>setDateStart(e.target.value)}/>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="input-group input-group-sm mb-3">
                                    <input type="date" className="form-control" name="dateEnd" onChange={e =>setDateEnd(e.target.value)}/>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <Button
                                    style={{backgroundColor: "#861f41", border: "1px solid #861f41"}}
                                    onClick={() => setOpen(!open)}
                                    aria-expanded={open}
                                    aria-controls="collapse"
                                    >
                                    Advance Search>>
                                </Button>
                                    <Collapse in={open}>
                                    <div id="collapse"
                                        style={{
                                        width: '100%',
                                        textAlign: 'justify'
                                        }}
                                    ><div>
                                    <div className="row" style={{ padding: "10px 0px 10px 0px", width: "100%", margin: "0px", border: "1px solid grey", borderRadius: "8px", backgroundColor: "#EBEBEB" }}>
                                        <div className="col-6">
                                            <div className="row">
                                                <div className="col-6" style={{ width: "200px" }}>
                                                    <div className="form-check" onChange={e =>setField(e.target.value)}>
                                                        <input className="form-check-input" type="radio" name="field" id="flexRadioDefault1" value="leadId" />
                                                        <label className="form-check-label" for="flexRadioDefault1">Lead ID</label>
                                                    </div>
                                                    <div className="form-check" onChange={e =>setField(e.target.value)}>
                                                        <input className="form-check-input" type="radio" name="field" id="flexRadioDefault1" value="applicationNumber" />
                                                        <label className="form-check-label" for="flexRadioDefault1">
                                                            Application No.
                                                        </label>
                                                    </div>
                                                    <div className="form-check" onChange={e =>setField(e.target.value)}>
                                                        <input className="form-check-input" type="radio" name="field" id="flexRadioDefault1" value="proposalNumber" />
                                                        <label className="form-check-label" for="flexRadioDefault1">
                                                            Proposal No.
                                                        </label>
                                                    </div>
                                                    <div className="form-check" onChange={e =>setField(e.target.value)}>
                                                        <input className="form-check-input" type="radio" name="field" id="flexRadioDefault1" value="policyNumber"/>
                                                        <label className="form-check-label" for="flexRadioDefault1">
                                                            Policy No.
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-6" style={{ marginTop: "40px", marginRight: "0px" }}>
                                                    <div className="input-group input-group-sm mb-3">
                                                        <input type="text" className="form-control" name="fieldValue" onChange={e =>setFieldValue(e.target.value)}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-6">
                                        <div className="row">
                                            <div className="col-4">
                                            </div>
                                            <div className="col-8">
                                                <select className="form-select select1-size" onChange={e =>setPartner(e.target.value)}>
                                                    <option selected>Select Partner</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                               </div>
                                    </Collapse>
                                </div>
                            </div>
                        </div>
                    </div>
                        
                    <div style={{ textAlign: "end", marginTop: "10px" }}>
                        <button type="submit" class="btn btn-primary" style={{ backgroundColor: "#861f41", border: "1px solid #861f41", width: "100px" }}>Search</button>
                    </div>
            </div>
        </form>
        <Table data={result}/>
        </>
        )
    
}
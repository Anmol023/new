import '../css/Sidemenu.css'
import logo from "../images/AxisBankLogo.png"
import "bootstrap-icons/font/bootstrap-icons.css"
import React, { Component } from 'react';

export default function Sidemenu() {
    return (
        <>
            <div className="sidemenu">
                <div className="logo">
                    <img src={logo} style={{ height: "60px", width: "100%" }}></img>
                </div>

                <div className="menu-item">
                    <div className="home">
                        <div >
                            <i className="bi bi-house-door" style={{ fontFamily: "calibri", fontStyle: "normal" }}></i>
                        </div>
                        <div >
                            <p style={{ paddingLeft: "10px", marginBottom: "0" }}>Home</p>
                        </div>
                    </div>
                </div>

                <div className="menu-item">
                    <div className="home">
                        <div >
                            <i className="bi bi-file-earmark-medical" style={{ fontFamily: "calibri", fontStyle: "normal" }}></i>
                        </div>
                        <div >
                            <p style={{ paddingLeft: "10px", marginBottom: "0" }}>Documents</p>
                        </div>
                    </div>
                </div>

                <div className="menu-item">
                    <div className="home">
                        <div >
                            <i className="bi bi-easel" style={{ fontFamily: "calibri", fontStyle: "normal" }}></i>
                        </div>
                        <div >
                            <p style={{ paddingLeft: "10px", marginBottom: "0" }}>Reports</p>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}
import { Component } from "react"
import "../css/Navbar.css"
import "../css/AdvanceSearch.css"
import React from 'react';


export default function Navbar(){
    return (
        <>
            <div className="navbar">
                <div style={{ display: "flex", width: "100%" }}>
                    <div className="col-11" style={{ textAlign: "center" }}>
                        <p>Document Repository</p>
                    </div>
                    <div className="col-1">
                        <div>
                            <i class="bi bi-box-arrow-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
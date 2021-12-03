import React, { Component } from 'react';


export default function () {


    return (
        <>

            <div class="input-group" style={{marginBottom:"0px"}}>
                <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button class="btn btn-outline-secondary" type="button" id="button-addon2" style={{ backgroundColor: "#861f41", color: "white" }}>Search</button>
            </div>
            <p style={{margin:"0",padding:"0",textAlignLast:"end",color:"#861f41",textDecoration:"underline",cursor:"pointer"}}>
                <a>Advance Filters &gt; </a>
            </p>


        </>

    )
}
import React, {Component} from "react";

import "./Loading.css"

export default class Loading extends Component{
    render(){
        return(
            <div className="loading-Component">
            <div className="load-wrapp">
                <div className="load-3">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <h2>추첨하는 중입니다.</h2>
                <h2>잠시만 기다려주세요. </h2>
            </div>
            </div>
        )
    }
}
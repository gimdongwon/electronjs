import React, { Component } from "react";
import NeowizLog from "./img/neowiz-logo.svg";
import rotateImg from "./img/06.png";
import congraturation from "./img/group-25.png";
import backCard from "./img/card-2.png";
import seo from "./img/annnouncement-image-card-1.svg";
import yoo from "./img/annnouncement-image-card-2.svg";
import been from "./img/annnouncement-image-card-3.svg";

export default class ResultPage extends Component {
  render() {
    return (
      <div className="body">
        <div className="congraturation-app">
          <div className="rotate-img">
            <img src={rotateImg} alt="" />
          </div>
          <img
            src={NeowizLog}
            className="main_image-neowiz"
            alt="log"
            onClick={this.props.handleChangeView}
          />
          <div className="congraturation-img">
            <img
              src={congraturation}
              className="result_image-congratulaions"
              alt=""
            />
          </div>
          <div className="card-img">
            <div className="image-sparkle" />
            <div className="first-card cards">
              <img
                src={backCard}
                className="annnouncement_image-card-1 rotate-firstName front card"
                alt=""
              />
              <div className="result-warp">
                <div className="result-img">
                  <img src={seo} className="annoucement_image-card-3" alt="" />
                </div>
                <div className="result-text-1">
                  <p className="result-text">
                    {this.props.resultName.slice(0, 1)}
                  </p>
                </div>
              </div>
            </div>
            <div className="second-card cards">
              <img
                src={backCard}
                className="annnouncement_image-card-2 rotate front card"
                alt=""
              />
              <div className="result-warp">
                <div className="result-img">
                  <img src={yoo} className="annoucement_image-card-3" alt="" />
                </div>
                <div className="result-text-2">
                  <p className="result-text">
                    {this.props.resultName.slice(1, 2)}
                  </p>
                </div>
              </div>
            </div>
            <div className="third-card cards">
              <img
                src={backCard}
                className="annnouncement_image-card-3 rotate front card"
                alt=""
              />
              <div className="result-warp">
                <div className="result-img">
                  <img src={been} className="annoucement_image-card-3" alt="" />
                </div>
                <div className="result-text-3">
                  <p className="result-text">
                    {this.props.resultName.slice(2, 3)}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="resultId-warp">
            <div className="resultId">
              <p>{this.props.resultId}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

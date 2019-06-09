import React, { Component } from "react";
import { Helmet } from "react-helmet";
import logo from "./img/group-11.svg";

export default class MainPage extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title> NeoPick </title>
        </Helmet>
        <div className="copyright">
          <p>
            <span className="red">만든 사람들</span>{" "}
            <span className="main-mader">
              김동원 김명진 박헌일 서유빈 한상우 김경환
            </span>{" "}
            <span className="red">도움주신 분</span>{" "}
            <span className="sub-mader">
              도중은 배태근 블록체인팀 블록체인 브레인스토밍 참여멤버들
            </span>
          </p>
        </div>
        <div className="left-side">
          <img src={logo} alt="" className="main_image-neowiz" />
          <div className="main-header">
            다음 달의 <b>발표자</b>는 <p>누구일까요?</p>
            <p className="main-sub-header">
              블록체인을 기반으로한 추첨 프로그램입니다.
            </p>
          </div>
        </div>
        <div className="right-side">
          <div
            className="Rectangle-keyboard"
            data-toggle="modal"
            data-target="#keyboard"
            id="modal-keyboard-btn"
          />
          <div
            className="Rectangle-upload"
            data-toggle="modal"
            data-target="#upload"
            id="modal-upload-btn"
          />
        </div>
      </div>
    );
  }
}

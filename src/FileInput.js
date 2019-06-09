import React, { Component } from "react";

import fileIcon from "./img/fileupload-image-upload.png";

import txtfileIcon from "./img/txtfile-icon.png";
import deleteIcon from "./img/icon.png";

export default class FileInput extends Component {
  render() {
    const {
      fileUpload,
      deleteFile,
      createPost,
      uploadItems,
      dropHandler,
      dragOverHandler
    } = this.props;
    return (
      <div
        className="modal fade"
        id="upload"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog modal-dialog-centered"
          role="document"
        >
          <div className="modal-content clearfix">
            {fileUpload === true ? (
              <div className="complete-msg">
                <div className="complete-msg_title">첨부완료!</div>
                <div className="complete-msg_content">
                  <div class="input-group mb-3 txtfile-content">
                    <input type="checkbox" className="txtfile-delete" />
                    <img src={txtfileIcon} alt="txtfile-icon" />
                    2019 4월 월간회의자 추첨리스트.txt(1kb)
                  </div>
                </div>
                <div className="complete-delete" onClick={deleteFile}>
                  <img src={deleteIcon} alt="deleteIcon" /> <p>삭제</p>
                </div>
                <div className="modal_lottery-btn-box">
                  <button className="modal_lottery-btn">
                    <p
                      className="modal_lottery-btn-title"
                      data-dismiss="modal"
                      onClick={() => createPost(uploadItems)}
                    >
                      추첨하기
                    </p>
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="modal-header1">
                  <h5 className="modal-header-title"> </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span className="closeButton" aria-hidden="true">
                      &times;
                    </span>
                  </button>
                </div>
                <div
                  id="drop_zone"
                  onDrop={dropHandler}
                  onDragOver={dragOverHandler}
                >
                  <div className="fileupload-component">
                    <img
                      src={fileIcon}
                      alt="upload-icon"
                      className="fileupload-icon"
                    />
                  </div>
                  <div className="fileupload-component-title">
                    <h2>마우스로 파일을 끌어오세요</h2>
                  </div>
                  <div className="fileupload-component-sub">
                    <p>
                      가능한 파일 형식 (<b>word, txt</b>)
                    </p>
                    <p>
                      파일 작성 시 이름(아이디)를 컴마로 구분해서 작성해주세요
                    </p>
                    <p className="red1">ex) 김네오(neowiz), 김블록(kimblock)</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}

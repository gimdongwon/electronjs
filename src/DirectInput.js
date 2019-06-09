import React, { Component } from 'react'

export default class DirectInpout extends Component {
    render() {
        const {
            handleIdChange,
            handleNameChange,
            handleSubmit,
            userName,
            userId,
            items,
            deleteItems,
            createPost,
        } = this.props
        return (
            <div
                className="modal fade"
                id="keyboard"
                role="dialog"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div
                    className="modal-dialog modal-dialog modal-dialog-centered"
                    role="document"
                >
                    <div className="modal-content clearfix">
                        <div className="modal-header-costom">
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <h5 className="modal-header-title">
                            직접입력 해볼까요
                        </h5>
                        <div className="modal_input-box">
                            <div className="modal_name-input">
                                <div type="text" className="modal_input-fake">
                                    이름
                                </div>
                            </div>
                            <div className="modal_id-input">
                                <div type="text" className="modal_input-fake">
                                    아이디
                                </div>
                            </div>
                            <div className="modal_id-name_submit-fake" />
                        </div>
                        <form
                            onSubmit={handleSubmit}
                            className="modal_input-box"
                        >
                            <div className="modal_name-input">
                                <input
                                    type="text"
                                    placeholder=" 추첨에 들어갈 이름입력"
                                    className="modal_input"
                                    onChange={handleNameChange}
                                    value={userName}
                                />
                            </div>
                            <div className="modal_id-input">
                                <input
                                    type="text"
                                    placeholder=" 추첨에 들어갈 아이디 입력"
                                    className="modal_input"
                                    onChange={handleIdChange}
                                    value={userId}
                                />
                            </div>
                            <button className="modal_id-name_submit">
                                입력
                            </button>
                        </form>
                        <div
                            className="modal_id-name-list-box"
                            data-spy="scroll"
                        >
                            <p>목록</p>
                            <div
                                className="modal_id-name-list"
                                scrollable="true"
                                data-spy="scroll"
                                id=""
                                cols="30"
                                rows="10"
                            >
                                {items.map(item => (
                                    <div className="modal_id-name-list-item">
                                        <div
                                            key={item.id}
                                            className="modal_id-name-list-item_text"
                                        >
                                            {item.name}{' '}
                                            <div className="modal_id-name-list-item_text_id">
                                                ({item.id})
                                            </div>
                                        </div>
                                        <button
                                            type="button"
                                            className="close"
                                            aria-label="Close"
                                        >
                                            <span
                                                aria-hidden="true"
                                                onClick={() =>
                                                    deleteItems(item)
                                                }
                                            >
                                                &times;
                                            </span>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="modal_lottery-btn-box">
                            <button
                                className="modal_lottery-btn"
                                data-dismiss="modal"
                                onClick={() => createPost(items)}
                            >
                                추첨하기
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

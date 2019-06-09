import React, { Component } from "react";

import "./App.css";

import postAPI from "./postAPI";

import Loading from "./Loading";
import ResultPage from "./ResultPage";
import MainPage from "./MainPage";
import DirectInpout from "./DirectInput";
import FileInput from "./FileInput";
export default class App extends Component {
  state = {
    userName: "",
    userId: "",
    items: [],
    list: [],
    resultId: null,
    resultName: null,
    loading: false,
    page: "home",
    fileUpload: false,
    uploadItems: null,
    recycleBin: []
  };

  handleNameChange = e => {
    this.setState({ userName: e.target.value });
  };

  handleIdChange = e => {
    this.setState({ userId: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.userName.length) {
      return;
    }
    const newItem = {
      name: this.state.userName,
      id: this.state.userId
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      userName: "",
      userId: "",
      list: state.list.concat(newItem.userName)
    }));
  };

  dragOverHandler = ev => {
    console.log("File in drop zone");
    ev.stopPropagation();
    ev.preventDefault();
  };

  dropHandler = ev => {
    ev.preventDefault();
    this.setState({
      fileUpload: true
    });
    let reader = new FileReader();
    let txtEntries = [];
    let self = this;
    reader.onload = async function(event) {
      let txtArray = event.target.result.split(",");
      for (let i = 0; i < txtArray.length; i++) {
        const entry = {
          name: txtArray[i].slice(0, 3),
          id: txtArray[i].slice(4, txtArray[i].length - 1)
        };
        if (entry.name.includes(`n`)) {
          alert(`${entry.name}` + "잘못된 입력입니다.");
          return;
        }
        txtEntries.push(entry);
      }
      self.setState({
        uploadItems: txtEntries
      });
      // self.createPost(txtEntries)
    };
    reader.readAsText(ev.dataTransfer.files[0], "UTF-8");
  };

  createPost = async newPost => {
    this.setState({
      loading: true
    });
    const newPosts = { entries: newPost };
    const req = await postAPI.post("/api/event", newPosts);
    this.fetchPosts(req.data.event_id);
  };

  fetchPosts = async id => {
    const res = await postAPI.get(`/api/result/${id}`);
    console.log(res);
    this.setState({
      loading: false,
      page: "win",
      resultName: res.data.result.name,
      resultId: res.data.result.id,
      items: [],
      fileUpload: false
    });
  };

  deleteItems = targetItems => {
    const id = this.state.items.indexOf(targetItems);
    this.state.items.splice(id, 1);
    this.setState({
      recycleBin: this.state.items.splice(id, 0)
    });
  };

  deleteFile = () => {
    this.setState({
      fileUpload: false
    });
  };

  handleChangeView = () => {
    this.setState({
      page: "home"
    });
  };
  render() {
    return this.state.loading === true ? (
      <Loading />
    ) : this.state.page !== "home" ? (
      <ResultPage
        resultName={this.state.resultName}
        handleChangeView={this.handleChangeView}
        resultId={this.state.resultId}
        page={this.state.page}
      />
    ) : (
      <>
        <MainPage />
        <DirectInpout
          handleSubmit={this.handleSubmit}
          handleNameChange={this.handleNameChange}
          handleIdChange={this.handleIdChange}
          userName={this.state.userName}
          userId={this.state.userId}
          items={this.state.items}
          deleteItems={this.deleteItems}
          createPost={this.createPost}
        />
        <FileInput
          fileUpload={this.state.fileUpload}
          deleteFile={this.deleteFile}
          createPost={this.createPost}
          uploadItems={this.state.uploadItems}
          dropHandler={this.dropHandler}
          dragOverHandler={this.dragOverHandler}
        />
      </>
    );
  }
}

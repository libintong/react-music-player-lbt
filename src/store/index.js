import React from 'react';
import { createStore } from "redux";
import reducer from "./reducer";

// 这里你在 reducer文件里导出什么这里就写什么
const store = new createStore(reducer);

export default store;


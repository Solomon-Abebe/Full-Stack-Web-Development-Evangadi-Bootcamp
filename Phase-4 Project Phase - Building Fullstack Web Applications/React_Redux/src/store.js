// import {createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import reducer from "./reducer";

const store=createSlice(reducer)
 
export default store;
import { combineReducers } from "redux";
// import bootCampSlice from "../slices/bootCampSlice";
import bootCampReducer from "./bootCampReducer";
import { studentsReducer } from "./studentsReducer";

// ============== redux ===============================
const rootReducer = combineReducers({
  bootCamps: bootCampReducer,
  students: studentsReducer,
});

// ====================== redux slice ===========================
// const rootReducer = combineReducers({
//   bootCamps: bootCampSlice.reducer,
//   students: studentsReducer,
// });

export default rootReducer;

import {createStore} from "redux";

import {reducers} from "./combine";

const store = createStore(reducers);

export {store}
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import weather from "./weather.json";

ReactDOM.render(<App weather={weather} />, document.getElementById("root"));
registerServiceWorker();

import React from "react";  
import Router from "react-router";  
import routes from "../shared/routes";

Router.run(routes, Router.HistoryLocation, (Handler, state) => {  
  React.render(<Handler coords = {{lat: 51.508742, lon: -0.120850}} />, document.getElementById('app'));
});
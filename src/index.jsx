import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./Header";

class App extends React.Component {
    render() {
        return(
<Header>

</Header>
        )
    }
}
 var root = document .getElementById("root");
 ReactDOM.createRoot(root).render(<App/>);
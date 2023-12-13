import { Component } from "react";
import MapComponent from "../ui/Map";

class Home extends Component {
    render () {
        return (
            <div className="container mx-auto">
                <MapComponent />
            </div>
        )
    }
}

export default Home;
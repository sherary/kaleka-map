import { MapContainer, TileLayer, Popup, Circle } from "react-leaflet";
import { useCoordinates } from '../lib/useCoordinate';
import ErrorMessage from "./Error";
import { API_URL } from "../helpers/constants";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
    const coordinates = useCoordinates(API_URL);

    const renderMap = (coordinates) => {
        return (
            <MapContainer center={coordinates[0]} zoom={4}>
                <TileLayer 
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {
                    coordinates.map((position, index) => {
                        return (
                            <Circle key={index} center={position} radius={90000} fillColor="#87CEFA" fillOpacity={0.2} weight={2}>
                                <Popup>
                                    <p className="text-red-500">Lihat Detail</p>
                                </Popup>
                            </Circle>
                        )
                    })
                }
            </MapContainer>
        )
        
    }

    const renderError = () => {
        return <ErrorMessage message="Nothing to display"/>
    }

    return (
        <>
            {
                coordinates ? renderMap(coordinates) : renderError()
            }
        </>
    );
}

export default MapComponent;
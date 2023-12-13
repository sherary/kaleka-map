import { useState, useEffect } from "react";

export const useCoordinates = (coordinate) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(coordinate);
                const result = await response.json();
                const fetchedCoordinate = result.data.map(items => {
                    return items.coordinates.reverse()
                })

                setData(fetchedCoordinate);
            } catch (err) {
                setError(err.message);
            }
        }

        fetchData();
    }, [coordinate]);

    if (!error) {
        return data
    }

    return error
}
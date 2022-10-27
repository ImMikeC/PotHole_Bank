import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Loading from "../../components/Loading"
import "../../styles/ListMod.css";

const List = () => {
    const [potholes, setPotholes] = useState(null);

    useEffect(() => {

        getPotholes(`${process.env.API_URL}api/coordinates`)

        return () => { }
    }, [])

    const getPotholes = (url, options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }) => {

        fetch(url, options)
            .then((response) => {
                console.log(response);
                return response.json();
            })
            .then((response) => {
                console.log(response);
                setPotholes(response);
            }).catch(e => {
                console.log(e);
            });
    }

    return (
        <div className="listrow row d-flex justify-content-center">
            <div className="listtable col-md-9 mt-5">
                <table className="table table-dark table-hover table-responsive text-center">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Latitude</th>
                            <th scope="col">Longitude</th>
                            <th scope="col">ImageURL</th>
                            <th scope="col">State</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!!potholes &&
                            potholes.length > 0 ?
                            potholes.map((pothole, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{index+1}</th>
                                        <td>{pothole.latitude}</td>
                                        <td>{pothole.longitude}</td>
                                        <td><img className="imgpreview" src={pothole.imageurl} width="120" height="62"/></td>
                                        <td>{pothole.state}</td>
                                        <td><FaEdit /></td>
                                        <td><FaTrashAlt /></td>        
                                    </tr>                                    
                                )
                            }) :
                            (
                                <tr><td colSpan="7"><Loading /></td></tr>
                            )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default List;
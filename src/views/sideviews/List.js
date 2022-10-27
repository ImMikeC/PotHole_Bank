import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Loading from "../../components/Loading"
import "../../styles/ListMod.css";
import { Button } from 'react-bootstrap';

const List = () => {
    const [potholes, setPotholes] = useState(null);

    /// comentarios
    const [gallery, setGallery] = useState(null)
    const [title, setTitle] = useState("");
    const [active, setActive] = useState(true);
    const [image, setImage] = useState(null);
    const [error, setError] = useState(null);
    const [filter, setFilter] = useState(null);

    useEffect(() => {
        getImagesGallery(filter);
    }, [])

    useEffect(() => {
        getImagesGallery(filter);
    }, [filter])
/// comentarios
const getImagesGallery = async (filter) => {
    try {

        let query = (filter === null ? "" : filter === true ? "?state='ingresado'" : "?state='reparado'") // validando si filtramos o no el resultado 

        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/galleries${query}`)
        const data = await response.json()

        setGallery(data);

    } catch (error) {
        console.log(error.message)
    }
}

/// comentarios
const handleChangeActive = async (id, status) => {
    console.log(status);
    try {

        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/coordinates/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                state: status
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        

    } catch (error) {
        console.log(error.message)
    }
}
/// comentarios


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
                                        <td><Button><FaEdit /></Button></td>
                                        <td>
                                            {/* <Button onClick={handleChangeActive}><FaTrashAlt /></Button> */}
                                            <input
            className="p-1 mt-3 btn btn-primary col-3"
            type="submit"
            value={<FaTrashAlt />}
            onClick={handleChangeActive}
          />
                                        </td>        
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
import React, { useEffect, useState } from 'react';
import Loading from "../../components/Loading"

const List = () => {
/*     const [potholes, setPotholes] = useState(null);

    useEffect(() => {

        getPotholes(URL_POTHOLES)

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
    } */

    return (
        <div className="listrow row d-flex justify-content-center">
{/*             <ol className="list-group list-group-numbered" >
                {!!potholes &&
                    potholes.length > 0 ?
                    potholes.map((pothole, index) => {
                        return (
                            <li className="list-group-item d-flex justify-content-between align-items-start ">
                                <div className="ms-3 me-auto">
                                    <div className="fw-bold">{latitude}{longitud}</div>
                                </div>
                                <div>
                                    <FaCamera />
                                </div>
                                <div>
                                    <FaTrashAlt />
                                </div>
                            </li>
                        )
                    }) :
                    (
                        <div className="col-md-12 text-center">
                            <Loading />
                        </div>
                    )}
            </ol> */}
            <div className="listtable col-md-9 mt-5">
                <table className="table table-dark table-hover">
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
                        <tr>
                            <th scope="row">1</th>
                            <td>-33.451</td>
                            <td>-70.64</td>
                            <td>http://foto1.jpg</td>
                            <td>Ingresado</td>
                            <td>Icon Edit</td>
                            <td>Icon Delete</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>-40.451</td>
                            <td>-90.64</td>
                            <td>http://foto2.jpg</td>
                            <td>Reparado</td>
                            <td>Icon Edit</td>
                            <td>Icon Delete</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>-20.451</td>
                            <td>-50.64</td>
                            <td>http://foto3.jpg</td>
                            <td>Revision</td>
                            <td>Icon Edit</td>
                            <td>Icon Delete</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default List;
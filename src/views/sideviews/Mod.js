import React, { useEffect, useState } from 'react';
import Loading from "../../components/Loading"

const Mod = () => {
    /*     const [users, setUsers] = useState(null);
    
        useEffect(() => {
    
            getUsers(URL_USERS)
    
            return () => { }
        }, [])
    
        const getUsers = (url, options = {
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
                    setUsers(response);
                }).catch(e => {
                    console.log(e);
                });
        } */

    return (
        /*             <ol className="list-group list-group-numbered" >
                {!!users &&
                    users.length > 0 ?
                    users.map((user, index) => {
                        return (
                            <li className="list-group-item d-flex justify-content-between align-items-start ">
                                <div className="ms-3 me-auto">
                                    <div className="fw-bold">{email}{state}</div>
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
            </ol> */
        < div className = "listrow row d-flex justify-content-center" >
            <div className="listtable col-md-9 mt-5">
                <table className="table table-dark table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">User Mail</th>
                            <th scope="col">Tipo de Cuenta</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>test1@mail.com</td>
                            <td>People</td>
                            <td>Icon Edit</td>
                            <td>Icon Delete</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>test2@mail.com</td>
                            <td>Muni</td>
                            <td>Icon Edit</td>
                            <td>Icon Delete</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>test3@mail.com</td>
                            <td>Admin</td>
                            <td>Icon Edit</td>
                            <td>Icon Delete</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default Mod;
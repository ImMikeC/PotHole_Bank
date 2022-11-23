import React, { useEffect, useState } from 'react';
import { FaEdit } from "react-icons/fa";
import { FcCancel } from "react-icons/fc";
import Loading from "../../components/Loading"
import "../../styles/ListMod.css";
import { deleteUser } from "../../helper/coordinates";

const Mod = () => {
    const [users, setUsers] = useState([]);

    const [filterRol, setFilterRol] = useState("All");

    const [state, setState] = useState();

    const filterUsers = users.filter((user) => {
        if (filterRol === "1") {
            return user.profile_id == 1
        } else if (filterRol === "2") {
            return user.profile_id == 2
        } else if (filterRol == "3") {
            return user.profile_id == 3
        } else {
            return user;
        }
    })

    const onFilterRol = (event) => {
        setFilterRol(event.target.value);
    };

    const changeRolName = (user) => {
        if (user.profile_id == 1) {
            return "Admin"
        } else if (user.profile_id == 2) {
            return "Municipality"
        } else if (user.profile_id == 3) {
            return "People"
        }
    };

    useEffect(() => {

        getUsers(`${process.env.API_URL}api/users`)
    }, [state])

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
    }

    const deleteUserId = async (id) => {
        const resultDelete = await deleteUser(id);
        setState(resultDelete);
    };

    return (
        <div className="modrow row d-flex justify-content-center">
            <div className="modtable col-md-9 my-5">
                <table className="table table-dark table-hover table-responsive text-center">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col" className='text-start'>Email</th>
                            <th scope="col" className='text-start'>
                                <div className="dropdown-center">
                                    <select name="Rol" onChange={onFilterRol}>
                                        <option value="All">Rol</option>
                                        <option value="1">Admin</option>
                                        <option value="2">Municipality</option>
                                        <option value="3">People</option>
                                    </select>
                                </div>
                            </th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!!filterUsers &&
                            filterUsers.length > 0 ?
                            filterUsers.map((user, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td className="text-start">{user.email}</td>
                                        <td className='text-start'>{changeRolName(user)}</td>
                                        <td><FaEdit /></td>
                                        <td><button onClick={() => deleteUserId(user.id)}>
                                            <FcCancel />
                                        </button>
                                        </td>
                                    </tr>
                                )
                            }) :
                            (
                                <tr><td colSpan="5" ><Loading /></td></tr>
                            )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Mod;
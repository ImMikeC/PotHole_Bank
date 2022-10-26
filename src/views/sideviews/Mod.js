import React from 'react';

const Mod = () => {
    return (
        <div className="listrow row d-flex justify-content-center">
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
        </div>
    )
}

export default Mod;
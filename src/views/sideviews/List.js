import React from 'react';

const List = () => {
    return (
        <div className="listrow row d-flex justify-content-center">
            <div className="listtable col-md-9 mt-5">
                <table class="table table-dark table-hover">
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
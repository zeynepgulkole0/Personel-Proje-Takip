import axios from "axios";
import { useState, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";

export default function List() {
    const { id } = useParams()
    const [data, setData] = useState([]);

    useLayoutEffect(() => {
        axios.get("http://127.0.0.1:8000/api/project/list/" + id)
            .then((res) => {
                setData(res.data[0].get_data)

            });
    }, []);

    return (
        <div className="container">
        <div className='mt-5 '>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">Çalışan İsmi</th>
                        <th scope="col">Çalışan Soyadı</th>
                        <th scope="col">Çalışan Rolü</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.employee_name}</td>
                                    <td>{item.employee_surname}</td>
                                    <td>{item.project_role}</td>
                                </tr>
                            )
                        })}
                </tbody>
            </table>
        </div>
        </div>
    )
}
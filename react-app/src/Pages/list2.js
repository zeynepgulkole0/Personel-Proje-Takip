

import axios from "axios";
import { useState, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";

export default function List2() {
    const { id } = useParams()
    const [data, setData] = useState([]);

    useLayoutEffect((e) => {
        axios.get("http://127.0.0.1:8000/api/employee/listnext/" + id)
            .then((res) => {
                setData(res.data[0].get_data_next)

console.log(res.data);
console.log(data);
            });
    }, []);

    return (
        <div className="container">
        <div className='mt-5 '>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">Proje Adı</th>
                        <th scope="col">Proje Türü</th>
                        <th scope="col">Başalangıç T.</th>
                        <th scope="col">Bitiş T.</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index) => {
                            return (
                                <tr >
                                    <td>{item.project_name}</td>
                                    <td>{item.project_type}</td>
                                    <td>{item.start_date}</td>
                                    <td>{item.finish_date}</td>
                                </tr>
                        )})}
                </tbody>
            </table>
        </div>
        </div>
    )
}
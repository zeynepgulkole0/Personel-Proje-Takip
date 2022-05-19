import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import Delete from "../components/Delete";


export default function Project() {
    const [getList, setGetList] = useState([]);
    const [isGetList, setIsGetList] = useState(true);
    const [project_name, setProject_name] = useState("");
    const [project_type, setProject_type] = useState("");
    const [start_date, setStart_date] = useState("");
    const [finish_date, setFinish_date] = useState("");


    const onClickSave = (e) => {
        e.preventDefault();
        axios.post("http://127.0.0.1:8000/api/project/add", { project_name, project_type, start_date, finish_date })
            .then(function (response) {
                setIsGetList(true)
                console.log("kaydedildi");
            });
        setProject_name("");
        setProject_type("");
        setStart_date("");
        setFinish_date("");

    }

    useEffect(() => {
        if (isGetList) {
            axios.get("http://127.0.0.1:8000/api/project/index")
                .then((response) => {
                    setGetList(response.data);
                    setProject_name("");
                    setProject_type("");
                    setStart_date("");
                    setFinish_date("");
                    setIsGetList(false);

                });
        }
    }, [isGetList]);



    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-6">
                    <form>
                        <div>
                            <label className="form-label">Proje Adı</label>
                            <input type="text" className="form-control" value={project_name} onChange={(e) => setProject_name(e.target.value)} aria-describedby="textHelp" />
                            <div id="textHelp" className="form-text">Proje adını giriniz</div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Proje Tipi</label>
                            <input type="text" className="form-control" value={project_type} onChange={(e) => setProject_type(e.target.value)} aria-describedby="textHelp" />
                            <div id="textHelp" className="form-text">Proje tipini giriniz</div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Başlangıç Tarihi</label>
                            <input type="date" className="form-control" value={start_date} onChange={(e) => setStart_date(e.target.value)} aria-describedby="dateHelp" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Bitiş Tarihi</label>
                            <input type="date" className="form-control" value={finish_date} onChange={(e) => setFinish_date(e.target.value)} aria-describedby="dateHelp" />
                        </div>

                        <div className="d-grid gap-2">
                            <button className="btn btn-primary" type="button" onClick={onClickSave}>Ekle</button>
                        </div>
                    </form>
                </div>

                <div className="col-lg-6">

                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">id</th>
                                <th scope="col">Proje Adı</th>
                                <th scope="col">Proje Tipi</th>
                                <th scope="col">Başlangıc T.</th>
                                <th scope="col">Bitiş T.</th>
                                <th scope="col">İşlemler</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                getList.map((v, i) => {
                                    return (<tr key={i}>
                                        <th scope="row">{v.id}</th>
                                        <td>{v.project_name}</td>
                                        <td>{v.project_type}</td>
                                        <td>{v.start_date}</td>
                                        <td>{v.finish_date}</td>

                                        <td className="d-flex justify-content-center"> 
                                        <div className="btn btn-group">
                                            <Link className={"mx-3 btn btn-success"} to={`/list/${v.id}`} >Çalısanlar</Link>
                                            <Link className={"mx-3 btn btn-warning"} to={`/projectUpdate/${v.id}`} >Düzenle</Link>
                                            <Delete maindelete="project" row={v} list={(e) => setIsGetList(e)} />
                                        </div>
                                        </td>

                                    </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                    <div />
                </div>
            </div>
        </div>
    )



}

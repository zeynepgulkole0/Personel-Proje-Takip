import React, { useLayoutEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function ProjectUpdate(props) {
    const { id } = useParams();
    const navigate = useNavigate();
    const [project_name, setProject_name] = useState("");
    const [project_type, setProject_type] = useState("");
    const [start_date, setStart_date] = useState("");
    const [finish_date, setFinish_date] = useState("");


    useLayoutEffect(() => {
        axios.get("http://127.0.0.1:8000/api/project/" + id)
            .then((res) => {
                setProject_name(res.data[0].project_name);
                setProject_type(res.data[0].project_type);
                setStart_date(res.data[0].start_date);
                setFinish_date(res.data[0].finish_date);

            })
    })

    const onClickUpdate = async (e) => {
        e.preventDefault();
        await axios.post('http://127.0.0.1:8000/api/project/update/' + id, { project_name, project_type, start_date, finish_date })
            .then(function (response) {
                console.log(true);
                navigate('/project')

            })


    }
    return (
        <div>
            <div className="container">
                <form>
                    <div className="mb-3">
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
                        <button className="btn btn-primary" type="button" onClick={(e) => onClickUpdate(e)}>Güncelle</button>
                    </div>
                </form>

            </div>
        </div>
    );
}

export default ProjectUpdate;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Delete from "../components/Delete";
import DataList from "../components/datatable";



export default function Employee() {
  const [isGetList, setIsGetList] = useState(true);
  const [getList, setGetList] = useState([]);
  const [employee_name, setEmploye_name] = useState("");
  const [employee_surname, setEmploye_surname] = useState("");
  const [project_role, setProject_role] = useState("");
  const [selectedRow, setSelectedRow] = useState({});




  const onClickSave = (e) => {
    e.preventDefault();
    axios.post("http://127.0.0.1:8000/api/employee/add", { employee_name, employee_surname, project_role })
      .then(function (response) {
        setIsGetList(true)
      })
    setEmploye_name('');
    setEmploye_surname('');
    setProject_role('');


  }



  useEffect(() => {
    if (isGetList) {
      axios.get("http://127.0.0.1:8000/api/employee/index")
        .then((response) => {
          setGetList(response.data);
          setEmploye_name("");
          setEmploye_surname("");
          setProject_role("");
          setIsGetList(false);


        });
    }
  }, [isGetList])

  const onClickRow = (v) => {
    setSelectedRow(v);
  }

  const onClickEdit = (e, id) => {
    e.preventDefault();
    // axios.put(`http://127.0.0.1:8000/api/employee/${id}/edit`)
    //   .then(function (response) {
    //     setIsGetList(true);
    //   })
    setEmploye_name('');
    setEmploye_surname('');
    setProject_role('');
  }

  // const dummyData = {
  //   personals: [
  //     {id: 1, name: "Zeynep"},
  //     {id: 2, name: "Ahmet"},
  //   ],
  //   jobs: [
  //     {id: 1, name: "iş1"},
  //     {id: 2, name: "iş2"},
  //   ]
  // }

  // Object.keys(dummyData).map((key, idx) => {
  //   dummyData[key]
  // })

  return (

    <div className="container p-5">
      <div className="row">
        <div className="col-lg-6">
          <form>
            <div className="mb-3">
              <label className="form-label">İsim</label>
              <input type="text" className="form-control" onChange={(e) => setEmploye_name(e.target.value)} value={employee_name} />
              <div id="textHelp" className="form-text">İsminizi giriniz</div>
            </div>
            <div className="mb-3">
              <label className="form-label">Soyisim</label>
              <input type="text" className="form-control" onChange={(e) => setEmploye_surname(e.target.value)} value={employee_surname} />
              <div id="textHelp" className="form-text">Soy isiminiz giriniz</div>
            </div>
            <div className="mb-3">
              <label className="form-label">Rol</label>
              <input type="text" className="form-control" onChange={(e) => setProject_role(e.target.value)} value={project_role} />
              <div id="textHelp" className="form-text">Rol giriniz</div>
            </div>
           
            <div className="d-grid gap-2">
              <button className="btn btn-primary" type="button" onClick={onClickSave}>Ekle</button>
            </div>
          </form>
        </div>

        <div className="col-lg-6">

          <div >
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">İsim</th>
                  <th scope="col">Soyisim</th>
                  <th scope="col">Rol</th>
                  <th scope="col">İşlemler</th>
                </tr>
              </thead>
              <tbody>


                {
                  getList.map((v, i) => {
                    // (v === selectedRow?)
                    return (
                      <tr onClick={() => onClickRow(v)} key={i}>
                        <th scope="row">{v.id}</th>
                        <td>{v.employee_name}</td>
                        <td>{v.employee_surname}</td>
                        <td>{v.project_role}</td>
                        <td>
                          <div className="btn btn-group">
                            <Link className={"mx-3 btn btn-success"} to={`/listnext/${v.id}`} >Projeler</Link>
                            <Link className={"mx-3 btn btn-warning"} to={`/employeeUpdate/${v.id}`} >Düzenle</Link>
                            <Delete maindelete="employee" row={v} list={(e) => setIsGetList(e)} />
                          </div>
                        </td>


                      </tr>
                    );


                  })
                }
              </tbody>
            </table>
            {/* <DataList/> */}
          </div>
        </div>
      </div>
    </div>

  )
}

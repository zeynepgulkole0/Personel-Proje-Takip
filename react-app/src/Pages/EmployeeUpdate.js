import React, { useLayoutEffect, useState } from "react";
import axios from "axios";
import Employee from "./Employee";
import { useNavigate, useParams } from "react-router-dom";



export default function EmployeeUpdate(){
  const {id} =useParams()
  const navigete = useNavigate()
  const [getList, setGetList] = useState([])
  const [employee_name, setEmploye_name] = useState("");
  const [employee_surname, setEmploye_surname] = useState("");
  const [project_role, setProject_role] = useState("");
  useLayoutEffect(()=>{
    axios.get('http://127.0.0.1:8000/api/employee/'+id).then((res)=>{
        console.log(res.data)
        setEmploye_name(res.data[0].employee_name)
        setEmploye_surname(res.data[0].employee_surname)
        setProject_role(res.data[0].project_role)

    }).catch((err)=>{
      console.log(err)
      console.log('asdwa')
    })
  },[])

  
    


    const onClickUpdate =async (e) =>{
      e.preventDefault();
      console.log(id)
      await axios.post('http://127.0.0.1:8000/api/employee/update/'+id,{employee_name,employee_surname,project_role}).then((res)=>{
        console.log('true')
        navigete('/employee')
      }).catch((err)=>{
        console.log(err)
      })
      
    
    }
    return (
    <div className="container">
    <form>
   <div className="mb-3">
     <label className="form-label">İsim</label>
     <input type="text" className="form-control" value={employee_name} onChange={(e) => setEmploye_name(e.target.value)} />
     <div id="textHelp" className="form-text">İsminizi giriniz</div>
   </div>
   <div className="mb-3">
     <label className="form-label">Soyisim</label>
     <input type="text" className="form-control" value={employee_surname} onChange={(e) => setEmploye_surname(e.target.value)} />
     <div id="textHelp" className="form-text">Soy isiminiz giriniz</div>
   </div>
   <div className="mb-3">
     <label className="form-label">Rol</label>
     <input type="text" className="form-control" value={project_role} onChange={(e) => setProject_role(e.target.value)} />
     <div id="textHelp" className="form-text">Rol giriniz</div>
   </div>
   <div className="d-grid gap-2">
     <button className="btn btn-primary" type="button" onClick={(e)=>onClickUpdate(e)}>Güncelle</button>
   </div>
 </form>
</div>
)




}


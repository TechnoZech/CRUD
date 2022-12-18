import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

function Update() {

    const[fName, setfName] = useState("");
    const[lName, setlName] = useState("");
    const[id, setid] = useState(0);
    const history = useNavigate();

    useEffect(()=>{
        setfName(localStorage.getItem("fName"))
        setlName(localStorage.getItem("lName"))
        setid(localStorage.getItem("id"))
    },[])


    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`https://639c9c8a16d1763ab14f4153.mockapi.io/crud/${id}`,
        {
            fName: fName,
            lName: lName,
        })
        .then(()=>{history("/")})
    }

    return(
        <>
            <h1>Update Data</h1>
            <div className="input_container">
					<input
						type="text"
						className="home_input"
						placeholder={fName}
                        onChange={(e)=> setfName(e.target.value)}
						
					/>
					<input
						type="text"
						className="home_input_2"
						placeholder={lName}
                        onChange={(e)=> setlName(e.target.value)}
						
					/>
					</div>

                    <br />
					<button className="submit_btn" onClick={handleUpdate}>Update</button>
        </>
    )
}

export default Update;
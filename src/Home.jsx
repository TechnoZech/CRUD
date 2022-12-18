import React, { useState, useEffect } from "react";
import "./HomeStyles.css";
import axios from 'axios';
import { useNavigate} from "react-router-dom";

function Home() {

    // <<<---------------------     Add Data / Create Data     ----------------------->>>

	const[fName, setFname] = useState("");
	const[lName, setLname] = useState("");
	const history = useNavigate();
	const header = {"Access-Control-Allow-Origin": "*"};

	const handleSubmit = (e) =>{

		e.preventDefault();
		axios.post(
			"https://639c9c8a16d1763ab14f4153.mockapi.io/crud",
			{fName: fName, lName: lName, header})
		
			.then(()=>{
				getData();
				setFname("")
				setLname("")
			})
			
			
			
	}

	// <<<---------------------     Get Data / Read Data    ----------------------->>>

	const[data, setData] = useState([]);

	function getData() {
		axios.get("https://639c9c8a16d1763ab14f4153.mockapi.io/crud")
		.then((res) => {setData(res.data)})
	}

	useEffect(()=>{
		getData()
	},[]);
	

    // <<<---------------------     Delete Data       ----------------------->>>


	function handleDelete(id){
		axios.delete(`https://639c9c8a16d1763ab14f4153.mockapi.io/crud/${id}`)
		.then(()=>{getData()})
	}


   // <<<---------------------     Update Data       ----------------------->>>


	const setLocalStorage = (id, fName, lName)=>{

		localStorage.setItem("fName", fName)
		localStorage.setItem("lName", lName)
		localStorage.setItem("id", id)
		history("/update")

	}

	return (
		<>
			<section className="home_section">
				<div className="home_container">
					{data.map((item) => {
						return (
							<div className="Heading_container">

								<h1 className="home_heading">{item.fName}</h1>
								<h1 className="home_heading_2">{item.lName}</h1>
								<button className="delete_btn" onClick={()=>setLocalStorage(item.id, item.fName, item.lName)}>Edit</button>
							
								<button className="delete_btn" onClick={()=>{handleDelete(item.id)}}>Delete</button>
							</div>
						);
					})}

					<div className="input_container">
					<input
						type="text"
						className="home_input"
						placeholder="Enter First Name"
						onChange={(e)=> setFname(e.target.value)}
						value={fName}
						
						
					/>
					<input
						type="text"
						className="home_input_2"
						placeholder="Enter Last Name"
						onChange={(e)=> setLname(e.target.value)}
						value={lName}
						
					/>
					</div>
					<br />
					<button className="submit_btn" onClick={handleSubmit}>Submit</button>
				</div>
			</section>
		</>
	);
}

export default Home;

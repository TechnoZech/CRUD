import React, { useState } from "react";
import "./HomeStyles.css";
import axios from 'axios';

function Home() {

    // <<<---------------------     Add Data       ----------------------->>>

	const[fName, setFname] = useState("");
	const[lName, setLname] = useState("");

	const header = {"Access-Control-Allow-Origin": "*"};

	const handleSubmit = (e) =>{

		e.preventDefault();
		console.log("clicked");
		axios.post(
			"https://639c9c8a16d1763ab14f4153.mockapi.io/crud",
			{fName: fName, lName: lName, header},
		)
	}

	// <<<---------------------     Get Data       ----------------------->>>

	

    // <<<---------------------     Delete Data       ----------------------->>>


	return (
		<>
			<section className="home_section">
				<div className="home_container">
					{/* {allData.map((item) => {
						return ( */}
							<div className="Heading_container">

								<h1 className="home_heading">First name</h1>
								<h1 className="home_heading_2">Last name</h1>
								<button className="delete_btn">Delete</button>
							</div>
						{/* );
					})} */}

					<div className="input_container">
					<input
						type="text"
						className="home_input"
						placeholder="Enter First Name"
						onChange={(e)=> setFname(e.target.value)}
					/>
					<input
						type="text"
						className="home_input_2"
						placeholder="Enter Last Name"
						onChange={(e)=> setLname(e.target.value)}
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

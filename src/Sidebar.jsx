import { useState } from 'react'
import './Sidebar.css'

function Sidebar() {
	const [count, setCount] = useState(0)
	const [patient, setPatient] = useState({
		name: "",
		dob: null,
		height: 0,
		weight: 0,
		phone: 0,
		email: "",
	})

	return (
		<div className="sidebar py-3">
			<div className="container mx-auto">
				<h3>Patient details</h3>
				<div className="mb-3">
					<label htmlFor="patientFirstName" className="form-label">First Name</label>
					<input type="text" className="form-control" id="patientFirstName" />
				</div>

				<div className="mb-3">
					<label htmlFor="patientLastName" className="form-label">Last Name</label>
					<input type="text" className="form-control" id="patientLastName" />
				</div>

				<div className="mb-3">
					<label htmlFor="patientDOB" className="form-label">Date of birth:</label>
					<input type="date" className="form-control" id="patientDOB" />
				</div>

				<div className="row">
					<div className="col">
						<div className="mb-3">
							<label htmlFor="patientHeight" className="form-label">Height (cm.)</label>
							<input type="number" className="form-control" id="patientHeight" />
						</div>
					</div>

					<div className="col">
						<div className="mb-3">
							<label htmlFor="patientWeight" className="form-label">Weight (Kg.)</label>
							<input type="number" className="form-control" id="patientWeight" />
						</div>
					</div>
				</div>

				<div className="mb-3">
					<label htmlFor="patientPhone" className="form-label">Phone</label>
					<input type="phone" className="form-control" id="patientPhone" />
				</div>

				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
					<input type="email" className="form-control" id="exampleInputEmail1" />
					<div id="emailHelp" className="form-text">We'll never share your personal details with anyone else.</div>
				</div>

				<button className="btn btn-primary">Save</button>
			</div>
		</div>
	)
}

export default Sidebar
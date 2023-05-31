import React from "react";
import { Fields } from "./types/types";
import { FieldType } from "./types/types";

function App() {
	const [needed, setNeeded] = React.useState<FieldType[]>([]);

	function setUsername(value: string, field: Fields) {
		let arr = [...needed];
		for (let i = 0; i < needed.length; i++) {
			if (needed[i].type === field) {
				arr[i].username = value;
				break;
			}
		}
		setNeeded(arr);
	}

	function setPassword(value: string, field: Fields) {
		let arr = [...needed];
		for (let i = 0; i < needed.length; i++) {
			if (needed[i].type === field) {
				arr[i].password = value;
				break;
			}
		}
		setNeeded(arr);
	}

	return (
		<div className="container mx-auto my-4 p-4 bg-white rounded-md shadow-md">
			<h1>Onboarder</h1>
			{/* Select Services */}
			<div>
				<h2>Select services:</h2>
				<div>
					{Object.keys(Fields).map((field) => {
						let f: unknown = field;
						return isNaN(Number(field)) ? (
							<span className="inline-flex gap-2 flex-row mr-1 hover:bg-gray-200 rounded px-2">
								<input
									id={field}
									type="checkbox"
									onChange={(e) => {
										setNeeded((prev) => {
											if (e.target.checked) {
												let arr = [...prev];
												arr.push({
													type: f as Fields,
													username: "",
													password: "",
												});
												return arr;
											} else {
												let arr = prev.filter((k) => {
													return k.type !== f;
												});
												return arr;
											}
										});
									}}
								/>
								<label htmlFor={field}>{field}</label>
							</span>
						) : (
							<></>
						);
					})}
				</div>
			</div>
			{/* Enter values */}
			<div className="mt-4 border rounded-md">
				{needed.map((service) => {
					return (
						<div className="even:bg-gray-100 px-4 pb-3 pt-1">
							<h3>{service.type}</h3>
							<div className="flex place-items-center">
								<label htmlFor={service + "-username"} className="min-w-[8rem]">
									Username
								</label>
								<input
									id={service + "-username"}
									type="text"
									className="border rounded py-1 px-2 mt-2 w-full"
									value={service.username}
									onChange={(e) => {
										setUsername(e.target.value, service.type);
									}}
								/>
							</div>
							<div className="flex place-items-center">
								<label htmlFor={service + "-password"} className="min-w-[8rem]">
									Password
								</label>
								<input
									id={service + "-password"}
									type="text"
									className="border rounded py-1 px-2 mt-2 w-full"
									value={service.password}
									onChange={(e) => {
										setPassword(e.target.value, service.type);
									}}
								/>
							</div>
						</div>
					);
				})}
			</div>
			{/* Result */}
			<div>
				{needed.map((service) => {
					return (
						<div>
							<h3>{service.type}</h3>
							<table>
								<tr>
									<td>Username:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
									<td>{service.username}</td>
								</tr>
								<tr>
									<td>Password:</td>
									<td>{service.password}</td>
								</tr>
							</table>
							<br />
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default App;

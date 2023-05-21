import { authHeader } from "../Helpers/authHeader";
import { handleResponse } from "../Helpers/handleResponse";
import { getCurrentUserId, getCurrentUser } from "../Helpers/userHelper";

async function getAllCourse() {
	let user = getCurrentUser();	
	return fetch(`http://localhost:5000/api/section/getAllSections`, {
		method: "GET",
		headers: { ...authHeader(), "Content-Type": "application/json" },
	}).then(handleResponse);
}


const courseService = { getAllCourse};
export default courseService;

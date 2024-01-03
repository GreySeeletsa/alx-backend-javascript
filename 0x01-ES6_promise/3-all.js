import uploadPhoto from "./utils.js"
import createUser from "./utils.js"

export default function handleProfileSignup() {
	Promise.all([uploadPhoto, createUser])
	.then((userResp) => {
		console.log(`${userResp[0].body} ${userResp[1].firstName} ${userResp[1].lastName}`);
	})
	.catch((error) => {
		console.log('Signup system offline');
	});
}

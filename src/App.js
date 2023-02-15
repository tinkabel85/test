import "./App.css";
import HelloWorld from "./components/HelloWorld";
import Namelist from "./components/Namelist";
import UserProfile from "./components/UserProfile";

function App() {
	return (
		<div>
			<HelloWorld />
			<Namelist />
			<UserProfile
				name="Oksana"
				bio="Software Developer trainee"
				userPicture="https://i.ibb.co/Lp6qZpS/cedric-vt-Iu-Jc2qh2-Tc-A-unsplash.jpg"
			/>
		</div>
	);
}

export default App;

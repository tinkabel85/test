import "./App.css";
import HelloWorld from "./components/HelloWorld";
import Namelist from "./components/Namelist";
import NavigationMenu from "./components/NavigationMenu/NavigationMenu";
import UserProfile from "./components/UserProfile";
import Star from "./components/Star";
import Quotes from "./components/Quotes";

function App() {
	return (
		<div>
			<NavigationMenu />
			<HelloWorld />
			<Namelist />
      <Star number={5} />
      <Quotes/>
			<UserProfile
				name="Oksana"
				bio="Software Developer trainee"
				userPicture="https://i.ibb.co/Lp6qZpS/cedric-vt-Iu-Jc2qh2-Tc-A-unsplash.jpg"
			/>
		</div>
	);
}

export default App;

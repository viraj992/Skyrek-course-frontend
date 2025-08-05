import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/homePage";
import LoginPage from "./components/loginPage";
import RegisterPage from "./components/registerPage";

function App() {
	return (
		<BrowserRouter>
			<div className="w-full h-screen flex justify-center">
				<div className="w-calc(100vw-35px)] h-[calc(100vh-15px)] border border-red-700">
					<Routes path="/">
						<Route path="/" element={<HomePage/>}/>
						<Route path="/login" element={<LoginPage/>}/>
						<Route path="/register" element={<RegisterPage/>}/>
						
					</Routes>
				</div>
			</div>
		</BrowserRouter>

	);
}

export default App;
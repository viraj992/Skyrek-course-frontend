import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homePage";
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";
import AdminPage from "./pages/adminPage";
import TestPage from "./pages/testPage";
import { Toaster } from "react-hot-toast";
import ClientwebPage from "./pages/client/clientPage";

import { GoogleOAuthProvider } from "@react-oauth/google";
import ForgetPasswordPage from "./pages/client/forgetPassword";
const clientId = "32169099435-0s3td2s6c11ej62pasbcd6vau8vlhih1.apps.googleusercontent.com";
const clientSecret = "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"



function App() {
	return (
		<BrowserRouter>
		<GoogleOAuthProvider clientId={clientId}>
			
			<div className="w-full h-screen flex justify-center items-center bg-primary">
					<Toaster position= "top-right"/>
					<Routes path="/">
						
						<Route path="/login" element={<LoginPage/>}/>
						<Route path="/test" element={<TestPage/>}/>
						
						<Route path="/register" element={<RegisterPage/>}/>
						<Route path = "/admin/*" element={<AdminPage/>}/>
						<Route path = "/forget" element={<ForgetPasswordPage/>}/>
						<Route path = "/*" element={<ClientwebPage/>}/>
					</Routes>
				</div>
			
		</GoogleOAuthProvider>
		</BrowserRouter>

	);
}

export default App;
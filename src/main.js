import './style.css'

import { Header } from './components/header';
import { LandingPage } from './pages/landing';
import { LoginPage } from './pages/login';


const pathname = window.location.pathname;

const $app = document.querySelector("#app");

$app.classList.add("bg-gray-100" ,"min-h-screen", "flex-col" ,"justify-center", "");

$app.appendChild(Header());

if (pathname === "/") $app.appendChild(LandingPage());
if (pathname === "/login") $app.appendChild(LoginPage());


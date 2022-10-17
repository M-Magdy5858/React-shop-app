import './App.css';
import Home from './components/home';
import List from './components/list';
import Navigation from './components/navbar';
import Details from './components/list/Details';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Navigation></Navigation>

			<Routes>
				<Route path='/' element={<Home/>}></Route>
				<Route path='/list' element={<List/>}></Route>
				<Route path='/list/:id' element={<Details/>}></Route>

			</Routes>
		</Router>
	);
}

export default App;

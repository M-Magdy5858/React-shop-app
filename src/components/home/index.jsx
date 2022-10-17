import { Link } from 'react-router-dom';

function Home() {
	return (
		<>
			<h1 className="text-danger text-center my-5">HHOOOOMMEE</h1>

			<div className="container">
				<Link to="/list">FFF</Link>
			</div>
		</>
	);
}

export default Home;

import space from '../../assets/space.png';

function NotFound() {
	return (
		<div className="container">
		<div className='text-center'>
				<h1 className="my-5 ">404!<br /> Nothing here!</h1>
				<img src={space} alt="" />
      </div>

		
		</div>
	);
}

export default NotFound;

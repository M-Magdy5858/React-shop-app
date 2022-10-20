import '../style.css';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const navigate = useNavigate();

	console.log(errors);


	const onSubmit = (data) => {
		console.log(data);
    
    navigate('/list');
	};

	return (
		<>
			<div className="container mt-5">
				<form className="w-75 mx-auto register" onSubmit={handleSubmit(onSubmit)}>
					<div className="mb-3">
						<label className="form-label">Email address</label>
						<input className="form-control" id="email" {...register('email', { required: true, pattern: /^[\w\.-]+@([\w-]+\.)+[\w-]{2,4}$/i })} />
						{errors?.email?.type == 'required' && <small className="text-danger mt-2">email is required</small>}
						{errors?.email?.type == 'pattern' && <small className="text-danger mt-2">invalid Pattern</small>}
					</div>

					<div className="mb-3">
						<label className="form-label">Password</label>
						<input type="password" className="form-control" id="pass" {...register('password', { required: true, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/ })} />
						{errors?.password?.type == 'required' && <small className="text-danger mt-2">Password is required</small>}
						{errors?.password?.type == 'pattern' && <small className="text-danger mt-2">invalid password --min 8 chars & nums & upper </small>}
					</div>

					<button type="submit" className=" rounded-0">
						Submit
					</button>


					<Link to="/sign-up">
						<p className="text-center my-4">
							Don't have an account, <strong>Sign Up NOW!</strong>{' '}
						</p>
					</Link>
				</form>
			</div>
		</>
	);
}

export default Login;

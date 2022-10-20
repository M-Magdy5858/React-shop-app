import '../style.css';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

function SignUp() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	let pass = watch('password');
	const isConfirmed = (confirm) => confirm == pass;

	const onSubmit = (data) => console.log(data);

	console.log('errors', errors);
	return (
		<>
			<div className="container mt-5" onSubmit={handleSubmit(onSubmit)}>
				<form className="w-75 mx-auto register">
					<div className="mb-3">
						<label className="form-label">User Name</label>
						<input type="text" className="form-control" id="uname" {...register('uname', { required: true, maxLength: 20 })} />
						{errors?.uname?.type == 'required' && <small className="text-danger mt-2">User Name is required</small>}
						{errors?.uname?.type == 'maxLength' && <small className="text-danger mt-2">Max Length is 20</small>}
					</div>
					<div className="mb-3">
						<label className="form-label">Email address</label>
						<input className="form-control" id="email" {...register('email', { required: true, pattern: /^[\w\.-]+@([\w-]+\.)+[\w-]{2,4}$/i })} />
						{errors?.email?.type == 'required' && <small className="text-danger mt-2">email is required</small>}
						{errors?.email?.type == 'pattern' && <small className="text-danger mt-2">invalid Pattern</small>}
					</div>
					<div className="mb-3">
						<label className="form-label">Phone Number</label>
						<input type="tel" className="form-control" id="phone" {...register('phone', { required: true, pattern: /^01[0125][0-9]{8}$/ })} />
						{errors?.phone?.type == 'required' && <small className="text-danger mt-2">Phone is required</small>}
						{errors?.phone?.type == 'pattern' && <small className="text-danger mt-2">invalid phone number -- 11 digits starting with 01 </small>}
					</div>
					<div className="mb-3">
						<label className="form-label">Password</label>
						<input type="password" className="form-control" id="pass" {...register('password', { required: true, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/ })} />
						{errors?.password?.type == 'required' && <small className="text-danger mt-2">Password is required</small>}
						{errors?.password?.type == 'pattern' && <small className="text-danger mt-2">invalid password --min 8 chars & nums & upper </small>}
					</div>
					<div className="mb-3">
						<label className="form-label">Confirm Password</label>
						<input type="password" className="form-control" id="confirm" {...register('confirm', { required: true, validate: isConfirmed })} />
						{errors?.confirm?.type == 'required' && <small className="text-danger mt-2">Confirm Password is required</small>}
						{errors?.confirm?.type == 'validate' && <small className="text-danger mt-2">Not matching </small>}
					</div>

					<div className="d-flex justify-content-evenly align-items-center">
						<div className="mb-3">
							<label className="form-label">gender</label>
							<select className="form-select" {...register('gender', { required: true })}>
								<option value="">Gender</option>
								<option value="male">male</option>
								<option value="female">female</option>
							</select>
							{errors?.gender?.type == 'required' && <small className="text-danger mt-2">gender is required</small>}
						</div>
						<div className="mb-3">
							<label className="form-label">Age</label>
							<input type="number" className="form-control" id="age" {...register('age', { required: true, min: 18 })} />
							{errors?.age?.type == 'required' && <small className="text-danger mt-2">Age is required</small>}
							{errors?.age?.type == 'min' && <small className="text-danger mt-2">Age must be +18 </small>}
						</div>
					</div>
					<div className="form-check mb-3 mx-auto">
						<input className="form-check-input" type="checkbox" id="check" {...register('agree', { required: true })} />
						<label className="form-check-label" htmlFor="check">
							I Agree !!
						</label>
						{errors?.agree?.type == 'required' && <small className="text-danger mt-2">Must Agree!!!</small>}
					</div>
					<p><a  className="text-muted" href="">Terms, and Privacy Policy</a></p>

					<button type="submit" className="mb-3 rounded-0">
						Submit
					</button>
          <Link to="/log-in">
						<p className="text-center my-4">
							Already have an account, <strong>Log in NOW!</strong>{' '}
						</p>
					</Link>
				</form>
			</div>
		</>
	);
}

export default SignUp;

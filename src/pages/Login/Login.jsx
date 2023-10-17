import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaGoogle } from 'react-icons/fa';
import swal from 'sweetalert';


const Login = () => {

  const {signIn, logInWithGoogle} = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()
  console.log('location in the log in page', location);

    const handleLogin = e =>{
        e.preventDefault()
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password);
        signIn(email, password)
        .then(result =>{
          console.log(result.user);
          swal("User Login successfully","", "success");

          // navigate after login
          navigate(location?.state ? location.state : '/')


        })
        .catch(error =>{
          console.error(error);
          swal("Wrong User Name or Password!", "", "error");
        })
    }

    const handleGoogleSignIn =() =>{
      logInWithGoogle()
      .then(result =>{
          console.log(result.user);
          navigate(location?.state ? location.state : '/');
      })
      .catch(error =>{
          console.error(error);
      })
  }

    return (
        <div>
            <div className="hero min-h-[90vh]">

    <div data-aos="zoom-in-up" className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
    <div className="text-center">
      <h1 className="text-5xl font-bold pt-8">Login now!</h1>
      </div>
      <form onSubmit={handleLogin} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover pt-2">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-2">
          <button className="btn btn-neutral">Login</button>
        </div>
      </form>
      <div className="card-body -mt-12">
          <button onClick={handleGoogleSignIn} className="btn btn-ghost border-black"><FaGoogle className="text-2xl"></FaGoogle>Login With Google</button>
        </div>
      <p className="text-center pb-4">Do not have an Account <Link className="text-blue-600 font-bold" to='/register'>Register</Link> </p>
    </div>
  </div>
</div>

    );
};

export default Login;
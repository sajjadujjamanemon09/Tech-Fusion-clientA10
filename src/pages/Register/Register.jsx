import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import swal from 'sweetalert';
import { updateProfile } from "firebase/auth";


const Register = () => {

  const {createUser, logOut} = useContext(AuthContext)

    const handleRegister = e =>{
        e.preventDefault()
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name, email, password);


        const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

        if(!passwordValidation.test(password)){
          swal("Password Should Be At Least 6 Characters,One Capital letter(A-Z),One Small letter(a-z),One Special character(@$!%*?&).","", "error");
            return;
        }
        

     
        //   swal("Password Should be at least One capital letter (A-Z)", "", "error");
        
        // create user
        createUser(email, password)
        .then(result =>{
          console.log(result.user);
          swal("User created successfully","", "success");
          logOut();

          updateProfile(result.user,{
            displayName: name,
            photoURL: photo,
        })
        .then(result =>{
            console.log(result.user);
        })
        .catch(error =>{
            console.error(error);  
        })

        })
        .catch(error =>{
          console.error(error)
          swal("User Already Registered","", "info");
        })
    }


    return (
        <div>
            <div className="hero min-h-[90vh]">

    <div data-aos="zoom-in-down" className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
    <div className="text-center">
      <h1 className="text-5xl font-bold pt-8">Please Register</h1>
      </div>
      <form onSubmit={handleRegister} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" name="name" className="input input-bordered mb-3" required />
        </div>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" required />
        </div>
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
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-neutral">Register</button>
        </div>
      </form>
      <p className="text-center pb-4">Already have an Account <Link className="text-blue-600 font-bold" to='/login'>Login</Link> </p>
    </div>
  </div>
</div>

    );
};

export default Register;
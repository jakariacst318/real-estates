import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Navbar from "../Navbar/Navbar";

const Register = () => {

    const { createUser } = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);

        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name, photo, email, password)

        // create user
         createUser(email, password)
            .then(result => {
                console.log(result.user)
                e.target.reset()
            })
            .catch(error => {
                console.error(error)
            }) 
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl lg:text-5xl font-bold">Register your account</h1>

                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body pt-3">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <p className="text-center pb-5">Already  have an account <Link to='/login'><span className="text-blue-600 font-medium">Login</span></Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
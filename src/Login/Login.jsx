import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Navbar from "../components/Navbar/Navbar";


const Login = () => {
    const { sigIn, googleLogin, githubLogin } = useContext(AuthContext)


    const location = useLocation()
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault()

        const form = new FormData(e.currentTarget);

        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password)

        sigIn(email, password)
            .then(result => {
                console.log(result.user)
                e.target.reset()

                navigate(location?.state ? location.state : '/');

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
                        <h1 className="text-3xl lg:text-5xl font-bold">Login your account</h1>

                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body pt-3">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary w-full">Login</button>
                            </div>
                        </form>
                       <div className="flex gap-x-4 ">
                       <button onClick={() =>googleLogin()} className="btn bg-cyan-500">google</button>

                       <button onClick={() =>githubLogin()} className="btn bg-cyan-500">github</button>
                       </div>

                        <p className="text-center pb-5">Don not have an account <Link to='/register'><span className="text-blue-600 font-medium">Register</span></Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
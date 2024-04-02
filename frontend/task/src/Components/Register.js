import React from 'react';
import image from '../Images/image289.jpg';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const mystyle = {
        backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/4f8b/6e9d/609c7731d037f1b65d00906a7bc1e241?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RNvpEFshRg4VqTTOx4BxPQVdLMw~XGr5uH~K-0g5AZxpRBDczzqnQ~PDIsT8iwnfMBK9gbDQ5RPsyiQCYbYCkHaIrohcJaw7Hhr59LFoLS-BbLoeWZ8idB0XNAY2RMQ0SFJuuVEivB1STXNtdUnWNpAptipeTeLbJkEpgy8l74z7TedTuwOeYXVXAFUZETijcQnwodk65NRAp9Cu5Zn-JMdNZWNMfOpTh6MR-M70KdIh~O8h4uY-F49E2uoDtvNGpLfkTuDHhOmBy7Q~--ixkewDGvRPMx~SnVSU~7qxcz4x3t-x2LNdffdx03sUel1G9uoRoVDZYGPiNWae3pvtiQ__)',
        backgroundSize: 'cover',
        width: '100%'
    };
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleRegister = async (e) => {
        try {
            e.preventDefault()
            console.log(email, password)
            await axios.post('http://localhost:8000/user/signup', { email, password });
            navigate('/');
        } catch (error) {
            console.error('Registration failed', error);
        }
    };
    return (
        <>
            <div style={mystyle}>
                <section class="vh-100 gradient-custom">
                    <div class="container py-5 h-100">
                        <div class="row d-flex justify-content-center align-items-center h-100">
                            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                                <div class="card bg-dark text-white" style={{ borderRadius: "1rem" }}>
                                    <div class="card-body p-5 text-center">
                                        <img src={image} alt='logo' />
                                        <div class="mb-md-5 mt-md-4 pb-5">
                                            <h4 class="fw-bold mb-2 text-uppercase">Welcome to Digitalflake Admin</h4>
                                            <p class="text-white-50 mb-5"></p>
                                            <form onSubmit={handleRegister}>
                                                <div class="form-outline form-white mb-4">
                                                    <input type="email" id="typeEmailX" class="form-control form-control-lg" value={email} onChange={(e) => setEmail(e.target.value)} />
                                                    <label class="form-label" for="typeEmailX">Your Email</label>
                                                </div>
                                                <div class="form-outline form-white mb-4">
                                                    <input type="password" id="typePasswordX" class="form-control form-control-lg" value={password} onChange={(e) => setPassword(e.target.value)} />
                                                    <label class="form-label" for="typePasswordX">Password</label>
                                                </div>
                                                <button class="btn btn-outline-light btn-lg px-5" type="submit" >Register</button>
                                            </form>
                                            <div class="d-flex justify-content-center text-center mt-4 pt-1">
                                                <a href="#!" class="text-white"><i class="fab fa-facebook-f fa-lg"></i></a>
                                                <a href="#!" class="text-white"><i class="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                                                <a href="#!" class="text-white"><i class="fab fa-google fa-lg"></i></a>
                                            </div>
                                        </div>
                                        <div>
                                            <p class="mb-0" style={{ position: "relative", bottom: "90px" }}>Have already an account? <a href="/" class="text-white-50 fw-bold">Sign In</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
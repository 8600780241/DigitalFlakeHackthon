import React from 'react';
import image from '../Images/image289.jpg';
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const mystyle = {
    backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/4f8b/6e9d/609c7731d037f1b65d00906a7bc1e241?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RNvpEFshRg4VqTTOx4BxPQVdLMw~XGr5uH~K-0g5AZxpRBDczzqnQ~PDIsT8iwnfMBK9gbDQ5RPsyiQCYbYCkHaIrohcJaw7Hhr59LFoLS-BbLoeWZ8idB0XNAY2RMQ0SFJuuVEivB1STXNtdUnWNpAptipeTeLbJkEpgy8l74z7TedTuwOeYXVXAFUZETijcQnwodk65NRAp9Cu5Zn-JMdNZWNMfOpTh6MR-M70KdIh~O8h4uY-F49E2uoDtvNGpLfkTuDHhOmBy7Q~--ixkewDGvRPMx~SnVSU~7qxcz4x3t-x2LNdffdx03sUel1G9uoRoVDZYGPiNWae3pvtiQ__)',
    backgroundSize: 'cover',
    height: '100vh',
    width: '100%'
  };
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async (e) => {
    try {
      e.preventDefault()
      console.log(email, password)
      const response = await axios.post('http://localhost:8000/user/login', { email, password });
      const token = response.data.token;
      localStorage.setItem('token', token);
      navigate('/home');
    } catch (error) {
      console.error('Login failed', error);
    }
  };
  return (
    <>
      <div style={mystyle}>
        <div >
          <section className="vh-100 gradient-custom" style={{ backgrounColor: "#eee" }}>
            <div className="container py-5 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                  <div className="card bg-dark text-white" style={{ borderRadius: "1rem" }}>
                    <div className="card-body p-5 text-center">
                      <img src={image} alt='logo' />
                      <div className="mb-md-5 mt-md-4 pb-5">
                        <h4 className="fw-bold mb-2 text-uppercase">Welcome to Digitalflake Admin</h4>
                        <p className="text-white-50 mb-5">Please enter your login and password!</p>
                        <form onSubmit={handleLogin}>
                          <div className="form-outline form-white mb-4">
                            <input type="email" id="typeEmailX" className="form-control form-control-lg" style={{ position: "relative", bottom: "16px" }} value={email} onChange={(e) => setEmail(e.target.value)} />
                            <label className="form-label" for="typeEmailX" style={{ position: "relative", bottom: "16px" }}>Email</label>
                            <input type="password" id="typePasswordX" className="form-control form-control-lg" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <label className="form-label" for="typePasswordX">Password</label>
                            <p style={{ position: "relative", left: "146px", bottom: "10px" }}>Forget password?</p>
                          </div>
                          <button className="btn btn-outline-light btn-lg px-5" type="submit" >Login</button>
                        </form>
                      </div>
                      <div style={{ position: "relative", bottom: "55px" }}>
                        <p className="mb-0">Don't have an account? <a href="/register" className="text-white-50 fw-bold">Sign Up</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
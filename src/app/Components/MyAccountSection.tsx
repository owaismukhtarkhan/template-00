'use client';
import React, { useState } from 'react';


interface LoginRegisterProps {
  onLogin?: (email: string, password: string) => void;
  onRegister?: (email: string) => void;
}

const LoginRegister: React.FC<LoginRegisterProps> = ({ 
  onLogin = () => {}, 
  onRegister = () => {} 
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [registerEmail, setRegisterEmail] = useState('');

  return (
    <div className="min-h-screen w-full bg-white py-16 px-4">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-center items-start gap-8">
        
        {/* Login Section */}
        <div className="w-full md:w-[608px] p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-4xl font-semibold font-poppins mb-12">Log In</h2>
          
          <div className="space-y-8">
            <div>
              <label className="block text-base font-medium font-poppins mb-2">
                Username or email address
              </label>
              <input
                type="email"
                className="w-full h-[75px] px-4 border border-gray-200 rounded-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-base font-medium font-poppins mb-2">
                Password
              </label>
              <input
                type="password"
                className="w-full h-[75px] px-4 border border-gray-200 rounded-lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                className="w-[30px] h-[27px] border border-gray-200"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <span className="text-base font-normal font-poppins">Remember me</span>
            </div>

            <div className="flex items-center gap-6">
              <button
                onClick={() => onLogin(email, password)}
                className="w-[215px] h-[64px] bg-white border border-gray-200 rounded-[15px] text-xl font-normal font-poppins"
              >
                Log In
              </button>
              <a href="#" className="text-base font-light font-poppins">
                Lost Your Password?
              </a>
            </div>
          </div>
        </div>

        {/* Register Section */}
        <div className="w-full md:w-[608px] p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-4xl font-semibold font-poppins mb-12">Register</h2>
          
          <div className="space-y-8">
            <div>
              <label className="block text-base font-medium font-poppins mb-2">
                Email address
              </label>
              <input
                type="email"
                className="w-full h-[75px] px-4 border border-gray-200 rounded-lg"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
              />
            </div>

            <p className="text-base font-light font-poppins">
              A link to set a new password will be sent to your email address.
            </p>

            <p className="text-base font-light font-poppins text-justify">
              Your personal data will be used to support your experience throughout this website, 
              to manage access to your account, and for other purposes described in our{' '}
              <a href="#" className="underline">privacy policy</a>.
            </p>

            <button
              onClick={() => onRegister(registerEmail)}
              className="w-[215px] h-[64px] bg-white border border-gray-200 rounded-[15px] text-xl font-normal font-poppins"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;


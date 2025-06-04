import Lottie from 'lottie-react';
import error from '../assets/lottieFiles/404.json'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='min-h-screen'>
            <div className='flex flex-col items-center justify-center'>
            <Lottie className='max-w-3xl' animationData={error}></Lottie>
            <Link to={"/"}>
                <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-[#8550FB] px-8 font-medium text-white cursor-pointer font-o">
                  <div className="translate-y-0 transition duration-700 group-hover:-translate-y-[150%]">
                    Back To Home
                  </div>
                  <div className="absolute translate-y-[150%] transition duration-700  group-hover:translate-y-0">
                    Back To Home
                  </div>
                </button>
              </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { logoImg } from '../../assets/images';
export default function Welcome() {

    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/home');
        }, 5000);

        // Cleanup function to clear the timer if the component unmounts
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className='bg-light_color'>
            <div className=' m-auto flex items-center w-[40%] justify-center h-screen '>
                <img src={logoImg} alt="" className=' object-cover flip' />
            </div>
        </div>
    )
}
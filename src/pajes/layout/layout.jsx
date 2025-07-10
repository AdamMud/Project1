import { Link, Outlet } from "react-router"
import img1 from '../../assets/Logo (7).png'
import img25 from '../../assets/Logo (8).png'
import img26 from '../../assets/Button.png'
import img27 from '../../assets/Button (1).png'
import img28 from '../../assets/Button (2).png'
import img29 from '../../assets/Buttons Container (1).png'

export default function Layout() {
    return (<>

        <header className="flex flex-col lg:flex-row w-[80%] m-auto text-white rounded-full mt-[10px] p-[20px] items-center justify-around bg-[#2b2b2b]">
            <img src={img1} alt="" />
            <div className="flex gap-[20px]">

                <Link to={'/'}>
                    <h1>Home</h1>
                </Link>
                <Link to={'/career'}>
                    <h1>Careers</h1>
                </Link>
                <Link to={'/about'}>
                    <h1>About</h1>
                </Link>
                <Link to={'/security'}>
                    <h1>Security</h1>
                </Link>
            </div>


            <div className="flex gap-[20px] items-center">

                <Link to={'/logIn'}>
                    <button>Log In</button>
                </Link>
                <Link to={'/signUp'}>
                    <button className="bg-[#CAFF33] rounded-full text-black px-[20px] py-[10px]">Sign Up</button>
                </Link>
            </div>
        </header>

        <main><Outlet /></main>

        <footer className="bg-[#1C1C1C]">
            <div className="border-b border-gray-500 w-[90%] m-auto flex flex-col gap-[20px] items-center py-[50px]">
                <img src={img25} alt="" />
                <div className="flex text-[20px] font-semibold text-white gap-[30px]">
                    <h1>Home</h1>
                    <h1>Careers</h1>
                    <h1>About</h1>
                    <h1>Security</h1>
                </div>
            </div>
            <div className="border-b flex-col lg:flex-row border-gray-500 p-[20px] w-[90%] m-auto flex justify-center gap-[20px]">
            <img src={img26} alt="" />
            <img src={img27} alt="" />
            <img src={img28} alt="" />
            </div>
            <div className="text-gray-500 flex-col lg:flex-row gap-[20px] flex w-[90%] m-auto justify-around items-center py-[20px]">
                <img src={img29} alt="" />
                <p>YourBank All Rights Reserved</p>
                <p>Privacy Policy |Terms of Service</p>
            </div>
        </footer>

    </>)
}
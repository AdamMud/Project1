
import { Card5 } from "../home/home"
import { Button } from "../home/home"
import img24 from '../../assets/Buttons Container.png'

export default function SignUp() {
    return (<>

        <section className="w-[90%] m-auto bg-[#1B1B1B] mt-[100px] text-center border rounded-[20px] p-[20px] border-[#262626] flex flex-col gap-[20px]">
            <div>
                <h1 className="text-[#CAFF33] text-[40px] font-bold">Sign In</h1>
                <p className="text-gray-500">Welcome back! Please log in to access your account.</p>
            </div>
            <div className="flex justify-around flex-col lg:flex-row">
                <input type="text" className="lg:w-[459px] lg:h-[75px] rounded-full p-[20px] placeholder:text-[20px] placeholder:text-white  bg-[#1A1A1A] border border-[#262626]" placeholder="Enter your Email" />
                <input type="text" className="lg:w-[459px] lg:h-[75px] rounded-full p-[20px] placeholder:text-[20px] placeholder:text-white bg-[#1A1A1A] border border-[#262626]" placeholder="Enter your Password  " />
            </div>
            <div className="flex flex-col gap-[29px] items-center">
                <h1 className="text-white text-[30px] ">Forgot Password?</h1>
                <div className="flex flex-col items-center gap-[20px]">
                    <button className="bg-[#CAFF33] text-[30px] lg:w-[518px] w-[300px] rounded-full ">Login</button>
                    <button className="bg-[#262626] text-[30px] lg:w-[518px] w-[300px] rounded-full border border-[#333333]">SignUp</button>
                </div>
                <img src={img24} alt="" />
            </div>
        </section>


        <section className='w-[90%] m-auto text-[white] flex items-center mt-[70px]'>
            <div className='lg:w-[900px]'>
                <h1 className='font-black text-[40px] text-white'>Our <span className='text-[#CAFF33] '>Products</span></h1>
                <p className='text-[20px]'>Discover a range of comprehensive and customizable banking products at YourBank, designed to suit your unique financial needs and aspirations</p>
            </div>
            <div className='w-[386px] hidden bg-[#1C1C1C] border lg:flex p-[10px] items-center gap-[20px] border-[#262626] rounded-full '>
                <Button name="For Individuals" />
                <h1 className='font-semibold text-[gray] '>For Businesses</h1>
            </div>

        </section>


        <section className='overflow-x-scroll flex gap-[50px]'>
            <Card5 des="I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable." name="John D" />
            <Card5 des="I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable." name="John D" />
            <Card5 des="I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable." name="John D" />
            <Card5 des="I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable." name="John D" />
        </section>

    </>)
}
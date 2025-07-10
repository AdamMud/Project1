import img10 from '../../assets/Container (2).png'
import img11 from '../../assets/Container (3).png'
import { Card4 } from '../home/home'
import img3 from '../../assets/Icon Container.png'
import img4 from '../../assets/Icon Container (1).png'
import img5 from '../../assets/Icon Container (2).png'


export default function Career() {




    return (<>

        <section className='w-[90%] m-auto'>
            <img className='hidden lg:block' src={img10} alt="" />
            <img className='block lg:hidden' src={img11} alt="" />
        </section>

        <section className='w-[90%] m-auto text-white mt-[100px]'>
            <div>
                <h1 className='font-bold text-[40px] '>Our <span className='text-[#CAFF33]'> Values</span></h1>
                <p className='text-gray-500'>At YourBank, our values form the foundation of our organization and guide our actions. We believe in upholding the highest standards of integrity, delivering exceptional service, and embracing innovation. These values define our culture and shape the way we work together to achieve our goals.</p>
            </div>
            <div className='flex flex-wrap gap-[20px] mt-[100px]'>
                <Card6 name="Integrity" des="We conduct ourselves with utmost honesty, transparency, and ethical behavior. We believe in doing what is right for our customers, colleagues, and stakeholders, even when faced with difficult choices." />
                <Card6 name="Integrity" des="We conduct ourselves with utmost honesty, transparency, and ethical behavior. We believe in doing what is right for our customers, colleagues, and stakeholders, even when faced with difficult choices." />
                <Card6 name="Integrity" des="We conduct ourselves with utmost honesty, transparency, and ethical behavior. We believe in doing what is right for our customers, colleagues, and stakeholders, even when faced with difficult choices." />
                <Card6 name="Integrity" des="We conduct ourselves with utmost honesty, transparency, and ethical behavior. We believe in doing what is right for our customers, colleagues, and stakeholders, even when faced with difficult choices." />
            </div>
        </section>

        <section className='w-[90%] m-auto text-white mt-[100px]'>
            <div>
                <h1 className='font-bold text-[40px] '>Our <span className='text-[#CAFF33]'> Benefits</span></h1>
                <p className='text-gray-500'>At YourBank, our values form the foundation of our organization and guide our actions. We believe in upholding the highest standards of integrity, delivering exceptional service, and embracing innovation. These values define our culture and shape the way we work together to achieve our goals.</p>
            </div>
            <div className='flex flex-wrap gap-[20px]'>
                <Card7 img={img3} name="Competitive Compensation" des="We provide a competitive salary package that recognizes the skills and expertise of our employees. YourBank believes in rewarding exceptional performance and offering opportunities for financial growth." />
                <Card7 img={img4} name="Competitive Compensation" des="We provide a competitive salary package that recognizes the skills and expertise of our employees. YourBank believes in rewarding exceptional performance and offering opportunities for financial growth." />
                <Card7 img={img3} name="Competitive Compensation" des="We provide a competitive salary package that recognizes the skills and expertise of our employees. YourBank believes in rewarding exceptional performance and offering opportunities for financial growth." />
                <Card7 img={img5} name="Competitive Compensation" des="We provide a competitive salary package that recognizes the skills and expertise of our employees. YourBank believes in rewarding exceptional performance and offering opportunities for financial growth." />
            </div>
        </section>

        <section className='w-[90%] m-auto mt-[60px]'>
            <div>
                <h1 className='font-bold text-[40px] text-[#CAFF33]'>Job Openings </h1>
                <p className='text-gray-500'>At YourBank, our values form the foundation of our organization and guide our actions. We believe in upholding the highest standards of integrity, delivering exceptional service, and embracing innovation. These values define our culture and shape the way we work together to achieve our goals.</p>
            </div>
        </section>


        <section className='w-[90%] m-auto text-white mt-[50px]'>
            <div>
                <h1 className='font-bold text-[40px]'> <span className='text-[#CAFF33]'> Frequently</span> Asked Questions</h1>
                <p className='text-gray-500'>Still you have any questions? Contact our Team via support@yourbank.com</p>
            </div>
            <div className='flex flex-wrap gap-[20px]'>
                <Card4 name="How do I open an account with YourBank?" des="Opening an account with YourBank is easy. Simply visit our website and click on the Open an Account button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help." />
                <Card4 name="How do I open an account with YourBank?" des="Opening an account with YourBank is easy. Simply visit our website and click on the Open an Account button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help." />
                <Card4 name="How do I open an account with YourBank?" des="Opening an account with YourBank is easy. Simply visit our website and click on the Open an Account button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help." />
                <Card4 name="How do I open an account with YourBank?" des="Opening an account with YourBank is easy. Simply visit our website and click on the Open an Account button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help." />
            </div>
        </section>

     

    </>)
}


function Card6(props) {
    return (
        <div className='border-l border-[#CAFF33] lg:w-[668px] p-[20px]'>
            <h1 className='font-bold text-[50px] text-[#4C4C4D]'>{props.name}</h1>
            <p className='text-gray-500'>{props.des}</p>
        </div>
    )
}


export function Card7(props) {
    return (
        <div className='lg:w-[670px] lg:p-[40px] p-[10px] flex flex-col gap-[20px] lg:h-[272px] rounded-[10px] bg-[#1C1C1C]'>
            <div className='flex items-center gap-[20px]'>
                <img src={props.img} alt="" />
                <h1 className='text-[white] text-[30px] font-bold'>{props.name}</h1>
            </div>
            <p className='text-gray-500'>{props.des}</p>
        </div>
    )
}



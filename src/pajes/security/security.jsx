import img21 from '../../assets/Container (7).png'
import img22 from '../../assets/Container (8).png'
import { Card7 } from '../career/career'
import img3 from '../../assets/Icon Container.png'
import img4 from '../../assets/Icon Container (1).png'
import img5 from '../../assets/Icon Container (2).png'
import { Card4 } from '../home/home'

export default function Security() {
    return (<>

        <section className='w-[90%] m-auto'>
            <img className='hidden lg:block' src={img21} alt="" />
            <img className='block lg:hidden' src={img22} alt="" />
        </section>

        <section className='w-[90%] m-auto text-white mt-[100px]'>
            <div>
                <h1 className='font-bold text-[40px] '>How We <span className='text-[#CAFF33]'>  Protect You</span></h1>
                <p className='text-gray-500'>At YourBank, our values form the foundation of our organization and guide our actions. We believe in upholding the highest standards of integrity, delivering exceptional service, and embracing innovation. These values define our culture and shape the way we work together to achieve our goals.</p>
            </div>
            <div className='flex flex-wrap gap-[20px]'>
                <Card7 img={img3} name="Competitive Compensation" des="We provide a competitive salary package that recognizes the skills and expertise of our employees. YourBank believes in rewarding exceptional performance and offering opportunities for financial growth." />
                <Card7 img={img4} name="Competitive Compensation" des="We provide a competitive salary package that recognizes the skills and expertise of our employees. YourBank believes in rewarding exceptional performance and offering opportunities for financial growth." />
                <Card7 img={img3} name="Competitive Compensation" des="We provide a competitive salary package that recognizes the skills and expertise of our employees. YourBank believes in rewarding exceptional performance and offering opportunities for financial growth." />
                <Card7 img={img5} name="Competitive Compensation" des="We provide a competitive salary package that recognizes the skills and expertise of our employees. YourBank believes in rewarding exceptional performance and offering opportunities for financial growth." />
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
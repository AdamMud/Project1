import img2 from '../../assets/Container (1).png'
import img3 from '../../assets/Icon Container.png'
import img4 from '../../assets/Icon Container (1).png'
import img5 from '../../assets/Icon Container (2).png'
import img6 from '../../assets/Sub Container.png'
import img7 from '../../assets/Sub Container (1).png'
import img8 from '../../assets/Icon (2).png'

export default function Home() {
    return (<>

        <section className="text-white flex-col lg:flex-row flex w-[90%] m-auto items-center mt-[100px]">
            <aside className="lg:w-[759px] flex flex-col text-center lg:text-start m-auto gap-[20px] items-start">
                <button className="px-[30px] py-[10px] bg-[#262626] rounded-full">No LLC Required, No Credit Check.</button>
                <h1 className="font-black text-[50px]">Welcome to YourBank Empowering Your <span className="text-[#CAFF33]"> Financial Journey</span></h1>
                <p>At YourBank, our mission is to provide comprehensive banking solutions that empower individuals and businesses to achieve their financial goals. We are committed to delivering personalized and innovative services that prioritize our customers' needs.</p>
                <Button name="Open Account" />
            </aside>
            <img src={img2} alt="" />
        </section>

        <section className='text-white w-[90%] m-auto'>
            <div className='flex items-center w-[90%] m-auto justify-between'>

                <div className='lg:w-[900px]'>
                    <h1 className='font-black text-[40px] text-white'>Our <span className='text-[#CAFF33] '>Products</span></h1>
                    <p className='text-[20px]'>Discover a range of comprehensive and customizable banking products at YourBank, designed to suit your unique financial needs and aspirations</p>
                </div>
                <div className='w-[386px] hidden bg-[#1C1C1C] border lg:flex p-[10px] items-center gap-[20px] border-[#262626] rounded-full '>
                    <Button name="For Individuals" />
                    <h1 className='font-semibold text-[gray] '>For Businesses</h1>
                </div>
            </div>
            <div className='flex  flex-col lg:flex-row mt-[20px]'>
                <Card1 img={img3} name="Checking Accounts" des="Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access." />
                <Card1 img={img4} name="Checking Accounts" des="Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access." />
                <Card1 img={img5} name="Checking Accounts" des="Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access." />
            </div>
        </section>

        <section className='w-[90%] flex flex-col gap-[50px] m-auto mt-[70px] text-white'>
            <div className='text-center lg:text-start'>
                <h1 className='text-[50px] font-black text-[#CAFF33] '>Use Cases</h1>
                <p className='text-gray-500'>At YourBank, we cater to the diverse needs of individuals and businesses alike, offering a wide range of financial solutions</p>
            </div>
            <div className='flex-col lg:flex-row flex justify-between gap-[40px]'>
                <img src={img6} alt="" />
                <aside className='flex flex-col gap-[20px]'>
                    <h1 className='text-[40px] font-black '>For Individuals</h1>
                    <p className='text-gray-500'>For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans provide vital support during various life milestones. We also prioritize retirement planning, ensuring a financially secure future for our customers</p>
                    <div className='flex flex-col lg:flex-row text-center lg:text-start m-auto justify-around'>
                        <Card2 number="78" des="Secure Retirement Planning" />
                        <Card2 number="78" des="Secure Retirement Planning" />
                        <Card2 number="78" des="Secure Retirement Planning" />
                    </div>
                    <Button2 name="Learn More" />
                </aside>
            </div>
            <div className='flex-col lg:flex-row flex justify-between gap-[40px]'>
                <aside className='flex flex-col gap-[20px]'>
                    <h1 className='text-[40px] font-black '>For Individuals</h1>
                    <p className='text-gray-500'>For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans provide vital support during various life milestones. We also prioritize retirement planning, ensuring a financially secure future for our customers</p>
                    <div className='flex flex-col lg:flex-row text-center lg:text-start m-auto justify-around'>
                        <Card2 number="78" des="Secure Retirement Planning" />
                        <Card2 number="78" des="Secure Retirement Planning" />
                        <Card2 number="78" des="Secure Retirement Planning" />
                    </div>
                    <Button2 name="Learn More" />
                </aside>
                <img src={img6} alt="" />

            </div>
        </section>


        <section className='text-white w-[90%] m-auto mt-[50px]'>
            <div>

                <h1 className='font-bold text-[40px]'>Our <span className='text-[#CAFF33]'> Features</span></h1>
                <p className='text-gray-500'>Experience a host of powerful features at YourBank, including seamless online banking, secure transactions, and personalized financial insights, all designed to enhance your banking experience</p>
            </div>
            <div className='flex-col lg:flex-row flex items-start gap-[20px]'>
                <img src={img7} alt="" />
                <aside className='flex flex-wrap gap-[20px]'>
                    <Card3 name="24/7 Account Access" des="Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease." />
                    <Card3 name="24/7 Account Access" des="Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease." />
                    <Card3 name="24/7 Account Access" des="Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease." />
                    <Card3 name="24/7 Account Access" des="Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease." />
                </aside>
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




export function Button(props) {
    return (
        <button className="bg-[#CAFF33] rounded-full text-[20px] px-[20px] py-[10px] text-black">{props.name}</button>
    )
}

export function Card1(props) {
    return (
        <div className='flex flex-col gap-[20px] lg:w-[465px]  items-center text-center'>
            <img src={props.img} alt="" />
            <h1 className='text-white text-[30px]'>{props.name}</h1>
            <p className='text-[gray] text-[20px]'>{props.des}</p>
        </div>
    )
}

function Card2(props) {
    return (
        <div className='w-[182px] h-[146px]'>
            <h1 className='text-[#CAFF33] font-bold text-[40px]'>{props.number}%</h1>
            <p className='text-[20px] text-gray-500'>{props.des}</p>
        </div>
    )
}


function Button2(props) {
    return (
        <button className='w-[148px] h-[63px] rounded-full border border-[#262626] bg-[#1C1C1C] '>{props.name}</button>
    )
}


export function Card3(props) {
    return (
        <div className='lg:w-[500px] lg:p-[40px] p-[10px] flex flex-col gap-[20px] lg:h-[272px] rounded-[10px] bg-[#1C1C1C]'>
            <div className='flex items-center'>
                <img src={props.img} alt="" />
                <h1 className='text-[white] text-[30px] font-bold'>{props.name}</h1>
            </div>
            <p className='text-gray-500'>{props.des}</p>
        </div>
    )
}


export function Card4(props) {
    return (
        <div className='lg:w-[652px] flex flex-col p-[10px] gap-[30px] lg:h-[347px]  lg:p-[30px] rounded-[10px] border border-[#262626] bg-[#1C1C1C]'>
            <h1 className='border-b py-[30px] font-bold text-[30px] '>{props.name}</h1>
            <p>{props.des}</p>
        </div>
    )
}



export function Card5(props) {
    return (
        <div className='w-[400px] h-[332px] text-center text-white flex flex-col justify-around items-center shrink-0'>
            <img src={img8} alt="" />
            <h2 className='text-[20px] '>{props.des}</h2>
            <h1 className='font-semibold text-[#CAFF33]'>{props.name}</h1>
        </div>
    )
}
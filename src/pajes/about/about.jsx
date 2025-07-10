import img12 from '../../assets/Container (5).png'
import img13 from '../../assets/Container (6).png'
import img14 from '../../assets/Image Container.png'
import img15 from '../../assets/Image Container (1).png'
import { useReducer } from 'react'
import img17 from '../../assets/Image (17).png'
import img18 from '../../assets/Image (18).png'
import img19 from '../../assets/Image (19).png'
import img20 from '../../assets/Image (20).png'

export default function About() {

    function Crud(state, action) {
        if(action.type=="delete"){
            return state=state.filter((e)=>e.id!=action.id)
        }
        return state
    }

    let [data, dispatch] = useReducer(Crud, [
        { img: img17, id: 1, name: "YourBank Launches New Rewards Program to Enhance Customer Loyalty and Satisfaction", des: "YourBank is pleased to announce the introduction of our new Rewards Program, aimed at rewarding our loyal customers and enhancing their banking experience. The program offers exclusive benefits, discounts, and personalized offers tailored to individual customer preferences. With this initiative, YourBank reaffirms its commitment to delivering exceptional value and building lasting relationships with our valued customers." },
        { img: img18, id: 2, name: "YourBank Launches New Rewards Program to Enhance Customer Loyalty and Satisfaction", des: "YourBank is pleased to announce the introduction of our new Rewards Program, aimed at rewarding our loyal customers and enhancing their banking experience. The program offers exclusive benefits, discounts, and personalized offers tailored to individual customer preferences. With this initiative, YourBank reaffirms its commitment to delivering exceptional value and building lasting relationships with our valued customers." },
        { img: img19, id: 3, name: "YourBank Launches New Rewards Program to Enhance Customer Loyalty and Satisfaction", des: "YourBank is pleased to announce the introduction of our new Rewards Program, aimed at rewarding our loyal customers and enhancing their banking experience. The program offers exclusive benefits, discounts, and personalized offers tailored to individual customer preferences. With this initiative, YourBank reaffirms its commitment to delivering exceptional value and building lasting relationships with our valued customers." },
        { img: img20, id: 4, name: "YourBank Launches New Rewards Program to Enhance Customer Loyalty and Satisfaction", des: "YourBank is pleased to announce the introduction of our new Rewards Program, aimed at rewarding our loyal customers and enhancing their banking experience. The program offers exclusive benefits, discounts, and personalized offers tailored to individual customer preferences. With this initiative, YourBank reaffirms its commitment to delivering exceptional value and building lasting relationships with our valued customers." }
    ])





    return (<>

        <section className='w-[90%] m-auto'>
            <img className='hidden lg:block' src={img13} alt="" />
            <img className='block lg:hidden' src={img12} alt="" />
        </section>

        <section className='w-[90%] m-auto'>
            <div>
                <h1 className='font-bold text-[40px] text-[#CAFF33]'>Mission & Vision </h1>
                <p className='text-gray-500'>At YourBank, our values form the foundation of our organization and guide our actions. We believe in upholding the highest standards of integrity, delivering exceptional service, and embracing innovation. These values define our culture and shape the way we work together to achieve our goals.</p>
            </div>

            <div className='flex gap-[20px] items-center flex-col lg:flex-row' >
                <img src={img14} alt="" />
                <aside className='border-l border-[#CAFF33] p-[20px] text-white'>
                    <h1 className='font-bold text-[40px]'>Mission</h1>
                    <p className='text-gray-500'>At YourBank, our mission is to empower our customers to achieve financial success. We are dedicated to delivering innovative banking solutions that cater to their unique needs. Through personalized services, expert guidance, and cutting-edge technology, we aim to build strong, lasting relationships with our customers. Our mission is to be their trusted partner, helping them navigate their financial journey and realize their dreams.</p>
                </aside>
            </div>
            <div className='flex gap-[20px] items-center flex-col-reverse lg:flex-row' >
                <aside className='border-l border-[#CAFF33] p-[20px] text-white'>
                    <h1 className='font-bold text-[40px]'>Vision</h1>
                    <p className='text-gray-500'>At YourBank, our mission is to empower our customers to achieve financial success. We are dedicated to delivering innovative banking solutions that cater to their unique needs. Through personalized services, expert guidance, and cutting-edge technology, we aim to build strong, lasting relationships with our customers. Our mission is to be their trusted partner, helping them navigate their financial journey and realize their dreams.</p>
                </aside>
                <img src={img15} alt="" />
            </div>


        </section>



        <section className='w-[90%] m-auto'>
            <div>
                <h1 className='font-bold text-[40px] text-[#CAFF33]'>  Press Releases</h1>
                <p className='text-gray-500'>Stay updated with the latest happenings and exciting developments at YourBank through our press releases.</p>
            </div>
            <div className='flex flex-wrap gap-[20px] mt-[100px]'>{data.map((e) => {
                return (
                    <div key={e.id} className='lg:w-[633px] border border-[#262626] p-[40px] flex flex-col gap-[20px] text-white lg:h-[798px] rounded-[20px] bg-[#1C1C1C]'>
                        <img src={e.img} alt="" />
                        <div className='flex flex-col gap-[20px]'>
                            <h1 className='text-[30px] font-bold'>{e.name}</h1>
                            <div>
                                <button className='border border-[#262626] rounded-[10px] px-[10px]' onClick={()=>dispatch({type:"delete",id:e.id})}>Delete</button>
                                <button className='border border-[#262626] rounded-[10px] px-[10px]'>Date: 06/11/2024</button>
                            </div>
                            <p className='text-gray-500'>{e.des}</p>
                        </div>
                    </div>
                )
            })}</div>
        </section>


    </>)
}
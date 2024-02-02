import React from 'react';
import { motion } from "framer-motion";
import { fadeIn } from "../variants";


const Items = ({ item }) => {
    return (
        <div
            style={{
                background: "white",


            }}
            className="w-[340px] shad  h-[600px] border-x-2  "
        >
            <div className='p-[10px]'>
                <div
                    className="w-full h-[70%]"
                    style={{
                        backgroundImage: `url(${item.img})`,
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                    }}
                ></div>
                <div className="w-full bg-[orange] cursor-pointer  h-[30%] pt-[10px]">
                    <p
                        style={{
                            color: "#817D87",
                        }}
                        className="font-bold text-[22px]"
                    >
                        {item.name}
                    </p>
                    <div className='flex pt-[60px] items-center justify-center'>
                        <button className='w-[280px] h-[50px] bg-[red] '></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Items;
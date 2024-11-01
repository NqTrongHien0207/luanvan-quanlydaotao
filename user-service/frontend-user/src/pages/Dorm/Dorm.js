import React, { useState } from 'react';
import Navbar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import Content from '../../components/Content/Content';
import Toolip from '../../components/Toolip/Toolip';
import ListItem from '../../components/listItems/listItems';
import { AiOutlineMenu } from "react-icons/ai";

const Dorm = () => {
    const [isListVisible, setIsListVisible] = useState(false);
    const toggleListVisibility = () => {
        setIsListVisible(!isListVisible);
    };


    return (
        <div className="h-full">
            <Navbar />
            <Content>
                <div className="text-[6px] md:text-13">
                    <div className="">
                        <div className="bg-slate-100 rounded-sm">
                            <ul className="flex p-[10px]">
                                <span className="flex items-center text-13 mr-4 cursor-pointer" onClick={toggleListVisibility}>
                                    <AiOutlineMenu />
                                </span>
                                <li className="bg-blue-300 rounded-[3px] p-1 hover:bg-blue-300 cursor-pointer mr-1 px-[6px] flex items-center">
                                    <ListItem title="Trạng thái phòng ktx" link="#" />
                                </li>
                                <li
                                    className={`bg-gray-200 rounded-[3px] p-1 hover:bg-blue-300 cursor-pointer mr-1 px-[6px] flex items-center transition-opacity duration-500 ${isListVisible ? "opacity-100" : "opacity-0"}`}
                                >
                                    <ListItem title="Đăng ký ktx" link="#" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Content>
            <Footer />
            <div className=''>
                <Toolip />
            </div>
        </div>
    );
};

export default Dorm;

import React from 'react';
import Navbar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import Content from '../../components/Content/Content';
import { IoIosWarning } from "react-icons/io";
// import ScrollToTop from '../../components/scrollToTop/scrollToTop';
// import BackToHome from '../../components/backToHome/backToHome';
import Toolip from '../../components/Toolip/Toolip';

const StudyPlan = () => {
    const courseData = [
        { id: 1, year: '2020-2021', semester: '1', allowedCredits: 10, enteredCredits: '', improvement: '', note: '' },
        { id: 2, year: '2020-2021', semester: '2', allowedCredits: 18, enteredCredits: '', improvement: '', note: '' },
        { id: 3, year: '2020-2021', semester: 'Hè', allowedCredits: 8, enteredCredits: '', improvement: '', note: '' },
        { id: 4, year: '2021-2022', semester: '1', allowedCredits: 14, enteredCredits: '', improvement: '', note: '' },
        { id: 5, year: '2021-2022', semester: '2', allowedCredits: 15, enteredCredits: '', improvement: '', note: '' },
        { id: 6, year: '2021-2022', semester: 'Hè', allowedCredits: 2, enteredCredits: '', improvement: '', note: '' },
        { id: 7, year: '2022-2023', semester: '1', allowedCredits: 15, enteredCredits: '', improvement: '', note: '' },
        { id: 8, year: '2022-2023', semester: '1', allowedCredits: 15, enteredCredits: '', improvement: '', note: '' },
        { id: 9, year: '2022-2023', semester: '1', allowedCredits: 15, enteredCredits: '', improvement: '', note: '' },
        { id: 10, year: '2022-2023', semester: '1', allowedCredits: 15, enteredCredits: '', improvement: '', note: '' },
        { id: 11, year: '2022-2023', semester: '1', allowedCredits: 15, enteredCredits: '', improvement: '', note: '' },
        { id: 12, year: '2022-2023', semester: '1', allowedCredits: 15, enteredCredits: '', improvement: '', note: '' },
        { id: 13, year: '2022-2023', semester: '1', allowedCredits: 15, enteredCredits: '', improvement: '', note: '' },
        { id: 14, year: '2022-2023', semester: '1', allowedCredits: 15, enteredCredits: '', improvement: '', note: '' },
        { id: 15, year: '2022-2023', semester: '1', allowedCredits: 15, enteredCredits: '', improvement: '', note: '' },
        { id: 16, year: '2022-2023', semester: '1', allowedCredits: 15, enteredCredits: '', improvement: '', note: '' },
        { id: 17, year: '2022-2023', semester: '1', allowedCredits: 15, enteredCredits: '', improvement: '', note: '' },
        { id: 18, year: '2022-2023', semester: '1', allowedCredits: 15, enteredCredits: '', improvement: '', note: '' },
        { id: 19, year: '2022-2023', semester: '1', allowedCredits: 15, enteredCredits: '', improvement: '', note: '' },
        { id: 20, year: '2022-2023', semester: '1', allowedCredits: 15, enteredCredits: '', improvement: '', note: '' },
        { id: 21, year: '2022-2023', semester: '1', allowedCredits: 15, enteredCredits: '', improvement: '', note: '' },
        { id: 22, year: '2022-2023', semester: '1', allowedCredits: 15, enteredCredits: '', improvement: '', note: '' },
        { id: 23, year: '2022-2023', semester: '1', allowedCredits: 15, enteredCredits: '', improvement: '', note: '' },
        { id: 24, year: '2022-2023', semester: '1', allowedCredits: 15, enteredCredits: '', improvement: '', note: '' },
        { id: 25, year: '2022-2023', semester: '1', allowedCredits: 15, enteredCredits: '', improvement: '', note: '' },
        { id: 26, year: '2022-2023', semester: '1', allowedCredits: 15, enteredCredits: '', improvement: '', note: '' },
        { id: 27, year: '2022-2023', semester: '1', allowedCredits: 15, enteredCredits: '', improvement: '', note: '' },
        { id: 28, year: '2022-2023', semester: '1', allowedCredits: 15, enteredCredits: '', improvement: '', note: '' },
        { id: 29, year: '2022-2023', semester: '1', allowedCredits: 15, enteredCredits: '', improvement: '', note: '' },
        { id: 30, year: '2022-2023', semester: '1', allowedCredits: 15, enteredCredits: '', improvement: '', note: '' },
        { id: 31, year: '2022-2023', semester: '1', allowedCredits: 15, enteredCredits: '', improvement: '', note: '' },
        { id: 32, year: '2022-2023', semester: '1', allowedCredits: 15, enteredCredits: '', improvement: '', note: '' },
        { id: 33, year: '2022-2023', semester: '1', allowedCredits: 15, enteredCredits: '', improvement: '', note: '' },
        { id: 34, year: '2022-2023', semester: '1', allowedCredits: 15, enteredCredits: '', improvement: '', note: '' },
        { id: 35, year: '2022-2023', semester: '1', allowedCredits: 15, enteredCredits: '', improvement: '', note: '' },
        { id: 36, year: '2022-2023', semester: '1', allowedCredits: 15, enteredCredits: '', improvement: '', note: '' },
    ];

    const ListItem = ({ title, icon, link }) => {
        return (
            <a href={link}>

                <span>{title}</span>
            </a>
        );
    };
    return (
        
        <div className='h-full' >
            <Navbar />
            <Content>
                <div className='text-[7px]  md:text-13 pb-1 ' >
                    <div>
                        <ul className='flex p-4'>
                            <li className='bg-gray-200 p-1 hover:bg-blue-200 cursor-pointer mr-1' >
                                <ListItem title='Xem KHHT toàn khóa' link='http://localhost:3000/studyplan' />
                            </li>
                            <li className='bg-gray-200 p-1 hover:bg-blue-200 cursor-pointer mr-1 hidden ' >
                                <ListItem title='Thêm học phần vào KHHT' link='http://localhost:3000/studyplan' />
                            </li>
                            <li className='bg-gray-200 p-1 hover:bg-blue-200 cursor-pointer hidden' >
                                <ListItem title='Cập nhật KHHT' link='http://localhost:3000/studyplan' />
                            </li>
                        </ul>
                    </div>
                    <p className='flex items-center text-red-500 pl-4' >
                        <IoIosWarning className='mr-1' />
                        Đã hết thời gian chỉnh sửa kế hoạch học tập
                    </p>
                    <div className="m-4 p-4 border-solid border-gray-200 border-1 bg-slate-100 ">
                        <h1 className="text-md font-bold mb-4 text-center">THÔNG TIN KẾ HOẠCH HỌC TẬP</h1>
                        <p className="mb-2 text-center">Tính đến học kỳ hè năm học 2023-2024: Đã tích lũy 131 tín chỉ</p>
                        <table className="min-w-full bg-white border border-gray-200">
                            <thead  >
                                <tr className="bg-gray-200">
                                    <th className="border text-center">Stt</th>
                                    <th className="border text-center">Năm học</th>
                                    <th className="border text-center">Học kỳ</th>
                                    <th className="border text-center">Số tín chỉ cho phép</th>
                                    <th className="border text-center">Số tín chỉ đã nhập</th>
                                    <th className="border text-center">Cải thiện</th>
                                    <th className="border text-center">Ghi chú</th>
                                </tr>
                            </thead>
                            <tbody>
                                {courseData.map(course => (
                                    <tr key={course.id} className=" odd:bg-gray-100 even:bg-slate-200 ">
                                        <td className="border text-center">{course.id}</td>
                                        <td className="border text-center">{course.year}</td>
                                        <td className="border text-center">{course.semester}</td>
                                        <td className="border text-center">{course.allowedCredits}</td>
                                        <td className="border text-center">{course.enteredCredits}</td>
                                        <td className="border text-center">{course.improvement}</td>
                                        <td className="border text-center">{course.note}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </Content>
            <Footer />
            {/* <div className='fixed bottom-10 right-10 -mb-6'>
                <ScrollToTop/>
                <BackToHome/>
            </div> */}
            <div className='' >
                <Toolip/>
            </div>
        </div>
    );
};

export default StudyPlan;
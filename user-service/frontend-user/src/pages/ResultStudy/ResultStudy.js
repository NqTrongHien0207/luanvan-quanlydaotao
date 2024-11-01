import React, { useState } from 'react';
import Navbar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import Content from '../../components/Content/Content';
import Toolip from '../../components/Toolip/Toolip';
import ListItem from '../../components/listItems/listItems';
import { AiOutlineMenu } from "react-icons/ai";

const ResultStudy = () => {
    const [isListVisible, setIsListVisible] = useState(false);
    const [semester, setSemester] = useState('');
    const [year, setYear] = useState('');

    const toggleListVisibility = () => {
        setIsListVisible(!isListVisible);
    };

    const handleSemesterChange = (e) => {
        setSemester(e.target.value);
    };

    const handleYearChange = (e) => {
        setYear(e.target.value);
    };

    const handleSubmit = () => {
        alert(`Học kỳ: ${semester}, Năm học: ${year}`);
        // Xử lý logic gửi dữ liệu nếu cần
    };

    const subjectData = [
        { maHP: 'CT101', nhom: '02', tenHP: 'Lập trình căn bản A', giangVien: 'Nguyễn Văn A (nva@gmail.com)' },
        { maHP: 'CT201', nhom: '04', tenHP: 'Toán rời rạc', giangVien: 'Nguyễn Văn E (nve@gmail.com)' },
        { maHP: 'CT301', nhom: '05', tenHP: 'Vi tích phân', giangVien: 'Nguyễn Văn D (nvd@gmail.com)' },
        { maHP: 'TN02', nhom: '07', tenHP: 'Xác suất thống kê', giangVien: 'Nguyễn Văn C (nvc@gmail.com)' },
        { maHP: 'CT225', nhom: '02', tenHP: 'Nhập môn lập trình web', giangVien: 'Nguyễn Văn B (nvb@gmail.com)' }
    ];

    const tuitionData = [
        { id: 1, maHP: 'CT201', tenHP: 'Toán rời rạc', dieukien: '', diemchu: '', diemso: '', tichluy: '' },
        { id: 2, maHP: 'CT101', tenHP: 'Lập trình căn bản A', dieukien: '', diemchu: '', diemso: '', tichluy: '' },
        { id: 3, maHP: 'CT301', tenHP: 'Vi tích phân', dieukien: '', diemchu: '', diemso: '', tichluy: '' },
        { id: 4, maHP: 'TN02', tenHP: 'Xác suất thống kê', dieukien: '', diemchu: '', diemso: '', tichluy: '' },
        { id: 5, maHP: 'CT225', tenHP: 'Nhập môn lập trình web', dieukien: '', diemchu: '', diemso: '', tichluy: '' },
    ];


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
                                    <ListItem title="Kết quả học tập" link="#" />
                                </li>
                                <li
                                    className={`bg-gray-200 rounded-[3px] p-1 hover:bg-blue-300 cursor-pointer mr-1 px-[6px] flex items-center transition-opacity duration-500 ${isListVisible ? "opacity-100" : "opacity-0"}`}
                                >
                                    <ListItem title="In bảng điểm cá nhân" link="#" />
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='m-5'>
                        <div className="bg-slate-200 p-2 rounded-md flex flex-col">
                            <div className='flex justify-center items-center py-2'>
                                <div className="border-solid border-gray-200 border-1 text-7 mx-1 mr-4 xl:mr-7 md:mr-8 xl:text-13">
                                    <h1 className='text-10 font-bold text-center m-1 mb-2 xl:text-20'>Bảng điểm</h1>
                                    <div className='flex items-center justify-center'>
                                        <div className='text-center mx-2'>
                                            <label className="block text-8 font-medium xl:text-12 text-gray-500">Chọn học kỳ:</label>
                                            <select
                                                value={semester}
                                                onChange={handleSemesterChange}
                                                className="mt-1 p-2 border border-gray-300 rounded-md"
                                            >
                                                <option value="">Chọn học kỳ</option>
                                                <option value="1">Học kỳ 1</option>
                                                <option value="2">Học kỳ 2</option>
                                                <option value="3">Học kỳ 3</option>
                                            </select>
                                        </div>
                                        <div className='text-center'>
                                            <label className="block text-8 font-medium xl:text-12 text-gray-500">Chọn năm học:</label>
                                            <select
                                                value={year}
                                                onChange={handleYearChange}
                                                className="mt-1 p-2 border border-gray-300 rounded-md"
                                            >
                                                <option value="">Chọn năm học</option>
                                                <option value="2023-2024">2023-2024</option>
                                                <option value="2024-2025">2024-2025</option>
                                                <option value="2025-2026">2025-2026</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='flex justify-center mt-3'>
                                        <button
                                            onClick={handleSubmit}
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                        >
                                            Xác nhận
                                        </button>
                                    </div>
                                </div>

                                <div className='w-[70%] flex flex-col justify-center items-center'>
                                    <h1 className="text-10 xl:text-16 lg:text-[15px] md:text-[14px] sm:text-[14px] font-bold pt-1 pb-2 flex justify-center items-center">
                                        Thông tin học phần
                                    </h1>
                                    <table className="min-w-full bg-white border border-gray-200">
                                        <thead>
                                            <tr className='border border-zinc-500 bg-gray-300'>
                                                <th className="border border-zinc-500 px-2 xl:py-[2px] w-[16%]">Mã HP</th>
                                                <th className="border border-zinc-500 px-2">Nhóm</th>
                                                <th className="border border-zinc-500 px-2">Tên HP</th>
                                                <th className="border border-zinc-500 px-2">Giảng viên</th>
                                            </tr>
                                        </thead>
                                        <tbody className='border border-zinc-500'>
                                            {subjectData.map((course, index) => (
                                                <tr key={index} className='border border-zinc-500'>
                                                    <td className='border text-center border-zinc-500 xl:py-[2px]'>{course.maHP}</td>
                                                    <td className='border text-center border-zinc-500'>{course.nhom}</td>
                                                    <td className='border border-zinc-500 px-1 xl:px-[7px]'>{course.tenHP}</td>
                                                    <td className='border border-zinc-500 px-1 xl:px-[7px]'>{course.giangVien}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        {/* Bảng điểm */}
                        <div className='w-full p-2 text-center text-10 font-bold text-indigo-600 xl:text-16'>Bảng điểm</div>
                        <div className='w-full bg-slate-200 rounded-md'>
                            <div className='p-3 rounded-md'>
                                <table className="min-w-full border border-gray-200">
                                    <thead>
                                        <tr className='bg-gray-300'>
                                            <th className="border border-gray-400 px-2 py-[3px] xl:p-2 lg:p-2 md:p-2">STT</th>
                                            <th className="border border-gray-400 px-2 py-[3px] xl:p-2 lg:p-2 md:p-2">Mã HP</th>
                                            <th className="border border-gray-400 px-2">Tên HP</th>
                                            <th className="border border-gray-400 px-2">Điều kiện</th>
                                            <th className="border border-gray-400 px-2">Điểm chữ</th>
                                            <th className="border border-gray-400 px-2">Điểm số</th>
                                            <th className="border border-gray-400 px-2">Tích lũy</th>
                                        </tr>
                                    </thead>
                                    <tbody className='border border-zinc-500 bg-white'>
                                        {tuitionData.map((course, index) => (
                                            <tr key={index} className={`border border-zinc-500 ${index % 2 === 0 ? 'bg-slate-200' : 'bg-gray-50'}`}>
                                                <td className='border text-center border-zinc-500 xl:py-[2px]'>{course.id}</td>
                                                <td className='border text-center border-zinc-500'>{course.maHP}</td>
                                                <td className='border border-zinc-500 px-1 xl:px-[7px]'>{course.tenHP}</td>
                                                <td className='border border-zinc-500 px-1 xl:px-[7px] text-center'>{course.dieukien}</td>
                                                <td className='border border-zinc-500 px-1 xl:px-[7px] text-center'>{course.diemchu}</td>
                                                <td className='border border-zinc-500 px-1 xl:px-[7px] text-center'>{course.diemso}</td>
                                                <td className='border border-zinc-500 px-1 xl:px-[7px] text-center'>
                                                    {course.tichluy}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='bg-gray-100 border border-gray-300 my-1 grid grid-cols-4 p-3 ' >
                            <div className='col-span-2 grid grid-cols-2' >
                                <div className='col-span-1 leading-5'>
                                    <p>Tổng số tín chỉ đăng ký</p>
                                    <p>Tổng số tín chỉ tích lũy học kỳ</p>
                                    <p>Tổng số tín chỉ tích lũy</p>
                                </div>
                                <div className='col-span-1 leading-5'>
                                    <p>15</p>
                                    <p>15</p>
                                    <p>15</p>
                                </div>
                            </div>
                            <div className='col-span-2 grid grid-cols-2' >
                                <div className='col-span-1 leading-5'>
                                    <p>Tổng số tín chỉ đăng ký</p>
                                    <p>Tổng số tín chỉ tích lũy học kỳ</p>
                                    <p>Tổng số tín chỉ tích lũy</p>
                                </div>
                                <div className='col-span-1 leading-5'>
                                    <p>15</p>
                                    <p>15</p>
                                    <p>15</p>
                                </div>
                            </div>
                        </div>
                        <div className="border-solid border-gray-200 border-1  text-7 mx-1 xl:text-13 p-2  flex-1 xl:px-5 md:text-13 ">
                            <h1 className='text-10 font-bold text-center m-1 mb-2 xl:text-20 md:text-16'>Lưu ý</h1>
                            <div className=' flex items-center justify-center'>
                                <ol className='list-decimal text-justify  leading-[10px] xl:leading-4  md:leading-4 '  >
                                    <li className='mb-1' >
                                        <p>Nếu có sai sót các bạn vui lòng phản ánh
                                            về địa chỉ sau: <span className='text-red-600' >vantu@ctu.edu.vn</span> để kiểm tra.
                                        </p>
                                    </li>
                                    <li className='mb-1'>
                                        <p>Hệ thống sẽ xử lý điểm trung bình học kỳ 3, 2023-2024 (thời gian dự kiến hoàn thành ngày 29-30/7/2024).
                                            SV có thắc mắc về điểm học phần thì liên hệ GV dạy học phần để được giải đáp.
                                        </p>
                                    </li>
                                    <li className='mb-1'>
                                        <p className=''>
                                            Cách tính điểm trung bình xem tại đây
                                             [<a className='text-blue-600' href='https://bit.ly/tinhdiemtb' >https://bit.ly/tinhdiemtb</a>] .
                                        </p>
                                    </li>
                                    <li className='mb-1'>
                                        <p className='text-red-600' >
                                        Theo quy chế học vụ (<a className='text-blue-600' href='https://daa.ctu.edu.vn/images/upload/VanBan/QCHV_2021_QD1813.pdf' >xem tại đây</a>) từ học kỳ 1 năm học 2016-2017
                                         các học phần Giáo dục thể chất không tính vào điểm bình chung học kỳ.
                                        </p>
                                    </li>
                                   
                                </ol>
                            </div>
                            {/* Bảng ở đây */}
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

export default ResultStudy;

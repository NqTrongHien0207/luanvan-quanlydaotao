import React, { useState } from 'react';
import Navbar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import Content from '../../components/Content/Content';
import Toolip from '../../components/Toolip/Toolip';
import ListItem from '../../components/listItems/listItems';
import { AiOutlineMenu } from "react-icons/ai";
import { IoIosWarning } from "react-icons/io";

const RegisterCourse = () => {
    const [isListVisible, setIsListVisible] = useState(false);

    const toggleListVisibility = () => {
        setIsListVisible(!isListVisible);
    };

    const courseData = [
        {
            id: 1,
            subjects: [
                { khoa: 'Các chuyên ngành thuộc Khoa Khoa học chính trị; Viện nghiên cứu Phát triển ĐBSCL; Viện công nghệ sinh học và Thực phẩm; Khoa Giáo dục thể chất.' }
            ]
        },
        {
            id: 2,
            subjects: [
                { khoa: 'Các chuyên ngành thuộc Trường Công nghệ thông tin và truyền thông.' }
            ]
        },
        {
            id: 3,
            subjects: [
                { khoa: 'Các chuyên ngành thuộc Khoa Khoa học tự nhiên; ngành Kỹ thuật xây dựng, ngành Luật thuộc Khoa Phát triển nông thôn.' }
            ]
        },
        {
            id: 4,
            subjects: [
                { khoa: 'Các chuyên ngành còn lại thuộc Khoa Phát triển nông thôn (trừ các chuyên ngành ở nhóm 3).' }
            ]
        },
        {
            id: 5,
            subjects: [
                { khoa: 'Các chuyên ngành thuộc Khoa Luật.' }
            ]
        },
        {
            id: 6,
            subjects: [
                { khoa: 'Các chuyên ngành Kế toán; Tài chính - Ngân hàng; Quản trị kinh doanh và Kinh tế Nông nghiệp thuộc Trường Kinh tế.' }
            ]
        },
        {
            id: 7,
            subjects: [
                { khoa: 'Các chuyên ngành còn lại thuộc Trường Kinh tế (trừ các chuyên ngành ở nhóm 6).' }
            ]
        },
        {
            id: 8,
            subjects: [
                { khoa: 'Các chuyên ngành thuộc Khoa Môi trường và Tài nguyên thiên nhiên.' }
            ]
        },
        {
            id: 9,
            subjects: [
                { khoa: 'Các chuyên ngành Chăn nuôi, Thú y, Nông học, Khoa học đất, Quản lý đất và công nghệ phân bón thuộc Trường Nông nghiệp.' }
            ]
        },
        {
            id: 10,
            subjects: [
                { khoa: 'Các chuyên ngành còn lại thuộc Khoa Nông nghiệp (trừ các chuyên ngành ở nhóm 9).' }
            ]
        },
        {
            id: 11,
            subjects: [
                { khoa: 'Các chuyên ngành thuộc Trường Thủy sản.' }
            ]
        },
        {
            id: 12,
            subjects: [
                { khoa: 'Các chuyên ngành thuộc Khoa Khoa học Xã hội và Nhân văn; Khoa Ngoại ngữ.' }
            ]
        },
        {
            id: 13,
            subjects: [
                { khoa: 'Các chuyên ngành Sư phạm Toán, Sư phạm Vật lý, Sư phạm Hóa học, Sư phạm Địa lý thuộc Khoa Sư phạm.' }
            ]
        },
        {
            id: 14,
            subjects: [
                { khoa: 'Các chuyên ngành còn lại thuộc Khoa Sư phạm (trừ các chuyên ngành ở nhóm 13).' }
            ]
        },
        {
            id: 15,
            subjects: [
                { khoa: 'Các chuyên ngành Kỹ thuật máy tính, Kỹ thuật xây dựng công trình thủy, Kỹ thuật xây dựng, Kỹ thuật xây dựng công trình giao thông, Cơ khí chế tạo máy, Cơ khí chế biến, Cơ khí giao thông, Cơ khí ô tô thuộc Trường Bách Khoa.' }
            ]
        },
        {
            id: 16,
            subjects: [
                { khoa: 'Các chuyên ngành còn lại thuộc Trường Bách Khoa (trừ các chuyên ngành ở nhóm 15).' },

            ]
        },
        // Thêm các mục khác ở đây
    ];

    const courseDate = [
        {
            id: 1,
            khoa: 'Khóa 46 trở về trước',
            subjects: [
                {
                    date: '17/06/2024',
                    subject2: [
                        {
                            time: '07:30',
                            nhom: 8
                        },
                        {
                            time: '08:30',
                            nhom: 5
                        },
                        {
                            time: '09:30',
                            nhom: 3
                        },
                        {
                            time: '13:30',
                            nhom: 4
                        },
                        {
                            time: '14:30',
                            nhom: 6
                        },
                        {
                            time: '15:30',
                            nhom: 7
                        },
                    ]
                },
                {
                    date: '18/06/2024',
                    subject2: [
                        {
                            time: '07:30',
                            nhom: 15
                        },
                        {
                            time: '08:30',
                            nhom: 16
                        },
                        {
                            time: '09:30',
                            nhom: 1
                        },
                        {
                            time: '13:30',
                            nhom: 2
                        },
                        {
                            time: '14:30',
                            nhom: 14
                        },
                        {
                            time: '15:30',
                            nhom: 13
                        },
                    ]
                },
                {
                    date: '19/06/2024',
                    subject2: [
                        {
                            time: '07:30',
                            nhom: 10
                        },
                        {
                            time: '09:30',
                            nhom: 9
                        },
                        {
                            time: '13:30',
                            nhom: 11
                        },
                        {
                            time: '15:30',
                            nhom: 12
                        },
                    ]
                },
            ]
        },
        {
            id: 2,
            khoa: 'Khóa 47',
            subjects: [
                {
                    date: '20/06/2024',
                    subject2: [
                        {
                            time: '07:30',
                            nhom: 8
                        },
                        {
                            time: '08:30',
                            nhom: 5
                        },
                        {
                            time: '09:30',
                            nhom: 3
                        },
                        {
                            time: '13:30',
                            nhom: 4
                        },
                        {
                            time: '14:30',
                            nhom: 6
                        },
                        {
                            time: '15:30',
                            nhom: 7
                        },
                    ]
                },
                {
                    date: '21/06/2024',
                    subject2: [
                        {
                            time: '07:30',
                            nhom: 15
                        },
                        {
                            time: '08:30',
                            nhom: 16
                        },
                        {
                            time: '09:30',
                            nhom: 1
                        },
                        {
                            time: '13:30',
                            nhom: 2
                        },
                        {
                            time: '14:30',
                            nhom: 14
                        },
                        {
                            time: '15:30',
                            nhom: 13
                        },
                    ]
                },
                {
                    date: '22/06/2024',
                    subject2: [
                        {
                            time: '07:30',
                            nhom: 10
                        },
                        {
                            time: '09:30',
                            nhom: 9
                        },
                        {
                            time: '13:30',
                            nhom: 11
                        },
                        {
                            time: '15:30',
                            nhom: 12
                        },
                    ]
                },
            ]
        },
        {
            id: 3,
            khoa: 'Khóa 48',
            subjects: [
                {
                    date: '24/06/2024',
                    subject2: [
                        {
                            time: '07:30',
                            nhom: 8
                        },
                        {
                            time: '08:30',
                            nhom: 5
                        },
                        {
                            time: '09:30',
                            nhom: 3
                        },
                        {
                            time: '13:30',
                            nhom: 4
                        },
                        {
                            time: '14:30',
                            nhom: 6
                        },
                        {
                            time: '15:30',
                            nhom: 7
                        },
                    ]
                },
                {
                    date: '25/06/2024',
                    subject2: [
                        {
                            time: '07:30',
                            nhom: 15
                        },
                        {
                            time: '08:30',
                            nhom: 16
                        },
                        {
                            time: '09:30',
                            nhom: 1
                        },
                        {
                            time: '13:30',
                            nhom: 2
                        },
                        {
                            time: '14:30',
                            nhom: 14
                        },
                        {
                            time: '15:30',
                            nhom: 13
                        },
                    ]
                },
                {
                    date: '26/06/2024',
                    subject2: [
                        {
                            time: '07:30',
                            nhom: 10
                        },
                        {
                            time: '09:30',
                            nhom: 9
                        },
                        {
                            time: '13:30',
                            nhom: 11
                        },
                        {
                            time: '15:30',
                            nhom: 12
                        },
                    ]
                },
            ]
        },
        {
            id: 4,
            khoa: 'Khóa 49',
            subjects: [
                {
                    date: '27/06/2024',
                    subject2: [
                        {
                            time: '07:30',
                            nhom: 8
                        },
                        {
                            time: '08:30',
                            nhom: 5
                        },
                        {
                            time: '09:30',
                            nhom: 3
                        },
                        {
                            time: '13:30',
                            nhom: 4
                        },
                        {
                            time: '14:30',
                            nhom: 6
                        },
                        {
                            time: '15:30',
                            nhom: 7
                        },
                    ]
                },
                {
                    date: '28/06/2024',
                    subject2: [
                        {
                            time: '07:30',
                            nhom: 15
                        },
                        {
                            time: '08:30',
                            nhom: 16
                        },
                        {
                            time: '09:30',
                            nhom: 1
                        },
                        {
                            time: '13:30',
                            nhom: 2
                        },
                        {
                            time: '14:30',
                            nhom: 14
                        },
                        {
                            time: '15:30',
                            nhom: 13
                        },
                    ]
                },
                {
                    date: '29/06/2024',
                    subject2: [
                        {
                            time: '07:30',
                            nhom: 10
                        },
                        {
                            time: '09:30',
                            nhom: 9
                        },
                        {
                            time: '13:30',
                            nhom: 11
                        },
                        {
                            time: '15:30',
                            nhom: 12
                        },
                    ]
                },
            ]
        },
    ]

    return (
        <div className="h-full">
            <Navbar />
            <Content>
                <div className="text-[6px] md:text-13 pb-1">
                    <div className="">
                        <div className="bg-slate-100 rounded-sm">
                            <ul className="flex p-[10px]">
                                <span className="flex items-center text-13 mr-4 cursor-pointer " onClick={toggleListVisibility}>
                                    <AiOutlineMenu />
                                </span>
                                <li className="bg-blue-300 rounded-[3px] p-1 hover:bg-blue-300 cursor-pointer mr-1 px-[6px] flex items-center ">
                                    <ListItem title="Quy định đăng kí" link="#" />
                                </li>
                                <li
                                    className={`bg-gray-200 rounded-[3px] p-1 hover:bg-blue-300 cursor-pointer mr-1 px-[6px] flex items-center transition-opacity duration-500 ${isListVisible ? "opacity-100" : "opacity-0 "
                                        }`}
                                >
                                    <ListItem title="Danh mục học phần" link="#" />
                                </li>
                                <li
                                    className={`bg-gray-200 rounded-[3px] p-1 hover:bg-blue-300 cursor-pointer mr-1 px-[6px] hidden items-center transition-opacity duration-500 ${isListVisible ? "opacity-100" : "opacity-0 "
                                        }`}
                                >
                                    <ListItem title="Đăng kí học phần" link="#" />
                                </li>
                                <li
                                    className={`bg-gray-200 rounded-[3px] p-1 hover:bg-blue-300 cursor-pointer mr-1 px-[6px] flex items-center transition-opacity duration-500 ${isListVisible ? "opacity-100" : "opacity-0"
                                        }`}
                                >
                                    <ListItem title="Thời khóa biểu" link="#" />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <p className="flex items-center text-red-500 pl-4 mt-2">
                        <IoIosWarning className="mr-1" />
                        Đã hết thời gian đăng kí học phần
                    </p>
                    <div className="mx-4 my-2 p-4 border-solid border-gray-200 border-1 bg-slate-100 leading-3">
                        <div className="bg-slate-200 p-2 rounded-md mb-2">
                            <h1 className="text-10 xl:text-16 lg:text-[15px] md:text-[14px] sm:text-[14px] font-bold pt-1 pb-2 flex justify-center items-center">
                                <IoIosWarning className="mr-1" />
                                Các lưu ý quan trọng
                            </h1>
                            <ol className="list-disc ml-4 xl:leading-5 lg:leading-5 md:leading-5 ">
                                <li>Kiểm tra các học phần điều kiện</li>
                                <li>Số tín chỉ đăng kí trong một học kỳ không vượt quá 25 chỉ</li>
                                <li>Không được đăng kí các học phần trùng thời khóa biểu</li>
                                <li>Thông tin học phí và phương thức thanh toán nằm trong thời khóa biểu</li>
                            </ol>
                        </div>
                        <h1 className="text-md font-bold mb-[3px] text-center xl:m-6 xl:text-[18px] lg:m-6 lg:text-[16px] md:m-6 md:text-[16px] ">THỜI GIAN ĐĂNG KÍ ĐỢT 1 (1/1/2014 - 1/10/2024)</h1>
                        <table className="min-w-full bg-white border border-gray-200">
                            <thead>
                                <tr>
                                    <th className="border px-2 xl:p-3 lg:p-2 md:p-2  ">Nhóm</th>
                                    <th className="border xl:p-3 lg:p-2 md:p-2  ">Các khoa</th>
                                </tr>
                            </thead>
                            <tbody>
                                {courseData.map((course) => (
                                    <React.Fragment key={course.id}>
                                        {course.subjects.map((subject, index) => (
                                            <tr key={index} className="even:bg-gray-100 odd:bg-slate-200">
                                                {index === 0 && (
                                                    <td className="border px-1 text-center xl:p-2 " rowSpan={course.subjects.length}>
                                                        {course.id}
                                                    </td>
                                                )}
                                                <td className="border px-1 leading-3">{subject.khoa}</td>
                                            </tr>
                                        ))}
                                    </React.Fragment>
                                ))}
                            </tbody>
                        </table>
                        <h1 className="text-md font-bold m-2 text-center xl:m-6 xl:text-[18px] lg:m-6 lg:text-[16px] md:m-6 md:text-[16px] ">THỜI GIAN QUY ĐỊNH ĐĂNG KÍ HỌC PHẦN</h1>
                        <table className="min-w-full bg-white border border-gray-200">
                            <thead>
                                <tr>
                                    <th className="border border-gray-300 px-2 xl:p-3  lg:p-2 md:p-2">TT</th>
                                    <th className="border border-gray-300 px-2">Khóa</th>
                                    <th className="border border-gray-300 px-2">Ngày bắt đầu</th>
                                    <th className="border border-gray-300 px-2">Giờ bắt đầu</th>
                                    <th className="border border-gray-300 px-2">Nhóm</th>
                                </tr>
                            </thead>
                            <tbody>
                                {courseDate.map((course, courseIndex) => (
                                    <React.Fragment key={course.id}>
                                        {course.subjects.map((subject, subIndex) => (
                                            <React.Fragment key={subIndex}>
                                                {subject.subject2.map((item, index) => (
                                                    <tr key={index} className={courseIndex % 2 === 0 ? " bg-slate-200" : "bg-gray-100"}>
                                                        {index === 0 && subIndex === 0 && (
                                                            <>
                                                                <td className="border border-gray-300  px-1 text-center  xl:p-2 lg:p-1 md:p-1" rowSpan={course.subjects.reduce((acc, subject) => acc + subject.subject2.length, 0)}>
                                                                    {course.id}
                                                                </td>
                                                                <td className="border border-gray-300 px-1 font-bold text-center xl:p-2 lg:p-1 md:p-1" rowSpan={course.subjects.reduce((acc, subject) => acc + subject.subject2.length, 0)}>
                                                                    {course.khoa}
                                                                </td>
                                                            </>
                                                        )}
                                                        {index === 0 && (
                                                            <>
                                                                <td className="border border-gray-300 px-1 text-center xl:p-2 lg:p-1 md:p-1" rowSpan={subject.subject2.length}>
                                                                    {subject.date}
                                                                </td>
                                                            </>
                                                        )}
                                                        <td className="border border-gray-300 px-1  text-center xl:p-2 lg:p-1 md:p-1">{item.time}</td>
                                                        <td className="border border-gray-300  px-1 text-center">{item.nhom}</td>
                                                    </tr>
                                                ))}
                                            </React.Fragment>
                                        ))}
                                    </React.Fragment>
                                ))}
                            </tbody>




                        </table>
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

export default RegisterCourse;

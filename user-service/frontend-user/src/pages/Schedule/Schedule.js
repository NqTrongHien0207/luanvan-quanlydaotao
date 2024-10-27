import React, { useState } from 'react';
import Navbar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import Content from '../../components/Content/Content';
import Toolip from '../../components/Toolip/Toolip';
// import ListItem from '../../components/listItems/listItems';
// import { AiOutlineMenu } from "react-icons/ai";
// import { IoIosWarning } from "react-icons/io";

const Schedule = () => {
  // const [isListVisible, setIsListVisible] = useState(false);

  // const toggleListVisibility = () => {
  //   setIsListVisible(!isListVisible);
  // };


  const courseDate = [
    {
      thu: 2,
      subject: [
        {
          buoi: 'Sáng',
          subject2: [
            {
              tenHP: 'Toán rời rạc',
              tiethoc: '------123------',
              phong: '203/B1'
            },
            {
              tenHP: 'Xác suất thống kê',
              tiethoc: ' -------45------',
              phong: '203/C2'
            },
          ]
        },
        {
          buoi: 'Chiều',
          subject2: [
            {
              tenHP: 'Lập trình căn bản A',
              tiethoc: '------678------',
              phong: '203/B1'
            },

          ]
        },

      ],
      tuanhoc: '1->15'
    },
    {
      thu: 3,
      subject: [

        {
          buoi: 'Chiều',
          subject2: [
            {
              tenHP: 'Lập trình căn bản A',
              tiethoc: '------678------',
              phong: '101/D1'
            },

          ]
        },

      ],
      tuanhoc: '1->15'
    },
    {
      thu: 5,
      subject: [
        {
          buoi: 'Sáng',
          subject2: [

            {
              tenHP: 'Xác suất thống kê',
              tiethoc: '-------45------',
              phong: '501/TS'
            },
          ]
        },
        {
          buoi: 'Chiều',
          subject2: [
            {
              tenHP: 'Lập trình căn bản A',
              tiethoc: '------678------',
              phong: '203/B1'
            },

          ]
        },

      ],
      tuanhoc: '1->15'
    },
    {
      thu: 7,
      subject: [
        {
          buoi: 'Sáng',
          subject2: [
            {
              tenHP: 'Toán rời rạc',
              tiethoc: '------123------',
              phong: '203/D2'
            },
            {
              tenHP: 'Xác suất thống kê',
              tiethoc: '-------45------',
              phong: '203/B1'
            },
          ]
        },
        {
          buoi: 'Chiều',
          subject2: [
            {
              tenHP: 'Lập trình căn bản A',
              tiethoc: '------678------',
              phong: '203/B1'
            },

          ]
        },

      ],
      tuanhoc: '1->15'
    },

  ]
  // {
  //   id: 1,
  //   khoa: 'Khóa 46 trở về trước',
  //   subjects: [
  //     {
  //       date: '17/06/2024',
  //       subject2: [
  //         {
  //           time: '07:30',
  //           nhom: 8
  //         },
  //         {
  //           time: '08:30',
  //           nhom: 5
  //         },
  //         {
  //           time: '09:30',
  //           nhom: 3
  //         },
  //         {
  //           time: '13:30',
  //           nhom: 4
  //         },
  //         {
  //           time: '14:30',
  //           nhom: 6
  //         },
  //         {
  //           time: '15:30',
  //           nhom: 7
  //         },
  //       ]
  //     },
  //     {
  //       date: '18/06/2024',
  //       subject2: [
  //         {
  //           time: '07:30',
  //           nhom: 15
  //         },
  //         {
  //           time: '08:30',
  //           nhom: 16
  //         },
  //         {
  //           time: '09:30',
  //           nhom: 1
  //         },
  //         {
  //           time: '13:30',
  //           nhom: 2
  //         },
  //         {
  //           time: '14:30',
  //           nhom: 14
  //         },
  //         {
  //           time: '15:30',
  //           nhom: 13
  //         },
  //       ]
  //     },
  //     {
  //       date: '19/06/2024',
  //       subject2: [
  //         {
  //           time: '07:30',
  //           nhom: 10
  //         },
  //         {
  //           time: '09:30',
  //           nhom: 9
  //         },
  //         {
  //           time: '13:30',
  //           nhom: 11
  //         },
  //         {
  //           time: '15:30',
  //           nhom: 12
  //         },
  //       ]
  //     },
  //   ]
  // },

  const subjectData = [
    {
      maHP: 'CT101',
      nhom: '02',
      tenHP: 'Lập trình căn bản A',
      giangVien: 'Nguyễn Văn A (nva@gmail.com)'
    },
    {
      maHP: 'CT201',
      nhom: '04',
      tenHP: 'Toán rời rạc',
      giangVien: 'Nguyễn Văn E (nve@gmail.com)'
    },
    {
      maHP: 'CT301',
      nhom: '05',
      tenHP: 'Vi tích phân',
      giangVien: 'Nguyễn Văn D (nvd@gmail.com)'
    },
    {
      maHP: 'TN02',
      nhom: '07',
      tenHP: 'Xác suất thống kê',
      giangVien: 'Nguyễn Văn C (nvc@gmail.com)'
    },
    {
      maHP: 'CT225',
      nhom: '02',
      tenHP: 'Nhập môn lập trình web',
      giangVien: 'Nguyễn Văn B (nvb@gmail.com)'
    }
  ];

  const tuitionData = [
    {
      id: 1,
      maHP: '02',
      tenHP: 'Toán rời rạc',
      tongsoTC: 4,
      sotienTC: '540000',
      mucmiengiam: '',
    },
    {
      id: 2,
      maHP: '04',
      tenHP: 'Lập trình căn bản A',
      tongsoTC: 3,
      sotienTC: '660000',
      mucmiengiam: '',
    },
    {
      id: 3,
      maHP: '05',
      tenHP: 'Vi tích phân',
      tongsoTC: 3,
      sotienTC: '660000',
      mucmiengiam: '',
    },
    {
      id: 4,
      maHP: '07',
      tenHP: 'Xác suất thống kê',
      tongsoTC: 3,
      sotienTC: '660000',
      mucmiengiam: '',
    },
    {
      id: 5,
      maHP: '02',
      tenHP: 'Nhập môn lập trình web',
      tongsoTC: 3,
      sotienTC: '660000',
      mucmiengiam: '',
    },
  ];

  const insurance = [
    {
      chiphi: 500000,
      hsd: '12 tháng'
    }
  ]

  const bank = [
    {
      id: 1,
      tenNH: 'Agribank',
      soTK: '1800 2010 03948',
      tenTK: 'Trường Đại học Cần Thơ',
    },
    {
      id: 2,
      tenNH: 'HDBank',
      soTK: '0077 0407 0018 367',
      tenTK: 'Trường Đại học Cần Thơ',
    },
    {
      id: 3,
      tenNH: 'Sacombank',
      soTK: '0700 6111 3779',
      tenTK: 'Trường Đại học Cần Thơ',
    },
    {
      id: 4,
      tenNH: 'Vietcombank',
      soTK: '0111 00031 8806',
      tenTK: 'Trường Đại học Cần Thơ',
    },
    {
      id: 5,
      tenNH: 'BIDV',
      soTK: '7411 00006 12345',
      tenTK: 'Trường Đại học Cần Thơ',
    },
  ];


  const [semester, setSemester] = useState('');
  const [year, setYear] = useState('');

  const handleSemesterChange = (e) => {
    setSemester(e.target.value);
  };

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  const formatFee = (fee) => {
    return new Intl.NumberFormat().format(fee);
  };

  const totalCourse = tuitionData.reduce((total, course) => total + (course.sotienTC * course.tongsoTC), 0);
  const totalFees = totalCourse + insurance[0].chiphi;


  return (
    <div className="h-full">
      <Navbar />
      <Content>
        <div className="text-[6px] md:text-13  p-5">




          <div className="bg-slate-200 p-2 rounded-md flex flex-col ">
            <div className='flex justify-center items-center py-2' >
              <div className="border-solid border-gray-200 border-1  text-7 mx-1 mr-4 xl:mr-7 md:mr-8 xl:text-13 ">
                <h1 className='text-10 font-bold text-center m-1 mb-2 xl:text-20'>Thời khóa biểu</h1>
                <div className=' flex items-center justify-center'>
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
                  <div className='text-center '>
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
                {/* Bảng ở đây */}
              </div>
              <div className='w-[70%] flex flex-col justify-center items-center '>
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

          <div className='w-full p-2 text-center text-10 font-bold  text-indigo-600 xl:text-16'>Thời khóa biểu | Học kỳ: 2 | Năm học: 2023 - 2024</div>

          {/* Bảng thông tin học phí */}
          <div className='w-full bg-slate-200 rounded-md'>
            <div className='p-3 rounded-md'>
              <table className="min-w-full bg-gray-300 border border-gray-200">
                <thead>
                  <tr>
                    <th className="border border-gray-400 px-2 py-[3px] xl:p-2 lg:p-2 md:p-2">Thứ</th>
                    <th className="border border-gray-400 px-2">Buổi</th>
                    <th className="border border-gray-400 px-2">Tên học phần</th>
                    <th className="border border-gray-400 px-2">Tiết học</th>
                    <th className="border border-gray-400 px-2">Phòng</th>
                    <th className="border border-gray-400 px-2">Tuần học</th>
                  </tr>
                </thead>
                <tbody>
                  {courseDate.map((course, courseIndex) => (
                    <React.Fragment key={courseIndex}>
                      {course.subject.map((subject, subIndex) => (
                        <React.Fragment key={subIndex}>
                          {subject.subject2.map((item, itemIndex) => (
                            <tr key={itemIndex} className={courseIndex % 2 === 0 ? "bg-slate-200" : "bg-gray-100"}>
                              {itemIndex === 0 && subIndex === 0 && (
                                <>
                                  <td className="border border-gray-400 px-1 text-center" rowSpan={course.subject.reduce((acc, sub) => acc + sub.subject2.length, 0)}>
                                    {course.thu}
                                  </td>
                                </>
                              )}
                              {itemIndex === 0 && (
                                <>
                                  <td className="border border-gray-400 px-1 text-center py-[2px] xl:py-[5px]" rowSpan={subject.subject2.length}>
                                    {subject.buoi}
                                  </td>
                                </>
                              )}
                              <td className="border border-gray-400 px-[5px] xl:px-[10px] text-left w-[25%]">{item.tenHP}</td>
                              <td className="border border-gray-400 pl-[5px] text-left w-[17%] xl:w-[13%] xl:pl-[14px]">{item.tiethoc}</td>
                              <td className="border border-gray-400 text-center w-[17%]">{item.phong}</td>
                              {itemIndex === 0 && subIndex === 0 && (
                                <>
                                  <td className="border border-gray-400 px-1 text-center w-[40%]" rowSpan={course.subject.reduce((acc, sub) => acc + sub.subject2.length, 0)}>
                                    {course.tuanhoc}
                                  </td>
                                </>
                              )}
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

          <div className='w-full p-2 text-center text-10 font-bold  text-indigo-600 xl:text-16'>Thông tin học phí</div>
          {/* Bảng thời khóa biểu */}
          <div className='w-full bg-slate-200 rounded-md'>
            <div className='p-3 rounded-md'>
              <table className="min-w-full border border-gray-200">
                <thead>
                  <tr className='bg-gray-300'>
                    <th className="border border-gray-400 px-2 py-[3px] xl:p-2 lg:p-2 md:p-2">STT</th>
                    <th className="border border-gray-400 px-2 py-[3px] xl:p-2 lg:p-2 md:p-2">Mã HP</th>
                    <th className="border border-gray-400 px-2">Tên HP</th>
                    <th className="border border-gray-400 px-2">Tổng tín chỉ</th>
                    <th className="border border-gray-400 px-2">Số tiền/TC</th>
                    <th className="border border-gray-400 px-2">Mức miễn giảm</th>
                    <th className="border border-gray-400 px-2">Thành tiền/HP</th>
                  </tr>
                </thead>
                <tbody className='border border-zinc-500 bg-white'>
                  {tuitionData.map((course, index) => (
                    <tr key={index} className={`border border-zinc-500 ${index % 2 === 0 ? 'bg-slate-200' : 'bg-gray-50'}`}>
                      <td className='border text-center border-zinc-500 xl:py-[2px]'>{course.id}</td>
                      <td className='border text-center border-zinc-500'>{course.maHP}</td>
                      <td className='border border-zinc-500 px-1 xl:px-[7px]'>{course.tenHP}</td>
                      <td className='border border-zinc-500 px-1 xl:px-[7px] text-center'>{course.tongsoTC}</td>
                      <td className='border border-zinc-500 px-1 xl:px-[7px] text-center'>{formatFee(course.sotienTC)}</td>
                      <td className='border border-zinc-500 px-1 xl:px-[7px] text-center'>{formatFee(course.mucmiengiam)}</td>
                      <td className='border border-zinc-500 px-1 xl:px-[7px] text-center'>
                        {formatFee(course.sotienTC * course.tongsoTC)}
                      </td>
                    </tr>
                  ))}

                  <tr className='border border-zinc-500'>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td colSpan={2} className='border border-l-0  border-zinc-500 italic text-7 py-[2px] xl:text-14 md:text-14'>Bảo hiểm y tế</td>
                    <td className='border border-zinc-500 px-1 xl:px-[7px] text-center'>{insurance[0].hsd}</td>
                    <td className='border border-zinc-500 px-1 xl:px-[7px] text-center'>{formatFee(insurance[0].chiphi)}</td>
                  </tr>

                  <tr className='border border-zinc-500'>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td colSpan={3} className='border border-l-0  border-zinc-500 italic text-7 py-[2px] xl:text-14 md:text-14'>Tổng học phí học kỳ</td>
                    <td className='border border-zinc-500 px-1 xl:px-[7px] text-center'>{formatFee(totalFees)}</td>
                  </tr>

                </tbody>
              </table>

            </div>


          </div>

          <div className='w-full p-2 text-center text-10 font-bold  text-indigo-600 xl:text-16'>Thông tin đóng học phí</div>

          <div className="bg-slate-200 px-2 rounded-md flex flex-col ">
            <div className='flex justify-center items-center py-2 xl:py-5' >
              <div className="border-solid border-gray-200 border-1  text-7 mx-1 xl:text-13 p-2  flex-1 xl:px-5 md:text-13 ">
                <h1 className='text-10 font-bold text-center m-1 mb-2 xl:text-20 md:text-16'>Lưu ý</h1>
                <div className=' flex items-center justify-center'>
                  <ol className='list-decimal text-justify  leading-[10px] xl:leading-4  md:leading-4 '  >
                    <li className='mb-1' >
                      <p>Sinh viên đóng học phí bằng cách chuyển khoản qua 1 trong 5
                        ngân của Đại học Cần Thơ được liệt kê trong bảng.
                      </p>
                    </li>
                    <li  className='mb-1'>
                      <p>Nếu sau 03 ngày làm việc vẫn chưa cập nhật học phí thì chụp minh
                        chứng đến ptson@ctu.edu.vn để kịp thời xử lý
                      </p>
                    </li>
                    <li  className='mb-1'>
                      <p className='text-red-600'>
                        Hạn chót đóng học phí: <span className='font-bold text-black' >20/10/2024</span>
                      </p>
                    </li>
                    <li  className='mb-1'>
                      <p className='text-red-600' >
                        Sau thời hạn đóng học phí, sinh viên không đóng học phí sẽ bị hủy kết quả học tập những học phần nợ học phí trong học kỳ đó và buộc phải đóng học phí còn nợ
                        cùng lúc với học phí của học kỳ tiếp theo.
                      </p>
                    </li>
                    <li  className='mb-1'>
                      <p className='text-red-600'>
                        Không đóng học phí 02 học kỳ liên tiếp sẽ bị buộc thôi học.
                      </p>
                    </li>
                    <li  className='mb-1'>
                      <p>
                        Nếu tiền nợ học phí của các bạn có sai sót, các bạn vui lòng liên hệ Phòng tài chính hoặc Phòng CTSV để kiểm tra.
                      </p>
                    </li>
                    <li  className='mb-1'>
                      <p>
                        Nếu kết quả đăng ký và tính học phí của các bạn có sai sót, các bạn vui lòng phản ánh về địa chỉ sau để kiểm tra: lhsang@ctu.edu.vn
                      </p>
                    </li>
                  </ol>
                </div>
                {/* Bảng ở đây */}
              </div>
              <div className='w-[70%] flex flex-col justify-center items-center  flex-1 xl:pr-3'>
                <h1 className="text-10 xl:text-16 lg:text-[15px] md:text-[14px] sm:text-[14px] font-bold pt-1 pb-2 flex justify-center items-center">
                  Thông tin học phần
                </h1>
                <table className="min-w-full bg-white border border-gray-200">
                  <thead>
                    <tr className='border border-zinc-500 bg-gray-300'>
                      <th className="border border-zinc-500 px-2 xl:py-[2px] w-[16%]">STT</th>
                      <th className="border border-zinc-500 px-2">Tên ngân hàng</th>
                      <th className="border border-zinc-500 px-2">Số tài khoản</th>
                      <th className="border border-zinc-500 px-2">Tên tài khoản</th>
                    </tr>
                  </thead>
                  <tbody className='border border-zinc-500'>
                    {bank.map((course, index) => (
                      <tr key={index} className='border border-zinc-500'>
                        <td className='border text-center w-[5%] border-zinc-500 xl:py-[2px]'>{course.id}</td>
                        <td className='border text-center w-[25%] border-zinc-500'>{course.tenNH}</td>
                        <td className='border border-zinc-500 w-[40%] px-1 xl:px-[7px] xl:w-[35%] '>{course.soTK}</td>
                        <td className='border border-zinc-500 w-[30%] px-1 xl:px-[7px]'>{course.tenTK}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
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

export default Schedule;

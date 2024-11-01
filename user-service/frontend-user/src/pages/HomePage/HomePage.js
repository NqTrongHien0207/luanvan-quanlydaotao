import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import ScrollToTop from '../../components/scrollToTop/scrollToTop';
import './../../App.css'
import Content from '../../components/Content/Content';

const HomePage = () => {
    return (
        <div className='relative h-full'>
            <NavBar />
            <Content>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4'>
                    {/* Thông tin sinh viên */}
                    <div className='col-span-1 bg-white rounded-lg shadow-md p-4'>
                        <h1 className='text-2xl font-bold mb-4 text-center '>Thông Tin Sinh Viên</h1>
                        <div className='space-y-2 text-sm md:text-13'>
                            <div className='flex'>
                                <strong className='flex-2 w-36'  >MSSV</strong> <span className='flex-1' >B2012206</span>
                            </div>
                            <div className='flex'>
                                <strong className='flex-2 w-36'  >Tên</strong> <span className='flex-1' >Nguyễn Văn A</span>
                            </div>
                            <div className='flex'>
                                <strong className='flex-2 w-36'  >Ngày sinh</strong> <span className='flex-1' >00/00/0000</span>
                            </div>
                            <div className='flex'>
                                <strong className='flex-2 w-36'  >Giới tính</strong> <span className='flex-1' >Nam</span>
                            </div>
                            <div className='flex'>
                                <strong className='flex-2 w-36'  >Chuyên ngành</strong> <span className='flex-1' >Kỹ thuật phần mềm</span>
                            </div>
                            <div className='flex'>
                                <strong className='flex-2 w-36'  >Lớp</strong> <span className='flex-1' >DI2096A4</span>
                            </div>
                            <div className='flex'>
                                <strong className='flex-2 w-36'  >Khóa học</strong> <span className='flex-1' >K46</span>
                            </div>
                            <div className='flex'>
                                <strong className='flex-2 w-36'  >Khoa</strong> <span className='flex-1' >Trường công nghệ thông tin & Truyền thông</span>
                            </div>



                        </div>

                        {/* Nút xem thêm thông tin lên trên */}
                        <div className='grid grid-cols-3 text-8 mt-3 items-center xl:text-11 '>
                            <div className='col-span-1 items-center' >
                                <div className='mb-1'>
                                    <a href="http://localhost:3000/moreinfo" className='text-blue-500 hover:underline'>
                                        Xem thêm thông tin...
                                    </a>
                                </div>

                            </div>
                            <div className='col-span-2 text-13 justify-items-center ' >
                                <div className=' h-full'>

                                    <a href="http://localhost:3000/updateinfo" className='bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition duration-300'>
                                        Cập Nhật Thông Tin
                                    </a>
                                </div>
                            </div>
                        </div>


                        {/* Nút cập nhật thông tin */}

                    </div>


                    {/* Chức năng điều hướng */}
                    <div className='col-span-1 md:col-span-1 bg-gray-100 rounded-lg shadow-md p-4'>
                        <div className='grid grid-cols-2 gap-4'>
                            <ListItem title="Kế Hoạch Học Tập" icon="📚" link="http://localhost:3000/studyplan" />
                            <ListItem title="Đăng Ký Môn Học" icon="🗓️" link="http://localhost:3000/registercourse" />
                            <ListItem title="Lịch Học" icon="📅" link="http://localhost:3000/schedule" />
                            <ListItem title="Kết Quả Học Tập" icon="📊" link="http://localhost:3000/resultstudy" />
                            <ListItem title="Ký Túc Xá" icon="🏠" link="http://localhost:3000/dorm" />
                            <ListItem title="Thông Báo" icon="📢"  link="http://localhost:3000/notification" />
                            {/* <ListItem title="Thông Tin Cố Vấn" icon="👨‍🏫" /> */}
                        </div>
                        <div className='space-y-2 text-sm md:text-base border-dotted border-gray-300 border-2 mt-4 p-4 rounded  '>
                            <h1 className='text-2xl font-bold mb-4 text-center'>Thông Tin Cố Vấn</h1>
                            <div className='flex ' >
                                <strong className='flex-2 w-24' >MSSV</strong> <span className='flex-1' >010101</span>
                            </div>
                            <div className='flex ' >
                                <strong className='flex-2 w-24' >Họ tên</strong> <span className='flex-1' >Nguyễn Văn B</span>
                            </div>
                            <div className='flex ' >
                                <strong className='flex-2 w-24' >Email</strong> <span className='flex-1' >nguyenvanb@gmail.com</span>
                            </div>
                            <div className='flex ' >
                                <strong className='flex-2 w-24' >Điện thoại</strong> <span className='flex-1' >010101</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Content>
            <Footer />
            <div className='fixed top-[64.5%]  xl:top-[90%]  lg:top-[90%] lg:right-[2%] md:top-[85%] md:right-[3%]  
                      xs:top-[80%] xs:right-[4%]   '>
                {/* xl:bottom-10 xl:right-10 xl:-mb-6 */}
                {/* bottom-10 right-10 -mb-6 */}
                <ScrollToTop />
            </div>


        </div>
    );
};

const ListItem = ({ title, icon, link }) => {
    return (
        <a href={link} className='flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300'>
            <span className='text-2xl mr-2'>{icon}</span>
            <span className='text-lg font-semibold'>{title}</span>
        </a>
    );
};




export default HomePage;




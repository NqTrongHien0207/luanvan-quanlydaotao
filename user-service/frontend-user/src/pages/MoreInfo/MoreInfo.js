import React from 'react';
import Navbar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import Content from '../../components/Content/Content';
import Toolip from '../../components/Toolip/Toolip';

const dataStudent = [
  {
    Mssv: 'B2012206',
    Hoten: 'Nguyễn Trọng Hiền',
    Gioi_tinh: 'Nam',
    Ngay_sinh: '02/02/0020',
    Ton_giao: 'Đạo ...',
    Dan_toc: 'Kinh',
    Quoc_tich: 'Việt Nam',
    Noi_cap_giay_khai_sinh: 'Phường Châu Phú B, Thành phố Châu Đốc, Tỉnh An Giang',
    Noi_sinh: 'Trạm y tế phường Châu Phú B, Thị xã Châu Đốc, tỉnh An Giang',
    Ma_lop: 'DI2096A4',
    He_dao_tao: 'Đại học - Chính quy',
    Chuyen_nganh: 'Kỹ thuật phần mềm',
    Dia_chi_thuong_tru: 'An Giang',
    Dia_chi_tam_tru: 'Cái Răng',
    Phone: '2211001144',
    Chi_doan: 'DI2096A4 - DI2096A4',
    Ngay_vao_doan: '24/03/2019',
    Chi_hoi: 'Chi hội Châu Phú - Tân Châu',
    Ngay_vao_HSV: '29/11/2020',
    Cccd: 'abcxyz',
    Ngaycap_cccd: 'abc',
    Noicap_cccd: 'xyz',
    Email: 'aaaa@gmail.com',
  },
];

const keyMapStudent = {
  Mssv: 'Mã số sinh viên',
  Hoten: 'Họ tên',
  Gioi_tinh: 'Giới tính',
  Ngay_sinh: 'Ngày sinh',
  Ton_giao: 'Tôn giáo',
  Dan_toc: 'Dân tộc',
  Quoc_tich: 'Quốc tịch',
  Noi_cap_giay_khai_sinh: 'Nơi cấp giấy khai sinh',
  Noi_sinh: 'Nơi sinh',
  Ma_lop: 'Mã lớp',
  He_dao_tao: 'Hệ đào tạo',
  Chuyen_nganh: 'Chuyên ngành',
  Dia_chi_thuong_tru: 'Địa chỉ thường trú',
  Dia_chi_tam_tru: 'Địa chỉ tạm trú',
  Phone: 'Số điện thoại',
  Chi_doan: 'Chi đoàn',
  Ngay_vao_doan: 'Ngày vào đoàn',
  Chi_hoi: 'Chi hội',
  Ngay_vao_HSV: 'Ngày vào HSV',
  Cccd: 'Căn cước công dân',
  Ngaycap_cccd: 'Ngày cấp CCCD',
  Noicap_cccd: 'Nơi cấp CCCD',
  Email: 'Email',
};


const familyInfo = {
  Ho_khau_tinh: 'Tỉnh An Giang',
  Ho_khau_quan_huyen: 'Huyện Châu Phú',
  Ho_ten_cha: 'Nguyễn Văn A',
  Nam_sinh_cha: '1xxx',
  Nghe_nghiep_cha: 'abc',
  Noi_lam_viec_cha: 'Châu Phú, An Giang',
  Ho_ten_me: 'Nguyễn Thị B',
  Nam_sinh_me: '1xxx',
  Nghe_nghiep_me: 'abc',
  Noi_lam_viec_me: 'Châu Phú, An Giang',
  Dien_thoai_gia_dinh: '000000000',
  Dia_chi_ho_khau: '111, đường Lê Văn X, tổ 9, khu vực/ấp Mỹ Đình, Xã Mỹ Tho, Huyện Châu Phú, Tỉnh An Giang',
  So_anh_chi_em: '1',
  Ho_ten_anh_chi_em: 'Nguyễn Văn C',
};

const keyMapFamily = {
  Ho_khau_tinh: 'Hộ khẩu tỉnh/TP',
  Ho_khau_quan_huyen: 'Hộ khẩu quận/huyện',
  Ho_ten_cha: 'Họ tên cha',
  Nam_sinh_cha: 'Năm sinh cha',
  Nghe_nghiep_cha: 'Nghề nghiệp cha',
  Noi_lam_viec_cha: 'Nơi làm việc hiện nay của cha',
  Ho_ten_me: 'Họ tên mẹ',
  Nam_sinh_me: 'Năm sinh mẹ',
  Nghe_nghiep_me: 'Nghề nghiệp mẹ',
  Noi_lam_viec_me: 'Nơi làm việc hiện nay của mẹ',
  Dien_thoai_gia_dinh: 'Điện thoại gia đình',
  Dia_chi_ho_khau: 'Địa chỉ hộ khẩu',
  So_anh_chi_em: 'Số anh chị em',
  Ho_ten_anh_chi_em: 'Họ tên anh chị em',
};

const MoreInfo = () => (
  <div className='h-full'>
    <Navbar />
    <Content>
      <div className='text-[7px] md:text-13 py-1'>
        <div className='m-4 p-4 border-solid border-gray-200 border-1 bg-slate-100'>
          <div>
            <h1 className='text-xs lg:text-lg md:text-md sm:text:sm font-bold mb-4 text-center'>THÔNG TIN SINH VIÊN</h1>
            {dataStudent.map((student, index) => (
              <div key={index} className=''>
                <div className='grid grid-cols-2 gap-2 lg:gap-4 md:gap-4 sm:gap-3'>
                  <table className='min-w-full bg-white border border-gray-200 mb-4'>
                    <tbody>
                      {Object.keys(student).slice(0, Math.ceil(Object.keys(student).length / 2)).map((key, index) => (
                        <tr key={index} className='even:bg-gray-100 odd:bg-slate-200'>
                          <td className='border border-gray-300 px-1 py-[2px] lg:px-2 lg:py-1 md:px-2 md:py-1 font-bold'>{keyMapStudent[key]}</td>
                          <td className='border border-gray-300 px-1 lg:px-2 lg:py-1 md:px-2 md:py-1 '>{student[key]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <table className='min-w-full bg-white border border-gray-200 mb-4'>
                    <tbody>
                      {Object.keys(student).slice(Math.ceil(Object.keys(student).length / 2)).map((key, index) => (
                        <tr key={index} className='even:bg-gray-100 odd:bg-slate-200'>
                          <td className='border border-gray-300 px-1 lg:px-2 lg:py-1 md:px-2 md:py-1 font-bold'>{keyMapStudent[key]}</td>
                          <td className='border border-gray-300 px-1 lg:px-2 lg:py-1 md:px-2 md:py-1'>{student[key]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
          <div className='col-span-1 bg-gray-50 rounded-lg shadow-md border p-4'>
            <h1 className='text-xs lg:text-lg md:text-md sm:text:sm font-bold mb-4 text-center'>THÔNG TIN GIA ĐÌNH</h1>
            <div className='grid grid-cols-2'>
              {Object.keys(familyInfo).map((key, index) => (
                <div
                  key={index}
                  className={`border border-gray-300 p-1 lg:px-2 md:px-2 sm-px-2 ${Math.floor(index / 2) % 2 === 0 ? 'bg-slate-200' : 'bg-gray-100'}`}
                >
                  <p className='font-bold'>{keyMapFamily[key]}</p>
                  <p>{familyInfo[key]}</p>
                </div>
              ))}
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

export default MoreInfo;



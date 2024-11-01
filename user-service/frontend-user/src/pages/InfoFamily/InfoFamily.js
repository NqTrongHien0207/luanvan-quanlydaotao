import React from 'react';
import Navbar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import Content from '../../components/Content/Content';
import Toolip from '../../components/Toolip/Toolip';

const familyInfo = {
  Ho_khau_tinh: 'Tỉnh An Giang',
  Ho_khau_quan_huyen: 'Huyện Châu Phú',
  Ho_ten_cha: 'Nguyễn Hồng Tuấn',
  Nam_sinh_cha: '1975',
  Nghe_nghiep_cha: 'Thợ Bê',
  Noi_lam_viec_cha: 'Châu Phú, An Giang',
  Ho_ten_me: 'Nguyễn Thị Thùy Linh',
  Nam_sinh_me: '1974',
  Nghe_nghiep_me: 'Buôn bán',
  Noi_lam_viec_me: 'Châu Phú, An Giang',
  Dien_thoai_gia_dinh: '0967790301',
  Dia_chi_ho_khau: '221, đường Lê Văn Cường, tổ 6, khu vực/ấp Mỹ Chánh, Xã Mỹ Đức, Huyện Châu Phú, Tỉnh An Giang',
  So_anh_chi_em: '1',
  Ho_ten_anh_chi_em: 'Nguyễn Đình Trọng',
};

const keyMap = {
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

const FamilyInfo = () => (
  <div className='h-full'>
    <Navbar />
    <Content>
      <div className='text-[7px] md:text-13 py-1'>
        <div className='m-4 p-4 border-solid border-gray-200 border-1 bg-slate-100'>
          <h1 className='text-md font-bold mb-4 text-center'>Gia Đình</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {Object.keys(familyInfo).map((key, index) => (
              <div key={index} className='bg-white border border-gray-200 p-2'>
                <p className='font-bold'>{keyMap[key]}</p>
                <p>{familyInfo[key]}</p>
              </div>
            ))}
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

export default FamilyInfo;

import React from 'react';
import Navbar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import Content from '../../components/Content/Content';
import Toolip from '../../components/Toolip/Toolip';

const notifications = [
    {
        id: 1,
        title: 'Thông báo đóng học phí',
        date: '01/11/2024',
        content: 'Sắp hết hạn đóng học phí.',
    },
    {
        id: 2,
        title: 'Thông báo đóng học phí',
        date: '05/11/2024',
        content: 'Học phí đã được thanh toán.',
    },
];

const NotificationCard = ({ title, date, content }) => (
    <div className="bg-slate-200 shadow-md rounded-lg p-4 mb-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-500 text-sm">{date}</p>
        <p className="mt-2 text-gray-700">{content}</p>
    </div>
);

const Dorm = () => {
    return (
        <div className="h-full">
            <Navbar />
            <Content>
                <div className="max-w-3xl mx-auto p-6">
                    <h1 className="text-2xl font-bold mb-4 text-center">Thông báo từ nhà trường</h1>
                    <div >
                        {notifications.map(notification => (
                            <NotificationCard
                                key={notification.id}
                                title={notification.title}
                                date={notification.date}
                                content={notification.content}
                            
                            />
                        ))}
                    </div>

                </div>
            </Content>
            <Footer />
            <div>
                <Toolip />
            </div>
        </div>
    );
};

export default Dorm;

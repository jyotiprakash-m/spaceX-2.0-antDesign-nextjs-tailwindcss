import React from 'react'
import { Modal } from 'antd';


function DescriptionModal({ visible, setIsDetailsVisible, title, missionDetails }) {
    const handleOk = () => {
        setIsDetailsVisible(false);
    };

    const handleCancel = () => {
        setIsDetailsVisible(false);
    };
    return (
        <Modal title={title} visible={visible} onOk={handleOk} onCancel={handleCancel}>
            <p>{missionDetails.flight_number}</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Modal>
    )
}

export default DescriptionModal

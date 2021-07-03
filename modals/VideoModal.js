import { Modal } from 'antd';
import React from 'react'

function VideoModal({ visible, setIsVideoVisible, youtubeVideo, title }) {
    const handleOk = () => {
        setIsVideoVisible(false);
    };

    const handleCancel = () => {
        setIsVideoVisible(false);
    };
    return (
        <Modal width={900} title={title} visible={visible} onOk={handleOk} onCancel={handleCancel}>
            <div className="w-full h-80 md:h-80 lg:h-96">

                <iframe
                    id="video"
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${youtubeVideo}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>

            </div>
        </Modal>
    )
}

export default VideoModal

import React from 'react'
import { Col, Divider, Row, Image, Button, Modal } from 'antd'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import moment from 'moment';
function DescriptionModal({ visible, setIsDetailsVisible, title, missionDetails }) {
    const handleOk = () => {
        setIsDetailsVisible(false);
    };

    const handleCancel = () => {
        setIsDetailsVisible(false);
    };

    // Slider 

    // console.log(missionDetails?.links.flickr_images)
    return (
        <Modal width={1000} style={{ top: "10px" }} title={title} visible={visible} onOk={handleOk} onCancel={handleCancel}>
            <Row>
                <Col className="bg-gray-300" span={24} xs={24} md={12}>
                    <Row>
                        <Col span={24}>
                            {missionDetails.links && <Carousel>
                                {missionDetails.links.flickr_images.map((img) => (
                                    <div key={img}>
                                        <img alt={img} src={img} />
                                    </div>
                                ))}
                            </Carousel>}
                            {!missionDetails.links || missionDetails.links.flickr_images.length === 0 &&
                                <div>
                                    <h1 className="text-3xl text-center pt-5">No image to display</h1>
                                    <Image preview={false} src="https://www.allianceplast.com/wp-content/uploads/2017/11/no-image.png" />
                                </div>
                            }
                        </Col>
                    </Row>
                </Col>
                <Col className="bg-green-700 " span={24} xs={24} md={12}>
                    <div className="bg-white w-full h-full p-3">
                        {/* {console.log(item)} */}
                        <div className="flex items-center gap-4 pb-2 border-b-2 border-gray-600">
                            {missionDetails.links &&
                                <img className="w-20" src={missionDetails.links.mission_patch_small} />
                            }
                            <div>
                                <h1 className="text-2xl sm:text-3xl font-bold">#{missionDetails.flight_number} {missionDetails.mission_name}</h1>
                                <p className="font-semibold">{moment(missionDetails.launch_date_local).format('llll')}</p>
                                {/* {moment(missionDetails.launch_date_local).calendar()} */}
                            </div>
                        </div>

                        <p className="text-justify text-base sm:text-lg">{missionDetails.details}</p>
                        <div className="my-2">
                            <h1 className="sm:text-lg font-bold border-b-2">Launch Site:</h1>
                            {missionDetails.launch_site &&
                                <p className="sm:text-lg font-semibold text-gray-800">{missionDetails.launch_site.site_name_long}({missionDetails.launch_site.site_name})</p>
                            }
                            {missionDetails.launch_site &&
                                <a href={`https://www.google.com/maps/search/?api=1&query=${missionDetails.launch_site.site_name_long}`} target="_blank"><button className="py-1 px-4 border-2 sm:text-lg border-blue-600 rounded hover:bg-blue-600 hover:text-gray-100 focus:outline-none mt-3">Open Map</button></a>
                            }
                        </div>
                        <div className="my-2">
                            <h1 className="sm:text-lg font-bold border-b-2">Mission Ids:</h1>
                            <ul className="list-disc ml-5 text-gray-700">
                                {
                                    missionDetails.mission_id &&
                                    missionDetails.mission_id.map((id) => (
                                        <li key={id}>{id}</li>
                                    ))

                                }
                            </ul>
                        </div>
                        <div className="my-2">
                            <h1 className="sm:text-lg font-bold border-b-2">Rocket Info:</h1>
                            {missionDetails.rocket &&
                                <p className="sm:text-lg font-bold text-gray-800">Rocket Name:  <span className="font-semibold ml-2">{missionDetails.rocket.rocket_name}</span></p>
                            }{missionDetails.rocket &&

                                <p className="sm:text-lg font-bold text-gray-800">Rocket Id:  <span className="font-semibold ml-2">{missionDetails.rocket.rocket_id}</span></p>
                            }{missionDetails.rocket &&

                                <p className="sm:text-lg font-bold text-gray-800">Rocket Type:  <span className="font-semibold ml-2">{missionDetails.rocket.rocket_type}</span></p>
                            }

                        </div>
                        <div className="my-2">
                            <h1 className="sm:text-lg font-bold inline-block border-b-2">Launch Window:</h1>
                            <p className="sm:text-lg font-bold text-gray-800 inline-block ml-3">{missionDetails.launch_window}</p>


                        </div>
                        <div className="my-2">
                            <h1 className="sm:text-lg font-bold border-b-2">Refer Article:</h1>

                            {missionDetails.links && missionDetails.links.article_link && <a href={missionDetails.links.article_link} target="_blank"><button className="py-1 px-4 border-2 sm:text-lg border-blue-600 rounded hover:bg-blue-600 hover:text-gray-100 focus:outline-none mt-3">Visit Page</button></a>}

                        </div>
                        <div className="my-2">
                            <h1 className="sm:text-lg font-bold border-b-2">Reddit News:</h1>
                            {missionDetails.links && missionDetails.links.reddit_campaign && <a href={missionDetails.links.reddit_campaign} target="_blank"><button className="py-1 px-4 border-2 sm:text-lg border-blue-600 rounded hover:bg-blue-600 hover:text-gray-100 focus:outline-none mt-3 mr-1">Reddit Campaign</button></a>}
                            {missionDetails.links && missionDetails.links.reddit_launch && <a href={missionDetails.links.reddit_launch} target="_blank"><button className="py-1 px-4 border-2 sm:text-lg border-blue-600 rounded hover:bg-blue-600 hover:text-gray-100 focus:outline-none mt-3 mr-1">Reddit Launch</button></a>}
                            {missionDetails.links && missionDetails.links.reddit_media && <a href={missionDetails.links.reddit_media} target="_blank"><button className="py-1 px-4 border-2 sm:text-lg border-blue-600 rounded hover:bg-blue-600 hover:text-gray-100 focus:outline-none mt-3 mr-1">Reddit Media</button></a>}
                            {missionDetails.links && missionDetails.links.reddit_recovery && <a href={missionDetails.links.reddit_recovery} target="_blank"><button className="py-1 px-4 border-2 sm:text-lg border-blue-600 rounded hover:bg-blue-600 hover:text-gray-100 focus:outline-none mt-3">Reddit Recovery</button></a>}

                        </div>
                        <div className="my-2">
                            <h1 className="sm:text-lg font-bold border-b-2">Wikipedia:</h1>
                            {missionDetails.links && missionDetails.links.wikipedia && <a href={missionDetails.links.wikipedia} target="_blank"><button className="py-1 px-4 border-2 sm:text-lg border-blue-600 rounded hover:bg-blue-600 hover:text-gray-100 focus:outline-none mt-3 mr-1">Open Wikipedia</button></a>}

                        </div>
                    </div>
                </Col>
            </Row>

        </Modal>
    )
}

export default DescriptionModal

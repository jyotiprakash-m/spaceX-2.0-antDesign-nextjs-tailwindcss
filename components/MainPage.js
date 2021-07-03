import { Col, Divider, Row, Input, Select, BackTop, message, Image, Card, Button } from 'antd'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loader from './Loader'
import { YoutubeFilled } from '@ant-design/icons';
import VideoModal from "../modals/VideoModal"

const { Search } = Input;
const { Option } = Select;
function MainPage() {
    const [missions, setMissions] = useState([]);
    const [year, setYear] = useState(null)
    const [youtubeVideo, setYoutubeVideo] = useState("")

    // Video Modal
    const [isVideoVisible, setIsVideoVisible] = useState(false);
    const showVideoModal = (code) => {
        setIsVideoVisible(true);
        setYoutubeVideo(code);
    };

    console.log(isVideoVisible)
    // Run when the component first time load
    useEffect(() => {
        const fetchMissions = async () => {
            const response = await axios.get("https://api.spaceXdata.com/v3/launches?limit=200");
            !(response == undefined || response == null) & setMissions(response.data);
        }
        fetchMissions();
    }, []);

    // Search Missions filter
    const onSearch = async (value) => {
        try {

            if (value === "" || value == null || value == undefined) {
                const response = await axios.get("https://api.spaceXdata.com/v3/launches?limit=200");
                !(response == undefined || response == null) & setMissions(response.data);
                message.warning("Please Enter the valid flight number (1-111)")
            }
            else {

                const response = await axios.get(`https://api.spacexdata.com/v3/launches?limit=200&flight_number=${value}`);
                if (response.data.length === 0) {
                    message.warning("Data not Found")
                } else {

                    !(response == undefined || response == null) & setMissions(response.data);
                    console.log(response.data.length)
                }
            }
        } catch (err) {
            message.error("something wrong")
        }
    };
    const onSearchYear = async (value) => {
        try {
            if (value === "") {
                const response = await axios.get("https://api.spaceXdata.com/v3/launches?limit=200");
                !(response == undefined || response == null) & setMissions(response.data);
                message.warning("Year value unset")
            } else {

                const response = await axios.get(`https://api.spaceXdata.com/v3/launches?limit=200&launch_year=${value}`);
                !(response == undefined || response == null) & setMissions(response.data);
                setYear(value)
                console.log(response.data.length)
                console.log(year)
            }
        } catch (error) {
            message.error("Something went wrong")
        }
    }
    const onLandChange = async (value) => {
        try {
            if (year === null || year === "") {
                const response = await axios.get(`https://api.spaceXdata.com/v3/launches?limit=200&land_success=${value}`);
                !(response == undefined || response == null) & setMissions(response.data);

            } else {
                if (value === "") {
                    message.warning("Landing value unset")
                    const response = await axios.get("https://api.spaceXdata.com/v3/launches?limit=200");
                    !(response == undefined || response == null) & setMissions(response.data);
                } else {

                    const response = await axios.get(`https://api.spaceXdata.com/v3/launches?limit=200&land_success=${value}&launch_year=${year}`);
                    !(response == undefined || response == null) & setMissions(response.data);
                }
            }

        } catch (error) {
            message.error("Something went wrong")
        }
    }
    const onLaunchChange = async (value) => {
        try {
            if (year === null || year === "") {
                const response = await axios.get(`https://api.spaceXdata.com/v3/launches?limit=200&launch_success=${value}`);
                !(response == undefined || response == null) & setMissions(response.data);

            } else {
                if (value === "") {
                    message.warning("Launch value unset")
                    const response = await axios.get("https://api.spaceXdata.com/v3/launches?limit=200");
                    !(response == undefined || response == null) & setMissions(response.data);
                } else {

                    const response = await axios.get(`https://api.spaceXdata.com/v3/launches?limit=200&launch_success=${value}&launch_year=${year}`);
                    !(response == undefined || response == null) & setMissions(response.data);
                }
            }

        } catch (error) {
            message.error("Something went wrong")
        }

    }
    // console.log(missions)
    return (
        <>
            <BackTop />
            <div className="mx-2 md:mx-4 lg:mx-8 xl:mx-16">
                <h2 className="font-semibold text-3xl my-2">Filters</h2>
                <Row>
                    <Col className="h-12 p-1 sticky" span={24} sm={12} lg={6} >
                        <Row className="h-full w-full">
                            <Search
                                placeholder="Enter the flight number"
                                allowClear
                                type="number"

                                enterButton="Search"
                                size="large"
                                onSearch={onSearch}
                            />
                        </Row>
                    </Col>
                    <Col className="h-12 p-1" span={24} sm={12} lg={6} >
                        <Row className="h-full w-full">
                            <Select
                                size="large"
                                className="w-full"
                                showSearch
                                placeholder="Select the year"
                                optionFilterProp="children"
                                onChange={onSearchYear}
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                <Option value="">Not Set</Option>
                                <Option value="2006">2006</Option>
                                <Option value="2007">2007</Option>
                                <Option value="2008">2008</Option>
                                <Option value="2009">2009</Option>
                                <Option value="2010">2010</Option>
                                <Option value="2011">2011</Option>
                                <Option value="2012">2012</Option>
                                <Option value="2013">2013</Option>
                                <Option value="2014">2014</Option>
                                <Option value="2015">2015</Option>
                                <Option value="2016">2016</Option>
                                <Option value="2017">2017</Option>
                                <Option value="2018">2018</Option>
                                <Option value="2019">2019</Option>
                                <Option value="2020">2020</Option>

                            </Select>
                        </Row>
                    </Col>
                    <Col className="h-12 p-1" span={24} sm={12} lg={6} >
                        <Select
                            size="large"
                            className="w-full"
                            showSearch
                            placeholder="Select the landing"
                            optionFilterProp="children"
                            onChange={onLandChange}
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            <Option value="">Not Set</Option>
                            <Option value="true">True</Option>
                            <Option value="false">False</Option>
                        </Select>
                    </Col>
                    <Col className="h-12 p-1" span={24} sm={12} lg={6} >
                        <Row className="bg-yellow-400 h-full w-full">
                            <Select
                                size="large"
                                className="w-full"
                                showSearch
                                placeholder="Select the Launching"
                                optionFilterProp="children"
                                onChange={onLaunchChange}
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                <Option value="true">True</Option>
                                <Option value="false">False</Option>
                            </Select>
                        </Row>
                    </Col>

                </Row>
                <Divider />

                {/* Display cards */}

                <Row>
                    {missions.map((mission, index) => (

                        <Col key={index} className="h-64 p-1" span={24} sm={12} lg={6} >
                            <Row className="bg-gray-50 h-full w-full border-2 rounded sm:rounded-md md:rounded-lgg hover:bg-gray-100 cursor-pointer">
                                <Col className="h-48" span={24}>
                                    <Row>
                                        <Col className="p-1" span={8}>
                                            <Image preview={false} alt={mission.mission_name} src={mission.links.mission_patch_small} />
                                        </Col>
                                        <Col className=" px-2" span={16}>
                                            <h1 className="font-bold text-xl text-blue-700 my-2 pb-2"><span className="text-blue-900">#{mission.flight_number} </span>{mission.mission_name}</h1>
                                            <h1 className="font-bold ">Launch Year:<span className="text-gray-700 font-semibold ml-2">{mission.launch_year}</span></h1>
                                            <h1 className="font-bold ">Successful Launch:<span className="text-gray-700 font-semibold ml-2">{mission.launch_success ? "True" : "False"}</span></h1>
                                            <h1 className="font-bold ">Successful Land:<span className="text-gray-700 font-semibold ml-2">{mission.rocket.first_stage.cores[0].land_success ? "True" : "False"}</span></h1>
                                        </Col>
                                    </Row>
                                </Col>
                                {mission.links.youtube_id &&
                                    <Col span={24} >
                                        <Button className="float-right mr-4" type="primary" size="large" onClick={() => showVideoModal(mission.links.youtube_id)}>
                                            ▷    Launch Video
                                        </Button>
                                    </Col>
                                }
                            </Row>
                        </Col>
                    ))}
                </Row>


            </div>
            <VideoModal visible={isVideoVisible} setIsVideoVisible={setIsVideoVisible} youtubeVideo={youtubeVideo} />
        </>
    )
}

export default MainPage

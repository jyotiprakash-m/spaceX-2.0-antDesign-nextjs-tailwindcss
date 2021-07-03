import { Col, Divider, Row, Input, Select, BackTop } from 'antd'
import React from 'react'
import Loader from './Loader'
const { Search } = Input;
const { Option } = Select;
function MainPage() {
    const onSearch = value => console.log(value);
    function onSearchYear(val) {
        console.log('Year:', val);
    }
    function onLandChange(value) {
        console.log(`Land: ${value}`);
    }
    function onLaunchChange(value) {
        console.log(`Launch: ${value}`);
    }
    return (
        <>
            <BackTop />
            <div className="mx-2 md:mx-4 lg:mx-8 xl:mx-16">
                <h2 className="font-semibold text-3xl my-2">Filters</h2>
                <Row>
                    <Col className="h-12 p-1 sticky" span={24} sm={12} lg={6} >
                        <Row className="h-full w-full">
                            <Search
                                placeholder="Enter the mission name"
                                allowClear
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

                <p>
                    What is your essay about?
                    There are three things to consider before writing your essay: thesis, type, and audience. Of these, the most important by far is your thesis, or the crux of what your essay is about.

                    Your thesis, encapsulated in your thesis statement, is the central point you’re trying to make. The thesis of Bertrand Russell’s essay “In Praise of Idleness,” for example, is that people focus too much on work and don’t value time spent idly. Essays can occasionally stray and go into related tangents, but they always come back to that one core idea in the thesis.

                    You should always pinpoint your thesis before writing. If you’re having trouble nailing it down, ask yourself, “What’s the one thing I want my reader to remember when they’re done reading my essay?”

                    The best practice is to include your thesis as soon as possible, even in your topic sentence if it’s appropriate. You’ll want to reiterate it throughout the essay as well, especially when wrapping up everything in the conclusion.

                    The rest of your essay, then, supports your thesis. You can include empirical evidence, testimonials, logical deductions, or even persuasive rhetoric—whatever gets the job done. The point is that you’re building upon your initial thesis, not switching to completely different topics.

                    Types of essays
                    Like any form of writing, essays come in many different types. Sometimes the assignment dictates the type, as with admissions essays, and other times the thesis will determine it. Regardless, it helps to know what your options are, so here are some of the most common essay types:

                    Argumentative essay
                    Argumentative essays assert or defend a position. This is the most common type of school paper, so keep that in mind when writing your first college essay.

                    Admissions essay
                    Most colleges request an admissions essay in applications, which typically revolve around why you’re interested in their school.

                    Persuasive essay
                </p>
            </div>
        </>
    )
}

export default MainPage

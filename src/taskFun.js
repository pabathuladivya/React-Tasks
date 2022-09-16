import React, { useState } from 'react';
import { DatePicker, Button, Form, Input, Row, Col, Select, Radio, Modal } from 'antd'
const { Option } = Select;


const Difficult =()=>{

    const [inputList,setInputList] = useState({
        firstname : "",
        lastname  : "",
    });



    
    return (
        <>
        <table border={3}>
            <thead>
                <tr>
                    <th>Employee</th>
                    <th>Desgination</th>
                    <th>Department</th>
                    <th>Date Of Joining</th>
                    <th>status</th>
                </tr>
            </thead>
            <tbody>
                <tr></tr>
            </tbody>
        </table>
            <Form  autoComplete="off" >
                <Row>
                    <Col>
                        <br />
                        <Form.Item
                            name="firstname"
                            style={{ width: "320px" }}
                            rules={[{required: true }]} 
                        >
                            <label>First name</label>
                            <Input placeholder="firstname" />
                        </Form.Item>
                    </Col>&emsp;
                    
                    <Col>
                        <br />
                        <Form.Item name="lastname" style={{ width: "320px" }}
                        rules={[{required: true }]}  >
                            <label>Last name</label>
                            <Input placeholder="lastname" />
                        </Form.Item>
                    </Col>&emsp;
                    <Col>
                        <br />
                        <Form.Item name="date of birth" rules={[{required: true }]} >
                            <label>DOB</label>
                            <br/>
                            <DatePicker style={{ width: "320px" }}/>
                        </Form.Item>
                    </Col>&emsp;
                    <Col>
                        <br />
                        <Form.Item name="desgination" 
                            rules={[{ required: true }]}
                            style={{ width: "320px" }}
                        >
                            <label>Desgination</label>
                            <Select placeholder="Please select a desgination">
                                <Option value="coo">COO</Option>
                                <Option value="ceo ">CEO </Option>
                            </Select>
                        </Form.Item>
                    </Col>&emsp;
                    <Col>
                        <Form.Item name="department" 
                            rules={[{ required: true }]}
                            style={{ width: "320px" }}
                        >
                            <label>Department</label>
                            <Select placeholder="Please select a department">
                                <Option value="coo">COO</Option>
                                <Option value="ceo ">CEO </Option>
                            </Select>
                        </Form.Item>
                    </Col>&emsp;
                    <Col>
                        <Form.Item name="email" style={{ width: "320px" }} rules={[{ required: true }]}>
                            <label>Email</label>
                            <Input placeholder="email"/>
                        </Form.Item>
                    </Col>&emsp;
                    <Col>
                        <Form.Item name="phone" style={{ width: "320px" }} rules={[{ required: true }]}>
                            <label>Phone</label>
                            <Input placeholder="phone" />
                        </Form.Item>
                    </Col>&emsp;
                    <Col>
                        <Form.Item name="phone"
                            rules={[{ required: true}]}
                            style={{ width: "320px" }}
                        >
                        </Form.Item>
                    </Col>&emsp;
                    <Col>
                        <Form.Item name="Experience" rules={[{ required: true}]} style={{ width: "320px" }}>
                            <label>Experience</label>
                            <Input placeholder="Experience" />
                        </Form.Item>
                    </Col>&emsp;
                    <Col>
                        <Form.Item  name="gender" rules={[{ required: true}]} style={{ width: "320px" }}>
                            <label>Gender</label>
                            <br />
                            <Radio.Group>
                                <Radio value="male"> Male </Radio>
                                <Radio value="female"> Female </Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item  name="Address" rules={[{ required: true}]} style={{ width: "320px" }}>
                            <label>Address</label>
                            <Input placeholder="Address" />
                        </Form.Item>
                    </Col>
                    <Col>
                        <Form.Item  name="zip code" rules={[{ required: true}]} style={{ width: "320px" }}>
                            <label>Zip Code</label>
                            <Input placeholder="500000" />
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item>
                <Button
                    htmlType="Submit"
                    type="primary"
                >
                    Save
                </Button>
                </Form.Item>                
            </Form>
        </>
    )
}
export default Difficult;
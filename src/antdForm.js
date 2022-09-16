import React from "react";
import { DatePicker, Button, Form, Input, Row, Col, Select, Radio, Modal } from 'antd'
const { Option } = Select;

class GridFormCom extends React.Component {
    constructor(){
        super()
    }
    state = [{
       data : [],
    }]

    
    // state = [{
    //     dateSource : "",
    // }]

    // columns = {
    //     emp : "",
    //     designation : "",
    //     department : "",
    //     DataOfJoining : "",
    //     status : ""
    // }

    onSave = () => {
       
    };

    render() {
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
                <Form onFinish={this.onSave} autoComplete="off" >
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
                                <label>Country</label>
                                <Select placeholder="Please select a country">
                                    <Option value="india">India</Option>
                                    <Option value="china ">China </Option>
                                </Select>
                            </Form.Item>
                        </Col>&emsp;
                        <Col>
                            <Form.Item name="state"
                                rules={[{ required: true}]}
                                style={{ width: "320px" }}
                            >
                                <label>State</label>
                                <Select placeholder="Please select a state" rules={[{ required: true}]}>
                                    <Option value="hyderabad">Hyderabad</Option>
                                    <Option value="delhi ">Delhi</Option>
                                </Select>
                            </Form.Item>
                        </Col>&emsp;
                        <Col>
                            <Form.Item name="city" rules={[{ required: true}]} style={{ width: "320px" }}>
                                <label>City</label>
                                <Input placeholder="city" />
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
}
export default GridFormCom;
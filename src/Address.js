import { Modal, Select, Form, Col, Input, } from 'antd';
import { PlusOutlined ,EditOutlined,DeleteOutlined} from '@ant-design/icons';

import React, { useState } from "react";

const {Option} = Select;
const AddressDetails =()=>{

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    

    return(
        <>
         <PlusOutlined onClick={showModal} />
         <table>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Address</th>
                        <th>Zipcode</th>
                    </tr>
                </thead>
            </table>
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Form>
           
                <Col>
                <Form.Item name="type" 
                                rules={[{ required: true }]}
                                style={{ width: "320px" }}
                            >
                                <label>Type</label>
                                <Select placeholder="Please select Address type">
                                    <Option value="Permanent">Permanent</Option>
                                    <Option value="Recedential">Recedential</Option>
                                </Select>
                            </Form.Item>
                </Col>&emsp;
                <Col>
                            <br />
                            <Form.Item
                                name="Address"
                                style={{ width: "320px" }}
                                rules={[{required: true }]} 
                            >
                                <label>Address</label>
                                <Input placeholder="Address" />
                            </Form.Item>
                        </Col>&emsp;
                        <Col>
                <Form.Item name="country" 
                                rules={[{ required: true }]}
                                style={{ width: "320px" }}
                            >
                                <label>Desgination</label>
                                <Select placeholder="Please select country">
                                    <Option value="India">Permanent</Option>
                                    <Option value="USA">Recedential</Option>
                                </Select>
                            </Form.Item>
                </Col>&emsp;
                <Col>
                <Form.Item name="state" 
                                rules={[{ required: true }]}
                                style={{ width: "320px" }}
                            >
                                <label>state</label>
                                <Select placeholder="Please select state">
                                    <Option value="AP">Permanent</Option>
                                    <Option value="TS">Recedential</Option>
                                </Select>
                            </Form.Item>
                </Col>&emsp;
                <Col>
                <Form.Item name="city" 
                                rules={[{ required: true }]}
                                style={{ width: "320px" }}
                            >
                                <label>city</label>
                                <Input placeholder="city" />
                            </Form.Item>
                </Col>&emsp;
                <Col>
                <Form.Item name="zipcode" 
                                rules={[{ required: true }]}
                                style={{ width: "320px" }}
                            >
                                <label>zipcode</label>
                                <Input placeholder="zipcode" />
                            </Form.Item>
                </Col>&emsp;
        </Form>
        </Modal>
        </>
    )
}
export default AddressDetails;
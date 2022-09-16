import React, { Component } from 'react';
import { Modal } from 'antd';
import { PlusCircleOutlined , EditOutlined,DeleteOutlined} from '@ant-design/icons'

class Qualification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Qualification',
            act: 0,
            index: '',
            datas: [],
            selection: [],
            status: "Active",
            modal: false,
        }
        this.refs = React.createRef;
    }

    componentDidMount() {
        this.setState(this.countries);
    }

    handlecountry = (id) => {
        const dt = this.states.filter(x => x.countryId === id)
        this.setState(dt)
    }

    handleState = (id) => {
        const dt = this.cityes.filter(c => c.stateId === id)
        this.setState(dt)
    }
    fSubmit = (e) => {
        e.preventDefault();
        console.log('try');
        let datas = this.state.datas;
        let name = this.refs.name.value;
        let branch = this.refs.branch.value;
        let designation = this.refs.designation.value;

        if (this.state.act === 0) {   //new
            let data = {
                name, branch,designation,
            }
            datas.push(data);
            this.setState({ modal: false });
        } 
        else {                      //update
            let index = this.state.index;
            datas[index].name = name;
            datas[index].branch = branch;
            datas[index].designation = designation;

        } 
        this.setState({ modal: false });
        this.setState({
            datas: datas,
            act: 0
        });
        this.refs.myForm.reset();
    }

    fRemove = (i) => {
        let datas = this.state.datas;
        datas.splice(i, 1);
        this.setState({
            datas: datas
        });
        this.refs.myForm.reset();
        this.refs.name.focus();
    }

    fEdit = (i) => {
        this.setState({ modal: true });
        let data = this.state.datas[i];
        this.refs.name.value = data.name;
        this.refs.branch.value = data.branch;
        this.refs.designation.value = data.designation;
        this.setState({
            act: 1,
            index: i
        });
    }

    showModal = () => {
        this.setState({ modal: true });
    };
    handleCancel = () => {
        this.setState({ modal: false });
    }

    render() {
        let datas = this.state.datas;
        return (
            <>
            <h3>Qualification</h3>
                <PlusCircleOutlined onClick={this.showModal} />
                <Modal visible={this.state.modal}
                    onOk={(e) => this.fSubmit(e)} onCancel={this.handleCancel}>

                    <h2>{this.state.title}</h2>
                    <form ref="myForm" className="myForm">
                    Name :<input type="text" ref="name" className="formField" />
                    B.Tech:<select type="text" ref="branch" className="formField">
                        <option>cse</option>
                        <option>ece</option>
                        <option>mech</option>
                        <option>eee</option>
                        <option>civil</option></select>
                        <br />
                    designation:<select type="text" ref="designation" className="formField" >
                        <option>Front End</option>
                        <option>Back End</option>
                        <option>Analyst</option></select>
                        <br />
                    </form>
                </Modal>
                <table width="500px" border="2">
                    <thead>
                        <tr>
                        <th>Name</th>
                            <th>B.Tech</th>
                            <th>Desgination</th>
                        </tr>
                        {datas.map((data, i) => <tr key={i} >
                        <td>{data.name}</td>
                            <td>{data.branch}</td>
                            <td>{data.designation}</td>
                            <td><DeleteOutlined onClick={() => this.fRemove(i)} className="myListButton"/></td>
                            <td><EditOutlined onClick={() => this.fEdit(i)} className="myListButton"/></td>
                        </tr>)}
                    </thead>
                </table>
            </>
        );
    }
}
export default Qualification;
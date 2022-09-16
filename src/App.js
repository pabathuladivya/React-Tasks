import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
// import App1 from './hello';
import App2 from './class';
import App3 from './class';
import Function from './function';
import Props from './crudRouting';
import Classprops from './classProps';
// import StateFunc from './stateFunc';
// import Stateclas from './StateClass';
import Cartexamp from './setProduct';
import Relation from './ParentRelation';
import Spread from './function';
import Destructure from './function';
import Usehooks from './function';
import Datemethods from './function';
import Conditional from './conditional';
import Sample from './form';
import Array from './arrayMethods';
import Navbar from './routing/navBar';
import About from './routing/about';
import Home from './routing/home';
import Form3 from './crudReact';
import Address from './Address3';
import Qualification from './qualification';
import TableRoute from './tableRoute';
import FormRoute from './formRoute';
import { BrowserRouter ,Routes, Route, } from "react-router-dom";
// import Dashboard from './dashboard';
import PracticeFun from './practiceFunction';
import PracticeCls from './practiceClass';
import PracticeCount from './practiceFunction';
import PractCount from './practiceClass';
import Formm from './practicing';
import Checkbox from './checkboxRadio';
import Ternary from './ternary';
import Crud from './crud';
import Disabled from './disable';
import RemoveItems from './removeItems';
import Validations from './validations';
import Validate from './validations';
import SimpleCrud from './crudSimple';
import ProductForm from './add';
import SampleCrud from './sampleCrud';
import Login from './Validationss';
import TaskForm from './taskForm';
import Fields from './fields';
import FormYt from './formValidyt';
import FormYtt from './formValidyt';
import Test5 from './antdForm';
import GridFormCom from './antdForm';
import Example from './antdDatePicker';
import Form4 from './validationForm';
import OrderdSummary from './routing/OrderdSummary'
import ButtonProfile from './ButtonRouteProfile';
import Params from './params';
import Screen5 from './routing/screen5';
import DynamicParams from './routing/DynamicRoute';
import Stateclas from './StateClass';
import StateFunc from './stateFunc';
import Hommie from './routing/HommieRoute';


// import Difficult from './taskFun';
// import AddressDetails from './Address';
// import Form3 from './crudReact';
// import SearchComponent from './disableFun';
// import NormalAddress from './addressnormal';
// import Address from './Address3';
// import Qualification from './qualification';






function App() {
// class App extends React.Component{

  // render(){
  return (
    // // <div className="App">
    //   { <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header> }
      
    // // </div>

    // <App1/>
    // <App2/>
    // <App3/>
    // <Function/>
    // <div>
    // <Props name={"jessy"} age={13} address={"hyd"}/>
    // <Props name={"shika"} age={17} address={"banglore"}/>
    // <Props name={"marina"} age={15} address={"chennai"}/>
    // </div>
    // <div>
    // <Classprops name={"java"} year={1978}/>
    // <Classprops name={"react"} year={1981}/>
    // </div>
<div>
    {/* <StateFunc /> */}
    {/* <Stateclas /> */}
    {/* <Cartexamp/> */}
    {/* <Relation/> */}
    {/* <Spread /> */}
    {/* < Destructure/> */}
    {/* <Usehooks /> */}
    {/* <Datemethods />
    <Conditional/>
    <Sample />
    <Array/> */}
    <BrowserRouter> 
      <Navbar /> 
      {/* <Home /> */}
     {/* <Dashboard />  */}
      <Routes> 
      {/* <Switch>  */}
       {/* <Route path="/form" exact element={<Form3/>}/>
      <Route path ="/address" element={<Address/>}/>
      <Route path="/qualification" element={<Qualification/>}/>
      <Route path="/tableRoute" element={<TableRoute/>}/>
      <Route path="/formRoute" element={<FormRoute/>}/> */}
       <Route path="/home" exact element={<Home/>}/>
      <Route path ="/about" element={<About/>}/>
      {/* <Route path ="ButtonRouteProfile" element={<ButtonProfile/>}/> */}
      {/* <Route path ="/params/:id" element={<Params/>}/> */}
      <Route path="/home/:id" element={<OrderdSummary/>}/>
      {/* <Route path ="/address" element={<Address/>}/>
      <Route path="/qualification" element={<Qualification/>}/> */}
      <Route path="/user/:id" element={<DynamicParams/>}/>
      <Route path="nested" element={<Screen5/>}>
      <Route path ="Stateclas" element={<Stateclas/>}/>
      <Route path="StateFunc" element={<StateFunc/>}/>
      {/* <Route path="hommie" element={<Hommie/>}/> */}

      </Route>
      <Route path="hommie" element={<Hommie/>}/>
      {/* <Route path ="/ButtonLogin" element={<OrderdSummary/>} /> */}
      {/* <Route path="/qualification" element={<Qualification/>}/> */}
    
     </Routes> 
      {/* </Switch>  */}

     </BrowserRouter>
    {/* <PracticeFun />
    <PracticeCls />
    <PracticeCount />
    <PractCount /> */}
    {/* <Formm/> */}
    {/* <Checkbox/>
    <Ternary /> */}
    {/* <Crud />
    <Disabled />
    <RemoveItems/>
    <Validations /> */}
    {/* <Validate /> */}
    {/* <SimpleCrud /> */}
    {/* <ProductForm /> */}
    {/* <SampleCrud/> */}
    {/* <Login/> */}
    {/* <TaskForm/> */}
    {/* <Fields/> */}
    {/* <FormYt/> */}
    {/* <FormYtt/> */}
    {/* <Test5/> */}
    {/* <GridFormCom/> */}
    {/* <Difficult /> */}
    {/* <AddressDetails/> */}
    {/* <Form3/>&emsp;&emsp;
    <Address />&emsp;
    <Qualification/> */}
    {/* <NormalAddress /> */}
    {/* <Form4/> */}
    {/* <SearchComponent/> */}
    {/* <Example/> */}
    </div>
    
  );
  // }
}

export default App;

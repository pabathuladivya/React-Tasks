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
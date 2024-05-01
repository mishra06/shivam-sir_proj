
import "./App.css";
import StudentSheet from "./components/StudentList/StudentSheet";
import Dashboard from "./components/dashbord/Dashboard";
import SideBar from "./components/dashbord/SideBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() {
  return(
<BrowserRouter>
    <div style={{width:'100%', height:'100vh', display:'flex', justifyContent:'space-between'}} className="screen_sec">
        <div style={{marginLeft:'1rem',display:'flex', width:'18%', height:'100%',border:'1px solid black',borderRadius:'18px 0 0 18px'}} className="sidebar"><SideBar/></div>
        <div style={{width:'80%', height:'100%'}} className="otherScreen"> 
              <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/studentSheet" element={<StudentSheet/>}/>
                <Route path="/parents" element={<Dashboard/>}/>
                <Route path="/class" element={<Dashboard/>}/>
                <Route path="/section" element={<Dashboard/>}/>
                <Route path="/idcard" element={<Dashboard/>}/>
                <Route path="/admitcard" element={<Dashboard/>}/>
                <Route path="/collection" element={<Dashboard/>}/>
                <Route path="/payments" element={<Dashboard/>}/>
                <Route path="/viewfee" element={<Dashboard/>}/>
                <Route path="/fee_groups" element={<Dashboard/>}/>
                <Route path="/viewfee" element={<Dashboard/>}/>
                <Route path="/payment_history" element={<Dashboard/>}/>
                <Route path="/logout" element={<Dashboard/>}/>
              </Routes>
        </div>
    </div>
   </BrowserRouter>
  )
}

export default App;

import React, { useRef, useContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Button, Container, Table } from 'react-bootstrap';
import Contact from './contact';
import { userContext } from "./context";



function MyLink(props){
  return(
<NavLink className="link px-2" to={props.path}  
      style={({ isActive}) => {
        return {
          textDecoration: isActive ? "none" : "Underline",
         };
      }}
      > {props.linkName}
</NavLink>
  );
}


export function Menu(){
  let user = useContext(userContext);
  return(
    <nav className='bg-secondary p-2 mb-3 text-center'>
      <MyLink path="/" linkName="Main" />
      <MyLink path="/Courses" linkName="Courses" />
      <MyLink path="/Contact" linkName="Contact Us" />
      <span className="px-2" >{user}</span>
    </nav>
  );
}



function Index(){
  const heder1 = useRef();
  return(
  
<div>
<Menu/>
<h3 ref={heder1}>Hello</h3>
<Button onClick={()=>(heder1.current.innerHTML = "React")}>Click Me</Button>
</div>
  );
}



function Courses(){
  const table = useRef();
  const tr = useRef([]);

  const data = [
    ["JavaScript", 1000],
    ["React", 1500],
    ["Django", 2000],
    ["Flutter", 2500],

  ];


  const DeleteRow = i => {
    const index = tr.current[i].rowIndex;
    table.current.deleteRow(index);
  }

  return(
<>
<Menu />
<h4>Courses</h4>
<Table striped bordered hover className="my-3" ref={table}>
  <thead>
    <tr>
      <th>Courses</th>
      <th>Price</th>
      <th className="text-center">Delete</th>
    </tr>
  </thead>
<tbody>
  {data.map((item, i) =>{
    return (<tr ref={(el)=>(tr.current[i] = el)} key={i}>
      <td>{item[0]}</td>
      <td>{item[1]}</td>
      <td className="text-center">
        <Button variant="danger" onClick={()=> DeleteRow(i)}>Delete</Button>
      </td>
    </tr>
    );
  })}
</tbody>
</Table>
</>
  );
}

function App(){
  return (
    <userContext.Provider value={"John Doe"}>
<BrowserRouter>
    <Container className='p-3 my-3 bg-light'>
    <Routes>
      <Route path="/" element={<Index />} />  
      <Route path="/Main" element={<Index />} />  
      <Route path="/Courses" element={< Courses/>} />  
      <Route path="/Contact" element={<Contact/>} />  
    </Routes>
    </Container>
</BrowserRouter>
</userContext.Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import Content from './Content.js';
import Contentinfo from './Contentinfo.js';
function TableNav()
{
    const[value,setValue]= useState([
        false,false,true,false,false

    ]);
    function handleClick(e)
    {
        var a= parseInt(e.target.id);
        let newArray=[false,false,false,false,false];
        newArray[a]=true;
        setValue(newArray);
    }
  return(
    <div className="tablediv">
    <table>
     <thead className="tablehead">
     <tr>
            <th id="0" onClick={handleClick} style={value[0] ? {backgroundColor : 'rgb(232, 211, 245)'}:null}>
                Digital Foundation
            </th>
            <th id="1" onClick={handleClick} style={value[1] ? {backgroundColor : 'rgb(232, 211, 245)'}:null}>
                Digital ADM
            </th>
            <th id="2" onClick={handleClick} style={value[2] ? {backgroundColor : 'rgb(232, 211, 245)'}:null}>
                Living AI
            </th>
            <th id="3"onClick={handleClick} style={value[3] ? {backgroundColor : 'rgb(232, 211, 245)'}:null}>
                Digital Cunsultation
            </th>
            <th id="4" onClick={handleClick} style={value[4] ? {backgroundColor : 'rgb(232, 211, 245)'}:null}>
                Everywhere Experience
            </th>

        </tr>
     </thead>
    </table>
    {value.map((item,index) => {return( item ? <Content
    img={Contentinfo[index].img} desc={Contentinfo[index].desc}        
    /> : null )  } ) }
    
    </div>
  )
}
export default TableNav;
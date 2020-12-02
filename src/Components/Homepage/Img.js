import React,{useState} from 'react';
import Imageurl from './Imageurl';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Button from '@material-ui/core/Button';
function Img()
{
 
    var url = 1;
    const [value ,setValue]= useState(2);
     // const interval = window.setInterval(myTimer,5000);
  
    
   
   function forward()
   {

              if (value === 4)
              {
                   setValue(0);
             }
             else
               { setValue(value + 1);}
     }
     function backward()
     {
  
                if (value === 0)
                {
                     setValue(4);
               }
               else
                 { setValue(value - 1);}
       }
    const newStyle1 = {
       
       
        top:'70%',
        left:'70%'
        
    };
    const newStyle2 = {
        top:'70%',
        left:'20%'
    }
   const newStyle={
     top:'90%',
     left:'50%',
     display:'flex',
     flexDirection:'row',
     position:'absolute',
     transform:'translateX(-50%)',

   };
    const rdnStyle={
      padding:'0px',
      color:"rgba(255,255,255,1)"
    };
    return(
        <div>
        <div className="image">
           <img src={Imageurl[0]} id="img" alt="no" style={value === 0  ? {opacity:1}:{opacity:0}} height="600" />
           <img src={Imageurl[1]} id="img" alt="no" style={value === 1  ? {opacity:1}:{opacity:0}} height="600"/>
           <img src={Imageurl[2]} id="img" alt="no" style={value === 2  ? {opacity:1}:{opacity:0}} height="600"/>
           <img src={Imageurl[3]}  id="img" alt="no" style={value === 3  ? {opacity:1}:{opacity:0}} height="600"/>
           <img src={Imageurl[4]} id="img" alt="no" style={value === 4  ? {opacity:1}:{opacity:0}} height="600"/>
           <Button className="Buton"  onClick = {backward}  style={newStyle2}>
              <ArrowBackIosIcon fontSize='large'  style={{color : 'white'}} />
              </Button> 
            <Button className="Buton"  onClick = {forward}  style={newStyle1}>
              <ArrowForwardIosIcon fontSize='large'  style={{color : 'white'}} />
              </Button>  
             <RadioGroup style={newStyle}>
               <Radio checked={value === 0 ? true:false} size ={value === 0 ? "medium":"small"}  style={rdnStyle} />
               <Radio checked={value === 1 ? true:false}  size ={value === 1 ? "medium":"small"}   style={rdnStyle} />
               <Radio checked={value === 2 ? true:false}  size ={value === 2 ? "medium":"small"}   style={rdnStyle} />
               <Radio checked={value === 3 ? true:false}  size ={value === 3 ? "medium":"small"}   style={rdnStyle} />
               <Radio checked={value === 4 ? true:false}  size ={value === 4 ? "medium":"small"}  style={rdnStyle} />
             </RadioGroup>
        </div>
       
      </div>
      
    )
}

export default Img;
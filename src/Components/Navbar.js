import React,{useState} from 'react';
import DehazeRoundedIcon from '@material-ui/icons/DehazeRounded';
import Button from '@material-ui/core/Button';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import Search from './Search.js';
import Table from './Table.js';
import Navinfo from './Navinfo.js';
import { NavLink } from 'react-router-dom';
import { Hidden } from '@material-ui/core';
function Navbar(){
    const[click,setClick]= useState(false);
    const[searchClick,setSearch] = useState(false);
    const[value,setValue] = useState([
       
    ]);
    const [over,setOver] = useState(false);
    function handleSearchClick(){
        setSearch(true);
        document.getElementById("whole").style.overflow = 'hidden';
    }
    function closeHandle(){
       
        setSearch(false);
       document.getElementById("whole").style.overflow = 'scroll';
    }
    function handleOver(e){
            var a=parseInt(e.target.id) ;
            setOver(true);
            console.log(value);
            console.log(a);
            let newArray=[false,false,false,false,false,false];
            newArray[a] = true;
            console.log(newArray);
            setValue(newArray);
            console.log(value);
    }
    function handleOut()
    {   setOver(false);
         let newArray=[false,false,false,false,false,false];
         setValue(newArray);
    }
    window.addEventListener("resize", myFunction);
    function myFunction()
    {
        console.log(window.innerWidth);
        
        if(window.innerWidth <= 850)
        {
            console.log("reached");
            setClick(false);
          
        }
    }
    function handleClick()
    {
        setClick(!click);
        console.log("click");
        console.log(click);
    }
    const btnStyle={
        marginLeft:'20px'

    };
    return (
        <div>
        {searchClick ?
        <div className="search" >
                <Search method={closeHandle} />
        </div> 
        :null}
        <nav className="Navbar" style= { click ? {'background':'rgba(10, 10, 10,0.6)'}:null} >
            <a href='/' ><div className="header">
                ZenSar
            </div>
            </a>
            {click?<ul>
                
                <li id="0" onMouseOver={handleOver} >Solution</li>
                <li id="1" onMouseOver={handleOver} >Service  </li>
                <li id="2" onMouseOver={handleOver} >Industies</li>
                <li id="3" onMouseOver={handleOver}>Alliances</li>
                <NavLink to='/Insight' style={{textDecoration:"none"}}><li id="4" onMouseOver={handleOver} >Insight</li> </NavLink>
                <li id="5" onMouseOver={handleOver} >About us</li>
            </ul>:null}
            <div>
            {!click ? <Button   style={btnStyle} onClick = {handleSearchClick} > <SearchRoundedIcon style={{color:'white', fontSize: 40}}/></Button> : null}
            <Button variant="outlined" style={btnStyle} onClick = {handleClick} > <DehazeRoundedIcon style={{color:'white',fontSize: 40}} /></Button>
            </div>
        </nav>
                {value[0] ? <Table method={handleOut} val ={over} value={Navinfo[0]} />:null}
                {value[1] ? <Table method={handleOut} val ={over} value={Navinfo[1]} />:null}
                {value[2] ? <Table  method={handleOut} val ={over}  value={Navinfo[2]} />:null}
                {value[3] ? <Table  method={handleOut} val ={over} value={Navinfo[3]} />:null} 
                {value[5] ? <Table method={handleOut}  val ={over} value={Navinfo[5]} />:null}
        </div>

    )
}

export default Navbar;
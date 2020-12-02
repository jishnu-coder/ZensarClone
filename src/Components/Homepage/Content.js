import React,{useState} from 'react';
// import Contentinfo from './Contentinfo.js';
import Button from '@material-ui/core/Button';
function Content(props){

    return (
        <div>
          <table className="tableContent">
              <thead>
                <tr>
                    <th id="imgNav">
                    <img src={props.img} alt="" />
                    </th>
                    <th id="desc">  
                    {props.desc} <br/>
                    <Button variant="outlined" color="primary">
                       Read More
                     </Button>
                    </th>
                </tr>
              </thead>
          </table>
           
          
        </div>
    )
}

export default Content;
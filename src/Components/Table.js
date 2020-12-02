import React from 'react';
import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';
import {NavLink} from 'react-router-dom';

function Table(props){
    const newStyle={
        backgroundColor:'rgba(0,0,0,0.7)',
        height:'100%',
        
    };
    const itemstyle={
        textAlign:'center',
        
    };
    return(
        <div className="NavInfo" onMouseLeave={props.method}>
        <Grow in={props.val} timeout={800}>
        <Grid container spacing={0}  direction="row" justify="center" alignItems="center" style={newStyle} >
            {props.value.map(item =>
             {return(<Grid item xs={4} style={itemstyle} ><NavLink style={{textDecoration:"none"}} to ={{pathname: "/"+item }} ><h3>{item}</h3></NavLink></Grid>) ; })}
            </Grid>
            </Grow>
        </div>
        
    )
}
export default Table;
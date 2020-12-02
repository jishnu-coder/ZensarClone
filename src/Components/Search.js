import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import Button from '@material-ui/core/Button';


function Search(props){
    console.log(props);
    const useStyles = makeStyles((theme) => ({
        root: {
          padding: '2px 4px',
          display: 'flex',
        //   alignItems: 'center',
          width: '800px',
          backgroundColor:'transparent',
          marginLeft:'auto',
          marginRight:'auto',
          
        },
        input: {
          marginLeft: theme.spacing(1),
          flex: 1,
          color:"white",
          fontSize:'50px'
        },
        iconButton: {
          padding: 10,
          color:"white",
          fontSize:'large'
        },
       
      }));
    
      const classes = useStyles();
     
return(
    <Paper component="form" className={classes.root}>
    <IconButton type="submit"  className={classes.iconButton} aria-label="search">
      <SearchIcon  style={{color:'white', fontSize: 40}} />
    </IconButton>
    <InputBase
      className={classes.input}
      placeholder="type keyword(s) here"
    //   inputProps={{ 'aria-label': 'search google maps' } }
    />
    <Button className={classes.iconButton} aria-label="close" onClick = {props.method}>
    <CloseRoundedIcon  style={{color:'white', fontSize: 40}} />
    </Button>
  </Paper>
)
}
export default Search;
import {alpha, AppBar, Avatar, Badge, InputBase, makeStyles, Toolbar, Typography } from "@material-ui/core";
import { Cancel, Mail, Notifications, Search } from "@material-ui/icons";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
 toolbar:{
    display:'flex',
    justifyContent: "space-between"
 },
 logoLg:{
    display: 'none',
    [theme.breakpoints.up("sm")]:{
    display:"block",
    }
 },
 logoSm:{
    display:"block",
    [theme.breakpoints.up("sm")]:{
        display:"none",
    }
 },
 search:{
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: "40%",
    padding:"5px",
    border:"1px solid black",
    [theme.breakpoints.down("sm")]: {
        display: (props) => props.open ? "flex" : "none",
        width: "70%",
    },
 },
 input:{
    width: "100%",
    color: "#fff",
    marginLeft: theme.spacing(2),
 },
 cancel:{
    [theme.breakpoints.up("sm")] : {
        display: 'none'
    },
    marginLeft: "auto",
 },
 searchButton:{
    marginLeft: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
        display: "none",
    },
 },
 icons:{
    alignItems: "center",
        display: (props) => (props.open ? "none" : "flex"),
 },
 badge:{
    marginRight: theme.spacing(2)
 },
}));

const Navbar = () => {
    const [open, setOpen] = useState(false)
  const classes = useStyles({open})
  return (
  <AppBar position="fixed">
    <Toolbar className={classes.toolbar}>
    <Typography variant="h6" className={classes.logoLg} >
        Vanper Star
    </Typography>
    <Typography variant="h6" className={classes.logoSm} >
        Vanper
    </Typography>
    <div className={classes.search}>
        <Search />
        <InputBase placeholder="Search..." className={classes.input} />
        <Cancel className={classes.cancel} onClick={() => setOpen(false)} />
    </div>
    <div className={classes.icons}>
        <Search className={classes.searchButton} 
        onClick={() => setOpen(true)} />
        <Badge badgeContent={5} color="secondary" className={classes.badge}>
            <Mail />
        </Badge>
        <Badge badgeContent={2} color="secondary" className={classes.badge}>
            <Notifications />
        </Badge>
        <Avatar alt="Majidov Anvar" src="https://picsum.photos/20/20" />
    </div>
    </Toolbar>
  </AppBar>
  )
};

export default Navbar;
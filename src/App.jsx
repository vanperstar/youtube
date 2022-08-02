import {Grid, makeStyles } from "@material-ui/core";
import Feed from "./components/feed";
import Leftbar from "./components/leftbar";
import Navbar from "./components/navbar";
import Rightbar from "./components/rightbar";
import Add from "./components/rightbar";

const useStyles = makeStyles((theme) => ({
 righ:{
  [theme.breakpoints.down("sm")] : {
    display: "none",
  }
 }
}));

const App = () => {
  const classes = useStyles()
  return <div>
   <Navbar />
   <Grid container>
    <Grid item sm={2} xs={2}>
      <Leftbar />
    </Grid>
    <Grid item sm={7} xs={10}>
      <Feed />
    </Grid>
    <Grid item sm={3} className={classes.righ}>
      <Rightbar />
    </Grid>
   </Grid>
   <Add />
  </div>;
};

export default App;
import { Container, Fab, FormControlLabel, FormLabel, makeStyles, MenuItem, Modal, Radio, RadioGroup, TextField, Tooltip } from "@material-ui/core";
import { Add, } from "@material-ui/icons";
import { useState } from "react";


const useStyles = makeStyles((theme) => ({
    fab:{
        position: "fixed",
        bottom: 20,
        right: 20,
    },
    container:{
        width: 500,
        height: 450,
        backgroundColor: "white",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: "auto",
        [theme.breakpoints.down("sm")] : {
            with: "100vw",
            height: "100vh",
        }
    },
}));

const AddJs = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false)
  return (
    <>
        <Tooltip title="Add" aria-label="add" onClick={() => setOpen(true)}>
            <Fab color="primary" className={classes.fab}>
                <Add />
            </Fab>
        </Tooltip>
        <Modal open={open}>
            <Container className={classes.container}>
                <form className={classes.form} autoComplete="off">
                    <div className={classes.item}>
                        <TextField id="standart-basic" label="Title" size="small" style={{width: "100%"}} />
                    </div>
                    <div className={classes.item}>
                        <TextField id="outlined-multiline-static" multiline rows={4} defaultValue="Tell your story..." variant="outlined" label="Description" size="small" style={{width: "100%"}} />
                    </div>
                    <div className={classes.item}>
                        <TextField select label="Visibility" value="Publick" >
                            <MenuItem value="Publick">Publick</MenuItem>
                            <MenuItem value="Private">Private</MenuItem>
                            <MenuItem value="Unlisted">Unlisted</MenuItem>
                        </TextField>
                    </div>
                    <div className={classes.item}>
                        <FormLabel component="legent">We can comment</FormLabel>
                        <RadioGroup>
                            <FormControlLabel value="Everybody" control={<Radio size="small" />} label="Everybody" />
                            <FormControlLabel value="My Friends" control={<Radio size="small" />} label="My Friends" />
                            <FormControlLabel value="Nobody" control={<Radio size="small" />} label="Nobody" />
                            <FormControlLabel value="Custom" disabled control={<Radio size="small" />} label="Custom(Premium)" />
                        </RadioGroup>
                    </div>
                </form>
            </Container>
        </Modal>
    </>
  );
};

export default AddJs;
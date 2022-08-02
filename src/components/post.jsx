import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    card:{
      marginBottom:theme.spacing(5)
    },
    media:{
      height:"350px",
      [theme.breakpoints.down("sm")] : {
        height: 150,
      }
    },
}));

const Post = () => {
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <CardActionArea>
      <CardMedia className={classes.media} 
      image="https://picsum.photos/300/300"
      title="My Post"
      />
      <CardContent>
        <Typography gutterBottom variant="h5">My Firs Post</Typography>
        <Typography variant="body2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Natus nihil minus qui magni eligendi doloremque. 
        Numquam sunt est tempora iure consectetur ducimus 
        fugiat aliquam, officia fuga tenetur ut iusto in.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Natus nihil minus qui magni eligendi doloremque. 
        Numquam sunt est tempora iure consectetur ducimus 
        fugiat aliquam, officia fuga tenetur ut iusto in.
        </Typography>
      </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">Share</Button>
        <Button size="small" color="primary">Learn More</Button>
      </CardActions>
    </Card>
  )
};

export default Post;
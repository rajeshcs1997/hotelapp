import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import Chip from '@material-ui/core/Chip';
import Badge from '@material-ui/core/Badge';
import StarIcon from '@material-ui/icons/Star';
import IconButton from '@material-ui/core/IconButton';
import './Hotelcard.css'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

const Hotelcard = () => {
  const classes = useStyles();
  const [ hoteldata, setHoteldata ] = useState("");
  useEffect( () => {
    fetch(`${process.env.PUBLIC_URL}/hoteldata.json`,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       } 
    })
      .then(response => response.json())
      .then(data => setHoteldata(data))
      .catch( err => console.log("error",err))
  }, []);
  console.log("hjd",hoteldata)
  return (
    <>
      { hoteldata && hoteldata.map((val, res) =>
        <div style={{margin: "20px"}}>
          <Card className={classes.root}>
          <div style={{display: "flex"}}>
            <div>
            <IconButton aria-label="show 11 new notifications" color="inherit">
              <Badge badgeContent={val.rating} color="secondary">
                <StarIcon />
              </Badge>
            </IconButton>
            </div>
            <div style={{marginLeft: '20px'}}>
              <p>{val.name}</p>
              <p>${val.price}</p>
            </div>
          </div>
          <CardMedia
            className={classes.media}
            image={val.image}
            title="Paella dish"
          />
          <CardContent>
            <h4>{val.propertyType}</h4>
            <Chip label={val.facility} variant="outlined" />
            <Typography variant="body2" color="textSecondary" component="p">
              {val.description}
            </Typography><br/>
            <Rating name="read-only" value={val.rating} readOnly />
          </CardContent>
        </Card>
        </div>
      )} 
    </>
  );
};

export default Hotelcard;
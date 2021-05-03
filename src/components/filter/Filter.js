import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles({
  root: {
},
});

const Filter = ({onPrice, price, rating, property}) => {
  const classes = useStyles();
  const [value, setValue] = useState([0, 100]);
  const [ratingvalue, setRatingvalue] = useState('');
  const [propertyvalue, setPropertyvalue] = useState ('')

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    price(newValue)
  };
  const handleRatingChange = (event) => {
    setRatingvalue(event.target.value);
    rating(event.target.value)
  };
  const handlePropertyChange = (event) => {
    setPropertyvalue(event.target.value)
    property(event.target.value)
  };

  return (
    <>
      <div style={{margin: "30px"}}>
        <h3>Set Filters</h3>
        <div className={classes.root}>
          <Typography id="range-slider" gutterBottom>
            Price
          </Typography>
          <Slider
            value={value}
            onChange={handleSliderChange}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
          />
        </div>
        <br/>
        <div>
          <Typography id="checkbox" gutterBottom>
            Start Category
          </Typography>
          <FormControl component="fieldset">
            <RadioGroup aria-label="star Category" name="rating" value={ratingvalue} onChange={handleRatingChange}>
              <FormControlLabel value="5" control={<Radio color="primary"/>} label="Five" />
              <FormControlLabel value="4" control={<Radio color="primary"/>} label="Four" />
              <FormControlLabel value="3" control={<Radio color="primary"/>} label="Three" />
            </RadioGroup>
          </FormControl>
        </div>
        <br />
        <div>
          <Typography id="checkboxproperty" gutterBottom>
            Property Type
          </Typography>
          <FormControl component="fieldset">
            <RadioGroup aria-label="star Category" name="rating" value={propertyvalue} onChange={handlePropertyChange}>
              <FormControlLabel value="Apartment" control={<Radio color="primary"/>} label="Apartment" />
              <FormControlLabel value="Holiday" control={<Radio color="primary"/>} label="Holiday" />
              <FormControlLabel value="Guest" control={<Radio color="primary"/>} label="Guest" />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
    </>
  );
};

export default Filter;
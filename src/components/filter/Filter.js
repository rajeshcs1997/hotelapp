import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';


const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value) {
  return `${value}°C`;
}

const Filter = () => {
  const classes = useStyles();
  const [value, setValue] = useState([20, 37]);
  const [ratingstate, setRatingState] = useState({
    checkedfive: false,
    checkedfour: false,
    checkedthree: false,
  });
  const [propertystate, setPropertyState] = useState({
    checkedapartment: false,
    checkedholiday: false,
    checkedguest: false,
  });

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleRatingChange = (event) => {
    setRatingState({ ...ratingstate, [event.target.name]: event.target.checked });
  };

  const handlePropertyChange = (event) => {
    setPropertyState({ ...propertystate, [event.target.name]: event.target.checked });
  };
  return (
    <>
      <div style={{margin: "30px"}}>
        <h3>Set Filters</h3>
        <div className={classes.root}>
          <Typography id="range-slider" gutterBottom>
            Temperature range
          </Typography>
          <Slider
            value={value}
            onChange={handleSliderChange}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            getAriaValueText={valuetext}
          />
        </div>
        <br/>
        <div>
          <Typography id="checkbox" gutterBottom>
            Start Category
          </Typography>
          <FormGroup colomn>
          <FormControlLabel
            control={
              <Checkbox
                checked={ratingstate.checkedfive}
                onChange={handleRatingChange}
                name="checkedfive"
                color="primary"
                aria-labelledby="checkbox"
              />
            }
            label="five"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={ratingstate.checkedfour}
                onChange={handleRatingChange}
                name="checkedfour"
                color="primary"
                aria-labelledby="checkbox"
              />
            }
            label="four"
          />
          <FormControlLabel
            control={
              <Checkbox 
                checked={ratingstate.checkedthree}
                onChange={handleRatingChange}
                name="checkedthree"
                color="primary"
                aria-labelledby="checkbox"
              />
            }
            label="three" />
          </FormGroup>
        </div>
        <br />
        <div>
          <Typography id="checkboxproperty" gutterBottom>
            Property Type
          </Typography>
          <FormGroup colomn>
          <FormControlLabel
            control={
              <Checkbox
                checked={propertystate.checkedapartment}
                onChange={handlePropertyChange}
                name="checkedapartment"
                color="primary"
                aria-labelledby="checkboxproperty"
              />
            }
            label="Apartment"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={propertystate.checkedholiday}
                onChange={handlePropertyChange}
                name="checkedholiday"
                color="primary"
                aria-labelledby="checkboxproperty"
              />
            }
            label="Holiday"
          />
          <FormControlLabel
            control={
              <Checkbox 
                checked={propertystate.checkedguest}
                onChange={handlePropertyChange}
                name="checkedguest"
                color="primary"
                aria-labelledby="checkboxproperty"
              />
            }
            label="Guest" />
          </FormGroup>
        </div>
      </div>
    </>
  );
};

export default Filter;
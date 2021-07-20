import React from 'react';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Button  from '@material-ui/core/Button';


export default function UserCrud() {

  return (

    <div className="form">

      <div className="wrapper">

        <div className="container-form">

          <div className="form-itens">

            <Grid container spacing={5}>

                <Grid item xs={6}>
                  <TextField id="standard-basic" label="Standard" />
                </Grid>
                <Grid item xs={6} >
                  <TextField  id="standard-basic" label="Standard" />
                </Grid>
                <Grid item xs={6} >
                  <TextField id="standard-basic" label="Standard" />
                </Grid>
                <Grid item xs={6}>
                  <TextField id="standard-basic" label="Standard" />
                </Grid>
                <Grid item xs={3}>
                  
                  <FormControl>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      // value={age}
                      // onChange={handleChange}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>

                </Grid>
                
            </Grid>

          </div>

        </div>

        <div className="container-buttons">

          <div className="form-buttons">

            <Button className="btn-form" variant="contained" color="primary">
              Primary
            </Button>
            <Button className="btn-form" variant="contained" color="primary">
              Primary
            </Button>

          </div>

        </div>
        
      </div>

    </div>
  );
}
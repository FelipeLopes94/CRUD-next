// Imports components
import React from 'react';
import Link from 'next/Link'
import ListUser from '../components/ListUser'

// Imports Material UI
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Button  from '@material-ui/core/Button';


// ---------------------------------//


export default function UserCrud() {

  return (

    <div className="form">

      <div className="wrapper">

        <h2>Adicionar novo usuario</h2>

        <div className="container-form">

          <div className="form-itens">

            <Grid container spacing={6}>

                <Grid item md={6} sm={12}>
                  <TextField id="standard-basic" label="Standard" />
                </Grid>

                <Grid item md={6} sm={12}>
                  <TextField  id="standard-basic" label="Standard" />
                </Grid>

                <Grid item md={6} sm={12}>
                  <TextField id="standard-basic" label="Standard" />
                </Grid>

                <Grid item md={6} sm={12}>
                  <TextField id="standard-basic" label="Standard" />
                </Grid>

                <Grid item md={3} sm={12}>
                  
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

            <Link href="/listUser">

              <Button className="btn-form" variant="contained" color="primary">
                Salvar
              </Button>

            </Link>

            <Link href="/">

              <Button className="btn-form" variant="contained" color="primary">
                Home
              </Button>

            </Link>


          </div>

        </div>
        
        <h2>Lista de usuarios</h2>
        <ListUser/>

      </div>

    </div>
  );
}
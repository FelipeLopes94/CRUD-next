import React,{useState, useEffect} from 'react';
import Link from 'next/Link'
import axios from 'axios'

// Import btn material Ui
import Button  from '@material-ui/core/Button';

// Import tabble materialUi
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { string } from 'prop-types';

// -------------------//


const TableList: React.FC = ()  =>{

  interface User {
    email: string;
    first_name: string;
    last_name: string;
    map: any;
  }

  const [users, setUserList] = useState<Partial<User>>([]);

    useEffect(() => {
      axios("https://reqres.in/api/users?page=2").then(resp => {
        // console.log(resp.data.data)
        const response:any = resp.data.data
        setUserList( response )
    })
  },[]);


  return (

    <div className="table-users">



        <div className="container-table-users">

          <TableContainer component={Paper}>
            <Table  size="small" aria-label="a dense table">

              <TableHead>

                <TableRow>
                  <TableCell align="center">Nome</TableCell>
                  <TableCell align="center">Email</TableCell>
                  <TableCell align="center">Código externo</TableCell>
                  <TableCell align="center">Função</TableCell>
                  <TableCell align="center">Tags </TableCell>
                </TableRow>

              </TableHead>

              <TableBody>

                {users.map((user:any) => (
                    
                  <TableRow key={user.first_name}>

                    <TableCell align="center" component="th" scope="user">
                      {user.email}
                    </TableCell>
                    <TableCell align="center">{user.email}</TableCell>
                    <TableCell align="center">{user.first_name}</TableCell>
                    <TableCell align="center">{user.last_name}</TableCell>
                    <TableCell align="center">{user.email}</TableCell>

                  </TableRow>
                ))}

              </TableBody>

            </Table>

          </TableContainer>

        </div>

      </div>


  );
}

export default TableList
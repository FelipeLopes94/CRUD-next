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

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

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

  // let teste: any = users

  console.log(users)


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
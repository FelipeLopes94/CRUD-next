// Imports components
import React,{useState, useEffect} from 'react';
import Link from 'next/Link'
import axios from 'axios'


// Imports Material UI
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Button  from '@material-ui/core/Button';

// Import tabble materialUi
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// ---------------------------------//

// Estado inicial para limpar o form ao salvar dados
const initialState = {

  user: { 
    id: '',
    email: '',
    first_name: '' ,
    last_name: '',
    funcao: '',
    tags: '',
  },

}

export default function UserCrud() {

  // Tipagem dos dados da api
  interface User {
    email: string;
    first_name: string;
    last_name: string;
    map: any;
    filter: any;
  }

  const baseUrl = "https://demo.vnda.com.br/api/v2/users"
  const baseUrl2 = "https://reqres.in/api/users?page=2"


  // Ao montar pagina, fazer a request dos dados da api
  useEffect(() => {
      axios.get(baseUrl2).then(resp => {
        // console.log(resp.data.data)
        const response:any = resp.data.data
        setUserList( response )
    })
  },[]);

  // State dos dados da lista
  const [userList, setUserList] = useState<Partial<User>>([]);

  // State dos dados do form
  const [dataUserForm, setDataUserForm] = useState<any>(
        {
            id: '',
            email: '',
            first_name: '' ,
            last_name: '',
            funcao: '',
            tags: '',
  
        }
     )

  // get dos dados do formulario

  function getDadosForm(event:any) {
    const { name, value } = event.target
    setDataUserForm({
        ...dataUserForm,
        [name]: value
    })
  }


  // Funcao para Salvar usuario

  function saveUser() {

    const user = dataUserForm
    const method = user.id ? 'put' : 'post'
    const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
    axios[method](url, user)
        .then(resp => {
            const list:any = getUpdateList(resp.data)
            setDataUserForm({ ...initialState.user})
            setUserList(list)
        })

  }


  // Funcao para atualizar a lista de usuarios, e remover o que nao tem Id

  function  getUpdateList(user:any, add = true) {

    const list = userList.filter(u => u.id !== user.id)

    if (add) list.unshift(user)

    return list

  }

  // Funcao para remover usuario

  function removeUser(user:any) {
    axios.delete(`${baseUrl}/${user.id}`).then(resp => {
        const list = getUpdateList(user, false)
        setUserList(list)
    })
  }

  // Funcao para editar usuario, recebe o parametro da lista, trazendo os dados, e manda do State de dados do form.

  function editUser(user:any) {
    setDataUserForm(user)

  }

  return (

    <div className="form">

      <div className="wrapper">

        <h2>Adicionar novo usuario</h2>

        <div className="container-form">

          <div className="form-itens">

            <Grid container spacing={6}>

                <Grid item md={6} sm={12}>
                  <TextField                
                    id="first_name" 
                    label="Standard"
                    name="first_name"
                    value={dataUserForm.first_name || ''}
                    onChange={getDadosForm}
                  />               
                </Grid>

                <Grid item md={6} sm={12}>
                  <TextField 
                   id="last_name"
                   label="Standard" 
                   name="email"
                   value={dataUserForm.last_name || ''}
                   onChange={getDadosForm}
                  />
                </Grid>

                <Grid item md={6} sm={12}>
                  <TextField 
                    id="email" 
                    label="Standard"
                    name="codigo_externo"
                    value={dataUserForm.email || ''}
                    onChange={getDadosForm}
                   />
                </Grid>

                <Grid item md={6} sm={12}>
                  <TextField                  
                    id="avatar" 
                    label="Standard" 
                    name="l"
                    value={dataUserForm.avatar || ''}
                    onChange={getDadosForm}                   
                  />
                </Grid>

                <Grid item md={3} sm={12}>
                  
                  <FormControl>

                    <InputLabel id="demo-simple-select-label">Age</InputLabel>

                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      onChange={getDadosForm}
                      name="funcao"
                      defaultValue={dataUserForm.funcao || 10}
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

            <Button 
              className="btn-save" 
              variant="contained" 
              color="primary"
              onClick={() => saveUser()}

            >
              Salvar
            </Button>

            <Link href="/">

              <Button className="btn-form" variant="contained" color="primary">
                Home
              </Button>

            </Link>

          </div>

        </div>

        {/* LISTA DE USUARIOS */}

        <h2>Lista de usuarios</h2>

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

                  {userList.map((user:any) => (
                      
                    <TableRow key={user.id}>

                      <TableCell align="center" component="th" scope="user">
                        {user.avatar}
                      </TableCell>
                      <TableCell align="center">{user.email}</TableCell>
                      <TableCell align="center">{user.first_name}</TableCell>
                      <TableCell align="center">{user.last_name}</TableCell>
                      <TableCell align="center">{user.email}</TableCell>

                      <TableCell align="center">

                        <Button 
                          className="btn-edit" 
                          variant="contained" 
                          color="primary" 
                          onClick={() => editUser(user)}
                          >

                          Editar
                        </Button>

                      </TableCell>

                      <TableCell align="center">

                        <Button 
                          className="btn-delete" 
                          variant="contained" 
                          color="primary" 
                          onClick={() => removeUser(user)}
                          >

                          Excluir
                        </Button>

                      </TableCell>

                    </TableRow>
                  ))}

                </TableBody>

              </Table>

            </TableContainer>

          </div>

        </div>

      </div>

    </div>
  );
}
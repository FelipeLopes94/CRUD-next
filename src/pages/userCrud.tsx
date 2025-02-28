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
    name: '' ,
    external_code: '',
    funcao: '',
    tags: [],
  },

}


// FUNCAO PRINCIPAL
export default function UserCrud() {

  // Tipagem dos dados da api
  interface User {
    email: string;
    name: string;
    external_code: string;
    map: any;
    filter: any;
  }

  const apiListusers = "/api/userApi"
  const apiDeleteUser = "/api/deleteUser"
  const apiCreateOrUpdate = "/api/createOrUpdate"

  // Ao montar pagina, fazer a request dos dados da api
  useEffect(() => {
    
      axios.get(apiListusers, {
      }).then(resp => {
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
            name: '' ,
            external_code: '',
            function: '',
            tags: [],
  
        }
     )

  // get dos dados do formulario

  function getDadosForm(event:any) {
    const { name, value } = event.target

    setDataUserForm({
        ...dataUserForm,
        [name]: value,
    })
  }

  // funcao para fazer split, e separar as tags por virgula

  function splitUserTags(event:any){
    
    const userTags = event.target.value
    const tagSplits = userTags.split(' ,', 5);

    setDataUserForm({
      ...dataUserForm,
      tags: tagSplits
    })
  }
  // Funcao para Salvar usuario

  function saveUser() {

    const user = dataUserForm //Dados do usuario obtidos do state
    const method = user.id ? 'patch' : 'post' //caso tenha ID, entao usa o metodo patch para atualizar, senao, criar um novo user
    const url = apiCreateOrUpdate //receb a url da api CreateOrUpdate

    if(user != {}){
      axios[method](url, user,{

        data:{userId: user.id},
        headers: {"Content-Type": "multipart/form-data"}
        
      })
        .then(resp => {
          setDataUserForm({ ...initialState.user}) //limpa os campos ao salvar
          alert("usuario salvo com sucesso")
          window.location.reload();
          console.log (resp)
          
        })
    }

  }

  // Funcao para atualizar a lista de usuarios, e remover o que nao tem Id

  function  getUpdateList(user:any, add = true) {
    
    const list = userList.filter((u:any) => u.id !== user.id)

    if (add) list.unshift(user)

    return list

  }

  // Funcao para remover usuario

  function removeUser(user:any) {
    
    axios.delete(`${apiDeleteUser}`, {

      headers: {'Content-Type': 'application/json'},
      data: {
        user: user.id
      }

    }).then(resp => {
        const list = getUpdateList(user, false)
        setUserList(list)
    })
    const list = getUpdateList(user, false)
    setUserList(list)
    alert("usuario removido com sucesso")
    // window.location.reload();



  }
  
  // Funcao para editar usuario, recebe o parametro da lista, trazendo os dados, e manda do State de dados do form.

  function editUser(user:any) {
    setDataUserForm(user)

  }

  // Retorno HTML da funcao
  return (

    <div className="form">

      <div className="wrapper">

        <h2>Adicionar ou editar novo usuário </h2>

      {/* Formulario CRUD */}

        <div className="container-form">

          <div className="form-itens">

            <Grid container spacing={6}>

                <Grid item md={6} sm={12}>
                  <TextField    
                    required            
                    id="name" 
                    label="Nome"
                    name="name"
                    value={dataUserForm.name || ''}
                    onChange={getDadosForm}
                    
                  />               
                </Grid>

                <Grid item md={6} sm={12}>
                  <TextField 
                    required
                   id="email"
                   label="Email" 
                   name="email"
                   value={dataUserForm.email || ''}
                   onChange={getDadosForm}
                  />
                </Grid>

                <Grid item md={6} sm={12}>
                  <TextField 
                    required
                    id="external_code" 
                    label="Código externo"
                    name="external_code"
                    value={dataUserForm.external_code || ''}
                    onChange={getDadosForm}
                   />
                </Grid>

                <Grid item md={6} sm={12}>
                  <TextField   
                    required               
                    id="avatar" 
                    label="Tags" 
                    name="tags"
                    value={dataUserForm.tags || ''}
                    onChange={splitUserTags}      
                  />
                </Grid>

                <Grid item md={3} sm={12}>
                  
                  <FormControl>

                    <InputLabel id="demo-simple-select-label">Função</InputLabel>

                    <Select
                      labelId="select funcao usuario"
                      id="select funcao"
                      onChange={getDadosForm}
                      name="function"
                      defaultValue={dataUserForm.function || ""}
                    >
                      <MenuItem value={"Gestor"}>Gestor</MenuItem>
                      <MenuItem value={"Agente"}>Agente</MenuItem>
                      <MenuItem value={"Local"}>Local</MenuItem>
                    </Select>

                  </FormControl>

                </Grid>
                
            </Grid>

          </div>

        </div>

      {/* Botoes form */}

        <div className="container-buttons">

          <div className="form-buttons">

            <Button 

              className="btn-save" 
              variant="contained" 
              color="primary"
              onClick={() => saveUser()}
              type="submit"
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

        <h2>Lista de usuários </h2>

        <div className="table-users">

          <div className="container-table-users">

            <TableContainer component={Paper}>
              <Table  size="small" aria-label="a dense table">

                <TableHead>

                  <TableRow>
                    <TableCell align="center" className="title-column-table">Nome</TableCell>
                    <TableCell align="center" className="title-column-table">Email</TableCell>
                    <TableCell align="center" className="title-column-table">Código externo</TableCell>
                  </TableRow>

                </TableHead>

                <TableBody>

                  {userList.map((user:any) => (
                      
                    <TableRow key={user.id}>

                      <TableCell align="center" component="th" scope="user">
                        {user.name}
                      </TableCell>
                      <TableCell align="center">{user.email}</TableCell>
                      <TableCell align="center">{user.external_code}</TableCell>

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
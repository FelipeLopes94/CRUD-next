import axios from 'axios'

async function deletarUsuario (request:any, response:any) {
    
    const userId:any =  request.body.user
    const baseUrl = `https://demo.vnda.com.br/api/v2/users/${userId}`
    const token ="zPx1jgkmbUb9vouJvSH8XRAF"
    const myHeaders = new Headers()

    myHeaders.append("Authorization", "Bearer " + `${token}`);
    
    const configRequest:any = {
        headers: myHeaders,
        mode: 'cors',
        cache: 'default' ,
        method: "delete"
    };
    
    const userListResponse =  await fetch(baseUrl,configRequest )    

    // response.json({
    //     message:"deletado"
    // })
}

export default deletarUsuario


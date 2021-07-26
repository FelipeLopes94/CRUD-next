async function deletarUsuario (request:any, response:any) {
    
    const userId:any =  request.body.user
    const baseUrl = `xxx`
    const token ="XXXXXXX"  //<------ Token necessario para realizar as operacoes na API de usuarios

    const myHeaders = new Headers()
    myHeaders.append("Authorization", "Bearer " + `${token}`);
    
    const configRequest:any = {
        headers: myHeaders,
        mode: 'cors',
        cache: 'default' ,
        method: "delete"
    };
    
    fetch(baseUrl,configRequest )    

    response.json({
        message:"Usuario deletado com sucesso!"
    })
}

export default deletarUsuario


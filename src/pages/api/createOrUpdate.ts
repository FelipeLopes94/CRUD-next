async function createOrUpdate (request:any, response:any) {

    const token ="XXXXXXX"  //<------ Token necessario para realizar as operacoes na API de usuarios

    //Configuracoes gerais do header

    const myHeaders = new Headers() 
    myHeaders.append("Authorization", "Bearer " + `${token}`);
    myHeaders.append("Content-Type", "application/json; charset=utf-8");

    if (request.method === 'POST') {

        const baseUrl = `xxxx`
    
        const configRequest:any = {
            headers: myHeaders,
            mode: 'cors',
            cache: 'default' ,
            method: "post",
            body: request.body
        };
        
        await fetch(baseUrl,configRequest )    
    
        response.json({
            message:"Usuario criado com sucesso!"
        })

      } else  { //Caso seja Patch, entao atualiza o usuario

        //parse da request para atualizacao do usuario
        
        const objRequest = JSON.parse(request.body);
        const userId = objRequest.id

        const baseUrl = `https://demo.vnda.com.br/api/v2/users/${userId}`
    
        const configRequest:any = {
            headers: myHeaders,
            mode: 'cors',
            cache: 'default' ,
            method: "patch",
            body: request.body
        };
        
        await fetch(baseUrl,configRequest )    
    
        response.json({
            message:"Usuario atualizado com sucesso!"
        })
      }



}

export default createOrUpdate


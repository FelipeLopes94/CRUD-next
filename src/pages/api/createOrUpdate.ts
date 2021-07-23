async function createOrUpdate (request:any, response:any) {
    
    if (request.method === 'POST') {

        const baseUrl = `https://demo.vnda.com.br/api/v2/users`
        const token ="zPx1jgkmbUb9vouJvSH8XRAF"
        const myHeaders = new Headers()
    
        myHeaders.append("Authorization", "Bearer " + `${token}`);
        myHeaders.append("Content-Type", "application/json; charset=utf-8");
    
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

        const objRequest = JSON.parse(request.body);
        const userId = objRequest.id

        const baseUrl = `https://demo.vnda.com.br/api/v2/users/${userId}`
        const token ="zPx1jgkmbUb9vouJvSH8XRAF"
        const myHeaders = new Headers()
    
        myHeaders.append("Authorization", "Bearer " + `${token}`);
        myHeaders.append("Content-Type", "application/json; charset=utf-8");
    
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


async function getlist (request:any, response:any) {

    const baseUrl = "https://demo.vnda.com.br/api/v2/users"
    const token ="XXXXXXX"  //<------ Token necessario para realizar as operacoes na API de usuarios
    const myHeaders = new Headers()

    myHeaders.append("Authorization", "Bearer " + `${token}`);
    
    const configRequest:any = {
        headers: myHeaders,
        mode: 'cors',
        cache: 'default' ,
        method: "get"
    };
    
    const userListResponse =  await fetch(baseUrl,configRequest )    
    const userListJson = await userListResponse.json()
    const userList:any = userListJson

    response.json({
        data: userList
    })


}


export default getlist
import axios from 'axios'

async function userApi (request:any, response:any) {

    const baseUrl = "https://demo.vnda.com.br/api/v2/users"
    const token ="zPx1jgkmbUb9vouJvSH8XRAF"
    const myHeaders = new Headers()

    myHeaders.append("Authorization", "Bearer " + `${token}`);
    
    const configRequest:any = {
        headers: myHeaders,
        mode: 'cors',
        cache: 'default' ,
        // Authorization: token
    };
    
    const userListResponse =  await fetch("https://demo.vnda.com.br/api/v2/users",configRequest )    
    const userListJson = await userListResponse.json()
    const userList:any = userListJson

    console.log(userList)

    response.json({
        data: userList
    })


}

export default userApi
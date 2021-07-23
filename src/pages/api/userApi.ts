import axios from 'axios'
import { useRouter } from 'next/router'

let idUsuarioo = ''

export const teste = (userId:any) => {
    const router = useRouter()

    idUsuarioo = userId
    console.log(router)
}

async function getlist (request:any, response:any) {

    const baseUrl = "https://demo.vnda.com.br/api/v2/users"
    const token ="zPx1jgkmbUb9vouJvSH8XRAF"
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

    console.log(idUsuarioo)

    response.json({
        data: userList
    })


}


export default getlist
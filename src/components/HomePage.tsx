import React from 'react';
import Link from 'next/Link'

// Import btn material Ui

import Button  from '@material-ui/core/Button';


// ---------------//
const HomePage: React.FC = () =>{

    return (

        <div className="home">

            <div className="container-home">

                <div className="title-home">
                    <h1>CRUD de usuarios Next.JS</h1>
                </div>
                
                <div className="btns-home">
                <Link href="/userCrud">

                    <Button className="btn-back" variant="contained" color="primary">
                        Ir para o crud
                    </Button>

                </Link>

                </div>
            
            </div>
                

        </div>

    )
}

export default HomePage
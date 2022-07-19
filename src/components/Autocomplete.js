import React, { useState, useEffect } from 'react'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import axios from 'axios';


const AutocompleteUi = () => {
    const [dataUser, setDataUser] = useState([])
    const [idUser, setIdUser] = useState(1)

    const getApi = () => {
        axios.get('https://62d5a29e15ad24cbf2caf682.mockapi.io/api/users')
            .then(function (response) {
                response.data.map(m=> m['label']=m.name)
                setDataUser(response.data)
            })
    }
    
    
    // const handleChangeId = (id) => {
    //     setIdUser(id)
    // }
    useEffect(() => {
        getApi()
        console.log(idUser)
    }, [idUser])

    return (
        <>
            <Autocomplete
                onChange={(event, newValue) => {
                    setIdUser(newValue.id)
                }}
                isOptionEqualToValue={(option, value) => option.value === value.value}
                disablePortal
                id="combo-box-demo"
                options={dataUser}
                
                renderInput={(params) => <TextField {...params} label="Users" />}
            />
        </>
    )
}

export default AutocompleteUi
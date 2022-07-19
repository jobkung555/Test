import { DataGrid } from '@mui/x-data-grid';
import Avatar from '@mui/material/Avatar';

import Loading from './Loading';

import { useGetAllMockapiQuery } from '../services/mockapi'

const Table = () => {
    const { data, error, isLoading } = useGetAllMockapiQuery()

    // console.log(data)

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'avatar', headerName: 'Image', width: 150, renderCell: (r) => <Avatar src={r.value} variant="square"></Avatar> },
        { field: 'createdAt', headerName: 'Date', width: 200 },
    ];
    return (
        <>
            {error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <Loading />
            ) : data ? (
                <>
                    <div style={{ height: 400, width: '100%' }}>
                        <DataGrid
                            rows={data}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                        />
                    </div>
                </>
            ) : null}
        </>
    )
}

export default Table
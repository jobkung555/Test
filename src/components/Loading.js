import React from 'react'
import RotateRightIcon from '@mui/icons-material/RotateRight';
import styled from 'styled-components';

const WarperIcon = styled.div`
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const LoadingRotate = styled.div`
    animation: loadingloop 3s linear infinite;

    @keyframes loadingloop {
        0%{
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`


const Loading = () => {
    return (
        <>
            <WarperIcon>
                <LoadingRotate>
                    <RotateRightIcon color={'info'} fontSize={'large'} />
                </LoadingRotate>
            </WarperIcon>
        </>
    )
}

export default Loading
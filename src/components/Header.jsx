import React  from 'react'
import {AppBar , Toolbar, styled} from '@mui/material'
import Button from '@mui/material/Button';
import './mainstyles.css';


const Container = styled(AppBar)`
  background: #27374D;
//   height:40px;

`

const Header = () => {
  return (
    <>
    <Container position='static'>
        <Toolbar>
            <img src='https://www.shutterstock.com/shutterstock/videos/1103003905/thumb/1.jpg?ip=x480'className='logo-img' />
            <p>FrontEdit</p>
        </Toolbar>
    </Container>
    </>
  )
}

export default Header
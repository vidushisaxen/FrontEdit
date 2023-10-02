import React from 'react'
import {Box, styled} from '@mui/material'
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import '../App.css';

import { Controlled as ControlledEditor } from 'react-codemirror2';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

const Head = styled(Box)`
// display:'flex',
// flexDirection: 'row',
background:#526D82;
display:flex;
padding: 9px 12px;
`
const Header = styled(Box)`
display:flex;
 background:#27374D;
color:#DDE6ED;
justify-content:space-between;
font-weight:700;
`


const Editor = () => {
  return (
    <>
    <Box>
        <Header>
            <Head>
                <Box component="span"
                style ={{height: 20,
                width:30 ,
                 background:'#9DB2BF',
                  display: 'flex',
                   placeContent:'center' , 
                   borderRadius: 5,
                   marginRight: 10,
                   paddingBottom:5,
                //    marginTop:5,
                   paddingTop:5,
                   }}>/</Box>
                HTML
            </Head>
            <CloseFullscreenIcon/>
        </Header>
       <ControlledEditor
       className='controlled-editor'
       options={{
        theme:'material',
        lineNumbers: true
       }}
       />
    </Box>
    </>
  )
}

export default Editor
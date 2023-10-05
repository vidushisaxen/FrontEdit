import { createContext, useState, usestate } from "react";

const DataContext = createContext();

const DataProvider =()=>{

    const[html,setHtml] = useState('');
    const[css,setCss] = useState('');
    const[js,setJs] = useState('');

    return(
        <DataContext.Provider>
        </DataContext.Provider>
    )
}
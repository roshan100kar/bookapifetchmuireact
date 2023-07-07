import React, {useState} from 'react'
import {AppBar, Typography, Toolbar, Tabs, Tab, Button, useMediaQuery, useTheme } from '@mui/material'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import DrawerComp from './DrawerComp';
const PAGES = ["Books", "Doc", "Content", "Type"];

const Header = () => {
    const [value, setValue] = useState();
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    // console.log()
  return (
    <React.Fragment>
        <AppBar sx={{background: "#fff", color: 'black'}}>
            <Toolbar>
                <Typography sx={{color: 'blue'}}>Gyanibooks</Typography>
                <LibraryBooksIcon sx={{color: 'black'}}/>
                {
                    isMatch ? (
                        <>
                            <Typography sx={{fontSize: "2rem", paddingLeft: "10%"}}>
                              Gyanibooks
                            </Typography>
                            <DrawerComp/>
                        </>
                    ) : ( 
                        <>
                            <Tabs
                                sx={{marginLeft: "auto"}}
                                textColor="inherit" value={value} onChange={(e, value)=> setValue(value)} indicatorColor="secondary">
                                    {
                                        PAGES.map((page, index)=> (
                                            <Tab key={index} label={page}/>
                                        ))
                                    }
                                    <Tab label="About Us"/>
                                    <Tab label="Contact Us"/>
                            </Tabs>
                            <Button sx={{marginLeft: 'auto', background: 'blue', ':hover': {background: 'white', color: 'black'}}} variant="contained">Get your books</Button>
                        </>

                    )
                }
              
            </Toolbar>
    
        </AppBar>
    </React.Fragment>
  )
}

export default Header
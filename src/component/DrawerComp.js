import React, { useState } from 'react'
import {Drawer, List, ListItemButton, ListItemIcon, ListItemText, IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
const PAGES = ["Books", "Doc", "Content", "Type", "Get your books"];
const DrawerComp = () => {
   const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <React.Fragment>
        <Drawer open={openDrawer}
            onClose={()=>setOpenDrawer(false)}
        
        >
            <List>
                {
                    PAGES.map((page, index)=> (
                    <ListItemButton onClick={()=> setOpenDrawer(false)} key={index}>
                        <ListItemIcon>
                            <ListItemText>{page}</ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                    ))
                }
               
            </List>
        </Drawer>
        <IconButton sx={{color: 'blue', marginLeft: 'auto'}}onClick={()=> setOpenDrawer(!openDrawer)}>
            <MenuIcon/>
        </IconButton>
    </React.Fragment>
  )
}

export default DrawerComp
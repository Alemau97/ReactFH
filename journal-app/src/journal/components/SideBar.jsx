import { TurnedInNot } from '@mui/icons-material'
import { Drawer, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import React from 'react'

export const SideBar = ({drawerWidth = 240}) => {
  return (
    <Box
        component='nav'
        sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}
    >
        <Drawer
            variant='permanent'
            open
            sx={{
                display: {sx: 'block'},
                '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth}
            }}
        >
            <Toolbar>
               <Typography variant='h6' noWrap content='div'>Mauricio Martinez</Typography> 
            </Toolbar>
            <Divider />
            <List>
                {
                    ['Enero','Febrero','Marzo','Abril'].map(text => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot />
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={text} />
                                    <ListItemText secondary={'Lorem Ipsum'} />
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
        </Drawer>
    </Box>
  )
}

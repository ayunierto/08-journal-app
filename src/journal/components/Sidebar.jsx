import { InboxOutlined, MailOutline, TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"

export const Sidebar = ({ drawerWidth = 240 }) => {
  return (
    <Box
        component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
        <Drawer
            variant="permanent"
            open={ true }
            sx={{ 
                display: { xs: 'block'},
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
             }}
        >
            <Toolbar>
                <Typography
                    variant="h6"
                    noWrap
                    component='div'
                >
                Jhon Doe    
                </Typography>    
            </Toolbar>

             <Divider />

            <List>
                {
                    ['Enero', 'Febrero', 'Marzo', 'Abril'].map( m => (
                        <ListItem key={ m } disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot />
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={ m } />
                                    <ListItemText secondary={"lorem ipsun what is your name for school and"} />
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ) )
                }
            </List>
        </Drawer>
    </Box>
  )
}

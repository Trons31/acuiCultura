import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useContext } from 'react';
import { UiContext } from "../../contexts/ui";

export const Navbar = () => {

    const {openMenu} = useContext(UiContext)

  return (
    <AppBar position='sticky' >
        <Toolbar>
            <IconButton
             size="large"
             edge="start"
             onClick={ openMenu }
            >
                <MenuOutlinedIcon />
            </IconButton>
            <Typography variant="h6" > Practica Menu </Typography>
        </Toolbar>
    </AppBar>
  )
}

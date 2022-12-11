import { AuthContext } from "../../context/AuthContext";
import{MenuIcon} from "@mui/icons-material/Menu"
import React from "react";
import{Box,Typography,Button,IconButton,Toolbar,AppBar} from "@mui/material"
import { useContext } from "react";


const MenuBar =()=>{

    const{user}=useContext(AuthContext);

    return(
        <Box>
            <AppBar>
                <Toolbar>
                    <IconButton>
                    
                    </IconButton>
                    <Typography>
                        Bienvenido {user.name}
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )

}

export default MenuBar;
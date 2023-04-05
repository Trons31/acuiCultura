import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";



export const darktheme = createTheme({
    palette:{
        mode: 'dark',
        primary:{
          main: '#D6DBDF',
        },
        secondary:{
          main: '#19857b',
        },
        error:{
          main : red.A400,
        },

    },

    components:{
       MuiAppBar :{
          defaultProps: {},
          styleOverrides: {
            root :{
              background: '#82E0AA',
            }
          }
       }
    }

})
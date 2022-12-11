import{Box ,Container ,Grid ,Button,Typography} from "@mui/material";
import Swal from "sweetalert2";




const Favorites =()=>{


    function cleanButton(){
        Swal.fire({
            title : "Clean all favorites",
            text: "Estas Seguro que desea eliminar",
            icon:"warning",
            showCancelButton : true,
            confirmButtonColor : "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText : "Clean!"


        })
    }




    return(
        <Box>
            <Container>
                <Grid container spacing ={3}>
                    <Grid item xs={8}>
                        <Typography variant="h6">
                            Favorites 
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Button variant = "outlined" color ="warning" onClick ={cleanButton}>
                        Clean
                      </Button>
                    </Grid>
                </Grid>
            </Container>
        </Box>

    )
}

export default Favorites;
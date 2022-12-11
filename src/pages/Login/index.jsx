import { useContext } from "react";
import {AuthContext} from "../../context/AuthContext"
import { Navigate } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Avatar } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";

const Login = () => {
 const {login,isAuth}= useContext(AuthContext)

  
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData (event.currentTarget)
   login(data.get("user"),data.get("pass"))
  };

  if(isAuth()){
    return <Navigate to="/search"/>
  }
 

  return (
    <Container maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 2, bgcolor: "red" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="user"
            label="User"
            name="user"
            autoFocus
          />

          <TextField
            margin="normal"
            required
            fullWidth
            name="pass"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />

          <Button type="submit" onSubmit={handleSubmit} fullWidth variant="contained">
            Login
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;

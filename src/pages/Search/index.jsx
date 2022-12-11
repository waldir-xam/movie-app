import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  TextField,
  Stack,
  Button,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuBar from "../../components/MenuBar";
import React from "react";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const history = useNavigate();

  function searchInput(event) {
    setSearchText(event.target.value);
  }

  function searchButton() {
    if (searchText === "") return;
    history(`/search/${searchText}`);
  }

  return (
    <>
      <MenuBar />
      <Box>
        <Container maxWidth="sm">
          <Grid container mt={6}>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h2">OMDB Search</Typography>
                  <Stack
                    mt="2"
                    direction="row"
                    justifyContent="space-between"
                    spacing={3}
                  >
                    <TextField
                      label="Pelicula , serie o show de tv"
                      fullWidth
                      onChange={searchInput}
                    />
                    <Button
                      variant="contained"
                      fullWidth
                      onClick={searchButton}
                    >
                      Search
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Search;

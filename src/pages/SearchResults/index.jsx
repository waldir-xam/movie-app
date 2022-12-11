import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Container, Grid, Typography, IconButton } from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import Services from "../../services";

const SearchResults = () => {
  const [movies, setMovies] = useState([]);

  async function getSearchResults() {
    const data = await Services.searchBytext(searchText);
    //antes de setear el state vamos a modificar el array y ponerl un precio random a cada movie
    // * ..item es el objeto de pelicula
    const alterData = data.Search.map((item) => {
      return {
        ...item,
        Price: (Math.random() * 10).toFixed(2),
      };
    });
    setMovies(alterData);
  }
  useEffect(() => {
    getSearchResults();
  }, []);

  return (
    <Box>
      <Container>
        <IconButton>{/* el icon flecha */}</IconButton>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography>Search /{searchText}</Typography>
          </Grid>
          {movies.length > 0 &&
            movies.map((movie, index) => (
              <CardMovie movie={movie} key={index} />
            ))}
        </Grid>
      </Container>
    </Box>
  );
};
console.log(SearchResults);

export default SearchResults;

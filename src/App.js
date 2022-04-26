import { Grid } from "@mui/material";
import WeatherPreview from "./components/WeatherPreview";
import GlobalStyle from "./style/GlobalStyle";

function App() {



  return (
    <div>
      <GlobalStyle />
      <Grid container >
        <Grid item xs={12} sm={4} >
          <WeatherPreview />
        </Grid>
        <Grid item xs={12} sm={8}>
          <div style={{ backgroundColor: 'blueviolet' }}>hi</div>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;

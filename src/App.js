import { Grid } from "@mui/material";
import WeatherPreview from "./components/WeatherPreview";
import GlobalStyle from "./style/GlobalStyle";

function App() {



  return (
    <div style={{ height: '100%' }}>
      <GlobalStyle />
      <Grid container style={{ height: '100%' }}>
        <Grid item xs={12} sm={4} style={{ height: '100%' }}>
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

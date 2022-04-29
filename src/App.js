import { Grid } from "@mui/material";
import WeatherDashboard from "./components/WeatherDashboard";
import WeatherPreview from "./components/WeatherPreview";
import ContextApiProvider from "./context/ContextApi";
import GlobalStyle from "./style/GlobalStyle";


function App() {

  return (
    <ContextApiProvider>
      <div>
        <GlobalStyle />
        <Grid container >
          <Grid item xs={12} sm={4} >
            <WeatherPreview />
          </Grid>
          <Grid item xs={12} sm={8}>
            <WeatherDashboard />
          </Grid>
        </Grid>
      </div>
    </ContextApiProvider>
  );
}

export default App;

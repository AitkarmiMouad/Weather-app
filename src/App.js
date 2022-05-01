import { Grid } from "@mui/material";
import WeatherDashboard from "./components/WeatherDashboard";
import WeatherPreview from "./components/WeatherPreview";
import { ContextApi } from "./context/ContextApi";
import GlobalStyle from "./style/GlobalStyle";
import Loading from './components/Loading'
import { useContext } from 'react'

function App() {

  const { weatherLoading } = useContext(ContextApi);

  return (
    <div>
      <GlobalStyle />
      {weatherLoading && <Loading />}
      <Grid container style={weatherLoading ? { display: 'none' } : null} >
        <Grid item xs={12} sm={4} >
          <WeatherPreview />
        </Grid>
        <Grid item xs={12} sm={8}>
          <WeatherDashboard />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;

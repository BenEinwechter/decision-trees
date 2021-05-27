import { AppBar, Box, Container, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./App.css";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Decision Maker
          </Typography>
        </Toolbar>
      </AppBar>
      <Box p={2}>
        <Typography>See App.js to start building</Typography>
      </Box>
    </Container>
  );
}

export default App;

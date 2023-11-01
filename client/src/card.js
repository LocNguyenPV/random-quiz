import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import QuizIcon from '@mui/icons-material/Quiz';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios'

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Luke Nguyen
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

async function generateAPI(name, count) {
  try {
    let result = await axios.post("//localhost:5000/generate", { name, count });
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

async function fetchStudent() {
  try {
    let data = await axios.get("//localhost:5000/");
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function ignoreStudent(name) {
  try {
    let data = await axios.post("//localhost:5000/ignore", { name });
    return data;
  } catch (error) {
    console.error(error);
  }
}


async function getTotal() {
  try {
    let data = await axios.get("//localhost:5000/total");
    return data.length;
  } catch (error) {
    console.error(error);
  }
}
export default function Album() {
  let [countArr, setCountArr] = useState(0);
  let [name, setName] = useState("Start Exam");
  let [isIgnore, setIsIgnore] = useState(false);
  function onClickNext() {
    if (isIgnore) {
      ignoreStudent(name).then(result => fetchStudent()).then(result => setName(result.data));
    }else{
      fetchStudent().then(result => setName(result.data));
    }
    setIsIgnore(true);
  }
  function onClickGenerate() {
    if (name) {
      generateAPI(name, countArr);
      setCountArr(countArr + 1);
      setIsIgnore(false);
    }
  }
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <QuizIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Firebase Test 
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              {name ? name : "Exam finish"}
            </Typography>
            {name &&
              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
              >
                {name !== "Start Exam" && <Button variant="contained" onClick={onClickGenerate}>Generate Question</Button>}
                <Button variant="outlined" onClick={onClickNext}>
                <NavigateNextIcon />
                  {/* {name === "Start Exam" ? <NavigateNextIcon /> : <HighlightOffIcon sx={{ color: 'red' }} />} */}
                </Button>
              </Stack>
            }
          </Container>
        </Box>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footers
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Midterm Exam Website
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
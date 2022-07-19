import Container from '@mui/material/Container';
import BasicDatePicker from './components/DatePickerUi';
import BasicTimePicker from './components/TimePickerUi';
import Table from './components/Table';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import AutocompleteUi from './components/Autocomplete';

const Warper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
`

function App() {
  return (
    <>
      <Container maxWidth="lg">
        <Warper>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <BasicDatePicker />
            </Grid>
            <Grid item xs={4}>
              <BasicTimePicker />
            </Grid>
            <Grid item xs={4}>
              <AutocompleteUi />
            </Grid>
            <Grid item xs={12}>
              <Table />
            </Grid>
          </Grid>
        </Warper>
      </Container>
    </>
  );
}

export default App;

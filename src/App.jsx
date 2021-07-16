import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';
import CarTable from './components/CarTable/CarTable';

import './App.css';

function App() {
  return (
    <div className="app">
      <Header>Header</Header>
      <Main>
        <Sidebar>Sidebar</Sidebar>
        <CarTable />
      </Main>
      <Footer>Footer</Footer>
    </div>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import CustomSidebar from './components/CustomSidebar';
import './CustomSidebar.css';
import Homepage from './components/Homepage';
import AlbumPage from './components/Albumpage';



function App() {
  return (
    <div className="App">
     
        <Container fluid className="main-container">
          <Router>
            <CustomSidebar />
            <Route path="/" exact render={() => <Homepage title="HOMEPAGE"/>} />
            <Route path="/album" exact render={() => <AlbumPage />} />
  
          </Router> 
        </Container>
      
    </div>
  );
}

export default App;

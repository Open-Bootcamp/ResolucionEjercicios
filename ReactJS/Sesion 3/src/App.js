import logo from './logo.svg';
import './App.css';
import ComponenteA from './components/componenteA';

function App() {
  const contactoPrueba = {
    nombre: 'Fulanito',
    apellido: 'de OpenBootcamp',
    email: 'fulanito@open-bootcamp.com',
    conectado: false,
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ComponenteA contacto={contactoPrueba} />
      </header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Footer from './componentes/Footer';
import Menu from './componentes/Menu';
function App() {
  return (
    <div className="App">
      <header>
        <h1>Proyecto One React</h1>
      </header>
      <Menu />
      <main>
        <h2>Contenido Principal</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
          sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <img src="https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2020/05/hipertextual-que-atracadores-casa-papel-usan-mono-rojo-y-caretas-salvador-dali-2020257965.jpg?fit=1600%2C1067&quality=50&strip=all&ssl=1" />
      </main>
      <Footer />
      
    </div>
  );
}

export default App;

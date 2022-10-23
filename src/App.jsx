import About from './components/About/About';
import Header from './components/Header/Header';

import classes from './App.module.scss';

function App() {
  return (
    <div className={classes.container}>
      <Header />
      <main>
        <About />
        <section></section>
        <section></section>
      </main>
    </div>
  );
}

export default App;

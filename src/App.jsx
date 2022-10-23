import About from './components/About/About';
import Header from './components/Header/Header';

import classes from './App.module.scss';

function App() {
  return (
    <div className={classes.container}>
      <Header />
      <main>
        <About />
        <section>sdsa</section>
        <section>ds</section>
      </main>
    </div>
  );
}

export default App;

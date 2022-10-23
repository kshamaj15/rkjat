import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Content from './components/Content/Content';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';

import classes from './App.module.scss';

function App() {
  return (
    <div className={classes.container}>
      <Header />
      <main>
        <About />
        <Blog />
        <Content />
        <Contact />
        <section>ds</section>
      </main>
    </div>
  );
}

export default App;

import About from './sections/About/About';
import Blog from './sections/Blog/Blog';
import Content from './sections/Content/Content';
import Contact from './sections/Contact/Contact';
import Header from './components/Header/Header';

import classes from './App.module.scss';

function App() {
  return (
    <div className={classes.container}>
      <Header />
      <main>
        <About />
        <Blog />
        {/* <Content />
        <Contact /> */}
        <section>ds</section>
      </main>
    </div>
  );
}

export default App;

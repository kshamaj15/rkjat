import Hero from './sections/Hero/Hero';
import Blog from './sections/Blog/Blog';
import Content from './sections/Content/Content';
import Contact from './sections/Contact/Contact';
import Header from './components/Header/Header';

import classes from './App.module.scss';
import About from './sections/About/About';

function App() {
  return (
    <div className={classes.container}>
      <Header />
      <main>
        <Hero />
        <About />
        <Blog />
        {/* <div className={classes.gradientDivider} /> */}
        {/* <Content /> */}
        <Contact />
      </main>
    </div>
  );
}

export default App;

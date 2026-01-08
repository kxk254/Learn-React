import Hello from './Hello.jsx';
import Counter from './Counter.jsx';
import Todos from './Todos.jsx';

function About() {
  return (
    <>
      <h1>About Page</h1>

      <div className="layout">
        <div className="block">
          <Hello name="World" />
        </div>

        <div className="block">
          <Counter />
        </div>
        <div className="block">
          <Todos />
        </div>
      </div>
    </>
  );
}

export default About;
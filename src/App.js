import './App.css';
import rocket from './assets/lc-rocket.png';
import jcsmiley from './assets/jcsmiley.jpg';

import Profile from './components/Profile';

function App() {
  return (
      <main className="app">
        <section className="content-area">
          <Profile picture={jcsmiley} />
          <Profile picture={jcsmiley} />
          <Profile picture={jcsmiley} />
          <Profile picture={jcsmiley} />
          <Profile picture={jcsmiley} />
        </section>
        <section className="rocket-title-area  center-text">
          <h1>Launch Code <br /> Profiles</h1>
          <img src={rocket} alt="white rocket ship" className="rocket-image-style" />
        </section>
        <section className="content-area">right-profile</section>
      </main>
  );
}

export default App;

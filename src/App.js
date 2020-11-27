import './App.css';
import rocket from './assets/lc-rocket.png';
import jcsmiley from './assets/jcsmiley.jpg';

import Profile from './components/Profile';

function App() {
  return (
      <main className="app">
        <section className="content-area">
          <Profile  picture={jcsmiley} alignment="left"  name="JC Smiley" 
                    motto="What don't kill you will make you Stronger" 
                    aspirations="build mobile or web apps that will directly affect my community" 
                    favorites="to eat, mainly pecan pie/cheese cake, and is an avid biker/hiker!" 
                    animal="the raven. Would fly far and wide!" 
          />
          <Profile picture={jcsmiley} alignment="right" name="JC Smiley" />
          <Profile picture={jcsmiley} alignment="left"  name="JC Smiley" />
          <Profile picture={jcsmiley} alignment="right" name="JC Smiley" />
          <Profile picture={jcsmiley} alignment="left"  name="JC Smiley" />
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

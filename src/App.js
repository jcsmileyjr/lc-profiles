import './App.css';
import rocket from './assets/lc-rocket.png';
//import jcsmiley from './assets/jcsmiley.jpg';

import Profile from './components/Profile';

function App() {
  return (
      <main className="app">
        <section className="content-area">
          <Profile  picture="https://ca.slack-edge.com/T01BBKXJPM3-U01C2F78HGU-86fc2c9bdc8d-512" alignment="left"  name="Edgar Hernandez" 
                    motto="What don't kill you will make you Stronger" 
                    aspirations="build mobile or web apps that will directly affect my community" 
                    favorites="to eat, mainly pecan pie/cheese cake, and is an avid biker/hiker!" 
                    animal="the raven. Would fly far and wide!" 
          />
          <Profile  picture="https://ca.slack-edge.com/T01BBKXJPM3-U01BJFCDMU6-d0cab9b535d9-512" alignment="right"  name="Wilfredo Abudeye" 
                    motto="Just Do It" 
                    aspirations="build software for electrical systems simulations" 
                    favorites="eat lasagna, can speak Spanish, and is enneagram type 7!" 
                    animal="the FireFly. Sort of a free spirit!" 
          />
          <Profile  picture="https://ca.slack-edge.com/T01BBKXJPM3-U01BRA1KK4K-a62129b3fffb-512" alignment="left"  name="Austin King" 
                    motto="Better to have it and not need it, than to need it an not have it" 
                    aspirations="to be a full stack developer. I enjoy the front and back end stuff" 
                    favorites="make music, drawing, and to create media" 
                    animal="the Eagle. Watch me soar into the future!" 
          />
          <Profile  picture="https://ca.slack-edge.com/T01BBKXJPM3-U01CAG0E96V-efb2aa836f24-512" alignment="right"  name="Bacari Hersey" 
                    motto="I am the best. Now watch me do my happy coding dance" 
                    aspirations="to build the next FaceBook." 
                    favorites="play games, code smartly, and work hard" 
                    animal="the Lion. I Grind like a King!" 
          /> 
          <Profile  picture="https://ca.slack-edge.com/T01BBKXJPM3-U01BU6AF5UK-80c11b9609b9-512" alignment="left"  name="Delaynie Wheeler" 
                    motto="When I walk in the room, all eyes on me" 
                    aspirations="to be the greatest coder ever" 
                    favorites="climb mountains, hug babies, and cook sushi" 
                    animal="might rabbit. I'm colorful and everyone loves me" 
          />
          <Profile  picture="https://ca.slack-edge.com/T01BBKXJPM3-U01BN52FPC5-g91c81d8786b-512" alignment="right"  name="Valarmathi Nagarathinam" 
                    motto="Talk quietly while doing Big things" 
                    aspirations="to build tomorrow's AI that will annihilate humanity in 20 years. " 
                    favorites="learning about machine learning, building robots, and designing spy gadgets" 
                    animal="the Pretty Cat. Everyone loves me" 
          />                                          
        </section>
        <section className="rocket-title-area  center-text">
          <h1>Launch Code <br /> Profiles</h1>
          <img src={rocket} alt="white rocket ship" className="rocket-image-style" />
        </section>
        <section className="content-area">
        <Profile  picture="https://ca.slack-edge.com/T01BBKXJPM3-U01CQBTGXGQ-c3783c4fce25-512" alignment="left"  name="Kane Agbekoh" 
                    motto="A close mouth don't get fed" 
                    aspirations="own the world. Short of that, be the best I can be" 
                    favorites="playing with the family, volunteering in my community, and hang gliding off of mountains" 
                    animal="The wise Owl. I am always giving out sage advice!" 
          />
          <Profile  picture="https://ca.slack-edge.com/T01BBKXJPM3-U01BS2GLHM3-f0e401a73b13-512" alignment="right"  name="James Chamlee" 
                    motto="Always give 150%" 
                    aspirations="help launch astronauts into space" 
                    favorites="eating hambergurs, hunting wild animals, and sking down mountains" 
                    animal="the cougar. I am fast, smart, and determined" 
          />
          <Profile  picture="https://ca.slack-edge.com/T01BBKXJPM3-U01BRQ6CQHK-d421a9bb5060-512" alignment="left"  name="Santiago" 
                    motto="King Kong got nothing on me" 
                    aspirations="to join Microsoft with the goal conquering the PC wars. Death to Macs" 
                    favorites="coding virus, polka danceing, and home grown whiskey!" 
                    animal="the Grizzly Bear. I am Glorious!" 
          />
          <Profile  picture="https://ca.slack-edge.com/T01BBKXJPM3-U01C95LHPFT-cea08592fa90-512" alignment="right"  name="Lauren (she/her)" 
                    motto="Float like a butterfly and sting like a bee" 
                    aspirations="first female president" 
                    favorites="cooking cookies, bringing down governments, and salsa dancing" 
                    animal="Cobra Snake. Bow down you mortals!" 
          /> 
          <Profile  picture="https://ca.slack-edge.com/T01BBKXJPM3-U01BQCL7E1L-75f48f9ef5d6-512" alignment="left"  name="Sowmya Kolukuluri" 
                    motto="I'm on fire." 
                    aspirations="wants to be the next CEO of Google" 
                    favorites="helping the homeless, advicing presidents, and developing new programming languages in my spare time" 
                    animal="Salmon. Watch as I do amazing things" 
          /> 
          <Profile  picture="https://ca.slack-edge.com/T01BBKXJPM3-U01BPSS0CH4-8292174604c0-512" alignment="right"  name="Flavia Owens" 
                    motto="Walk like you own the place" 
                    aspirations="build a tech based business to rival Amazon" 
                    favorites="doing super-hero stuff at night by fighting bad guys, building schools in third world countries, and baking cakes" 
                    animal="the Wild Horse. I am forever free and wild" 
          />                   
        </section>
      </main>
  );
}

export default App;

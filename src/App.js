import logo from './logo.svg';
import Text from 'react-text';
import headerImage from './flowers.jpeg';
import ky from './kyla.jpeg';
import school from './school.png';
import butterfly from './butterfly.png';
import heart from './heart.png';
import dreams from './dreams.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={headerImage} className="App-head" alt="head" />
        <img src={ky} className="App-logo" alt="logo" />

        <p className="App-heading">
        Kyla Mari Fry
        </p>

      </header>

      <p className="App-contacts">
       kyla.fry@gmail.com
       |
       0836087555
      </p>

      <img src={butterfly} className="App-butterfly" alt="butterfly" />

      <p className="App-sovChoice">
        Over the years, I have become more and more interested and passionate about software
        development and the solutions tech can offer people.
        Exposure to programming in my undergraduate degree as well as the exciting subject of
        coding and robotics in my teaching career, I have grown excited over the possibilities
        within the realm of tech and software development
        and would love to learn more so that I can be part of creating solutions that can change
        people's lives. SovTech's graduate programme seems like the perfect place for me to learn more, within
        the context of the industry, as well as to challenge myself and apply the skills I have learnt.

      </p>

      <img src={school} className="App-school" alt="school" />

      <p className="App-education-deg">
        - BSc. Mathematical Sciences | University Stellenbosch
      </p>

      <p className="App-education-pgce">
        - Post Graduate Certificate in Education | University Stellenbosch
      </p>

      <p className="App-education-bootcamp">
        - Software Engineering Bootcamp | HyperionDev
      </p>

      <img src={heart} className="App-heart" alt="hobbies" />
      <p className="App-hobbies">
        In my spare time I love making music, spending quality time with friends and soaking up the sun.

      </p>

    </div>
  );
}

export default App;

import { useState } from 'react';
import { hacker_house_challenge_2_backend } from 'declarations/hacker-house-challenge-2-backend';

function App() {
  const [greeting, setGreeting] = useState('');
  const [firstData, setFirstData] = useState("")
  const [age, setAge] = useState(null)
  function handleSubmit(event) {
    event.preventDefault();
    hacker_house_challenge_2_backend.predict_age(firstData).then((greeting) => {
      const parsed = (JSON.parse(greeting))
      console.log(parsed)
      setAge(parsed.age);
    });
    return false;
  }

  return (
    <main>
      <h1>Chart Maker</h1>
      <div>
        <h1>Your Age By Your Name</h1>
        <h5>Your Name:</h5>
        <input type="name" onChange={(ev) => setFirstData(ev.target.value)} />
        <button onClick={handleSubmit}>Cek My Age</button>
      </div>
      <div>
        Your Age: {age}
      </div>
      {/* <img src="/logo2.svg" alt="DFINITY logo" />
      <br />
      <br />
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your name: &nbsp;</label>
        <input id="name" alt="Name" type="text" />
        <button type="submit">Click Me!</button>
      </form>
      <section id="greeting">{greeting}</section> */}
    </main>
  );
}

export default App;

import './App.css';
import {useState} from 'react'

import Form from './components/Form'
import Display from './components/Display'

function App() {

  const initial = ['red', 'green', '#666666']

  const [colors, setColors] = useState(initial)


  return (
    <main>
      <Form colors={colors} setColors={setColors}/>
      <Display colors={colors}/>
    </main>
  );
}

export default App;

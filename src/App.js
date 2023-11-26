import './App.css';
import Gomycode from './Components/Gomycode';

function App() {
  var name = 90
  var old = 60
  var tab = ['Tunis','France','Italie','Turquie']
  var user = {
    userName : "Mohamed",
    userOld : 17,
    dog : "King",
    address : {
      city : 'Sidi bou',
      cp : 2526
    }
  } 

  const Hello=()=> alert('Hello Si Mohamed')
  const HelloName=(a)=>alert(`Hello ${a}`)

  var show = true
  return (
    <div>
        <h1>Workshop React Props</h1>
        <Gomycode name={name} old={old} pays={tab} user={user} Hello={Hello} HelloName={HelloName} show={show}>
          <h1>Rahma</h1>
          <h1>Mohamed Ya Behi</h1>
          <h1>Si Abdelwaheb</h1>
        </Gomycode>
    </div>
  );
}

export default App;

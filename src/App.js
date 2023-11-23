import './App.css';
import Gallery from './components/Gallery';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';
import img5 from './images/img5.jpg';
import img6 from './images/img6.jpg';
import img7 from './images/img7.jpg';

const images = [
  {
    id: 1,
    imageSrc: img1
  },
  {
    id: 2,
    imageSrc: img2
  },
  {
    id: 3,
    imageSrc: img3
  },
  {
    id: 4,
    imageSrc: img4
  },
  {
    id: 5,
    imageSrc: img5
  },
  {
    id: 6,
    imageSrc: img6
  },
  {
    id: 7,
    imageSrc: img7
  }
]

function App() {
  return (
    <div className="App">
      <h1 className='app-header'>My Gallery</h1>
      <Gallery images={images}/>
    </div>
  );
}

export default App;

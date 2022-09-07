import './App.css';
import Product from './Components/Product';

import lotion from './Img/bottle-cocooil-baby-oil-on-desk-lotion-lotion-image.jpg';
import camera from './Img/photo-1526170375885-4d8ecf77b99f.avif';
import moisture from './Img/photo-1631729371254-42c2892f0e6e.avif';

function App() {
  return (
    <div className="App">
        <Product imageURL={lotion} productName='cocooil' price='30$'/>
        <Product imageURL={camera} productName='Polaroid' price='60$'/>
        <Product imageURL={moisture} productName='Maui Moisture' price='20$'/>
    </div>
  );
}

export default App;

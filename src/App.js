import './App.css';

import Product from './components/product/Product';


function App() {
  return (
    <div className="App">
      <Product  name="bananas" price="1$" description="Fresh bananas from Ecuador"/>
      <Product  name="apples" price="2$" description="Fresh apples from Armenia"/>
      <Product  name="apricot" price="10$" description="Fresh apricot from Armenia"/>
    </div>
  );
}

export default App;

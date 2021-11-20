import Header from './components/header/Header'
import Main from './components/main/Main'
import products from './mock'

function App() {
  return (
    <div className='appWrapper'>
      <Header cart={{}} />
      <Main products={products} />
    </div>
  );
}

export default App

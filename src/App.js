import { Navigate, Route,Routes } from 'react-router-dom';
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Home} from "./components/Home";
import {ProductList} from "./components/ProductList";
import {ProductDetail} from "./components/ProductDetail";
import {Contact} from "./components/Contact";
import { Admin } from './components/Admin';
import { PageNotFound } from './components/PageNotFound';
import {ContactIn} from './components/ContactIn';
import {ContactUs} from './components/ContactUs';
import { ContactOther } from './components/ContactOther';


import './App.css';


function App() {
  const user=true;
  return (

    <div className="App">
      <Header />
      <main>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='products' element={<ProductList />}/>
        <Route path='products/:id' element={<ProductDetail />}/>
        <Route path='contact' element={<Contact />}>
          <Route path='in' element={<ContactIn />}/>
          <Route path='us' element={<ContactUs />}/>
          <Route path='*' element={<ContactOther />}/>
        </Route>
        <Route path='admin' element={user ? <Admin/>:<Navigate to="/" />}/>
        <Route path='*' element={<PageNotFound title="404"/>}/>
      </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

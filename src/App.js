import { useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown, setCartIsShoewn] = useState(false);

  function setCartIsShoewn() {
    setCartIsShoewn(true);
  }

  function hideCardHandler() {
    setCartIsShoewn(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <div> Cart... </div>}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;

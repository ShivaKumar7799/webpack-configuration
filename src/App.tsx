import React, { Suspense } from 'react';
import './styles.css';
// import Footer from 'app1/Footer';
const Footer = React.lazy(() => import('app1/Footer'));
const Counter = React.lazy(() => import('app1/Counter'));
function App() {
  const handleCallBack = (count: number) => {
    console.log(count, 'counter value');
  };
  return (
    <div>
      <h1>React typescript webpack {process.env.NODE_ENV} </h1>
      <Suspense fallback={<h1>Loading</h1>}>
        <Footer />
      </Suspense>
      <Suspense fallback={<h1>Counter Loading</h1>}>
        <Counter callback={handleCallBack} />
      </Suspense>
    </div>
  );
}

export default App;

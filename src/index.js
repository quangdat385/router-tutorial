import React from 'react';
import ReactDOM from 'react-dom/client';
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './index.css';
import App from './App';
import Expenses from './pages/expenses';
import Invoices from './pages/invoices'
import Invoice from './pages/invoice'
import reportWebVitals from './reportWebVitals';

//Tao Router bao quanh
//NavLink tao active
//outlet noi route con display

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route path="invoices" element={<Invoices/>}>
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Select an invoice</p>
              </main>
            }
          />
            <Route path=":invoiceId" element={<Invoice/>}></Route>
          </Route>
          <Route path="expenses" element={<Expenses/>}></Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
          </Route>
        
      </Routes>
      
    </Router>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

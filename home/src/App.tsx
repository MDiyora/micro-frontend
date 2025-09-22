import './index.css';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Header from './Header';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Suspense } from 'react';

const HRApp = React.lazy(() => import('hr/HRApp'));
const FinanceApp = React.lazy(() => import('finance/FinanceApp'));

const App = () => (
    <Router>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<div className="p-20 text-xl">Welcome to Home App</div>} />
                <Route path="/hr" element={<HRApp />} />
                <Route path="/finance" element={<FinanceApp />} />
            </Routes>
        </Suspense>
    </Router>
);

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement);

root.render(<App />);

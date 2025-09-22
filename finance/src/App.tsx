import './index.css';

import FinanceApp from './FinanceApp';
import ReactDOM from 'react-dom/client';

const App = () => <FinanceApp />;

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement);

root.render(<App />);

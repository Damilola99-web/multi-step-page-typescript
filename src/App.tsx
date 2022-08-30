import { useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import PageA from './pages/PageA';
import PageB from './pages/PageB';
import PageC from './pages/PageC';
import PageD from './pages/PageD';
import { State } from './state/reducers/index';

function App() {
    const { user } = useSelector((state: State) => state);
    console.log(user);
    const [currentPage, setCurrentPage] = useState<1 | 2 | 3 | 4>(1);
    return (
        <div className="App">
            {currentPage === 1 && (
                <PageA
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            )}
            {currentPage === 2 && (
                <PageB
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            )}
            {currentPage === 3 && (
                <PageC
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            )}
            {currentPage === 4 && (
                <PageD
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            )}
        </div>
    );
}

export default App;

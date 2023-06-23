import {useEffect, useState} from 'react';
import ClassWatcher from './ClassWatcher';

function useDarkMode() {
    const [darkMode, setDarkMode] = useState({});

    useEffect(() => {
      setDarkMode(document.documentElement.classList.contains('dark'))
      new ClassWatcher(document.documentElement, 'dark', () => setDarkMode(true), () => setDarkMode(false));
    }, [])
    return darkMode;
}

export default useDarkMode;
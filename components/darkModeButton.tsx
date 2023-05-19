import { useTheme } from 'next-themes';
import { useEffect } from 'react';

const DarkModeButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      Toggle Dark Mode
    </button>
  )
}

export default DarkModeButton;
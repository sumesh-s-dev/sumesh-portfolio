import { createContext, useState, useEffect, useContext } from 'react';

// Create the theme context
const ThemeContext = createContext();

// Custom hook to use the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Theme provider component
export const ThemeProvider = ({ children }) => {
  // Initialize with dark mode as default
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Effect to apply dark mode on initial load
  useEffect(() => {
    // Check if we're in the browser
    if (typeof window !== 'undefined') {
      // Check if user has a stored preference
      const storedDarkMode = localStorage.getItem('darkMode');

      let initialDarkMode;

      // If no stored preference, check system preference but default to dark mode
      if (storedDarkMode === null) {
        // Always default to dark mode
        initialDarkMode = true;
        localStorage.setItem('darkMode', 'true');
      } else {
        // Use stored preference
        initialDarkMode = storedDarkMode === 'true';
      }

      // Set the state
      setIsDarkMode(initialDarkMode);

      // Apply the theme
      if (initialDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }

      // Listen for system preference changes
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = (e) => {
        // Only update if user hasn't set a preference
        if (localStorage.getItem('darkMode') === null) {
          // Always default to dark mode regardless of system preference
          setIsDarkMode(true);
          localStorage.setItem('darkMode', 'true');
        }
      };

      // Add listener
      mediaQuery.addEventListener('change', handleChange);

      // Cleanup
      return () => {
        mediaQuery.removeEventListener('change', handleChange);
      };
    }
  }, []);

  // Effect to update theme when isDarkMode changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [isDarkMode]);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;

      // Update the DOM
      if (newMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }

      // Store the preference
      localStorage.setItem('darkMode', newMode.toString());

      return newMode;
    });
  };

  // Provide the theme context value
  const value = {
    isDarkMode,
    toggleDarkMode
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

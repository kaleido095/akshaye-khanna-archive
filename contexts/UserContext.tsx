
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid'; // For generating unique IDs

// Define the shape of a user profile
export interface UserProfile {
  id: string;
  username: string;
  email: string;
  avatar: string;
}

// Define the shape of the UserContext
interface UserContextType {
  currentUser: UserProfile | null;
  signUp: (username: string, email: string) => Promise<void>;
  logout: () => void;
  showAuthModal: boolean;
  setShowAuthModal: (show: boolean) => void;
}

// Create the context
const UserContext = createContext<UserContextType | undefined>(undefined);

// Create the UserProvider component
interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);

  // Load user from sessionStorage on initial mount
  useEffect(() => {
    const storedUser = sessionStorage.getItem('currentUser');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);

  const signUp = async (username: string, email: string) => {
    // In a real application, you'd make an API call here to register the user.
    // For this mock, we generate a simple user profile.
    const newUser: UserProfile = {
      id: uuidv4(),
      username: username,
      email: email,
      // Generate a random avatar URL for demonstration
      avatar: `https://api.dicebear.com/7.x/pixel-art/svg?seed=${username}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffdfbf,ffd5dc`,
    };
    setCurrentUser(newUser);
    sessionStorage.setItem('currentUser', JSON.stringify(newUser));
    setShowAuthModal(false); // Close modal after sign up
    alert(`Welcome, ${username}! Your account has been created.`);
  };

  const logout = () => {
    setCurrentUser(null);
    sessionStorage.removeItem('currentUser');
    alert('You have been logged out.');
  };

  const value = {
    currentUser,
    signUp,
    logout,
    showAuthModal,
    setShowAuthModal,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

// Custom hook to use the UserContext
export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

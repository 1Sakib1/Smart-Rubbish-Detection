import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../utils/cloudStorage';
import { getCurrentAuthUser, logoutUser as cloudLogout } from '../utils/cloudStorage';
import { supabase } from '../utils/supabase';

interface AuthContextType {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
  isAuthenticated: boolean;
  isAdmin: boolean;
  isLoading: boolean;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Check for existing Supabase session
    const initAuth = async () => {
      try {
        const currentUser = await getCurrentAuthUser();
        if (currentUser) {
          console.log('AuthContext: Loading user from Supabase', currentUser);
          setUser(currentUser);
        }
      } catch (error) {
        console.error('AuthContext: Error loading user from Supabase', error);
      } finally {
        setIsLoading(false);
      }
    };

    initAuth();

    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log('AuthContext: Auth state changed', event);
      
      if (event === 'SIGNED_IN' && session) {
        const currentUser = await getCurrentAuthUser();
        setUser(currentUser);
      } else if (event === 'SIGNED_OUT') {
        setUser(null);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);
  
  const login = (user: User) => {
    console.log('AuthContext: Logging in user', user);
    setUser(user);
  };
  
  const logout = async () => {
    await cloudLogout();
    setUser(null);
  };

  const refreshUser = async () => {
    if (user) {
      const currentUser = await getCurrentAuthUser();
      if (currentUser) {
        setUser(currentUser);
      }
    }
  };
  
  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated: !!user,
        isAdmin: user?.role === 'admin',
        isLoading,
        refreshUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
// src/context/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in on component mount
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    
    if (token && userData) {
      setUser(JSON.parse(userData));
    }
    setLoading(false);
  }, []);

  const login = async (email, password, role) => {
    try {
      // Simulate API call
      const response = await mockLoginAPI(email, password, role);
      
      if (response.success) {
        const userData = {
          email,
          role,
          token: response.token,
          name: response.name,
          id: response.id
        };
        
        setUser(userData);
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(userData));
        
        return { success: true };
      } else {
        return { success: false, error: response.error };
      }
    } catch (error) {
      return { success: false, error: 'Login failed. Please try again.' };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  const value = {
    user,
    login,
    logout,
    loading,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Mock API function
const mockLoginAPI = (email, password, role) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const validUsers = {
        'admin@school.com': { password: 'admin123', role: 'admin', name: 'System Admin', id: 1 },
        'student@school.com': { password: 'student123', role: 'student', name: 'John Student', id: 2 },
        'teacher@school.com': { password: 'teacher123', role: 'teacher', name: 'Jane Teacher', id: 3 },
        'parent@school.com': { password: 'parent123', role: 'parent', name: 'Mike Parent', id: 4 }
      };

      const user = validUsers[email];
      
      if (user && user.password === password && user.role === role) {
        resolve({
          success: true,
          token: `mock-jwt-token-${Date.now()}`,
          name: user.name,
          id: user.id
        });
      } else {
        resolve({
          success: false,
          error: 'Invalid credentials or role mismatch'
        });
      }
    }, 1000);
  });
};
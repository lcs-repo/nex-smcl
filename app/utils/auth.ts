export const checkAdminAuth = async (): Promise<boolean> => {
    // Check if there's a token in localStorage
    const token = localStorage.getItem('adminToken');
  
    if (!token) {
      return false;
    }
  
    // Verify the token with the server
    try {
      const response = await fetch('/api/admin/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });
  
      if (response.ok) {
        return true;
      } else {
        // If the token is invalid, remove it from localStorage
        localStorage.removeItem('adminToken');
        return false;
      }
    } catch (error) {
      console.error('Error verifying admin token:', error);
      return false;
    }
  };
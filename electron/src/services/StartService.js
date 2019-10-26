export const startServer = async () => {
    try {
      const response = await fetch('http://localhost:3001/start', {
        method: 'get',
        mode: 'no-cors'
      });
      
      const json = await response.json()
      return json;
    } catch (err) {
      return err;
    }
  };
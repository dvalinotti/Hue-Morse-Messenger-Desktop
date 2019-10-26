export const execRegistration = async () => {
  try {
    const response = await fetch('http://localhost:3001/register', {
      method: 'post',
      mode: 'no-cors'
    });
    
    const json = await response.json()
    return json;
  } catch (err) {
    return err;
  }
};
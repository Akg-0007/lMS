export const fetchService = async (obj) => {
  const { user, api, method, token } = obj;
  
  try {
    const response = await fetch(api, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        ...user
      }),
    });
    const json = await response.json();
    if (!response.ok) {
      throw new Error(json.error);
    }
    return json;
  } catch (error) {
    throw error;
  }
};

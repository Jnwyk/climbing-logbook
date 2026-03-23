export const handleResponse = async (res: Response) => {
  if (!res.ok) {
    let errorData;
    try {
      errorData = await res.json();
    } catch {
      errorData = {};
    }
    throw {
      message: errorData.message || 'Unknown error',
      status: res.status,
    };
  }

  return res.json();
};

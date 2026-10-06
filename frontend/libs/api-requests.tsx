//file that contains all api request to backend

const baseUrl = process.env.API_URL;

export const getSocialLinks = async () => {
  const res = await fetch(`${baseUrl}/api/sociallinks`);

  if (!res.ok) {
    throw new Error(`API request failed: ${res.status} ${res.statusText}`);
  }
  const data = await res.json();
  return data;
};

export const getProjects = async () => {
  const res = await fetch(`${baseUrl}/api/projects`);
  if (!res.ok) {
    throw new Error(`API request failed: ${res.status} ${res.statusText}`);
  }
  const data = await res.json();
  return data;
};

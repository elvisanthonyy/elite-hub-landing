//file that contains all api request to backend

const baseUrl = process.env.API_URL;

export const getSocialLinks = async () => {
  const res = await fetch(`${baseUrl}/api/sociallinks`);
  const data = await res.json();
  return data;
};

export const getProjects = async () => {
  const res = await fetch(`${baseUrl}/api/projects`);
  const data = await res.json();
  return data;
};

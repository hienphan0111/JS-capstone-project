// -- function to get the information from API
const getData = async () => {
  const response = await fetch('https://picsum.photos/v2/list?page=1&limit=31');
  const data = await response.json();
  return data;
};

export default getData;
// -- function to get the information from API
const getData = async () => {
  const response = await fetch('https://picsum.photos/v2/list');
  const data = await response.json();
  return data;
};

export default getData;
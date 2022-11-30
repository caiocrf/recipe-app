export const foodsAPI = async () => {
  const endpoint = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const response = await fetch(endpoint).then((res) => res.json());
  return response;
};

export const foodsCategoryAPI = async () => {
  const endpoint = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  const response = await fetch(endpoint).then((res) => res.json());
  return response;
};

// export default foodsAPI;

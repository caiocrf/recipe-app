export const saveFav = (recipe) => {
  localStorage.setItem('favoriteRecipes', recipe);
};

export const getFavs = () => localStorage.getItem('favoriteRecipes');

const API = "https://61dee141fb8dae0017c2e316.mockapi.io/";

export const getCocktails = (search ="") => {
  return `${API}cocktails${search}`;
};

export const fetchCocktail = (id) => {
  return `${API}cocktails/${id}`;
};

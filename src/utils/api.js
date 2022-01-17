const API = "https://61dee141fb8dae0017c2e316.mockapi.io";

export const getCocktails = () => {
  return `${API}cocktails`;
};

export const getCocktail = (id) => {
  return `${API}cocktails/${id}`;
};

export const getDate = () => {
  const arr = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];
  const month = arr[new Date().getMonth()];
  const day = new Date().getDate();
  const year = new Date().getFullYear();

  const currentDate = `${day} ${month} ${year}`;
  return currentDate;
};

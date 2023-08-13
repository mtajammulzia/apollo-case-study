export const capitalizeAll = (str: string): string => {
  const arr = str.split(" ");
  for (var i = 0; i < arr.length; i++) arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  return arr.join(" ");
};

export const getGoogleMapsUrl = (long: string, lat: string) => {
  return `https://www.google.com/maps/@${long},${lat},4.38z`;
};

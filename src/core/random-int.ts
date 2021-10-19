export const randomInt = (max: number, min = 0): number => {
  return Math.round(Math.random() * (max - min) + min);
};

export const rand = (num) => {
  if(typeof num !== 'number') return;

  return Math.ceil(Math.random() * num);
};

console.log('module-b2');

export const data = { name: undefined };
export const changeName = () => {
  data.name = Math.random();
};

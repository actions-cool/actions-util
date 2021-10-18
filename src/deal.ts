export const dealStringToArr = (para: string) => {
  /**
   * in  'x1,x2,x3'
   * out ['x1','x2','x3']
   */
  const arr: string[] = [];
  if (para) {
    const paraArr = para.split(',');
    paraArr.forEach(it => {
      if (it.trim()) {
        arr.push(it.trim());
      }
    });
  }
  return arr;
};

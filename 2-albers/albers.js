// Your code here
const squares = (initialWidth, n) => {
  let width = initialWidth;
  let color = '#0000ff';

  for (let i = 0; i<=n; i++){
    if(n % 2 === 0){
      color = '#0000ff';
    } else if(n % 2 !== 0){
      color = '#00ff00';
    } 
  }

  for (let i = 0; i<=n; i++){
    if(n <= 0){
      width = '500';
    } else if(1<=n){
      width = 0.75 * width;
    }
  }
  

  return {
    'width': width,
    'color': color,
  };
}
// End your code

export { squares };
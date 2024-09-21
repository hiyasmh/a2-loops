const fibonacci = (n) => {
  let fn;
  let fn1 = 1;
  let fn2 = 0;

  for (let i = 0; i <= n ; i++) {
    fn = fn1 + fn2;
    fn2 = fn1;
    fn1 = fn;
    console.log(fn);
  };
  
  return n;
}

export { fibonacci };

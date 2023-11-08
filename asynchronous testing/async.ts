export async function sum(a: number, b: number) {

  if(a === 5) {
    throw Error('Come on think of a better number!')
  }
  
  return a + b;
}
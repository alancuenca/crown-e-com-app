const Shop = () => {

  /**
   * @param {string} s
   * @return {number}
   */
  var myAtoi = function (s) {
    let num =[]
    for (let index = 0; index < s.length; index++) {
      const element = s[index];
      if (Number.isInteger(+element) || element === '-') {
        num.push(element)
      }
    }
    return +num.join('')
  };

  console.log(myAtoi("-422hi -"))

  return (
    <div>
      <p>Hello, I am a functional component!</p>
    </div>
  );
};

export default Shop ;

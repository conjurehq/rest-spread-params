// This will colour the body red/green/yellow to indicate test status.
tapBrowserColor();

/**
 * ES5 Version of rest parameters
 * (the old syntax)
 */
 
let sum;

/*sum = function () {
  let total = 0;
  
  for ( let i = 0; i < arguments.length; i++ ) {
    total = total + arguments[i];
  }
  
  return total;
};*/


/**
 * ES6 Version of Rest Parameters
 */

// TODO: Uncomment the below and flesh it out using ES6 syntax
//   and see if the test still passes.

sum = ( ...values ) => {
   return values.reduce(
     (a,b) => { return a+b}
   )
 };



/**
 * Tests of Rest Parameters
 */
tape( 'rest parameters', t => {
  const res = sum( 1, 2, 3 );
  t.equal( res, 6, 'should total all numbers provided' );

  t.end();
});

/**
 * ES5 Version of spread
 * (the old syntax)
 */

let sumArray;

sumArray = function ( array ) {
  return total = sum.apply( this, array );
};


/**
 * ES6 Version of Rest Parameters
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
 */

// TODO: Uncomment the below and flesh it out using ES6 syntax
//   and see if the test still passes.
 sumArray = values => { sum.apply(this,array)};

tape( 'spread', t => {
  const res = sumArray([ 1, 2, 3 ]);
  t.equal( res, 6, 'should total all numbers provided' );

  t.end();
});

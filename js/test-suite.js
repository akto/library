/* Clear the console to show test cases */
console.clear();

function test( func,expected ){
  let output = func,
      result = false;
  if( expected == 'number' ){ result = typeof output == 'number' ? true : false; }
  else if( expected == 'string' ){ result = typeof output == 'string' ? true : false; }
  else if( expected == 'array' ){ result = Array.isArray( output );}
  else if( expected == 'object' ){ result = typeof output == 'object' ? true : false; }
  else{ result = (output == expected); }
  console.log('---Start---');
  console.time('---End---: ');
  console.log( 'Output is: '+output + ' and Expected: ' + expected + ' so Result is: '+ result);
  console.timeEnd('---End---: ');
  
}

test.prototype.render = function( arr ){
  arr.map( function(e){
    let renderFunc = e[0];
    let renderExpected = e[1];
  });
}
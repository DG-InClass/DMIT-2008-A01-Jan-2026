const log = console.log;
log('About Arrays');
log('============');
log();

const pairs = [
    {first: 3, second: 1},
    {first: 3, second: 2},
    {first: 3, second: 3},
    {first: 3, second: 4},
    {first: 3, second: 5},
    {first: 3, second: 6},
    {first: 3, second: 7},
    {first: 3, second: 8},
    {first: 3, second: 9}
]
log(pairs);
log('\nMultiplication:');
const mult = 
    pairs.map((aPair, index) =>
        `${index + 1}) ${aPair.first} X ${aPair.second} = ${aPair.first * aPair.second}`);
log(mult);

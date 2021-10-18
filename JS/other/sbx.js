const props = [
  {id: 1, name: 'Fizz'},
  {id: 2, name: 'Bizz'},
  {id: 3, name: 'Dizz'},
];

const [,,{name}] = props;
console.log(name);

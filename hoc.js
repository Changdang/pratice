let person = {
  name: 'trang',
  age: 20
};

//to change the property we use

//dot notation
person.name = 'Adrian';

//bracket notation
person['name'] = 'mary';

console.log(person);

let selectedColor = ['red' , 'blue'];
selectedColor[2] = 1;
console.log(selectedColor.length);

function dientichhinhtron(r){
  let dientich = r * r * 3.14;
  return console.log(dientich);
}

dientichhinhtron(3)

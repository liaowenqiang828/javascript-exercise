export default function find00OldPerson(collection) {
  // TODO 4: 在这里写实现代码
  const person = collection.find(person => person.age <= 20);
  const { name } = person;
  return name;
}

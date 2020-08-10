// TODO 20: 在这里写实现代码
import Person from './person';

class Teacher extends Person {
  constructor(name, age, klass) {
    super(name, age);
    this.klass = klass;
  }

  introduce() {
    const classInfo = this.klass ? `Class ${this.klass}` : 'No Class';
    return `${super.introduce()} I am a Teacher. I teach ${classInfo}.`;
  }
}
export default Teacher;

export default function countTypesNumber(source) {
  // TODO 6: 在这里写实现代码
  let count = 0;
  Object.values(source).forEach(value => (count += parseInt(value)));
  return count;
}

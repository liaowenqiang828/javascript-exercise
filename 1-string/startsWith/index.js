export default function collectCarNumberCount(collection) {
  // TODO 7: 在这里写实现代码
  const count = collection.filter(item => item.startsWith('粤A')).length;
  return count;
}

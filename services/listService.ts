export async function showAllListService() {
  const getList = await fetch("https://jsonplaceholder.typicode.com/todos");
  const list = await getList.json();

  return { list };
}
export async function getKantinameny() {
  const url = '/api/menus';
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

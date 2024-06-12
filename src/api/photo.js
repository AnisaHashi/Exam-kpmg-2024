export async function getPhoto() {
  const url = '/api/photos';
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

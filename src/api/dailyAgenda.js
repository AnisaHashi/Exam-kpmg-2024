export async function getDailyAgenda() {
  const url = '/api/agendas';
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

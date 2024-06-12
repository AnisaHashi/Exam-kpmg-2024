export async function getReminders() {
  const url = '/api/reminders';
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function getBirthday() {
  const url = "/api/Birthdays";
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

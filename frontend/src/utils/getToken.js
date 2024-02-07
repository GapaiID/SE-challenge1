export default function getToken(name) {
  const nameBase64 = btoa(name);
  const token = localStorage.getItem(nameBase64);

  return atob(token);
}

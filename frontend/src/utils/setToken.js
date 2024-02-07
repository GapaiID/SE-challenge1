export default function setToken({ name, token }) {
  const nameBase64 = btoa(name);
  const tokenBase64 = btoa(token);

  return localStorage.setItem(nameBase64, tokenBase64);
}

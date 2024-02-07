export default function dateParser(date) {
  return new Date(date).toUTCString();
}

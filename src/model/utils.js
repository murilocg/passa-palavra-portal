export const getNextLetter = letter => {
  if (!letter) return String.fromCharCode(65);
  const code = (letter.charCodeAt(0) - 64) % 26;
  return String.fromCharCode(code + 65);
};

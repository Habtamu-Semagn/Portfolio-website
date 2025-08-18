export const copyToClipboard = (text) => {
  return navigator.clipboard
    .writeText(text)
    .then(() => true)
    .catch(() => false);
};

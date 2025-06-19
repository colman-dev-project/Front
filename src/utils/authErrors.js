export function extractedAuthError(err, fallbackMessage) {
  return (
    err?.data?.error ||
    err?.data?.message ||
    err?.message ||
    fallbackMessage
  );
}

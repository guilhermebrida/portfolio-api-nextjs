export function getCorsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

export function handleOptions() {
  return new Response(null, {
    status: 204,
    headers: getCorsHeaders(),
  });
}

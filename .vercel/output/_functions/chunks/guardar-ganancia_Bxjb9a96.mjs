const API_URL = "http://localhost:5145";
function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" }
  });
}
const POST = async ({ request }) => {
  try {
    const body = await request.json();
    const { idCotizacion, ganancia, precioFinalCliente } = body;
    if (!idCotizacion) {
      return json({ success: false, error: "idCotizacion requerido" }, 400);
    }
    const res = await fetch(`${API_URL}/api/cotizaciones/${idCotizacion}/ganancia`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ganancia_downlabs: Number(ganancia || 0)
      })
    });
    const data = await res.json();
    return json(data);
  } catch (error) {
    return json({ success: false, error: error.message }, 500);
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

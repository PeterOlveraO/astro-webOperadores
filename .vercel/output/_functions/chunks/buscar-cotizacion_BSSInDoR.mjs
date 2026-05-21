const API_URL = "http://localhost:5145";
function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" }
  });
}
const GET = async ({ url }) => {
  const idSolicitud = url.searchParams.get("id_solicitud");
  if (!idSolicitud) {
    return json({ success: false, error: "id_solicitud requerido" }, 400);
  }
  try {
    const res = await fetch(
      `${API_URL}/api/cotizaciones?id_solicitud=${idSolicitud}`
    );
    const data = await res.json();
    if (data.success && data.data && data.data.length > 0) {
      return json({ success: true, id_cotizacion: data.data[0].id_cotizaciondwnlabs });
    }
    return json({ success: false, error: "Cotizacion no encontrada" }, 404);
  } catch (error) {
    return json({ success: false, error: error.message }, 500);
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

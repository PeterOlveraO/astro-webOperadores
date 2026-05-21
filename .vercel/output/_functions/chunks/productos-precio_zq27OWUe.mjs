const API_URL = "http://localhost:5145";
function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" }
  });
}
const GET = async ({ url }) => {
  const idsParam = url.searchParams.get("ids");
  const fields = url.searchParams.get("fields") || "id_producto,nombre_articulo,precio_mayorista";
  if (!idsParam) {
    return json({ success: false, error: "ids requerido" }, 400);
  }
  try {
    const ids = idsParam.split(",").filter(Boolean);
    if (ids.length === 0) {
      return json({ success: false, error: "sin IDs" }, 400);
    }
    const res = await fetch(
      `${API_URL}/api/catalogo-productos?pageSize=1000&fields=${fields}`
    );
    const data = await res.json();
    if (!data.success || !data.data) {
      return json({ success: false, error: "Error del backend" }, 500);
    }
    const filtered = data.data.filter((p) => ids.includes(p.id_producto));
    const priceMap = {};
    filtered.forEach((p) => {
      priceMap[p.id_producto] = Number(p.precio_mayorista || 0);
    });
    return json({ success: true, data: priceMap });
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

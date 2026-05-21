const API_URL = "http://localhost:5145";
function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" }
  });
}
async function forwardJson(url, init) {
  try {
    const res = await fetch(url, init);
    const text = await res.text();
    let parsed = null;
    try {
      parsed = text ? JSON.parse(text) : null;
    } catch {
      return json(
        {
          success: false,
          error: "El backend devolvió una respuesta no válida",
          raw: text?.slice(0, 300) || null
        },
        502
      );
    }
    return json(parsed, res.status);
  } catch (error) {
    return json(
      {
        success: false,
        error: "No se pudo conectar con el backend",
        details: error?.message || "Error desconocido"
      },
      500
    );
  }
}
const GET = async ({ url }) => {
  const idSolicitud = url.searchParams.get("id_solicitud");
  if (!idSolicitud) {
    return json({ success: false, error: "id_solicitud requerido" }, 400);
  }
  return forwardJson(
    `${API_URL}/api/cotizaciones?id_solicitud=${encodeURIComponent(idSolicitud)}`
  );
};
const PUT = async ({ request }) => {
  try {
    const body = await request.json();
    const { id_cotizacion, ...data } = body;
    if (!id_cotizacion) {
      return json({ success: false, error: "id_cotizacion requerido" }, 400);
    }
    return forwardJson(`${API_URL}/api/cotizaciones`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id_cotizacion, ...data })
    });
  } catch {
    return json({ success: false, error: "JSON inválido en la petición" }, 400);
  }
};
const POST = async ({ request }) => {
  try {
    const body = await request.json();
    return forwardJson(`${API_URL}/api/cotizaciones`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });
  } catch {
    return json({ success: false, error: "JSON inválido en la petición" }, 400);
  }
};
const PATCH = async ({ request }) => {
  try {
    const body = await request.json();
    return forwardJson(`${API_URL}/api/cotizaciones/finalizar`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });
  } catch {
    return json({ success: false, error: "JSON inválido en la petición" }, 400);
  }
};
const DELETE = async ({ url }) => {
  const idCotizacion = url.searchParams.get("id_cotizacion");
  if (!idCotizacion) {
    return json({ success: false, error: "id_cotizacion requerido" }, 400);
  }
  return forwardJson(
    `${API_URL}/api/cotizaciones?id_cotizacion=${encodeURIComponent(idCotizacion)}`,
    { method: "DELETE" }
  );
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE,
  GET,
  PATCH,
  POST,
  PUT
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

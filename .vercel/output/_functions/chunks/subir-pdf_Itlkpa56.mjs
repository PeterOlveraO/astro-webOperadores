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
    const { pdfBase64, fileName, bucket, idCotizacion } = body;
    if (!pdfBase64 || !fileName) {
      return json({ success: false, error: "pdfBase64 y fileName son requeridos" }, 400);
    }
    const res = await fetch(`${API_URL}/api/storage/upload-pdf`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        base64: pdfBase64,
        fileName,
        bucket: bucket || "cotizaciones-pdf",
        idCotizacion: idCotizacion || null
      })
    });
    const data = await res.json();
    if (data.url) {
      return json({ success: true, url: data.url });
    }
    return json({ success: false, error: data.error || "Error al subir PDF" }, 500);
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

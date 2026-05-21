import type { APIRoute } from 'astro';

const API_URL = import.meta.env.PUBLIC_API_URL || 'http://localhost:5145';

function json(data: any, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

export const GET: APIRoute = async ({ url }) => {
  const idSolicitud = url.searchParams.get('id_solicitud');

  if (!idSolicitud) {
    return json({ success: false, error: 'id_solicitud requerido' }, 400);
  }

  try {
    const res = await fetch(
      `${API_URL}/api/cotizaciones?id_solicitud=${idSolicitud}`
    );
    const data = await res.json();

    if (data.success && data.data && data.data.length > 0) {
      return json({ success: true, id_cotizacion: data.data[0].id_cotizaciondwnlabs });
    }

    return json({ success: false, error: 'Cotizacion no encontrada' }, 404);
  } catch (error: any) {
    return json({ success: false, error: error.message }, 500);
  }
};

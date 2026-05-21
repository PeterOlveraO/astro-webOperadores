import type { APIRoute } from 'astro';

const API_URL = import.meta.env.PUBLIC_API_URL || 'http://localhost:5145';

function json(data: any, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { idCotizacion, ganancia, precioFinalCliente } = body;

    if (!idCotizacion) {
      return json({ success: false, error: 'idCotizacion requerido' }, 400);
    }

    const res = await fetch(`${API_URL}/api/cotizaciones/${idCotizacion}/ganancia`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ganancia_downlabs: Number(ganancia || 0),
      }),
    });

    const data = await res.json();
    return json(data);
  } catch (error: any) {
    return json({ success: false, error: error.message }, 500);
  }
};

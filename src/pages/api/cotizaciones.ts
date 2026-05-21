import type { APIRoute } from 'astro';

const API_URL = import.meta.env.PUBLIC_API_URL || 'http://localhost:5145';

function json(data: any, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

async function forwardJson(url: string, init?: RequestInit) {
  try {
    const res = await fetch(url, init);
    const text = await res.text();

    let parsed: any = null;
    try {
      parsed = text ? JSON.parse(text) : null;
    } catch {
      return json(
        {
          success: false,
          error: 'El backend devolvió una respuesta no válida',
          raw: text?.slice(0, 300) || null,
        },
        502
      );
    }

    return json(parsed, res.status);
  } catch (error: any) {
    return json(
      {
        success: false,
        error: 'No se pudo conectar con el backend',
        details: error?.message || 'Error desconocido',
      },
      500
    );
  }
}

// GET: obtener cotizaciones de una solicitud
export const GET: APIRoute = async ({ url }) => {
  const idSolicitud = url.searchParams.get('id_solicitud');

  if (!idSolicitud) {
    return json({ success: false, error: 'id_solicitud requerido' }, 400);
  }

  return forwardJson(
    `${API_URL}/api/cotizaciones?id_solicitud=${encodeURIComponent(idSolicitud)}`
  );
};

// PUT: actualizar cotización (ej: guardar pdf_url)
export const PUT: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { id_cotizacion, ...data } = body;

    if (!id_cotizacion) {
      return json({ success: false, error: 'id_cotizacion requerido' }, 400);
    }

    return forwardJson(`${API_URL}/api/cotizaciones`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id_cotizacion, ...data }),
    });
  } catch {
    return json({ success: false, error: 'JSON inválido en la petición' }, 400);
  }
};

// POST: agregar producto a la cotización
export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();

    return forwardJson(`${API_URL}/api/cotizaciones`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
  } catch {
    return json({ success: false, error: 'JSON inválido en la petición' }, 400);
  }
};

// PATCH: finalizar cotización
export const PATCH: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();

    return forwardJson(`${API_URL}/api/cotizaciones/finalizar`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
  } catch {
    return json({ success: false, error: 'JSON inválido en la petición' }, 400);
  }
};

// DELETE: eliminar producto de la cotización
export const DELETE: APIRoute = async ({ url }) => {
  const idCotizacion = url.searchParams.get('id_cotizacion');

  if (!idCotizacion) {
    return json({ success: false, error: 'id_cotizacion requerido' }, 400);
  }

  return forwardJson(
    `${API_URL}/api/cotizaciones?id_cotizacion=${encodeURIComponent(idCotizacion)}`,
    { method: 'DELETE' }
  );
};
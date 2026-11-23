// config.js
const APP_CONFIG = {
  NTFY_TOPIC: 'detallazo-ilene-2026',
  NTFY_SERVER: 'https://ntfy.sh'
};

/**
 * Envía una notificación push a tu teléfono usando ntfy.sh
 * @param {Object} opciones
 * @param {string} opciones.titulo - Encabezado de la notificación
 * @param {string} opciones.mensaje - Cuerpo del mensaje que verás en el celular
 * @param {string} [opciones.tags='heart,sparkles'] - Emojis/tags de ntfy separados por coma
 */
async function enviarNotificacionNtfy({ titulo, mensaje, tags = 'heart,sparkles' }) {
  const url = `${APP_CONFIG.NTFY_SERVER}/${encodeURIComponent(APP_CONFIG.NTFY_TOPIC)}`;

  const respuesta = await fetch(url, {
    method: 'POST',
    headers: {
      'Title': titulo,
      'Priority': 'high',
      'Tags': tags
    },
    body: mensaje
  });

  if (!respuesta.ok) {
    throw new Error(`Error HTTP ${respuesta.status}`);
  }

  return true;
}
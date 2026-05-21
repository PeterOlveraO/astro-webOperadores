import { c as createComponent } from './astro-component_BfP70hli.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_Di8hritT.mjs';
import { $ as $$DashboardLayout } from './DashboardLayout__BO0mkrC.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "Negociaciones Pendientes · Operador", "data-astro-cid-k6vw2roo": true }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", `<div class="page-container" data-astro-cid-k6vw2roo> <!-- Header --> <div class="page-header" data-astro-cid-k6vw2roo> <nav class="breadcrumb" data-astro-cid-k6vw2roo> <a href="/dashboard" data-astro-cid-k6vw2roo>Dashboard</a> <span class="material-symbols-outlined" data-astro-cid-k6vw2roo>chevron_right</span> <span class="current" data-astro-cid-k6vw2roo>Cotizaciones en Negociación</span> </nav> <h1 class="page-title" data-astro-cid-k6vw2roo>Panel de Negociación</h1> <p class="page-subtitle" data-astro-cid-k6vw2roo>
Las <strong id="contador-negociaciones" data-astro-cid-k6vw2roo>cargando...</strong> cotizaciones esperando costos finales y margen de ganancia.
</p> </div> <!-- Stats Grid --> <div class="stats-grid" data-astro-cid-k6vw2roo> <div class="stat-card" data-astro-cid-k6vw2roo> <div class="stat-icon stat-icon-primary" data-astro-cid-k6vw2roo> <span class="material-symbols-outlined" data-astro-cid-k6vw2roo>handshake</span> </div> <div class="stat-content" data-astro-cid-k6vw2roo> <p class="stat-label" data-astro-cid-k6vw2roo>En Negociación</p> <h3 class="stat-value" id="stat-negociando" data-astro-cid-k6vw2roo>—</h3> <p class="stat-desc" data-astro-cid-k6vw2roo>Cotizaciones activas</p> </div> </div> <div class="stat-card" data-astro-cid-k6vw2roo> <div class="stat-icon stat-icon-secondary" data-astro-cid-k6vw2roo> <span class="material-symbols-outlined" data-astro-cid-k6vw2roo>attach_money</span> </div> <div class="stat-content" data-astro-cid-k6vw2roo> <p class="stat-label" data-astro-cid-k6vw2roo>Valor Total</p> <h3 class="stat-value" id="stat-valor" data-astro-cid-k6vw2roo>$0</h3> <p class="stat-desc" data-astro-cid-k6vw2roo>En negociación</p> </div> </div> <div class="stat-card" data-astro-cid-k6vw2roo> <div class="stat-icon stat-icon-tertiary" data-astro-cid-k6vw2roo> <span class="material-symbols-outlined" data-astro-cid-k6vw2roo>inventory_2</span> </div> <div class="stat-content" data-astro-cid-k6vw2roo> <p class="stat-label" data-astro-cid-k6vw2roo>Productos</p> <h3 class="stat-value" id="stat-productos" data-astro-cid-k6vw2roo>—</h3> <p class="stat-desc" data-astro-cid-k6vw2roo>En todas las cotizaciones</p> </div> </div> </div> <!-- Table Section --> <div class="table-container" data-astro-cid-k6vw2roo> <div class="table-header" data-astro-cid-k6vw2roo> <h2 data-astro-cid-k6vw2roo>Cotizaciones Downlabs</h2> </div> <div class="table-wrapper" data-astro-cid-k6vw2roo> <table class="data-table" data-astro-cid-k6vw2roo> <thead data-astro-cid-k6vw2roo> <tr data-astro-cid-k6vw2roo> <th data-astro-cid-k6vw2roo>ID Cotización</th> <th data-astro-cid-k6vw2roo>Pedido Relacionado</th> <th data-astro-cid-k6vw2roo>Productos</th> <th data-astro-cid-k6vw2roo>Última Actualización</th> <th class="text-center" data-astro-cid-k6vw2roo>Acción</th> </tr> </thead> <tbody id="negociaciones-tbody" data-astro-cid-k6vw2roo></tbody> </table> </div> </div> </div>  <dialog id="modal-finalizar" class="modal" data-astro-cid-k6vw2roo> <div class="modal-content" data-astro-cid-k6vw2roo> <div class="modal-header" data-astro-cid-k6vw2roo> <div class="modal-title-group" data-astro-cid-k6vw2roo> <div class="modal-icon" data-astro-cid-k6vw2roo> <span class="material-symbols-outlined" data-astro-cid-k6vw2roo>point_of_sale</span> </div> <div data-astro-cid-k6vw2roo> <h3 data-astro-cid-k6vw2roo>Finalizar Propuesta Económica</h3> <p class="modal-id" id="modal-id-display" data-astro-cid-k6vw2roo>ID: ---</p> </div> </div> <button id="btn-close" class="modal-close" data-astro-cid-k6vw2roo> <span class="material-symbols-outlined" data-astro-cid-k6vw2roo>close</span> </button> </div> <div class="modal-body" data-astro-cid-k6vw2roo> <div class="modal-left" data-astro-cid-k6vw2roo> <div class="input-card" data-astro-cid-k6vw2roo> <h4 data-astro-cid-k6vw2roo> <span class="material-symbols-outlined" data-astro-cid-k6vw2roo>settings_input_component</span>
Variables de Costo
</h4> <div class="input-group" data-astro-cid-k6vw2roo> <label data-astro-cid-k6vw2roo>Costo de Operación (Envío/Gestión)</label> <div class="input-wrapper" data-astro-cid-k6vw2roo> <span class="input-prefix" data-astro-cid-k6vw2roo>$</span> <input type="number" id="input-costo-op" placeholder="0.00" step="0.01" data-astro-cid-k6vw2roo> </div> </div> <div class="input-group" data-astro-cid-k6vw2roo> <label data-astro-cid-k6vw2roo>Margen de Ganancia Downlabs (%)</label> <div class="input-wrapper" data-astro-cid-k6vw2roo> <span class="input-suffix" data-astro-cid-k6vw2roo>%</span> <input type="number" id="input-ganancia" placeholder="15" step="0.1" value="15" data-astro-cid-k6vw2roo> </div> </div> </div> <div class="input-card" data-astro-cid-k6vw2roo> <h4 data-astro-cid-k6vw2roo>Productos en esta cotización</h4> <div id="modal-productos-list" class="product-list" data-astro-cid-k6vw2roo></div> </div> </div> <div class="modal-right" data-astro-cid-k6vw2roo> <div class="summary-card" data-astro-cid-k6vw2roo> <p class="summary-label" data-astro-cid-k6vw2roo>Precio Final Sugerido al Cliente</p> <h2 class="summary-total" id="display-total" data-astro-cid-k6vw2roo>$0.00</h2> <div class="summary-details" data-astro-cid-k6vw2roo> <div class="summary-row" data-astro-cid-k6vw2roo> <span data-astro-cid-k6vw2roo>Subtotal Productos:</span> <span id="display-subtotal" data-astro-cid-k6vw2roo>$0.00</span> </div> <div class="summary-row" data-astro-cid-k6vw2roo> <span data-astro-cid-k6vw2roo>Costos Operativos:</span> <span id="display-op-val" data-astro-cid-k6vw2roo>$0.00</span> </div> <div class="summary-row summary-profit" data-astro-cid-k6vw2roo> <span data-astro-cid-k6vw2roo>Utilidad Proyectada:</span> <span id="display-profit" data-astro-cid-k6vw2roo>$0.00</span> </div> </div> </div> <button id="btn-guardar" class="btn-primary" data-astro-cid-k6vw2roo> <span class="material-symbols-outlined" data-astro-cid-k6vw2roo>task_alt</span>
FINALIZAR Y PUBLICAR
</button> </div> </div> </div> </dialog> <script>
    const modal = document.getElementById('modal-finalizar');
    const inputCostoOp = document.getElementById('input-costo-op');
    const inputGanancia = document.getElementById('input-ganancia');
    let currentCotId = null;
    let subtotalProductos = 0;
    let negociacionesData = [];
    const API_URL = 'http://localhost:5145';

    async function loadNegociaciones() {
      try {
        const res = await fetch(\`\${API_URL}/api/cotizaciones-downlabs?pageSize=200\`);
        const json = await res.json();
        return json.data?.filter(c => c.estado === 'Negociando') || [];
      } catch (e) {
        console.error('Error:', e);
        return [];
      }
    }

    async function init() {
      negociacionesData = await loadNegociaciones();
      
      document.getElementById('contador-negociaciones').textContent = negociacionesData.length;
      document.getElementById('stat-negociando').textContent = negociacionesData.length;
      
      const totalValor = negociacionesData.reduce((acc, c) => {
        return acc + (c.productos?.reduce((sum, p) => sum + ((p.precio_mayorista || 0) * p.cantidad), 0) || 0);
      }, 0);
      document.getElementById('stat-valor').textContent = '$' + totalValor.toLocaleString('es-MX', { minimumFractionDigits: 0 });
      
      const totalProductos = negociacionesData.reduce((acc, c) => acc + (c.productos?.reduce((sum, p) => sum + p.cantidad, 0) || 0), 0);
      document.getElementById('stat-productos').textContent = totalProductos;
      
      renderTable();
    }

    function renderTable() {
      const tbody = document.getElementById('negociaciones-tbody');
      if (!tbody) return;
      
      if (negociacionesData.length === 0) {
        tbody.innerHTML = \`
          <tr>
            <td colspan="5" class="empty-state">
              <span class="material-symbols-outlined">handshake</span>
              <p>No hay negociaciones activas</p>
              <span>Cuando una solicitud raw sea procesada, aparecerá aquí.</span>
            </td>
          </tr>
        \`;
        return;
      }

      tbody.innerHTML = negociacionesData.map(c => {
        const productosCount = c.productos?.reduce((sum, p) => sum + p.cantidad, 0) || 0;
        return \`
          <tr>
            <td>
              <div class="cell-id">
                <span class="material-symbols-outlined">description</span>
                <span>\${c.id_cotizacion_downlabs?.slice(0, 13) || '—'}</span>
              </div>
            </td>
            <td><span class="cell-text">Pedido Raw: \${c.pedido_raw_id?.slice(0, 8) || '—'}</span></td>
            <td><span class="badge">\${productosCount} productos</span></td>
            <td><span class="cell-date">\${formatDate(c.updated_at)}</span></td>
            <td class="text-center">
              <button class="btn-action" data-id="\${c.id_cotizacion_downlabs}">
                <span class="material-symbols-outlined">edit_note</span>
                Finalizar
              </button>
            </td>
          </tr>
        \`;
      }).join('');

      document.querySelectorAll('.btn-action').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const id = btn.dataset.id;
          const data = negociacionesData.find(n => n.id_cotizacion_downlabs === id);
          if (!data) return;

          currentCotId = id;
          document.getElementById('modal-id-display').textContent = \`ID: \${id.slice(0, 20)}\`;
          
          subtotalProductos = data.productos?.reduce((acc, p) => acc + ((p.precio_mayorista || 0) * p.cantidad), 0) || 0;

          const listContainer = document.getElementById('modal-productos-list');
          listContainer.innerHTML = data.productos?.map(p => \`
            <div class="product-item">
              <span class="material-symbols-outlined">shopping_bag</span>
              <span>ID: \${(p.id_producto || '').slice(0,12)}</span>
              <span class="product-qty">x\${p.cantidad}</span>
            </div>
          \`).join('') || '<p class="no-products">Sin productos</p>';

          inputCostoOp.value = '';
          inputGanancia.value = '15';
          updateCalculations();
          modal.showModal();
        });
      });
    }

    function formatDate(dateStr) {
      if (!dateStr) return '—';
      return new Date(dateStr).toLocaleDateString('es-MX', { 
        day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' 
      });
    }

    function updateCalculations() {
      const costoOp = parseFloat(inputCostoOp.value || 0);
      const margenPerc = parseFloat(inputGanancia.value || 0) / 100;
      const subtotalConOp = subtotalProductos + costoOp;
      const precioFinal = subtotalConOp * (1 + margenPerc);
      const utilidad = precioFinal - subtotalConOp;

      document.getElementById('display-total').textContent = \`$\${precioFinal.toLocaleString('es-MX', { minimumFractionDigits: 2 })}\`;
      document.getElementById('display-subtotal').textContent = \`$\${subtotalProductos.toLocaleString('es-MX', { minimumFractionDigits: 2 })}\`;
      document.getElementById('display-op-val').textContent = \`$\${costoOp.toLocaleString('es-MX', { minimumFractionDigits: 2 })}\`;
      document.getElementById('display-profit').textContent = \`$\${utilidad.toLocaleString('es-MX', { minimumFractionDigits: 2 })}\`;
    }

    inputCostoOp.addEventListener('input', updateCalculations);
    inputGanancia.addEventListener('input', updateCalculations);
    document.getElementById('btn-close').addEventListener('click', () => modal.close());

    document.getElementById('btn-guardar').addEventListener('click', async () => {
      const btn = document.getElementById('btn-guardar');
      btn.disabled = true;
      btn.innerHTML = '<span class="material-symbols-outlined spin">sync</span> PUBLICANDO...';

      const payload = {
        costo_operacion: parseFloat(inputCostoOp.value || 0),
        ganancia_down: parseFloat(inputGanancia.value || 0),
        estado: 'listo'
      };

      try {
        const res = await fetch(\`\${API_URL}/api/cotizaciones-downlabs/\${currentCotId}/finalizar\`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (res.ok) {
          alert("¡Cotización finalizada con éxito!");
          window.location.reload();
        } else {
          alert("Error al guardar.");
          btn.disabled = false;
          btn.innerHTML = '<span class="material-symbols-outlined">task_alt</span> FINALIZAR Y PUBLICAR';
        }
      } catch (e) {
        alert("Error de conexión.");
        btn.disabled = false;
        btn.innerHTML = '<span class="material-symbols-outlined">task_alt</span> FINALIZAR Y PUBLICAR';
      }
    });

    init();
  </script> `], [" ", `<div class="page-container" data-astro-cid-k6vw2roo> <!-- Header --> <div class="page-header" data-astro-cid-k6vw2roo> <nav class="breadcrumb" data-astro-cid-k6vw2roo> <a href="/dashboard" data-astro-cid-k6vw2roo>Dashboard</a> <span class="material-symbols-outlined" data-astro-cid-k6vw2roo>chevron_right</span> <span class="current" data-astro-cid-k6vw2roo>Cotizaciones en Negociación</span> </nav> <h1 class="page-title" data-astro-cid-k6vw2roo>Panel de Negociación</h1> <p class="page-subtitle" data-astro-cid-k6vw2roo>
Las <strong id="contador-negociaciones" data-astro-cid-k6vw2roo>cargando...</strong> cotizaciones esperando costos finales y margen de ganancia.
</p> </div> <!-- Stats Grid --> <div class="stats-grid" data-astro-cid-k6vw2roo> <div class="stat-card" data-astro-cid-k6vw2roo> <div class="stat-icon stat-icon-primary" data-astro-cid-k6vw2roo> <span class="material-symbols-outlined" data-astro-cid-k6vw2roo>handshake</span> </div> <div class="stat-content" data-astro-cid-k6vw2roo> <p class="stat-label" data-astro-cid-k6vw2roo>En Negociación</p> <h3 class="stat-value" id="stat-negociando" data-astro-cid-k6vw2roo>—</h3> <p class="stat-desc" data-astro-cid-k6vw2roo>Cotizaciones activas</p> </div> </div> <div class="stat-card" data-astro-cid-k6vw2roo> <div class="stat-icon stat-icon-secondary" data-astro-cid-k6vw2roo> <span class="material-symbols-outlined" data-astro-cid-k6vw2roo>attach_money</span> </div> <div class="stat-content" data-astro-cid-k6vw2roo> <p class="stat-label" data-astro-cid-k6vw2roo>Valor Total</p> <h3 class="stat-value" id="stat-valor" data-astro-cid-k6vw2roo>$0</h3> <p class="stat-desc" data-astro-cid-k6vw2roo>En negociación</p> </div> </div> <div class="stat-card" data-astro-cid-k6vw2roo> <div class="stat-icon stat-icon-tertiary" data-astro-cid-k6vw2roo> <span class="material-symbols-outlined" data-astro-cid-k6vw2roo>inventory_2</span> </div> <div class="stat-content" data-astro-cid-k6vw2roo> <p class="stat-label" data-astro-cid-k6vw2roo>Productos</p> <h3 class="stat-value" id="stat-productos" data-astro-cid-k6vw2roo>—</h3> <p class="stat-desc" data-astro-cid-k6vw2roo>En todas las cotizaciones</p> </div> </div> </div> <!-- Table Section --> <div class="table-container" data-astro-cid-k6vw2roo> <div class="table-header" data-astro-cid-k6vw2roo> <h2 data-astro-cid-k6vw2roo>Cotizaciones Downlabs</h2> </div> <div class="table-wrapper" data-astro-cid-k6vw2roo> <table class="data-table" data-astro-cid-k6vw2roo> <thead data-astro-cid-k6vw2roo> <tr data-astro-cid-k6vw2roo> <th data-astro-cid-k6vw2roo>ID Cotización</th> <th data-astro-cid-k6vw2roo>Pedido Relacionado</th> <th data-astro-cid-k6vw2roo>Productos</th> <th data-astro-cid-k6vw2roo>Última Actualización</th> <th class="text-center" data-astro-cid-k6vw2roo>Acción</th> </tr> </thead> <tbody id="negociaciones-tbody" data-astro-cid-k6vw2roo></tbody> </table> </div> </div> </div>  <dialog id="modal-finalizar" class="modal" data-astro-cid-k6vw2roo> <div class="modal-content" data-astro-cid-k6vw2roo> <div class="modal-header" data-astro-cid-k6vw2roo> <div class="modal-title-group" data-astro-cid-k6vw2roo> <div class="modal-icon" data-astro-cid-k6vw2roo> <span class="material-symbols-outlined" data-astro-cid-k6vw2roo>point_of_sale</span> </div> <div data-astro-cid-k6vw2roo> <h3 data-astro-cid-k6vw2roo>Finalizar Propuesta Económica</h3> <p class="modal-id" id="modal-id-display" data-astro-cid-k6vw2roo>ID: ---</p> </div> </div> <button id="btn-close" class="modal-close" data-astro-cid-k6vw2roo> <span class="material-symbols-outlined" data-astro-cid-k6vw2roo>close</span> </button> </div> <div class="modal-body" data-astro-cid-k6vw2roo> <div class="modal-left" data-astro-cid-k6vw2roo> <div class="input-card" data-astro-cid-k6vw2roo> <h4 data-astro-cid-k6vw2roo> <span class="material-symbols-outlined" data-astro-cid-k6vw2roo>settings_input_component</span>
Variables de Costo
</h4> <div class="input-group" data-astro-cid-k6vw2roo> <label data-astro-cid-k6vw2roo>Costo de Operación (Envío/Gestión)</label> <div class="input-wrapper" data-astro-cid-k6vw2roo> <span class="input-prefix" data-astro-cid-k6vw2roo>$</span> <input type="number" id="input-costo-op" placeholder="0.00" step="0.01" data-astro-cid-k6vw2roo> </div> </div> <div class="input-group" data-astro-cid-k6vw2roo> <label data-astro-cid-k6vw2roo>Margen de Ganancia Downlabs (%)</label> <div class="input-wrapper" data-astro-cid-k6vw2roo> <span class="input-suffix" data-astro-cid-k6vw2roo>%</span> <input type="number" id="input-ganancia" placeholder="15" step="0.1" value="15" data-astro-cid-k6vw2roo> </div> </div> </div> <div class="input-card" data-astro-cid-k6vw2roo> <h4 data-astro-cid-k6vw2roo>Productos en esta cotización</h4> <div id="modal-productos-list" class="product-list" data-astro-cid-k6vw2roo></div> </div> </div> <div class="modal-right" data-astro-cid-k6vw2roo> <div class="summary-card" data-astro-cid-k6vw2roo> <p class="summary-label" data-astro-cid-k6vw2roo>Precio Final Sugerido al Cliente</p> <h2 class="summary-total" id="display-total" data-astro-cid-k6vw2roo>$0.00</h2> <div class="summary-details" data-astro-cid-k6vw2roo> <div class="summary-row" data-astro-cid-k6vw2roo> <span data-astro-cid-k6vw2roo>Subtotal Productos:</span> <span id="display-subtotal" data-astro-cid-k6vw2roo>$0.00</span> </div> <div class="summary-row" data-astro-cid-k6vw2roo> <span data-astro-cid-k6vw2roo>Costos Operativos:</span> <span id="display-op-val" data-astro-cid-k6vw2roo>$0.00</span> </div> <div class="summary-row summary-profit" data-astro-cid-k6vw2roo> <span data-astro-cid-k6vw2roo>Utilidad Proyectada:</span> <span id="display-profit" data-astro-cid-k6vw2roo>$0.00</span> </div> </div> </div> <button id="btn-guardar" class="btn-primary" data-astro-cid-k6vw2roo> <span class="material-symbols-outlined" data-astro-cid-k6vw2roo>task_alt</span>
FINALIZAR Y PUBLICAR
</button> </div> </div> </div> </dialog> <script>
    const modal = document.getElementById('modal-finalizar');
    const inputCostoOp = document.getElementById('input-costo-op');
    const inputGanancia = document.getElementById('input-ganancia');
    let currentCotId = null;
    let subtotalProductos = 0;
    let negociacionesData = [];
    const API_URL = 'http://localhost:5145';

    async function loadNegociaciones() {
      try {
        const res = await fetch(\\\`\\\${API_URL}/api/cotizaciones-downlabs?pageSize=200\\\`);
        const json = await res.json();
        return json.data?.filter(c => c.estado === 'Negociando') || [];
      } catch (e) {
        console.error('Error:', e);
        return [];
      }
    }

    async function init() {
      negociacionesData = await loadNegociaciones();
      
      document.getElementById('contador-negociaciones').textContent = negociacionesData.length;
      document.getElementById('stat-negociando').textContent = negociacionesData.length;
      
      const totalValor = negociacionesData.reduce((acc, c) => {
        return acc + (c.productos?.reduce((sum, p) => sum + ((p.precio_mayorista || 0) * p.cantidad), 0) || 0);
      }, 0);
      document.getElementById('stat-valor').textContent = '$' + totalValor.toLocaleString('es-MX', { minimumFractionDigits: 0 });
      
      const totalProductos = negociacionesData.reduce((acc, c) => acc + (c.productos?.reduce((sum, p) => sum + p.cantidad, 0) || 0), 0);
      document.getElementById('stat-productos').textContent = totalProductos;
      
      renderTable();
    }

    function renderTable() {
      const tbody = document.getElementById('negociaciones-tbody');
      if (!tbody) return;
      
      if (negociacionesData.length === 0) {
        tbody.innerHTML = \\\`
          <tr>
            <td colspan="5" class="empty-state">
              <span class="material-symbols-outlined">handshake</span>
              <p>No hay negociaciones activas</p>
              <span>Cuando una solicitud raw sea procesada, aparecerá aquí.</span>
            </td>
          </tr>
        \\\`;
        return;
      }

      tbody.innerHTML = negociacionesData.map(c => {
        const productosCount = c.productos?.reduce((sum, p) => sum + p.cantidad, 0) || 0;
        return \\\`
          <tr>
            <td>
              <div class="cell-id">
                <span class="material-symbols-outlined">description</span>
                <span>\\\${c.id_cotizacion_downlabs?.slice(0, 13) || '—'}</span>
              </div>
            </td>
            <td><span class="cell-text">Pedido Raw: \\\${c.pedido_raw_id?.slice(0, 8) || '—'}</span></td>
            <td><span class="badge">\\\${productosCount} productos</span></td>
            <td><span class="cell-date">\\\${formatDate(c.updated_at)}</span></td>
            <td class="text-center">
              <button class="btn-action" data-id="\\\${c.id_cotizacion_downlabs}">
                <span class="material-symbols-outlined">edit_note</span>
                Finalizar
              </button>
            </td>
          </tr>
        \\\`;
      }).join('');

      document.querySelectorAll('.btn-action').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const id = btn.dataset.id;
          const data = negociacionesData.find(n => n.id_cotizacion_downlabs === id);
          if (!data) return;

          currentCotId = id;
          document.getElementById('modal-id-display').textContent = \\\`ID: \\\${id.slice(0, 20)}\\\`;
          
          subtotalProductos = data.productos?.reduce((acc, p) => acc + ((p.precio_mayorista || 0) * p.cantidad), 0) || 0;

          const listContainer = document.getElementById('modal-productos-list');
          listContainer.innerHTML = data.productos?.map(p => \\\`
            <div class="product-item">
              <span class="material-symbols-outlined">shopping_bag</span>
              <span>ID: \\\${(p.id_producto || '').slice(0,12)}</span>
              <span class="product-qty">x\\\${p.cantidad}</span>
            </div>
          \\\`).join('') || '<p class="no-products">Sin productos</p>';

          inputCostoOp.value = '';
          inputGanancia.value = '15';
          updateCalculations();
          modal.showModal();
        });
      });
    }

    function formatDate(dateStr) {
      if (!dateStr) return '—';
      return new Date(dateStr).toLocaleDateString('es-MX', { 
        day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' 
      });
    }

    function updateCalculations() {
      const costoOp = parseFloat(inputCostoOp.value || 0);
      const margenPerc = parseFloat(inputGanancia.value || 0) / 100;
      const subtotalConOp = subtotalProductos + costoOp;
      const precioFinal = subtotalConOp * (1 + margenPerc);
      const utilidad = precioFinal - subtotalConOp;

      document.getElementById('display-total').textContent = \\\`$\\\${precioFinal.toLocaleString('es-MX', { minimumFractionDigits: 2 })}\\\`;
      document.getElementById('display-subtotal').textContent = \\\`$\\\${subtotalProductos.toLocaleString('es-MX', { minimumFractionDigits: 2 })}\\\`;
      document.getElementById('display-op-val').textContent = \\\`$\\\${costoOp.toLocaleString('es-MX', { minimumFractionDigits: 2 })}\\\`;
      document.getElementById('display-profit').textContent = \\\`$\\\${utilidad.toLocaleString('es-MX', { minimumFractionDigits: 2 })}\\\`;
    }

    inputCostoOp.addEventListener('input', updateCalculations);
    inputGanancia.addEventListener('input', updateCalculations);
    document.getElementById('btn-close').addEventListener('click', () => modal.close());

    document.getElementById('btn-guardar').addEventListener('click', async () => {
      const btn = document.getElementById('btn-guardar');
      btn.disabled = true;
      btn.innerHTML = '<span class="material-symbols-outlined spin">sync</span> PUBLICANDO...';

      const payload = {
        costo_operacion: parseFloat(inputCostoOp.value || 0),
        ganancia_down: parseFloat(inputGanancia.value || 0),
        estado: 'listo'
      };

      try {
        const res = await fetch(\\\`\\\${API_URL}/api/cotizaciones-downlabs/\\\${currentCotId}/finalizar\\\`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (res.ok) {
          alert("¡Cotización finalizada con éxito!");
          window.location.reload();
        } else {
          alert("Error al guardar.");
          btn.disabled = false;
          btn.innerHTML = '<span class="material-symbols-outlined">task_alt</span> FINALIZAR Y PUBLICAR';
        }
      } catch (e) {
        alert("Error de conexión.");
        btn.disabled = false;
        btn.innerHTML = '<span class="material-symbols-outlined">task_alt</span> FINALIZAR Y PUBLICAR';
      }
    });

    init();
  </script> `])), maybeRenderHead()) })}`;
}, "/home/peterolvera/Documents/Proyectos/astro-webOperadores/src/pages/dashboard/Negociaciones/index.astro", void 0);
const $$file = "/home/peterolvera/Documents/Proyectos/astro-webOperadores/src/pages/dashboard/Negociaciones/index.astro";
const $$url = "/dashboard/Negociaciones";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

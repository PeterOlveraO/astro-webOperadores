import { c as createComponent } from './astro-component_BfP70hli.mjs';
import 'piccolore';
import { l as renderComponent, r as renderTemplate, h as addAttribute, m as maybeRenderHead } from './entrypoint_Di8hritT.mjs';
import { $ as $$BaseLayout } from './BaseLayout_ilACEse6.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const API_URL = "http://localhost:5145";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Login · Operadores", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", '<div class="min-h-screen bg-background-light flex items-center justify-center p-4 font-display" style="--color-primary: #002466" data-astro-cid-j7pv25f6> <div id="app-config"', ` style="display:none" data-astro-cid-j7pv25f6></div> <div class="w-full max-w-[440px] bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden border border-slate-200" data-astro-cid-j7pv25f6> <div class="p-8 pb-0" data-astro-cid-j7pv25f6> <div class="flex flex-col gap-2 mb-8" data-astro-cid-j7pv25f6> <div class="flex items-center gap-2 text-primary mb-2" data-astro-cid-j7pv25f6> <span class="material-symbols-outlined text-4xl" data-astro-cid-j7pv25f6>account_balance</span> <span class="text-2xl font-black tracking-tight" data-astro-cid-j7pv25f6>EMPRESA<br data-astro-cid-j7pv25f6></span> </div> <h3 class="text-slate-900 text-2xl font-bold leading-tight" data-astro-cid-j7pv25f6>Bienvenido de nuevo</h3> <p class="text-slate-500 text-sm" data-astro-cid-j7pv25f6>Ingresa tus credenciales para acceder a tu panel.</p> </div> <!-- Error --> <div id="error-msg" style="display:none;" class="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm flex items-center gap-2" data-astro-cid-j7pv25f6> <span class="material-symbols-outlined text-base" data-astro-cid-j7pv25f6>error</span> <span id="error-text" data-astro-cid-j7pv25f6></span> </div> <form id="login-form" class="flex flex-col gap-5" data-astro-cid-j7pv25f6> <!-- Correo electrónico --> <div class="flex flex-col gap-2" data-astro-cid-j7pv25f6> <label class="text-slate-700 text-sm font-semibold" data-astro-cid-j7pv25f6>Correo electrónico</label> <div class="relative group" data-astro-cid-j7pv25f6> <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary" data-astro-cid-j7pv25f6> <span class="material-symbols-outlined text-xl" data-astro-cid-j7pv25f6>mail</span> </div> <input id="login-email" type="email" required placeholder="nombre@empresa.com" class="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-lg bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm" data-astro-cid-j7pv25f6> </div> </div> <!-- Contraseña --> <div class="flex flex-col gap-2" data-astro-cid-j7pv25f6> <label class="text-slate-700 text-sm font-semibold" data-astro-cid-j7pv25f6>Contraseña</label> <div class="relative group" data-astro-cid-j7pv25f6> <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary" data-astro-cid-j7pv25f6> <span class="material-symbols-outlined text-xl" data-astro-cid-j7pv25f6>lock</span> </div> <input id="login-password" type="password" required placeholder="••••••••" class="block w-full pl-10 pr-10 py-3 border border-slate-200 rounded-lg bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm" data-astro-cid-j7pv25f6> <button type="button" onclick="const p=document.getElementById('login-password'); const i=this.querySelector('span'); if(p.type==='password'){p.type='text';i.textContent='visibility_off';}else{p.type='password';i.textContent='visibility';}" class="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600" data-astro-cid-j7pv25f6> <span class="material-symbols-outlined text-xl" data-astro-cid-j7pv25f6>visibility</span> </button> </div> </div> <!-- Recordarme + Olvidaste contraseña --> <div class="flex items-center justify-between py-1" data-astro-cid-j7pv25f6> <label class="flex items-center gap-2 cursor-pointer group" data-astro-cid-j7pv25f6> <input type="checkbox" class="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary focus:ring-offset-0 bg-white" data-astro-cid-j7pv25f6> <span class="text-sm text-slate-600 group-hover:text-slate-900" data-astro-cid-j7pv25f6>Recordarme</span> </label> <a href="#" class="text-sm font-semibold text-primary hover:underline" data-astro-cid-j7pv25f6>¿Olvidaste tu contraseña?</a> </div> <!-- Botón iniciar sesión --> <!-- Botón iniciar sesión --> <button type="submit" id="btn-login" class="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3.5 rounded-lg transition-colors shadow-lg shadow-primary/20 flex items-center justify-center gap-2 mt-2 disabled:opacity-70 disabled:cursor-not-allowed" data-astro-cid-j7pv25f6> <span id="btn-login-text" data-astro-cid-j7pv25f6>Iniciar Sesión</span> <span id="btn-login-icon" class="material-symbols-outlined text-lg" data-astro-cid-j7pv25f6>login</span> </button> </form> <div class="p-8 pt-6" data-astro-cid-j7pv25f6> <div class="relative flex py-2 items-center" data-astro-cid-j7pv25f6> <div class="flex-grow border-t border-slate-200" data-astro-cid-j7pv25f6></div> <!-- <span class="flex-shrink mx-4 text-slate-400 text-xs font-medium uppercase tracking-wider">O accede con</span>--> <div class="flex-grow border-t border-slate-200" data-astro-cid-j7pv25f6></div> </div> <!-- 
        <button class="w-full flex items-center justify-center gap-3 py-3 px-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-all mt-6 group">
          <GoogleIcon />
          <span class="text-sm font-semibold text-slate-700">Continuar con Google</span>
        </button>
      </div>

      <div class="mt-auto bg-slate-50 p-6 border-t border-slate-100 text-center">
        <p class="text-sm text-slate-600">
          ¿No tienes una cuenta? <a href="#" class="text-primary font-bold hover:underline">Regístrate</a>
        </p>
      </div>--> </div> </div> <script>
  const API_URL = document.getElementById('app-config').dataset.apiUrl;

  document.getElementById('login-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    var errorDiv = document.getElementById('error-msg');
    var errorText = document.getElementById('error-text');
    var btn = document.getElementById('btn-login');
    var btnText = document.getElementById('btn-login-text');
    var btnIcon = document.getElementById('btn-login-icon');

    var email = document.getElementById('login-email').value.trim();
    var password = document.getElementById('login-password').value;

    if (!email || !password) {
      errorDiv.style.display = 'flex';
      errorText.textContent = 'Ingresa tu correo y contraseña.';
      return;
    }

    errorDiv.style.display = 'none';
    btn.disabled = true;
    btnText.textContent = 'Ingresando...';
    btnIcon.textContent = 'sync'; // Ícono de carga
    btnIcon.classList.add('animate-spin');

    try {
      var res = await fetch(API_URL + '/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email, password: password }),
      });

      var data = await res.json();

      if (!res.ok || !data.success) {
        var msg = data.message || data.error || 'Error desconocido';
        if (msg.includes('Invalid') || msg.includes('incorrectos')) msg = 'Correo o contraseña incorrectos.';
        throw new Error(msg);
      }

      var userData = data.data;
      
      // Validar que el rol sea operador
      if (userData.rol !== 'operador') {
        throw new Error('Esta cuenta no tiene permisos de Operador.');
      }

      var perfil = userData.perfil;
      var operadorId = String(perfil?.id_operadores ?? '').trim();
      var isAdmin = userData.is_admin ?? perfil?.is_admin ?? false;
      var activo = perfil?.activo ?? true;
      
      if (!operadorId) {
         throw new Error('Error al obtener el ID del operador.');
      }

      // Verificar si el usuario está activo
      if (activo === false) {
         errorDiv.style.display = 'flex';
         errorText.textContent = 'Tu cuenta ha sido desactivada. Contacta al administrador.';
         btn.disabled = false;
         btnText.textContent = 'Iniciar Sesión';
         btnIcon.textContent = 'login';
         btnIcon.classList.remove('animate-spin');
         return;
      }

      // Guardar cookies
      document.cookie = \`id_operador=\${encodeURIComponent(operadorId)}; path=/; max-age=604800; SameSite=Lax\`;
      document.cookie = \`operador_id=\${encodeURIComponent(operadorId)}; path=/; max-age=604800; SameSite=Lax\`;
      document.cookie = \`operador_email=\${encodeURIComponent(userData.email)}; path=/; max-age=604800; SameSite=Lax\`;
      document.cookie = \`operador_rol=\${userData.rol}; path=/; max-age=604800; SameSite=Lax\`;
      document.cookie = \`operador_is_admin=\${isAdmin}; path=/; max-age=604800; SameSite=Lax\`;
      document.cookie = \`access_token=\${userData.access_token}; path=/; max-age=604800; SameSite=Lax\`;

      // Redirigir al dashboard
      window.location.href = '/dashboard';
    } catch (err) {
      console.error('Login error:', err);
      errorDiv.style.display = 'flex';
      errorText.textContent = err.message === 'Failed to fetch' ? 'Error de red. Verifica tu conexión al backend.' : err.message;
      
      btn.disabled = false;
      btnText.textContent = 'Iniciar Sesión';
      btnIcon.textContent = 'login';
      btnIcon.classList.remove('animate-spin');
    }
  });
</script> </div></div>`], [" ", '<div class="min-h-screen bg-background-light flex items-center justify-center p-4 font-display" style="--color-primary: #002466" data-astro-cid-j7pv25f6> <div id="app-config"', ` style="display:none" data-astro-cid-j7pv25f6></div> <div class="w-full max-w-[440px] bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden border border-slate-200" data-astro-cid-j7pv25f6> <div class="p-8 pb-0" data-astro-cid-j7pv25f6> <div class="flex flex-col gap-2 mb-8" data-astro-cid-j7pv25f6> <div class="flex items-center gap-2 text-primary mb-2" data-astro-cid-j7pv25f6> <span class="material-symbols-outlined text-4xl" data-astro-cid-j7pv25f6>account_balance</span> <span class="text-2xl font-black tracking-tight" data-astro-cid-j7pv25f6>EMPRESA<br data-astro-cid-j7pv25f6></span> </div> <h3 class="text-slate-900 text-2xl font-bold leading-tight" data-astro-cid-j7pv25f6>Bienvenido de nuevo</h3> <p class="text-slate-500 text-sm" data-astro-cid-j7pv25f6>Ingresa tus credenciales para acceder a tu panel.</p> </div> <!-- Error --> <div id="error-msg" style="display:none;" class="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm flex items-center gap-2" data-astro-cid-j7pv25f6> <span class="material-symbols-outlined text-base" data-astro-cid-j7pv25f6>error</span> <span id="error-text" data-astro-cid-j7pv25f6></span> </div> <form id="login-form" class="flex flex-col gap-5" data-astro-cid-j7pv25f6> <!-- Correo electrónico --> <div class="flex flex-col gap-2" data-astro-cid-j7pv25f6> <label class="text-slate-700 text-sm font-semibold" data-astro-cid-j7pv25f6>Correo electrónico</label> <div class="relative group" data-astro-cid-j7pv25f6> <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary" data-astro-cid-j7pv25f6> <span class="material-symbols-outlined text-xl" data-astro-cid-j7pv25f6>mail</span> </div> <input id="login-email" type="email" required placeholder="nombre@empresa.com" class="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-lg bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm" data-astro-cid-j7pv25f6> </div> </div> <!-- Contraseña --> <div class="flex flex-col gap-2" data-astro-cid-j7pv25f6> <label class="text-slate-700 text-sm font-semibold" data-astro-cid-j7pv25f6>Contraseña</label> <div class="relative group" data-astro-cid-j7pv25f6> <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary" data-astro-cid-j7pv25f6> <span class="material-symbols-outlined text-xl" data-astro-cid-j7pv25f6>lock</span> </div> <input id="login-password" type="password" required placeholder="••••••••" class="block w-full pl-10 pr-10 py-3 border border-slate-200 rounded-lg bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm" data-astro-cid-j7pv25f6> <button type="button" onclick="const p=document.getElementById('login-password'); const i=this.querySelector('span'); if(p.type==='password'){p.type='text';i.textContent='visibility_off';}else{p.type='password';i.textContent='visibility';}" class="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600" data-astro-cid-j7pv25f6> <span class="material-symbols-outlined text-xl" data-astro-cid-j7pv25f6>visibility</span> </button> </div> </div> <!-- Recordarme + Olvidaste contraseña --> <div class="flex items-center justify-between py-1" data-astro-cid-j7pv25f6> <label class="flex items-center gap-2 cursor-pointer group" data-astro-cid-j7pv25f6> <input type="checkbox" class="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary focus:ring-offset-0 bg-white" data-astro-cid-j7pv25f6> <span class="text-sm text-slate-600 group-hover:text-slate-900" data-astro-cid-j7pv25f6>Recordarme</span> </label> <a href="#" class="text-sm font-semibold text-primary hover:underline" data-astro-cid-j7pv25f6>¿Olvidaste tu contraseña?</a> </div> <!-- Botón iniciar sesión --> <!-- Botón iniciar sesión --> <button type="submit" id="btn-login" class="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3.5 rounded-lg transition-colors shadow-lg shadow-primary/20 flex items-center justify-center gap-2 mt-2 disabled:opacity-70 disabled:cursor-not-allowed" data-astro-cid-j7pv25f6> <span id="btn-login-text" data-astro-cid-j7pv25f6>Iniciar Sesión</span> <span id="btn-login-icon" class="material-symbols-outlined text-lg" data-astro-cid-j7pv25f6>login</span> </button> </form> <div class="p-8 pt-6" data-astro-cid-j7pv25f6> <div class="relative flex py-2 items-center" data-astro-cid-j7pv25f6> <div class="flex-grow border-t border-slate-200" data-astro-cid-j7pv25f6></div> <!-- <span class="flex-shrink mx-4 text-slate-400 text-xs font-medium uppercase tracking-wider">O accede con</span>--> <div class="flex-grow border-t border-slate-200" data-astro-cid-j7pv25f6></div> </div> <!-- 
        <button class="w-full flex items-center justify-center gap-3 py-3 px-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-all mt-6 group">
          <GoogleIcon />
          <span class="text-sm font-semibold text-slate-700">Continuar con Google</span>
        </button>
      </div>

      <div class="mt-auto bg-slate-50 p-6 border-t border-slate-100 text-center">
        <p class="text-sm text-slate-600">
          ¿No tienes una cuenta? <a href="#" class="text-primary font-bold hover:underline">Regístrate</a>
        </p>
      </div>--> </div> </div> <script>
  const API_URL = document.getElementById('app-config').dataset.apiUrl;

  document.getElementById('login-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    var errorDiv = document.getElementById('error-msg');
    var errorText = document.getElementById('error-text');
    var btn = document.getElementById('btn-login');
    var btnText = document.getElementById('btn-login-text');
    var btnIcon = document.getElementById('btn-login-icon');

    var email = document.getElementById('login-email').value.trim();
    var password = document.getElementById('login-password').value;

    if (!email || !password) {
      errorDiv.style.display = 'flex';
      errorText.textContent = 'Ingresa tu correo y contraseña.';
      return;
    }

    errorDiv.style.display = 'none';
    btn.disabled = true;
    btnText.textContent = 'Ingresando...';
    btnIcon.textContent = 'sync'; // Ícono de carga
    btnIcon.classList.add('animate-spin');

    try {
      var res = await fetch(API_URL + '/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email, password: password }),
      });

      var data = await res.json();

      if (!res.ok || !data.success) {
        var msg = data.message || data.error || 'Error desconocido';
        if (msg.includes('Invalid') || msg.includes('incorrectos')) msg = 'Correo o contraseña incorrectos.';
        throw new Error(msg);
      }

      var userData = data.data;
      
      // Validar que el rol sea operador
      if (userData.rol !== 'operador') {
        throw new Error('Esta cuenta no tiene permisos de Operador.');
      }

      var perfil = userData.perfil;
      var operadorId = String(perfil?.id_operadores ?? '').trim();
      var isAdmin = userData.is_admin ?? perfil?.is_admin ?? false;
      var activo = perfil?.activo ?? true;
      
      if (!operadorId) {
         throw new Error('Error al obtener el ID del operador.');
      }

      // Verificar si el usuario está activo
      if (activo === false) {
         errorDiv.style.display = 'flex';
         errorText.textContent = 'Tu cuenta ha sido desactivada. Contacta al administrador.';
         btn.disabled = false;
         btnText.textContent = 'Iniciar Sesión';
         btnIcon.textContent = 'login';
         btnIcon.classList.remove('animate-spin');
         return;
      }

      // Guardar cookies
      document.cookie = \\\`id_operador=\\\${encodeURIComponent(operadorId)}; path=/; max-age=604800; SameSite=Lax\\\`;
      document.cookie = \\\`operador_id=\\\${encodeURIComponent(operadorId)}; path=/; max-age=604800; SameSite=Lax\\\`;
      document.cookie = \\\`operador_email=\\\${encodeURIComponent(userData.email)}; path=/; max-age=604800; SameSite=Lax\\\`;
      document.cookie = \\\`operador_rol=\\\${userData.rol}; path=/; max-age=604800; SameSite=Lax\\\`;
      document.cookie = \\\`operador_is_admin=\\\${isAdmin}; path=/; max-age=604800; SameSite=Lax\\\`;
      document.cookie = \\\`access_token=\\\${userData.access_token}; path=/; max-age=604800; SameSite=Lax\\\`;

      // Redirigir al dashboard
      window.location.href = '/dashboard';
    } catch (err) {
      console.error('Login error:', err);
      errorDiv.style.display = 'flex';
      errorText.textContent = err.message === 'Failed to fetch' ? 'Error de red. Verifica tu conexión al backend.' : err.message;
      
      btn.disabled = false;
      btnText.textContent = 'Iniciar Sesión';
      btnIcon.textContent = 'login';
      btnIcon.classList.remove('animate-spin');
    }
  });
</script> </div></div>`])), maybeRenderHead(), addAttribute(API_URL, "data-api-url")) })}`;
}, "/home/peterolvera/Documents/Proyectos/astro-webOperadores/src/pages/index.astro", void 0);
const $$file = "/home/peterolvera/Documents/Proyectos/astro-webOperadores/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

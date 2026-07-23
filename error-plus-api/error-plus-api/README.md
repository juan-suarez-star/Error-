# Error+ API

API REST en Node.js + Express + MySQL para la app **Error+** (Reparaciones a Domicilio).
Reemplaza el `localStorage` que usa hoy `jiji.js` por una base de datos real.

## 1. Requisitos

- Node.js 18+
- MySQL 8+ con la base de datos ya importada (`error_plus_database.sql`)

## 2. Instalación

```bash
cd error-plus-api
npm install
cp .env.example .env
```

Edita `.env` con tus credenciales de MySQL y un `JWT_SECRET` propio (cualquier
cadena larga y aleatoria).

## 3. Ejecutar

```bash
npm start        # producción
npm run dev       # con auto-reload (node --watch)
```

La API queda disponible en `http://localhost:3000/api`.

## 4. Endpoints

### Catálogo
| Método | Ruta | Descripción |
|---|---|---|
| GET | `/api/appliances` | Lista de tipos de equipo (Lavadora, Nevera, ...) |
| GET | `/api/cities` | Lista de ciudades de cobertura |
| GET | `/api/technicians?appliance=Lavadora&city=Yopal` | Técnicos filtrados |
| GET | `/api/technicians/:id` | Detalle de un técnico |

### Autenticación
| Método | Ruta | Body | Descripción |
|---|---|---|---|
| POST | `/api/auth/register` | `{name, email, password, phone?, address?}` | Crea cuenta |
| POST | `/api/auth/login` | `{email, password}` | Inicia sesión |
| POST | `/api/auth/guest` | — | Sesión de invitado |
| GET | `/api/auth/me` | *(header Authorization)* | Usuario actual |

Todas devuelven `{ token, user }`. Guarda el `token` y mándalo en cada
petición protegida como header:
```
Authorization: Bearer <token>
```

### Perfil
| Método | Ruta | Descripción |
|---|---|---|
| PUT | `/api/users/me` | Editar nombre/celular/dirección |
| GET | `/api/users/me/stats` | Estadísticas para la pantalla de perfil |

### Reparaciones
| Método | Ruta | Descripción |
|---|---|---|
| POST | `/api/repairs` | Crear solicitud (equivale a `saveRepair`) |
| GET | `/api/repairs?status=all` | Historial del usuario logueado |
| GET | `/api/repairs/stats` | Contadores para la pantalla de historial |
| POST | `/api/repairs/:id/rating` | Calificar un servicio completado |

## 5. Conectar con el frontend actual

En `jiji.js`, las funciones que hoy usan `localStorage` (`Store.get/set`) y el
objeto `TECHNICIANS` hardcodeado deben cambiarse por `fetch` a estos
endpoints. Ejemplo mínimo:

```js
const API_URL = 'http://localhost:3000/api';

async function renderTechList(city) {
  const res = await fetch(`${API_URL}/technicians?appliance=${encodeURIComponent(state.selectedAppliance)}&city=${encodeURIComponent(city)}`);
  const techs = await res.json();
  // ... el resto igual, usando `techs` en vez de TECHNICIANS[...][city]
}

async function doLogin() {
  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-pass').value;
  const res = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  const data = await res.json();
  if (!res.ok) { showToast(data.error); return; }
  localStorage.setItem('ep_token', data.token);
  loginUser(data.user);
}
```

Si quieres, en un siguiente paso puedo reescribir `jiji.js` completo para que
use esta API en vez de `localStorage`.

## 6. Seguridad incluida

- Contraseñas con `bcryptjs` (nunca en texto plano)
- Autenticación con JWT
- `express-rate-limit` en login/registro para mitigar fuerza bruta
- CORS restringido a los orígenes definidos en `.env`

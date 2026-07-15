

const TECHNICIANS = {
  'Lavadora': {
    Yopal: [
      { id:'lv-y1', name:'Carlos Ruiz', specialty:'Técnico en Lavadoras LG / Samsung', badge:'cert', badgeLabel:'Certificado', badgeIcon:'verified', rating:'4.9', services:'1,240+', price:'$45.000 COP', available:true,  availLabel:'Disponible ahora',      avatar:'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=200&q=80', phone:'3001234567' },
      { id:'lv-y2', name:'Marta Gómez', specialty:'Especialista Línea Blanca Bosch', badge:'expert', badgeLabel:'Experta', badgeIcon:'workspace_premium', rating:'4.8', services:'850+',  price:'$40.000 COP', available:false, availLabel:'Agendar cita (Mañana)', avatar:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80', phone:'3009876543' },
      { id:'lv-y3', name:'Andrés Mendoza', specialty:'Lavadoras Industriales & Domésticas', badge:'emergency', badgeLabel:'Emergencias', badgeIcon:'bolt', rating:'4.7', services:'2,100+', price:'$55.000 COP', available:true, availLabel:'Disponible ahora', avatar:'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=200&q=80', phone:'3151234567' },
      { id:'lv-y4', name:'Laura Patiño', specialty:'Lavadoras Whirlpool & Haceb', badge:'cert', badgeLabel:'Certificada', badgeIcon:'verified', rating:'4.6', services:'620+', price:'$38.000 COP', available:true, availLabel:'Disponible ahora', avatar:'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80', phone:'3001112222' }
    ],
    Bogotá: [
      { id:'lv-b1', name:'Fernanda Ríos', specialty:'Lavadoras y Secadoras Premium', badge:'expert', badgeLabel:'Experta', badgeIcon:'workspace_premium', rating:'4.9', services:'3,400+', price:'$60.000 COP', available:true, availLabel:'Disponible ahora', avatar:'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80', phone:'3101112222' },
      { id:'lv-b2', name:'Pedro Acosta', specialty:'Técnico Samsung & Electrolux', badge:'cert', badgeLabel:'Certificado', badgeIcon:'verified', rating:'4.6', services:'980+', price:'$50.000 COP', available:false, availLabel:'Disponible en 3 horas', avatar:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80', phone:'3204445555' }
    ],
    Medellín:[{ id:'lv-m1', name:'Héctor Salazar', specialty:'Lavadoras Daewoo & LG', badge:'expert', badgeLabel:'Experto', badgeIcon:'workspace_premium', rating:'4.8', services:'2,200+', price:'$52.000 COP', available:true, availLabel:'Disponible ahora', avatar:'https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&q=80', phone:'3148889999' }],
    Cali:[{ id:'lv-c1', name:'Sofía Herrera', specialty:'Lavadoras & Secadoras Industrial', badge:'expert', badgeLabel:'Experta', badgeIcon:'workspace_premium', rating:'4.9', services:'2,900+', price:'$58.000 COP', available:true, availLabel:'Disponible ahora', avatar:'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80', phone:'3001230000' }],
    Villavicencio:[{ id:'lv-v1', name:'Nelson Gutiérrez', specialty:'Motores y Lavadoras Domésticas', badge:'emergency', badgeLabel:'Emergencias', badgeIcon:'bolt', rating:'4.5', services:'780+', price:'$44.000 COP', available:true, availLabel:'Disponible ahora', avatar:'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80', phone:'3204560000' }],
    Barranquilla:[{ id:'lv-ba1', name:'Patricia Castaño', specialty:'Lavadoras & Secadoras Costa', badge:'cert', badgeLabel:'Certificada', badgeIcon:'verified', rating:'4.7', services:'1,100+', price:'$48.000 COP', available:true, availLabel:'Disponible ahora', avatar:'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=200&q=80', phone:'3171234000' }]
  },
  'Nevera': {
    Yopal: [
      { id:'nv-y1', name:'Jorge Lara', specialty:'Refrigeración y Neveras Mabe / LG', badge:'cert', badgeLabel:'Certificado', badgeIcon:'verified', rating:'4.8', services:'1,050+', price:'$50.000 COP', available:true, availLabel:'Disponible ahora', avatar:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80', phone:'3202223333' },
      { id:'nv-y2', name:'Diana Mora', specialty:'Neveras No Frost & Side by Side', badge:'expert', badgeLabel:'Experta', badgeIcon:'workspace_premium', rating:'4.7', services:'730+', price:'$45.000 COP', available:false, availLabel:'Disponible mañana', avatar:'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&q=80', phone:'3006667777' },
      { id:'nv-y3', name:'Ramiro Peña', specialty:'Gas Refrigerante R134a / R600a', badge:'emergency', badgeLabel:'Emergencias', badgeIcon:'bolt', rating:'4.9', services:'1,800+', price:'$55.000 COP', available:true, availLabel:'Disponible ahora', avatar:'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=200&q=80', phone:'3155550000' }
    ],
    Bogotá:[{ id:'nv-b1', name:'Camila Vargas', specialty:'Neveras Samsung & Electrolux', badge:'cert', badgeLabel:'Certificada', badgeIcon:'verified', rating:'4.6', services:'900+', price:'$55.000 COP', available:true, availLabel:'Disponible ahora', avatar:'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80', phone:'3101110000' }],
    Medellín:[{ id:'nv-m1', name:'Carlos Ospina', specialty:'Refrigeración Comercial', badge:'expert', badgeLabel:'Experto', badgeIcon:'workspace_premium', rating:'4.7', services:'1,400+', price:'$58.000 COP', available:true, availLabel:'Disponible ahora', avatar:'https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&q=80', phone:'3140001111' }],
    Cali:[], Villavicencio:[], Barranquilla:[]
  },
  'Aire Acondicionado': {
    Yopal: [
      { id:'ac-y1', name:'Fabio Castillo', specialty:'Técnico en Aire Acondicionado Split y Ventana', badge:'cert', badgeLabel:'Certificado', badgeIcon:'verified', rating:'4.9', services:'1,600+', price:'$65.000 COP', available:true, availLabel:'Disponible ahora', avatar:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80', phone:'3174445555' },
      { id:'ac-y2', name:'Yenny Torres', specialty:'Carga de Gas Refrigerante & Limpieza', badge:'expert', badgeLabel:'Experta', badgeIcon:'workspace_premium', rating:'4.8', services:'940+', price:'$60.000 COP', available:false, availLabel:'Agendar cita', avatar:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80', phone:'3201112222' },
      { id:'ac-y3', name:'Mauricio Díaz', specialty:'Aires Minisplit & Centrales', badge:'emergency', badgeLabel:'Emergencias', badgeIcon:'bolt', rating:'4.7', services:'2,300+', price:'$70.000 COP', available:true, availLabel:'Disponible ahora', avatar:'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80', phone:'3154440000' }
    ],
    Bogotá:[{ id:'ac-b1', name:'Ricardo Torres', specialty:'Aires Carrier & Daikin Bogotá', badge:'cert', badgeLabel:'Certificado', badgeIcon:'verified', rating:'4.7', services:'1,800+', price:'$70.000 COP', available:true, availLabel:'Disponible ahora', avatar:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80', phone:'3204445555' }],
    Medellín:[], Cali:[], Villavicencio:[], Barranquilla:[]
  },
  'Televisor': {
    Yopal:[
      { id:'tv-y1', name:'Camilo Reyes', specialty:'Técnico en Televisores LED, QLED y OLED', badge:'cert', badgeLabel:'Certificado', badgeIcon:'verified', rating:'4.7', services:'890+', price:'$40.000 COP', available:true, availLabel:'Disponible ahora', avatar:'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=200&q=80', phone:'3003334444' },
      { id:'tv-y2', name:'Stefany Pineda', specialty:'Pantallas Samsung, LG y Sony', badge:'expert', badgeLabel:'Experta', badgeIcon:'workspace_premium', rating:'4.8', services:'1,100+', price:'$45.000 COP', available:false, availLabel:'Disponible mañana', avatar:'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&q=80', phone:'3107776666' },
      { id:'tv-y3', name:'Brayhan Molina', specialty:'Boards, Fuentes y Backlights', badge:'emergency', badgeLabel:'Emergencias', badgeIcon:'bolt', rating:'4.6', services:'670+', price:'$38.000 COP', available:true, availLabel:'Disponible ahora', avatar:'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=200&q=80', phone:'3152228888' }
    ],
    Bogotá:[{ id:'tv-b1', name:'Camila Vargas', specialty:'Televisores y Electrónica Bogotá', badge:'cert', badgeLabel:'Certificada', badgeIcon:'verified', rating:'4.6', services:'900+', price:'$45.000 COP', available:false, availLabel:'Agendar cita', avatar:'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80', phone:'3006667777' }],
    Medellín:[], Cali:[], Villavicencio:[], Barranquilla:[]
  },
  'Computador': {
    Yopal:[
      { id:'pc-y1', name:'Sebastián Cruz', specialty:'Técnico en PC, Laptops y Redes', badge:'cert', badgeLabel:'Certificado', badgeIcon:'verified', rating:'4.8', services:'1,300+', price:'$35.000 COP', available:true, availLabel:'Disponible ahora', avatar:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80', phone:'3001119999' },
      { id:'pc-y2', name:'Natalia Ríos', specialty:'Formateo, Virus & Recuperación de Datos', badge:'expert', badgeLabel:'Experta', badgeIcon:'workspace_premium', rating:'4.9', services:'2,100+', price:'$40.000 COP', available:true, availLabel:'Disponible ahora', avatar:'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80', phone:'3108885555' },
      { id:'pc-y3', name:'David Barrera', specialty:'Laptops Lenovo, HP y Dell', badge:'cert', badgeLabel:'Certificado', badgeIcon:'verified', rating:'4.6', services:'750+', price:'$30.000 COP', available:false, availLabel:'Disponible en 2 horas', avatar:'https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&q=80', phone:'3154443333' }
    ],
    Bogotá:[], Medellín:[], Cali:[], Villavicencio:[], Barranquilla:[]
  },
  'Moto': {
    Yopal:[
      { id:'mt-y1', name:'Jhon Quiñones', specialty:'Mecánico de Motos 2T y 4T — Honda, Yamaha, AKT', badge:'cert', badgeLabel:'Certificado', badgeIcon:'verified', rating:'4.9', services:'2,450+', price:'$40.000 COP', available:true, availLabel:'Disponible ahora', avatar:'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80', phone:'3206661111' },
      { id:'mt-y2', name:'Édison Cano', specialty:'Electricidad de Motos & Inyección Electrónica', badge:'expert', badgeLabel:'Experto', badgeIcon:'workspace_premium', rating:'4.8', services:'1,700+', price:'$45.000 COP', available:false, availLabel:'Agendar cita (Tarde)', avatar:'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=200&q=80', phone:'3104440000' },
      { id:'mt-y3', name:'Andrés Palacios', specialty:'Motos de Alto Cilindraje & Enduro', badge:'emergency', badgeLabel:'Emergencias', badgeIcon:'bolt', rating:'4.7', services:'1,100+', price:'$50.000 COP', available:true, availLabel:'Disponible ahora', avatar:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80', phone:'3172228888' },
      { id:'mt-y4', name:'Leidy Suárez', specialty:'Frenos, Suspensión y Transmisión de Motos', badge:'cert', badgeLabel:'Certificada', badgeIcon:'verified', rating:'4.6', services:'830+', price:'$38.000 COP', available:true, availLabel:'Disponible ahora', avatar:'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=200&q=80', phone:'3003335555' }
    ],
    Bogotá:[{ id:'mt-b1', name:'Felipe Arango', specialty:'Mecánico Motos Bajaj & Yamaha', badge:'cert', badgeLabel:'Certificado', badgeIcon:'verified', rating:'4.7', services:'1,900+', price:'$50.000 COP', available:true, availLabel:'Disponible ahora', avatar:'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=200&q=80', phone:'3101234567' }],
    Medellín:[], Cali:[], Villavicencio:[{ id:'mt-v1', name:'César Vanegas', specialty:'Motos de trabajo & Domicilios', badge:'cert', badgeLabel:'Certificado', badgeIcon:'verified', rating:'4.5', services:'620+', price:'$42.000 COP', available:true, availLabel:'Disponible ahora', avatar:'https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&q=80', phone:'3154441111' }], Barranquilla:[]
  },
  'Carro': {
    Yopal:[
      { id:'ca-y1', name:'Ricardo Infante', specialty:'Mecánico Automotriz — Chevrolet, Renault, Kia', badge:'cert', badgeLabel:'Certificado', badgeIcon:'verified', rating:'4.9', services:'3,100+', price:'$70.000 COP', available:true, availLabel:'Disponible ahora', avatar:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80', phone:'3206667777' },
      { id:'ca-y2', name:'Oswaldo Nieto', specialty:'Electricidad Automotriz & Diagnóstico OBD', badge:'expert', badgeLabel:'Experto', badgeIcon:'workspace_premium', rating:'4.8', services:'2,200+', price:'$65.000 COP', available:false, availLabel:'Disponible en 1 hora', avatar:'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80', phone:'3154442222' },
      { id:'ca-y3', name:'Luisa Bernal', specialty:'Frenos, Suspensión & Transmisión', badge:'emergency', badgeLabel:'Emergencias', badgeIcon:'bolt', rating:'4.7', services:'1,500+', price:'$75.000 COP', available:true, availLabel:'Disponible ahora', avatar:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80', phone:'3202229999' }
    ],
    Bogotá:[{ id:'ca-b1', name:'Hernán Ríos', specialty:'Mecánica Automotriz & Multimarcas', badge:'expert', badgeLabel:'Experto', badgeIcon:'workspace_premium', rating:'4.8', services:'4,200+', price:'$80.000 COP', available:true, availLabel:'Disponible ahora', avatar:'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=200&q=80', phone:'3101230000' }],
    Medellín:[], Cali:[], Villavicencio:[], Barranquilla:[]
  },
  'Horno / Estufa': {
    Yopal:[
      { id:'ho-y1', name:'Claudia Vargas', specialty:'Hornos y Estufas a Gas & Eléctricas', badge:'cert', badgeLabel:'Certificada', badgeIcon:'verified', rating:'4.8', services:'980+', price:'$45.000 COP', available:true, availLabel:'Disponible ahora', avatar:'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80', phone:'3003331111' },
      { id:'ho-y2', name:'Mario Serrano', specialty:'Quemadores, Válvulas y Termostatos', badge:'expert', badgeLabel:'Experto', badgeIcon:'workspace_premium', rating:'4.7', services:'1,200+', price:'$50.000 COP', available:false, availLabel:'Disponible mañana AM', avatar:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80', phone:'3157776666' },
      { id:'ho-y3', name:'Pablo Ortega', specialty:'Gas Natural & Propano — Seguridad', badge:'emergency', badgeLabel:'Emergencias', badgeIcon:'bolt', rating:'4.9', services:'2,000+', price:'$55.000 COP', available:true, availLabel:'Disponible ahora', avatar:'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=200&q=80', phone:'3104448888' }
    ],
    Bogotá:[], Medellín:[], Cali:[], Villavicencio:[], Barranquilla:[]
  },
  'Calentador': {
    Yopal:[
      { id:'cl-y1', name:'Gustavo Forero', specialty:'Calentadores de Paso & Tanque — Gas / Eléctrico', badge:'cert', badgeLabel:'Certificado', badgeIcon:'verified', rating:'4.8', services:'1,450+', price:'$55.000 COP', available:true, availLabel:'Disponible ahora', avatar:'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80', phone:'3202225555' },
      { id:'cl-y2', name:'Adriana Cuevas', specialty:'Calentadores Haceb & Challenger', badge:'expert', badgeLabel:'Experta', badgeIcon:'workspace_premium', rating:'4.7', services:'870+', price:'$50.000 COP', available:false, availLabel:'Agendar cita', avatar:'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80', phone:'3001118888' },
      { id:'cl-y3', name:'Manuel Roa', specialty:'Instalación y Gas Natural de Calentadores', badge:'emergency', badgeLabel:'Emergencias', badgeIcon:'bolt', rating:'4.9', services:'2,100+', price:'$60.000 COP', available:true, availLabel:'Disponible ahora', avatar:'https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&q=80', phone:'3150004444' }
    ],
    Bogotá:[], Medellín:[], Cali:[], Villavicencio:[], Barranquilla:[]
  },
  'Licuadora / Otros': {
    Yopal:[
      { id:'li-y1', name:'Óscar Blanco', specialty:'Pequeños Electrodomésticos — Licuadoras, Batidoras, Planchas', badge:'cert', badgeLabel:'Certificado', badgeIcon:'verified', rating:'4.6', services:'540+', price:'$25.000 COP', available:true, availLabel:'Disponible ahora', avatar:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80', phone:'3009990000' },
      { id:'li-y2', name:'Milena Ospina', specialty:'Aspiradoras, Freidoras de Aire & Microondas', badge:'expert', badgeLabel:'Experta', badgeIcon:'workspace_premium', rating:'4.7', services:'720+', price:'$30.000 COP', available:false, availLabel:'Disponible esta tarde', avatar:'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=200&q=80', phone:'3171115555' }
    ],
    Bogotá:[], Medellín:[], Cali:[], Villavicencio:[], Barranquilla:[]
  }
};

const Store = {
  get(key) { try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : null; } catch { return null; } },
  set(key, val) { try { localStorage.setItem(key, JSON.stringify(val)); } catch {} },
  remove(key) { try { localStorage.removeItem(key); } catch {} }
};



let state = {
  currentScreen: 1,
  selectedAppliance: null,
  selectedIcon: null,
  selectedCity: 'Yopal',
  selectedTech: null,
  serviceCode: '',
  currentUser: Store.get('ep_user') || null,
  repairs: Store.get('ep_repairs') || [],
  historyFilter: 'all',
  ratingRepairId: null,
  ratingVal: 0
};


function seedDemoRepairs() {
  if (state.repairs.length === 0) {
    state.repairs = [
      { id:'REP-001', appliance:'Nevera', icon:'kitchen', techName:'Jorge Lara', techAvatar:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80', techSpecialty:'Refrigeración y Neveras Mabe / LG', price:'$50.000 COP', status:'completed', code:'NV-GEN-ERR1234', date:'2025-05-28', address:'Calle 12 #23-45, Centro', city:'Yopal', rated:true, rating:5 },
      { id:'REP-002', appliance:'Lavadora', icon:'local_laundry_service', techName:'Carlos Ruiz', techAvatar:'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=200&q=80', techSpecialty:'Técnico en Lavadoras LG / Samsung', price:'$45.000 COP', status:'active', code:'LV-GEN-ERR5678', date:'2025-06-17', address:'Cra 7 #15-30, Villa del Río', city:'Yopal', rated:false, rating:0 },
      { id:'REP-003', appliance:'Computador', icon:'laptop_mac', techName:'Natalia Ríos', techAvatar:'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80', techSpecialty:'Formateo, Virus & Recuperación de Datos', price:'$40.000 COP', status:'pending', code:'PC-GEN-ERR9012', date:'2025-06-18', address:'Av 3 #8-20, Bello Horizonte', city:'Yopal', rated:false, rating:0 }
    ];
    Store.set('ep_repairs', state.repairs);
  }
}


function goTo(screenNum) {
  if (screenNum === 2 && !state.selectedAppliance) { showToast('Primero selecciona un aparato'); return; }

  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + screenNum).classList.add('active');
  state.currentScreen = screenNum;
  window.scrollTo({ top: 0, behavior: 'smooth' });

  ['nav-home','nav-repairs','nav-history','nav-profile'].forEach(id => document.getElementById(id).classList.remove('active'));
  if (screenNum === 1) document.getElementById('nav-home').classList.add('active');
  if (screenNum === 2) document.getElementById('nav-repairs').classList.add('active');
  if (screenNum === 5) { document.getElementById('nav-history').classList.add('active'); renderHistory(); }
  if (screenNum === 6) { document.getElementById('nav-profile').classList.add('active'); renderProfileScreen(); }
  if (screenNum === 2) renderTechList(state.selectedCity);
}


function selectAppliance(el) {
  document.querySelectorAll('.appliance-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  state.selectedAppliance = el.dataset.appliance;
  state.selectedIcon = el.dataset.icon;
  const prefix = state.selectedAppliance.substring(0,2).toUpperCase();
  state.serviceCode = prefix + '-GEN-ERR' + Math.floor(Math.random()*9000+1000);
  setTimeout(() => goTo(2), 380);
}


function filterCity(el) {
  document.querySelectorAll('.city-chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  state.selectedCity = el.dataset.city;
  renderTechList(state.selectedCity);
}

function renderTechList(city) {
  const titleEl = document.getElementById('appliance-name-title');
  if (titleEl) titleEl.textContent = state.selectedAppliance || 'Electrodomésticos';
  const list = document.getElementById('tech-list');
  const byAppliance = TECHNICIANS[state.selectedAppliance] || {};
  const techs = byAppliance[city] || [];
  if (techs.length === 0) {
    list.innerHTML = `<div style="text-align:center; padding:var(--sp-xl); color:var(--on-surface-variant);"><span class="material-symbols-outlined" style="font-size:48px; margin-bottom:var(--sp-sm); display:block; color:var(--outline-variant);">person_off</span><p style="font-size:16px; font-weight:600;">No hay técnicos disponibles en ${city}.</p><p style="font-size:14px; margin-top:8px;">Prueba con otra ciudad o intenta más tarde.</p></div>`;
  } else {
    list.innerHTML = techs.map(t => buildTechCard(t)).join('');
  }
  const codeEl = document.getElementById('code-footer-text');
  if (codeEl) codeEl.textContent = `CODE: TECH_LIST_v2.4 | Técnicos activos en ${city}: ${techs.length}`;
}

function buildTechCard(t) {
  const dotClass = t.available ? 'dot-green' : 'dot-gray';
  const availColor = t.available ? 'var(--on-primary-fixed-var)' : 'var(--outline)';
  let badgeClass = 'badge-cert';
  if (t.badge === 'emergency') badgeClass = 'badge-emergency';
  if (t.badge === 'expert') badgeClass = 'badge-expert';
  return `
    <div class="tech-card">
      <div class="tech-card__avatar"><img src="${t.avatar}" alt="${t.name}" loading="lazy" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=c1ecd4&color=012d1d&size=88'" /></div>
      <div class="tech-card__info">
        <div class="tech-card__top">
          <div>
            <div class="tech-card__name">${t.name}</div>
            <div class="tech-card__badges">
              <span class="badge badge-specialty">${t.specialty}</span>
              <span class="badge ${badgeClass}"><span class="material-symbols-outlined" style="font-size:12px;">${t.badgeIcon}</span> ${t.badgeLabel}</span>
            </div>
          </div>
          <div class="tech-card__rating"><span class="material-symbols-outlined">star</span><span>${t.rating}</span></div>
        </div>
        <div class="tech-card__stats">
          <div><div class="tech-card__stat-label">Servicios</div><div class="tech-card__stat-val">${t.services}</div></div>
          <div><div class="tech-card__stat-label">Precio visita</div><div class="tech-card__stat-val">${t.price}</div></div>
          <div class="availability"><div class="dot ${dotClass}"></div><span style="font-size:12px; font-weight:700; color:${availColor};">${t.availLabel}</span></div>
        </div>
      </div>
      <div class="tech-card__action"><button class="btn btn-primary" onclick="chooseTech('${t.id}','${state.selectedCity}')">Elegir este técnico</button></div>
    </div>`;
}

function chooseTech(techId, city) {
  const tech = (TECHNICIANS[state.selectedAppliance]?.[city] || []).find(t => t.id === techId);
  if (!tech) return;
  state.selectedTech = tech;
  populateConfirmScreen(tech);
  // Pre-fill form from logged-in user
  if (state.currentUser) {
    document.getElementById('inp-name').value    = state.currentUser.name || '';
    document.getElementById('inp-phone').value   = state.currentUser.phone || '';
    document.getElementById('inp-address').value = state.currentUser.address || '';
  }
  goTo(3);
}


function populateConfirmScreen(tech) {
  document.getElementById('confirm-avatar').src   = tech.avatar;
  document.getElementById('confirm-name').textContent     = tech.name;
  document.getElementById('confirm-specialty').textContent = tech.specialty;
  document.getElementById('confirm-rating').textContent   = tech.rating;
  document.getElementById('confirm-price').textContent    = tech.price;
  document.getElementById('confirm-appliance').textContent = state.selectedAppliance;
  document.getElementById('confirm-icon').textContent     = state.selectedIcon;
  const dot = document.getElementById('confirm-dot'), avail = document.getElementById('confirm-avail');
  if (tech.available) { dot.className = 'dot dot-green'; avail.textContent = 'Disponible ahora'; avail.style.color = 'var(--on-primary-fixed-var)'; }
  else { dot.className = 'dot dot-gray'; avail.textContent = tech.availLabel; avail.style.color = 'var(--outline)'; }
  document.getElementById('service-code').textContent = `Código de servicio: ${state.serviceCode}. Tus datos están protegidos por Error+.`;
}

function validateField(inputId, validFn, errorMsg) {
  const input = document.getElementById(inputId);
  const errEl = input.parentElement.querySelector('.error-msg') || input.nextElementSibling;
  const valid = validFn(input.value.trim());
  input.classList.toggle('error', !valid);
  if (errEl && errEl.classList.contains('error-msg')) errEl.style.display = valid ? 'none' : 'block';
  return valid;
}

function validateForm() {
  const v1 = validateField('inp-name',    v => v.length >= 3, 'Ingresa tu nombre completo.');
  const v2 = validateField('inp-phone',   v => /^[0-9]{10}$/.test(v.replace(/\s/g,'')), 'Ingresa un número válido de 10 dígitos.');
  const v3 = validateField('inp-address', v => v.length >= 5, 'Ingresa tu dirección.');
  return v1 && v2 && v3;
}

function getFormData() {
  return { name: document.getElementById('inp-name').value.trim(), phone: document.getElementById('inp-phone').value.trim().replace(/\s/g,''), address: document.getElementById('inp-address').value.trim() };
}

function contactWhatsApp() {
  if (!validateForm()) { showToast('Por favor completa todos los campos'); return; }
  const fd = getFormData(); const tech = state.selectedTech; if (!tech) return;
  const msg = encodeURIComponent(`¡Hola ${tech.name}! Me llamo ${fd.name}. Necesito asistencia con mi ${state.selectedAppliance} en: ${fd.address}. Mi celular: ${fd.phone}. Código: ${state.serviceCode}`);
  window.open(`https://wa.me/57${tech.phone}?text=${msg}`, '_blank');
  saveRepair(fd); showSuccessScreen();
}

function requestCall() {
  if (!validateForm()) { showToast('Por favor completa todos los campos'); return; }
  const fd = getFormData();
  showToast(`📞 Solicitando llamada de ${state.selectedTech?.name || 'técnico'}…`);
  saveRepair(fd);
  setTimeout(() => showSuccessScreen(), 1200);
}

function saveRepair(fd) {
  const tech = state.selectedTech;
  const repair = {
    id: 'REP-' + Date.now(),
    appliance: state.selectedAppliance,
    icon: state.selectedIcon,
    techName: tech.name,
    techAvatar: tech.avatar,
    techSpecialty: tech.specialty,
    price: tech.price,
    status: 'pending',
    code: state.serviceCode,
    date: new Date().toISOString().split('T')[0],
    address: fd.address,
    city: state.selectedCity,
    rated: false,
    rating: 0
  };
  state.repairs.unshift(repair);
  Store.set('ep_repairs', state.repairs);
  renderNotifBadge();
}

function showSuccessScreen() {
  document.getElementById('success-code').textContent = `Código: ${state.serviceCode}`;
  goTo(4);
}

/* ══════════════════════════════════════════
   SCREEN 5 – HISTORIAL
══════════════════════════════════════════ */
function filterHistory(el) {
  document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  state.historyFilter = el.dataset.filter;
  renderRepairList();
}

function renderHistory() {
  renderHistoryStats();
  renderRepairList();
}

function renderHistoryStats() {
  const repairs = state.repairs;
  const total     = repairs.length;
  const completed = repairs.filter(r => r.status === 'completed').length;
  const active    = repairs.filter(r => r.status === 'active').length;
  const pending   = repairs.filter(r => r.status === 'pending').length;
  document.getElementById('history-stats').innerHTML = `
    <div class="stat-box"><div class="stat-box__val">${total}</div><div class="stat-box__label">Total</div></div>
    <div class="stat-box"><div class="stat-box__val">${active}</div><div class="stat-box__label">En curso</div></div>
    <div class="stat-box"><div class="stat-box__val">${completed}</div><div class="stat-box__label">Completados</div></div>
    <div class="stat-box"><div class="stat-box__val">${pending}</div><div class="stat-box__label">Pendientes</div></div>`;
}

const STATUS_LABELS = { pending:'Pendiente', active:'En curso', completed:'Completado', cancelled:'Cancelado' };
const STATUS_CLASSES = { pending:'status-pending', active:'status-active', completed:'status-completed', cancelled:'status-cancelled' };

function renderRepairList() {
  const filter = state.historyFilter;
  const repairs = filter === 'all' ? state.repairs : state.repairs.filter(r => r.status === filter);
  const list = document.getElementById('repair-list');
  if (repairs.length === 0) {
    const msg = filter === 'all' ? 'Aún no tienes solicitudes de reparación.' : `No tienes reparaciones con estado "${STATUS_LABELS[filter]}".`;
    list.innerHTML = `<div class="empty-state"><span class="material-symbols-outlined">build_circle</span><h3>Sin resultados</h3><p>${msg}</p><br><button class="btn btn-primary" onclick="goTo(1)" style="margin-top:var(--sp-sm);"><span class="material-symbols-outlined">add</span>Solicitar reparación</button></div>`;
    return;
  }
  list.innerHTML = repairs.map(r => buildRepairCard(r)).join('');
}

function buildRepairCard(r) {
  const statusLabel = STATUS_LABELS[r.status] || r.status;
  const statusClass = STATUS_CLASSES[r.status] || 'status-pending';
  const dateFormatted = new Date(r.date + 'T12:00:00').toLocaleDateString('es-CO', { day:'numeric', month:'short', year:'numeric' });
  const rateBtn = (r.status === 'completed' && !r.rated)
    ? `<button class="rate-btn" onclick="openRateModal('${r.id}')"><span class="material-symbols-outlined" style="font-size:16px;">star</span>Calificar</button>`
    : r.rated ? `<span style="font-size:12px; color:var(--outline); display:flex; align-items:center; gap:4px;"><span class="material-symbols-outlined" style="font-size:15px; color:var(--secondary-container); font-variation-settings:'FILL' 1,'wght' 400,'GRAD' 0,'opsz' 24;">star</span>${r.rating}.0 calificado</span>` : '';
  return `
    <div class="repair-card">
      <div class="repair-card__header">
        <div>
          <div class="repair-card__title"><span class="material-symbols-outlined" style="font-size:18px; color:var(--primary); margin-right:6px;">${r.icon}</span>${r.appliance}</div>
          <div class="repair-card__code">${r.code}</div>
        </div>
        <span class="status-badge ${statusClass}">${statusLabel}</span>
      </div>
      <div class="repair-card__body">
        <div><div class="repair-meta__label">Fecha</div><div class="repair-meta__val">${dateFormatted}</div></div>
        <div><div class="repair-meta__label">Precio visita</div><div class="repair-meta__val">${r.price}</div></div>
        <div><div class="repair-meta__label">Ciudad</div><div class="repair-meta__val">${r.city}</div></div>
        <div><div class="repair-meta__label">Dirección</div><div class="repair-meta__val" style="font-size:12px; font-weight:500; color:var(--on-surface-variant);">${r.address}</div></div>
      </div>
      <div class="repair-card__footer">
        <div class="tech-mini">
          <img src="${r.techAvatar}" alt="${r.techName}" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(r.techName)}&background=c1ecd4&color=012d1d&size=32'" />
          <div><div class="tech-mini__name">${r.techName}</div><div class="tech-mini__role">${r.techSpecialty}</div></div>
        </div>
        <div>${rateBtn}</div>
      </div>
    </div>`;
}
function openRateModal(repairId) {
  state.ratingRepairId = repairId;
  state.ratingVal = 0;
  document.querySelectorAll('.star-btn').forEach(s => s.classList.remove('filled'));
  document.getElementById('rate-comment').value = '';
  const repair = state.repairs.find(r => r.id === repairId);
  if (repair) document.getElementById('rate-modal-desc').textContent = `¿Cómo fue tu experiencia con ${repair.techName}?`;
  document.getElementById('rate-modal').classList.add('open');
}

function closeRateModal() { document.getElementById('rate-modal').classList.remove('open'); }

function setRating(val) {
  state.ratingVal = val;
  document.querySelectorAll('.star-btn').forEach((s, i) => s.classList.toggle('filled', i < val));
}

function submitRating() {
  if (state.ratingVal === 0) { showToast('Selecciona una calificación'); return; }
  const repair = state.repairs.find(r => r.id === state.ratingRepairId);
  if (repair) { repair.rated = true; repair.rating = state.ratingVal; Store.set('ep_repairs', state.repairs); }
  closeRateModal();
  showToast('¡Gracias por tu calificación! ⭐');
  renderRepairList();
  renderHistoryStats();
  renderNotifBadge();
}


function renderProfileScreen() {
  if (state.currentUser) {
    renderProfileLoggedIn();
  } else {
    renderAuthUI();
  }
}

function renderAuthUI() {
  document.getElementById('profile-view').style.display = 'none';
  document.getElementById('auth-view').style.display = 'block';
  document.getElementById('auth-view').innerHTML = `
    <div class="auth-container">
      <div class="page-header" style="text-align:center; margin-bottom:var(--sp-md);">
        <h1 class="headline-lg" style="margin-bottom:4px;">Bienvenido a Error+</h1>
        <p class="body-sm" style="color:var(--on-surface-variant);">Inicia sesión o regístrate para guardar tus reparaciones.</p>
      </div>

      <div class="auth-tabs">
        <div class="auth-tab active" id="tab-login" onclick="switchAuthTab('login')">Iniciar sesión</div>
        <div class="auth-tab"        id="tab-register" onclick="switchAuthTab('register')">Crear cuenta</div>
      </div>

      <!-- LOGIN -->
      <div class="auth-panel active" id="panel-login">
        <div class="auth-card">
          <h2>Hola de nuevo 👋</h2>
          <p class="subtitle">Accede a tu historial de reparaciones.</p>
          <div class="auth-form-group"><label for="login-email">Correo electrónico</label>
            <div class="input-icon-wrap"><span class="material-symbols-outlined">mail</span><input class="form-input" id="login-email" type="email" placeholder="tucorreo@email.com" /></div>
          </div>
          <div class="auth-form-group"><label for="login-pass">Contraseña</label>
            <div class="password-wrap"><input class="form-input" id="login-pass" type="password" placeholder="Tu contraseña" /><span class="material-symbols-outlined password-eye" onclick="togglePass('login-pass',this)">visibility</span></div>
          </div>
          <button class="btn btn-primary" style="width:100%; margin-top:var(--sp-sm);" onclick="doLogin()"><span class="material-symbols-outlined">login</span>Ingresar</button>
          <div class="divider-text">o</div>
          <button class="social-btn" onclick="doGuestLogin()"><span class="material-symbols-outlined">person_outline</span>Continuar como invitado</button>
          <p class="terms-text" style="margin-top:var(--sp-md);"><a href="#" onclick="switchAuthTab('register'); return false;">¿No tienes cuenta? Regístrate gratis</a></p>
        </div>
      </div>

      <!-- REGISTER -->
      <div class="auth-panel" id="panel-register">
        <div class="auth-card">
          <h2>Crear cuenta gratis</h2>
          <p class="subtitle">Registra tu información para comenzar.</p>
          <div class="form-row" style="margin-bottom:0;">
            <div class="auth-form-group"><label for="reg-name">Nombre completo</label><input class="form-input" id="reg-name" type="text" placeholder="Juan Pérez" /></div>
            <div class="auth-form-group"><label for="reg-phone">Celular</label><input class="form-input" id="reg-phone" type="tel" placeholder="300 123 4567" maxlength="15" /></div>
          </div>
          <div class="auth-form-group" style="margin-top:var(--sp-md);"><label for="reg-email">Correo electrónico</label>
            <div class="input-icon-wrap"><span class="material-symbols-outlined">mail</span><input class="form-input" id="reg-email" type="email" placeholder="tucorreo@email.com" /></div>
          </div>
          <div class="auth-form-group"><label for="reg-address">Dirección principal</label>
            <div class="input-icon-wrap"><span class="material-symbols-outlined">location_on</span><input class="form-input" id="reg-address" type="text" placeholder="Calle 123 #45-67, Barrio..." /></div>
          </div>
          <div class="auth-form-group"><label for="reg-pass">Contraseña</label>
            <div class="password-wrap"><input class="form-input" id="reg-pass" type="password" placeholder="Mínimo 6 caracteres" /><span class="material-symbols-outlined password-eye" onclick="togglePass('reg-pass',this)">visibility</span></div>
          </div>
          <button class="btn btn-primary" style="width:100%; margin-top:var(--sp-sm);" onclick="doRegister()"><span class="material-symbols-outlined">person_add</span>Crear cuenta</button>
          <p class="terms-text">Al registrarte aceptas nuestros <a href="#">Términos de uso</a> y <a href="#">Política de privacidad</a>.</p>
        </div>
      </div>
    </div>`;

  // Re-attach phone format
  const regPhone = document.getElementById('reg-phone');
  if (regPhone) regPhone.addEventListener('input', function() {
    let v = this.value.replace(/\D/g,'').substring(0,10);
    if (v.length > 6) v = v.substring(0,3)+' '+v.substring(3,6)+' '+v.substring(6);
    else if (v.length > 3) v = v.substring(0,3)+' '+v.substring(3);
    this.value = v;
  });
}

function switchAuthTab(tab) {
  document.getElementById('tab-login').classList.toggle('active', tab === 'login');
  document.getElementById('tab-register').classList.toggle('active', tab === 'register');
  document.getElementById('panel-login').classList.toggle('active', tab === 'login');
  document.getElementById('panel-register').classList.toggle('active', tab === 'register');
}

function togglePass(inputId, eyeEl) {
  const inp = document.getElementById(inputId);
  const isHidden = inp.type === 'password';
  inp.type = isHidden ? 'text' : 'password';
  eyeEl.textContent = isHidden ? 'visibility_off' : 'visibility';
}

function doLogin() {
  const email = document.getElementById('login-email').value.trim();
  const pass  = document.getElementById('login-pass').value;
  if (!email || !pass) { showToast('Completa todos los campos'); return; }
  // Check stored users
  const users = Store.get('ep_users') || [];
  const user  = users.find(u => u.email === email && u.password === pass);
  if (!user) { showToast('Correo o contraseña incorrectos'); return; }
  loginUser(user);
}

function doGuestLogin() {
  const guestUser = { name:'Invitado', email:'invitado@error.co', phone:'', address:'', avatar:'', memberSince: new Date().getFullYear() };
  loginUser(guestUser);
}

function doRegister() {
  const name    = document.getElementById('reg-name').value.trim();
  const phone   = document.getElementById('reg-phone').value.trim();
  const email   = document.getElementById('reg-email').value.trim();
  const address = document.getElementById('reg-address').value.trim();
  const pass    = document.getElementById('reg-pass').value;

  if (!name || !email || !pass) { showToast('Nombre, correo y contraseña son obligatorios'); return; }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showToast('Ingresa un correo válido'); return; }
  if (pass.length < 6) { showToast('La contraseña debe tener al menos 6 caracteres'); return; }

  const users = Store.get('ep_users') || [];
  if (users.find(u => u.email === email)) { showToast('Este correo ya está registrado'); return; }

  const newUser = { name, phone, email, address, password: pass, avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=c1ecd4&color=012d1d&size=100`, memberSince: new Date().getFullYear() };
  users.push(newUser);
  Store.set('ep_users', users);
  loginUser(newUser);
}

function loginUser(user) {
  state.currentUser = user;
  Store.set('ep_user', user);
  seedDemoRepairs();
  showToast(`¡Bienvenido, ${user.name}! 👋`);
  renderProfileLoggedIn();
  renderNotifBadge();
}

function doLogout() {
  state.currentUser = null;
  Store.remove('ep_user');
  showToast('Sesión cerrada. ¡Hasta pronto!');
  renderAuthUI();
  renderNotifBadge();
}

function renderProfileLoggedIn() {
  const u = state.currentUser;
  document.getElementById('auth-view').style.display = 'none';
  const pv = document.getElementById('profile-view');
  pv.style.display = 'block';
  const repairCount = state.repairs.length;
  const completedCount = state.repairs.filter(r => r.status === 'completed').length;
  const ratings = state.repairs.filter(r => r.rated);
  const avgRating = ratings.length ? (ratings.reduce((a,r) => a + r.rating, 0) / ratings.length).toFixed(1) : '—';

  pv.innerHTML = `
    <div class="profile-header">
      <div class="profile-avatar-wrap">
        <img class="profile-avatar" src="${u.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(u.name)}&background=c1ecd4&color=012d1d&size=100`}" alt="${u.name}" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(u.name)}&background=c1ecd4&color=012d1d&size=100'" />
        <div class="profile-avatar-edit"><span class="material-symbols-outlined">edit</span></div>
      </div>
      <div class="profile-header__info">
        <div class="profile-header__name">${u.name}</div>
        <div class="profile-header__email">${u.email}</div>
        <span class="member-since">Miembro desde ${u.memberSince || new Date().getFullYear()}</span>
      </div>
    </div>

    <!-- Mini stats -->
    <div class="stats-bar" style="margin-bottom:var(--sp-md);">
      <div class="stat-box"><div class="stat-box__val">${repairCount}</div><div class="stat-box__label">Solicitudes</div></div>
      <div class="stat-box"><div class="stat-box__val">${completedCount}</div><div class="stat-box__label">Completadas</div></div>
      <div class="stat-box"><div class="stat-box__val">${avgRating}</div><div class="stat-box__label">Rating prom.</div></div>
      <div class="stat-box"><div class="stat-box__val">Yopal</div><div class="stat-box__label">Ciudad</div></div>
    </div>

    <!-- Account section -->
    <div class="profile-section">
      <div class="profile-section__title">Mi cuenta</div>
      <div class="profile-row" onclick="showToast('Editar perfil próximamente')">
        <div class="profile-row__left"><div class="profile-row__icon"><span class="material-symbols-outlined">person</span></div><div><div class="profile-row__label">Información personal</div><div class="profile-row__sub">${u.email}</div></div></div>
        <div class="profile-row__arrow"><span class="material-symbols-outlined">chevron_right</span></div>
      </div>
      <div class="profile-row" onclick="showToast('Dirección: ' + (u.address || 'No registrada'))">
        <div class="profile-row__left"><div class="profile-row__icon"><span class="material-symbols-outlined">location_on</span></div><div><div class="profile-row__label">Dirección principal</div><div class="profile-row__sub">${u.address || 'Sin dirección guardada'}</div></div></div>
        <div class="profile-row__arrow"><span class="material-symbols-outlined">chevron_right</span></div>
      </div>
      <div class="profile-row" onclick="showToast('Gestión de métodos de pago próximamente')">
        <div class="profile-row__left"><div class="profile-row__icon"><span class="material-symbols-outlined">credit_card</span></div><div><div class="profile-row__label">Métodos de pago</div><div class="profile-row__sub">Agregar tarjeta o Nequi</div></div></div>
        <div class="profile-row__arrow"><span class="material-symbols-outlined">chevron_right</span></div>
      </div>
    </div>

    <!-- Activity section -->
    <div class="profile-section">
      <div class="profile-section__title">Actividad</div>
      <div class="profile-row" onclick="goTo(5)">
        <div class="profile-row__left"><div class="profile-row__icon"><span class="material-symbols-outlined">history</span></div><div><div class="profile-row__label">Mis reparaciones</div><div class="profile-row__sub">${repairCount} solicitude${repairCount !== 1 ? 's' : ''} registrada${repairCount !== 1 ? 's' : ''}</div></div></div>
        <div class="profile-row__arrow"><span class="material-symbols-outlined">chevron_right</span></div>
      </div>
      <div class="profile-row" onclick="showToast('Notificaciones próximamente')">
        <div class="profile-row__left"><div class="profile-row__icon"><span class="material-symbols-outlined">notifications</span></div><div><div class="profile-row__label">Notificaciones</div><div class="profile-row__sub">Activas por WhatsApp</div></div></div>
        <div class="profile-row__arrow"><span class="material-symbols-outlined">chevron_right</span></div>
      </div>
    </div>

    <!-- Support section -->
    <div class="profile-section">
      <div class="profile-section__title">Soporte</div>
      <div class="profile-row" onclick="showToast('Abriendo ayuda...')">
        <div class="profile-row__left"><div class="profile-row__icon"><span class="material-symbols-outlined">help</span></div><div><div class="profile-row__label">Centro de ayuda</div><div class="profile-row__sub">Preguntas frecuentes</div></div></div>
        <div class="profile-row__arrow"><span class="material-symbols-outlined">chevron_right</span></div>
      </div>
      <div class="profile-row" onclick="callSupport()">
        <div class="profile-row__left"><div class="profile-row__icon"><span class="material-symbols-outlined">headset_mic</span></div><div><div class="profile-row__label">Contactar soporte</div><div class="profile-row__sub">Disponible 24/7</div></div></div>
        <div class="profile-row__arrow"><span class="material-symbols-outlined">chevron_right</span></div>
      </div>
    </div>

    <button class="logout-btn" onclick="doLogout()"><span class="material-symbols-outlined">logout</span>Cerrar sesión</button>
    <p style="text-align:center; font-size:11px; color:var(--outline); margin-top:var(--sp-md);">Error+ v2.4 · Yopal, Casanare</p>
  `;
}

/* ══════════════════════════════════════════
   MISC
══════════════════════════════════════════ */
function callSupport() {
  showToast('📞 Conectando con soporte técnico 24/7…');
  setTimeout(() => window.open('tel:+573001234567'), 800);
}

let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 3000);
}

// Close modal on backdrop click
document.getElementById('rate-modal').addEventListener('click', function(e) {
  if (e.target === this) closeRateModal();
});

// Live validation
['inp-name','inp-phone','inp-address'].forEach(id => {
  const el = document.getElementById(id);
  if (!el) return;
  el.addEventListener('input', () => {
    el.classList.remove('error');
    const err = el.parentElement?.querySelector?.('.error-msg') || el.nextElementSibling;
    if (err?.classList?.contains('error-msg')) err.style.display = 'none';
  });
});

// Ubicación real (GPS del navegador + geocodificación inversa)
const SUPPORTED_CITIES = ['Yopal','Bogotá','Medellín','Cali','Villavicencio','Barranquilla'];

function normalizeCityName(name) {
  return (name || '').toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, ''); // quita tildes para comparar
}

async function detectLocation() {
  if (!navigator.geolocation) {
    showToast('Tu navegador no soporta geolocalización.');
    return;
  }

  showToast('📍 Detectando tu ubicación…');

  navigator.geolocation.getCurrentPosition(async (pos) => {
    const { latitude, longitude } = pos.coords;
    try {
      const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=10&addressdetails=1`, {
        headers: { 'Accept-Language': 'es' }
      });
      const data = await res.json();
      const addr = data.address || {};
      const detected = addr.city || addr.town || addr.municipality || addr.village || addr.county || '';

      const match = SUPPORTED_CITIES.find(c => normalizeCityName(c) === normalizeCityName(detected));

      if (match) {
        showToast(`📍 Ubicación detectada: ${match}`);
        state.selectedCity = match;
        const cityChip = document.querySelector(`.city-chip[data-city="${match}"]`);
        if (cityChip) {
          document.querySelectorAll('.city-chip').forEach(c => c.classList.remove('active'));
          cityChip.classList.add('active');
        }
        if (state.currentScreen === 2) renderTechList(match);
      } else if (detected) {
        showToast(`📍 Detectamos ${detected}, pero aún no tenemos cobertura ahí.`);
      } else {
        showToast('📍 No pudimos identificar tu ciudad exacta.');
      }
    } catch (err) {
      showToast('No se pudo determinar tu ciudad. Intenta de nuevo.');
    }
  }, (err) => {
    if (err.code === err.PERMISSION_DENIED) {
      showToast('Permite el acceso a tu ubicación para usar esta función.');
    } else {
      showToast('No se pudo obtener tu ubicación.');
    }
  }, { enableHighAccuracy: false, timeout: 8000 });
}

document.getElementById('location-icon').addEventListener('click', detectLocation);

/* ══════════════════════════════════════════
   NOTIFICACIONES (a partir del historial guardado
   en localStorage, sin necesitar base de datos)
══════════════════════════════════════════ */
function buildNotifications() {
  if (!state.currentUser) return [];

  const notifs = [];
  state.repairs.forEach(r => {
    if (r.status === 'active') {
      notifs.push({
        icon: 'build', color: 'var(--primary)',
        title: `Tu técnico está en camino`,
        desc: `${r.appliance} · ${r.techName} · ${r.code}`
      });
    } else if (r.status === 'pending') {
      notifs.push({
        icon: 'hourglass_top', color: '#c98a02',
        title: `Solicitud pendiente de confirmación`,
        desc: `${r.appliance} · ${r.code}`
      });
    } else if (r.status === 'completed' && !r.rated) {
      notifs.push({
        icon: 'star', color: '#e53935',
        title: `¿Cómo estuvo tu servicio?`,
        desc: `Califica a ${r.techName} · ${r.appliance}`
      });
    }
  });
  return notifs;
}

function renderNotifBadge() {
  const notifs = buildNotifications();
  const badge = document.getElementById('notif-badge');
  if (notifs.length > 0) {
    badge.textContent = notifs.length;
    badge.style.display = 'flex';
  } else {
    badge.style.display = 'none';
  }
}

function toggleNotifPanel() {
  const panel = document.getElementById('notif-panel');
  const isOpen = panel.classList.contains('open');
  if (isOpen) { panel.classList.remove('open'); return; }

  if (!state.currentUser) {
    showToast('Inicia sesión para ver tus notificaciones.');
    return;
  }

  const notifs = buildNotifications();
  panel.innerHTML = notifs.length === 0
    ? `<div class="notif-empty"><span class="material-symbols-outlined" style="font-size:32px; display:block; margin-bottom:8px; color:var(--outline-variant);">notifications_off</span>No tienes notificaciones nuevas.</div>`
    : `<div class="notif-panel__title">Notificaciones</div>` + notifs.map(n => `
        <div class="notif-item" onclick="goTo(5); toggleNotifPanel();">
          <div class="notif-item__title"><span class="material-symbols-outlined" style="font-size:18px; color:${n.color};">${n.icon}</span>${n.title}</div>
          <div class="notif-item__desc">${n.desc}</div>
        </div>`).join('');

  panel.classList.add('open');
}

// Cierra el panel de notificaciones si se hace click afuera
document.addEventListener('click', (e) => {
  const wrap = document.querySelector('.notif-wrap');
  const panel = document.getElementById('notif-panel');
  if (wrap && panel && !wrap.contains(e.target)) panel.classList.remove('open');
});

// Phone format
document.getElementById('inp-phone').addEventListener('input', function() {
  let v = this.value.replace(/\D/g,'').substring(0,10);
  if (v.length > 6) v = v.substring(0,3)+' '+v.substring(3,6)+' '+v.substring(6);
  else if (v.length > 3) v = v.substring(0,3)+' '+v.substring(3);
  this.value = v;
});

// Init city chips
document.querySelectorAll('.city-chip').forEach(c => c.classList.toggle('active', c.dataset.city === 'Yopal'));

// If user already logged in, seed demo repairs
if (state.currentUser) seedDemoRepairs();
renderNotifBadge();


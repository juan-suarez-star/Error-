-- ============================================================
-- Error+ | Base de datos MySQL para importar
-- Reparaciones a Domicilio - Bogotá D.C. / Colombia
-- Generado automáticamente a partir de los datos actuales
-- de la app (jiji.js) para poblar la base de datos inicial.
-- ============================================================

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

CREATE DATABASE IF NOT EXISTS error_plus
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE error_plus;

-- ------------------------------------------------------------
-- Limpieza (para poder re-importar sin conflictos)
-- ------------------------------------------------------------
DROP TABLE IF EXISTS ratings;
DROP TABLE IF EXISTS repairs;
DROP TABLE IF EXISTS technicians;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS cities;
DROP TABLE IF EXISTS appliances;

-- ------------------------------------------------------------
-- Tabla: appliances (tipos de electrodomésticos/equipos)
-- ------------------------------------------------------------
CREATE TABLE appliances (
  id            INT AUTO_INCREMENT PRIMARY KEY,
  name          VARCHAR(60) NOT NULL UNIQUE,
  icon          VARCHAR(60) NOT NULL,
  created_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB CHARACTER SET utf8mb4;

-- ------------------------------------------------------------
-- Tabla: cities (ciudades de cobertura)
-- ------------------------------------------------------------
CREATE TABLE cities (
  id            INT AUTO_INCREMENT PRIMARY KEY,
  name          VARCHAR(60) NOT NULL UNIQUE
) ENGINE=InnoDB CHARACTER SET utf8mb4;

-- ------------------------------------------------------------
-- Tabla: users (clientes registrados en la app)
-- ------------------------------------------------------------
CREATE TABLE users (
  id            INT AUTO_INCREMENT PRIMARY KEY,
  name          VARCHAR(120) NOT NULL,
  email         VARCHAR(150) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  phone         VARCHAR(20),
  address       VARCHAR(255),
  avatar        VARCHAR(500),
  member_since  YEAR DEFAULT (YEAR(CURDATE())),
  created_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB CHARACTER SET utf8mb4;

-- ------------------------------------------------------------
-- Tabla: technicians (técnicos disponibles por aparato/ciudad)
-- ------------------------------------------------------------
CREATE TABLE technicians (
  id              VARCHAR(20) PRIMARY KEY,   -- ej: 'lv-y1' (se conserva el id original de la app)
  name            VARCHAR(120) NOT NULL,
  appliance_id    INT NOT NULL,
  city_id         INT NOT NULL,
  specialty       VARCHAR(255) NOT NULL,
  badge           ENUM('cert','expert','emergency') NOT NULL DEFAULT 'cert',
  badge_label     VARCHAR(40) NOT NULL,
  badge_icon      VARCHAR(60) NOT NULL,
  rating          DECIMAL(2,1) NOT NULL DEFAULT 5.0,
  services_count  VARCHAR(20) NOT NULL DEFAULT '0',   -- se guarda como texto porque viene formateado ("1,240+")
  price           DECIMAL(10,0) NOT NULL,             -- precio de visita en COP
  available       TINYINT(1) NOT NULL DEFAULT 1,
  avail_label     VARCHAR(80) NOT NULL,
  avatar          VARCHAR(500),
  phone           VARCHAR(20) NOT NULL,
  created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (appliance_id) REFERENCES appliances(id) ON DELETE CASCADE,
  FOREIGN KEY (city_id) REFERENCES cities(id) ON DELETE CASCADE,
  INDEX idx_appliance_city (appliance_id, city_id)
) ENGINE=InnoDB CHARACTER SET utf8mb4;

-- ------------------------------------------------------------
-- Tabla: repairs (solicitudes de servicio / historial)
-- ------------------------------------------------------------
CREATE TABLE repairs (
  id              VARCHAR(30) PRIMARY KEY,   -- ej: 'REP-001'
  user_id         INT,
  technician_id   VARCHAR(20) NOT NULL,
  appliance_id    INT NOT NULL,
  code            VARCHAR(30) NOT NULL,      -- código de servicio, ej 'LV-GEN-ERR5678'
  status          ENUM('pending','active','completed','cancelled') NOT NULL DEFAULT 'pending',
  price           DECIMAL(10,0) NOT NULL,
  request_date    DATE NOT NULL,
  address         VARCHAR(255) NOT NULL,
  city_id         INT NOT NULL,
  rated           TINYINT(1) NOT NULL DEFAULT 0,
  created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL,
  FOREIGN KEY (technician_id) REFERENCES technicians(id) ON DELETE RESTRICT,
  FOREIGN KEY (appliance_id) REFERENCES appliances(id) ON DELETE RESTRICT,
  FOREIGN KEY (city_id) REFERENCES cities(id) ON DELETE RESTRICT,
  INDEX idx_status (status),
  INDEX idx_user (user_id)
) ENGINE=InnoDB CHARACTER SET utf8mb4;

-- ------------------------------------------------------------
-- Tabla: ratings (calificaciones de servicios completados)
-- ------------------------------------------------------------
CREATE TABLE ratings (
  id              INT AUTO_INCREMENT PRIMARY KEY,
  repair_id       VARCHAR(30) NOT NULL UNIQUE,
  stars           TINYINT NOT NULL CHECK (stars BETWEEN 1 AND 5),
  comment         TEXT,
  created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (repair_id) REFERENCES repairs(id) ON DELETE CASCADE
) ENGINE=InnoDB CHARACTER SET utf8mb4;

-- ============================================================
-- DATOS INICIALES (seed data)
-- ============================================================

-- ------------------------------------------------------------
-- appliances
-- ------------------------------------------------------------

INSERT INTO appliances (name, icon) VALUES
  ('Lavadora', 'local_laundry_service'),
  ('Nevera', 'kitchen'),
  ('Aire Acondicionado', 'ac_unit'),
  ('Televisor', 'tv'),
  ('Computador', 'laptop_mac'),
  ('Moto', 'moped'),
  ('Carro', 'directions_car'),
  ('Horno / Estufa', 'oven_gen'),
  ('Calentador', 'water_heater'),
  ('Licuadora / Otros', 'blender');

-- ------------------------------------------------------------
-- cities
-- ------------------------------------------------------------
INSERT INTO cities (name) VALUES
  ('Yopal'),
  ('Bogotá'),
  ('Medellín'),
  ('Cali'),
  ('Villavicencio'),
  ('Barranquilla');

-- ------------------------------------------------------------
-- technicians
-- ------------------------------------------------------------
INSERT INTO technicians (id, name, appliance_id, city_id, specialty, badge, badge_label, badge_icon, rating, services_count, price, available, avail_label, avatar, phone) VALUES
  ('lv-y1', 'Carlos Ruiz', 1, 1, 'Técnico en Lavadoras LG / Samsung', 'cert', 'Certificado', 'verified', 4.9, '1,240+', 45000, 1, 'Disponible ahora', 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=200&q=80', '3001234567'),
  ('lv-y2', 'Marta Gómez', 1, 1, 'Especialista Línea Blanca Bosch', 'expert', 'Experta', 'workspace_premium', 4.8, '850+', 40000, 0, 'Agendar cita (Mañana)', 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80', '3009876543'),
  ('lv-y3', 'Andrés Mendoza', 1, 1, 'Lavadoras Industriales & Domésticas', 'emergency', 'Emergencias', 'bolt', 4.7, '2,100+', 55000, 1, 'Disponible ahora', 'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=200&q=80', '3151234567'),
  ('lv-y4', 'Laura Patiño', 1, 1, 'Lavadoras Whirlpool & Haceb', 'cert', 'Certificada', 'verified', 4.6, '620+', 38000, 1, 'Disponible ahora', 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80', '3001112222'),
  ('lv-b1', 'Fernanda Ríos', 1, 2, 'Lavadoras y Secadoras Premium', 'expert', 'Experta', 'workspace_premium', 4.9, '3,400+', 60000, 1, 'Disponible ahora', 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80', '3101112222'),
  ('lv-b2', 'Pedro Acosta', 1, 2, 'Técnico Samsung & Electrolux', 'cert', 'Certificado', 'verified', 4.6, '980+', 50000, 0, 'Disponible en 3 horas', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80', '3204445555'),
  ('lv-m1', 'Héctor Salazar', 1, 3, 'Lavadoras Daewoo & LG', 'expert', 'Experto', 'workspace_premium', 4.8, '2,200+', 52000, 1, 'Disponible ahora', 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&q=80', '3148889999'),
  ('lv-c1', 'Sofía Herrera', 1, 4, 'Lavadoras & Secadoras Industrial', 'expert', 'Experta', 'workspace_premium', 4.9, '2,900+', 58000, 1, 'Disponible ahora', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80', '3001230000'),
  ('lv-v1', 'Nelson Gutiérrez', 1, 5, 'Motores y Lavadoras Domésticas', 'emergency', 'Emergencias', 'bolt', 4.5, '780+', 44000, 1, 'Disponible ahora', 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80', '3204560000'),
  ('lv-ba1', 'Patricia Castaño', 1, 6, 'Lavadoras & Secadoras Costa', 'cert', 'Certificada', 'verified', 4.7, '1,100+', 48000, 1, 'Disponible ahora', 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=200&q=80', '3171234000'),
  ('nv-y1', 'Jorge Lara', 2, 1, 'Refrigeración y Neveras Mabe / LG', 'cert', 'Certificado', 'verified', 4.8, '1,050+', 50000, 1, 'Disponible ahora', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80', '3202223333'),
  ('nv-y2', 'Diana Mora', 2, 1, 'Neveras No Frost & Side by Side', 'expert', 'Experta', 'workspace_premium', 4.7, '730+', 45000, 0, 'Disponible mañana', 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&q=80', '3006667777'),
  ('nv-y3', 'Ramiro Peña', 2, 1, 'Gas Refrigerante R134a / R600a', 'emergency', 'Emergencias', 'bolt', 4.9, '1,800+', 55000, 1, 'Disponible ahora', 'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=200&q=80', '3155550000'),
  ('nv-b1', 'Camila Vargas', 2, 2, 'Neveras Samsung & Electrolux', 'cert', 'Certificada', 'verified', 4.6, '900+', 55000, 1, 'Disponible ahora', 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80', '3101110000'),
  ('nv-m1', 'Carlos Ospina', 2, 3, 'Refrigeración Comercial', 'expert', 'Experto', 'workspace_premium', 4.7, '1,400+', 58000, 1, 'Disponible ahora', 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&q=80', '3140001111'),
  ('ac-y1', 'Fabio Castillo', 3, 1, 'Técnico en Aire Acondicionado Split y Ventana', 'cert', 'Certificado', 'verified', 4.9, '1,600+', 65000, 1, 'Disponible ahora', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80', '3174445555'),
  ('ac-y2', 'Yenny Torres', 3, 1, 'Carga de Gas Refrigerante & Limpieza', 'expert', 'Experta', 'workspace_premium', 4.8, '940+', 60000, 0, 'Agendar cita', 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80', '3201112222'),
  ('ac-y3', 'Mauricio Díaz', 3, 1, 'Aires Minisplit & Centrales', 'emergency', 'Emergencias', 'bolt', 4.7, '2,300+', 70000, 1, 'Disponible ahora', 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80', '3154440000'),
  ('ac-b1', 'Ricardo Torres', 3, 2, 'Aires Carrier & Daikin Bogotá', 'cert', 'Certificado', 'verified', 4.7, '1,800+', 70000, 1, 'Disponible ahora', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80', '3204445555'),
  ('tv-y1', 'Camilo Reyes', 4, 1, 'Técnico en Televisores LED, QLED y OLED', 'cert', 'Certificado', 'verified', 4.7, '890+', 40000, 1, 'Disponible ahora', 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=200&q=80', '3003334444'),
  ('tv-y2', 'Stefany Pineda', 4, 1, 'Pantallas Samsung, LG y Sony', 'expert', 'Experta', 'workspace_premium', 4.8, '1,100+', 45000, 0, 'Disponible mañana', 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&q=80', '3107776666'),
  ('tv-y3', 'Brayhan Molina', 4, 1, 'Boards, Fuentes y Backlights', 'emergency', 'Emergencias', 'bolt', 4.6, '670+', 38000, 1, 'Disponible ahora', 'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=200&q=80', '3152228888'),
  ('tv-b1', 'Camila Vargas', 4, 2, 'Televisores y Electrónica Bogotá', 'cert', 'Certificada', 'verified', 4.6, '900+', 45000, 0, 'Agendar cita', 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80', '3006667777'),
  ('pc-y1', 'Sebastián Cruz', 5, 1, 'Técnico en PC, Laptops y Redes', 'cert', 'Certificado', 'verified', 4.8, '1,300+', 35000, 1, 'Disponible ahora', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80', '3001119999'),
  ('pc-y2', 'Natalia Ríos', 5, 1, 'Formateo, Virus & Recuperación de Datos', 'expert', 'Experta', 'workspace_premium', 4.9, '2,100+', 40000, 1, 'Disponible ahora', 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80', '3108885555'),
  ('pc-y3', 'David Barrera', 5, 1, 'Laptops Lenovo, HP y Dell', 'cert', 'Certificado', 'verified', 4.6, '750+', 30000, 0, 'Disponible en 2 horas', 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&q=80', '3154443333'),
  ('mt-y1', 'Jhon Quiñones', 6, 1, 'Mecánico de Motos 2T y 4T — Honda, Yamaha, AKT', 'cert', 'Certificado', 'verified', 4.9, '2,450+', 40000, 1, 'Disponible ahora', 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80', '3206661111'),
  ('mt-y2', 'Édison Cano', 6, 1, 'Electricidad de Motos & Inyección Electrónica', 'expert', 'Experto', 'workspace_premium', 4.8, '1,700+', 45000, 0, 'Agendar cita (Tarde)', 'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=200&q=80', '3104440000'),
  ('mt-y3', 'Andrés Palacios', 6, 1, 'Motos de Alto Cilindraje & Enduro', 'emergency', 'Emergencias', 'bolt', 4.7, '1,100+', 50000, 1, 'Disponible ahora', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80', '3172228888'),
  ('mt-y4', 'Leidy Suárez', 6, 1, 'Frenos, Suspensión y Transmisión de Motos', 'cert', 'Certificada', 'verified', 4.6, '830+', 38000, 1, 'Disponible ahora', 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=200&q=80', '3003335555'),
  ('mt-b1', 'Felipe Arango', 6, 2, 'Mecánico Motos Bajaj & Yamaha', 'cert', 'Certificado', 'verified', 4.7, '1,900+', 50000, 1, 'Disponible ahora', 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=200&q=80', '3101234567'),
  ('mt-v1', 'César Vanegas', 6, 5, 'Motos de trabajo & Domicilios', 'cert', 'Certificado', 'verified', 4.5, '620+', 42000, 1, 'Disponible ahora', 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&q=80', '3154441111'),
  ('ca-y1', 'Ricardo Infante', 7, 1, 'Mecánico Automotriz — Chevrolet, Renault, Kia', 'cert', 'Certificado', 'verified', 4.9, '3,100+', 70000, 1, 'Disponible ahora', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80', '3206667777'),
  ('ca-y2', 'Oswaldo Nieto', 7, 1, 'Electricidad Automotriz & Diagnóstico OBD', 'expert', 'Experto', 'workspace_premium', 4.8, '2,200+', 65000, 0, 'Disponible en 1 hora', 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80', '3154442222'),
  ('ca-y3', 'Luisa Bernal', 7, 1, 'Frenos, Suspensión & Transmisión', 'emergency', 'Emergencias', 'bolt', 4.7, '1,500+', 75000, 1, 'Disponible ahora', 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80', '3202229999'),
  ('ca-b1', 'Hernán Ríos', 7, 2, 'Mecánica Automotriz & Multimarcas', 'expert', 'Experto', 'workspace_premium', 4.8, '4,200+', 80000, 1, 'Disponible ahora', 'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=200&q=80', '3101230000'),
  ('ho-y1', 'Claudia Vargas', 8, 1, 'Hornos y Estufas a Gas & Eléctricas', 'cert', 'Certificada', 'verified', 4.8, '980+', 45000, 1, 'Disponible ahora', 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80', '3003331111'),
  ('ho-y2', 'Mario Serrano', 8, 1, 'Quemadores, Válvulas y Termostatos', 'expert', 'Experto', 'workspace_premium', 4.7, '1,200+', 50000, 0, 'Disponible mañana AM', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80', '3157776666'),
  ('ho-y3', 'Pablo Ortega', 8, 1, 'Gas Natural & Propano — Seguridad', 'emergency', 'Emergencias', 'bolt', 4.9, '2,000+', 55000, 1, 'Disponible ahora', 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=200&q=80', '3104448888'),
  ('cl-y1', 'Gustavo Forero', 9, 1, 'Calentadores de Paso & Tanque — Gas / Eléctrico', 'cert', 'Certificado', 'verified', 4.8, '1,450+', 55000, 1, 'Disponible ahora', 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80', '3202225555'),
  ('cl-y2', 'Adriana Cuevas', 9, 1, 'Calentadores Haceb & Challenger', 'expert', 'Experta', 'workspace_premium', 4.7, '870+', 50000, 0, 'Agendar cita', 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80', '3001118888'),
  ('cl-y3', 'Manuel Roa', 9, 1, 'Instalación y Gas Natural de Calentadores', 'emergency', 'Emergencias', 'bolt', 4.9, '2,100+', 60000, 1, 'Disponible ahora', 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&q=80', '3150004444'),
  ('li-y1', 'Óscar Blanco', 10, 1, 'Pequeños Electrodomésticos — Licuadoras, Batidoras, Planchas', 'cert', 'Certificado', 'verified', 4.6, '540+', 25000, 1, 'Disponible ahora', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80', '3009990000'),
  ('li-y2', 'Milena Ospina', 10, 1, 'Aspiradoras, Freidoras de Aire & Microondas', 'expert', 'Experta', 'workspace_premium', 4.7, '720+', 30000, 0, 'Disponible esta tarde', 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=200&q=80', '3171115555');

-- ------------------------------------------------------------
-- users (usuario demo de ejemplo)
-- La contraseña debe migrarse ya encriptada (bcrypt) desde el
-- backend real; aquí se deja un hash de ejemplo para 'demo1234'
-- ------------------------------------------------------------
INSERT INTO users (id, name, email, password_hash, phone, address, avatar, member_since) VALUES
  (1, 'Juan Pérez', 'juan.perez@email.com', '$2y$10$examplehashreplacewithrealbcrypt', '3001234567', 'Calle 12 #23-45, Centro', 'https://ui-avatars.com/api/?name=Juan+Perez&background=c1ecd4&color=012d1d&size=100', 2025);

-- ------------------------------------------------------------
-- repairs (historial de ejemplo, igual al seed demo de la app)
-- ------------------------------------------------------------
INSERT INTO repairs (id, user_id, technician_id, appliance_id, code, status, price, request_date, address, city_id, rated) VALUES
  ('REP-001', 1, 'nv-y1', (SELECT id FROM appliances WHERE name='Nevera'),      'NV-GEN-ERR1234', 'completed', 50000, '2025-05-28', 'Calle 12 #23-45, Centro',        (SELECT id FROM cities WHERE name='Yopal'), 1),
  ('REP-002', 1, 'lv-y1', (SELECT id FROM appliances WHERE name='Lavadora'),    'LV-GEN-ERR5678', 'active',    45000, '2025-06-17', 'Cra 7 #15-30, Villa del Río',    (SELECT id FROM cities WHERE name='Yopal'), 0),
  ('REP-003', 1, 'pc-y2', (SELECT id FROM appliances WHERE name='Computador'),  'PC-GEN-ERR9012', 'pending',   40000, '2025-06-18', 'Av 3 #8-20, Bello Horizonte',    (SELECT id FROM cities WHERE name='Yopal'), 0);

-- ------------------------------------------------------------
-- ratings (calificación del único repair marcado como rated=1)
-- ------------------------------------------------------------
INSERT INTO ratings (repair_id, stars, comment) VALUES
  ('REP-001', 5, 'Excelente servicio, muy puntual y profesional.');

SET FOREIGN_KEY_CHECKS = 1;

const ULTIMA_ACTUALIZACION = "04/02/2026";
const LIMITE_SIC_HORAS = 10;
const REGISTROS = [
  { nombre: "Acosta Mendez Jhon Eduard", cc: "1103106670", cargo: "Conductor", agencia: "COROZAL", fecha: "2026-02-04", entrada: "05:49", salida: "13:31" },
  { nombre: "Aguas Olano Guillermo Andres", cc: "1010074120", cargo: "Call center", agencia: "COROZAL", fecha: "2026-02-04", entrada: "05:07", salida: "13:41" },
  { nombre: "Barboza Villanueva Carlos Daniel", cc: "1102889650", cargo: "Conductor", agencia: "COROZAL", fecha: "2026-02-04", entrada: "05:49", salida: "11:56" },
  { nombre: "Carval Fernandez Carlos Danilo", cc: "1050276905", cargo: "Responsable de reparto", agencia: "COROZAL", fecha: "2026-02-04", entrada: "06:02", salida: "13:21" },
  { nombre: "Contreras Beltran Vicente Carlos", cc: "1102848189", cargo: "Conductor", agencia: "COROZAL", fecha: "2026-02-04", entrada: "07:07", salida: "13:46" },
  { nombre: "Martinez Portillo Juan Sebastian", cc: "1001818457", cargo: "Profesional de flota", agencia: "COROZAL", fecha: "2026-02-04", entrada: "06:03", salida: "12:15" },
  { nombre: "Mercado Buelvas Anibal De Jesus", cc: "3914087", cargo: "Auxiliar de reparto", agencia: "COROZAL", fecha: "2026-02-04", entrada: "06:09", salida: "11:53" },
  { nombre: "Mercado Vega Rafael Enrique", cc: "92529459", cargo: "Jefe de operaciones", agencia: "COROZAL", fecha: "2026-02-04", entrada: "05:11", salida: "13:48" },
  { nombre: "Meza Coronado Jesus David", cc: "1103123881", cargo: "Responsable de reparto", agencia: "COROZAL", fecha: "2026-02-04", entrada: "06:15", salida: "11:53" },
  { nombre: "Nieto Mendez Asil Ricardo", cc: "73433342", cargo: "Conductor", agencia: "COROZAL", fecha: "2026-02-04", entrada: "06:30", salida: "12:57" },
  { nombre: "Osorio Florez Holmo", cc: "1003646230", cargo: "Responsable de reparto", agencia: "COROZAL", fecha: "2026-02-04", entrada: "05:52", salida: "12:03" },
  { nombre: "Patron Salazar Carlos Andres", cc: "1100339242", cargo: "Conductor", agencia: "COROZAL", fecha: "2026-02-04", entrada: "06:32", salida: "12:26" },
  { nombre: "Perez Conde Jonnie Antonio", cc: "1100687018", cargo: "Responsable de reparto", agencia: "COROZAL", fecha: "2026-02-04", entrada: "06:45", salida: "13:27" },
  { nombre: "Rodriguez Madera Luis Angel", cc: "1143405196", cargo: "Auxiliar de reparto", agencia: "COROZAL", fecha: "2026-02-04", entrada: "05:48", salida: "06:46" },
  { nombre: "Romero Salazar Agustin Rafael", cc: "1005412180", cargo: "Responsable de reparto", agencia: "COROZAL", fecha: "2026-02-04", entrada: "06:16", salida: "13:04" },
  { nombre: "Sandoval Vargas Sebastian", cc: "1005659977", cargo: "Coordinadores Ruta", agencia: "COROZAL", fecha: "2026-02-04", entrada: "05:00", salida: "13:22" },
  { nombre: "Senas Gallardo Maria Alejandra", cc: "1002344414", cargo: "Tecnico SGSST", agencia: "COROZAL", fecha: "2026-02-04", entrada: "06:43", salida: "12:53" },
  { nombre: "Sierra Gonzalez Reinaldo Antonio", cc: "92541841", cargo: "Auxiliar de reparto", agencia: "COROZAL", fecha: "2026-02-04", entrada: "04:59", salida: "07:26" },
  { nombre: "Sincelejo Corrales Jonathan", cc: "1100687430", cargo: "Responsable de reparto", agencia: "COROZAL", fecha: "2026-02-04", entrada: "06:10", salida: "12:49" },
  { nombre: "Solano Diego Juan De Jesus", cc: "92505994", cargo: "Conductor", agencia: "COROZAL", fecha: "2026-02-04", entrada: "05:44", salida: "13:30" },
  { nombre: "Torres Gonzalez Joel Manuel", cc: "1140816474", cargo: "Auxiliar de reparto", agencia: "COROZAL", fecha: "2026-02-04", entrada: "05:54", salida: "13:12" },
  { nombre: "Valdes Rodelo Yosman Jose", cc: "73435831", cargo: "Responsable de reparto", agencia: "COROZAL", fecha: "2026-02-04", entrada: "06:29", salida: "12:49" },
  { nombre: "Paternina Rugero Gil", cc: "73237385", cargo: "Conductor", agencia: "MAGANGUÉ", fecha: "2026-02-04", entrada: "00:03", salida: "06:55" },
  { nombre: "Villegas Estrada Calixto Miguel", cc: "1052989710", cargo: "Conductor", agencia: "MAGANGUÉ", fecha: "2026-02-04", entrada: "06:52", salida: "10:17" }
];
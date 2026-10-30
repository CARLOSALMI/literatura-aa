// Portadas y PDF: agrega los archivos a /covers y /pdfs y completa cover/pdf con sus nombres.
// Las tapas sin archivo muestran una cubierta provisional.
window.CATALOG = [
  // Libros oficiales de A.A. (18)
  ...[
    'Libro Grande','12 pasos y 12 tradiciones','CÃ³mo lo ve Bill','A.A. llega a su mayorÃ­a de edad','El Dr. Bob y los buenos veteranos','TransmÃ­telo',
    'Libro Grande en lenguaje sencillo','Llegamos a creer','De las tinieblas hacia la luz','El lenguaje del corazÃ³n','Experiencia, fortaleza y esperanza','A.A. en prisiÃ³n: de preso a preso',
    'Viviendo sobrio','Lo mejor de Bill','Manual de servicio 2008â€“2009','Manual de servicio 2021â€“2023','Nuestra gran responsabilidad','Reflexiones diarias'
  ].map(title => ({category:'oficiales',title,pdf:'',cover:''})),
  // Libros relacionados con A.A. (45)
  ...[
    'Bill W. (Robert Thomsen)','Mi nombre es Bill (Susan Cheever)','Bill W.: mis primeros 40 aÃ±os','No-Dios: una historia de A.A. (Ernest Kurtz)','El alma del apadrinamiento','Manual de extensiones de las reflexiones diarias de A.A.',
    'La historia de Bill (primer borrador)','La historia de Bill (segundo borrador: hay una soluciÃ³n)','Ebby, el hombre que apadrinÃ³ a Bill W.','Carta de Bill sobre el Padre Nuestro','El legado espiritual del Dr. Bob','La Ãºltima gran charla del Dr. Bob',
    'PreguntÃ©mosle a Bill W.','Sobriedad y mÃ¡s allÃ¡ (Ralph Pfau)','Las promesas de AlcohÃ³licos AnÃ³nimos','El pequeÃ±o libro rojo','Los tres gigantes del alma','Regreso a lo bÃ¡sico',
    'El sermÃ³n del monte (Emmet Fox)','Terapia divina y adicciÃ³n (Thomas Keating y Tom S.)','Dios concÃ©deme (meditaciones diarias Hazelden)','La Biblia','Jugadores AnÃ³nimos (Un dÃ­a a la vez)','NarcÃ³ticos AnÃ³nimos (texto bÃ¡sico, 6.Âª ediciÃ³n)',
    'Al-Anon (Un dÃ­a a la vez)','24 horas al dÃ­a (meditaciones)','El lenguaje del adiÃ³s (Melody Beattie)','Alateen (Un dÃ­a a la vez)','La etiologÃ­a de la salud y la enfermedad mental y emocional','Las leyes de la enfermedad mental y emocional',
    'NeurÃ³ticos AnÃ³nimos (Doce pasos)','SexÃ³licos AnÃ³nimos (Libro Blanco)','Comedores compulsivos (Solo por hoy)','El manual de Akron','Ego y rendiciÃ³n','El libro azul de CoDA',
    'Un programa para ti','Viviendo con tu Poder Superior (pasos 1 al 3)','Viviendo conmigo mismo (pasos 4 al 7)','Viviendo con otros (pasos 8 al 12)','CÃ³mo funcionaba (la historia de Clarence S.)','ArtÃ­culo â€œLos alcohÃ³licos y Diosâ€ (1939)',
    'Hojas sueltas','Taburetes y botellas','Las variedades de la experiencia religiosa (William James)','John Barleycorn (Jack London)'
  ].map(title => ({category:'relacionados',title,pdf:'',cover:''})),
  // Grapevine (33)
  ...[
    'Lo mejor de Grapevine, vol. 1','Lo mejor de Grapevine, vol. 2','Lo mejor de Grapevine, vol. 3','Despertares espirituales 1','Despertares espirituales 2','Cita diaria',
    'Bajo el mismo techo','Lo mejor de La ViÃ±a II','Mujeres en A.A.','OraciÃ³n y meditaciÃ³n','Pase lo que pase','Paso a paso',
    'Sobriedad emocional','Un dÃ­a a la vez','Voces de sobriedad a largo plazo','A.A. en el Ã¡mbito militar','Nuestros doce pasos','En nuestras propias palabras',
    'DiversiÃ³n en sobriedad','Frente a frente','Libro para principiantes','Libres en el interior','En acciÃ³n','Formando relaciones autÃ©nticas',
    'Reparar el daÃ±o','El grupo base','Felices, alegres y libres','JÃ³venes y sobrios','Nuestras doce tradiciones','Sobrios y fuera del clÃ³set',
    'El dilema de no tener fe','Un fragmento de la historia','Dos artÃ­culos del Dr. Bob'
  ].map(title => ({category:'grapevine',title,pdf:'',cover:''})),
  // Folletos (85, segÃºn las capturas; formatos y ediciones se conservan como entradas separadas)
  ...[
    'Los Doce Conceptos para el Servicio Mundial ilustrados','44 preguntas','A.A. de un vistazo','A.A. en las instituciones correccionales','A.A. en los entornos de tratamiento','A.A. en su comunidad',
    'A.A. para el alcohÃ³lico negro y afroamericano','A.A. para el alcohÃ³lico de edad avanzada','A.A. para el nativo norteamericano','A.A. y las Fuerzas Armadas','A.A. para la mujer','A.A. para los alcohÃ³licos con problemas de salud mental y sus padrinos',
    'Acceso a A.A.: los miembros hablan sobre superar las barreras','DetrÃ¡s de los muros: un mensaje de esperanza','Carta a una mujer alcohÃ³lica','CÃ­rculos de amor y servicio','CÃ³mo cooperan los miembros de A.A. con los profesionales','Comprendiendo el anonimato',
    'Correspondencia de Correccionales: una clase especial de servicio de A.A.','Dentro de A.A.: comprendiendo la comunidad y sus servicios','El artÃ­culo de Jack Alexander acerca de A.A.','El automantenimiento: donde se mezclan la espiritualidad y el dinero','El Grupo de A.A.: donde todo empieza','El legado de servicio de A.A.',
    'El punto de vista de un miembro de A.A. sobre la comunidad','El tesorero de un grupo de A.A.','El miembro de A.A., los medicamentos y otras drogas','Â¿Es A.A. para usted?','Esto es A.A.: introducciÃ³n al programa de recuperaciÃ³n','Grapevine y La ViÃ±a',
    'Hablando en reuniones no-A.A.','Â¿Hay un alcohÃ³lico en su vida?','La experiencia nos ha enseÃ±ado: introducciÃ³n a nuestras Doce Tradiciones','La palabra â€œDiosâ€','La tradiciÃ³n de A.A.: cÃ³mo se desarrollÃ³','Las Doce Tradiciones ilustradas',
    'Las mujeres en A.A.','Llevando el mensaje a las instituciones correccionales','Los Doce Conceptos para el Servicio Mundial ilustrados (ediciÃ³n ilustrada)','Los Doce Pasos ilustrados','Los Co-Fundadores de AlcohÃ³licos AnÃ³nimos','Los jÃ³venes en A.A.',
    'Los alcohÃ³licos LGBTQ en A.A.','Los miembros del clero preguntan acerca de AlcohÃ³licos AnÃ³nimos','Muchas sendas hacia la espiritualidad','Mujeres hispanas en A.A.','Preguntas y respuestas sobre el apadrinamiento','Problemas diferentes del alcohol',
    'Â¿Se cree usted diferente?','Preguntas frecuentes acerca de A.A.','Sirviendo a todos los alcohÃ³licos','Tres charlas a sociedades mÃ©dicas por Bill W.','Un principiante preguntaâ€¦','Una breve guÃ­a a A.A.',
    'Uniendo las orillas','Â¿Demasiado joven?','Â¿Es A.A. para mÃ­?','Â¿Hay un bebedor problema en el lugar de trabajo?','A.A. como recurso para los profesionales de salud','CÃ³mo funciona',
    'Encuesta de los miembros de A.A. 2022','Es mejor que estar sentado en una celda','Esto es A.A. (en caracteres grandes)','InformaciÃ³n sobre contactos de A.A. previos a la salida en libertad de correccionales (mujeres)','InformaciÃ³n de contactos de A.A. previos a la salida en libertad de correccionales (hombres)','Su oficina de Servicios Generales de A.A.',
    'Si usted es un profesionalâ€¦','Solicitud para participar en el Programa Puente hacia A.A.','Miembros de A.A. indÃ­genas','Los lÃ­deres religiosos preguntan acerca de A.A.','Ser negro en A.A.','TrÃ­ptico sobre la seguridad y A.A.',
    'Programa Puente hacia A.A.: contacto temporal','Le sucediÃ³ a Alicia','Lo que le sucediÃ³ a JosÃ©','Preguntas frecuentes acerca de A.A. (letra grande)','Tarjeta de seguridad para los grupos de A.A.','Seamos amables con nuestros amigos en el frente del alcoholismo',
    'Su MCD: miembro del comitÃ© de distrito','Sugerencias para coordinar reuniones de principiantes','Problemas diferentes del alcohol (extractos)','Â¿A dÃ³nde voy de aquÃ­?','Llevando el mensaje detrÃ¡s de estos muros','Material de servicio en espaÃ±ol para escanear con QR'
  ].map(title => ({category:'folletos',title,pdf:'',cover:''}))
];

const officialFiles = {
  'Libro Grande': { cover: 'libro-grande.jpg', pdf: 'libro-grande.pdf' },
  '12 pasos y 12 tradiciones': { cover: '12-pasos-y-12-tradiciones.jpg', pdf: '12-pasos-y-12-tradiciones.pdf' },
  'CÃ³mo lo ve Bill': { cover: 'como-lo-ve-bill.jpg', pdf: 'como-lo-ve-bill.pdf' },
  'A.A. llega a su mayorÃ­a de edad': { cover: 'aa-llega-a-su-mayoria-de-edad.jpg', pdf: 'aa-llega-a-su-mayoria-de-edad.pdf' },
  'El Dr. Bob y los buenos veteranos': { cover: 'el-dr-bob-y-los-buenos-veteranos.png', pdf: 'el-dr-bob-y-los-buenos-veteranos.pdf' },
  'TransmÃ­telo': { cover: 'transmitelo.jpg', pdf: 'transmitelo.pdf' },
  'Libro Grande en lenguaje sencillo': { cover: 'libro-grande-en-lenguaje-sencillo.png', pdf: 'libro-grande-en-lenguaje-sencillo-plain-language-big-book-2024.pdf' },
  'Llegamos a creer': { cover: 'llegamos-a-creer.jpg', pdf: 'llegamos-a-creer.pdf' },
  'De las tinieblas hacia la luz': { cover: 'de-las-tinieblas-hacia-la-luz.png', pdf: 'de-las-tinieblas-hacia-la-luz.pdf' },
  'El lenguaje del corazÃ³n': { cover: 'el-lenguaje-del-corazon.jpg', pdf: 'el-lenguaje-del-corazon.pdf' },
  'Experiencia, fortaleza y esperanza': { cover: 'experiencia-fortaleza-y-esperanza.jpg', pdf: 'experienza-fortaleza-y-esperanza.pdf' },
  'A.A. en prisiÃ³n: de preso a preso': { cover: 'aa-en-prision.png', pdf: 'aa-en-prision-de-preso-a-preso.pdf' },
  'Viviendo sobrio': { cover: 'viviendo-sobrio.jpg', pdf: 'vivendo-sobrio.pdf' },
  'Lo mejor de Bill': { cover: 'lo-mejor-de-bill.jpg', pdf: 'lo-mejor-de-bill.pdf' },
  'Manual de servicio 2008â€“2009': { cover: 'el-manual-de-servicio-de-aa-y-doce-conceptos-para-el-servicio-mundial-2008-2009.jpg', pdf: 'el-manual-de-servicio-de-aa-y-doce-conceptos-para-el-servicio-mundial-ed-2008-2009.pdf' },
  'Manual de servicio 2021â€“2023': { cover: 'el-manual-de-servicio-de-aa-y-doce-conceptos-para-el-servicio-mundial-2021-2023.png', pdf: 'el-manual-de-servicio-de-aa-y-doce-conceptos-para-el-servicio-mundial-ed-2021-2023.pdf' },
  'Nuestra gran responsabilidad': { cover: 'nuestra-gran-responsabilidad.jpg', pdf: 'nuestra-gran-responsabilidad.pdf' },
  'Reflexiones diarias': { cover: 'reflexiones-diarias.jpg', pdf: 'reflexiones-diarias.pdf' }
};
window.CATALOG.forEach(item => {
  if (item.category !== 'oficiales') return;
  const files = officialFiles[item.title];
  if (files) Object.assign(item, files);
});

const relatedFiles = {
  'Bill W. (Robert Thomsen)': { cover: 'bill-w-robert-thomsen.jpg', pdf: 'bill-w-robert-thomsen.pdf' },
  'Mi nombre es Bill (Susan Cheever)': { cover: 'mi-nombre-es-bill.png', pdf: 'mi-nombre-es-bill-susan-cheever.pdf' },
  'Bill W.: mis primeros 40 aÃ±os': { cover: 'bill-w-mis-primeros-40-anos.png', pdf: 'bill-w-mis-primeros-40-anos.pdf' },
  'No-Dios: una historia de A.A. (Ernest Kurtz)': { cover: 'no-dios-una-historia-de-aa-ernest-kurtz.jpg', pdf: 'no-dios-una-historia-de-aa-ernest-kurtz.pdf' },
  'El alma del apadrinamiento': { cover: 'el-alma-del-apadrinamiento.png', pdf: 'el-alma-del-apadrinamiento-la-amistad-del-padre-ed-dowling-s-j.pdf' },
  'Manual de extensiones de las reflexiones diarias de A.A.': { cover: 'manual-de-extensiones-de-las-reflexiones-diarias.jpg', pdf: 'manual-de-extensiones-de-las-reflexiones-diarias.pdf' },
  'La historia de Bill (primer borrador)': { cover: 'la-historia-de-bill-primer-borrador.png', pdf: 'la-historia-de-bill-primer-borrador-inventario-del-cuarto-paso.pdf' },
  'La historia de Bill (segundo borrador: hay una soluciÃ³n)': { cover: 'la-historia-de-bill-segundo-borrador.png', pdf: 'la-historia-de-bill-segundo-borrador-hay-una-solucion.pdf' },
  'Ebby, el hombre que apadrinÃ³ a Bill W.': { cover: 'ebby-el-hombre-que-apadrino-a-bill-w.jpg', pdf: 'ebby-el-hombre-que-apadrino-a-bill-w.pdf' },
  'Carta de Bill sobre el Padre Nuestro': { cover: 'bill-sobre-el-padre-nuestro.png', pdf: 'bill-sobre-el-padre-nuestro.pdf' },
  'El legado espiritual del Dr. Bob': { cover: 'el-legado-espiritual-del-dr-bob.png', pdf: 'el-legado-espiritual-del-dr-bob.pdf' },
  'La Ãºltima gran charla del Dr. Bob': { cover: 'la-ultima-gran-charla-del-dr-bob.png', pdf: 'la-ultima-gran-charla-del-d-bob.pdf' },
  'PreguntÃ©mosle a Bill W.': { cover: 'preguntesmole-a-bill-w.png', pdf: 'preguntesmole-a-bill-w.pdf' },
  'Sobriedad y mÃ¡s allÃ¡ (Ralph Pfau)': { cover: 'sobriedad-y-mas-alla-ralph-pfau.jpg', pdf: 'sobriedad-y-mas-alla-ralph-pfau.pdf' },
  'El pequeÃ±o libro rojo': { cover: 'el-pequeno-libro-rojo.jpg', pdf: 'el-pequeno-libro-rojo.pdf' },
  'Las promesas de AlcohÃ³licos AnÃ³nimos': { cover: 'las-promesas-de-aa.png', pdf: 'las-promesas-de-aa.pdf' },
  'Los tres gigantes del alma': { cover: 'los-tres-gigantes-del-alma-de-aa-ralph-pafau.jpg', pdf: 'los-tres-gigantes-del-alma-de-aa-ralph-pfau.pdf' },
  'Regreso a lo bÃ¡sico': { cover: 'regreso-a-lo-basico.jpg', pdf: 'regreso-a-lo-basico.pdf' },
  'El sermÃ³n del monte (Emmet Fox)': { cover: 'el-sermon-del-monte.jpg', pdf: 'el-sermon-del-monte-emmet-fox.pdf' },
  'Terapia divina y adicciÃ³n (Thomas Keating y Tom S.)': { cover: 'terapia-divina-y-adiccion.png', pdf: 'terapia-divina-y-adiccion-thomas-keating-y-tom-s.pdf' },
  'Dios concÃ©deme (meditaciones diarias Hazelden)': { cover: 'dios-concedeme.png', pdf: 'dios-concedeme-meditaciones-diarias.pdf' },
  'La Biblia': { pdf: 'la-biblia-reina-valera.pdf' },
  'Jugadores AnÃ³nimos (Un dÃ­a a la vez)': { cover: 'jugadores-anonimos-un-dia-a-la-vez.jpg', pdf: 'jugadores-anonimos-un-dia-a-la-vez.pdf' },
  'NarcÃ³ticos AnÃ³nimos (texto bÃ¡sico, 6.Âª ediciÃ³n)': { cover: 'narcoticos-anonimos-texto-basico-sexta-edicion-pdf.jpg', pdf: 'narcoticos-anonimos-texto-basico-sexta-edicion.pdf' },
  'Al-Anon (Un dÃ­a a la vez)': { cover: 'un-dia-a-la-vez-en-al-anon.jpg', pdf: 'un-dia-a-la-vez-en-al-anon.pdf' },
  '24 horas al dÃ­a (meditaciones)': { cover: 'veinticuatro-horas-al-dia.png', pdf: 'veinticuatro-horas-al-dia.pdf' },
  'El lenguaje del adiÃ³s (Melody Beattie)': { cover: 'el-lenguaje-del-adios.png', pdf: 'el-lenguaje-del-adios-melody-beatie.pdf' },
  'Alateen (Un dÃ­a a la vez)': { cover: 'alateen-un-dia-a-la-vez-jpg.jpg', pdf: 'alateen-un-dia-a-la-vez.pdf' },
  'La etiologÃ­a de la salud y la enfermedad mental y emocional': { cover: 'la-etiologia-de-la-enfermedad.jpg', pdf: 'la-etiologia-de-la-salud-y-la-enfermedad-mental-y-emocional.pdf' },
  'Las leyes de la enfermedad mental y emocional': { cover: 'las-leyes-de-la-enfermedad.jpg', pdf: 'las-leyes-de-la-enfermedad-mental-y-emocional.pdf' },
  'NeurÃ³ticos AnÃ³nimos (Doce pasos)': { cover: 'neuroticos-anonimos-12-pasos.jpg', pdf: 'neuroticos-anonimos-12-pasos.pdf' },
  'SexÃ³licos AnÃ³nimos (Libro Blanco)': { cover: 'sexolicos-anonimos-libro-blanco.jpg', pdf: 'sexolicos-anonimos-libro-blanco.pdf' },
  'Comedores compulsivos (Solo por hoy)': { cover: 'comedores-compulsivos-anonimos.jpg', pdf: 'comedores-compulsivos-solo-por-hoy-reflexiones-diarias.pdf' },
  'El manual de Akron': { cover: 'un-manual-de-aa-el-manual-de-akron.png', pdf: 'un-manual-de-aa-el-manual-de-akron.pdf' },
  'Ego y rendiciÃ³n': { cover: 'ego-y-rendicion-harry-tiebout.png', pdf: 'ego-y-rendicion-harry-tiebout.pdf' },
  'El libro azul de CoDA': { cover: 'libro-azul-de-coda.png', pdf: 'libro-azul-de-coda.pdf' },
  'Un programa para ti': { cover: 'un-programa-para-ti.jpg', pdf: 'un-programa-para-ti.pdf' },
  'Viviendo con tu Poder Superior (pasos 1 al 3)': { cover: 'viviendo-con-tu-poder-superior.png', pdf: 'viviendo-con-tu-poder-superior-una-guia-disenada-del-libro-grande-1-3.pdf' },
  'Viviendo conmigo mismo (pasos 4 al 7)': { cover: 'viviendo-contigo-mismo.png', pdf: 'viviendo-contigo-mismo-pasos-4-al-7.pdf' },
  'Viviendo con otros (pasos 8 al 12)': { cover: 'viviendo-con-otros.png', pdf: 'viviendo-con-otros-pasos-8-al-12.pdf' },
  'CÃ³mo funcionaba (la historia de Clarence S.)': { cover: 'como-funcionaba-la-historia-de-clarence-snyder.png', pdf: 'como-funcionaba-la-historia-de-clarence-snyder.pdf' },
  'ArtÃ­culo â€œLos alcohÃ³licos y Diosâ€ (1939)': { cover: 'los-alcoholicos-y-dios.png', pdf: 'los-alcoholicos-y-dios.pdf' },
  'Hojas sueltas': { cover: 'hojas-sueltas.png', pdf: 'hojas-sueltas.pdf' },
  'Taburetes y botellas': { cover: 'taburetes-y-botellas.png', pdf: 'taburetes-y-botellas.pdf' },
  'Las variedades de la experiencia religiosa (William James)': { cover: 'las-variedades-de-la-experiencia-religiosa-william-james.png', pdf: 'las-variedades-de-la-experiencia-religiosa-w-james.pdf' },
  'John Barleycorn (Jack London)': { cover: 'john-barleycorn.png', pdf: 'john-barleycorn-jack-london.pdf' }
};
window.CATALOG.forEach(item => {
  if (item.category !== 'relacionados') return;
  const files = relatedFiles[item.title];
  if (files) Object.assign(item, files);
});


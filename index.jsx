import { useState } from "react";

const DAYS = [
  {
    id: 1,
    chapter: "Capítulo 1",
    title: "La Gran Sorpresa",
    date: "Viernes 4 de julio",
    location: "París",
    color: "#1E1B2E",
    accent: "#C4A35A",
    bg: "#F0EDE6",
    route: "https://www.google.com/maps/dir/Place+du+Trocad%C3%A9ro+Paris/Tour+Eiffel+Paris",
    icon: "✨",
    whatsappImg: {
      day: "DÍA 1",
      msg: "París, solo tú y yo. Esto apenas comienza.",
      when: "Al revelar la sorpresa en el aeropuerto",
    },
    events: [
      { time: "~18:00", title: "Aeropuerto — La revelación", desc: "La familia se va a Madrid. Le revelas: \"No nos vamos. Tenemos 4 días para nosotros solos.\"", type: "highlight" },
      { time: "18:00", title: "📲 Imagen 1 al WhatsApp", desc: "\"Sorpresa en París — No nos vamos a Madrid. Nos quedamos aquí, solo tú y yo.\"", type: "whatsapp" },
      { time: "19:00", title: "Check-in hotel · Prepararse", desc: "Llegar al hotel, dejar maletas, ducharse y cambiarse. Transición de viaje a romance.", type: "normal" },
      { time: "20:30", title: "Trocadéro — Torre Eiffel iluminada", desc: "Paseo por Trocadéro y junto al Sena. Crepe o cena ligera. Sin agenda pesada: que asimile la sorpresa.", type: "highlight" },
      { time: "22:30", title: "Regreso al hotel", desc: "Dormir temprano. Mañana es día largo de shopping.", type: "rest" },
    ],
    notes: null,
  },
  {
    id: 2,
    chapter: "Capítulo 2",
    title: "París Para Dos",
    date: "Sábado 5 de julio",
    location: "París",
    color: "#3B5998",
    accent: "#C4A35A",
    bg: "#EDF1F7",
    route: "https://www.google.com/maps/dir/Angelina+226+Rue+de+Rivoli+Paris/Ladur%C3%A9e+16+Rue+Royale+Paris/Place+de+la+Madeleine+Paris/Printemps+Haussmann+Paris/Caf%C3%A9+de+la+Paix+5+Place+de+l%27Op%C3%A9ra+Paris",
    icon: "🛍️",
    whatsappImg: {
      day: "DÍA 2",
      msg: "Mañana, lista antes del amanecer... Nos vamos para otro destino hermoso.",
      when: "En la noche, después del crucero por el Sena",
    },
    events: [
      { time: "08:30", title: "Desayuno — Angelina, Rue de Rivoli", desc: "Salón de té Belle Époque de 1903. Mármol, espejos, techos dorados. Pedir el chocolate caliente l'Africain y el Mont-Blanc. Llegar temprano para evitar fila. 226 Rue de Rivoli.", type: "highlight" },
      { time: "10:15", title: "Parada rápida — Ladurée, Rue Royale", desc: "La casa original de los macarons desde 1862, entre Place de la Madeleine y Place de la Concorde. Comprar macarons y seguir. 16 Rue Royale.", type: "normal" },
      { time: "10:30", title: "Ruta shopping: Madeleine → Saint-Honoré", desc: "Sézane, Sandro, Maje, Massimo Dutti, Scalpers. Boutiques francesas y moda accesible de lujo.", type: "normal" },
      { time: "13:00", title: "Almuerzo — La Jacobine", desc: "Restaurante con encanto cerca de Place Vendôme. Cocina francesa clásica en ambiente íntimo. Sin reserva.", type: "normal" },
      { time: "15:00", title: "Champs-Élysées + Grands Magasins", desc: "Printemps, Galeries Lafayette.", type: "normal" },
      { time: "17:00", title: "Café de la tarde — Café de la Paix", desc: "Frente a la Ópera Garnier. Interior Napoleón III con detalles en oro, espejos y elegancia absoluta. Terraza espectacular. Descanso perfecto después del shopping. 5 Place de l'Opéra.", type: "highlight" },
      { time: "18:30", title: "Regreso al hotel — Prepararse", desc: "Descanso rápido, cambiarse para la noche.", type: "rest" },
      { time: "20:00", title: "Crucero por el Sena — Vedettes", desc: "Paseo nocturno en barco. París iluminado desde el agua. Reserva confirmada.", type: "highlight" },
      { time: "22:00", title: "📲 Imagen 2 al WhatsApp", desc: "\"Mañana, lista antes del amanecer... Nos vamos para otro destino hermoso.\" Sin decir dónde.", type: "whatsapp" },
    ],
    notes: null,
  },
  {
    id: 3,
    chapter: "Capítulo 3",
    title: "Champagne",
    date: "Domingo 6 de julio",
    location: "Épernay · LOISIUM Wine & Spa",
    color: "#6B4E2A",
    accent: "#C4A35A",
    bg: "#F5F0E5",
    route: "https://www.google.com/maps/dir/Gare+de+l%27Est+Paris/Gare+d%27%C3%89pernay/LOISIUM+Wine+Spa+Hotel+Champagne+Mutigny/Mo%C3%ABt+%26+Chandon+20+Avenue+de+Champagne+%C3%89pernay/LOISIUM+Wine+Spa+Hotel+Champagne",
    icon: "🍾",
    whatsappImg: null,
    events: [
      { time: "06:36", title: "Tren París Est → Épernay", desc: "Primer tren del día. ~1h 15min. Reserva confirmada.", type: "transport" },
      { time: "~08:00", title: "Llegada Épernay → LOISIUM", desc: "Taxi al hotel (~10 min). Dejar maletas, check-in oficial a las 16:00 pero el spa está disponible.", type: "normal" },
      { time: "10:00", title: "Mañana de spa y relax", desc: "Piscina exterior con vistas a viñedos, sauna, hammam, masajes. Sin prisas.", type: "highlight" },
      { time: "13:00", title: "Almuerzo ligero en el hotel", desc: "Restaurante L'Horisium o terraza con vista a los viñedos.", type: "normal" },
      { time: "15:30", title: "Tour Dom Pérignon / Moët & Chandon", desc: "Visita a las bodegas en Avenue de Champagne. Degustación vintage. ~€225/persona. Pendiente confirmar reserva.", type: "highlight" },
      { time: "19:30", title: "Cena elegante en LOISIUM", desc: "Vestirse bien. Cocina francesa de temporada + maridaje con champagne. Atardecer sobre viñedos. Reserva confirmada.", type: "highlight" },
    ],
    notes: null,
  },
  {
    id: 4,
    chapter: "Capítulo 4",
    title: "El Gran Día",
    date: "Lunes 7 de julio",
    location: "Viñedos de Champagne · Épernay",
    color: "#8B2E3B",
    accent: "#C4A35A",
    bg: "#F8EEF0",
    route: "https://www.google.com/maps/dir/LOISIUM+Wine+Spa+Hotel+Champagne/Avenue+de+Champagne+%C3%89pernay",
    icon: "💍",
    whatsappImg: null,
    events: [
      { time: "09:00", title: "Mañana sin agenda", desc: "Dormir. Spa. Desayuno largo. Disfrutar el hotel y los viñedos. Dejar que el día fluya.", type: "rest" },
      { time: "12:30", title: "Almuerzo ligero", desc: "En el hotel o alrededores. Nada pesado.", type: "normal" },
      { time: "15:00", title: "💍 LA PROPUESTA — Viñedos de Champagne", desc: "El momento principal. Entre los viñedos de la región. Fotos, celebración, champagne. Dejarle espacio al día.", type: "proposal" },
      { time: "18:00", title: "Check-out LOISIUM → Épernay", desc: "Traslado a La Cave, Avenue de Champagne. Check-in, dejar maletas.", type: "transport" },
      { time: "20:00", title: "Noche sencilla en Épernay", desc: "Comprar champagne, quesos, embutidos. Caminar por Avenue de Champagne como prometidos. Nada lujoso. El contraste perfecto.", type: "highlight" },
    ],
    notes: null,
  },
  {
    id: 5,
    chapter: "Capítulo 5",
    title: "Reencuentro",
    date: "Martes 8 de julio",
    location: "Épernay → París → Bruselas",
    color: "#2D6A4F",
    accent: "#C4A35A",
    bg: "#EBF5F0",
    route: "https://www.google.com/maps/dir/Avenue+de+Champagne+%C3%89pernay/Gare+d%27%C3%89pernay/Gare+de+l%27Est+Paris/Gare+du+Nord+Paris/Trocad%C3%A9ro+Paris/Gare+du+Nord+Paris/Bruxelles-Midi/Brussels+South+Charleroi+Airport/Bruxelles-Midi/Grand+Place+Brussels/MEININGER+Hotel+Bruxelles+City+Center",
    icon: "🚄",
    whatsappImg: {
      day: "DÍA 4",
      msg: "Volvemos a París. Tendrás una sesión de fotos con tu futuro esposo.",
      when: "En el desayuno en Épernay, antes de salir",
    },
    events: [
      { time: "09:00", title: "Desayuno en La Cave Hotel", desc: "Sin afán. Últimas fotos por Avenue de Champagne a la luz del día.", type: "normal" },
      { time: "08:00", title: "📲 Imagen 4 al WhatsApp", desc: "\"Volvemos a París. Tendrás una sesión de fotos con tu futuro esposo. Lo mejor está por venir.\"", type: "whatsapp" },
      { time: "11:00", title: "Check-out La Cave · Caminar a estación", desc: "Estación de Épernay es pequeña. 15 min antes es suficiente.", type: "normal" },
      { time: "11:30", title: "Tren Épernay → París Est", desc: "~1h 15min. Tren TER directo. Reserva confirmada.", type: "transport" },
      { time: "12:50", title: "Dejar maletas en consigna · Gare du Nord", desc: "Gare de l'Est y du Nord están a 5 min caminando. Consigna automática o Nannybag.", type: "normal" },
      { time: "13:15", title: "Almuerzo ligero", desc: "Cerca de Gare du Nord. Algo rápido.", type: "normal" },
      { time: "14:30", title: "Metro a zona Torre Eiffel", desc: "Línea 4 → Línea 6 a Bir-Hakeim. ~25 min.", type: "transport" },
      { time: "15:30", title: "Sesión de fotos — Torre Eiffel", desc: "15:30 a 17:30. Primeras fotos oficiales como comprometidos. Fotógrafo: Alex (Airbnb Experience). Trocadéro, Champ de Mars, puentes del Sena.", type: "highlight" },
      { time: "17:30", title: "Salir hacia Gare du Nord", desc: "Metro o taxi/Uber (~20-25 min). Recoger maletas de consigna.", type: "transport" },
      { time: "18:00", title: "Seguridad + pasaportes Eurostar", desc: "Control equipaje + pasaportes salida Francia + entrada Bélgica. 50 min antes = margen seguro.", type: "normal" },
      { time: "19:25", title: "Eurostar París → Bruselas", desc: "Gare du Nord → Bruxelles-Midi. ~1h 22min. Reserva confirmada.", type: "transport" },
      { time: "20:47", title: "Llegada Bruxelles-Midi", desc: "Dejar maletas en consigna automática de la estación.", type: "normal" },
      { time: "21:20", title: "Flibco shuttle → Charleroi Airport", desc: "Bus directo ~55 min. Sale cada 20-30 min. ~€14-19/persona.", type: "transport" },
      { time: "22:15", title: "Llegada Charleroi Airport", desc: "Esperar a la familia. Café, algo de comer. Vuelo aterriza 22:55.", type: "normal" },
      { time: "23:25", title: "Reencuentro con la familia", desc: "Familia sale por equipaje + aduana (~30 min). Primera vez que los ven después de la propuesta.", type: "highlight" },
      { time: "23:40", title: "Flibco de vuelta → Bruxelles-Midi", desc: "Todos juntos. Último bus ~1:00 AM desde aeropuerto. ~55 min.", type: "transport" },
      { time: "00:35", title: "Llegada Bruxelles-Midi", desc: "Recoger maletas de consigna.", type: "normal" },
      { time: "00:45", title: "Caminata nocturna al hotel", desc: "Todos juntos caminando ~30 min: Bruxelles-Midi → Grand Place iluminada → MEININGER Hotel. El cierre perfecto.", type: "highlight" },
      { time: "~01:15", title: "MEININGER Hotel Bruxelles City Center", desc: "Quai du Hainaut 33. Recepción 24h. Todos en el hotel. Fin del capítulo.", type: "rest" },
    ],
    notes: null,
  },
];

const CHECKLIST = [
  { item: "Hotel París 2 noches (4-5 julio) ✅", cat: "hotel", done: true },
  { item: "LOISIUM Wine & Spa 2 noches (6-7 julio) ✅", cat: "hotel", done: true },
  { item: "La Cave Av. Champagne, Épernay 1 noche (7 julio) ✅", cat: "hotel", done: true },
  { item: "MEININGER Bruselas (8 julio+) ✅", cat: "hotel", done: true },
  { item: "Tren París Est → Épernay 06:36 (6 julio) ✅", cat: "transport", done: true },
  { item: "Tren Épernay → París (8 julio) ✅", cat: "transport", done: true },
  { item: "Eurostar París → Bruselas 19:25 (8 julio) ✅", cat: "transport", done: true },
  { item: "Taxi estación Épernay → LOISIUM (6 julio)", cat: "transport", done: false },
  { item: "Flibco Bruxelles-Midi ↔ Charleroi (ida+vuelta)", cat: "transport", done: false },
  { item: "Consigna maletas Gare du Nord — Nannybag (8 julio)", cat: "transport", done: false },
  { item: "Consigna maletas Bruxelles-Midi (8 julio noche)", cat: "transport", done: false },
  { item: "Tour Moët & Chandon / Dom Pérignon", cat: "activity", done: false },
  { item: "Crucero Sena — Vedettes (5 julio noche) ✅", cat: "activity", done: true },
  { item: "Cena LOISIUM (6 julio) ✅", cat: "activity", done: true },
  { item: "Spa/masajes LOISIUM ✅", cat: "activity", done: true },
  { item: "Fotógrafo Alex (Airbnb) — Torre Eiffel 15:30-17:30 (8 julio) ✅", cat: "activity", done: true },
  { item: "3 imágenes-sorpresa para WhatsApp ✅", cat: "personal", done: true },
  { item: "El anillo 💍 ✅", cat: "personal", done: true },
];

function EventDot({ type }) {
  const colors = {
    highlight: "#C4A35A",
    proposal: "#8B2E3B",
    whatsapp: "#25D366",
    transport: "#6B7B8D",
    normal: "#A0998E",
    rest: "#C4B9A8",
  };
  return (
    <div style={{
      width: 12, height: 12, borderRadius: "50%",
      background: colors[type] || colors.normal,
      border: type === "proposal" ? "2px solid #C4A35A" : "none",
      boxShadow: type === "proposal" ? "0 0 8px rgba(196,163,90,0.5)" : "none",
      flexShrink: 0, marginTop: 5,
    }} />
  );
}

function DayCard({ day, isOpen, onToggle }) {
  return (
    <div style={{
      marginBottom: 16,
      borderRadius: 12,
      overflow: "hidden",
      border: day.id === 4 ? "2px solid #C4A35A" : "1px solid #E5E0D8",
      background: "#FFFDF9",
    }}>
      <button
        onClick={onToggle}
        style={{
          width: "100%", border: "none", cursor: "pointer",
          padding: "16px 20px",
          background: isOpen ? day.bg : "#FFFDF9",
          display: "flex", alignItems: "center", gap: 14,
          textAlign: "left", transition: "background 0.2s",
        }}
      >
        <div style={{
          width: 44, height: 44, borderRadius: "50%",
          background: day.color, display: "flex",
          alignItems: "center", justifyContent: "center",
          fontSize: 20, flexShrink: 0,
        }}>
          {day.icon}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontSize: 11, fontWeight: 600, letterSpacing: 1.5,
            color: day.color, textTransform: "uppercase", marginBottom: 2,
          }}>
            {day.chapter}
          </div>
          <div style={{ fontSize: 17, fontWeight: 600, color: "#2D2A26" }}>
            {day.title}
          </div>
          <div style={{ fontSize: 13, color: "#8A8279", marginTop: 2 }}>
            {day.date} · {day.location}
          </div>
        </div>
        <div style={{
          fontSize: 20, color: "#B0A99E",
          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          transition: "transform 0.2s",
        }}>
          ▾
        </div>
      </button>

      {isOpen && (
        <div style={{ padding: "0 20px 20px", borderTop: "1px solid #E5E0D8" }}>
          {day.route && (
            <a href={day.route} target="_blank" rel="noopener noreferrer" style={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
              fontSize: 14, fontWeight: 600, color: "#fff",
              textDecoration: "none", marginTop: 16, marginBottom: 4,
              padding: "10px 16px", borderRadius: 10,
              background: "#4285F4",
            }}>
              📍 Ver ruta completa en Google Maps
            </a>
          )}          <div style={{ paddingLeft: 6, borderLeft: "2px solid #E5E0D8", marginTop: 16 }}>
            {day.events.map((ev, i) => (
              <div key={i} style={{
                display: "flex", gap: 12, padding: "10px 0 10px 14px",
                borderBottom: i < day.events.length - 1 ? "1px solid #F0EDE6" : "none",
              }}>
                <EventDot type={ev.type} />
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", gap: 8, alignItems: "baseline", flexWrap: "wrap" }}>
                    <span style={{ fontSize: 12, fontWeight: 600, color: "#8A8279", minWidth: 48 }}>
                      {ev.time}
                    </span>
                    <span style={{
                      fontSize: 14, fontWeight: 600,
                      color: ev.type === "proposal" ? "#8B2E3B" : "#2D2A26",
                    }}>
                      {ev.title}
                    </span>
                  </div>
                  <div style={{ fontSize: 13, color: "#6B6560", lineHeight: 1.6, marginTop: 3 }}>
                    {ev.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {day.whatsappImg && (
            <div style={{
              marginTop: 16, padding: "12px 16px",
              background: "#E8F5E2", borderRadius: 8,
              borderLeft: "3px solid #25D366",
            }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: "#25D366", marginBottom: 4 }}>
                📲 IMAGEN WHATSAPP — {day.whatsappImg.day}
              </div>
              <div style={{ fontSize: 13, color: "#2D2A26", fontStyle: "italic" }}>
                "{day.whatsappImg.msg}"
              </div>
              <div style={{ fontSize: 11, color: "#6B6560", marginTop: 4 }}>
                Cuándo: {day.whatsappImg.when}
              </div>
            </div>
          )}

          {day.notes && (
            <div style={{
              marginTop: 12, padding: "12px 16px",
              background: "#FDF8EF", borderRadius: 8,
              borderLeft: "3px solid #C4A35A",
            }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: "#9E8654", marginBottom: 4 }}>
                📋 RESERVAS PENDIENTES
              </div>
              <div style={{ fontSize: 13, color: "#5C553F", lineHeight: 1.6 }}>
                {day.notes}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function Itinerary() {
  const [openDays, setOpenDays] = useState({ 1: false, 2: false, 3: false, 4: true, 5: false });
  const [showChecklist, setShowChecklist] = useState(false);
  const initChecked = {};
  CHECKLIST.forEach((c, i) => { if (c.done) initChecked[i] = true; });
  const [checked, setChecked] = useState(initChecked);

  const toggleDay = (id) => setOpenDays((prev) => ({ ...prev, [id]: !prev[id] }));
  const toggleCheck = (i) => setChecked((prev) => ({ ...prev, [i]: !prev[i] }));

  const catColors = { hotel: "#3B5998", transport: "#2D6A4F", activity: "#C4A35A", personal: "#8B2E3B" };
  const catLabels = { hotel: "Hoteles", transport: "Transporte", activity: "Actividades", personal: "Personal" };

  return (
    <div style={{
      fontFamily: "'Georgia', 'Times New Roman', serif",
      maxWidth: 640, margin: "0 auto", padding: "24px 16px",
      background: "#FFFDF9", minHeight: "100vh",
    }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 32 }}>
        <div style={{
          fontSize: 11, fontWeight: 600, letterSpacing: 3,
          color: "#C4A35A", textTransform: "uppercase", marginBottom: 8,
        }}>
          Operación Champagne
        </div>
        <h1 style={{
          fontSize: 28, fontWeight: 400, color: "#2D2A26",
          margin: "0 0 6px", lineHeight: 1.2,
          fontFamily: "'Georgia', serif",
        }}>
          París — Champagne — Bruselas
        </h1>
        <div style={{ fontSize: 14, color: "#8A8279" }}>
          4 — 8 de julio 2026
        </div>
        <div style={{
          width: 60, height: 1, background: "#C4A35A",
          margin: "16px auto 0",
        }} />
      </div>

      {/* Narrative */}
      <div style={{
        textAlign: "center", fontSize: 14, color: "#6B6560",
        lineHeight: 1.7, marginBottom: 28, padding: "0 12px",
        fontStyle: "italic",
      }}>
        Sorpresa → París → Romance → Champagne → Propuesta → Celebración → Reencuentro familiar
      </div>

      {/* Day Cards */}
      {DAYS.map((day) => (
        <DayCard
          key={day.id}
          day={day}
          isOpen={openDays[day.id]}
          onToggle={() => toggleDay(day.id)}
        />
      ))}

      {/* Checklist Toggle */}
      <button
        onClick={() => setShowChecklist(!showChecklist)}
        style={{
          width: "100%", padding: "14px 20px",
          background: showChecklist ? "#2D2A26" : "#FFFDF9",
          color: showChecklist ? "#FFFDF9" : "#2D2A26",
          border: "1px solid #2D2A26",
          borderRadius: 12, cursor: "pointer",
          fontSize: 15, fontWeight: 600,
          fontFamily: "'Georgia', serif",
          marginTop: 8, marginBottom: 16,
          transition: "all 0.2s",
        }}
      >
        {showChecklist ? "Ocultar checklist" : "📋 Ver checklist de reservas"}
      </button>

      {showChecklist && (
        <div style={{
          border: "1px solid #E5E0D8", borderRadius: 12,
          padding: 20, marginBottom: 24, background: "#FFFDF9",
        }}>
          <div style={{
            fontSize: 11, fontWeight: 600, letterSpacing: 2,
            color: "#C4A35A", textTransform: "uppercase", marginBottom: 16,
          }}>
            Checklist de reservas
          </div>

          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
            {Object.entries(catLabels).map(([key, label]) => (
              <span key={key} style={{
                fontSize: 11, padding: "3px 10px", borderRadius: 20,
                background: catColors[key] + "18", color: catColors[key],
                fontWeight: 600,
              }}>
                {label}
              </span>
            ))}
          </div>

          {CHECKLIST.map((c, i) => (
            <label
              key={i}
              style={{
                display: "flex", alignItems: "center", gap: 12,
                padding: "10px 0",
                borderBottom: i < CHECKLIST.length - 1 ? "1px solid #F0EDE6" : "none",
                cursor: "pointer",
              }}
            >
              <input
                type="checkbox"
                checked={!!checked[i]}
                onChange={() => toggleCheck(i)}
                style={{ width: 18, height: 18, accentColor: catColors[c.cat], cursor: "pointer" }}
              />
              <span style={{
                fontSize: 14, color: checked[i] ? "#B0A99E" : "#2D2A26",
                textDecoration: checked[i] ? "line-through" : "none",
                transition: "all 0.2s", flex: 1,
              }}>
                {c.item}
              </span>
              <span style={{
                fontSize: 10, padding: "2px 8px", borderRadius: 20,
                background: catColors[c.cat] + "18", color: catColors[c.cat],
                fontWeight: 600,
              }}>
                {catLabels[c.cat]}
              </span>
            </label>
          ))}

          <div style={{
            marginTop: 16, textAlign: "center",
            fontSize: 13, color: "#8A8279",
          }}>
            {Object.values(checked).filter(Boolean).length} / {CHECKLIST.length} completados
          </div>
        </div>
      )}

      {/* Footer */}
      <div style={{
        textAlign: "center", padding: "20px 0 8px",
        fontSize: 12, color: "#B0A99E",
        borderTop: "1px solid #E5E0D8",
      }}>
        Cuando lleguen a Bruselas ya no serán simplemente la pareja que salió de Barcelona.
        <br />
        Llegarán comprometidos, con una historia propia de 4 días.
        <div style={{ marginTop: 8, fontSize: 16 }}>💍</div>
      </div>
    </div>
  );
}

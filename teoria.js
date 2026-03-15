// ============================================================
//  TEORIA.JS — Módulo completo de estudos teóricos
//  Simulado DETRAN Pro — Manual interativo do condutor
// ============================================================

(function() {

// ─── CSS ────────────────────────────────────────────────────
const CSS = `
#pg-teoria { font-family: inherit; }
.teoria-header { background: linear-gradient(135deg, #cc0000 0%, #7f0000 100%); padding: 20px 16px 28px; }
.teoria-header-sub { font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: rgba(255,255,255,.55); margin-bottom: 4px; }
.teoria-header-title { font-size: 24px; font-weight: 900; color: #fff; font-family: 'Barlow Condensed', sans-serif; letter-spacing: 1px; }
.teoria-header-desc { font-size: 12px; color: rgba(255,255,255,.65); margin-top: 4px; }
.teoria-progress-bar { height: 4px; background: rgba(255,255,255,.2); border-radius: 2px; margin-top: 12px; }
.teoria-progress-fill { height: 100%; background: #fff; border-radius: 2px; transition: width .5s ease; }

/* Tab nav */
.teoria-tabs { display: flex; overflow-x: auto; background: var(--bg2); border-bottom: 2px solid var(--border); scrollbar-width: none; gap: 0; }
.teoria-tabs::-webkit-scrollbar { display: none; }
.ttab { background: none; border: none; color: var(--muted); font-size: 11px; font-weight: 600; padding: 11px 14px; cursor: pointer; white-space: nowrap; border-bottom: 3px solid transparent; transition: all .2s; text-transform: uppercase; letter-spacing: .5px; flex-shrink: 0; }
.ttab.on, .ttab:hover { color: var(--fg); border-bottom-color: var(--red); }

/* Section */
.tsec { padding: 12px 12px 80px; }
.tsec.hidden { display: none; }
.tsec-title { font-size: 20px; font-weight: 900; font-family: 'Barlow Condensed', sans-serif; color: var(--fg); margin-bottom: 14px; padding-bottom: 10px; border-bottom: 2px solid var(--border); letter-spacing: .5px; display: flex; align-items: center; gap: 8px; }

/* Cards */
.tcard { background: var(--bg3); border-radius: 12px; margin-bottom: 14px; overflow: hidden; border: 1px solid var(--border); }
.tcard-head { background: linear-gradient(90deg, rgba(204,0,0,.12), transparent); padding: 12px 14px; font-weight: 700; font-size: 14px; border-bottom: 1px solid var(--border); display: flex; align-items: center; gap: 8px; }
.tcard-body { padding: 14px; font-size: 13px; line-height: 1.65; color: var(--muted); }
.tcard-body p { margin: 0 0 10px; color: var(--fg); }

/* Info boxes */
.tbox { border-radius: 8px; padding: 10px 13px; font-size: 12px; margin: 10px 0; line-height: 1.55; }
.tbox.red { background: rgba(239,68,68,.1); border-left: 3px solid var(--red); color: #fca5a5; }
.tbox.blue { background: rgba(59,130,246,.1); border-left: 3px solid #3b82f6; color: #93c5fd; }
.tbox.yellow { background: rgba(245,158,11,.1); border-left: 3px solid var(--yellow); color: #fcd34d; }
.tbox.green { background: rgba(34,197,94,.1); border-left: 3px solid #22c55e; color: #86efac; }

/* Tables */
.ttable { width: 100%; border-collapse: collapse; font-size: 12px; margin: 8px 0; }
.ttable th { background: rgba(255,255,255,.06); padding: 8px 10px; text-align: left; font-size: 10px; text-transform: uppercase; letter-spacing: .6px; color: var(--muted); border-bottom: 1px solid var(--border); }
.ttable td { padding: 8px 10px; border-top: 1px solid rgba(255,255,255,.05); color: var(--fg); vertical-align: top; }
.ttable tr:hover td { background: rgba(255,255,255,.03); }

/* Lists */
.tlist { margin: 0; padding-left: 18px; color: var(--fg); }
.tlist li { margin-bottom: 7px; }

/* Badges */
.badge { display: inline-block; border-radius: 4px; padding: 2px 7px; font-size: 10px; font-weight: 700; text-transform: uppercase; margin-right: 4px; }
.badge.reg { background: rgba(204,0,0,.2); color: #fca5a5; }
.badge.adv { background: rgba(245,158,11,.2); color: #fcd34d; }
.badge.ind { background: rgba(21,101,192,.2); color: #93c5fd; }
.badge.esp { background: rgba(192,132,252,.2); color: #e9d5ff; }
.badge.grave { background: rgba(239,68,68,.2); color: #fca5a5; }
.badge.medio { background: rgba(245,158,11,.2); color: #fcd34d; }
.badge.leve { background: rgba(34,197,94,.2); color: #86efac; }

/* Color classes */
.c-green { color: #4ade80; font-weight: 700; }
.c-yellow { color: #fbbf24; font-weight: 700; }
.c-red { color: #f87171; font-weight: 700; }
.c-blue { color: #60a5fa; font-weight: 700; }

/* Steps */
.steps { display: flex; flex-direction: column; gap: 10px; }
.step { display: flex; gap: 12px; align-items: flex-start; }
.step-n { background: var(--red); color: #fff; font-weight: 700; border-radius: 50%; width: 26px; height: 26px; display: flex; align-items: center; justify-content: center; font-size: 12px; flex-shrink: 0; margin-top: 1px; }

/* Info grid */
.info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin: 8px 0; }
.info-item { background: rgba(255,255,255,.04); border-radius: 8px; padding: 10px 12px; font-size: 12px; color: var(--fg); border: 1px solid var(--border); }
.info-item.emergency { background: rgba(239,68,68,.07); border-color: rgba(239,68,68,.25); display: flex; align-items: center; gap: 12px; }
.info-item.emergency .em-num { font-size: 26px; font-weight: 900; color: var(--red); font-family: 'Barlow Condensed', sans-serif; min-width: 40px; }

/* SVG diagram wrapper */
.diagram-wrap { display: flex; justify-content: center; margin: 12px 0; overflow-x: auto; }
.diagram-wrap svg { max-width: 100%; height: auto; }

/* Sign gallery in teoria */
.tsign-row { display: flex; gap: 10px; flex-wrap: wrap; margin: 10px 0; }
.tsign-item { display: flex; flex-direction: column; align-items: center; gap: 6px; background: rgba(255,255,255,.04); border-radius: 10px; padding: 10px 8px; border: 1px solid var(--border); min-width: 80px; flex: 1; max-width: 110px; }
.tsign-item svg { width: 60px; height: 60px; }
.tsign-label { font-size: 10px; color: var(--muted); text-align: center; line-height: 1.3; }
.tsign-code { font-size: 9px; color: var(--red); font-weight: 700; }

/* Traffic light diagram */
.semaforo-row { display: flex; gap: 16px; flex-wrap: wrap; margin: 12px 0; }
.sem-item { display: flex; align-items: center; gap: 10px; background: rgba(255,255,255,.04); border-radius: 10px; padding: 10px 12px; flex: 1; min-width: 200px; border: 1px solid var(--border); }
.sem-light { font-size: 22px; }
.sem-info strong { display: block; font-size: 12px; color: var(--fg); }
.sem-info span { font-size: 11px; color: var(--muted); }

/* Penalidade highlight */
.pen-row { display: flex; gap: 8px; margin: 8px 0; flex-wrap: wrap; }
.pen-box { flex: 1; min-width: 100px; background: rgba(255,255,255,.04); border-radius: 8px; padding: 10px; text-align: center; border: 1px solid var(--border); }
.pen-box .pen-num { font-size: 22px; font-weight: 900; font-family: 'Barlow Condensed', sans-serif; }
.pen-box .pen-label { font-size: 10px; color: var(--muted); text-transform: uppercase; letter-spacing: .5px; }
.pen-box.leve .pen-num { color: #4ade80; }
.pen-box.media .pen-num { color: #fbbf24; }
.pen-box.grave .pen-num { color: #fb923c; }
.pen-box.gravissima .pen-num { color: #f87171; }

/* Mark read button */
.mark-btn { display: inline-flex; align-items: center; gap: 6px; background: rgba(255,255,255,.05); border: 1px solid var(--border); border-radius: 6px; padding: 6px 12px; font-size: 11px; color: var(--muted); cursor: pointer; transition: all .2s; margin-top: 10px; }
.mark-btn.done { background: rgba(34,197,94,.1); border-color: #22c55e; color: #4ade80; }

/* Checklist */
.checklist { list-style: none; padding: 0; margin: 0; }
.checklist li { display: flex; align-items: flex-start; gap: 8px; padding: 6px 0; border-bottom: 1px solid rgba(255,255,255,.05); font-size: 12px; color: var(--fg); }
.checklist li:last-child { border-bottom: none; }
.check-icon { font-size: 14px; flex-shrink: 0; margin-top: 1px; }

/* Comparison blocks */
.compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin: 10px 0; }
.compare-box { border-radius: 8px; padding: 12px; border: 1px solid; }
.compare-box.left { background: rgba(34,197,94,.08); border-color: rgba(34,197,94,.3); }
.compare-box.right { background: rgba(239,68,68,.08); border-color: rgba(239,68,68,.3); }
.compare-box .cb-title { font-weight: 700; font-size: 12px; margin-bottom: 6px; }
.compare-box.left .cb-title { color: #4ade80; }
.compare-box.right .cb-title { color: #f87171; }
.compare-box ul { font-size: 11px; color: var(--fg); padding-left: 14px; margin: 0; }
.compare-box ul li { margin-bottom: 4px; }

@media(max-width:480px) {
  .info-grid, .compare-grid { grid-template-columns: 1fr; }
  .tsign-row { justify-content: center; }
}
`;

// ─── SVG HELPERS ────────────────────────────────────────────
const SVG = {
  reg: (content, size=80) => `<svg viewBox="0 0 100 100" width="${size}" height="${size}"><circle cx="50" cy="50" r="46" fill="white" stroke="#CC0000" stroke-width="7"/>${content}</svg>`,
  adv: (content, size=80) => `<svg viewBox="0 0 100 100" width="${size}" height="${size}"><polygon points="50,5 95,90 5,90" fill="#F5C518" stroke="#333" stroke-width="4"/>${content}</svg>`,
  ind: (content, size=80) => `<svg viewBox="0 0 100 100" width="${size}" height="${size}"><rect x="3" y="3" width="94" height="94" rx="8" fill="#1565C0"/>${content}</svg>`,
  blue: (content, size=80) => `<svg viewBox="0 0 100 100" width="${size}" height="${size}"><circle cx="50" cy="50" r="46" fill="#1565C0" stroke="white" stroke-width="4"/>${content}</svg>`,
  oct: (content, size=80) => `<svg viewBox="0 0 100 100" width="${size}" height="${size}"><polygon points="50,3 79,14 97,40 97,60 79,86 50,97 21,86 3,60 3,40 21,14" fill="#CC0000" stroke="white" stroke-width="3"/>${content}</svg>`,
};

// ─── SECTION CONTENT ────────────────────────────────────────

const SECTIONS = [
  { id:'s-sinalizacao', label:'🚦 Sinalização', icon:'🚦' },
  { id:'s-velocidades',  label:'⚡ Velocidades', icon:'⚡' },
  { id:'s-preferencia',  label:'↩ Preferência', icon:'↩' },
  { id:'s-ultrapassagem',label:'↔ Ultrapassagem', icon:'↔' },
  { id:'s-estacionamento',label:'🅿️ Estacion.', icon:'🅿️' },
  { id:'s-alcool',       label:'🍺 Álcool', icon:'🍺' },
  { id:'s-cnh',          label:'🪪 CNH', icon:'🪪' },
  { id:'s-infracoes',    label:'⚠️ Infrações', icon:'⚠️' },
  { id:'s-primeiros',    label:'🚑 Socorros', icon:'🚑' },
  { id:'s-mecanica',     label:'🔧 Mecânica', icon:'🔧' },
  { id:'s-direcao',      label:'🛡️ Direção Def.', icon:'🛡️' },
];

function buildContent() {
  return {

// ══════════════════════════════════════════════════════════════
's-sinalizacao': `
<div class="tsec-title">🚦 Sinalização de Trânsito</div>

<div class="tcard">
  <div class="tcard-head">📌 Os 4 Grupos de Placas</div>
  <div class="tcard-body">
    <div class="compare-grid" style="grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px;">
      <div style="background:rgba(204,0,0,.08);border:1px solid rgba(204,0,0,.3);border-radius:8px;padding:10px;">
        <div style="font-weight:700;color:#fca5a5;font-size:12px;margin-bottom:4px;">🔴 REGULAMENTAÇÃO (R)</div>
        <div style="font-size:11px;color:var(--fg);">Impõem obrigações ou proibições. Descumprir = infração.</div>
        <div style="font-size:10px;color:var(--muted);margin-top:4px;">Forma: circular borda vermelha / octogonal</div>
      </div>
      <div style="background:rgba(245,158,11,.08);border:1px solid rgba(245,158,11,.3);border-radius:8px;padding:10px;">
        <div style="font-weight:700;color:#fcd34d;font-size:12px;margin-bottom:4px;">⚠️ ADVERTÊNCIA (A)</div>
        <div style="font-size:11px;color:var(--fg);">Alertam sobre perigos à frente. Reduza a velocidade.</div>
        <div style="font-size:10px;color:var(--muted);margin-top:4px;">Forma: triângulo equilátero, fundo amarelo</div>
      </div>
      <div style="background:rgba(21,101,192,.08);border:1px solid rgba(21,101,192,.3);border-radius:8px;padding:10px;">
        <div style="font-weight:700;color:#93c5fd;font-size:12px;margin-bottom:4px;">🔵 INDICAÇÃO (I)</div>
        <div style="font-size:11px;color:var(--fg);">Orientam: destinos, serviços, distâncias.</div>
        <div style="font-size:10px;color:var(--muted);margin-top:4px;">Forma: retangular, fundo azul ou verde</div>
      </div>
      <div style="background:rgba(255,102,0,.08);border:1px solid rgba(255,102,0,.3);border-radius:8px;padding:10px;">
        <div style="font-weight:700;color:#fdba74;font-size:12px;margin-bottom:4px;">🟠 OBRAS / TEMP.</div>
        <div style="font-size:11px;color:var(--fg);">Sinalização temporária. Mesma força legal.</div>
        <div style="font-size:10px;color:var(--muted);margin-top:4px;">Forma: laranja — obras, desvios, emergências</div>
      </div>
    </div>
    <div class="tbox yellow">⚡ <strong>Macete fundamental:</strong> Círculo <span style="color:#93c5fd">AZUL</span> = OBRIGAÇÃO. Círculo com borda <span style="color:#fca5a5">VERMELHA</span> = PROIBIÇÃO ou LIMITE. Triângulo <span style="color:#fcd34d">AMARELO</span> = ADVERTÊNCIA.</div>
  </div>
</div>

<div class="tcard">
  <div class="tcard-head">🛑 Placas de Regulamentação mais cobradas</div>
  <div class="tcard-body">
    <div class="tsign-row">
      <div class="tsign-item">
        ${SVG.oct(`<text x="50" y="60" text-anchor="middle" fill="white" font-size="21" font-weight="bold" font-family="Arial">PARE</text>`, 70)}
        <div class="tsign-label">R-1<br>PARE</div>
        <div class="tsign-code">Gravíssima</div>
      </div>
      <div class="tsign-item">
        ${SVG.reg(`<rect x="18" y="40" width="64" height="20" fill="#CC0000"/>`, 70)}
        <div class="tsign-label">R-2<br>Sentido Proibido</div>
        <div class="tsign-code">Gravíssima</div>
      </div>
      <div class="tsign-item">
        <svg viewBox="0 0 100 100" width="70" height="70"><polygon points="50,97 3,10 97,10" fill="white" stroke="#CC0000" stroke-width="7"/><text x="50" y="58" text-anchor="middle" fill="#CC0000" font-size="10" font-weight="bold" font-family="Arial">DÊ A PREF.</text></svg>
        <div class="tsign-label">R-3<br>Dê a Preferência</div>
        <div class="tsign-code">Grave</div>
      </div>
      <div class="tsign-item">
        ${SVG.reg(`<text x="50" y="63" text-anchor="middle" fill="#CC0000" font-size="36" font-weight="bold" font-family="Arial">60</text>`, 70)}
        <div class="tsign-label">R-6d<br>Vel. Máx. 60</div>
        <div class="tsign-code">Grave se exceder</div>
      </div>
      <div class="tsign-item">
        ${SVG.blue(`<path d="M50,22 L50,78 M50,22 L30,42 M50,22 L70,42" stroke="white" stroke-width="10" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`, 70)}
        <div class="tsign-label">R-24a<br>Sent. Obrig. Frente</div>
        <div class="tsign-code">Grave</div>
      </div>
      <div class="tsign-item">
        ${SVG.blue(`<circle cx="50" cy="50" r="18" fill="none" stroke="white" stroke-width="5"/><path d="M50,32 A18,18 0 1,1 32,50 L36,50 L28,44 L22,50 L28,56 L36,50" stroke="white" stroke-width="4" fill="none"/>`, 70)}
        <div class="tsign-label">R-28<br>Rotatória</div>
        <div class="tsign-code">Grave</div>
      </div>
    </div>
    <table class="ttable" style="margin-top:12px;">
      <tr><th>Placa</th><th>Nome</th><th>Detalhe importante</th></tr>
      <tr><td>R-1</td><td>PARE</td><td>Parada <strong>total</strong> — mesmo sem outros veículos</td></tr>
      <tr><td>R-2</td><td>Sentido Proibido</td><td>Fundo vermelho + faixa branca horizontal</td></tr>
      <tr><td>R-3</td><td>Dê a Preferência</td><td>Triângulo invertido — reduza e ceda passagem</td></tr>
      <tr><td>R-4a</td><td>Proibido Ultrapassar</td><td>Termina no próximo cruzamento ou placa de fim</td></tr>
      <tr><td>R-5a</td><td>Proibido Estacionar</td><td>1 risco = pode PARAR brevemente</td></tr>
      <tr><td>R-5b</td><td>Proibido Parar e Estacionar</td><td>2 riscos em X = nem parada rápida é permitida</td></tr>
      <tr><td>R-7</td><td>Velocidade Mínima 40</td><td>Círculo <span class="c-blue">AZUL</span> com número branco</td></tr>
      <tr><td>R-24a–f</td><td>Sentido Obrigatório</td><td>Círculo azul com seta branca</td></tr>
      <tr><td>R-28</td><td>Sentido na Rotatória</td><td>Anti-horário obrigatório no Brasil</td></tr>
    </table>
  </div>
</div>

<div class="tcard">
  <div class="tcard-head">⚠️ Placas de Advertência mais cobradas</div>
  <div class="tcard-body">
    <div class="tsign-row">
      <div class="tsign-item">
        ${SVG.adv(`<path d="M55,78 L55,52 Q55,32 38,32 L30,32 L30,24 L20,38 L30,52 L30,46 Q47,46 47,56 L47,78 Z" fill="#333"/>`, 70)}
        <div class="tsign-label">A-1<br>Curva Esquerda</div>
      </div>
      <div class="tsign-item">
        ${SVG.adv(`<rect x="40" y="28" width="14" height="38" fill="#333"/><rect x="20" y="46" width="24" height="13" fill="#333"/>`, 70)}
        <div class="tsign-label">A-5<br>Interseção T</div>
      </div>
      <div class="tsign-item">
        ${SVG.adv(`<circle cx="50" cy="62" r="18" fill="none" stroke="#333" stroke-width="5"/><path d="M50,44 L50,52" stroke="#333" stroke-width="4" stroke-linecap="round"/>`, 70)}
        <div class="tsign-label">A-8<br>Rotatória</div>
      </div>
      <div class="tsign-item">
        ${SVG.adv(`<rect x="38" y="22" width="10" height="4" rx="2" fill="#333"/><rect x="44" y="26" width="12" height="40" fill="#333"/><rect x="28" y="68" width="44" height="9" rx="2" fill="#333"/>`, 70)}
        <div class="tsign-label">A-10<br>Obras</div>
      </div>
      <div class="tsign-item">
        ${SVG.adv(`<ellipse cx="50" cy="66" rx="28" ry="12" fill="#333"/><rect x="22" y="74" width="56" height="7" fill="#333"/>`, 70)}
        <div class="tsign-label">A-11<br>Lombada</div>
      </div>
      <div class="tsign-item">
        ${SVG.adv(`<circle cx="50" cy="42" r="9" fill="#333"/><path d="M50,54 L50,72 M50,62 L40,70 M50,62 L60,70 M50,72 L42,84 M50,72 L58,84" stroke="#333" stroke-width="5" fill="none" stroke-linecap="round"/>`, 70)}
        <div class="tsign-label">A-17<br>Área Escolar</div>
      </div>
    </div>
    <div class="tbox yellow">⚡ Placas de advertência <strong>não exigem parada</strong> — apenas atenção e redução de velocidade adequada.</div>
    <table class="ttable" style="margin-top:8px;">
      <tr><th>Placa</th><th>O que há à frente</th></tr>
      <tr><td>A-1 / A-2</td><td>Curva acentuada à esquerda / direita</td></tr>
      <tr><td>A-9</td><td>Semáforo — prepare para possível parada</td></tr>
      <tr><td>A-11</td><td>Lombada — reduza para no máximo 30 km/h</td></tr>
      <tr><td>A-12</td><td>Depressão (buraco) — reduza bastante</td></tr>
      <tr><td>A-13</td><td>Pista escorregadia — aumente distância</td></tr>
      <tr><td>A-14</td><td>Passagem de nível COM cancela</td></tr>
      <tr><td>A-15</td><td>Passagem de nível SEM cancela — pare, olhe e ouça</td></tr>
      <tr><td>A-17</td><td>Área escolar — 30 km/h com atenção total a crianças</td></tr>
      <tr><td>A-27/28</td><td>Subida / Descida acentuada — use marcha adequada</td></tr>
      <tr><td>A-29</td><td>Névoa frequente — use farol de neblina</td></tr>
      <tr><td>A-38</td><td>Perigo não especificado (!) — veja placa complementar</td></tr>
    </table>
  </div>
</div>

<div class="tcard">
  <div class="tcard-head">🟡 Marcas no Pavimento — Gabarito completo</div>
  <div class="tcard-body">
    <div class="diagram-wrap">
      <svg viewBox="0 0 360 220" width="360" height="220" style="background:#2a2a2a;border-radius:8px;">
        <!-- Road -->
        <rect x="0" y="0" width="360" height="220" fill="#333"/>
        <!-- Left edge white -->
        <line x1="20" y1="0" x2="20" y2="220" stroke="white" stroke-width="4"/>
        <!-- Right edge white -->
        <line x1="340" y1="0" x2="340" y2="220" stroke="white" stroke-width="4"/>
        <!-- Center yellow continuous -->
        <line x1="90" y1="0" x2="90" y2="220" stroke="#F5C518" stroke-width="4"/>
        <!-- Center yellow dashed -->
        <line x1="190" y1="0" x2="190" y2="220" stroke="#F5C518" stroke-width="4" stroke-dasharray="20,15"/>
        <!-- White dashed between lanes right side -->
        <line x1="270" y1="0" x2="270" y2="220" stroke="white" stroke-width="3" stroke-dasharray="20,15"/>
        <!-- Labels -->
        <text x="55" y="25" fill="white" font-size="9" text-anchor="middle" font-family="Arial">Borda</text>
        <text x="55" y="36" fill="white" font-size="9" text-anchor="middle" font-family="Arial">pista</text>
        <text x="90" y="55" fill="#F5C518" font-size="8" text-anchor="middle" font-family="Arial">Contínua</text>
        <text x="90" y="65" fill="#F5C518" font-size="8" text-anchor="middle" font-family="Arial">amarela</text>
        <text x="90" y="75" fill="#fca5a5" font-size="8" text-anchor="middle" font-family="Arial">PROIBIDO</text>
        <text x="90" y="85" fill="#fca5a5" font-size="8" text-anchor="middle" font-family="Arial">ultrapassar</text>
        <text x="190" y="55" fill="#F5C518" font-size="8" text-anchor="middle" font-family="Arial">Tracejada</text>
        <text x="190" y="65" fill="#F5C518" font-size="8" text-anchor="middle" font-family="Arial">amarela</text>
        <text x="190" y="75" fill="#86efac" font-size="8" text-anchor="middle" font-family="Arial">PODE</text>
        <text x="190" y="85" fill="#86efac" font-size="8" text-anchor="middle" font-family="Arial">ultrapassar</text>
        <text x="270" y="55" fill="white" font-size="8" text-anchor="middle" font-family="Arial">Tracejada</text>
        <text x="270" y="65" fill="white" font-size="8" text-anchor="middle" font-family="Arial">branca</text>
        <text x="270" y="75" fill="#86efac" font-size="8" text-anchor="middle" font-family="Arial">PODE mudar</text>
        <text x="270" y="85" fill="#86efac" font-size="8" text-anchor="middle" font-family="Arial">de faixa</text>
        <!-- Pedestrian crossing -->
        <rect x="0" y="140" width="360" height="12" fill="white" opacity=".9"/>
        <rect x="0" y="158" width="360" height="12" fill="white" opacity=".9"/>
        <text x="180" y="185" fill="white" font-size="10" text-anchor="middle" font-family="Arial">Faixa de Pedestres (Zebra) — sempre branca</text>
        <!-- Retention line -->
        <rect x="0" y="200" width="360" height="5" fill="white"/>
        <text x="180" y="215" fill="white" font-size="9" text-anchor="middle" font-family="Arial">Linha de retenção — pare ANTES desta linha</text>
      </svg>
    </div>
    <table class="ttable">
      <tr><th>Marca</th><th>Cor</th><th>Significado</th></tr>
      <tr><td>Linha contínua central</td><td class="c-yellow">Amarela</td><td>Proibido ultrapassar (ambos sentidos)</td></tr>
      <tr><td>Linha tracejada central</td><td class="c-yellow">Amarela</td><td>Pode ultrapassar quando seguro</td></tr>
      <tr><td>Linha contínua lateral</td><td>Branca</td><td>Borda da pista — não pisar/cruzar</td></tr>
      <tr><td>Linha tracejada lateral</td><td>Branca</td><td>Pode mudar de faixa com segurança</td></tr>
      <tr><td>Faixa de pedestres (zebra)</td><td>Branca</td><td>Ceder passagem ao pedestre</td></tr>
      <tr><td>Linha de retenção</td><td>Branca transversal</td><td>Parar antes desta linha no semáforo / PARE</td></tr>
      <tr><td>Setas no pavimento</td><td>Branca</td><td>Sentido obrigatório de circulação na faixa</td></tr>
      <tr><td>PARE no asfalto</td><td>Branca</td><td>Reforça a placa R-1 — parada total</td></tr>
    </table>
    <div class="tbox yellow">⚡ <strong>Macete:</strong> AMARELO = separa sentidos opostos. BRANCO = organiza o mesmo sentido ou borda.</div>
  </div>
</div>

<div class="tcard">
  <div class="tcard-head">🚦 Semáforos — Todas as situações</div>
  <div class="tcard-body">
    <div class="semaforo-row">
      <div class="sem-item"><span class="sem-light">🟢</span><div class="sem-info"><strong>Verde — Siga</strong><span>Via livre. Observe pedestres antes de avançar.</span></div></div>
      <div class="sem-item"><span class="sem-light">🟡</span><div class="sem-info"><strong>Amarelo — Atenção</strong><span>Pare se puder com segurança. NÃO é sinal para acelerar.</span></div></div>
      <div class="sem-item"><span class="sem-light">🔴</span><div class="sem-info"><strong>Vermelho — Pare</strong><span>Parada obrigatória antes da faixa de pedestres. Gravíssima se avançar (7 pts).</span></div></div>
    </div>
    <div class="semaforo-row">
      <div class="sem-item"><div style="font-size:22px;animation:blink 1s step-end infinite">🟡</div><div class="sem-info"><strong>Amarelo Piscante</strong><span>Atenção — cruzamento sem preferência definida. Preferência de quem vem pela direita.</span></div></div>
      <div class="sem-item"><div style="font-size:22px;">🔴</div><div class="sem-info"><strong>Vermelho Piscante</strong><span>Equivale ao PARE. Parada total obrigatória. Gravíssima se avançar.</span></div></div>
      <div class="sem-item"><div style="font-size:22px;">🟢</div><div class="sem-info"><strong>Verde Piscante</strong><span>Sinal vai fechar. Prepare-se para parar. Sem penalidade específica.</span></div></div>
    </div>
    <div class="tbox red">🚨 Avançar sinal vermelho = <strong>Gravíssima</strong> — 7 pontos + multa R$ 293,47.</div>
  </div>
</div>`,

// ══════════════════════════════════════════════════════════════
's-velocidades': `
<div class="tsec-title">⚡ Limites de Velocidade</div>

<div class="tcard">
  <div class="tcard-head">📋 Tabela Oficial (CTB Art. 61)</div>
  <div class="tcard-body">
    <div class="diagram-wrap">
      <svg viewBox="0 0 360 260" width="360" height="260" style="background:var(--bg2);border-radius:8px;padding:4px;">
        <!-- Headers -->
        <rect x="0" y="0" width="360" height="30" rx="4" fill="rgba(204,0,0,.3)"/>
        <text x="90" y="20" fill="white" font-size="10" text-anchor="middle" font-family="Arial" font-weight="bold">TIPO DE VIA</text>
        <text x="210" y="20" fill="white" font-size="10" text-anchor="middle" font-family="Arial" font-weight="bold">AUTO/MOTO</text>
        <text x="310" y="20" fill="white" font-size="10" text-anchor="middle" font-family="Arial" font-weight="bold">CAMINH./ÔN.</text>
        <!-- Row 1 -->
        <rect x="0" y="32" width="360" height="36" fill="rgba(255,255,255,.04)"/>
        <text x="90" y="47" fill="#e2e8f0" font-size="10" text-anchor="middle" font-family="Arial">Rodovia pista dupla</text>
        <text x="210" y="52" fill="#4ade80" font-size="18" text-anchor="middle" font-family="Arial" font-weight="bold">110</text>
        <text x="310" y="52" fill="#fbbf24" font-size="18" text-anchor="middle" font-family="Arial" font-weight="bold">90</text>
        <!-- Row 2 -->
        <rect x="0" y="70" width="360" height="36" fill="rgba(255,255,255,.02)"/>
        <text x="90" y="85" fill="#e2e8f0" font-size="10" text-anchor="middle" font-family="Arial">Rodovia pista simples</text>
        <text x="210" y="90" fill="#4ade80" font-size="18" text-anchor="middle" font-family="Arial" font-weight="bold">100</text>
        <text x="310" y="90" fill="#fbbf24" font-size="18" text-anchor="middle" font-family="Arial" font-weight="bold">90</text>
        <!-- Row 3 -->
        <rect x="0" y="108" width="360" height="36" fill="rgba(255,255,255,.04)"/>
        <text x="90" y="123" fill="#e2e8f0" font-size="10" text-anchor="middle" font-family="Arial">Via arterial urbana</text>
        <text x="210" y="128" fill="#fbbf24" font-size="18" text-anchor="middle" font-family="Arial" font-weight="bold">60</text>
        <text x="310" y="128" fill="#fbbf24" font-size="18" text-anchor="middle" font-family="Arial" font-weight="bold">60</text>
        <!-- Row 4 -->
        <rect x="0" y="146" width="360" height="36" fill="rgba(255,255,255,.02)"/>
        <text x="90" y="161" fill="#e2e8f0" font-size="10" text-anchor="middle" font-family="Arial">Via coletora urbana</text>
        <text x="210" y="166" fill="#fb923c" font-size="18" text-anchor="middle" font-family="Arial" font-weight="bold">40</text>
        <text x="310" y="166" fill="#fb923c" font-size="18" text-anchor="middle" font-family="Arial" font-weight="bold">40</text>
        <!-- Row 5 -->
        <rect x="0" y="184" width="360" height="36" fill="rgba(255,255,255,.04)"/>
        <text x="90" y="199" fill="#e2e8f0" font-size="10" text-anchor="middle" font-family="Arial">Via local / Área escolar</text>
        <text x="210" y="204" fill="#f87171" font-size="18" text-anchor="middle" font-family="Arial" font-weight="bold">30</text>
        <text x="310" y="204" fill="#f87171" font-size="18" text-anchor="middle" font-family="Arial" font-weight="bold">30</text>
        <!-- Note -->
        <text x="180" y="248" fill="#94a3b8" font-size="9" text-anchor="middle" font-family="Arial">* Velocidades em km/h. Farol baixo obrigatório 24h em rodovias.</text>
      </svg>
    </div>
    <div class="tbox yellow">⚡ <strong>Atenção:</strong> O farol baixo é obrigatório em rodovias <strong>24 horas por dia</strong> — inclusive de dia.</div>
  </div>
</div>

<div class="tcard">
  <div class="tcard-head">⚖️ Penalidades por Excesso de Velocidade</div>
  <div class="tcard-body">
    <div class="pen-row">
      <div class="pen-box grave"><div class="pen-num">5 pts</div><div class="pen-label">Até 20% acima</div><div style="font-size:10px;color:var(--fg);margin-top:4px;">R$ 195,23</div></div>
      <div class="pen-box gravissima"><div class="pen-num">14 pts</div><div class="pen-label">20% a 50% acima</div><div style="font-size:10px;color:var(--fg);margin-top:4px;">R$ 586,94</div></div>
      <div class="pen-box gravissima" style="border:2px solid #f87171;"><div class="pen-num">21 pts</div><div class="pen-label">Acima de 50%</div><div style="font-size:10px;color:var(--fg);margin-top:4px;">R$ 880,41</div></div>
    </div>
    <div class="tbox red">🚨 Exceder 50% da velocidade = <strong>21 pontos</strong> na CNH (fator ×3). Em área escolar: penalidade ainda maior.</div>
    <table class="ttable" style="margin-top:10px;">
      <tr><th>Exemplo prático</th><th>Limite</th><th>Até</th><th>20–50%</th><th>>50%</th></tr>
      <tr><td>Zona escolar</td><td>30 km/h</td><td>36 km/h</td><td>36–45 km/h</td><td>>45 km/h</td></tr>
      <tr><td>Via arterial</td><td>60 km/h</td><td>72 km/h</td><td>72–90 km/h</td><td>>90 km/h</td></tr>
      <tr><td>Rodovia simples</td><td>100 km/h</td><td>120 km/h</td><td>120–150 km/h</td><td>>150 km/h</td></tr>
    </table>
  </div>
</div>

<div class="tcard">
  <div class="tcard-head">🌧️ Velocidade em Condições Adversas</div>
  <div class="tcard-body">
    <ul class="tlist">
      <li>🌧️ <strong>Pista molhada:</strong> Reduza ~20% — distância de frenagem pode <strong>triplicar</strong></li>
      <li>🌫️ <strong>Neblina densa:</strong> Reduza 50%+ — use farol de neblina ou baixo</li>
      <li>❄️ <strong>Gelo ou neve:</strong> Reduza 50%+ — marchas baixas + maior distância</li>
      <li>🚧 <strong>Obras na pista:</strong> Respeite o limite indicado (geralmente 30 km/h)</li>
      <li>🏫 <strong>Zona escolar:</strong> 30 km/h — atenção máxima nos horários de entrada/saída</li>
      <li>🌃 <strong>Período noturno:</strong> Reduza moderadamente — menor visibilidade e reação</li>
    </ul>
  </div>
</div>`,

// ══════════════════════════════════════════════════════════════
's-preferencia': `
<div class="tsec-title">↩ Preferência de Passagem</div>

<div class="tcard">
  <div class="tcard-head">📌 Regras de Preferência — Resumo</div>
  <div class="tcard-body">
    <table class="ttable">
      <tr><th>Situação</th><th>Quem tem preferência</th><th>Base legal</th></tr>
      <tr><td>Cruzamento sem sinalização</td><td>Quem vem pela <span class="c-green">direita</span></td><td>CTB Art. 29, III</td></tr>
      <tr><td>Rotatória</td><td>Quem já está <span class="c-green">dentro</span></td><td>CTB Art. 29, III</td></tr>
      <tr><td>Via com placa de preferência</td><td>Quem está na via <span class="c-green">preferencial</span></td><td>Sinalização</td></tr>
      <tr><td>Subida × descida em pista simples</td><td>Quem está <span class="c-green">subindo</span></td><td>CTB Art. 29, V</td></tr>
      <tr><td>Pedestre na faixa</td><td><span class="c-green">O pedestre sempre</span></td><td>CTB Art. 70</td></tr>
      <tr><td>Veículo de emergência (sirene)</td><td><span class="c-green">O veículo de emergência</span></td><td>CTB Art. 29, VII</td></tr>
      <tr><td>Faixa da direita em rodovias</td><td>Veículos mais lentos usam a <span class="c-green">direita</span></td><td>CTB Art. 29, II</td></tr>
    </table>
  </div>
</div>

<div class="tcard">
  <div class="tcard-head">🔄 Diagrama: Cruzamento sem Sinalização</div>
  <div class="tcard-body">
    <div class="diagram-wrap">
      <svg viewBox="0 0 280 280" width="260" height="260" style="background:var(--bg2);border-radius:8px;">
        <!-- Roads -->
        <rect x="110" y="0" width="60" height="280" fill="#444"/>
        <rect x="0" y="110" width="280" height="60" fill="#444"/>
        <!-- Center intersection -->
        <rect x="110" y="110" width="60" height="60" fill="#555"/>
        <!-- Lane markings -->
        <line x1="140" y1="0" x2="140" y2="108" stroke="#F5C518" stroke-width="2" stroke-dasharray="10,8"/>
        <line x1="140" y1="172" x2="140" y2="280" stroke="#F5C518" stroke-width="2" stroke-dasharray="10,8"/>
        <line x1="0" y1="140" x2="108" y2="140" stroke="#F5C518" stroke-width="2" stroke-dasharray="10,8"/>
        <line x1="172" y1="140" x2="280" y2="140" stroke="#F5C518" stroke-width="2" stroke-dasharray="10,8"/>
        <!-- Car A coming from left -->
        <rect x="40" y="118" width="36" height="22" rx="4" fill="#3b82f6"/>
        <text x="58" y="133" text-anchor="middle" fill="white" font-size="10" font-weight="bold" font-family="Arial">A</text>
        <path d="M78,129 L88,129 M85,126 L88,129 L85,132" stroke="#3b82f6" stroke-width="2" fill="none"/>
        <!-- Car B coming from bottom -->
        <rect x="118" y="195" width="22" height="36" rx="4" fill="#f87171"/>
        <text x="129" y="218" text-anchor="middle" fill="white" font-size="10" font-weight="bold" font-family="Arial">B</text>
        <path d="M129,193 L129,183 M126,186 L129,183 L132,186" stroke="#f87171" stroke-width="2" fill="none"/>
        <!-- Arrow indicating B has right-of-way -->
        <circle cx="129" cy="165" r="12" fill="rgba(34,197,94,.3)" stroke="#22c55e" stroke-width="2"/>
        <text x="129" y="169" text-anchor="middle" fill="#4ade80" font-size="10" font-weight="bold" font-family="Arial">✓</text>
        <!-- Labels -->
        <text x="58" y="108" fill="#93c5fd" font-size="9" text-anchor="middle" font-family="Arial">Veículo A</text>
        <text x="58" y="98" fill="#93c5fd" font-size="9" text-anchor="middle" font-family="Arial">(vem da esquerda)</text>
        <text x="165" y="218" fill="#fca5a5" font-size="9" text-anchor="middle" font-family="Arial">Veículo B</text>
        <text x="165" y="228" fill="#fca5a5" font-size="9" text-anchor="middle" font-family="Arial">(vem da direita)</text>
        <text x="140" y="268" fill="#4ade80" font-size="9" text-anchor="middle" font-family="Arial">B tem preferência — vem pela direita de A</text>
      </svg>
    </div>
    <div class="tbox blue">💡 B vem pela direita de A. Logo, B tem preferência. A deve aguardar.</div>
  </div>
</div>

<div class="tcard">
  <div class="tcard-head">🔄 Rotatória — Quem tem preferência?</div>
  <div class="tcard-body">
    <div class="diagram-wrap">
      <svg viewBox="0 0 260 260" width="240" height="240" style="background:var(--bg2);border-radius:8px;">
        <!-- Outer roads -->
        <rect x="110" y="0" width="40" height="90" fill="#444"/>
        <rect x="110" y="170" width="40" height="90" fill="#444"/>
        <rect x="0" y="110" width="90" height="40" fill="#444"/>
        <rect x="170" y="110" width="90" height="40" fill="#444"/>
        <!-- Roundabout -->
        <circle cx="130" cy="130" r="80" fill="#444"/>
        <circle cx="130" cy="130" r="55" fill="#333"/>
        <circle cx="130" cy="130" r="30" fill="#555"/>
        <!-- Direction arrows on roundabout (anti-clockwise) -->
        <path d="M130,75 A55,55 0 0,0 75,130" fill="none" stroke="#F5C518" stroke-width="3" marker-end="url(#arr)"/>
        <path d="M75,130 A55,55 0 0,0 130,185" fill="none" stroke="#F5C518" stroke-width="3"/>
        <path d="M130,185 A55,55 0 0,0 185,130" fill="none" stroke="#F5C518" stroke-width="3"/>
        <path d="M185,130 A55,55 0 0,0 130,75" fill="none" stroke="#F5C518" stroke-width="3"/>
        <!-- Car inside -->
        <rect x="118" y="88" width="24" height="16" rx="3" fill="#4ade80"/>
        <text x="130" y="100" text-anchor="middle" fill="white" font-size="8" font-weight="bold" font-family="Arial">PREF.</text>
        <!-- Car entering -->
        <rect x="152" y="118" width="16" height="24" rx="3" fill="#f87171"/>
        <text x="160" y="134" text-anchor="middle" fill="white" font-size="7" font-weight="bold" font-family="Arial">CEDE</text>
        <!-- Labels -->
        <text x="130" y="248" fill="#94a3b8" font-size="9" text-anchor="middle" font-family="Arial">Quem está dentro tem preferência absoluta</text>
        <text x="130" y="258" fill="#94a3b8" font-size="9" text-anchor="middle" font-family="Arial">Sentido: anti-horário no Brasil</text>
      </svg>
    </div>
    <div class="tbox green">✅ Quem já circula na rotatória tem preferência. Quem entra deve ceder.</div>
  </div>
</div>`,

// ══════════════════════════════════════════════════════════════
's-ultrapassagem': `
<div class="tsec-title">↔️ Ultrapassagem</div>

<div class="tcard">
  <div class="tcard-head">✅ Como fazer uma ultrapassagem segura</div>
  <div class="tcard-body">
    <div class="steps">
      <div class="step"><span class="step-n">1</span><div><strong>Verifique a visibilidade</strong> — visão completa da pista à frente. Nenhum obstáculo ou curva.</div></div>
      <div class="step"><span class="step-n">2</span><div><strong>Avalie o espaço</strong> — distância suficiente para ultrapassar e retornar à faixa.</div></div>
      <div class="step"><span class="step-n">3</span><div><strong>Sinalize</strong> — ligue o pisca-esquerdo com antecedência mínima de 30 metros.</div></div>
      <div class="step"><span class="step-n">4</span><div><strong>Passe pelo lado esquerdo</strong> — sempre pela esquerda do veículo ultrapassado.</div></div>
      <div class="step"><span class="step-n">5</span><div><strong>Retorne</strong> — ligue o pisca-direito e retorne à faixa com segurança.</div></div>
    </div>
    <div class="tbox blue">💡 O veículo ultrapassado <strong>não deve acelerar</strong>. Facilite a manobra.</div>
  </div>
</div>

<div class="tcard">
  <div class="tcard-head">🚫 PROIBIDO Ultrapassar — CTB Art. 35</div>
  <div class="tcard-body">
    <div class="compare-grid">
      <div class="compare-box right">
        <div class="cb-title">🚫 NUNCA ultrapassar em:</div>
        <ul>
          <li>Curvas sem visibilidade</li>
          <li>Lombadas (topo)</li>
          <li>Pontes e viadutos</li>
          <li>Túneis</li>
          <li>Cruzamentos e interseções</li>
          <li>Passagens de nível</li>
          <li>Linha contínua amarela</li>
          <li>Faixas de pedestres</li>
          <li>Pelo acostamento <span class="badge grave">Gravíssima</span></li>
        </ul>
      </div>
      <div class="compare-box left">
        <div class="cb-title">✅ Pode ultrapassar pela DIREITA quando:</div>
        <ul>
          <li>Veículo à frente sinaliza conversão à esquerda</li>
          <li>Via com múltiplas faixas no mesmo sentido</li>
        </ul>
        <div style="margin-top:8px;font-size:11px;color:var(--muted);">Em todos os outros casos: sempre pela <strong>esquerda</strong>.</div>
      </div>
    </div>
  </div>
</div>

<div class="tcard">
  <div class="tcard-head">📏 Distância de Segurança × Velocidade</div>
  <div class="tcard-body">
    <div class="diagram-wrap">
      <svg viewBox="0 0 340 160" width="340" height="160" style="background:var(--bg2);border-radius:8px;">
        <!-- Road -->
        <rect x="0" y="55" width="340" height="50" fill="#444"/>
        <line x1="0" y1="80" x2="340" y2="80" stroke="#F5C518" stroke-width="2" stroke-dasharray="12,8"/>
        <!-- Car A front -->
        <rect x="270" y="62" width="50" height="36" rx="5" fill="#3b82f6"/>
        <text x="295" y="85" text-anchor="middle" fill="white" font-size="11" font-weight="bold" font-family="Arial">A</text>
        <!-- Car B behind -->
        <rect x="20" y="62" width="50" height="36" rx="5" fill="#f87171"/>
        <text x="45" y="85" text-anchor="middle" fill="white" font-size="11" font-weight="bold" font-family="Arial">B</text>
        <!-- Distance arrows -->
        <line x1="72" y1="108" x2="268" y2="108" stroke="white" stroke-width="1.5"/>
        <path d="M72,105 L72,111 M268,105 L268,111" stroke="white" stroke-width="1.5"/>
        <text x="170" y="125" text-anchor="middle" fill="white" font-size="9" font-family="Arial">Distância de segurança</text>
        <!-- Speed indicators -->
        <text x="45" y="52" text-anchor="middle" fill="#fca5a5" font-size="10" font-family="Arial" font-weight="bold">60 km/h → ~30m</text>
        <text x="170" y="148" text-anchor="middle" fill="#fcd34d" font-size="9" font-family="Arial">80 km/h → ~50m | 100 km/h → ~70m | 110 km/h → ~85m</text>
      </svg>
    </div>
    <p>O tempo médio de reação humana é <strong>0,8 a 1 segundo</strong>. A 110 km/h, o veículo percorre <strong>~30 metros</strong> antes de você pisar o freio.</p>
    <div class="tbox yellow">⚡ <strong>Ao ultrapassar ciclistas:</strong> distância lateral mínima de <strong>1,5 metro</strong>.</div>
  </div>
</div>`,

// ══════════════════════════════════════════════════════════════
's-estacionamento': `
<div class="tsec-title">🅿️ Estacionamento e Parada</div>

<div class="tcard">
  <div class="tcard-head">📌 PARAR vs ESTACIONAR — diferença crucial</div>
  <div class="tcard-body">
    <div class="compare-grid">
      <div class="compare-box left">
        <div class="cb-title">✅ PARAR (R-5a = 1 risco)</div>
        <ul>
          <li>Imobilização breve e temporária</li>
          <li>Para embarque/desembarque rápido</li>
          <li>Condutor permanece no veículo</li>
          <li>Pronto para mover imediatamente</li>
        </ul>
      </div>
      <div class="compare-box right">
        <div class="cb-title">🚫 ESTACIONAR (R-5b = 2 riscos)</div>
        <ul>
          <li>Imobilização por tempo maior</li>
          <li>Condutor pode sair do veículo</li>
          <li>Veículo fica sem vigilância</li>
        </ul>
      </div>
    </div>
    <div class="tbox red">🚨 R-5a (um risco) = proibido ESTACIONAR, mas pode PARAR brevemente. R-5b (dois riscos em X) = proibido até PARAR.</div>
  </div>
</div>

<div class="tcard">
  <div class="tcard-head">🔄 Posição das Rodas — Estacionamento em rampas</div>
  <div class="tcard-body">
    <div class="diagram-wrap">
      <svg viewBox="0 0 340 200" width="340" height="200" style="background:var(--bg2);border-radius:8px;">
        <!-- Left: Uphill with curb -->
        <text x="85" y="18" fill="white" font-size="10" text-anchor="middle" font-family="Arial" font-weight="bold">Subida + Guia</text>
        <!-- Road uphill -->
        <line x1="10" y1="150" x2="160" y2="60" stroke="#555" stroke-width="35"/>
        <line x1="10" y1="155" x2="160" y2="65" stroke="#666" stroke-width="4"/>
        <!-- Curb -->
        <line x1="10" y1="158" x2="165" y2="68" stroke="#888" stroke-width="6"/>
        <!-- Car -->
        <g transform="rotate(-30, 80, 115)">
          <rect x="60" y="98" width="40" height="24" rx="3" fill="#3b82f6"/>
          <!-- Front left wheel turned left (outward = away from curb) -->
          <rect x="58" y="100" width="8" height="5" rx="1" fill="#888" transform="rotate(-15, 62, 102.5)"/>
          <rect x="74" y="117" width="8" height="5" rx="1" fill="#888"/>
        </g>
        <text x="85" y="175" fill="#4ade80" font-size="10" text-anchor="middle" font-family="Arial">Rodas para ESQUERDA</text>
        <text x="85" y="188" fill="#94a3b8" font-size="9" text-anchor="middle" font-family="Arial">(Se rolar, guia bloqueia)</text>

        <!-- Right: Downhill with curb -->
        <text x="255" y="18" fill="white" font-size="10" text-anchor="middle" font-family="Arial" font-weight="bold">Descida + Guia</text>
        <!-- Road downhill -->
        <line x1="175" y1="60" x2="330" y2="150" stroke="#555" stroke-width="35"/>
        <line x1="175" y1="65" x2="330" y2="155" stroke="#666" stroke-width="4"/>
        <!-- Curb -->
        <line x1="175" y1="68" x2="332" y2="158" stroke="#888" stroke-width="6"/>
        <!-- Car -->
        <g transform="rotate(30, 255, 105)">
          <rect x="235" y="88" width="40" height="24" rx="3" fill="#f87171"/>
          <!-- Front right wheel turned right (toward curb) -->
          <rect x="267" y="90" width="8" height="5" rx="1" fill="#888" transform="rotate(15, 271, 92.5)"/>
          <rect x="235" y="107" width="8" height="5" rx="1" fill="#888"/>
        </g>
        <text x="255" y="175" fill="#4ade80" font-size="10" text-anchor="middle" font-family="Arial">Rodas para DIREITA</text>
        <text x="255" y="188" fill="#94a3b8" font-size="9" text-anchor="middle" font-family="Arial">(Se rolar, guia bloqueia)</text>
      </svg>
    </div>
    <table class="ttable">
      <tr><th>Situação</th><th>Rodas dianteiras</th><th>Por quê</th></tr>
      <tr><td>Subida COM guia</td><td class="c-green">Para ESQUERDA (fora)</td><td>Se rolar para trás, guia bloqueia</td></tr>
      <tr><td>Subida SEM guia</td><td class="c-green">Para ESQUERDA (fora)</td><td>Se rolar para trás, sai da pista</td></tr>
      <tr><td>Descida COM guia</td><td class="c-green">Para DIREITA (guia)</td><td>Se rolar para frente, guia bloqueia</td></tr>
      <tr><td>Descida SEM guia</td><td class="c-green">Para DIREITA (fora)</td><td>Se rolar para frente, sai da pista</td></tr>
    </table>
    <div class="tbox blue">💡 <strong>Macete:</strong> Sempre vire as rodas para o lado que faz o veículo encostar em algo se rolar.</div>
  </div>
</div>

<div class="tcard">
  <div class="tcard-head">🚫 Onde NÃO estacionar</div>
  <div class="tcard-body">
    <table class="ttable">
      <tr><th>Local proibido</th><th>Penalidade</th></tr>
      <tr><td>Sobre calçada</td><td><span class="badge grave">Gravíssima</span> 7 pts + remoção</td></tr>
      <tr><td>Faixa de pedestres</td><td><span class="badge grave">Gravíssima</span> 7 pts + remoção</td></tr>
      <tr><td>Frente a hidrante</td><td><span class="badge grave">Gravíssima</span> 7 pts + remoção</td></tr>
      <tr><td>Vaga deficiente/idoso sem credencial</td><td><span class="badge grave">Gravíssima</span> 7 pts + remoção</td></tr>
      <tr><td>Área reservada a táxis</td><td><span class="badge grave">Gravíssima</span> 7 pts + remoção</td></tr>
      <tr><td>Sobre trilhos de trem</td><td><span class="badge grave">Gravíssima</span> 7 pts</td></tr>
      <tr><td>Frente a garagem</td><td><span class="badge grave">Grave</span> 5 pts + remoção</td></tr>
      <tr><td>Fila dupla por mais de 2 minutos</td><td><span class="badge grave">Grave</span> 5 pts</td></tr>
      <tr><td>Parar sobre faixa de pedestres aguardando sinal</td><td><span class="badge medio">Média</span> 4 pts</td></tr>
    </table>
  </div>
</div>`,

// ══════════════════════════════════════════════════════════════
's-alcool': `
<div class="tsec-title">🍺 Álcool e Direção — Tolerância Zero</div>

<div class="tcard">
  <div class="tcard-head">🔬 Faixas de alcoolemia e penalidades</div>
  <div class="tcard-body">
    <div class="diagram-wrap">
      <svg viewBox="0 0 340 140" width="340" height="140" style="background:var(--bg2);border-radius:8px;">
        <!-- Gradient bar -->
        <defs>
          <linearGradient id="alcGrad" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stop-color="#22c55e"/>
            <stop offset="15%" stop-color="#eab308"/>
            <stop offset="35%" stop-color="#f97316"/>
            <stop offset="60%" stop-color="#ef4444"/>
            <stop offset="100%" stop-color="#7f1d1d"/>
          </linearGradient>
        </defs>
        <rect x="20" y="35" width="300" height="28" rx="4" fill="url(#alcGrad)"/>
        <!-- Markers -->
        <line x1="20" y1="35" x2="20" y2="70" stroke="white" stroke-width="2"/>
        <text x="20" y="82" fill="#94a3b8" font-size="9" text-anchor="middle" font-family="Arial">0</text>
        <line x1="65" y1="35" x2="65" y2="70" stroke="white" stroke-width="2"/>
        <text x="65" y="82" fill="white" font-size="8" text-anchor="middle" font-family="Arial">0,05</text>
        <line x1="135" y1="35" x2="135" y2="70" stroke="white" stroke-width="2"/>
        <text x="135" y="82" fill="white" font-size="8" text-anchor="middle" font-family="Arial">0,33</text>
        <!-- Zone labels -->
        <text x="42" y="25" fill="#4ade80" font-size="8" text-anchor="middle" font-family="Arial">Multa</text>
        <text x="42" y="15" fill="#4ade80" font-size="8" text-anchor="middle" font-family="Arial">Adm.</text>
        <text x="100" y="25" fill="#fb923c" font-size="8" text-anchor="middle" font-family="Arial">Gravíssima</text>
        <text x="100" y="15" fill="#fb923c" font-size="8" text-anchor="middle" font-family="Arial">R$2.934,70</text>
        <text x="230" y="25" fill="#f87171" font-size="8" text-anchor="middle" font-family="Arial">CRIME</text>
        <text x="230" y="15" fill="#f87171" font-size="8" text-anchor="middle" font-family="Arial">Detenção</text>
        <!-- Note at bottom -->
        <text x="170" y="105" fill="#94a3b8" font-size="9" text-anchor="middle" font-family="Arial">Concentração de álcool no ar alveolar (mg/L)</text>
        <text x="170" y="120" fill="#fcd34d" font-size="9" text-anchor="middle" font-family="Arial">Recusa ao bafômetro = mesma pena de 0,33+ mg/L</text>
      </svg>
    </div>
    <table class="ttable">
      <tr><th>Concentração (ar alveolar)</th><th>Equivalência (sangue)</th><th>Penalidade</th></tr>
      <tr><td>Qualquer quantidade detectável</td><td>&gt; 0</td><td>Infração administrativa</td></tr>
      <tr><td>0,05 a 0,33 mg/L</td><td>0,1–0,6 g/L</td><td>Gravíssima — R$ 2.934,70 + susp. 12 meses</td></tr>
      <tr><td class="c-red"><strong>Acima de 0,33 mg/L</strong></td><td>&gt; 0,6 g/L</td><td><strong>CRIME</strong> — detenção 6m–3a + cassação</td></tr>
      <tr><td>Recusa ao bafômetro</td><td>—</td><td>Mesma pena de quem está acima de 0,33</td></tr>
    </table>
    <div class="tbox red">🚨 Dirigir embriagado e <strong>causar morte</strong> = homicídio culposo agravado — reclusão de 2 a 4 anos + cassação definitiva da CNH (CTB Art. 302, §3°).</div>
  </div>
</div>

<div class="tcard">
  <div class="tcard-head">🧠 Como o álcool afeta a direção</div>
  <div class="tcard-body">
    <div class="info-grid">
      <div class="info-item"><strong>⏱️ Tempo de reação</strong><br><span style="font-size:11px;">Aumenta — você demora mais para frear</span></div>
      <div class="info-item"><strong>👁️ Campo de visão</strong><br><span style="font-size:11px;">"Visão em túnel" — perde os lados</span></div>
      <div class="info-item"><strong>🎯 Julgamento</strong><br><span style="font-size:11px;">Comprometido — sente-se mais capaz do que está</span></div>
      <div class="info-item"><strong>🖐️ Coordenação</strong><br><span style="font-size:11px;">Reduzida — volante e pedais ficam imprecisos</span></div>
      <div class="info-item"><strong>😴 Sonolência</strong><br><span style="font-size:11px;">Aumentada — risco de adormecer ao volante</span></div>
      <div class="info-item"><strong>😤 Impulsividade</strong><br><span style="font-size:11px;">Maior agressividade e comportamentos de risco</span></div>
    </div>
    <div class="tbox blue">💡 Mesmo <strong>pequenas quantidades</strong> de álcool já comprometem os reflexos. A única dose segura ao volante é <strong>zero</strong>.</div>
  </div>
</div>`,

// ══════════════════════════════════════════════════════════════
's-cnh': `
<div class="tsec-title">🪪 Carteira Nacional de Habilitação</div>

<div class="tcard">
  <div class="tcard-head">📋 Categorias de CNH</div>
  <div class="tcard-body">
    <table class="ttable">
      <tr><th>Cat.</th><th>Veículos autorizados</th><th>Idade mín.</th></tr>
      <tr><td><strong class="c-blue">ACC</strong></td><td>Ciclomotores (até 50 cc, até 50 km/h)</td><td>16 anos</td></tr>
      <tr><td><strong class="c-blue">A</strong></td><td>Motocicletas, motonetas, triciclos</td><td>18 anos</td></tr>
      <tr><td><strong class="c-blue">B</strong></td><td>Automóveis, caminhonetes, até 3.500 kg, até 8 passageiros</td><td>18 anos</td></tr>
      <tr><td><strong class="c-blue">AB</strong></td><td>Veículos das categorias A e B</td><td>18 anos</td></tr>
      <tr><td><strong class="c-yellow">C</strong></td><td>Veículos de carga acima de 3.500 kg</td><td>18 anos</td></tr>
      <tr><td><strong class="c-yellow">D</strong></td><td>Ônibus, micro-ônibus (mais de 8 passageiros)</td><td>21 anos</td></tr>
      <tr><td><strong class="c-yellow">E</strong></td><td>Combinações com reboque/semirreboque acima de 6.000 kg</td><td>21 anos</td></tr>
    </table>
    <div class="tbox yellow">⚡ <strong>Regra geral:</strong> Uma categoria inclui todas as inferiores — ex: categoria E pode dirigir A, B, C, D e E.</div>
  </div>
</div>

<div class="tcard">
  <div class="tcard-head">📅 Validade da CNH por Faixa Etária</div>
  <div class="tcard-body">
    <div class="pen-row">
      <div class="pen-box leve"><div class="pen-num">10</div><div class="pen-label">Anos — Até 49 anos</div></div>
      <div class="pen-box media"><div class="pen-num">5</div><div class="pen-label">Anos — 50 a 69 anos</div></div>
      <div class="pen-box grave"><div class="pen-num">3</div><div class="pen-label">Anos — 70 anos ou mais</div></div>
    </div>
  </div>
</div>

<div class="tcard">
  <div class="tcard-head">⚠️ Sistema de Pontuação — CNH</div>
  <div class="tcard-body">
    <div class="pen-row">
      <div class="pen-box leve"><div class="pen-num">3 pts</div><div class="pen-label">Leve</div><div style="font-size:10px;color:var(--fg);margin-top:3px;">R$ 88,38</div></div>
      <div class="pen-box media"><div class="pen-num">4 pts</div><div class="pen-label">Média</div><div style="font-size:10px;color:var(--fg);margin-top:3px;">R$ 130,16</div></div>
      <div class="pen-box grave"><div class="pen-num">5 pts</div><div class="pen-label">Grave</div><div style="font-size:10px;color:var(--fg);margin-top:3px;">R$ 195,23</div></div>
      <div class="pen-box gravissima"><div class="pen-num">7 pts</div><div class="pen-label">Gravíssima</div><div style="font-size:10px;color:var(--fg);margin-top:3px;">R$ 293,47</div></div>
    </div>
    <div class="tbox red">🚨 <strong>20 pontos em 12 meses</strong> = suspensão mínima de 6 meses. Após 12 meses sem infração, pontos são zerados.</div>
    <table class="ttable" style="margin-top:10px;">
      <tr><th>Situação</th><th>O que acontece com a CNH</th></tr>
      <tr><td>PPD (Permissão para Dirigir)</td><td>Válida por 1 ano. Sem infrações graves → CNH definitiva</td></tr>
      <tr><td>Acumular 20 pontos em 12 meses</td><td>Suspensão por 6 meses a 1 ano</td></tr>
      <tr><td>Crime de trânsito (alcoolemia, racha, homicídio)</td><td>Cassação (não pode requerer nova CNH por 2 anos)</td></tr>
      <tr><td>CNH vencida até 30 dias</td><td>Infração grave (5 pts)</td></tr>
      <tr><td>CNH vencida mais de 30 dias</td><td>Gravíssima — equivale a não ter CNH</td></tr>
    </table>
  </div>
</div>

<div class="tcard">
  <div class="tcard-head">📝 Etapas para obter a CNH (Categoria B)</div>
  <div class="tcard-body">
    <div class="steps">
      <div class="step"><span class="step-n">1</span><div><strong>Registro no DETRAN</strong> — Documentos, exame médico (visão, audição, saúde geral) e psicotécnico</div></div>
      <div class="step"><span class="step-n">2</span><div><strong>Curso Teórico</strong> — Mínimo 45h de legislação, direção defensiva e primeiros socorros em autoescola credenciada</div></div>
      <div class="step"><span class="step-n">3</span><div><strong>Prova Teórica</strong> — 30 questões, mínimo <strong>21 corretas (70%)</strong> para aprovação</div></div>
      <div class="step"><span class="step-n">4</span><div><strong>Aulas Práticas</strong> — Mínimo 25h de condução com instrutor (inclui via pública)</div></div>
      <div class="step"><span class="step-n">5</span><div><strong>Prova Prática</strong> — Avaliação de condução em circuito e via pública pelo examinador</div></div>
      <div class="step"><span class="step-n">6</span><div><strong>PPD</strong> — Permissão para Dirigir por 1 ano. Sem infrações graves/gravíssimas → CNH definitiva</div></div>
    </div>
    <div class="tbox blue">💡 Durante a PPD, o acompanhante deve ter CNH da mesma categoria há pelo menos <strong>3 anos</strong>.</div>
  </div>
</div>`,

// ══════════════════════════════════════════════════════════════
's-infracoes': `
<div class="tsec-title">⚠️ Infrações de Trânsito</div>

<div class="tcard">
  <div class="tcard-head">🔴 Infrações Gravíssimas (7 pontos) — As mais cobradas</div>
  <div class="tcard-body">
    <table class="ttable">
      <tr><th>Infração</th><th>Multa</th></tr>
      <tr><td>Avançar sinal vermelho</td><td>R$ 293,47</td></tr>
      <tr><td>Usar celular <strong>segurado na mão</strong> ao volante</td><td>R$ 293,47</td></tr>
      <tr><td>Não usar cinto de segurança (por ocupante)</td><td>R$ 293,47</td></tr>
      <tr><td>Dirigir sem CNH / com CNH cassada</td><td>R$ 293,47 + retenção</td></tr>
      <tr><td>Trafegar na contramão</td><td>R$ 293,47</td></tr>
      <tr><td>Ultrapassar pelo acostamento</td><td>R$ 293,47</td></tr>
      <tr><td>Estacionar em calçada</td><td>R$ 293,47 + remoção</td></tr>
      <tr><td>Estacionar em frente a hidrante</td><td>R$ 293,47 + remoção</td></tr>
      <tr><td>Usar vaga deficiente/idoso sem credencial</td><td>R$ 293,47 + remoção</td></tr>
      <tr><td>Transportar criança sem cadeirinha / no colo</td><td>R$ 293,47</td></tr>
      <tr><td>Participar de racha (crime)</td><td>R$ 2.934,70 + susp. + possível prisão</td></tr>
      <tr><td>Exceder velocidade em mais de 50%</td><td>R$ 880,41 (×3)</td></tr>
    </table>
  </div>
</div>

<div class="tcard">
  <div class="tcard-head">🟠 Infrações Graves (5 pontos)</div>
  <div class="tcard-body">
    <ul class="tlist">
      <li>Não dar preferência ao pedestre na faixa</li>
      <li>Usar fone nos dois ouvidos ao dirigir</li>
      <li>Ultrapassar em local proibido</li>
      <li>Não respeitar preferência na rotatória</li>
      <li>Circular na faixa exclusiva de ônibus</li>
      <li>Exceder velocidade em até 20%</li>
      <li>Não dar passagem a veículo de emergência com sirene</li>
      <li>Pneu em fila dupla por mais de 2 minutos</li>
      <li>Conduzir com extintor vencido ou ausente</li>
      <li>CNH vencida até 30 dias</li>
      <li>Conduzir veículo de categoria diferente da habilitação</li>
      <li>Exceder velocidade de 20% a 50% (Gravíssima ×2 = 14 pts)</li>
    </ul>
  </div>
</div>

<div class="tcard">
  <div class="tcard-head">🟡 Infrações Médias (4 pts) e Leves (3 pts)</div>
  <div class="tcard-body">
    <table class="ttable">
      <tr><th>Infração</th><th>Nível</th><th>Pontos</th></tr>
      <tr><td>Não sinalizar mudança de faixa / retorno</td><td>Média</td><td>4</td></tr>
      <tr><td>Parar sobre faixa de pedestres aguardando sinal</td><td>Média</td><td>4</td></tr>
      <tr><td>Pneu careca / fora da especificação</td><td>Média</td><td>4</td></tr>
      <tr><td>Para-brisa/vidro com visibilidade comprometida</td><td>Média</td><td>4</td></tr>
      <tr><td>Não sinalizar veículo parado na via (triângulo)</td><td>Média</td><td>4</td></tr>
      <tr><td>Abandonar veículo em via pública</td><td>Média</td><td>4</td></tr>
      <tr><td>Jogar lixo na via</td><td>Média</td><td>4</td></tr>
      <tr><td>Farol traseiro com defeito à noite</td><td>Leve</td><td>3</td></tr>
      <tr><td>Buzinar em área proibida (hospital, residencial)</td><td>Leve</td><td>3</td></tr>
      <tr><td>Usar farol alto onde não necessário</td><td>Leve</td><td>3</td></tr>
    </table>
    <div class="tbox blue">💡 Pagar a multa em <strong>30 dias</strong> = 40% de desconto. Recurso na JARI: também em 30 dias. Segunda instância: CETRAN ou CONTRAN.</div>
  </div>
</div>

<div class="tcard">
  <div class="tcard-head">📱 Celular ao Volante — Detalhe importante</div>
  <div class="tcard-body">
    <div class="compare-grid">
      <div class="compare-box right">
        <div class="cb-title">🚫 PROIBIDO (Gravíssima)</div>
        <ul>
          <li>Segurar o celular na mão</li>
          <li>Digitar mensagens</li>
          <li>Colocar no ouvido</li>
        </ul>
      </div>
      <div class="compare-box left">
        <div class="cb-title">✅ PERMITIDO</div>
        <ul>
          <li>Viva-voz sem segurar</li>
          <li>Bluetooth no ouvido</li>
          <li>GPS no suporte (sem mexer)</li>
        </ul>
      </div>
    </div>
    <div class="tbox red">🚨 Usar celular ao volante aumenta em até <strong>4×</strong> o risco de acidente — mesmo com viva-voz.</div>
  </div>
</div>`,

// ══════════════════════════════════════════════════════════════
's-primeiros': `
<div class="tsec-title">🚑 Primeiros Socorros no Trânsito</div>

<div class="tcard">
  <div class="tcard-head">📞 Números de Emergência — Decore!</div>
  <div class="tcard-body">
    <div class="info-grid">
      <div class="info-item emergency"><span class="em-num">190</span><div><strong>Polícia Militar</strong><br><span style="font-size:11px;">Crimes, segurança pública</span></div></div>
      <div class="info-item emergency"><span class="em-num">191</span><div><strong>PRF</strong><br><span style="font-size:11px;">Polícia Rodoviária Federal</span></div></div>
      <div class="info-item emergency"><span class="em-num">192</span><div><strong>SAMU</strong><br><span style="font-size:11px;">Serviço de Atend. Médico Urgência</span></div></div>
      <div class="info-item emergency"><span class="em-num">193</span><div><strong>Bombeiros</strong><br><span style="font-size:11px;">Incêndios, resgates, acidentes</span></div></div>
    </div>
  </div>
</div>

<div class="tcard">
  <div class="tcard-head">🩺 Protocolo em Acidente com Vítimas</div>
  <div class="tcard-body">
    <div class="steps">
      <div class="step"><span class="step-n">1</span><div><strong>Proteja o local</strong> — Coloque o triângulo a <strong>30 metros</strong> atrás do veículo. Acione o pisca-alerta.</div></div>
      <div class="step"><span class="step-n">2</span><div><strong>Ligue para o socorro</strong> — SAMU (192) ou Bombeiros (193) imediatamente.</div></div>
      <div class="step"><span class="step-n">3</span><div><strong>Avalie a vítima</strong> — Está consciente? Respira? Aplique o VOS: <strong>V</strong>er se o peito sobe, <strong>O</strong>uvir respiração, <strong>S</strong>entir ar na face — por até 10 segundos.</div></div>
      <div class="step"><span class="step-n">4</span><div><strong>NÃO MOVA</strong> a vítima — Suspeita de lesão na coluna: movimentar pode causar paralisia permanente. Só mova se houver risco imediato de vida (fogo, afogamento).</div></div>
      <div class="step"><span class="step-n">5</span><div><strong>Se não respira normalmente</strong> — Inicie RCP: <strong>100–120 compressões por minuto</strong> no centro do peito, profundidade 5–6 cm.</div></div>
      <div class="step"><span class="step-n">6</span><div><strong>Hemorragia</strong> — Comprima firmemente com pano limpo. Torniquete apenas se hemorragia não ceder.</div></div>
    </div>
    <div class="tbox red">🚨 Abandonar vítima = <strong>crime de omissão de socorro</strong> (CTB Art. 304) — pena de 6 meses a 1 ano de detenção.</div>
  </div>
</div>

<div class="tcard">
  <div class="tcard-head">💉 Situações especiais — Como agir</div>
  <div class="tcard-body">
    <table class="ttable">
      <tr><th>Situação</th><th>Ação correta</th></tr>
      <tr><td>Vítima engasgada e consciente</td><td><strong>Manobra de Heimlich</strong> — compressões abdominais para cima e para dentro</td></tr>
      <tr><td>Suspeita de lesão na coluna</td><td><strong>NÃO MOVA.</strong> Imobilize e aguarde bombeiros</td></tr>
      <tr><td>Choque elétrico</td><td>Desligue a energia ANTES de tocar na vítima</td></tr>
      <tr><td>Vítima presa no veículo</td><td>Aguarde Corpo de Bombeiros — só mova em risco de fogo/afogamento</td></tr>
      <tr><td>Produto perigoso derramado</td><td>Mantenha distância, não fume, ligue 193. NÃO tente conter sozinho.</td></tr>
      <tr><td>Incêndio no veículo</td><td>Pare, desligue o motor, todos saem, afastem-se, ligue 193</td></tr>
    </table>
  </div>
</div>

<div class="tcard">
  <div class="tcard-head">🪑 Dispositivos de Retenção Infantil</div>
  <div class="tcard-body">
    <div class="diagram-wrap">
      <svg viewBox="0 0 340 110" width="340" height="110" style="background:var(--bg2);border-radius:8px;">
        <!-- Timeline bar -->
        <rect x="20" y="40" width="300" height="12" rx="6" fill="rgba(255,255,255,.1)"/>
        <rect x="20" y="40" width="300" height="12" rx="6" fill="url(#ageGrad)"/>
        <defs>
          <linearGradient id="ageGrad" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stop-color="#3b82f6"/>
            <stop offset="30%" stop-color="#8b5cf6"/>
            <stop offset="55%" stop-color="#ec4899"/>
            <stop offset="75%" stop-color="#f97316"/>
            <stop offset="100%" stop-color="#22c55e"/>
          </linearGradient>
        </defs>
        <!-- Markers -->
        <line x1="110" y1="38" x2="110" y2="58" stroke="white" stroke-width="1.5"/>
        <line x1="185" y1="38" x2="185" y2="58" stroke="white" stroke-width="1.5"/>
        <line x1="245" y1="38" x2="245" y2="58" stroke="white" stroke-width="1.5"/>
        <line x1="290" y1="38" x2="290" y2="58" stroke="white" stroke-width="1.5"/>
        <!-- Labels below -->
        <text x="65" y="74" fill="white" font-size="8" text-anchor="middle" font-family="Arial">Bebê conforto</text>
        <text x="65" y="84" fill="#93c5fd" font-size="8" text-anchor="middle" font-family="Arial">até 13 kg</text>
        <text x="148" y="74" fill="white" font-size="8" text-anchor="middle" font-family="Arial">Cadeirinha</text>
        <text x="148" y="84" fill="#c4b5fd" font-size="8" text-anchor="middle" font-family="Arial">9–18 kg</text>
        <text x="215" y="74" fill="white" font-size="8" text-anchor="middle" font-family="Arial">Assento c/ encosto</text>
        <text x="215" y="84" fill="#f9a8d4" font-size="8" text-anchor="middle" font-family="Arial">15–25 kg</text>
        <text x="267" y="74" fill="white" font-size="8" text-anchor="middle" font-family="Arial">Assento s/enc.</text>
        <text x="267" y="84" fill="#fdba74" font-size="8" text-anchor="middle" font-family="Arial">22–36 kg</text>
        <text x="305" y="74" fill="white" font-size="8" text-anchor="middle" font-family="Arial">Cinto</text>
        <text x="305" y="84" fill="#86efac" font-size="8" text-anchor="middle" font-family="Arial">&gt;1,45m</text>
        <!-- Top label -->
        <text x="170" y="20" fill="#94a3b8" font-size="9" text-anchor="middle" font-family="Arial">Evolução dos dispositivos por peso/altura da criança</text>
        <text x="170" y="100" fill="#fcd34d" font-size="9" text-anchor="middle" font-family="Arial">Crianças menores de 10 anos: SEMPRE no banco traseiro</text>
      </svg>
    </div>
    <div class="tbox red">🚨 Criança no colo = <strong>Gravíssima</strong> (7 pts). Bebê conforto: sempre voltado para trás.</div>
  </div>
</div>`,

// ══════════════════════════════════════════════════════════════
's-mecanica': `
<div class="tsec-title">🔧 Mecânica Básica do Veículo</div>

<div class="tcard">
  <div class="tcard-head">🔦 Luzes do painel — O que cada uma significa</div>
  <div class="tcard-body">
    <div class="diagram-wrap">
      <svg viewBox="0 0 340 120" width="340" height="120" style="background:#1a1a2e;border-radius:8px;border:1px solid #333;">
        <!-- Dashboard background -->
        <rect x="0" y="0" width="340" height="120" rx="8" fill="#1a1a2e"/>
        <!-- Speedometer circles -->
        <circle cx="80" cy="60" r="45" fill="none" stroke="#333" stroke-width="8"/>
        <circle cx="260" cy="60" r="45" fill="none" stroke="#333" stroke-width="8"/>
        <!-- Warning lights row -->
        <circle cx="140" cy="35" r="8" fill="#ef4444"/>
        <text x="140" y="39" text-anchor="middle" fill="white" font-size="8" font-family="Arial">OIL</text>
        <circle cx="165" cy="35" r="8" fill="#ef4444"/>
        <text x="165" y="39" text-anchor="middle" fill="white" font-size="7" font-family="Arial">TMP</text>
        <circle cx="190" cy="35" r="8" fill="#ef4444"/>
        <text x="190" y="39" text-anchor="middle" fill="white" font-size="7" font-family="Arial">BAT</text>
        <circle cx="215" cy="35" r="8" fill="#eab308"/>
        <text x="215" y="39" text-anchor="middle" fill="black" font-size="6" font-family="Arial">ABS</text>
        <!-- Labels -->
        <text x="140" y="58" fill="#fca5a5" font-size="7" text-anchor="middle" font-family="Arial">Óleo</text>
        <text x="140" y="67" fill="#fca5a5" font-size="7" text-anchor="middle" font-family="Arial">PARE!</text>
        <text x="165" y="58" fill="#fca5a5" font-size="7" text-anchor="middle" font-family="Arial">Temp.</text>
        <text x="165" y="67" fill="#fca5a5" font-size="7" text-anchor="middle" font-family="Arial">PARE!</text>
        <text x="190" y="58" fill="#fca5a5" font-size="7" text-anchor="middle" font-family="Arial">Bateria</text>
        <text x="190" y="67" fill="#fca5a5" font-size="7" text-anchor="middle" font-family="Arial">Mecânico!</text>
        <text x="215" y="58" fill="#fcd34d" font-size="7" text-anchor="middle" font-family="Arial">ABS</text>
        <text x="215" y="67" fill="#fcd34d" font-size="7" text-anchor="middle" font-family="Arial">Defeito</text>
        <!-- Fuel light -->
        <circle cx="140" cy="90" r="8" fill="#eab308"/>
        <text x="140" y="94" text-anchor="middle" fill="black" font-size="7" font-family="Arial">⛽</text>
        <text x="155" y="86" fill="#fcd34d" font-size="7" font-family="Arial">Combustível baixo</text>
        <text x="155" y="96" fill="#94a3b8" font-size="7" font-family="Arial">~50 km restantes</text>
      </svg>
    </div>
    <table class="ttable">
      <tr><th>Luz</th><th>Significado</th><th>O que fazer</th></tr>
      <tr><td>🔴 Óleo (OIL)</td><td>Pressão de óleo crítica</td><td><strong>PARE IMEDIATAMENTE</strong> — motor pode ser destruído em segundos</td></tr>
      <tr><td>🔴 Temperatura</td><td>Motor superaquecido</td><td>Pare com segurança, desligue, aguarde resfriar ANTES de abrir o radiador</td></tr>
      <tr><td>🔴 Bateria</td><td>Alternador com defeito</td><td>Vá ao mecânico urgente — veículo pode parar em minutos</td></tr>
      <tr><td>🟡 ABS</td><td>Sistema ABS com defeito</td><td>Freios convencionais funcionam, mas sem ABS. Evite frenagens bruscas.</td></tr>
      <tr><td>🟡 Airbag</td><td>Airbag com defeito</td><td>Revisão urgente — pode não disparar em acidente</td></tr>
    </table>
  </div>
</div>

<div class="tcard">
  <div class="tcard-head">🚨 Sintomas × Problemas — Diagnóstico rápido</div>
  <div class="tcard-body">
    <table class="ttable">
      <tr><th>Sintoma</th><th>Causa provável</th><th>Risco</th></tr>
      <tr><td>Fumaça azul no escapamento</td><td>Óleo queimado — desgaste interno (anéis/pistão)</td><td class="c-red">Alto</td></tr>
      <tr><td>Fumaça branca densa e contínua</td><td>Refrigerante no motor — junta do cabeçote gasta</td><td class="c-red">Alto</td></tr>
      <tr><td>Rangido metálico nos freios</td><td>Pastilha no limite ou disco danificado</td><td class="c-red">Urgente</td></tr>
      <tr><td>Vibração no pedal de freio</td><td>Disco de freio empenado</td><td class="c-red">Alto</td></tr>
      <tr><td>Clique ao virar o volante</td><td>Junta homocinética desgastada</td><td class="c-red">Alto</td></tr>
      <tr><td>Pedal de freio mole/esponjoso</td><td>Ar no sistema ou fluido baixo</td><td class="c-red">Urgente</td></tr>
      <tr><td>Vibração em alta velocidade</td><td>Pneu desbalanceado ou alinhamento</td><td class="c-yellow">Médio</td></tr>
      <tr><td>Perda de potência + engasgos</td><td>Filtro de combustível entupido</td><td class="c-yellow">Médio</td></tr>
    </table>
  </div>
</div>

<div class="tcard">
  <div class="tcard-head">📅 Manutenção preventiva — Intervalos</div>
  <div class="tcard-body">
    <table class="ttable">
      <tr><th>Item</th><th>Intervalo</th></tr>
      <tr><td>Calibragem dos pneus</td><td>A cada 15 dias ou mensalmente (incluir estepe)</td></tr>
      <tr><td>Óleo do motor</td><td>5.000–10.000 km (conforme o manual)</td></tr>
      <tr><td>Rodízio dos pneus</td><td>A cada 10.000 km</td></tr>
      <tr><td>Alinhamento e balanceamento</td><td>A cada 10.000 km ou ao trocar pneus</td></tr>
      <tr><td>Filtro de ar</td><td>15.000–20.000 km</td></tr>
      <tr><td>Velas de ignição</td><td>20.000–30.000 km</td></tr>
      <tr><td>Fluido de freio</td><td>2 anos ou 40.000 km</td></tr>
      <tr><td>Correia dentada</td><td>Conforme manual — geralmente 60.000 km</td></tr>
      <tr><td>Líquido de arrefecimento</td><td>40.000–60.000 km</td></tr>
    </table>
    <div class="tbox yellow">⚡ <strong>Pneu sub-calibrado (baixo):</strong> desgasta as bordas, maior consumo, risco de estouro. <strong>Super-calibrado (alto):</strong> desgasta o centro, menos aderência.</div>
  </div>
</div>`,

// ══════════════════════════════════════════════════════════════
's-direcao': `
<div class="tsec-title">🛡️ Direção Defensiva</div>

<div class="tcard">
  <div class="tcard-head">🎯 Método IPDE — A base da direção defensiva</div>
  <div class="tcard-body">
    <div class="diagram-wrap">
      <svg viewBox="0 0 340 80" width="340" height="80" style="background:var(--bg2);border-radius:8px;">
        <defs>
          <marker id="marrow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
            <polygon points="0,0 8,3 0,6" fill="#cc0000"/>
          </marker>
        </defs>
        <!-- Boxes -->
        <rect x="10" y="20" width="65" height="40" rx="6" fill="rgba(59,130,246,.2)" stroke="#3b82f6" stroke-width="1.5"/>
        <text x="42" y="37" text-anchor="middle" fill="#93c5fd" font-size="18" font-weight="bold" font-family="Arial">I</text>
        <text x="42" y="54" text-anchor="middle" fill="#93c5fd" font-size="8" font-family="Arial">Identificar</text>
        <line x1="76" y1="40" x2="90" y2="40" stroke="#cc0000" stroke-width="2" marker-end="url(#marrow)"/>
        
        <rect x="92" y="20" width="65" height="40" rx="6" fill="rgba(245,158,11,.2)" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="124" y="37" text-anchor="middle" fill="#fcd34d" font-size="18" font-weight="bold" font-family="Arial">P</text>
        <text x="124" y="54" text-anchor="middle" fill="#fcd34d" font-size="8" font-family="Arial">Prever</text>
        <line x1="158" y1="40" x2="172" y2="40" stroke="#cc0000" stroke-width="2" marker-end="url(#marrow)"/>
        
        <rect x="174" y="20" width="65" height="40" rx="6" fill="rgba(168,85,247,.2)" stroke="#a855f7" stroke-width="1.5"/>
        <text x="206" y="37" text-anchor="middle" fill="#d8b4fe" font-size="18" font-weight="bold" font-family="Arial">D</text>
        <text x="206" y="54" text-anchor="middle" fill="#d8b4fe" font-size="8" font-family="Arial">Decidir</text>
        <line x1="240" y1="40" x2="254" y2="40" stroke="#cc0000" stroke-width="2" marker-end="url(#marrow)"/>
        
        <rect x="256" y="20" width="65" height="40" rx="6" fill="rgba(34,197,94,.2)" stroke="#22c55e" stroke-width="1.5"/>
        <text x="288" y="37" text-anchor="middle" fill="#86efac" font-size="18" font-weight="bold" font-family="Arial">E</text>
        <text x="288" y="54" text-anchor="middle" fill="#86efac" font-size="8" font-family="Arial">Executar</text>
      </svg>
    </div>
    <div class="info-grid">
      <div class="info-item"><strong>🔍 Identificar</strong><br><span style="font-size:11px;">Detectar os riscos ao redor — outros veículos, pedestres, sinalização</span></div>
      <div class="info-item"><strong>🔮 Prever</strong><br><span style="font-size:11px;">Antecipar o que pode acontecer com base no que você identificou</span></div>
      <div class="info-item"><strong>🤔 Decidir</strong><br><span style="font-size:11px;">Escolher a melhor ação: reduzir, desviar, frear, sinalizar</span></div>
      <div class="info-item"><strong>🎯 Executar</strong><br><span style="font-size:11px;">Realizar a manobra com precisão e segurança</span></div>
    </div>
  </div>
</div>

<div class="tcard">
  <div class="tcard-head">⚡ Situações de emergência — Como agir</div>
  <div class="tcard-body">
    <table class="ttable">
      <tr><th>Situação</th><th>Ação correta</th><th>O que NÃO fazer</th></tr>
      <tr><td>Aquaplanagem</td><td>Solte o acelerador suavemente, mantenha o volante reto</td><td>Não freie bruscamente</td></tr>
      <tr><td>Pneu estourou</td><td>Segure o volante firme, reduza gradualmente</td><td>Não freie bruscamente, não vire bruscamente</td></tr>
      <tr><td>Freios falharam em descida</td><td>Freio motor (marcha baixa) + freio de estacionamento suave</td><td>Não entre em pânico, não desligue o motor</td></tr>
      <tr><td>Sonolência ao volante</td><td>PARE em local seguro e descanse</td><td>Não há solução além de parar</td></tr>
      <tr><td>Farol alto do outro lado</td><td>Olhe para a borda direita da pista e reduza</td><td>Não encare a luz, não pisque farol alto em resposta</td></tr>
      <tr><td>Veículo ultrapassando de frente</td><td>Reduza e vá para a borda direita</td><td>Não tente forçar o outro a voltar</td></tr>
      <tr><td>Incêndio no motor</td><td>Pare, desligue, todos saem, afastem-se, 193</td><td>Não tente apagar sem sair do carro</td></tr>
    </table>
  </div>
</div>

<div class="tcard">
  <div class="tcard-head">🌙 Faróis — Uso correto</div>
  <div class="tcard-body">
    <table class="ttable">
      <tr><th>Situação</th><th>Farol correto</th></tr>
      <tr><td>Rodovias — dia e noite</td><td>Farol BAIXO — obrigatório 24h</td></tr>
      <tr><td>Estrada escura sem veículos à frente</td><td>Farol ALTO — para ver melhor</td></tr>
      <tr><td>Veículo à frente ou em sentido contrário próximo</td><td>Farol BAIXO — obrigatório</td></tr>
      <tr><td>Túneis</td><td>Farol BAIXO — obrigatório</td></tr>
      <tr><td>Neblina / chuva forte</td><td>Farol de NEBLINA ou BAIXO</td></tr>
      <tr><td>Veículo parado à noite</td><td>Luzes de POSIÇÃO (lanterna)</td></tr>
    </table>
    <div class="tbox blue">💡 Usar farol alto onde não necessário = <strong>infração leve</strong> (3 pts). Não usar farol em rodovia = infração média (4 pts).</div>
  </div>
</div>

<div class="tcard">
  <div class="tcard-head">⏰ Fadiga e descanso</div>
  <div class="tcard-body">
    <div class="tbox red">🚨 <strong>Máximo 4 horas</strong> de condução contínua. Pausa mínima de <strong>30 minutos</strong>. (CTB Art. 67-C)</div>
    <ul class="tlist" style="margin-top:10px;">
      <li>😴 Sonolência tem efeito similar ao álcool — não existe "vencer o sono"</li>
      <li>🛣️ <strong>Fadiga de rodovia:</strong> retas longas e monótonas induzem sonolência involuntária</li>
      <li>💊 Medicamentos com sonolência: consulte o médico e evite dirigir</li>
      <li>☕ Café e energéticos: apenas efeito temporário — não substituem o descanso</li>
      <li>✅ Antes de viajar: durma bem, revise o veículo, planeje paradas</li>
    </ul>
  </div>
</div>`
  };
}

// ─── PROGRESS TRACKING ─────────────────────────────────────
function getReadSections() {
  try { return JSON.parse(localStorage.getItem('teoria_read') || '[]'); } catch(e) { return []; }
}
function markRead(id) {
  const read = getReadSections();
  if (!read.includes(id)) { read.push(id); localStorage.setItem('teoria_read', JSON.stringify(read)); }
  updateProgress();
  const btn = document.getElementById('markbtn-' + id);
  if (btn) { btn.classList.add('done'); btn.textContent = '✅ Estudado!'; }
}
function updateProgress() {
  const read = getReadSections();
  const pct = Math.round((read.length / SECTIONS.length) * 100);
  const fill = document.getElementById('teoria-progress-fill');
  if (fill) fill.style.width = pct + '%';
  const badge = document.getElementById('teoria-progress-badge');
  if (badge) badge.textContent = read.length + '/' + SECTIONS.length + ' concluídos';
}

// ─── NAVIGATION ────────────────────────────────────────────
function teoriaGo(secId, el) {
  document.querySelectorAll('.tsec').forEach(s => s.classList.add('hidden'));
  document.querySelectorAll('.ttab').forEach(t => t.classList.remove('on'));
  const sec = document.getElementById(secId);
  if (sec) sec.classList.remove('hidden');
  if (el) { el.classList.add('on'); el.scrollIntoView({ behavior:'smooth', block:'nearest', inline:'center' }); }
  updateProgress();
}
window.teoriaGo = teoriaGo;

// ─── RENDER ─────────────────────────────────────────────────
function render() {
  const root = document.getElementById('teoria-root');
  if (!root) return;

  // Inject CSS
  if (!document.getElementById('teoria-css')) {
    const style = document.createElement('style');
    style.id = 'teoria-css';
    style.textContent = CSS;
    document.head.appendChild(style);
  }

  const contents = buildContent();
  const read = getReadSections();
  const pct = Math.round((read.length / SECTIONS.length) * 100);

  const tabsHtml = SECTIONS.map((s, i) =>
    `<button class="ttab${i===0?' on':''}" onclick="teoriaGo('${s.id}',this)">${s.label}</button>`
  ).join('');

  const sectionsHtml = SECTIONS.map((s, i) => {
    const isRead = read.includes(s.id);
    const content = contents[s.id] || '<p>Conteúdo em breve.</p>';
    return `<div id="${s.id}" class="tsec${i===0?'':' hidden'}">
      ${content}
      <button id="markbtn-${s.id}" class="mark-btn${isRead?' done':''}" onclick="(function(){window._teoriaMarkRead('${s.id}')})()">
        ${isRead ? '✅ Estudado!' : '📌 Marcar como estudado'}
      </button>
    </div>`;
  }).join('');

  root.innerHTML = `
    <div class="teoria-header">
      <div class="teoria-header-sub">Manual do Condutor</div>
      <div class="teoria-header-title">📖 ESTUDOS TEÓRICOS</div>
      <div class="teoria-header-desc">Tudo que você precisa para passar na prova do DETRAN</div>
      <div class="teoria-progress-bar"><div class="teoria-progress-fill" id="teoria-progress-fill" style="width:${pct}%"></div></div>
      <div style="font-size:11px;color:rgba(255,255,255,.6);margin-top:4px;" id="teoria-progress-badge">${read.length}/${SECTIONS.length} tópicos concluídos</div>
    </div>
    <div class="teoria-tabs">${tabsHtml}</div>
    ${sectionsHtml}
  `;

  window._teoriaMarkRead = markRead;
}

// ─── INIT ────────────────────────────────────────────────────
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', render);
} else {
  render();
}

})();

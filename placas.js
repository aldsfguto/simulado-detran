// ============================================================
//  PLACAS.JS — Banco completo de placas de trânsito (CTB)
//  Cobertura: Regulamentação (R), Advertência (A),
//             Indicação (I), Semáforos (S), Especiais (E)
//  Total: ~220 placas
// ============================================================

const PLACAS = [

  // ════════════════════════════════════════════════
  //  REGULAMENTAÇÃO (R) — Fundo branco, borda vermelha
  // ════════════════════════════════════════════════

  {id:"R-1",n:"PARE",t:"reg",
   i:`<svg viewBox="0 0 100 100"><polygon points="50,3 79,14 97,40 97,60 79,86 50,97 21,86 3,60 3,40 21,14" fill="#CC0000" stroke="white" stroke-width="3"/><text x="50" y="58" text-anchor="middle" fill="white" font-size="22" font-weight="bold" font-family="Arial">PARE</text></svg>`,
   desc:"Parada obrigatória antes da linha de retenção. O veículo deve parar completamente.",
   punicao:"Gravíssima (7 pontos) — multa R$ 293,47.",dica:"Mesmo sem veículos, a parada é obrigatória. Veículo deve estar completamente parado."},

  {id:"R-2",n:"Sentido Proibido",t:"reg",
   i:`<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="#CC0000" stroke="white" stroke-width="3"/><rect x="18" y="40" width="64" height="20" fill="white"/></svg>`,
   desc:"Proibida a entrada e circulação de qualquer veículo no sentido indicado.",
   punicao:"Gravíssima (7 pontos) — multa R$ 293,47.",dica:"Fundo vermelho com faixa branca horizontal."},

  {id:"R-3",n:"Dê a Preferência",t:"reg",
   i:`<svg viewBox="0 0 100 100"><polygon points="50,97 3,10 97,10" fill="white" stroke="#CC0000" stroke-width="6"/><text x="50" y="55" text-anchor="middle" fill="#CC0000" font-size="11" font-weight="bold" font-family="Arial">DÊ A PREF.</text></svg>`,
   desc:"O condutor deve ceder passagem aos veículos da via preferencial.",
   punicao:"Infração grave (5 pontos) se não ceder a preferência.",dica:"Triângulo invertido com borda vermelha. Reduza e esteja pronto para parar."},

  {id:"R-4a",n:"Proibido Ultrapassar",t:"reg",
   i:`<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="white" stroke="#CC0000" stroke-width="6"/><circle cx="35" cy="50" r="14" fill="#666"/><circle cx="57" cy="50" r="14" fill="#aaa"/><line x1="18" y1="18" x2="82" y2="82" stroke="#CC0000" stroke-width="8"/></svg>`,
   desc:"Proibida a ultrapassagem de qualquer veículo automotor no trecho.",
   punicao:"Grave (5 pontos) — multa R$ 195,23.",dica:"Dois carros com linha diagonal. A proibição termina na próxima placa ou cruzamento."},

  {id:"R-4b",n:"Proibido Ultrapassar Caminhões",t:"reg",
   i:`<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="white" stroke="#CC0000" stroke-width="6"/><rect x="15" y="42" width="30" height="18" rx="2" fill="#555"/><rect x="47" y="46" width="16" height="14" rx="2" fill="#555"/><circle cx="22" cy="63" r="5" fill="#333"/><circle cx="57" cy="63" r="5" fill="#333"/><line x1="18" y1="18" x2="82" y2="82" stroke="#CC0000" stroke-width="8"/></svg>`,
   desc:"Proibida a ultrapassagem por veículos de carga (caminhões) no trecho.",
   punicao:"Grave (5 pontos).",dica:"Válida apenas para caminhões e veículos pesados. Automóveis podem ultrapassar."},

  {id:"R-5a",n:"Proibido Estacionar",t:"reg",
   i:`<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="white" stroke="#CC0000" stroke-width="6"/><text x="50" y="62" text-anchor="middle" fill="#333" font-size="42" font-weight="bold" font-family="Arial">P</text><line x1="18" y1="18" x2="82" y2="82" stroke="#CC0000" stroke-width="8"/></svg>`,
   desc:"Proibido estacionar. Parar brevemente para embarque/desembarque é permitido.",
   punicao:"Grave (5 pontos) + remoção do veículo.",dica:"Um risco = proibido ESTACIONAR mas pode PARAR rapidamente."},

  {id:"R-5b",n:"Proibido Parar e Estacionar",t:"reg",
   i:`<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="white" stroke="#CC0000" stroke-width="6"/><text x="50" y="62" text-anchor="middle" fill="#333" font-size="42" font-weight="bold" font-family="Arial">P</text><line x1="15" y1="15" x2="85" y2="85" stroke="#CC0000" stroke-width="8"/><line x1="85" y1="15" x2="15" y2="85" stroke="#CC0000" stroke-width="8"/></svg>`,
   desc:"Proibido tanto parar quanto estacionar. Nenhuma imobilização permitida.",
   punicao:"Gravíssima (7 pontos) + remoção imediata.",dica:"Dois riscos em X = mais restritiva. Nem parada rápida é permitida."},

  {id:"R-6a",n:"Velocidade Máxima 30",t:"reg",
   i:`<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="white" stroke="#CC0000" stroke-width="8"/><text x="50" y="63" text-anchor="middle" fill="#CC0000" font-size="36" font-weight="bold" font-family="Arial">30</text></svg>`,
   desc:"Velocidade máxima permitida no trecho: 30 km/h.",
   punicao:"Exceder em até 20%: grave. Acima de 50%: multa triplicada.",dica:"Típico em zonas escolares e vias locais."},

  {id:"R-6b",n:"Velocidade Máxima 40",t:"reg",
   i:`<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="white" stroke="#CC0000" stroke-width="8"/><text x="50" y="63" text-anchor="middle" fill="#CC0000" font-size="36" font-weight="bold" font-family="Arial">40</text></svg>`,
   desc:"Velocidade máxima permitida no trecho: 40 km/h.",
   punicao:"Exceder em até 20%: grave. Entre 20-50%: gravíssima.",dica:"Vias coletoras urbanas. Reduza e observe pedestres."},

  {id:"R-6c",n:"Velocidade Máxima 50",t:"reg",
   i:`<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="white" stroke="#CC0000" stroke-width="8"/><text x="50" y="63" text-anchor="middle" fill="#CC0000" font-size="36" font-weight="bold" font-family="Arial">50</text></svg>`,
   desc:"Velocidade máxima permitida no trecho: 50 km/h.",
   punicao:"Exceder em até 20%: grave. Acima de 50%: multa triplicada.",dica:"Comum em vias urbanas arteriais de menor fluxo."},

  {id:"R-6d",n:"Velocidade Máxima 60",t:"reg",
   i:`<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="white" stroke="#CC0000" stroke-width="8"/><text x="50" y="63" text-anchor="middle" fill="#CC0000" font-size="36" font-weight="bold" font-family="Arial">60</text></svg>`,
   desc:"Velocidade máxima permitida no trecho: 60 km/h.",
   punicao:"Exceder em até 20%: grave. Entre 20-50%: gravíssima.",dica:"Padrão de vias arteriais urbanas."},

  {id:"R-6e",n:"Velocidade Máxima 80",t:"reg",
   i:`<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="white" stroke="#CC0000" stroke-width="8"/><text x="50" y="63" text-anchor="middle" fill="#CC0000" font-size="36" font-weight="bold" font-family="Arial">80</text></svg>`,
   desc:"Velocidade máxima permitida no trecho: 80 km/h.",
   punicao:"Exceder em até 20%: grave. Acima de 50%: multa triplicada.",dica:"Estradas municipais e rodovias de menor padrão."},

  {id:"R-6f",n:"Velocidade Máxima 90",t:"reg",
   i:`<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="white" stroke="#CC0000" stroke-width="8"/><text x="50" y="63" text-anchor="middle" fill="#CC0000" font-size="36" font-weight="bold" font-family="Arial">90</text></svg>`,
   desc:"Velocidade máxima permitida no trecho: 90 km/h.",
   punicao:"Exceder em até 20%: grave. Entre 20-50%: gravíssima.",dica:"Rodovias de pista simples em trechos específicos."},

  {id:"R-6g",n:"Velocidade Máxima 100",t:"reg",
   i:`<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="white" stroke="#CC0000" stroke-width="8"/><text x="50" y="63" text-anchor="middle" fill="#CC0000" font-size="28" font-weight="bold" font-family="Arial">100</text></svg>`,
   desc:"Velocidade máxima permitida no trecho: 100 km/h.",
   punicao:"Exceder em até 20%: grave. Acima de 50%: multa triplicada.",dica:"Rodovias de pista simples. Caminhões máx. 90."},

  {id:"R-6h",n:"Velocidade Máxima 110",t:"reg",
   i:`<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="white" stroke="#CC0000" stroke-width="8"/><text x="50" y="63" text-anchor="middle" fill="#CC0000" font-size="26" font-weight="bold" font-family="Arial">110</text></svg>`,
   desc:"Velocidade máxima permitida no trecho: 110 km/h.",
   punicao:"Exceder em até 20%: grave. Entre 20-50%: gravíssima.",dica:"Rodovias de pista dupla para automóveis e motos."},

  {id:"R-7",n:"Velocidade Mínima 40",t:"reg",
   i:`<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="#1565C0" stroke="white" stroke-width="4"/><circle cx="50" cy="50" r="36" fill="none" stroke="white" stroke-width="4"/><text x="50" y="63" text-anchor="middle" fill="white" font-size="32" font-weight="bold" font-family="Arial">40</text></svg>`,
   desc:"Velocidade mínima obrigatória de 40 km/h. Não pode circular abaixo desse limite.",
   punicao:"Média (4 pontos) por trafegar abaixo da velocidade mínima.",dica:"Círculo azul com número branco — diferente da máxima (fundo branco, borda vermelha)."},

  {id:"R-8a",n:"Proibido Virar à Esquerda",t:"reg",
   i:`<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="white" stroke="#CC0000" stroke-width="6"/><path d="M68,62 C68,40 38,30 28,46 L28,38 L18,50 L28,62 L28,54 C36,42 60,48 60,67 Z" fill="#444"/><line x1="18" y1="18" x2="82" y2="82" stroke="#CC0000" stroke-width="8"/></svg>`,
   desc:"Proibida a conversão à esquerda no cruzamento indicado.",
   punicao:"Grave (5 pontos).",dica:"Seta para esquerda com risco vermelho. Pode ir em frente ou virar à direita."},

  {id:"R-8b",n:"Proibido Virar à Direita",t:"reg",
   i:`<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="white" stroke="#CC0000" stroke-width="6"/><path d="M32,62 C32,40 62,30 72,46 L72,38 L82,50 L72,62 L72,54 C64,42 40,48 40,67 Z" fill="#444"/><line x1="18" y1="18" x2="82" y2="82" stroke="#CC0000" stroke-width="8"/></svg>`,
   desc:"Proibida a conversão à direita no cruzamento indicado.",
   punicao:"Grave (5 pontos).",dica:"Seta para direita com risco vermelho."},

  {id:"R-8c",n:"Proibido Retornar",t:"reg",
   i:`<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="white" stroke="#CC0000" stroke-width="6"/><path d="M22,65 L22,42 Q22,18 50,18 L70,18 L70,26 L50,26 Q30,26 30,42 L30,65 Z M60,10 L80,26 L60,42 Z" fill="#444"/><line x1="18" y1="18" x2="82" y2="82" stroke="#CC0000" stroke-width="8"/></svg>`,
   desc:"Proibido fazer retorno no local indicado.",
   punicao:"Grave (5 pontos).",dica:"Seta de retorno com risco. Busque o próximo ponto de retorno permitido."},

  {id:"R-9",n:"Proibido Virar à Esquerda e Retornar",t:"reg",
   i:`<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="white" stroke="#CC0000" stroke-width="6"/><path d="M55,75 L55,50 Q55,30 36,30 L28,30 L28,24 L18,36 L28,48 L28,42 Q45,42 45,50 L45,75 Z" fill="#444"/><path d="M58,75 L58,55 Q58,36 72,36 L72,30 L82,42 L72,54 L72,48 Q68,48 68,55 L68,75 Z" fill="#444"/><line x1="18" y1="18" x2="82" y2="82" stroke="#CC0000" stroke-width="8"/></svg>`,
   desc:"Proibido virar à esquerda e fazer retorno no cruzamento.",
   punicao:"Grave (5 pontos) por qualquer dessas manobras.",dica:"Combina as proibições R-8a e R-8c em uma única placa."},

  {id:"R-10",n:"Circulação Exclusiva de Ônibus",t:"reg",
   i:`<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="white" stroke="#1565C0" stroke-width="6"/><rect x="22" y="35" width="56" height="30" rx="5" fill="#1565C0"/><circle cx="35" cy="68" r="7" fill="#333"/><circle cx="65" cy="68" r="7" fill="#333"/><rect x="28" y="28" width="44" height="8" rx="2" fill="#1565C0"/></svg>`,
   desc:"Via de uso exclusivo para ônibus do transporte coletivo.",
   punicao:"Grave (5 pontos) para veículos não autorizados.",dica:"Motos também são proibidas, salvo indicação contrária."},

  {id:"R-11",n:"Proibido Bicicletas",t:"reg",
   i:`<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="white" stroke="#CC0000" stroke-width="6"/><circle cx="32" cy="57" r="13" fill="none" stroke="#444" stroke-width="4"/><circle cx="68" cy="57" r="13" fill="none" stroke="#444" stroke-width="4"/><path d="M32,57 L44,34 L58,34 L68,57" fill="none" stroke="#444" stroke-width="4"/><line x1="18" y1="18" x2="82" y2="82" stroke="#CC0000" stroke-width="8"/></svg>`,
   desc:"Proibida a circulação de bicicletas no trecho ou via indicada.",
   punicao:"Infração por desrespeitar sinalização.",dica:"Geralmente em rodovias de alta velocidade onde bicicletas seriam perigosas."},

  {id:"R-12",n:"Proibido Motos e Motonetas",t:"reg",
   i:`<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="white" stroke="#CC0000" stroke-width="6"/><circle cx="30" cy="58" r="11" fill="none" stroke="#444" stroke-width="4"/><circle cx="68" cy="58" r="11" fill="none" stroke="#444" stroke-width="4"/><path d="M40,58 L46,40 L60,40 L66,50" fill="none" stroke="#444" stroke-width="4"/><ellipse cx="53" cy="42" rx="8" ry="6" fill="#444"/><line x1="18" y1="18" x2="82" y2="82" stroke="#CC0000" stroke-width="8"/></svg>`,
   desc:"Proibida a circulação de motocicletas e motonetas no local.",
   punicao:"Grave (5 pontos).",dica:"Comum em túneis, algumas vias expressas e locais específicos."},

  {id:"R-13",n:"Proibido Caminhões",t:"reg",
   i:`<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="white" stroke="#CC0000" stroke-width="6"/><rect x="18" y="42" width="42" height="22" rx="2" fill="#555"/><rect x="60" y="48" width="20" height="16" rx="2" fill="#555"/><circle cx="28" cy="67" r="6" fill="#333"/><circle cx="70" cy="67" r="6" fill="#333"/><line x1="18" y1="18" x2="82" y2="82" stroke="#CC0000" stroke-width="8"/></svg>`,
   desc:"Proibida a circulação de caminhões e veículos de carga no trecho.",
   punicao:"Grave (5 pontos).",dica:"Geralmente em vias urbanas com restrição para veículos pesados."},

  {id:"R-14",n:"Peso Máximo 5t",t:"reg",
   i:`<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="white" stroke="#CC0000" stroke-width="6"/><text x="50" y="50" text-anchor="middle" fill="#CC0000" font-size="22" font-weight="bold" font-family="Arial">5 t</text><text x="50" y="70" text-anchor="middle" fill="#888" font-size="11" font-family="Arial">MÁXIMO</text></svg>`,
   desc:"Proibido circular com peso bruto total acima de 5 toneladas.",
   punicao:"Grave (5 pontos) para veículo acima do peso.",dica:"Aplicada em pontes, viadutos e vias com restrição de carga."},

  {id:"R-15",n:"Peso por Eixo Máximo 10t",t:"reg",
   i:`<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="white" stroke="#CC0000" stroke-width="6"/><text x="50" y="46" text-anchor="middle" fill="#CC0000" font-size="20" font-weight="bold" font-family="Arial">10 t</text><text x="50" y="63" text-anchor="middle" fill="#888" font-size="9" font-family="Arial">POR EIXO</text></svg>`,
   desc:"Proibido circular com peso por eixo acima de 10 toneladas.",
   punicao:"Grave (5 pontos) + bloqueio e remoção.",dica:"Aplicada em pontes e vias com capacidade estrutural limitada."},

  {id:"R-16",n:"Altura Máxima 4,4m",t:"reg",
   i:`<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="white" stroke="#CC0000" stroke-width="6"/><text x="50" y="44" text-anchor="middle" fill="#CC0000" font-size="18" font-weight="bold" font-family="Arial">4,4m</text><text x="50" y="64" text-anchor="middle" fill="#888" font-size="10" font-family="Arial">ALTURA MÁX</text></svg>`,
   desc:"Proibida a passagem de veículos com altura acima de 4,4 metros.",
   punicao:"Grave (5 pontos). Danos a estruturas são de responsabilidade do condutor.",dica:"Verifique a altura do veículo antes de entrar em viadutos e galerias."},

  {id:"R-17",n:"Largura Máxima 2,6m",t:"reg",
   i:`<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="white" stroke="#CC0000" stroke-width="6"/><text x="50" y="44" text-anchor="middle" fill="#CC0000" font-size="18" font-weight="bold" font-family="Arial">2,6m</text><text x="50" y="64" text-anchor="middle" fill="#888" font-size="10" font-family="Arial">LARGURA MÁX</text></svg>`,
   desc:"Proibida a passagem de veículos com largura acima de 2,6 metros.",
   punicao:"Grave (5 pontos). Danos causados são de responsabilidade do condutor.",dica:"Atenção ao espelho retrovisor — considera-se a largura total com espelhos."},

  {id:"R-18",n:"Comprimento Máximo 15m",t:"reg",
   i:`<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="white" stroke="#CC0000" stroke-width="6"/><text x="50" y="44" text-anchor="middle" fill="#CC0000" font-size="16" font-weight="bold" font-family="Arial">15m</text><text x="50" y="64" text-anchor="middle" fill="#888" font-size="9" font-family="Arial">COMPRIMENTO</text></svg>`,
   desc:"Proibida a passagem de veículos com comprimento acima de 15 metros.",
   punicao:"Grave (5 pontos).",dica:"Aplicada em curvas acentuadas, ruas estreitas e locais com limitação de manobra."},

  {id:"R-19",n:"Proibido Circulação de Pedestres",t:"reg",
   i:`<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="white" stroke="#CC0000" stroke-width="6"/><circle cx="50" cy="30" r="9" fill="#444"/><path d="M50,42 L50,65 M50,55 L38,64 M50,55 L62,64 M50,65 L40,80 M50,65 L60,80" stroke="#444" stroke-width="5" fill="none" stroke-linecap="round"/><line x1="18" y1="18" x2="82" y2="82" stroke="#CC0000" stroke-width="8"/></svg>`,
   desc:"Proibida a circulação de pedestres no local indicado (ex.: rodovias, acostamentos).",
   punicao:"Sem penalidade direta ao pedestre, mas obrigação de usar passagens adequadas.",dica:"Use passarelas, faixas e passagens subterrâneas indicadas."},

  {id:"R-20",n:"Proibido Entrada de Pedestres",t:"reg",
   i:`<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="white" stroke="#CC0000" stroke-width="6"/><circle cx="50" cy="28" r="9" fill="#444"/><path d="M50,40 L50,62 M50,50 L38,60 M50,50 L62,60 M50,62 L41,78 M50,62 L59,78" stroke="#444" stroke-width="5" fill="none" stroke-linecap="round"/><line x1="18" y1="82" x2="82" y2="18" stroke="#CC0000" stroke-width="8"/></svg>`,
   desc:"Proibida a entrada de pedestres no trecho ou local indicado.",
   punicao:"Sem penalidade específica ao pedestre, mas configura descumprimento de sinalização.",dica:"Observe e respeite os caminhos alternativos sinalizados."},

  {id:"R-21",n:"Proibido Cavalos e Animais",t:"reg",
   i:`<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="white" stroke="#CC0000" stroke-width="6"/><ellipse cx="48" cy="55" rx="18" ry="11" fill="#555"/><circle cx="36" cy="42" r="8" fill="#555"/><rect x="33" y="60" width="5" height="14" rx="2" fill="#555"/><rect x="43" y="60" width="5" height="14" rx="2" fill="#555"/><line x1="18" y1="18" x2="82" y2="82" stroke="#CC0000" stroke-width="8"/></svg>`,
   desc:"Proibida a circulação de animais (cavalos, burros, carroças) no local.",
   punicao:"Grave (5 pontos) para quem conduzir animal em via proibida.",dica:"Comum em rodovias de alta velocidade e vias expressas urbanas."},

  {id:"R-22",n:"Proibido Carroças e Tração Animal",t:"reg",
   i:`<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="white" stroke="#CC0000" stroke-width="6"/><rect x="25" y="50" width="36" height="16" rx="2" fill="#555"/><circle cx="30" cy="68" r="7" fill="none" stroke="#555" stroke-width="3"/><circle cx="55" cy="68" r="7" fill="none" stroke="#555" stroke-width="3"/><line x1="18" y1="50" x2="26" y2="58" stroke="#555" stroke-width="3"/><line x1="18" y1="18" x2="82" y2="82" stroke="#CC0000" stroke-width="8"/></svg>`,
   desc:"Proibida a circulação de veículos de tração animal (carroças, charretes) no trecho.",
   punicao:"Grave (5 pontos).",dica:"Veículos de tração animal devem buscar rotas alternativas permitidas."},

  {id:"R-23",n:"Proibido Veículos com Produtos Perigosos",t:"reg",
   i:`<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="white" stroke="#CC0000" stroke-width="6"/><polygon points="50,20 80,72 20,72" fill="#f59e0b" stroke="#333" stroke-width="2"/><text x="50" y="62" text-anchor="middle" fill="#333" font-size="26" font-weight="bold" font-family="Arial">!</text><line x1="18" y1="18" x2="82" y2="82" stroke="#CC0000" stroke-width="8"/></svg>`,
   desc:"Proibida a passagem de veículos transportando produtos perigosos (inflamáveis, explosivos, tóxicos).",
   punicao:"Grave (5 pontos) + penalidades específicas por tipo de produto.",dica:"Restrições geralmente em túneis, centros urbanos e locais sensíveis."},

  {id:"R-24a",n:"Sentido Obrigatório — Frente",t:"reg",
   i:`<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="#1565C0" stroke="white" stroke-width="4"/><path d="M50,22 L50,78 M50,22 L30,42 M50,22 L70,42" stroke="white" stroke-width="10" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
   desc:"Obrigatório seguir em frente. Circulação somente no sentido indicado.",
   punicao:"Grave (5 pontos) se virar ou retornar onde proibido.",dica:"Círculo azul com seta branca = obrigatório. Diferente da proibição (borda vermelha)."},

  {id:"R-24b",n:"Sentido Obrigatório — Direita",t:"reg",
   i:`<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="#1565C0" stroke="white" stroke-width="4"/><path d="M22,50 L78,50 M78,50 L58,30 M78,50 L58,70" stroke="white" stroke-width="10" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
   desc:"Obrigatório virar à direita. Proibido seguir em frente ou virar à esquerda.",
   punicao:"Grave (5 pontos).",dica:"Seta azul apontando à direita. Obedeça antes de chegar ao cruzamento."},

  {id:"R-24c",n:"Sentido Obrigatório — Esquerda",t:"reg",
   i:`<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="#1565C0" stroke="white" stroke-width="4"/><path d="M78,50 L22,50 M22,50 L42,30 M22,50 L42,70" stroke="white" stroke-width="10" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
   desc:"Obrigatório virar à esquerda. Proibido seguir em frente ou virar à direita.",
   punicao:"Grave (5 pontos).",dica:"Seta azul apontando à esquerda."},

  {id:"R-24d",n:"Passagem Obrigatória — Direita",t:"reg",
   i:`<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="#1565C0" stroke="white" stroke-width="4"/><path d="M50,20 C50,20 74,20 74,50 C74,80 50,80 50,80 M50,20 L65,35 M50,80 L65,65" stroke="white" stroke-width="8" fill="none" stroke-linecap="round"/></svg>`,
   desc:"O veículo deve passar obrigatoriamente pelo lado direito do obstáculo (ilha, canteiro).",
   punicao:"Grave (5 pontos) se contornar pelo lado errado.",dica:"Geralmente em ilhas divisórias e rotatórias. Seta indicando desvio à direita."},

  {id:"R-24e",n:"Passagem Obrigatória — Esquerda",t:"reg",
   i:`<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="#1565C0" stroke="white" stroke-width="4"/><path d="M50,20 C50,20 26,20 26,50 C26,80 50,80 50,80 M50,20 L35,35 M50,80 L35,65" stroke="white" stroke-width="8" fill="none" stroke-linecap="round"/></svg>`,
   desc:"O veículo deve passar obrigatoriamente pelo lado esquerdo do obstáculo.",
   punicao:"Grave (5 pontos).",dica:"Menos comum. Segue mesma lógica da R-24d, mas para o lado esquerdo."},

  {id:"R-24f",n:"Passagem Obrigatória — Ambos os Lados",t:"reg",
   i:`<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="#1565C0" stroke="white" stroke-width="4"/><path d="M50,20 C30,20 20,35 20,50 C20,65 30,80 50,80" stroke="white" stroke-width="6" fill="none"/><path d="M50,20 C70,20 80,35 80,50 C80,65 70,80 50,80" stroke="white" stroke-width="6" fill="none"/><path d="M20,50 L10,40 M20,50 L10,60 M80,50 L90,40 M80,50 L90,60" stroke="white" stroke-width="4" stroke-linecap="round" fill="none"/></svg>`,
   desc:"O veículo pode passar por ambos os lados do obstáculo central.",
   punicao:"Sem penalidade específica se passar por qualquer lado.",dica:"Flexível — permite passagem pelos dois lados da ilha ou canteiro."},

  {id:"R-25a",n:"Início de Pista Dupla",t:"reg",
   i:`<svg viewBox="0 0 100 100"><rect x="5" y="5" width="90" height="90" rx="5" fill="white" stroke="#CC0000" stroke-width="5"/><line x1="20" y1="50" x2="80" y2="50" stroke="#ccc" stroke-width="2" stroke-dasharray="6,4"/><path d="M20,35 L50,35 L50,20 M50,20 L42,28 M50,20 L58,28" stroke="#1565C0" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M80,65 L50,65 L50,80 M50,80 L42,72 M50,80 L58,72" stroke="#1565C0" stroke-width="5" fill="none" stroke-linecap="round"/></svg>`,
   desc:"Início de trecho de pista dupla. Duas pistas de rolamento separadas por canteiro ou barreira.",
   punicao:"Grave (5 pontos) por ultrapassagem proibida ou uso incorreto das pistas.",dica:"A partir daqui, você circula em pista com sentidos separados fisicamente."},

  {id:"R-25b",n:"Fim de Pista Dupla",t:"reg",
   i:`<svg viewBox="0 0 100 100"><rect x="5" y="5" width="90" height="90" rx="5" fill="white" stroke="#CC0000" stroke-width="5"/><line x1="20" y1="50" x2="80" y2="50" stroke="#ccc" stroke-width="2" stroke-dasharray="6,4"/><path d="M50,20 L50,35 L80,35 M80,35 L72,28 M80,35 L72,42" stroke="#1565C0" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M50,80 L50,65 L20,65 M20,65 L28,58 M20,65 L28,72" stroke="#1565C0" stroke-width="5" fill="none" stroke-linecap="round"/></svg>`,
   desc:"Fim do trecho de pista dupla. As pistas se unificam à frente.",
   punicao:"Atenção redobrada na junção das pistas.",dica:"Reduza a velocidade e prepare-se para a convergência das pistas."},

  {id:"R-26",n:"Proibido Buzinar",t:"reg",
   i:`<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="white" stroke="#CC0000" stroke-width="6"/><path d="M25,45 L40,45 L55,30 L55,70 L40,55 L25,55 Z" fill="#555"/><path d="M58,38 Q70,50 58,62" fill="none" stroke="#555" stroke-width="4"/><path d="M62,33 Q78,50 62,67" fill="none" stroke="#555" stroke-width="4"/><line x1="18" y1="18" x2="82" y2="82" stroke="#CC0000" stroke-width="8"/></svg>`,
   desc:"Proibido o uso da buzina no local (área hospitalar, residencial, noturna).",
   punicao:"Leve (3 pontos) pelo uso indevido da buzina.",dica:"Use a buzina somente para alertar sobre perigo iminente."},

  {id:"R-27",n:"Uso Obrigatório de Corrente",t:"reg",
   i:`<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="white" stroke="#1565C0" stroke-width="6"/><circle cx="32" cy="62" r="13" fill="none" stroke="#1565C0" stroke-width="4"/><circle cx="68" cy="62" r="13" fill="none" stroke="#1565C0" stroke-width="4"/><path d="M35,55 Q50,45 65,55" fill="none" stroke="#1565C0" stroke-width="5" stroke-dasharray="5,3"/></svg>`,
   desc:"Obrigatório o uso de correntes nos pneus devido a neve ou gelo na pista.",
   punicao:"Grave (5 pontos) por não usar correntes em trecho obrigatório.",dica:"Aplica-se em regiões de clima frio extremo com neve ou gelo na pista."},

  {id:"R-28",n:"Sentido de Circulação na Rotatória",t:"reg",
   i:`<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="#1565C0" stroke="white" stroke-width="4"/><circle cx="50" cy="50" r="20" fill="none" stroke="white" stroke-width="4"/><path d="M50,30 A20,20 0 1,1 30,50 L36,50 L28,42 L22,50 L28,58 L36,50" stroke="white" stroke-width="5" fill="none" stroke-linecap="round"/></svg>`,
   desc:"Indica o sentido de circulação obrigatório na rotatória (anti-horário).",
   punicao:"Grave (5 pontos) por circular no sentido errado.",dica:"No Brasil, sempre no sentido anti-horário. Quem está dentro tem preferência."},

  {id:"R-29",n:"Pedestre — Calçada Obrigatória",t:"reg",
   i:`<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="#1565C0" stroke="white" stroke-width="4"/><circle cx="50" cy="28" r="9" fill="white"/><path d="M50,40 L50,62 M50,50 L38,60 M50,50 L62,60 M50,62 L41,78 M50,62 L59,78" stroke="white" stroke-width="5" fill="none" stroke-linecap="round"/></svg>`,
   desc:"Circulação de pedestres obrigatória pela calçada, passeio ou local indicado.",
   punicao:"Orientação — pedestres devem usar calçadas quando disponíveis.",dica:"Em rodovias, use o acostamento no sentido contrário ao tráfego de veículos."},

  {id:"R-30",n:"Ciclista — Via Obrigatória",t:"reg",
   i:`<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="#1565C0" stroke="white" stroke-width="4"/><circle cx="30" cy="60" r="12" fill="none" stroke="white" stroke-width="4"/><circle cx="70" cy="60" r="12" fill="none" stroke="white" stroke-width="4"/><path d="M40,60 L50,40 L60,55 M50,40 L55,30 L65,30" stroke="white" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="50" cy="30" r="5" fill="white"/></svg>`,
   desc:"Circulação obrigatória de bicicletas na via ou faixa indicada.",
   punicao:"Orientação para ciclistas. Veículos motorizados proibidos.",dica:"Respeite os espaços exclusivos do ciclista. Dê preferência ao cruzar."},

  // ════════════════════════════════════════════════
  //  ADVERTÊNCIA (A) — Triângulo amarelo fundo amarelo
  // ════════════════════════════════════════════════

  {id:"A-1",n:"Curva à Esquerda",t:"adv",
   i:`<svg viewBox="0 0 100 100"><polygon points="50,5 95,92 5,92" fill="#F5C518" stroke="#333" stroke-width="4"/><path d="M55,80 L55,52 Q55,32 38,32 L30,32 L30,26 L20,38 L30,50 L30,44 Q47,44 47,56 L47,80 Z" fill="#333"/></svg>`,
   desc:"Curva acentuada à esquerda à frente. Reduza a velocidade com antecedência.",
   punicao:"Excesso de velocidade em curvas = grave.",dica:"Reduza ANTES da curva, não durante. Em pista molhada, reduza ainda mais."},

  {id:"A-2",n:"Curva à Direita",t:"adv",
   i:`<svg viewBox="0 0 100 100"><polygon points="50,5 95,92 5,92" fill="#F5C518" stroke="#333" stroke-width="4"/><path d="M45,80 L45,52 Q45,32 62,32 L70,32 L70,26 L80,38 L70,50 L70,44 Q53,44 53,56 L53,80 Z" fill="#333"/></svg>`,
   desc:"Curva acentuada à direita à frente. Reduza a velocidade com antecedência.",
   punicao:"Excesso de velocidade em curvas = grave.",dica:"Não freie na curva — isso pode causar derrapagem."},

  {id:"A-3",n:"Curvas — Primeira à Esquerda",t:"adv",
   i:`<svg viewBox="0 0 100 100"><polygon points="50,5 95,92 5,92" fill="#F5C518" stroke="#333" stroke-width="4"/><path d="M60,78 L60,58 Q60,44 50,38 Q40,32 35,42 Q30,52 40,58 Q50,64 50,78" fill="none" stroke="#333" stroke-width="5" stroke-linecap="round"/></svg>`,
   desc:"Trecho com curvas sucessivas, iniciando com curva à esquerda.",
   punicao:"Excesso de velocidade em curvas = grave.",dica:"Atenção a curvas múltiplas. Mantenha velocidade reduzida por todo o trecho."},

  {id:"A-4",n:"Curvas — Primeira à Direita",t:"adv",
   i:`<svg viewBox="0 0 100 100"><polygon points="50,5 95,92 5,92" fill="#F5C518" stroke="#333" stroke-width="4"/><path d="M40,78 L40,58 Q40,44 50,38 Q60,32 65,42 Q70,52 60,58 Q50,64 50,78" fill="none" stroke="#333" stroke-width="5" stroke-linecap="round"/></svg>`,
   desc:"Trecho com curvas sucessivas, iniciando com curva à direita.",
   punicao:"Excesso de velocidade em curvas = grave.",dica:"Reduza antes de entrar no trecho de curvas e mantenha velocidade constante."},

  {id:"A-5",n:"Interseção em T — Esquerda",t:"adv",
   i:`<svg viewBox="0 0 100 100"><polygon points="50,5 95,92 5,92" fill="#F5C518" stroke="#333" stroke-width="4"/><rect x="44" y="30" width="12" height="45" fill="#333"/><rect x="20" y="62" width="24" height="12" fill="#333"/></svg>`,
   desc:"Interseção em T à frente com via secundária saindo à esquerda.",
   punicao:"Grave se não respeitar a preferência no cruzamento.",dica:"Reduza e verifique o tráfego vindo da via à esquerda."},

  {id:"A-6",n:"Interseção em T — Direita",t:"adv",
   i:`<svg viewBox="0 0 100 100"><polygon points="50,5 95,92 5,92" fill="#F5C518" stroke="#333" stroke-width="4"/><rect x="44" y="30" width="12" height="45" fill="#333"/><rect x="56" y="62" width="24" height="12" fill="#333"/></svg>`,
   desc:"Interseção em T à frente com via secundária saindo à direita.",
   punicao:"Grave se não respeitar a preferência no cruzamento.",dica:"Reduza e verifique o tráfego vindo da via à direita."},

  {id:"A-7",n:"Cruzamento",t:"adv",
   i:`<svg viewBox="0 0 100 100"><polygon points="50,5 95,92 5,92" fill="#F5C518" stroke="#333" stroke-width="4"/><rect x="44" y="30" width="12" height="52" fill="#333"/><rect x="25" y="50" width="50" height="12" fill="#333"/></svg>`,
   desc:"Cruzamento à frente. Reduza e esteja pronto para ceder preferência.",
   punicao:"Grave se não respeitar a preferência.",dica:"Sem sinalização: preferência é de quem vem pela direita."},

  {id:"A-8",n:"Rotatória",t:"adv",
   i:`<svg viewBox="0 0 100 100"><polygon points="50,5 95,92 5,92" fill="#F5C518" stroke="#333" stroke-width="4"/><circle cx="50" cy="60" r="20" fill="none" stroke="#333" stroke-width="5"/><path d="M50,40 L50,50 M50,40 L44,46 M50,40 L56,46" stroke="#333" stroke-width="4" fill="none" stroke-linecap="round"/></svg>`,
   desc:"Rotatória à frente. Ao entrar, ceda preferência a quem já está circulando.",
   punicao:"Grave (5 pontos) por não ceder preferência.",dica:"Quem está dentro da rotatória tem preferência absoluta."},

  {id:"A-9",n:"Semáforo à Frente",t:"adv",
   i:`<svg viewBox="0 0 100 100"><polygon points="50,5 95,92 5,92" fill="#F5C518" stroke="#333" stroke-width="4"/><rect x="40" y="22" width="20" height="55" rx="5" fill="#1a1a1a"/><circle cx="50" cy="34" r="7" fill="#E63946"/><circle cx="50" cy="50" r="7" fill="#f59e0b"/><circle cx="50" cy="66" r="7" fill="#22c55e"/></svg>`,
   desc:"Há um semáforo à frente. Prepare-se para possível parada.",
   punicao:"Avançar vermelho = gravíssima (7 pontos).",dica:"Reduza ao se aproximar. Nunca tente 'pegar o verde' acelerando."},

  {id:"A-10",n:"Obras na Pista",t:"adv",
   i:`<svg viewBox="0 0 100 100"><polygon points="50,5 95,92 5,92" fill="#F5C518" stroke="#333" stroke-width="4"/><rect x="36" y="34" width="28" height="4" rx="2" fill="#333"/><rect x="44" y="38" width="12" height="35" fill="#333"/><rect x="30" y="74" width="40" height="8" rx="2" fill="#333"/></svg>`,
   desc:"Obras na via à frente. Pista pode estar estreitada com trabalhadores.",
   punicao:"Excesso de velocidade em obras = gravíssima (7 pontos).",dica:"Velocidade em obras geralmente limitada a 30 km/h."},

  {id:"A-11",n:"Lombada",t:"adv",
   i:`<svg viewBox="0 0 100 100"><polygon points="50,5 95,92 5,92" fill="#F5C518" stroke="#333" stroke-width="4"/><ellipse cx="50" cy="65" rx="28" ry="13" fill="#333"/><rect x="22" y="73" width="56" height="7" fill="#333"/></svg>`,
   desc:"Lombada (elevação) na pista à frente. Reduza a velocidade.",
   punicao:"Danos por excesso de velocidade são responsabilidade do condutor.",dica:"Reduza para no máximo 30 km/h. Veículos altos devem reduzir ainda mais."},

  {id:"A-12",n:"Depressão",t:"adv",
   i:`<svg viewBox="0 0 100 100"><polygon points="50,5 95,92 5,92" fill="#F5C518" stroke="#333" stroke-width="4"/><path d="M22,38 L50,70 L78,38" fill="none" stroke="#333" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
   desc:"Depressão (buraco ou afundamento) na pista à frente. Perigo de perder controle.",
   punicao:"Grave por excesso de velocidade.",dica:"Reduza bastante. A suspensão pode falhar causando perda de controle."},

  {id:"A-13",n:"Pista Escorregadia",t:"adv",
   i:`<svg viewBox="0 0 100 100"><polygon points="50,5 95,92 5,92" fill="#F5C518" stroke="#333" stroke-width="4"/><circle cx="58" cy="36" r="9" fill="#333"/><path d="M33,82 Q48,55 65,62 Q75,66 72,78" fill="none" stroke="#333" stroke-width="6" stroke-linecap="round"/></svg>`,
   desc:"Pista escorregadia à frente (molhada, óleo, areia).",
   punicao:"Acidentes por excesso de velocidade = responsabilidade do condutor.",dica:"Reduza, aumente distância de segurança e evite freadas bruscas."},

  {id:"A-14",n:"Passagem de Nível com Cancela",t:"adv",
   i:`<svg viewBox="0 0 100 100"><polygon points="50,5 95,92 5,92" fill="#F5C518" stroke="#333" stroke-width="4"/><rect x="30" y="52" width="40" height="12" fill="#333"/><rect x="44" y="30" width="12" height="35" fill="#333"/><rect x="15" y="50" width="35" height="6" fill="#E63946"/></svg>`,
   desc:"Cruzamento com linha férrea com cancela à frente.",
   punicao:"Não parar na cancela fechada = gravíssima.",dica:"SEMPRE pare com a cancela abaixada. Nunca force a passagem."},

  {id:"A-15",n:"Passagem de Nível sem Cancela",t:"adv",
   i:`<svg viewBox="0 0 100 100"><polygon points="50,5 95,92 5,92" fill="#F5C518" stroke="#333" stroke-width="4"/><rect x="30" y="52" width="40" height="12" fill="#333"/><rect x="44" y="30" width="12" height="35" fill="#333"/><rect x="36" y="50" width="28" height="4" fill="#E63946"/></svg>`,
   desc:"Cruzamento com linha férrea SEM cancela. Pare, olhe e ouça antes de cruzar.",
   punicao:"Não parar = grave (5 pontos).",dica:"SEMPRE pare, olhe nos dois sentidos. Nunca arrisque cruzar com trem se aproximando."},

  {id:"A-16",n:"Passagem de Bonde",t:"adv",
   i:`<svg viewBox="0 0 100 100"><polygon points="50,5 95,92 5,92" fill="#F5C518" stroke="#333" stroke-width="4"/><rect x="28" y="40" width="44" height="28" rx="3" fill="#333"/><rect x="30" y="35" width="40" height="8" rx="2" fill="#555"/><line x1="30" y1="68" x2="70" y2="68" stroke="#888" stroke-width="3"/></svg>`,
   desc:"Cruzamento ou passagem de linha de bonde (trem urbano, VLT) à frente.",
   punicao:"Grave se não ceder passagem ao bonde.",dica:"O bonde tem trilhos fixos e não desvia. Ceda passagem sempre."},

  {id:"A-17",n:"Área Escolar",t:"adv",
   i:`<svg viewBox="0 0 100 100"><polygon points="50,5 95,92 5,92" fill="#F5C518" stroke="#333" stroke-width="4"/><circle cx="50" cy="40" r="9" fill="#333"/><path d="M50,52 L50,72 M50,62 L40,70 M50,62 L60,70 M50,72 L42,86 M50,72 L58,86" stroke="#333" stroke-width="5" fill="none" stroke-linecap="round"/></svg>`,
   desc:"Área escolar. Vel. máxima 30 km/h. Atenção a crianças.",
   punicao:"Excesso de velocidade em área escolar tem penalidade agravada.",dica:"Horários críticos: entrada e saída de escola. Crianças agem de forma imprevisível."},

  {id:"A-18",n:"Animais na Pista",t:"adv",
   i:`<svg viewBox="0 0 100 100"><polygon points="50,5 95,92 5,92" fill="#F5C518" stroke="#333" stroke-width="4"/><ellipse cx="48" cy="60" rx="22" ry="14" fill="#333"/><circle cx="36" cy="44" r="9" fill="#333"/><rect x="30" y="62" width="6" height="16" fill="#333" rx="2"/><rect x="42" y="62" width="6" height="16" fill="#333" rx="2"/><rect x="55" y="62" width="6" height="16" fill="#333" rx="2"/><line x1="70" y1="55" x2="85" y2="48" stroke="#333" stroke-width="4"/></svg>`,
   desc:"Risco de animais na pista à frente. Reduza e fique atento.",
   punicao:"Danos causados a animais podem ser responsabilidade do condutor.",dica:"Atenção ao amanhecer e ao entardecer. Se ver animal, pare e espere ele sair."},

  {id:"A-19",n:"Pedestres na Pista",t:"adv",
   i:`<svg viewBox="0 0 100 100"><polygon points="50,5 95,92 5,92" fill="#F5C518" stroke="#333" stroke-width="4"/><circle cx="50" cy="35" r="9" fill="#333"/><path d="M50,47 L50,67 M50,57 L38,65 M50,57 L62,65 M50,67 L42,82 M50,67 L58,82" stroke="#333" stroke-width="5" fill="none" stroke-linecap="round"/></svg>`,
   desc:"Pedestres circulando na pista à frente. Reduza a velocidade.",
   punicao:"Não reduzir e causar acidente = grave ou gravíssima.",dica:"Especialmente em locais sem calçada. Ceda sempre a passagem ao pedestre."},

  {id:"A-20",n:"Crianças na Pista",t:"adv",
   i:`<svg viewBox="0 0 100 100"><polygon points="50,5 95,92 5,92" fill="#F5C518" stroke="#333" stroke-width="4"/><circle cx="42" cy="40" r="7" fill="#333"/><path d="M42,50 L42,65 M42,58 L34,64 M42,58 L50,64 M42,65 L36,78 M42,65 L48,78" stroke="#333" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="62" cy="43" r="6" fill="#333"/><path d="M62,52 L62,65 M62,60 L56,66 M62,60 L68,66 M62,65 L57,77 M62,65 L67,77" stroke="#333" stroke-width="4" fill="none" stroke-linecap="round"/></svg>`,
   desc:"Crianças circulando na pista à frente. Máxima atenção.",
   punicao:"Excesso de velocidade em área com crianças = penalidade agravada.",dica:"Crianças são imprevisíveis. Reduza antes da área, não somente ao avistá-las."},

  {id:"A-21",n:"Ciclistas na Pista",t:"adv",
   i:`<svg viewBox="0 0 100 100"><polygon points="50,5 95,92 5,92" fill="#F5C518" stroke="#333" stroke-width="4"/><circle cx="30" cy="63" r="11" fill="none" stroke="#333" stroke-width="4"/><circle cx="66" cy="63" r="11" fill="none" stroke="#333" stroke-width="4"/><path d="M40,63 L50,44 L58,55 M50,44 L52,35 L62,35" stroke="#333" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="50" cy="33" r="5" fill="#333"/></svg>`,
   desc:"Ciclistas circulando na pista à frente. Reduza a velocidade e dê espaço.",
   punicao:"Grave por não dar preferência ao ciclista quando necessário.",dica:"Ao ultrapassar ciclista, mantenha distância lateral mínima de 1,5 metro."},

  {id:"A-22",n:"Pista Irregular",t:"adv",
   i:`<svg viewBox="0 0 100 100"><polygon points="50,5 95,92 5,92" fill="#F5C518" stroke="#333" stroke-width="4"/><path d="M20,65 L30,50 L42,62 L52,48 L64,60 L74,45 L80,55" fill="none" stroke="#333" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
   desc:"Pista com irregularidades (buracos, ondulações, asfalto ruim) à frente.",
   punicao:"Danos causados pela velocidade inadequada = responsabilidade do condutor.",dica:"Reduza a velocidade. Pneus com pressão correta ajudam a absorver os impactos."},

  {id:"A-23",n:"Cascalho na Pista",t:"adv",
   i:`<svg viewBox="0 0 100 100"><polygon points="50,5 95,92 5,92" fill="#F5C518" stroke="#333" stroke-width="4"/><circle cx="35" cy="62" r="5" fill="#555"/><circle cx="50" cy="58" r="7" fill="#555"/><circle cx="65" cy="64" r="5" fill="#555"/><circle cx="42" cy="72" r="4" fill="#777"/><circle cx="58" cy="70" r="6" fill="#666"/></svg>`,
   desc:"Cascalho ou pedras soltas na pista à frente. Risco de perda de aderência.",
   punicao:"Acidentes por velocidade inadequada = responsabilidade do condutor.",dica:"Reduza. Cascalho pode causar derrapagem e pedras podem danificar outros veículos."},

  {id:"A-24",n:"Desvio de Pista",t:"adv",
   i:`<svg viewBox="0 0 100 100"><polygon points="50,5 95,92 5,92" fill="#F5C518" stroke="#333" stroke-width="4"/><path d="M38,78 L38,52 L62,34 L62,78" fill="none" stroke="#333" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
   desc:"Desvio na pista à frente. A via muda de direção abruptamente.",
   punicao:"Grave por excesso de velocidade.",dica:"Reduza velocidade antes do desvio. Mantenha atenção à nova direção da pista."},

  {id:"A-25",n:"Pista Estreita",t:"adv",
   i:`<svg viewBox="0 0 100 100"><polygon points="50,5 95,92 5,92" fill="#F5C518" stroke="#333" stroke-width="4"/><path d="M20,78 L20,60 L44,40 L56,40 L80,60 L80,78" fill="none" stroke="#333" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
   desc:"Pista que se estreita à frente. Redução da largura da via.",
   punicao:"Grave por não reduzir velocidade ou dar preferência.",dica:"Reduza e prepare-se para abrir espaço para o veículo que vem em sentido contrário."},

  {id:"A-26",n:"Ponte Estreita",t:"adv",
   i:`<svg viewBox="0 0 100 100"><polygon points="50,5 95,92 5,92" fill="#F5C518" stroke="#333" stroke-width="4"/><rect x="30" y="45" width="40" height="30" fill="none" stroke="#333" stroke-width="5"/><line x1="30" y1="75" x2="70" y2="75" stroke="#333" stroke-width="5"/><line x1="30" y1="45" x2="30" y2="75" stroke="#333" stroke-width="5"/><line x1="70" y1="45" x2="70" y2="75" stroke="#333" stroke-width="5"/></svg>`,
   desc:"Ponte estreita à frente. Largura da pista reduzida na ponte.",
   punicao:"Grave se causar obstrução ou acidente.",dica:"Dê preferência a quem já estiver na ponte. Sinalize em baixa visibilidade."},

  {id:"A-27",n:"Subida Acentuada",t:"adv",
   i:`<svg viewBox="0 0 100 100"><polygon points="50,5 95,92 5,92" fill="#F5C518" stroke="#333" stroke-width="4"/><path d="M20,75 L75,35" stroke="#333" stroke-width="7" stroke-linecap="round"/><text x="72" y="38" fill="#333" font-size="14" font-weight="bold" font-family="Arial">12%</text></svg>`,
   desc:"Subida acentuada à frente (declividade indicada). Veículos pesados devem usar baixas marchas.",
   punicao:"Ultrapassagem proibida em subidas sem visibilidade.",dica:"Engate marcha adequada antes da subida. Na subida, você tem preferência sobre quem desce."},

  {id:"A-28",n:"Descida Acentuada",t:"adv",
   i:`<svg viewBox="0 0 100 100"><polygon points="50,5 95,92 5,92" fill="#F5C518" stroke="#333" stroke-width="4"/><path d="M20,35 L75,75" stroke="#333" stroke-width="7" stroke-linecap="round"/><text x="18" y="38" fill="#333" font-size="14" font-weight="bold" font-family="Arial">12%</text></svg>`,
   desc:"Descida acentuada à frente (declividade indicada). Cuidado com freios.",
   punicao:"Acidentes por freios superaquecidos ou velocidade excessiva.",dica:"Use o motor como freio. Evite frear continuamente — os freios podem superaquecer."},

  {id:"A-29",n:"Névoa ou Neblina Frequente",t:"adv",
   i:`<svg viewBox="0 0 100 100"><polygon points="50,5 95,92 5,92" fill="#F5C518" stroke="#333" stroke-width="4"/><line x1="24" y1="48" x2="76" y2="48" stroke="#333" stroke-width="4" stroke-linecap="round"/><line x1="24" y1="60" x2="76" y2="60" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-dasharray="8,5"/><line x1="24" y1="72" x2="76" y2="72" stroke="#333" stroke-width="4" stroke-linecap="round"/></svg>`,
   desc:"Trecho com ocorrência frequente de névoa ou neblina. Reduza e use farol.",
   punicao:"Grave por não usar farol em condições de baixa visibilidade.",dica:"Use farol de neblina ou baixo. Reduza a velocidade. Aumente a distância de segurança."},

  {id:"A-30",n:"Vento Lateral",t:"adv",
   i:`<svg viewBox="0 0 100 100"><polygon points="50,5 95,92 5,92" fill="#F5C518" stroke="#333" stroke-width="4"/><path d="M20,38 Q40,46 20,54" fill="none" stroke="#333" stroke-width="4"/><path d="M26,46 Q48,56 26,66" fill="none" stroke="#333" stroke-width="4"/><path d="M32,54 Q56,64 32,74" fill="none" stroke="#333" stroke-width="4"/><path d="M60,30 L85,50 L60,70 L65,50 Z" fill="#333"/></svg>`,
   desc:"Trecho com vento lateral forte. Atenção ao controle direcional do veículo.",
   punicao:"Acidentes por falta de controle em ventos fortes = responsabilidade do condutor.",dica:"Reduza a velocidade. Segure o volante firme. Veículos altos e motos são mais afetados."},

  {id:"A-31",n:"Comprimento de Via Sem Saída",t:"adv",
   i:`<svg viewBox="0 0 100 100"><polygon points="50,5 95,92 5,92" fill="#F5C518" stroke="#333" stroke-width="4"/><rect x="44" y="30" width="12" height="35" fill="#333"/><rect x="30" y="62" width="40" height="12" fill="#333"/><circle cx="24" cy="68" r="6" fill="#E63946"/><circle cx="76" cy="68" r="6" fill="#E63946"/></svg>`,
   desc:"Via sem saída à frente. Não há continuidade da via. Prepare-se para retornar.",
   punicao:"Sem penalidade específica, mas ocupar a via desnecessariamente causa obstrução.",dica:"Se for entrar, certifique-se de ter espaço para sair ou manobrar de volta."},

  {id:"A-32",n:"Altura Limitada",t:"adv",
   i:`<svg viewBox="0 0 100 100"><polygon points="50,5 95,92 5,92" fill="#F5C518" stroke="#333" stroke-width="4"/><rect x="22" y="42" width="56" height="36" fill="none" stroke="#333" stroke-width="5"/><text x="50" y="68" text-anchor="middle" fill="#333" font-size="16" font-weight="bold" font-family="Arial">4,4m</text></svg>`,
   desc:"Advertência de limitação de altura à frente. Verifique a altura do seu veículo.",
   punicao:"Grave — danos à estrutura são responsabilidade do condutor.",dica:"Considere a altura total do veículo carregado, incluindo antenas e cargas na caçamba."},

  {id:"A-33",n:"Largura Limitada",t:"adv",
   i:`<svg viewBox="0 0 100 100"><polygon points="50,5 95,92 5,92" fill="#F5C518" stroke="#333" stroke-width="4"/><line x1="28" y1="38" x2="28" y2="78" stroke="#333" stroke-width="5" stroke-linecap="round"/><line x1="72" y1="38" x2="72" y2="78" stroke="#333" stroke-width="5" stroke-linecap="round"/><text x="50" y="66" text-anchor="middle" fill="#333" font-size="14" font-weight="bold" font-family="Arial">2,6m</text><line x1="28" y1="58" x2="72" y2="58" stroke="#333" stroke-width="3" stroke-dasharray="5,3"/></svg>`,
   desc:"Advertência de largura limitada à frente.",
   punicao:"Grave — danos por não respeitar a largura são responsabilidade do condutor.",dica:"Considere a largura total com espelhos. Caminhões devem ter atenção extra."},

  {id:"A-34",n:"Peso Limitado",t:"adv",
   i:`<svg viewBox="0 0 100 100"><polygon points="50,5 95,92 5,92" fill="#F5C518" stroke="#333" stroke-width="4"/><ellipse cx="50" cy="64" rx="18" ry="8" fill="#333"/><line x1="50" y1="36" x2="50" y2="56" stroke="#333" stroke-width="5"/><circle cx="50" cy="32" r="5" fill="#333"/><line x1="34" y1="36" x2="66" y2="36" stroke="#333" stroke-width="4"/></svg>`,
   desc:"Advertência de limite de peso à frente (ponte, viaduto, piso frágil).",
   punicao:"Grave — danos estruturais são responsabilidade do condutor.",dica:"Verifique o PBT do veículo (Peso Bruto Total) antes de prosseguir."},

  {id:"A-35",n:"Proximidade de Aeroporto",t:"adv",
   i:`<svg viewBox="0 0 100 100"><polygon points="50,5 95,92 5,92" fill="#F5C518" stroke="#333" stroke-width="4"/><path d="M50,30 L62,52 L76,56 L72,60 L58,58 L52,72 L48,72 L46,60 L32,62 L28,58 L42,52 Z" fill="#333"/></svg>`,
   desc:"Proximidade de aeroporto. Atenção a aeronaves em baixa altitude.",
   punicao:"Sem penalidade específica — alerta informativo.",dica:"Ruídos de aeronaves podem distrair o motorista. Mantenha atenção na via."},

  {id:"A-36",n:"Saída de Caminhões",t:"adv",
   i:`<svg viewBox="0 0 100 100"><polygon points="50,5 95,92 5,92" fill="#F5C518" stroke="#333" stroke-width="4"/><rect x="20" y="50" width="36" height="22" rx="2" fill="#333"/><rect x="56" y="55" width="20" height="17" rx="2" fill="#333"/><circle cx="30" cy="75" r="6" fill="#555"/><circle cx="66" cy="75" r="6" fill="#555"/><line x1="56" y1="50" x2="20" y2="50" stroke="#333" stroke-width="3"/></svg>`,
   desc:"Saída ou entrada de caminhões na via à frente. Atenção a manobras lentas.",
   punicao:"Grave por não reduzir velocidade e causar acidente.",dica:"Mantenha distância. Caminhões fazem manobras lentas e têm ponto cego amplo."},

  {id:"A-37",n:"Gado na Pista",t:"adv",
   i:`<svg viewBox="0 0 100 100"><polygon points="50,5 95,92 5,92" fill="#F5C518" stroke="#333" stroke-width="4"/><ellipse cx="50" cy="60" rx="24" ry="14" fill="#333"/><circle cx="34" cy="44" r="9" fill="#333"/><rect x="28" y="62" width="7" height="16" rx="2" fill="#333"/><rect x="38" y="62" width="7" height="16" rx="2" fill="#333"/><rect x="56" y="62" width="7" height="16" rx="2" fill="#333"/><rect x="66" y="62" width="7" height="16" rx="2" fill="#333"/><line x1="34" y1="40" x2="30" y2="30" stroke="#333" stroke-width="3"/><line x1="38" y1="40" x2="42" y2="30" stroke="#333" stroke-width="3"/></svg>`,
   desc:"Gado pode estar atravessando a pista à frente. Reduza a velocidade.",
   punicao:"Danos a animais podem ser responsabilidade do condutor.",dica:"Comum em estradas rurais. Ao anoitecer e amanhecer, animais são menos visíveis."},

  {id:"A-38",n:"Silhueta de Perigo",t:"adv",
   i:`<svg viewBox="0 0 100 100"><polygon points="50,5 95,92 5,92" fill="#F5C518" stroke="#333" stroke-width="4"/><text x="50" y="68" text-anchor="middle" fill="#333" font-size="52" font-weight="bold" font-family="Arial">!</text></svg>`,
   desc:"Perigo não especificado à frente. Sinal genérico de advertência.",
   punicao:"Grave por não reduzir a velocidade.",dica:"Geralmente acompanhada de placa complementar informando o tipo de perigo."},

  {id:"A-39",n:"Declive com Curva",t:"adv",
   i:`<svg viewBox="0 0 100 100"><polygon points="50,5 95,92 5,92" fill="#F5C518" stroke="#333" stroke-width="4"/><path d="M20,35 L45,60 Q55,72 72,68" fill="none" stroke="#333" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
   desc:"Declive combinado com curva à frente. Situação de risco ampliado.",
   punicao:"Grave por excesso de velocidade.",dica:"Reduza muito antes da curva em descida. Freios aquecidos perdem eficiência."},

  {id:"A-40",n:"Pista Dividida",t:"adv",
   i:`<svg viewBox="0 0 100 100"><polygon points="50,5 95,92 5,92" fill="#F5C518" stroke="#333" stroke-width="4"/><line x1="50" y1="30" x2="50" y2="78" stroke="#333" stroke-width="5" stroke-dasharray="8,5"/><path d="M30,78 L30,52 L50,30" fill="none" stroke="#333" stroke-width="5" stroke-linecap="round"/><path d="M70,78 L70,52 L50,30" fill="none" stroke="#333" stroke-width="5" stroke-linecap="round"/></svg>`,
   desc:"Início de divisão da pista à frente. Prepare-se para a bifurcação.",
   punicao:"Grave por não seguir a faixa corretamente.",dica:"Escolha seu caminho com antecedência e sinalize a mudança de faixa."},

  // ════════════════════════════════════════════════
  //  INDICAÇÃO (I) — Fundo azul ou verde
  // ════════════════════════════════════════════════

  {id:"I-1",n:"Posto de Saúde / Hospital",t:"ind",
   i:`<svg viewBox="0 0 100 100"><rect x="3" y="3" width="94" height="94" rx="8" fill="#1565C0"/><rect x="38" y="18" width="24" height="64" fill="white"/><rect x="18" y="38" width="64" height="24" fill="white"/></svg>`,
   desc:"Indica posto de saúde, hospital ou serviço médico de emergência próximo.",
   punicao:"Proibido estacionar em frente a serviços de emergência.",dica:"Em caso de acidente, siga esta placa para encontrar atendimento médico."},

  {id:"I-2",n:"Posto de Combustível",t:"ind",
   i:`<svg viewBox="0 0 100 100"><rect x="3" y="3" width="94" height="94" rx="8" fill="#1565C0"/><rect x="28" y="20" width="30" height="40" rx="3" fill="white"/><rect x="28" y="20" width="30" height="10" rx="3" fill="#aaa"/><rect x="60" y="30" width="14" height="22" rx="2" fill="white"/><rect x="62" y="52" width="4" height="14" rx="2" fill="#aaa"/></svg>`,
   desc:"Indica existência de posto de combustível nas proximidades.",
   punicao:"Sem penalidade específica.",dica:"Em rodovias, abasteça com antecedência antes de trechos longos sem postos."},

  {id:"I-3",n:"Estacionamento",t:"ind",
   i:`<svg viewBox="0 0 100 100"><rect x="3" y="3" width="94" height="94" rx="8" fill="#1565C0"/><text x="50" y="74" text-anchor="middle" fill="white" font-size="70" font-weight="bold" font-family="Arial">P</text></svg>`,
   desc:"Indica área de estacionamento permitido nas proximidades.",
   punicao:"Respeite as condições do estacionamento (horário, vagas especiais).",dica:"Verifique se há restrições de horário ou tipo de veículo."},

  {id:"I-4",n:"Faixa de Pedestres",t:"ind",
   i:`<svg viewBox="0 0 100 100"><rect x="3" y="3" width="94" height="94" rx="8" fill="#1565C0"/><circle cx="50" cy="22" r="10" fill="white"/><path d="M50,35 L50,65 M50,50 L35,60 M50,50 L65,60 M50,65 L38,82 M50,65 L62,82" stroke="white" stroke-width="6" stroke-linecap="round" fill="none"/></svg>`,
   desc:"Indica faixa de travessia de pedestres. Ceda passagem.",
   punicao:"Não dar preferência ao pedestre na faixa = grave (5 pontos).",dica:"O pedestre tem preferência absoluta. Pare ANTES da faixa, não sobre ela."},

  {id:"I-5",n:"Telefone de Emergência",t:"ind",
   i:`<svg viewBox="0 0 100 100"><rect x="3" y="3" width="94" height="94" rx="8" fill="#1565C0"/><rect x="28" y="22" width="44" height="56" rx="6" fill="white"/><rect x="34" y="30" width="32" height="28" rx="3" fill="#1565C0"/><circle cx="50" cy="68" r="6" fill="#1565C0"/></svg>`,
   desc:"Indica telefone de emergência em rodovias para comunicar acidentes.",
   punicao:"Sem penalidade específica.",dica:"Em caso de acidente em rodovias, use para acionar socorro."},

  {id:"I-6",n:"Serviço Mecânico",t:"ind",
   i:`<svg viewBox="0 0 100 100"><rect x="3" y="3" width="94" height="94" rx="8" fill="#1565C0"/><path d="M35,65 L50,30 L65,65 M42,52 L58,52" stroke="white" stroke-width="6" fill="none" stroke-linecap="round"/><circle cx="50" cy="72" r="8" fill="none" stroke="white" stroke-width="5"/></svg>`,
   desc:"Indica oficina mecânica ou serviço de assistência a veículos próximo.",
   punicao:"Sem penalidade específica.",dica:"Em caso de pane, siga esta indicação para encontrar assistência."},

  {id:"I-7",n:"Hotel / Pousada",t:"ind",
   i:`<svg viewBox="0 0 100 100"><rect x="3" y="3" width="94" height="94" rx="8" fill="#1565C0"/><rect x="20" y="40" width="60" height="45" rx="3" fill="white"/><polygon points="50,15 82,40 18,40" fill="white"/><rect x="38" y="60" width="14" height="25" rx="2" fill="#1565C0"/><rect x="58" y="55" width="16" height="14" rx="2" fill="#1565C0"/></svg>`,
   desc:"Indica hotel, pousada ou local de hospedagem próximo.",
   punicao:"Sem penalidade específica.",dica:"Em viagens longas, programe paradas para descanso a cada 4 horas."},

  {id:"I-8",n:"Restaurante",t:"ind",
   i:`<svg viewBox="0 0 100 100"><rect x="3" y="3" width="94" height="94" rx="8" fill="#1565C0"/><rect x="34" y="22" width="6" height="35" rx="3" fill="white"/><rect x="46" y="22" width="6" height="35" rx="3" fill="white"/><rect x="58" y="22" width="6" height="28" rx="3" fill="white"/><rect x="58" y="40" width="14" height="6" rx="2" fill="white"/><ellipse cx="63" cy="36" rx="8" ry="8" fill="none" stroke="white" stroke-width="4"/><rect x="22" y="64" width="56" height="6" rx="3" fill="white"/></svg>`,
   desc:"Indica restaurante ou local para alimentação próximo.",
   punicao:"Sem penalidade específica.",dica:"Comer enquanto dirige é infração grave. Pare para as refeições."},

  {id:"I-9",n:"Camping",t:"ind",
   i:`<svg viewBox="0 0 100 100"><rect x="3" y="3" width="94" height="94" rx="8" fill="#1565C0"/><polygon points="50,20 78,70 22,70" fill="none" stroke="white" stroke-width="5"/><line x1="50" y1="20" x2="50" y2="70" stroke="white" stroke-width="3"/><line x1="22" y1="70" x2="78" y2="70" stroke="white" stroke-width="5"/></svg>`,
   desc:"Indica área de camping nas proximidades.",
   punicao:"Camping em beiras de estrada é proibido. Use áreas sinalizadas.",dica:"Use apenas áreas de camping autorizadas e sinalizadas."},

  {id:"I-10",n:"Área de Lazer / Turismo",t:"ind",
   i:`<svg viewBox="0 0 100 100"><rect x="3" y="3" width="94" height="94" rx="8" fill="#1565C0"/><circle cx="50" cy="45" r="22" fill="none" stroke="white" stroke-width="5"/><rect x="46" y="62" width="8" height="22" rx="2" fill="white"/><rect x="34" y="76" width="32" height="6" rx="3" fill="white"/></svg>`,
   desc:"Indica área de lazer, parque ou local de descanso próximo.",
   punicao:"Sem penalidade específica.",dica:"A cada 2 horas de viagem, pare para descansar."},

  {id:"I-11",n:"Banheiro / Sanitários",t:"ind",
   i:`<svg viewBox="0 0 100 100"><rect x="3" y="3" width="94" height="94" rx="8" fill="#1565C0"/><circle cx="35" cy="28" r="8" fill="white"/><path d="M27,40 L27,62 M43,40 L43,62 M35,40 L35,75 M27,62 L24,80 M43,62 L46,80" stroke="white" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="65" cy="28" r="8" fill="white"/><path d="M52,40 L52,75 L60,75 L65,62 L70,75 L78,75 L78,40 L52,40" stroke="white" stroke-width="4" fill="none" stroke-linecap="round"/></svg>`,
   desc:"Indica banheiros ou sanitários públicos disponíveis nas proximidades.",
   punicao:"Sem penalidade específica.",dica:"Instalações geralmente gratuitas em postos de serviço e áreas de descanso."},

  {id:"I-12",n:"Área de Descanso",t:"ind",
   i:`<svg viewBox="0 0 100 100"><rect x="3" y="3" width="94" height="94" rx="8" fill="#1565C0"/><rect x="18" y="55" width="30" height="18" rx="4" fill="white"/><rect x="50" y="50" width="34" height="23" rx="4" fill="white"/><rect x="18" y="70" width="66" height="8" rx="2" fill="#0d47a1"/><circle cx="36" cy="38" r="12" fill="none" stroke="white" stroke-width="4"/><path d="M36,30 L36,38 L42,38" stroke="white" stroke-width="3" stroke-linecap="round"/></svg>`,
   desc:"Indica área de descanso ou parada para descanso em rodovias.",
   punicao:"Sem penalidade específica.",dica:"Use obrigatoriamente a cada 4 horas de condução contínua."},

  {id:"I-13",n:"Pedágio",t:"ind",
   i:`<svg viewBox="0 0 100 100"><rect x="3" y="3" width="94" height="94" rx="8" fill="#1565C0"/><text x="50" y="42" text-anchor="middle" fill="white" font-size="14" font-weight="bold" font-family="Arial">PEDÁGIO</text><text x="50" y="70" text-anchor="middle" fill="#fcd34d" font-size="32" font-family="Arial">$</text></svg>`,
   desc:"Posto de pedágio à frente. Prepare-se para parar e pagar.",
   punicao:"Não pagar o pedágio = infração grave.",dica:"Com tag eletrônica, use a faixa específica respeitando a velocidade permitida."},

  {id:"I-14",n:"Ponte",t:"ind",
   i:`<svg viewBox="0 0 100 100"><rect x="3" y="3" width="94" height="94" rx="8" fill="#1565C0"/><line x1="15" y1="65" x2="85" y2="65" stroke="white" stroke-width="5"/><line x1="30" y1="45" x2="30" y2="65" stroke="white" stroke-width="4"/><line x1="70" y1="45" x2="70" y2="65" stroke="white" stroke-width="4"/><path d="M15,65 Q30,35 50,45 Q70,35 85,65" fill="none" stroke="white" stroke-width="4"/></svg>`,
   desc:"Indica a existência de uma ponte à frente.",
   punicao:"Respeite os limites de peso e velocidade da ponte.",dica:"Em pontes, verifique largura e peso máximo permitidos."},

  {id:"I-15",n:"Túnel",t:"ind",
   i:`<svg viewBox="0 0 100 100"><rect x="3" y="3" width="94" height="94" rx="8" fill="#1565C0"/><path d="M15,75 L15,45 Q15,20 50,20 Q85,20 85,45 L85,75" fill="none" stroke="white" stroke-width="5"/><line x1="15" y1="75" x2="85" y2="75" stroke="white" stroke-width="5"/></svg>`,
   desc:"Indica a presença de um túnel à frente.",
   punicao:"Farol obrigatório em túneis.",dica:"Ligue o farol antes de entrar no túnel. Não use farol alto — causa ofuscamento."},

  {id:"I-16",n:"Balsa",t:"ind",
   i:`<svg viewBox="0 0 100 100"><rect x="3" y="3" width="94" height="94" rx="8" fill="#1565C0"/><rect x="15" y="55" width="70" height="16" rx="4" fill="white"/><rect x="30" y="38" width="18" height="18" rx="2" fill="white"/><rect x="55" y="42" width="14" height="14" rx="2" fill="white"/><path d="M10,75 Q30,68 50,72 Q70,76 90,70" fill="none" stroke="white" stroke-width="3"/></svg>`,
   desc:"Indica travessia por balsa à frente.",
   punicao:"Sem penalidade específica.",dica:"Verifique horários de operação da balsa antes de iniciar a viagem."},

  {id:"I-17",n:"Fronteira",t:"ind",
   i:`<svg viewBox="0 0 100 100"><rect x="3" y="3" width="94" height="94" rx="8" fill="#1565C0"/><text x="50" y="48" text-anchor="middle" fill="white" font-size="13" font-weight="bold" font-family="Arial">FRONTEIRA</text><line x1="20" y1="58" x2="80" y2="58" stroke="white" stroke-width="3" stroke-dasharray="8,4"/><text x="50" y="76" text-anchor="middle" fill="white" font-size="11" font-family="Arial">ALFÂNDEGA</text></svg>`,
   desc:"Indica a proximidade de posto de fronteira internacional.",
   punicao:"Sem penalidade específica.",dica:"Tenha documentos de identidade e do veículo em mão. Seguir as ordens da fiscalização."},

  {id:"I-18",n:"Área Urbana",t:"ind",
   i:`<svg viewBox="0 0 100 100"><rect x="3" y="3" width="94" height="94" rx="8" fill="#1565C0"/><rect x="20" y="50" width="16" height="32" fill="white"/><rect x="40" y="38" width="20" height="44" fill="white"/><rect x="64" y="46" width="16" height="36" fill="white"/><rect x="24" y="44" width="8" height="8" fill="#1565C0"/><rect x="44" y="44" width="8" height="8" fill="#1565C0"/><rect x="68" y="52" width="8" height="8" fill="#1565C0"/><rect x="44" y="56" width="8" height="8" fill="#1565C0"/></svg>`,
   desc:"Indica início de área urbana. Observe as normas de velocidade urbana.",
   punicao:"As velocidades máximas urbanas passam a vigorar.",dica:"Ao entrar em área urbana, a velocidade máxima cai para 60 km/h salvo indicação."},

  {id:"I-19",n:"Início de Rodovia",t:"ind",
   i:`<svg viewBox="0 0 100 100"><rect x="3" y="3" width="94" height="94" rx="8" fill="#116B2E"/><text x="50" y="42" text-anchor="middle" fill="white" font-size="13" font-weight="bold" font-family="Arial">BR-101</text><line x1="20" y1="52" x2="80" y2="52" stroke="white" stroke-width="3"/><text x="50" y="70" text-anchor="middle" fill="white" font-size="11" font-family="Arial">RODOVIA</text></svg>`,
   desc:"Indica início ou identificação de rodovia federal ou estadual.",
   punicao:"Os limites e regras da rodovia passam a vigorar.",dica:"Identifique a rodovia e consulte seu mapa ou GPS para informações do trecho."},

  {id:"I-20",n:"Saída de Emergência",t:"ind",
   i:`<svg viewBox="0 0 100 100"><rect x="3" y="3" width="94" height="94" rx="8" fill="#116B2E"/><rect x="15" y="40" width="70" height="28" rx="4" fill="none" stroke="white" stroke-width="4"/><text x="50" y="59" text-anchor="middle" fill="white" font-size="11" font-weight="bold" font-family="Arial">SAÍDA DE</text><path d="M65,54 L80,54 M75,49 L80,54 L75,59" stroke="white" stroke-width="3" stroke-linecap="round" fill="none"/></svg>`,
   desc:"Indica saída de emergência em túneis ou áreas de risco.",
   punicao:"Sem penalidade específica — alerta de segurança.",dica:"Em caso de incêndio ou acidente em túnel, dirija-se imediatamente à saída de emergência."},

  // ════════════════════════════════════════════════
  //  SEMÁFOROS (S)
  // ════════════════════════════════════════════════

  {id:"S-1",n:"Sinal Verde — Siga",t:"sem",
   i:`<svg viewBox="0 0 60 130"><rect x="5" y="5" width="50" height="120" rx="10" fill="#1a1a1a" stroke="#444" stroke-width="2"/><circle cx="30" cy="28" r="16" fill="#2a2a2a"/><circle cx="30" cy="65" r="16" fill="#2a2a2a"/><circle cx="30" cy="102" r="16" fill="#22c55e"/></svg>`,
   desc:"Sinal verde: via livre. O condutor pode prosseguir respeitando as demais normas.",
   punicao:"Sem penalidade para quem segue corretamente.",dica:"Verde não significa 'acelere'. Observe pedestres e veículos antes de prosseguir."},

  {id:"S-2",n:"Sinal Amarelo — Atenção",t:"sem",
   i:`<svg viewBox="0 0 60 130"><rect x="5" y="5" width="50" height="120" rx="10" fill="#1a1a1a" stroke="#444" stroke-width="2"/><circle cx="30" cy="28" r="16" fill="#2a2a2a"/><circle cx="30" cy="65" r="16" fill="#f59e0b"/><circle cx="30" cy="102" r="16" fill="#2a2a2a"/></svg>`,
   desc:"Sinal amarelo: atenção. Sinal prestes a fechar. Pare com segurança se possível.",
   punicao:"Avançar o amarelo quando possível parar = infração.",dica:"Amarelo NÃO significa 'acelere'. Se puder parar com segurança, pare."},

  {id:"S-3",n:"Sinal Vermelho — Pare",t:"sem",
   i:`<svg viewBox="0 0 60 130"><rect x="5" y="5" width="50" height="120" rx="10" fill="#1a1a1a" stroke="#444" stroke-width="2"/><circle cx="30" cy="28" r="16" fill="#E63946"/><circle cx="30" cy="65" r="16" fill="#2a2a2a"/><circle cx="30" cy="102" r="16" fill="#2a2a2a"/></svg>`,
   desc:"Sinal vermelho: parada obrigatória antes da linha de retenção.",
   punicao:"Avançar vermelho = gravíssima (7 pontos) — multa R$ 293,47.",dica:"Pare ANTES da faixa de pedestres. Aguarde o verde para prosseguir."},

  {id:"S-4",n:"Amarelo Piscante",t:"sem",
   i:`<svg viewBox="0 0 60 130"><rect x="5" y="5" width="50" height="120" rx="10" fill="#1a1a1a" stroke="#444" stroke-width="2"/><circle cx="30" cy="28" r="16" fill="#2a2a2a"/><circle cx="30" cy="65" r="16" fill="#f59e0b" opacity="0.6"/><circle cx="30" cy="102" r="16" fill="#2a2a2a"/><text x="30" y="70" text-anchor="middle" fill="white" font-size="14" font-weight="bold">!</text></svg>`,
   desc:"Amarelo piscante: atenção redobrada. Cruzamento sem preferência definida.",
   punicao:"Grave se não reduzir velocidade e causar acidente.",dica:"No amarelo piscante: preferência é de quem vem pela direita."},

  {id:"S-5",n:"Vermelho Piscante",t:"sem",
   i:`<svg viewBox="0 0 60 130"><rect x="5" y="5" width="50" height="120" rx="10" fill="#1a1a1a" stroke="#444" stroke-width="2"/><circle cx="30" cy="28" r="16" fill="#E63946" opacity="0.6"/><circle cx="30" cy="65" r="16" fill="#2a2a2a"/><circle cx="30" cy="102" r="16" fill="#2a2a2a"/><text x="30" y="33" text-anchor="middle" fill="white" font-size="14" font-weight="bold">!</text></svg>`,
   desc:"Vermelho piscante: parada obrigatória — equivale à placa PARE.",
   punicao:"Gravíssima (7 pontos) se não parar.",dica:"Vermelho piscante tem o mesmo efeito do PARE. Parada total obrigatória."},

  {id:"S-6",n:"Verde Piscante",t:"sem",
   i:`<svg viewBox="0 0 60 130"><rect x="5" y="5" width="50" height="120" rx="10" fill="#1a1a1a" stroke="#444" stroke-width="2"/><circle cx="30" cy="28" r="16" fill="#2a2a2a"/><circle cx="30" cy="65" r="16" fill="#2a2a2a"/><circle cx="30" cy="102" r="16" fill="#22c55e" opacity="0.7"/></svg>`,
   desc:"Verde piscante: o sinal está prestes a mudar para amarelo. Prepare-se para parar.",
   punicao:"Sem penalidade específica — alerta para o condutor.",dica:"Verde piscando = sinal vai fechar. Se seguro, pare; se muito próximo, passe com cuidado."},

  {id:"S-7",n:"Seta Verde — Conversão Permitida",t:"sem",
   i:`<svg viewBox="0 0 60 130"><rect x="5" y="5" width="50" height="120" rx="10" fill="#1a1a1a" stroke="#444" stroke-width="2"/><circle cx="30" cy="28" r="16" fill="#2a2a2a"/><circle cx="30" cy="65" r="16" fill="#2a2a2a"/><circle cx="30" cy="102" r="16" fill="#22c55e"/><text x="30" y="107" text-anchor="middle" fill="white" font-size="14">→</text></svg>`,
   desc:"Seta verde no semáforo indica que a conversão no sentido da seta está permitida.",
   punicao:"Seguir o sentido errado = grave.",dica:"A seta pode indicar direita, esquerda ou retorno. Siga apenas no sentido indicado."},

  // ════════════════════════════════════════════════
  //  ESPECIAIS / EDUCAÇÃO / SERVIÇOS (E)
  // ════════════════════════════════════════════════

  {id:"E-1",n:"Faixa Exclusiva — Ônibus",t:"esp",
   i:`<svg viewBox="0 0 100 100"><rect x="3" y="3" width="94" height="94" rx="8" fill="#1565C0"/><text x="50" y="38" text-anchor="middle" fill="white" font-size="11" font-weight="bold" font-family="Arial">FAIXA</text><text x="50" y="54" text-anchor="middle" fill="white" font-size="11" font-weight="bold" font-family="Arial">EXCLUSIVA</text><text x="50" y="70" text-anchor="middle" fill="white" font-size="11" font-family="Arial">ÔNIBUS</text></svg>`,
   desc:"Faixa reservada exclusivamente para ônibus do transporte coletivo.",
   punicao:"Grave (5 pontos) para veículos não autorizados.",dica:"Motos também são proibidas na faixa exclusiva de ônibus."},

  {id:"E-2",n:"Ciclofaixa",t:"esp",
   i:`<svg viewBox="0 0 100 100"><rect x="3" y="3" width="94" height="94" rx="8" fill="#166534"/><circle cx="50" cy="58" r="22" fill="none" stroke="white" stroke-width="5"/><circle cx="50" cy="30" r="9" fill="white"/><path d="M40,58 L50,40 L60,58" fill="white"/></svg>`,
   desc:"Faixa exclusiva para bicicletas. Veículos motorizados proibidos.",
   punicao:"Gravíssima (7 pontos) para veículo motorizado na ciclofaixa.",dica:"Ao cruzar ciclofaixa, ceda passagem ao ciclista."},

  {id:"E-3",n:"Zona Escolar — 30 km/h",t:"esp",
   i:`<svg viewBox="0 0 100 100"><rect x="3" y="3" width="94" height="94" rx="5" fill="#F5C518"/><text x="50" y="35" text-anchor="middle" fill="#333" font-size="13" font-weight="bold" font-family="Arial">ZONA</text><text x="50" y="52" text-anchor="middle" fill="#333" font-size="13" font-weight="bold" font-family="Arial">ESCOLAR</text><text x="50" y="76" text-anchor="middle" fill="#CC0000" font-size="16" font-weight="bold" font-family="Arial">30 km/h</text></svg>`,
   desc:"Área escolar com velocidade máxima de 30 km/h. Atenção especial a crianças.",
   punicao:"Excesso de velocidade em zona escolar tem penalidade agravada.",dica:"Crianças podem aparecer de forma imprevisível. Atenção total."},

  {id:"E-4",n:"Proibido Buzinar",t:"esp",
   i:`<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="white" stroke="#CC0000" stroke-width="6"/><path d="M25,45 L40,45 L55,30 L55,70 L40,55 L25,55 Z" fill="#555"/><path d="M58,38 Q70,50 58,62" fill="none" stroke="#555" stroke-width="4"/><path d="M62,33 Q78,50 62,67" fill="none" stroke="#555" stroke-width="4"/><line x1="18" y1="18" x2="82" y2="82" stroke="#CC0000" stroke-width="8"/></svg>`,
   desc:"Proibido o uso da buzina no local (área hospitalar, residencial).",
   punicao:"Leve (3 pontos) pelo uso indevido da buzina.",dica:"Buzina só para perigo iminente. Use com moderação."},

  {id:"E-5",n:"Desvio Obrigatório",t:"esp",
   i:`<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" fill="#1565C0" stroke="white" stroke-width="4"/><path d="M30,50 L50,30 L70,50 L56,50 L56,70 L44,70 L44,50 Z" fill="white"/></svg>`,
   desc:"Desvio obrigatório. O condutor deve seguir pelo caminho alternativo indicado.",
   punicao:"Grave (5 pontos) se não obedecer.",dica:"Siga a seta indicada. Pode ser por obras, acidente ou restrição temporária."},

  {id:"E-6",n:"Via de Mão Dupla",t:"esp",
   i:`<svg viewBox="0 0 100 100"><rect x="3" y="3" width="94" height="94" rx="8" fill="#1565C0"/><path d="M20,38 L80,38 M70,28 L80,38 L70,48" stroke="white" stroke-width="6" fill="none" stroke-linecap="round"/><path d="M80,62 L20,62 M30,52 L20,62 L30,72" stroke="white" stroke-width="6" fill="none" stroke-linecap="round"/></svg>`,
   desc:"Indica via de mão dupla à frente. Atenção ao tráfego no sentido contrário.",
   punicao:"Grave por invadir a pista contrária.",dica:"Mantenha-se sempre à direita do eixo divisório."},

  {id:"E-7",n:"Via de Mão Única",t:"esp",
   i:`<svg viewBox="0 0 100 100"><rect x="3" y="3" width="94" height="94" rx="8" fill="#1565C0"/><path d="M18,50 L82,50 M72,40 L82,50 L72,60" stroke="white" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
   desc:"Indica via de mão única. O tráfego segue apenas no sentido indicado.",
   punicao:"Gravíssima (7 pontos) por entrar no sentido errado.",dica:"Verifique a seta antes de entrar na via. Preste atenção às placas nos cruzamentos."},

  {id:"E-8",n:"Estrada Rural / Não Pavimentada",t:"esp",
   i:`<svg viewBox="0 0 100 100"><rect x="3" y="3" width="94" height="94" rx="5" fill="#8B6914"/><path d="M20,80 L40,20 L60,20 L80,80" fill="none" stroke="white" stroke-width="5" stroke-linejoin="round"/><line x1="20" y1="80" x2="80" y2="80" stroke="white" stroke-width="5"/></svg>`,
   desc:"Estrada rural não pavimentada. Reduza a velocidade; tração e aderência reduzidas.",
   punicao:"Sem penalidade específica, mas velocidade adequada é obrigatória.",dica:"Reduza a velocidade. Pedras podem danificar o veículo e causar acidentes."},

  {id:"E-9",n:"Acesso a Portadores de Deficiência",t:"esp",
   i:`<svg viewBox="0 0 100 100"><rect x="3" y="3" width="94" height="94" rx="8" fill="#1565C0"/><circle cx="50" cy="24" r="9" fill="white"/><path d="M50,36 L50,60 M42,48 L50,60 L58,48 M40,62 Q38,80 50,84 Q62,80 60,62" stroke="white" stroke-width="5" fill="none" stroke-linecap="round"/><circle cx="36" cy="82" r="10" fill="none" stroke="white" stroke-width="4"/></svg>`,
   desc:"Indica vaga ou serviço reservado para pessoas com deficiência física.",
   punicao:"Gravíssima (7 pontos) por usar vaga de deficiente sem credencial.",dica:"Respeite as vagas reservadas. Apenas com credencial do DETRAN."},

  {id:"E-10",n:"Acesso a Idosos",t:"esp",
   i:`<svg viewBox="0 0 100 100"><rect x="3" y="3" width="94" height="94" rx="8" fill="#1565C0"/><circle cx="50" cy="24" r="9" fill="white"/><path d="M50,36 L44,62 M50,50 L42,58 M50,50 L58,58 M44,62 L38,78 M44,62 L52,78" stroke="white" stroke-width="5" fill="none" stroke-linecap="round"/><line x1="58" y1="55" x2="64" y2="78" stroke="white" stroke-width="4" stroke-linecap="round"/></svg>`,
   desc:"Indica vaga ou serviço prioritário para idosos (acima de 60 anos).",
   punicao:"Gravíssima (7 pontos) por usar vaga de idoso sem direito.",dica:"Vagas exclusivas para idosos devem ser respeitadas em estacionamentos."},

  {id:"E-11",n:"Área de Embarque e Desembarque",t:"esp",
   i:`<svg viewBox="0 0 100 100"><rect x="3" y="3" width="94" height="94" rx="8" fill="#1565C0"/><text x="50" y="36" text-anchor="middle" fill="white" font-size="9" font-weight="bold" font-family="Arial">EMBARQUE</text><text x="50" y="52" text-anchor="middle" fill="white" font-size="9" font-weight="bold" font-family="Arial">&amp;</text><text x="50" y="66" text-anchor="middle" fill="white" font-size="9" font-weight="bold" font-family="Arial">DESEMBARQUE</text></svg>`,
   desc:"Área destinada ao embarque e desembarque de passageiros. Parada permitida por tempo limitado.",
   punicao:"Grave por estacionar (em vez de só parar) nessa área.",dica:"Pode parar brevemente para embarque e desembarque. Não pode estacionar."},

  {id:"E-12",n:"Posto de Pesagem",t:"esp",
   i:`<svg viewBox="0 0 100 100"><rect x="3" y="3" width="94" height="94" rx="8" fill="#1565C0"/><rect x="20" y="36" width="60" height="38" rx="3" fill="none" stroke="white" stroke-width="4"/><text x="50" y="62" text-anchor="middle" fill="white" font-size="15" font-weight="bold" font-family="Arial">PESO</text><line x1="30" y1="74" x2="70" y2="74" stroke="white" stroke-width="4"/></svg>`,
   desc:"Indica posto de pesagem de veículos à frente.",
   punicao:"Grave por não parar no posto de pesagem quando exigido.",dica:"Veículos de carga pesados devem parar para verificação de peso."},

  {id:"E-13",n:"Área de Segurança de Trem",t:"esp",
   i:`<svg viewBox="0 0 100 100"><rect x="3" y="3" width="94" height="94" rx="5" fill="#CC0000"/><polygon points="50,15 80,38 80,68 50,85 20,68 20,38" fill="none" stroke="white" stroke-width="4"/><text x="50" y="46" text-anchor="middle" fill="white" font-size="11" font-weight="bold">ATENÇÃO</text><text x="50" y="62" text-anchor="middle" fill="white" font-size="11" font-weight="bold">TREM</text></svg>`,
   desc:"Atenção — passagem de trem. Cancelas ou sinaleiros controlam a passagem.",
   punicao:"Gravíssima por forçar a passagem com cancela fechada.",dica:"Quando o trem passar, aguarde a cancela subir antes de cruzar."},

  {id:"E-14",n:"Sinalização em Obras",t:"esp",
   i:`<svg viewBox="0 0 100 100"><rect x="3" y="3" width="94" height="94" rx="5" fill="#FF6600"/><text x="50" y="44" text-anchor="middle" fill="white" font-size="13" font-weight="bold" font-family="Arial">OBRAS</text><text x="50" y="60" text-anchor="middle" fill="white" font-size="11" font-family="Arial">30 km/h</text><line x1="20" y1="72" x2="80" y2="72" stroke="white" stroke-width="4"/></svg>`,
   desc:"Sinalização temporária de obras. Obedeça como sinalização definitiva.",
   punicao:"Excesso de velocidade em obras = gravíssima com fator multiplicador.",dica:"Placas laranjas são temporárias mas com força legal. Velocidade geralmente 30 km/h."},

  {id:"E-15",n:"Delineador de Curva",t:"esp",
   i:`<svg viewBox="0 0 100 100"><rect x="3" y="3" width="94" height="94" rx="5" fill="#CC0000"/><rect x="3" y="3" width="94" height="46" rx="5" fill="white"/><line x1="50" y1="3" x2="50" y2="97" stroke="#333" stroke-width="3" stroke-dasharray="8,4"/></svg>`,
   desc:"Delineador direcional indica o sentido de curva na pista. Usado à noite e em baixa visibilidade.",
   punicao:"Grave por não respeitar a sinalização e invadir a pista.",dica:"As listras inclinadas indicam para qual lado a pista curva."},

  {id:"E-16",n:"Início de Rodovia com Divisor",t:"esp",
   i:`<svg viewBox="0 0 100 100"><rect x="3" y="3" width="94" height="94" rx="8" fill="#116B2E"/><path d="M50,80 L50,20 M50,20 L40,30 M50,20 L60,30" stroke="white" stroke-width="6" fill="none" stroke-linecap="round"/><path d="M30,80 L30,50 M70,80 L70,50" stroke="white" stroke-width="4" fill="none" stroke-linecap="round"/></svg>`,
   desc:"Início de trecho de rodovia com divisor central.",
   punicao:"Respeite os sentidos definidos pelo divisor.",dica:"Mantenha-se na sua faixa. Nunca cruze a linha divisória."},

  {id:"E-17",n:"Cruzamento com Prioridade",t:"esp",
   i:`<svg viewBox="0 0 100 100"><rect x="3" y="3" width="94" height="94" rx="8" fill="#F5C518"/><rect x="44" y="15" width="12" height="70" fill="#333"/><rect x="15" y="44" width="70" height="12" fill="#333"/><circle cx="50" cy="50" r="10" fill="#F5C518"/></svg>`,
   desc:"Indica cruzamento onde a via que você percorre tem prioridade.",
   punicao:"Quem está na via preferencial mantém a prioridade.",dica:"Mesmo com prioridade, observe o tráfego cruzado por segurança."},
];

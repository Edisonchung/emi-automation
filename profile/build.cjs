// EMI Automation Sdn. Bhd. — company profile generator.
//   node profile/build.cjs [--variant general|kls|<name>] [--out <dir>]
// Facts and sentences live in company.json; audience differences in variants/*.json.
// Layouts live here. Output: profile/dist/<outputName>.pptx (export to PDF with export-pdf.sh).
const pptxgen = require('pptxgenjs')
const fs = require('fs')
const path = require('path')

// ── inputs ───────────────────────────────────────────────────────────────────
// Strict parsing: unknown flags, positionals and a missing value all exit non-zero
// (a silent fallback to "general" once overwrote the general deck by mistake).
let parsed
try {
  parsed = require('util').parseArgs({ options: { variant: { type: 'string', default: 'general' }, out: { type: 'string' } }, strict: true })
} catch (e) { console.error(`usage: node profile/build.cjs [--variant <name>] [--out <dir>]\n${e.message}`); process.exit(2) }
const variantName = parsed.values.variant
const outDir = parsed.values.out || path.join(__dirname, 'dist')
const HEAD = process.env.HEAD_FONT || 'Arial Narrow'
const BODY = process.env.BODY_FONT || 'Arial'

const readJson = (p) => JSON.parse(fs.readFileSync(p, 'utf8'))
const company = readJson(path.join(__dirname, 'company.json'))
const variantPath = path.join(__dirname, 'variants', `${variantName}.json`)
if (!fs.existsSync(variantPath)) { console.error(`unknown variant "${variantName}" (no ${variantPath})`); process.exit(2) }
const variant = readJson(variantPath)

// Variant schema: the fields every edition needs, and reference tags that exist.
const fail = (m) => { console.error(m); process.exit(2) }
for (const k of ['name', 'outputName', 'coverTagline', 'slides']) if (variant[k] == null || variant[k] === '') fail(`variant ${variantName}: "${k}" is required`)
if (!Array.isArray(variant.slides) || !variant.slides.length) fail(`variant ${variantName}: "slides" must be a non-empty array`)
const knownTags = new Set(company.references.rows.flatMap((r) => r.tags || []))
for (const t of variant.referencePriority || []) if (!knownTags.has(t)) fail(`variant ${variantName}: referencePriority tag "${t}" matches no reference row (known: ${[...knownTags].join(', ')})`)

// Apply dotted-path overrides: "a.b.c" replaces a value; "howWeWork.blocks.<key>" replaces one block by key.
const isObj = (v) => v !== null && typeof v === 'object'
const D = JSON.parse(JSON.stringify(company))
for (const [dotted, value] of Object.entries(variant.overrides || {})) {
  const parts = dotted.split('.')
  if (parts[0] === 'howWeWork' && parts[1] === 'blocks' && parts.length === 3) {
    const i = D.howWeWork.blocks.findIndex((b) => b.key === parts[2])
    if (i < 0) fail(`override target not found: ${dotted}`)
    for (const k of ['key', 'head', 'body']) if (typeof value?.[k] !== 'string') fail(`override ${dotted}: block needs string key/head/body`)
    D.howWeWork.blocks[i] = value
    continue
  }
  let o = D
  for (const k of parts.slice(0, -1)) { if (!isObj(o) || !Object.hasOwn(o, k)) fail(`override target not found: ${dotted}`); o = o[k] }
  if (!isObj(o) || !Object.hasOwn(o, parts.at(-1))) fail(`override target not found: ${dotted}`)
  o[parts.at(-1)] = value
}

const A = (f) => path.join(__dirname, 'assets', f)
const NB = ' '
const C = { black: '0A0A0A', dark: '111111', mid: '1A1A1A', line: '2A2A2A', text: 'E8E8E8', muted: '9A9A9A', white: 'FFFFFF', red: 'C0392B', redSoft: 'E8604F' }
const W = 13.333, H = 7.5, M = 0.65
const I = D.identity

const pres = new pptxgen()
pres.layout = 'LAYOUT_WIDE'
pres.author = I.legalName
pres.company = I.legalName
pres.title = `${I.legalName} — Company Profile ${D.revision.slice(0, 4)}${variant.audience && variant.name !== 'general' ? ` (${variant.audience})` : ''}`

// ── helpers ──────────────────────────────────────────────────────────────────
function dark(slide, color = C.black) { slide.background = { color } }
function eyebrow(slide, text, x = M, y = 0.55, w = 8) {
  slide.addText(text.toUpperCase(), { x, y, w, h: 0.3, fontFace: HEAD, fontSize: 11, bold: true, color: C.red, charSpacing: 4, margin: 0, isTextBox: true, valign: 'top' })
}
function title(slide, text, x = M, y = 0.9, w = 8, size = 40, h = 1.0) {
  slide.addText(text.toUpperCase(), { x, y, w, h, fontFace: HEAD, fontSize: size, bold: true, color: C.white, charSpacing: 1, margin: 0, isTextBox: true, valign: 'top' })
}
function para(slide, text, x, y, w, h, o = {}) {
  slide.addText(text, { x, y, w, h, fontFace: BODY, fontSize: o.size || 13, color: o.color || C.text, lineSpacingMultiple: 1.25, margin: 0, isTextBox: true, valign: o.valign || 'top', bold: !!o.bold, align: o.align || 'left' })
}
function label(slide, text, x, y, w, o = {}) {
  slide.addText(text.toUpperCase(), { x, y, w, h: o.h || 0.3, fontFace: HEAD, fontSize: o.size || 12, bold: true, color: o.color || C.white, charSpacing: 2, margin: 0, isTextBox: true, valign: 'top' })
}
function photo(slide, file, x, y, w, h, caption) {
  slide.addImage({ path: A(file), x, y, w, h, sizing: { type: 'cover', w, h }, altText: caption || 'Project photo' })
  if (caption) {
    slide.addShape(pres.shapes.RECTANGLE, { x, y: y + h - 0.42, w, h: 0.42, fill: { color: C.black, transparency: 25 }, line: { color: C.black, transparency: 100 } })
    slide.addText(caption, { x: x + 0.12, y: y + h - 0.42, w: w - 0.24, h: 0.42, fontFace: BODY, fontSize: 9.5, color: C.white, margin: 0, isTextBox: true, valign: 'middle' })
  }
}
function card(slide, x, y, w, h, fill = C.mid) {
  slide.addShape(pres.shapes.RECTANGLE, { x, y, w, h, fill: { color: fill }, line: { color: C.line, width: 0.75 } })
}
function footer(slide, n) {
  slide.addText(`${I.legalName} · Registration No. ${I.registrationNo} · Company Profile ${D.revision.slice(0, 4)}`, { x: M, y: H - 0.5, w: 9, h: 0.25, fontFace: BODY, fontSize: 8.5, color: C.muted, margin: 0, isTextBox: true })
  slide.addText(String(n).padStart(2, '0'), { x: W - M - 1, y: H - 0.5, w: 1, h: 0.25, fontFace: HEAD, fontSize: 9, bold: true, color: C.red, align: 'right', margin: 0, isTextBox: true })
}
function bullets(slide, items, x, y, w, h, o = {}) {
  slide.addText(items.map((t, i) => ({ text: t, options: { bullet: { indent: 14 }, breakLine: i < items.length - 1, paraSpaceAfter: 6 } })),
    { x, y, w, h, fontFace: BODY, fontSize: o.size || 12.5, color: o.color || C.text, lineSpacingMultiple: 1.2, margin: 0, isTextBox: true, valign: 'top' })
}
function kvRows(slide, rows, x, y0, w, labelW, o = {}) {
  const size = o.size || 11, cpl = Math.floor((w - labelW) * 72 / (size * 0.52))
  let y = y0
  for (const [k, v] of rows) {
    const lines = Math.max(1, Math.ceil(v.length / cpl))
    label(slide, k, x, y + 0.02, labelW, { size: 10, color: C.red })
    para(slide, v, x + labelW, y, w - labelW, 0.2 * lines + 0.08, { size })
    y += 0.2 * lines + 0.17
  }
  return y
}
const nb = (s) => s.replace(/ · /g, NB + '· ')
const photoGrid = (s, photos) => {
  const gx = 6.55, gw = (W - M - gx - 0.2) / 2, gh = 2.55
  photos.forEach(([file, cap], i) => photo(s, file, gx + (i % 2) * (gw + 0.2), 0.9 + Math.floor(i / 2) * (gh + 0.2), gw, gh, cap))
}

// ── slides ───────────────────────────────────────────────────────────────────
const SLIDES = {
  cover(n) {
    const s = pres.addSlide(); dark(s)
    s.addImage({ path: A('proj-007.png'), x: 0, y: 0, w: W, h: H, sizing: { type: 'cover', w: W, h: H }, altText: 'Booster-pump VFD and PLC panels on site' })
    s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: W, h: H, fill: { color: C.black, transparency: 18 }, line: { color: C.black, transparency: 100 } })
    s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 3.0, w: 9.2, h: 4.5, fill: { color: C.black, transparency: 35 }, line: { color: C.black, transparency: 100 } })
    s.addImage({ path: A('logo-white.png'), x: M, y: 0.55, w: 2.4, h: 1.44, altText: 'EMI Automation Sdn Bhd logo' })
    s.addText('COMPANY PROFILE', { x: M, y: 3.3, w: 9, h: 1.1, fontFace: HEAD, fontSize: 60, bold: true, color: C.white, charSpacing: 2, margin: 0, isTextBox: true })
    s.addText(D.revision.slice(0, 4), { x: M, y: 4.3, w: 4, h: 1.0, fontFace: HEAD, fontSize: 60, bold: true, color: C.red, charSpacing: 2, margin: 0, isTextBox: true })
    para(s, variant.coverTagline, M, 5.95, 9, 0.35, { size: 14, color: C.text })
    if (variant.preparedFor) para(s, variant.preparedFor, M, 6.3, 9, 0.3, { size: 11.5, color: C.redSoft })
    para(s, `${I.legalNameCaps}  ·  Registration No. ${I.registrationNo}  ·  ${I.city}`, M, variant.preparedFor ? 6.72 : 6.6, 11, 0.3, { size: 10, color: C.muted })
  },
  who(n) {
    const s = pres.addSlide(); dark(s)
    eyebrow(s, 'Who we are')
    title(s, I.legalName, M, 0.9, 6.6, 36)
    para(s, D.whoWeAre.p1, M, 2.15, 6.3, 1.5, { size: 13.5 })
    para(s, D.whoWeAre.p2, M, 3.7, 6.3, 1.5, { size: 13.5 })
    para(s, I.tagline, M, 5.35, 6, 0.4, { size: 15, color: C.redSoft, bold: true })
    const x = 7.55, w = W - M - x
    card(s, x, 0.9, w, 5.85)
    kvRows(s, [
      ['Registered name', I.legalName.replace('Sdn. Bhd.', `Sdn.${NB}Bhd.`)],
      ['Registration No.', I.registrationNo],
      ['Incorporated', I.incorporated.replace('Sdn. Bhd.', `Sdn.${NB}Bhd.`)],
      ['Business address', I.businessAddress],
      ['Operations', I.operationsAddress],
      ['Directors', I.directors],
      ['Banker', I.banker.replace(/ Bhd\.$/, `${NB}Bhd.`)],
      ['Tax status', I.taxStatus.replace('Service Tax', `Service${NB}Tax`)],
    ], x + 0.3, 1.2, w - 0.6, 1.6)
    footer(s, n)
  },
  lines(n) {
    const s = pres.addSlide(); dark(s)
    eyebrow(s, 'What we do')
    title(s, 'Three lines of business', M, 0.9, 9, 36)
    const gw = (W - 2 * M - 0.5) / 3
    D.lines.forEach((c, i) => {
      const x = M + i * (gw + 0.25), y = 2.1
      card(s, x, y, gw, 4.6)
      if (c.img) photo(s, c.img, x, y, gw, 2.0)
      else {
        s.addShape(pres.shapes.RECTANGLE, { x, y, w: gw, h: 2.0, fill: { color: C.red }, line: { color: C.red } })
        s.addText('APPOINTED\nMATERIALISE\nRESELLER', { x: x + 0.3, y: y + 0.25, w: gw - 0.6, h: 1.5, fontFace: HEAD, fontSize: 22, bold: true, color: C.white, charSpacing: 2, margin: 0, isTextBox: true, valign: 'middle' })
      }
      label(s, c.head, x + 0.3, y + 2.25, gw - 0.6, { size: 13, h: 0.55 })
      para(s, c.body, x + 0.3, y + 2.85, gw - 0.6, 1.7, { size: 11.5, color: C.muted })
    })
    footer(s, n)
  },
  materialise(n) {
    const s = pres.addSlide(); dark(s, C.dark); const Mz = D.materialise
    eyebrow(s, Mz.eyebrow)
    title(s, Mz.title, M, 0.9, 6.5, 34, 1.4)
    para(s, Mz.intro, M, 2.5, 6.4, 1.6, { size: 13.5 })
    para(s, Mz.terms, M, 4.2, 6.4, 0.9, { size: 11.5, color: C.muted })
    const x = 7.55, w = W - M - x
    card(s, x, 0.9, w, 4.35)
    kvRows(s, Mz.rows, x + 0.3, 1.2, w - 0.6, 1.6)
    para(s, Mz.footnote, M, 5.75, 6.4, 0.6, { size: 9, color: C.muted })
    footer(s, n)
  },
  it(n) {
    const s = pres.addSlide(); dark(s); const T = D.it
    eyebrow(s, T.eyebrow)
    title(s, T.title, M, 0.9, 5.6, 30, 1.4)
    para(s, T.intro, M, 2.45, 5.4, 1.5, { size: 12.5 })
    bullets(s, T.bullets, M, 4.05, 5.4, 2.6, { size: 11 })
    photoGrid(s, T.photos)
    footer(s, n)
  },
  automation(n) {
    const s = pres.addSlide(); dark(s); const T = D.automation
    eyebrow(s, T.eyebrow)
    title(s, T.title, M, 0.9, 5.6, 30, 1.0)
    para(s, T.intro, M, 2.15, 5.4, 1.5, { size: 12.5 })
    bullets(s, T.bullets, M, 3.85, 5.4, 2.6, { size: 11.5 })
    photoGrid(s, T.photos)
    footer(s, n)
  },
  references(n) {
    const s = pres.addSlide(); dark(s, C.dark); const R = D.references
    eyebrow(s, 'Project references')
    title(s, R.title, M, 0.9, 9, 36)
    // Priority tags float to the top, in priority order; year order is kept within each band.
    const prio = variant.referencePriority || []
    const rank = (r) => { const i = prio.findIndex((t) => (r.tags || []).includes(t)); return i < 0 ? prio.length : i }
    const rows = R.rows.map((r, i) => ({ r, i })).sort((a, b) => rank(a.r) - rank(b.r) || a.i - b.i).map((x) => x.r)
    const hdr = (t) => ({ text: t, options: { bold: true, color: C.red, fontFace: HEAD, fontSize: 10, fill: { color: C.mid } } })
    const cell = (t) => ({ text: t, options: { color: C.text, fontFace: BODY, fontSize: 10, fill: { color: C.dark } } })
    const table = [[hdr('YEAR'), hdr('CLIENT'), hdr('LOCATION'), hdr('SCOPE')], ...rows.map((r) => [cell(r.year), cell(r.client), cell(r.location), cell(r.scope)])]
    s.addTable(table, { x: M, y: 2.0, w: W - 2 * M, colW: [0.75, 3.7, 1.75, 5.83], border: { type: 'solid', color: C.line, pt: 0.5 }, rowH: 0.38, margin: 0.05, valign: 'middle' })
    para(s, R.footnote, M, 6.55, 11, 0.3, { size: 9.5, color: C.muted })
    footer(s, n)
  },
  brands(n) {
    const s = pres.addSlide(); dark(s); const B = D.brands
    eyebrow(s, 'Brands we supply')
    title(s, B.title, M, 0.9, 11.5, 36)
    const cw = (W - 2 * M - 0.25) / 2
    B.groups.forEach((g, i) => {
      const x = M + (i % 2) * (cw + 0.25), y = 2.05 + Math.floor(i / 2) * 1.12
      card(s, x, y, cw, 1.0)
      label(s, g[0], x + 0.25, y + 0.14, cw - 0.5, { size: 11, color: C.red })
      para(s, nb(g[1]), x + 0.25, y + 0.44, cw - 0.5, 0.5, { size: 11.5 })
    })
    para(s, B.footnote, M, 6.6, 11.5, 0.3, { size: 9, color: C.muted })
    footer(s, n)
  },
  team(n) {
    const s = pres.addSlide(); dark(s, C.dark); const T = D.team
    eyebrow(s, 'Team & support')
    title(s, T.title, M, 0.9, 9, 36)
    const cw = (W - 2 * M - 0.5) / 3
    T.people.forEach((t, i) => {
      const x = M + (i % 3) * (cw + 0.25), y = 2.1 + Math.floor(i / 3) * 1.4
      card(s, x, y, cw, 1.2)
      label(s, t[0], x + 0.3, y + 0.28, cw - 0.6, { size: 14 })
      para(s, t[1], x + 0.3, y + 0.66, cw - 0.6, 0.4, { size: 11.5, color: C.muted })
    })
    para(s, 'Coverage', M, 5.1, 3, 0.3, { size: 11, color: C.red, bold: true })
    para(s, T.coverage, M, 5.4, 5.6, 1.2, { size: 12 })
    para(s, 'Support', 6.7, 5.1, 3, 0.3, { size: 11, color: C.red, bold: true })
    para(s, T.support, 6.7, 5.4, 6, 1.2, { size: 12 })
    footer(s, n)
  },
  how(n) {
    const s = pres.addSlide(); dark(s); const Hw = D.howWeWork
    eyebrow(s, 'Quality, integrity & terms')
    title(s, Hw.title, M, 0.9, 9, 36)
    const cw = (W - 2 * M - 0.25) / 2, bodyH = 1.5, cpl = Math.floor((cw - 0.6) * 72 / (11.5 * 0.5))
    Hw.blocks.forEach((b, i) => {
      const lines = Math.ceil(b.body.length / cpl)
      if (lines > 6) fail(`how-we-work block "${b.head}" is ~${lines} lines; it will overflow its card (max 6). Shorten the text.`)
      const x = M + (i % 2) * (cw + 0.25), y = 2.1 + Math.floor(i / 2) * 2.35
      card(s, x, y, cw, 2.2)
      label(s, b.head, x + 0.3, y + 0.22, cw - 0.6, { size: 13, color: C.red })
      para(s, b.body, x + 0.3, y + 0.6, cw - 0.6, bodyH, { size: 11.5 })
    })
    footer(s, n)
  },
  contact(n) {
    const s = pres.addSlide(); dark(s)
    s.addImage({ path: A('proj-002.png'), x: 7.6, y: 0, w: W - 7.6, h: H, sizing: { type: 'cover', w: W - 7.6, h: H }, altText: 'Rack-mounted server system' })
    s.addShape(pres.shapes.RECTANGLE, { x: 7.6, y: 0, w: W - 7.6, h: H, fill: { color: C.black, transparency: 45 }, line: { color: C.black, transparency: 100 } })
    s.addImage({ path: A('logo-white.png'), x: M, y: 0.55, w: 2.0, h: 1.2, altText: 'EMI Automation Sdn Bhd logo' })
    eyebrow(s, 'Contact us', M, 2.2)
    para(s, I.email, M, 2.55, 6.6, 0.55, { size: 26, bold: true, color: C.white })
    para(s, I.phone, M, 3.15, 6.6, 0.5, { size: 22, bold: true, color: C.white })
    para(s, I.web, M, 3.7, 6.6, 0.4, { size: 14, color: C.redSoft })
    label(s, I.legalName, M, 4.5, 6.6, { size: 12 })
    para(s, `Registration No. ${I.registrationNo}`, M, 4.82, 6.6, 0.3, { size: 11, color: C.muted })
    const addr = (y, lead, text) => s.addText([
      { text: lead + '  ', options: { fontFace: HEAD, bold: true, color: C.red, charSpacing: 1 } },
      { text, options: { fontFace: BODY, color: C.text } },
    ], { x: M, y, w: 6.8, h: 0.35, fontSize: 11.5, margin: 0, isTextBox: true, valign: 'top' })
    addr(5.25, 'KUALA LUMPUR', I.businessAddress)
    addr(5.6, 'NILAI', I.operationsAddress)
    para(s, `Rev. ${D.revision}`, M, 6.65, 3, 0.3, { size: 9, color: C.muted })
  },
}

// ── build ────────────────────────────────────────────────────────────────────
const order = variant.slides
for (const id of order) if (!SLIDES[id]) { console.error(`unknown slide id "${id}" in variant ${variantName}`); process.exit(2) }
order.forEach((id, i) => SLIDES[id](i + 1))

fs.mkdirSync(outDir, { recursive: true })
const out = path.join(outDir, `${variant.outputName}-${D.revision}.pptx`) // e.g. …-Profile-2026-09.pptx
pres.writeFile({ fileName: out }).then((f) => console.log(`wrote ${f} (${order.length} slides, variant ${variantName})`))

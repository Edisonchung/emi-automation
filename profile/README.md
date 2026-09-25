# Company profile generator

Builds the EMI Automation company profile as an editable widescreen deck
(`.pptx`) from one facts file plus a per-audience variant. The PDF sent to
customers is exported from the deck with PowerPoint.

```bash
npm run profile                    # general edition  → profile/dist/EMI-Automation-Company-Profile-2026-09.pptx
npm run profile -- --variant kls   # KLS Martin edition → profile/dist/EMI-Automation-Company-Profile-KLS-2026-09.pptx
bash profile/export-pdf.sh profile/dist/EMI-Automation-Company-Profile-2026-09.pptx
```

The `--` after `npm run profile` matters: without it npm keeps the flags for
itself and the general edition is built. The script rejects unknown flags and
positionals rather than falling back.

`profile/dist/` is git-ignored: the record copy of each edition lives in
HiggsFlow (Compliance documents) and in the company Drive folder, not here.

## Files

| Path | What it is |
|---|---|
| `company.json` | Every fact and sentence in the deck: identity, addresses, directors, lines of business, references, brands, team, policies. Edit here, never in the deck. |
| `variants/general.json` | The default edition. |
| `variants/kls.json` | A client edition: cover line, "prepared for" line, slide order, reference ordering, and a few text overrides. |
| `build.cjs` | The generator. Slide layouts live here; text does not. |
| `export-pdf.sh` | PowerPoint-for-Mac PDF export. |
| `assets/` | Logo and project photos (only EMI's own photos, none showing another company's nameplate). |

## Making a client edition

Copy `variants/general.json`, then change only what that client needs:

- `coverTagline` — order the three lines of business by relevance to them.
- `preparedFor` — one line on the cover; leave `null` for the general edition.
- `slides` — reorder or drop slide ids (`cover who lines materialise it automation references brands team how contact`).
- `referencePriority` — tags to float to the top of the references table (`software healthcare academic it automation utilities manufacturing retail`); rows keep year order within each band.
- `overrides` — dotted paths into `company.json` (`whoWeAre.p2`), or `howWeWork.blocks.<key>` to replace one block.

Do not fork the deck file by hand. Three hand-edited copies drift within a year;
one facts file and small variants do not.

## Versioning and the HiggsFlow record

- `revision` in `company.json` is printed on the contact slide (`Rev. 2026-09`),
  sets the year on the cover, and is appended to the output file name
  (`…-Profile-2026-09.pptx`). Bump it whenever the facts change.
- Record every edition in HiggsFlow → Compliance documents for EMI Automation:
  one document per audience, named `Company Profile — <Audience> — Rev <revision>`,
  issued date = build date, sensitivity public, notes = what changed. A new
  edition replaces the previous one of the same audience (the page keeps the
  superseded chain), never a fresh upload.
- Keep the `.pptx` beside the PDF in the Drive folder with the same name.

## Wording rules baked into the facts file

- "Appointed reseller of Materialise software": confirmed by the owner, 25 Sep 2026.
  Attach the appointment document when a buyer asks for quality evidence.
- No "Medical" edition, clinical or patient-use wording for Mimics until Materialise
  answers the MDA question; no Materialise logo unless the reseller agreement's brand
  rules allow it.
- Named customers, vendor registrations and certificates must be checkable-true.
  Capability wording can be confident; those three must be exact.
- Never print a bank account number.

The website's `components/References.jsx` and `components/Brands.jsx` still carry
their own copies of the references and brand list; pointing them at
`company.json` is the next step so the site and the deck cannot drift.

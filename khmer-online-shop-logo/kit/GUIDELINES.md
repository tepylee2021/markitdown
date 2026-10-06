# Khmer Online Shop — Logo Guidelines

## 1. The logo
**Idea:** A shopping bag whose body is a chat bubble. Customers shop with Khmer Online Shop by sending a message on Facebook, Messenger or Telegram. It keeps the bag and the round-dot handle from the old logo.

| Version | File | Use for |
|---|---|---|
| Horizontal (primary) | `master/kos-horizontal.svg` | Facebook cover, labels, invoices, website header |
| Stacked | `master/kos-stacked.svg` | Square spaces: bags, boxes, signs, posters |
| Symbol | `master/kos-symbol.svg` | Profile picture, avatar, stickers, watermark on product photos |
| Symbol, small | `master/kos-symbol-small.svg` | Anything under 48 px: favicon, tiny watermark |
| Wordmark | `master/kos-wordmark.svg` | Where the symbol is already shown nearby |
| Reversed (`-reversed`) | `master/*-reversed.svg` | On navy or dark backgrounds (the handle and text turn white) |

## 2. Clear space
Let **X** be the height of the letter K inside the symbol. Keep at least **½ X** empty on every side of the logo. This space grows and shrinks with the logo.

## 3. Minimum size
| Version | Screen | Print |
|---|---|---|
| Horizontal (with tagline) | 200 px wide | 45 mm wide |
| Stacked | 140 px wide | 30 mm wide |
| Symbol | 48 px (use `-small` below 48 px, down to 16 px) | 8 mm |

Below these sizes the tagline can't be read. Use the symbol alone instead.

## 4. Colour
| Name | HEX | RGB | CMYK (starting values) | Pantone (nearest) |
|---|---|---|---|---|
| KOS Navy | `#0B3C6F` | 11 60 111 | 90 46 0 56 | 7694 C |
| KOS Orange | `#F37021` | 243 112 33 | 0 54 86 5 | 1585 C |
| White | `#FFFFFF` | 255 255 255 | 0 0 0 0 | — |

- The CMYK values are converted from the screen colours. Ask your printer for a printed proof and adjust the values until the colours match the screen.
- The Pantone matches are the nearest only. Check them against a real Pantone swatch book before a large print run.

**Approved logo and background pairs:**
- Full colour on white or light grey.
- The `-reversed` version on navy.
- One-colour white on orange or on a photo.
- One-colour navy or black on white or light plastic.

## 5. Printing on plastic and mailer bags
Bag printing is usually one colour (flexo or screen printing). Use these files:
- **Clear, white or light bags:** `digital/horizontal/kos-horizontal-mono-0b3c6f.svg` (navy) or the `-black` version.
- **Dark or colourful bags:** `digital/horizontal/kos-horizontal-white.svg` or `digital/stacked/kos-stacked-white.svg`.
- The K is a real cut-out, so the bag colour shows through it. That is intended.

Send the printer the **SVG**, which is vector and sharp at any size. Don't send a PNG.

## 6. Typography
- **Logo letters:** Montserrat ExtraBold. The tagline is Montserrat SemiBold. The K in the symbol is custom-drawn.
- **Khmer text** (posts, covers, labels): Noto Sans Khmer, Bold or ExtraBold.
- Both fonts are free under the SIL Open Font License from Google Fonts, and logo use is allowed.
- Never retype the logo letters. Always use the logo files.

## 7. Don'ts
- Don't stretch, squash or rotate the logo.
- Don't change the colours or add gradients, shadows or outlines.
- Don't move, resize or swap the symbol and the text.
- Don't put the logo on a busy photo without a plain area or a white circle behind it.
- Don't add "356" or other extra words to the logo. Keep "356" in the page name only.

## 8. Ready-made files
| Folder | Contents |
|---|---|
| `social/` | Facebook profile picture in white, navy and orange (720×720) and cover (1640×624, safe for mobile crop). Use the same profile picture for Messenger, Telegram and TikTok. |
| `print/` | Thank-you label 100×50 mm and round sticker 50 mm, at 300 dpi |
| `web/` | `favicon.ico`, `favicon.svg`, app icons, `site.webmanifest`, `head-snippet.html` |
| `digital/` | PNG exports and one-colour versions (black, white, navy) of every lockup |
| `presentation/` | Presentation board (`kos-logo-kit.html`) and slide PNGs with mockups |

## 9. Notes
- **Trademark:** this logo has not been checked for trademark clearance. Before relying on it legally, search the Cambodian trademark register (Ministry of Commerce, DIP).
- **Cover text:** the Khmer line on the cover reads "បោះដុំ និងលក់រាយ ថង់ប្លាស្ទិក ថង់បិទផ្លាស្ទិច និងសម្ភារៈវេចខ្ចប់" (wholesale and retail plastic bags, sealable bags and packaging materials). Edit the text in `social/fb-cover.svg` or ask for a new version.

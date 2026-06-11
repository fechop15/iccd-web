#!/bin/bash
# Script para descargar imágenes del sitio WordPress
# Ejecutar: bash scripts/download-images.sh

BASE_URL="https://iccdsincelejo.com.co/wp-content/uploads"
OUTPUT_DIR="public/images"

mkdir -p "$OUTPUT_DIR"

# Logo
curl -sL "$BASE_URL/2024/04/LOGO-ICCD.png" -o "$OUTPUT_DIR/LOGO-ICCD.png"

# Home events
curl -sL "$BASE_URL/2025/06/1B9C052A-ACF2-4ED9-908A-6D45C2851E8D_1_102_a.jpeg" -o "$OUTPUT_DIR/1B9C052A-ACF2-4ED9-908A-6D45C2851E8D_1_102_a.jpeg"
curl -sL "$BASE_URL/2025/06/66D5FAE2-13E7-494D-AD76-159900DFEC7C_1_102_a.jpeg" -o "$OUTPUT_DIR/66D5FAE2-13E7-494D-AD76-159900DFEC7C_1_102_a.jpeg"
curl -sL "$BASE_URL/2024/04/4d536c3a-60af-4519-85fc-50b78d02433e.jpg" -o "$OUTPUT_DIR/4d536c3a-60af-4519-85fc-50b78d02433e.jpg"
curl -sL "$BASE_URL/2024/04/WhatsApp-Image-2024-04-09-at-20.47.08.jpeg" -o "$OUTPUT_DIR/WhatsApp-Image-2024-04-09-at-20.47.08.jpeg"
curl -sL "$BASE_URL/2025/06/IMG_6796-2-scaled.jpg" -o "$OUTPUT_DIR/IMG_6796-2-scaled.jpg"
curl -sL "$BASE_URL/2025/06/5A3DAE04-F31D-475A-ABAB-B54965FDF351_1_102_o.jpeg" -o "$OUTPUT_DIR/5A3DAE04-F31D-475A-ABAB-B54965FDF351_1_102_o.jpeg"
curl -sL "$BASE_URL/2025/06/33B20375-1BF5-4F69-939D-07B4E3504CF1_1_102_a.jpeg" -o "$OUTPUT_DIR/33B20375-1BF5-4F69-939D-07B4E3504CF1_1_102_a.jpeg"
curl -sL "$BASE_URL/2024/04/WhatsApp-Image-2024-04-09-at-17.55.24.jpeg" -o "$OUTPUT_DIR/WhatsApp-Image-2024-04-09-at-17.55.24.jpeg"
curl -sL "$BASE_URL/2024/04/Captura-de-Pantalla-2024-04-09-a-las-6.05.16-p.m.png" -o "$OUTPUT_DIR/Captura-de-Pantalla-2024-04-09-a-las-6.05.16-p.m.png"
curl -sL "$BASE_URL/2025/06/IMG_5520--scaled.jpg" -o "$OUTPUT_DIR/IMG_5520--scaled.jpg"
curl -sL "$BASE_URL/2024/04/Captura-de-Pantalla-2024-04-09-a-las-6.19.20-p.m.png" -o "$OUTPUT_DIR/Captura-de-Pantalla-2024-04-09-a-las-6.19.20-p.m.png"

# Nosotros page
curl -sL "$BASE_URL/2025/06/05A0CCF0-B426-494C-9A84-BA2DEDA6A7CE_1_102_o.jpeg" -o "$OUTPUT_DIR/05A0CCF0-B426-494C-9A84-BA2DEDA6A7CE_1_102_o.jpeg"

# News page
curl -sL "$BASE_URL/2024/04/WhatsApp-Image-2024-03-14-at-11.56.40.jpeg" -o "$OUTPUT_DIR/WhatsApp-Image-2024-03-14-at-11.56.40.jpeg"
curl -sL "$BASE_URL/2024/04/Captura-de-Pantalla-2024-04-09-a-las-10.03.12-p.m.png" -o "$OUTPUT_DIR/Captura-de-Pantalla-2024-04-09-a-las-10.03.12-p.m.png"
curl -sL "$BASE_URL/2024/04/WhatsApp-Image-2024-04-09-at-23.00.14.jpeg" -o "$OUTPUT_DIR/WhatsApp-Image-2024-04-09-at-23.00.14.jpeg"
curl -sL "$BASE_URL/2024/04/MUCV2763.jpg" -o "$OUTPUT_DIR/MUCV2763.jpg"
curl -sL "$BASE_URL/2024/04/WhatsApp-Image-2024-04-09-at-23.00.15.jpeg" -o "$OUTPUT_DIR/WhatsApp-Image-2024-04-09-at-23.00.15.jpeg"
curl -sL "$BASE_URL/2024/04/AVLI4070.jpg" -o "$OUTPUT_DIR/AVLI4070.jpg"
curl -sL "$BASE_URL/2024/04/WhatsApp-Image-2024-04-09-at-22.26.28-1.jpeg" -o "$OUTPUT_DIR/WhatsApp-Image-2024-04-09-at-22.26.28-1.jpeg"
curl -sL "$BASE_URL/2024/04/Captura-de-Pantalla-2024-04-09-a-las-10.35.53-p.m.png" -o "$OUTPUT_DIR/Captura-de-Pantalla-2024-04-09-a-las-10.35.53-p.m.png"
curl -sL "$BASE_URL/2024/04/Captura-de-Pantalla-2024-04-09-a-las-10.52.02-p.m.png" -o "$OUTPUT_DIR/Captura-de-Pantalla-2024-04-09-a-las-10.52.02-p.m.png"

# Icons
curl -sL "https://iccdsincelejo.co/wp-content/uploads/2022/04/86344.png" -o "$OUTPUT_DIR/icon-id.png"
curl -sL "https://iccdsincelejo.co/wp-content/uploads/2022/04/304080.png" -o "$OUTPUT_DIR/icon-contact.png"
curl -sL "https://iccdsincelejo.co/wp-content/uploads/2022/04/619.png" -o "$OUTPUT_DIR/icon-location.png"

echo "✅ Imágenes descargadas en $OUTPUT_DIR"

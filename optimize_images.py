import os
from PIL import Image, ImageOps

input_folder = "assets"

for root, dirs, files in os.walk(input_folder):
    for file in files:
        if file.lower().endswith((".jpg", ".jpeg", ".png")):
            img_path = os.path.join(root, file)
            webp_path = os.path.splitext(img_path)[0] + ".webp"

            if os.path.exists(webp_path):
                print(f"Déjà converti : {webp_path}")
                continue

            try:
                img = Image.open(img_path)

                # Corrige l’orientation EXIF (ne pose pas de problème pour PNG)
                img = ImageOps.exif_transpose(img)

                # Convertit en RGB si nécessaire (PNG peut avoir un canal alpha)
                if img.mode in ("RGBA", "P"):
                    img = img.convert("RGBA")
                else:
                    img = img.convert("RGB")

                img.save(webp_path, "webp", quality=80)
                print(f"Converti : {img_path} → {webp_path}")
            except Exception as e:
                print(f"Erreur avec {img_path} : {e}")

print("Conversion terminée.")

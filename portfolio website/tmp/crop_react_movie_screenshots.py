from pathlib import Path
from PIL import Image

screenshots = {
    r"C:\Users\victo\Pictures\Screenshots\Screenshot (122).png": "dashboard.png",
    r"C:\Users\victo\Pictures\Screenshots\Screenshot (123).png": "sorting.png",
    r"C:\Users\victo\Pictures\Screenshots\Screenshot (124).png": "cards.png",
    r"C:\Users\victo\Pictures\Screenshots\Screenshot (125).png": "details.png",
    r"C:\Users\victo\Pictures\Screenshots\Screenshot (126).png": "edit.png",
    r"C:\Users\victo\Pictures\Screenshots\Screenshot (127).png": "add.png",
}

outdir = Path("assets/movie-library-react")
outdir.mkdir(parents=True, exist_ok=True)

for source, name in screenshots.items():
    img = Image.open(source)
    width, height = img.size
    cropped = img.crop((0, 121, width, height - 48))
    cropped.save(outdir / name)
    print(outdir / name)

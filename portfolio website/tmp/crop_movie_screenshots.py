from pathlib import Path
from PIL import Image

screenshots = {
    r"C:\Users\victo\Pictures\Screenshots\Screenshot (143).png": "home.png",
    r"C:\Users\victo\Pictures\Screenshots\Screenshot (144).png": "movies.png",
    r"C:\Users\victo\Pictures\Screenshots\Screenshot (145).png": "filters.png",
    r"C:\Users\victo\Pictures\Screenshots\Screenshot (146).png": "info.png",
    r"C:\Users\victo\Pictures\Screenshots\Screenshot (147).png": "add.png",
}

outdir = Path("assets/movie-library")
outdir.mkdir(parents=True, exist_ok=True)

for source, name in screenshots.items():
    img = Image.open(source)
    width, height = img.size
    cropped = img.crop((0, 121, width, height - 48))
    cropped.save(outdir / name)
    print(outdir / name)

import os
import re

base_path = "/Users/vee/Desktop/site-tableaux"
html_path = os.path.join(base_path, "index.html")
js_path = os.path.join(base_path, "script.js")
css_path = os.path.join(base_path, "style.css")

assets = set()

# HTML src and data-src
with open(html_path, 'r') as f:
    content = f.read()
    assets.update(re.findall(r'src=["\']([^"\']+)["\']', content))
    assets.update(re.findall(r'url\(["\']?([^"\']+)["\']?\)', content))

# JS assets
with open(js_path, 'r') as f:
    content = f.read()
    # Simple extraction of string literals that look like filenames in the images/ or videos/ context
    assets.update(re.findall(r'[\'"]([^\'"]+\.(jpg|jpeg|png|gif|mp4|mov|webm|png|jpeg))[\'"]', content))

# CSS assets
with open(css_path, 'r') as f:
    content = f.read()
    assets.update(re.findall(r'url\(["\']?([^"\')]+)["\']?\)', content))

missing = []
for asset in assets:
    if asset.startswith('http') or asset.startswith('data:'):
        continue
    
    # Clean URL encoding
    path = asset.replace('%20', ' ')
    
    full_path = os.path.join(base_path, path)
    if not os.path.exists(full_path):
        # Try without images/ prefix if it's just the filename from JS
        alt_path = os.path.join(base_path, "images", path)
        if not os.path.exists(alt_path):
            alt_path_v = os.path.join(base_path, "videos", path)
            if not os.path.exists(alt_path_v):
                missing.append(asset)

if missing:
    print("MISSING ASSETS:")
    for m in sorted(missing):
        print(f" - {m}")
else:
    print("ALL ASSETS VERIFIED")

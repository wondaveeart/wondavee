#!/bin/bash
IMAGES_DIR="/Users/vee/Desktop/site-tableaux/images"
find "$IMAGES_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | while read img; do
    size=$(stat -f%z "$img")
    if [ "$size" -gt 307200 ]; then
        echo "Optimizing $img ($(ls -lh "$img" | awk '{print $5}'))"
        # Resize to max 1600px width/height to keep quality but reduce weight
        # And set quality to 75%
        sips -Z 1600 "$img" --setProperty formatOptions 75 --out "$img.tmp" > /dev/null 2>&1
        if [ $? -eq 0 ]; then
            mv "$img.tmp" "$img"
            echo "Done: $(ls -lh "$img" | awk '{print $5}')"
        else
            rm -f "$img.tmp"
            echo "Failed to optimize $img"
        fi
    fi
done

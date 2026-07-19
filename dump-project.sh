#!/bin/bash
output="project-dump.md"
> "$output"

echo "# Project Structure" >> "$output"
echo '```' >> "$output"
find . -type f \
  -not -path "*/node_modules/*" \
  -not -path "*/.git/*" \
  -not -path "*/build/*" \
  -not -path "*/dist/*" \
  | sort >> "$output"
echo '```' >> "$output"
echo "" >> "$output"

echo "# File Contents" >> "$output"
find . -type f \
  \( -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" -o -name "*.css" -o -name "*.scss" -o -name "*.json" -o -name "*.html" \) \
  -not -name "package-lock.json" \
  -not -path "*/node_modules/*" \
  -not -path "*/.git/*" \
  -not -path "*/build/*" \
  -not -path "*/dist/*" \
  | sort | while read -r file; do
    echo "" >> "$output"
    echo "## $file" >> "$output"
    echo '```'"${file##*.}" >> "$output"
    cat "$file" >> "$output"
    echo '```' >> "$output"
done

echo "Done! Check $output"
# this replaces references to react and react-dom with references to preact-compat

echo "Replacing module usage of 'react' with 'preact-compat'..."
find ./node_modules/react* -type f -iname '*.js' -print0 | xargs -0 sed -i '' 's/'"'"'react'"'"'/'"'"'preact-compat'"'"'/g'
find ./node_modules/react* -type f -iname '*.js' -print0 | xargs -0 sed -i '' 's/"react"/"preact-compat"/g'

echo "Replacing module usage of 'react-dom' with 'preact-compat'..."
find ./node_modules/react* -type f -iname '*.js' -print0 | xargs -0 sed -i '' 's/'"'"'react-dom'"'"'/'"'"'preact-compat'"'"'/g'
find ./node_modules/react* -type f -iname '*.js' -print0 | xargs -0 sed -i '' 's/"react-dom"/"preact-compat"/g'

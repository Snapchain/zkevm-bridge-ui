#!/bin/bash

# Define source and destination directories
SOURCE_DIR="deployment/images"
DESTINATION_DIR="src/assets"
LOGO_FILENAME="polygon-zkevm-logo.svg"
L1_FILENAME="icons/chains/ethereum.svg"
L2_FILENAME="icons/chains/polygon-zkevm.svg"
ICON_FILENAME="public/favicon.ico" 

# Check if source directory exists
if [ ! -d "$SOURCE_DIR" ]; then
  echo "Source directory $SOURCE_DIR does not exist."
  exit 1
fi

# Check if destination directory exists, create it if not
if [ ! -d "$DESTINATION_DIR" ]; then
  mkdir -p "$DESTINATION_DIR"
fi
 
# Copy logo.svg from source to destination with a new filename
cp "$SOURCE_DIR/logo.svg" "$DESTINATION_DIR/$LOGO_FILENAME"
cp "$SOURCE_DIR/l1.svg" "$DESTINATION_DIR/$L1_FILENAME"
cp "$SOURCE_DIR/l2.svg" "$DESTINATION_DIR/$L2_FILENAME"
cp "$SOURCE_DIR/icon.png" "$ICON_FILENAME"

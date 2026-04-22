#!/bin/bash

GREEN="\033[0;32m"
RED="\033[0;31m"
NC="\033[0m"

PORTFOLIO_URL="http://localhost:8080/v3/api-docs"
USER_URL="http://localhost:8081/v3/api-docs"

OUTPUT_DIR="src/assets/openapi"

mkdir -p $OUTPUT_DIR

download_api() {
  local name=$1
  local url=$2
  local output=$3

  echo -e "${GREEN}→ Exporting $name...${NC}"

  if curl -s --fail $url > "$output"; then
    echo -e "${GREEN}✓ $name exported to $output${NC}"
  else
    echo -e "${RED}✗ Failed to download $name from $url${NC}"
  fi
}

download_api "Portfolio API" $PORTFOLIO_URL "$OUTPUT_DIR/portfolio-openapi.json"
download_api "User API" $USER_URL "$OUTPUT_DIR/user-openapi.json"

echo -e "${GREEN}✅ All done.${NC}"

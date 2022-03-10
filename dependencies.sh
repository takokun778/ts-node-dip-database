#!/bin/bash
set -euo pipefail

yarn add --dav \
    @types/jest@latest \
    @types/node@latest \
    @typescript-eslint/parser@latest \
    eslint@latest \
    eslint-config-airbnb-base@latest \
    eslint-config-prettier@latest \
    eslint-import-resolver-typescript@latest \
    eslint-plugin-import@latest \
    jest@latest \
    prettier@latest \
    ts-jest@latest \
    ts-node@latest \
    typescript@latest

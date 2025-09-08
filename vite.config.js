import {defineConfig} from "vite";

import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
    base: "/interpolations-bezier-demo/",

    build: {
    rollupOptions: {
        input: {
            main: resolve(__dirname, 'index.html'),
            hermiteInterpolation: resolve(__dirname, 'hermiteInterpolation.html'),
            interpolateByPolynomial: resolve(__dirname, 'interpolateByPolynomial.html'),
            rungeFunction: resolve(__dirname, 'rungeFunction.html')
        }}}

})
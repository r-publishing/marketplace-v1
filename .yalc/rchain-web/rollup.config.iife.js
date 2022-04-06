import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import typescript from "rollup-plugin-typescript";

const VERSION = "0.1.0";

export default {
  input: "src/index.ts",
  output: {
    format: "iife",
    sourceMap: "inline",
    file: "dist/rchain-web@" + VERSION + ".js",
    name: "RChainWeb",
    globals: {
      buffer: "Buffer",
    },
  },
  external: [
    "electron",
    /* All the following modules are included in Node JS*/
    "fs",
    "os",
    "crypto",
    "path",
    "http",
    "https",
    "stream",
    "net",
    "tls",
    "zlib",
    "events",
    "url",
    "util",
    "string_decoder",
  ],
  plugins: [typescript(), resolve(), commonjs()],
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.respM = exports.resp = void 0;
const resp = (s, m) => ({ status: s, message: m });
exports.resp = resp;
const respM = (s, m) => resp(s, { message: m });
exports.respM = respM;

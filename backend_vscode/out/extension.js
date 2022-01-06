"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode = require("vscode");
const lua_sh_provider_1 = require("./lua_sh_provider");
function activate(context) {
    context.subscriptions.push(vscode.languages.registerDocumentSemanticTokensProvider({ scheme: 'file', language: 'rua' }, new lua_sh_provider_1.DocumentSemanticTokensProvider(), lua_sh_provider_1.legend));
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode = require("vscode");
const SHprovider_1 = require("./SHprovider");
function activate(context) {
    context.subscriptions.push(vscode.languages.registerDocumentSemanticTokensProvider({ scheme: 'file', language: 'comf' }, new SHprovider_1.DocumentSemanticTokensProvider(), SHprovider_1.legend));
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map
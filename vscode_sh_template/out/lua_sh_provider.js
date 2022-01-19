"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentSemanticTokensProvider = exports.render_text = exports.legend = void 0;
const vscode = require("vscode");
const antlr = require("antlr4ts");
const sh = require("./lua_sh_require");
const lua_parser = require("./lua_shParser");
const lua_lexer = require("./lua_shLexer");
const antlr4ts_1 = require("antlr4ts");
exports.legend = new vscode.SemanticTokensLegend(sh.tokenTypesLegend, sh.tokenModifiersLegend);
function render_text(text) {
    const inputStream = antlr.CharStreams.fromString(text);
    const lexer = new lua_lexer.lua_shLexer(inputStream);
    const tokenStram = new antlr4ts_1.CommonTokenStream(lexer);
    const parser = new lua_parser.lua_shParser(tokenStram);
    parser.start();
}
exports.render_text = render_text;
class DocumentSemanticTokensProvider {
    async provideDocumentSemanticTokens(document, _) {
        sh.clearCache();
        let cache = sh.getCache();
        render_text(document.getText());
        const builder = new vscode.SemanticTokensBuilder();
        for (let [scope, token] of cache) {
            builder.push(token.line - 1, token.charPositionInLine, token.stopIndex - token.startIndex + 1, scope, 0);
        }
        return builder.build();
    }
}
exports.DocumentSemanticTokensProvider = DocumentSemanticTokensProvider;
//# sourceMappingURL=lua_sh_provider.js.map
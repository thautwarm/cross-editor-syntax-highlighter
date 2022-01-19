"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentSemanticTokensProvider = exports.render_text = exports.legend = void 0;
const vscode = require("vscode");
const antlr = require("antlr4ts");
const sh = require("./SH_require");
const sh_parser = require("./SHParser");
const sh_lexer = require("./SHLexer");
const antlr4ts_1 = require("antlr4ts");
exports.legend = new vscode.SemanticTokensLegend(sh.tokenTypesLegend, sh.tokenModifiersLegend);
let setErr = undefined;
let errorItem = undefined;
class VSCodeErrorListener {
    syntaxError(recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
        setErr = vscode.window.showInformationMessage(msg);
    }
}
function render_text(text) {
    const inputStream = antlr.CharStreams.fromString(text);
    const lexer = new sh_lexer.SHLexer(inputStream);
    const tokenStream = new antlr4ts_1.CommonTokenStream(lexer);
    const parser = new sh_parser.SHParser(tokenStream);
    parser.addErrorListener(new VSCodeErrorListener());
    parser.start();
}
exports.render_text = render_text;
function anyStr(value) {
    return value.toString();
}
async function taskError() {
    if (setErr !== undefined) {
        errorItem = await setErr;
        setErr = undefined;
    }
    else {
        if (errorItem !== undefined) {
            try {
                errorItem.title = "";
            }
            catch { }
            errorItem = undefined;
        }
    }
}
class DocumentSemanticTokensProvider {
    async provideDocumentSemanticTokens(document, _) {
        sh.clearCache();
        let cache = sh.getCache();
        try {
            render_text(document.getText());
        }
        catch { }
        const builder = new vscode.SemanticTokensBuilder();
        for (let [scope, token] of cache) {
            builder.push(token.line - 1, token.charPositionInLine, token.stopIndex - token.startIndex + 1, scope, 0);
        }
        taskError();
        return builder.build();
    }
}
exports.DocumentSemanticTokensProvider = DocumentSemanticTokensProvider;
//# sourceMappingURL=SHprovider.js.map
import * as vscode from "vscode"
import * as antlr from "antlr4ts"
import * as sh from "./lua_sh_require"
import * as lua_parser from "./lua_shParser"
import * as lua_lexer from "./lua_shLexer"

import { CommonTokenStream } from "antlr4ts"

export const legend = new vscode.SemanticTokensLegend(sh.tokenTypesLegend, sh.tokenModifiersLegend);


export function render_text(text: string) {
	const inputStream = antlr.CharStreams.fromString(text);
	const lexer = new lua_lexer.lua_shLexer(inputStream);
    const tokenStram = new CommonTokenStream(lexer);
    const parser = new lua_parser.lua_shParser(tokenStram);
    parser.start();
}


export class DocumentSemanticTokensProvider implements vscode.DocumentSemanticTokensProvider {
	async provideDocumentSemanticTokens(document: vscode.TextDocument, _: vscode.CancellationToken): Promise<vscode.SemanticTokens> {
		sh.clearCache();
        let cache = sh.getCache()        
        render_text(document.getText());
        const builder = new vscode.SemanticTokensBuilder();
		for(let [scope, token] of cache)
        {
            builder.push(token.line - 1, token.charPositionInLine, token.stopIndex-token.startIndex + 1, scope, 0);
        }
		return builder.build();
	}
}

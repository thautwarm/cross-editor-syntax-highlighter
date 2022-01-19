import * as vscode from "vscode"
import * as antlr from "antlr4ts"
import * as sh from "./SH_require"
import * as sh_parser from "./SHParser"
import * as sh_lexer from "./SHLexer"

import { CommonTokenStream } from "antlr4ts"

export const legend = new vscode.SemanticTokensLegend(sh.tokenTypesLegend, sh.tokenModifiersLegend);

let setErr: Thenable<vscode.MessageItem | undefined> | undefined = undefined
let errorItem : vscode.MessageItem | undefined = undefined

class VSCodeErrorListener implements antlr.ANTLRErrorListener<any> {
    syntaxError(recognizer: antlr.Recognizer<any, any>, offendingSymbol: any, line: number, charPositionInLine: number, msg: string, e: antlr.RecognitionException | undefined)
    {
        setErr = vscode.window.showInformationMessage<vscode.MessageItem>(msg);
    }
}

export function render_text(text: string) {
	const inputStream = antlr.CharStreams.fromString(text);
	const lexer = new sh_lexer.SHLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new sh_parser.SHParser(tokenStream);
    parser.addErrorListener(new VSCodeErrorListener());
    parser.start();
}

function anyStr(value: any): string {
    return value.toString();
}


async function taskError()
{
    if (setErr !== undefined)
    {
        errorItem = await setErr;
        setErr = undefined
    }
    else
    {
        if (errorItem !== undefined)
        {
            try
            { errorItem.title = ""; }
            catch { }
            errorItem = undefined
        }
    }
}

export class DocumentSemanticTokensProvider implements vscode.DocumentSemanticTokensProvider {
	async provideDocumentSemanticTokens(document: vscode.TextDocument, _: vscode.CancellationToken): Promise<vscode.SemanticTokens> {
		sh.clearCache();
        let cache = sh.getCache()
        try
        {
            render_text(document.getText());
        }
        catch{ }


        const builder = new vscode.SemanticTokensBuilder();
		for(let [scope, token] of cache)
        {
            builder.push(token.line - 1, token.charPositionInLine, token.stopIndex-token.startIndex + 1, scope, 0);
        }
    
		taskError();
        return builder.build()
	}
}

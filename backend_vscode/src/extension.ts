import * as vscode from 'vscode';
import { DocumentSemanticTokensProvider, legend } from "./lua_sh_provider";

export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(vscode.languages.registerDocumentSemanticTokensProvider(
        { scheme: 'file', language: 'rua' },
        new DocumentSemanticTokensProvider(), legend));
}

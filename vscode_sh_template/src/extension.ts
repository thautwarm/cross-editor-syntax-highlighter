import * as vscode from 'vscode';
import { DocumentSemanticTokensProvider, legend } from "./SHprovider";

export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(vscode.languages.registerDocumentSemanticTokensProvider(
        { scheme: 'file', language: 'comf' },
        new DocumentSemanticTokensProvider(), legend));
}

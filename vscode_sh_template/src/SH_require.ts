import * as antlr from 'antlr4ts'

export const tokenTypesLegend = [
    'comment',
    'string',
    'keyword',
    'number',
    'regexp',
    'operator',
    'namespace',
    'type',
    'struct',
    'class',
    'interface',
    'enum',
    'typeParameter',
    'function',
    'method',
    'decorator',
    'macro',
    'variable',
    'parameter',
    'property',
    'label'
];

function getNativeTokenId(s: string): number {
    return tokenTypesLegend.indexOf(s);
}

class Scope {
    public static readonly Keyword = getNativeTokenId("keyword");
    public static readonly Number = getNativeTokenId("number");
    public static readonly String = getNativeTokenId("string");
    public static readonly Operator = getNativeTokenId("operator");
    public static readonly Namespace = getNativeTokenId("namespace");
    public static readonly Function = getNativeTokenId("function");
    public static readonly Variable = getNativeTokenId("variable");
    public static readonly Label = getNativeTokenId("label");
    public static readonly Property = getNativeTokenId("property");
    public static readonly Method = getNativeTokenId("method");
    public static readonly Interface = getNativeTokenId("interface");
    public static readonly Struct = getNativeTokenId("struct");

}





export const tokenModifiersLegend = [
    'declaration',
    'documentation',
    'readonly',
    'static',
    'abstract',
    'deprecated',
    'modification',
    'async'
];

type scope = number
let render_cache = new Array<[scope, antlr.Token]>();

export function SH(x: antlr.Token, scope: string) {
    render_cache.push([getNativeTokenId(scope), x]);
    return 0;
}

export function isControl(x: antlr.Token) {
    render_cache.push([Scope.Label, x]);
    return 0;
}

export function isFuncDecl(x: antlr.Token) {
    render_cache.push([Scope.Interface, x]);
    return 0
}

export function isFuncCall(x: antlr.Token) {
    render_cache.push([Scope.Method, x]);
    return 0
}

export function isUnaryOperator(x: antlr.Token) {
    render_cache.push([Scope.Namespace, x]);
    return 0
}

export function isBinaryOperator(x: antlr.Token) {
    render_cache.push([Scope.Operator, x]);
    return 0
}

export function isNumber(x: antlr.Token) {
    render_cache.push([Scope.Number, x]);
    return 0
}

export function isVariable(x: antlr.Token) {
    render_cache.push([Scope.Variable, x]);
    return 0
}

export function isAttr(x: antlr.Token) {
    render_cache.push([Scope.Property, x]);
    return 0
}

export function isString(x: antlr.Token) {
    render_cache.push([Scope.String, x]);
    return 0
}

export function isLiteral(x: antlr.Token) {
    render_cache.push([Scope.Struct, x]);
    return 0
}

export function isKeyword(x: antlr.Token) {
    render_cache.push([Scope.Keyword, x]);
    return 0
}


export function getCache() {
    return render_cache;
}

export function clearCache() {
    render_cache = [];
}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearCache = exports.getCache = exports.isKeyword = exports.isLiteral = exports.isString = exports.isAttr = exports.isVariable = exports.isNumber = exports.isBinaryOperator = exports.isUnaryOperator = exports.isFuncCall = exports.isFuncDecl = exports.isControl = exports.SH = exports.tokenModifiersLegend = exports.tokenTypesLegend = void 0;
exports.tokenTypesLegend = [
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
function getNativeTokenId(s) {
    return exports.tokenTypesLegend.indexOf(s);
}
class Scope {
}
Scope.Keyword = getNativeTokenId("keyword");
Scope.Number = getNativeTokenId("number");
Scope.String = getNativeTokenId("string");
Scope.Operator = getNativeTokenId("operator");
Scope.Namespace = getNativeTokenId("namespace");
Scope.Function = getNativeTokenId("function");
Scope.Variable = getNativeTokenId("variable");
Scope.Label = getNativeTokenId("label");
Scope.Property = getNativeTokenId("property");
Scope.Method = getNativeTokenId("method");
Scope.Interface = getNativeTokenId("interface");
Scope.Struct = getNativeTokenId("struct");
exports.tokenModifiersLegend = [
    'declaration',
    'documentation',
    'readonly',
    'static',
    'abstract',
    'deprecated',
    'modification',
    'async'
];
let render_cache = new Array();
function SH(x, scope) {
    render_cache.push([getNativeTokenId(scope), x]);
    return 0;
}
exports.SH = SH;
function isControl(x) {
    render_cache.push([Scope.Label, x]);
    return 0;
}
exports.isControl = isControl;
function isFuncDecl(x) {
    render_cache.push([Scope.Interface, x]);
    return 0;
}
exports.isFuncDecl = isFuncDecl;
function isFuncCall(x) {
    render_cache.push([Scope.Method, x]);
    return 0;
}
exports.isFuncCall = isFuncCall;
function isUnaryOperator(x) {
    render_cache.push([Scope.Namespace, x]);
    return 0;
}
exports.isUnaryOperator = isUnaryOperator;
function isBinaryOperator(x) {
    render_cache.push([Scope.Operator, x]);
    return 0;
}
exports.isBinaryOperator = isBinaryOperator;
function isNumber(x) {
    render_cache.push([Scope.Number, x]);
    return 0;
}
exports.isNumber = isNumber;
function isVariable(x) {
    render_cache.push([Scope.Variable, x]);
    return 0;
}
exports.isVariable = isVariable;
function isAttr(x) {
    render_cache.push([Scope.Property, x]);
    return 0;
}
exports.isAttr = isAttr;
function isString(x) {
    render_cache.push([Scope.String, x]);
    return 0;
}
exports.isString = isString;
function isLiteral(x) {
    render_cache.push([Scope.Struct, x]);
    return 0;
}
exports.isLiteral = isLiteral;
function isKeyword(x) {
    render_cache.push([Scope.Keyword, x]);
    return 0;
}
exports.isKeyword = isKeyword;
function getCache() {
    return render_cache;
}
exports.getCache = getCache;
function clearCache() {
    render_cache = [];
}
exports.clearCache = clearCache;
//# sourceMappingURL=SH_require.js.map
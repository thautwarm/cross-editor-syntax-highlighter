from lark import Token
from pygments import token
from pygments.lexer import Lexer
from pygments.formatters import LatexFormatter
from sortedcontainers import *

_style_cache = SortedDict()


def clear_cache():
    _style_cache.clear()

def get_cache():
    return _style_cache

def isKeyword(tk: Token):
    _style_cache[tk.start_pos] = (token.Keyword, tk.end_pos)
    return 0

def isLiteral(tk: Token):
    _style_cache[tk.start_pos] = (token.Literal, tk.end_pos)
    return 0

def isString(tk: Token):
    _style_cache[tk.start_pos] = (token.String, tk.end_pos)

def isVariable(tk: Token):
    _style_cache[tk.start_pos] = (token.Name.Variable, tk.end_pos)
    return 0

def isAttr(tk: Token):
    _style_cache[tk.start_pos] = (token.Name.Attribute, tk.end_pos)
    return 0

def isBinaryOperator(tk: Token):
    _style_cache[tk.start_pos] = (token.Operator, tk.end_pos)
    return 0

def isUnaryOperator(tk: Token):
    _style_cache[tk.start_pos] = (token.Name.Variable.Instance, tk.end_pos)
    return 0

def isNumber(tk: Token):
    _style_cache[tk.start_pos] = (token.Number, tk.end_pos)
    return 0

def isFuncCall(tk: Token):
    _style_cache[tk.start_pos] = (token.Name.Function, tk.end_pos)
    return 0

def isFuncDecl(tk: Token):
    _style_cache[tk.start_pos] = (token.Keyword.Declaration, tk.end_pos)
    return 0

def isControl(tk: Token):
    _style_cache[tk.start_pos] = (token.Keyword.Namespace, tk.end_pos)
    return 0


def highlight(src: str):
    n = len(src)
    i = 0
    no_highlight_start = 0
    while i < n:
        if style_record := _style_cache.get(i):
            if no_highlight_start != i:
                yield i, token.Text, src[no_highlight_start:i]
            scope, end_pos = style_record 
            yield i, scope, src[i: end_pos]
            i = end_pos
            no_highlight_start = i
        else:
            i += 1

    if no_highlight_start != i:
        yield i, token.Text, src[no_highlight_start:i]
    clear_cache()

class MyLexer(Lexer):
    def get_tokens_unprocessed(self, text):
        return highlight(text)


        
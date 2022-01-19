from backend_pygments.lua_sh_parser import parser
from backend_pygments.lua_sh_require import MyLexer
from pygments import highlight
from pygments.formatters import LatexFormatter, HtmlFormatter, Terminal256Formatter, TerminalTrueColorFormatter, latex
from base16_applepips import base16_applepips_light
from wisepy2 import wise

formatters = {
    "latex": LatexFormatter,
    'html': HtmlFormatter,
    'term256': Terminal256Formatter,
    'truecolor': TerminalTrueColorFormatter
}

def main(filename: str, format: str="latex"):
    set_color_cache = parser.parse
    src = open(filename, encoding='utf-8').read()
    set_color_cache(src)
    formatter = formatters[format](style=base16_applepips_light)
    if format == 'latex':
        print(formatter.get_style_defs())
    print(highlight(src, MyLexer(), formatter))

if __name__ == '__main__':
    wise(main)()
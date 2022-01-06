## Cross-editor contextual syntax highlighter via Typed BNF

![lua](_.PNG)


Do you like "one grammar, syntax highlighters everywhere?"

喜欢我一个文法，到处高亮吗？

PS: **NOTE that parentheses in function arguments and parameters have different colors.**

PPS: **The amount of code required to implement such a cross-editor SH(~100 lines), is many orders of magnitude smaller than for the tmLanguage system(~10000 lines and unreadable)**.

### build grammar for VScode

build: `tbnf  .\cross-editor-highlighter\lua.tbnf .\cross-editor-highlighter\backend_vscode\src "lua_sh" --backend typescript-antlr`


### build grammar for pygments

build: ` python .\runcli.py  .\cross-editor-highlighter\lua.tbnf .\cross-editor-highlighter\backend_pygments\ "lua_sh" --backend python-lark`

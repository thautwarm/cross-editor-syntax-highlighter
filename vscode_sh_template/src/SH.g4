grammar SH;
@header {
import { SH } from "./SH_require"
}
start returns [result: number]: v=start__y_ EOF { $result = _localctx._v.result; };











start__y_ returns [number result]
: start__y__0__1='format' version component { 
                $result = <number> SH(<Token> _localctx._start__y__0__1, <string> "namespace");
            }
;
op returns [number result]
: op_0__1='==' { 
                $result = <number> SH(<Token> _localctx._op_0__1, <string> "operator");
            }
| op_1__1='!=' { 
                $result = <number> SH(<Token> _localctx._op_1__1, <string> "operator");
            }
| op_2__1='>' { 
                $result = <number> SH(<Token> _localctx._op_2__1, <string> "operator");
            }
| op_3__1='<' { 
                $result = <number> SH(<Token> _localctx._op_3__1, <string> "operator");
            }
| op_4__1='>=' { 
                $result = <number> SH(<Token> _localctx._op_4__1, <string> "operator");
            }
| op_5__1='<=' { 
                $result = <number> SH(<Token> _localctx._op_5__1, <string> "operator");
            }
| op_6__1='~' { 
                $result = <number> SH(<Token> _localctx._op_6__1, <string> "operator");
            }
| op_7__1='^' { 
                $result = <number> SH(<Token> _localctx._op_7__1, <string> "operator");
            }
;
version returns [number result]
: version_0__1=VERSION { 
                $result = <number> SH(<Token> _localctx._version_0__1, <string> "regexp");
            }
;
specifier returns [number result]
: op version { 
                $result = 0;
            }
;
specifier_set returns [number result]
: specifier { 
                $result = 0;
            }
| specifier_set specifier_set_1__2='&&' specifier { 
                $result = <number> SH(<Token> _localctx._specifier_set_1__2, <string> "enum");
            }
;
comment returns [number result]
: comment_0__1=LINE_COMMENT { 
                $result = <number> SH(<Token> _localctx._comment_0__1, <string> "comment");
            }
;
id returns [number result]
: id_0__1='format' { 
                $result = <number> SH(<Token> _localctx._id_0__1, <string> "variable");
            }
| id_1__1=ID { 
                $result = <number> SH(<Token> _localctx._id_1__1, <string> "variable");
            }
;
list_o_component_p_ returns [number result]
: component { 
                $result = 0;
            }
| list_o_component_p_ component { 
                $result = 0;
            }
;
comp returns [number result]
: comp_0__1=EXP { 
                $result = <number> SH(<Token> _localctx._comp_0__1, <string> "number");
            }
| comp_1__1=STR { 
                $result = <number> SH(<Token> _localctx._comp_1__1, <string> "string");
            }
| comp_2__1='true' { 
                $result = <number> SH(<Token> _localctx._comp_2__1, <string> "struct");
            }
| comp_3__1='false' { 
                $result = <number> SH(<Token> _localctx._comp_3__1, <string> "struct");
            }
| comp_4__1='null' { 
                $result = <number> SH(<Token> _localctx._comp_4__1, <string> "struct");
            }
| version { 
                $result = 0;
            }
| specifier_set { 
                $result = 0;
            }
| id comp { 
                $result = 0;
            }
| comp_8__1='{' list_o_component_p_ comp_8__3='}' { 
                let _ : number = <number> SH(<Token> _localctx._comp_8__1, <string> "class");
                $result = <number> SH(<Token> _localctx._comp_8__3, <string> "class");
            }
| comp_9__1='{' comp_9__2='}' { 
                let ___98_ : number = <number> SH(<Token> _localctx._comp_9__1, <string> "class");
                $result = <number> SH(<Token> _localctx._comp_9__2, <string> "class");
            }
;
list_o_comment_p_ returns [number result]
: comment { 
                $result = 0;
            }
| list_o_comment_p_ comment { 
                $result = 0;
            }
;
component returns [number result]
: comp { 
                $result = 0;
            }
| list_o_comment_p_ comp { 
                $result = 0;
            }
;
fragment LINE_END : ('\n' | '\r') ;
fragment DIGIT : [\u0030-\u0039] ;
fragment INT : DIGIT+ ;
VERSION : 'v' INT ('.' INT ('.' INT)?)? ;
fragment FLT : INT ('.' INT)? ;
EXP : '-'? FLT (('e' | 'E') INT)? ;
STR : '"' (('\\' .) | ~'"')* '"' ;
SPACE : ('\t' | '\n' | '\r' | ' ')+ -> channel(HIDDEN);
LINE_COMMENT : '-' '-' ~('\n' | '\r')* ;
fragment ID_CHAR : ([\u0061-\u007A] | [\u0041-\u005A] | '_' | [\u4E00-\u9FA5]) ;
ID : ID_CHAR (ID_CHAR | [\u0030-\u0039] | '-')* ;

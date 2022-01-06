grammar lua_sh;
@header {
import { isControl, isFuncDecl, isFuncCall, isUnaryOperator, isBinaryOperator, isNumber, isAttr, isVariable, isString, isLiteral, isKeyword } from "./lua_sh_require"
}
start returns [result: number]: v=start__y_ EOF { $result = _localctx._v.result; };














start__y_ returns [number result]
: block { 
                $result = 0;
            }
;
nempty_list_o_stat_p_ returns [number result]
: stat { 
                $result = 0;
            }
| nempty_list_o_stat_p_ stat { 
                $result = 0;
            }
;
allow_empty_o_nempty_list_o_stat_p__p_ returns [number result]
:  { 
                $result = 0;
            }
| nempty_list_o_stat_p_ { 
                $result = 0;
            }
;
list_o_stat_p_ returns [number result]
: allow_empty_o_nempty_list_o_stat_p__p_ { 
                $result = 0;
            }
;
opt_o_retstat_p_ returns [number result]
: retstat { 
                $result = 0;
            }
|  { 
                $result = 0;
            }
;
block returns [number result]
: list_o_stat_p_ opt_o_retstat_p_ { 
                $result = 0;
            }
;
retcolon returns [number result]
: retcolon_0__1=';' { 
                $result = <number> isControl(<Token> _localctx._retcolon_0__1);
            }
|  { 
                $result = 0;
            }
;
retstat returns [number result]
: retstat_0__1='return' seplist_o__i__s__i__s_exp_p_ retcolon { 
                $result = <number> isKeyword(<Token> _localctx._retstat_0__1);
            }
;
name returns [number result]
: name_0__1=NAME { 
                $result = <number> isVariable(<Token> _localctx._name_0__1);
            }
;
nempty_list_o_elseif_p_ returns [number result]
: elseif { 
                $result = 0;
            }
| nempty_list_o_elseif_p_ elseif { 
                $result = 0;
            }
;
allow_empty_o_nempty_list_o_elseif_p__p_ returns [number result]
:  { 
                $result = 0;
            }
| nempty_list_o_elseif_p_ { 
                $result = 0;
            }
;
list_o_elseif_p_ returns [number result]
: allow_empty_o_nempty_list_o_elseif_p__p_ { 
                $result = 0;
            }
;
opt_o_else_p_ returns [number result]
: else__x_ { 
                $result = 0;
            }
|  { 
                $result = 0;
            }
;
nempty_seplist_o__i__s__i__s__i_name_k__p_ returns [number result]
: NAME { 
                $result = 0;
            }
| nempty_seplist_o__i__s__i__s__i_name_k__p_ ',' NAME { 
                $result = 0;
            }
;
stat returns [number result]
: ';' { 
                $result = 0;
            }
| nempty_seplist_o__i__s__i__s_exp_p_ '=' nempty_seplist_o__i__s__i__s_exp_p_ { 
                $result = 0;
            }
| exp { 
                $result = 0;
            }
| stat_3__1='::' NAME stat_3__3='::' { 
                let _ : number = <number> isControl(<Token> _localctx._stat_3__1);
                $result = <number> isControl(<Token> _localctx._stat_3__3);
            }
| stat_4__1='break' { 
                $result = <number> isKeyword(<Token> _localctx._stat_4__1);
            }
| stat_5__1='goto' stat_5__2=NAME { 
                let ___98_ : number = <number> isKeyword(<Token> _localctx._stat_5__1);
                $result = <number> isControl(<Token> _localctx._stat_5__2);
            }
| stat_6__1='do' block stat_6__3='end' { 
                let ___98___103_ : number = <number> isKeyword(<Token> _localctx._stat_6__1);
                $result = <number> isKeyword(<Token> _localctx._stat_6__3);
            }
| stat_7__1='while' exp stat_7__3='do' block stat_7__5='end' { 
                let ___98___103___109_ : number = <number> isKeyword(<Token> _localctx._stat_7__1);
                let ___98___103___109___115_ : number = <number> isKeyword(<Token> _localctx._stat_7__3);
                $result = <number> isKeyword(<Token> _localctx._stat_7__5);
            }
| stat_8__1='repeat' block stat_8__3='until' exp { 
                let ___98___103___109___115___121_ : number = <number> isKeyword(<Token> _localctx._stat_8__1);
                $result = <number> isKeyword(<Token> _localctx._stat_8__3);
            }
| stat_9__1='if' exp stat_9__3='then' block list_o_elseif_p_ opt_o_else_p_ stat_9__7='end' { 
                let ___98___103___109___115___121___101_ : number = <number> isKeyword(<Token> _localctx._stat_9__1);
                let ___98___103___109___115___121___101___107_ : number = <number> isKeyword(<Token> _localctx._stat_9__3);
                $result = <number> isKeyword(<Token> _localctx._stat_9__7);
            }
| stat_10__1='for' NAME stat_10__3='=' range stat_10__5='do' block stat_10__7='end' { 
                let ___98___103___109___115___121___101___107___113_ : number = <number> isKeyword(<Token> _localctx._stat_10__1);
                let ___98___103___109___115___121___101___107___113___119_ : number = <number> isKeyword(<Token> _localctx._stat_10__3);
                let ___98___103___109___115___121___101___107___113___119___99_ : number = <number> isKeyword(<Token> _localctx._stat_10__5);
                $result = <number> isKeyword(<Token> _localctx._stat_10__7);
            }
| stat_11__1='for' nempty_seplist_o__i__s__i__s_name_p_ stat_11__3='in' nempty_seplist_o__i__s__i__s_exp_p_ stat_11__5='do' block stat_11__7='end' { 
                let ___98___103___109___115___121___101___107___113___119___99___104_ : number = <number> isKeyword(<Token> _localctx._stat_11__1);
                let ___98___103___109___115___121___101___107___113___119___99___104___110_ : number = <number> isKeyword(<Token> _localctx._stat_11__3);
                let ___98___103___109___115___121___101___107___113___119___99___104___110___116_ : number = <number> isKeyword(<Token> _localctx._stat_11__5);
                $result = <number> isKeyword(<Token> _localctx._stat_11__7);
            }
| stat_12__1='local' stat_12__2='function' funcname stat_12__4='(' opt_o_parlist_p_ stat_12__6=')' block stat_12__8='end' { 
                let ___98___103___109___115___121___101___107___113___119___99___104___110___116___122_ : number = <number> isKeyword(<Token> _localctx._stat_12__1);
                let ___98___103___109___115___121___101___107___113___119___99___104___110___116___122___102_ : number = <number> isKeyword(<Token> _localctx._stat_12__2);
                let ___98___103___109___115___121___101___107___113___119___99___104___110___116___122___102___108_ : number = <number> isKeyword(<Token> _localctx._stat_12__4);
                let ___98___103___109___115___121___101___107___113___119___99___104___110___116___122___102___108___114_ : number = <number> isKeyword(<Token> _localctx._stat_12__6);
                $result = <number> isKeyword(<Token> _localctx._stat_12__8);
            }
| stat_13__1='local' nempty_seplist_o__i__s__i__s__i_name_k__p_ opt_assign_rhs { 
                $result = <number> isKeyword(<Token> _localctx._stat_13__1);
            }
;
opt_assign_rhs returns [number result]
: '=' nempty_seplist_o__i__s__i__s_exp_p_ { 
                $result = 0;
            }
|  { 
                $result = 0;
            }
;
range returns [number result]
: exp ',' exp range_tail { 
                $result = 0;
            }
;
range_tail returns [number result]
: ',' exp { 
                $result = 0;
            }
|  { 
                $result = 0;
            }
;
elseif returns [number result]
: elseif_0__1='elseif' exp elseif_0__3='then' block { 
                let ___98___103___109___115___121___101___107___113___119___99___104___110___116___122___102___108___114___120_ : number = <number> isKeyword(<Token> _localctx._elseif_0__1);
                $result = <number> isKeyword(<Token> _localctx._elseif_0__3);
            }
;
else__x_ returns [number result]
: else__x__0__1='else' block { 
                $result = <number> isKeyword(<Token> _localctx._else__x__0__1);
            }
;
exp returns [number result]
: binexp { 
                $result = 0;
            }
;
binexp returns [number result]
: binseq { 
                $result = 0;
            }
;
binseq returns [number result]
: binseq binop binoperand { 
                $result = 0;
            }
| binoperand { 
                $result = 0;
            }
;
binoperand returns [number result]
: unaryexp { 
                $result = 0;
            }
;
unaryexp returns [number result]
: unaryexp_0__1='#' exponent { 
                $result = <number> isUnaryOperator(<Token> _localctx._unaryexp_0__1);
            }
| unaryexp_1__1='-' exponent { 
                $result = <number> isUnaryOperator(<Token> _localctx._unaryexp_1__1);
            }
| unaryexp_2__1='~' exponent { 
                $result = <number> isUnaryOperator(<Token> _localctx._unaryexp_2__1);
            }
| unaryexp_3__1='not' exponent { 
                $result = <number> isUnaryOperator(<Token> _localctx._unaryexp_3__1);
            }
| exponent { 
                $result = 0;
            }
;
exponent returns [number result]
: prefixexp exponent_0__2='^' exponent { 
                $result = <number> isBinaryOperator(<Token> _localctx._exponent_0__2);
            }
| prefixexp { 
                $result = 0;
            }
;
prefixexp returns [number result]
: prefixexp_0__1=NAME { 
                $result = <number> isVariable(<Token> _localctx._prefixexp_0__1);
            }
| '(' exp ')' { 
                $result = 0;
            }
| prefixexp args { 
                $result = 0;
            }
| prefixexp ':' prefixexp_3__3=NAME args { 
                $result = <number> isAttr(<Token> _localctx._prefixexp_3__3);
            }
| prefixexp '[' exp ']' { 
                $result = 0;
            }
| prefixexp '.' prefixexp_5__3=NAME { 
                $result = <number> isAttr(<Token> _localctx._prefixexp_5__3);
            }
| atom { 
                $result = 0;
            }
;
atom returns [number result]
: atom_0__1='nil' { 
                $result = <number> isLiteral(<Token> _localctx._atom_0__1);
            }
| atom_1__1='false' { 
                $result = <number> isLiteral(<Token> _localctx._atom_1__1);
            }
| atom_2__1='true' { 
                $result = <number> isLiteral(<Token> _localctx._atom_2__1);
            }
| atom_3__1=NUMERAL { 
                $result = <number> isNumber(<Token> _localctx._atom_3__1);
            }
| atom_4__1=STR_LIT { 
                $result = <number> isString(<Token> _localctx._atom_4__1);
            }
| atom_5__1=NESTED_STR { 
                $result = <number> isString(<Token> _localctx._atom_5__1);
            }
| atom_6__1='...' { 
                $result = <number> isControl(<Token> _localctx._atom_6__1);
            }
| functiondef { 
                $result = 0;
            }
| tableconstructor { 
                $result = 0;
            }
;
nempty_seplist_o__i__s__i__s_exp_p_ returns [number result]
: exp { 
                $result = 0;
            }
| nempty_seplist_o__i__s__i__s_exp_p_ ',' exp { 
                $result = 0;
            }
;
allow_empty_o_nempty_seplist_o__i__s__i__s_exp_p__p_ returns [number result]
:  { 
                $result = 0;
            }
| nempty_seplist_o__i__s__i__s_exp_p_ { 
                $result = 0;
            }
;
seplist_o__i__s__i__s_exp_p_ returns [number result]
: allow_empty_o_nempty_seplist_o__i__s__i__s_exp_p__p_ { 
                $result = 0;
            }
;
args returns [number result]
: args_0__1='(' seplist_o__i__s__i__s_exp_p_ args_0__3=')' { 
                let ___98___103___109___115___121___101___107___113___119___99___104___110___116___122___102___108___114___120___100_ : number = <number> isFuncCall(<Token> _localctx._args_0__1);
                $result = <number> isFuncCall(<Token> _localctx._args_0__3);
            }
| tableconstructor { 
                $result = 0;
            }
| args_2__1=STR_LIT { 
                $result = <number> isString(<Token> _localctx._args_2__1);
            }
;
opt_o_funcname_p_ returns [number result]
: funcname { 
                $result = 0;
            }
|  { 
                $result = 0;
            }
;
opt_o_parlist_p_ returns [number result]
: parlist { 
                $result = 0;
            }
|  { 
                $result = 0;
            }
;
functiondef returns [number result]
: functiondef_0__1='function' opt_o_funcname_p_ functiondef_0__3='(' opt_o_parlist_p_ functiondef_0__5=')' block functiondef_0__7='end' { 
                let ___98___103___109___115___121___101___107___113___119___99___104___110___116___122___102___108___114___120___100___106_ : number = <number> isKeyword(<Token> _localctx._functiondef_0__1);
                let ___98___103___109___115___121___101___107___113___119___99___104___110___116___122___102___108___114___120___100___106___112_ : number = <number> isKeyword(<Token> _localctx._functiondef_0__7);
                let ___98___103___109___115___121___101___107___113___119___99___104___110___116___122___102___108___114___120___100___106___112___118_ : number = <number> isFuncDecl(<Token> _localctx._functiondef_0__3);
                $result = <number> isFuncDecl(<Token> _localctx._functiondef_0__5);
            }
;
varargs returns [number result]
: ',' varargs_0__2='...' { 
                $result = <number> isControl(<Token> _localctx._varargs_0__2);
            }
|  { 
                $result = 0;
            }
;
nempty_seplist_o__i__s__i__s_name_p_ returns [number result]
: name { 
                $result = 0;
            }
| nempty_seplist_o__i__s__i__s_name_p_ ',' name { 
                $result = 0;
            }
;
parlist returns [number result]
: '...' { 
                $result = 0;
            }
| nempty_seplist_o__i__s__i__s_name_p_ varargs { 
                $result = 0;
            }
;
nempty_seplist_o_fieldsep_s_field_p_ returns [number result]
: field { 
                $result = 0;
            }
| nempty_seplist_o_fieldsep_s_field_p_ fieldsep field { 
                $result = 0;
            }
;
opt_o_fieldsep_p_ returns [number result]
: fieldsep { 
                $result = 0;
            }
|  { 
                $result = 0;
            }
;
tableconstructor returns [number result]
: '{' nempty_seplist_o_fieldsep_s_field_p_ opt_o_fieldsep_p_ '}' { 
                $result = 0;
            }
| '{' '}' { 
                $result = 0;
            }
;
funcname returns [number result]
: funcname '.' funcname_0__3=NAME { 
                $result = <number> isAttr(<Token> _localctx._funcname_0__3);
            }
| funcname ':' funcname_1__3=NAME { 
                $result = <number> isAttr(<Token> _localctx._funcname_1__3);
            }
| funcname_2__1=NAME { 
                $result = <number> isVariable(<Token> _localctx._funcname_2__1);
            }
;
field returns [number result]
: '[' exp ']' '=' exp { 
                $result = 0;
            }
| field_1__1=NAME '=' exp { 
                $result = <number> isAttr(<Token> _localctx._field_1__1);
            }
| exp { 
                $result = 0;
            }
;
fieldsep returns [number result]
: ',' { 
                $result = 0;
            }
| ';' { 
                $result = 0;
            }
;
binop returns [number result]
: binop_0__1='or' { 
                $result = <number> isBinaryOperator(<Token> _localctx._binop_0__1);
            }
| binop_1__1='and' { 
                $result = <number> isBinaryOperator(<Token> _localctx._binop_1__1);
            }
| binop_2__1='<' { 
                $result = <number> isBinaryOperator(<Token> _localctx._binop_2__1);
            }
| binop_3__1='>' { 
                $result = <number> isBinaryOperator(<Token> _localctx._binop_3__1);
            }
| binop_4__1='<=' { 
                $result = <number> isBinaryOperator(<Token> _localctx._binop_4__1);
            }
| binop_5__1='>=' { 
                $result = <number> isBinaryOperator(<Token> _localctx._binop_5__1);
            }
| binop_6__1='~=' { 
                $result = <number> isBinaryOperator(<Token> _localctx._binop_6__1);
            }
| binop_7__1='==' { 
                $result = <number> isBinaryOperator(<Token> _localctx._binop_7__1);
            }
| binop_8__1='|' { 
                $result = <number> isBinaryOperator(<Token> _localctx._binop_8__1);
            }
| binop_9__1='~' { 
                $result = <number> isBinaryOperator(<Token> _localctx._binop_9__1);
            }
| binop_10__1='&' { 
                $result = <number> isBinaryOperator(<Token> _localctx._binop_10__1);
            }
| binop_11__1='<<' { 
                $result = <number> isBinaryOperator(<Token> _localctx._binop_11__1);
            }
| binop_12__1='>>' { 
                $result = <number> isBinaryOperator(<Token> _localctx._binop_12__1);
            }
| binop_13__1='..' { 
                $result = <number> isBinaryOperator(<Token> _localctx._binop_13__1);
            }
| binop_14__1='+' { 
                $result = <number> isBinaryOperator(<Token> _localctx._binop_14__1);
            }
| binop_15__1='-' { 
                $result = <number> isBinaryOperator(<Token> _localctx._binop_15__1);
            }
| binop_16__1='*' { 
                $result = <number> isBinaryOperator(<Token> _localctx._binop_16__1);
            }
| binop_17__1='/' { 
                $result = <number> isBinaryOperator(<Token> _localctx._binop_17__1);
            }
| binop_18__1='//' { 
                $result = <number> isBinaryOperator(<Token> _localctx._binop_18__1);
            }
| binop_19__1='%' { 
                $result = <number> isBinaryOperator(<Token> _localctx._binop_19__1);
            }
;
LINE_COMMENT : '-' '-' ~'\n'* '\n' -> channel(HIDDEN);
SPACE : (' ' | '\t' | '\r' | '\n') -> channel(HIDDEN);
fragment DIGIT : [\u0030-\u0039] ;
fragment HEXCHAR : ([\u0030-\u0039] | [\u0061-\u007A] | [\u0041-\u005A]) ;
fragment UCHAR : ([\u0061-\u007A] | [\u0041-\u005A] | '_') ;
NAME : UCHAR (UCHAR | DIGIT)* ;
fragment INT : DIGIT+ ;
fragment INTEGRAL : INT ('.' INT)? (('E' | 'e') INT)? ;
fragment HEX : '0x' HEXCHAR+ ;
NUMERAL : HEX | INTEGRAL ;
STR_LIT : '"' (('\\' .) | ~'"')* '"' ;
fragment NESTED_STR1 : '[' ((']' ~']') | ~']')* ']' ;
fragment NESTED_STR2 : '=' (('[' (~']' | (']' (~'=' | ('=' ~']'))))* ']') | (('=' ~']') | ~'=')*) '=' ;
NESTED_STR : '[' (NESTED_STR1 | NESTED_STR2) ']' ;

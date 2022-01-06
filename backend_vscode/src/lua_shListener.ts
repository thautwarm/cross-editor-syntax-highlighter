// Generated from .\lua_sh.g4 by ANTLR 4.9.0-SNAPSHOT


import { isControl, isFuncDecl, isFuncCall, isUnaryOperator, isBinaryOperator, isNumber, isAttr, isVariable, isString, isLiteral, isKeyword } from "./lua_sh_require"


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { StartContext } from "./lua_shParser";
import { Start__y_Context } from "./lua_shParser";
import { Nempty_list_o_stat_p_Context } from "./lua_shParser";
import { Allow_empty_o_nempty_list_o_stat_p__p_Context } from "./lua_shParser";
import { List_o_stat_p_Context } from "./lua_shParser";
import { Opt_o_retstat_p_Context } from "./lua_shParser";
import { BlockContext } from "./lua_shParser";
import { RetcolonContext } from "./lua_shParser";
import { RetstatContext } from "./lua_shParser";
import { NameContext } from "./lua_shParser";
import { Nempty_list_o_elseif_p_Context } from "./lua_shParser";
import { Allow_empty_o_nempty_list_o_elseif_p__p_Context } from "./lua_shParser";
import { List_o_elseif_p_Context } from "./lua_shParser";
import { Opt_o_else_p_Context } from "./lua_shParser";
import { Nempty_seplist_o__i__s__i__s__i_name_k__p_Context } from "./lua_shParser";
import { StatContext } from "./lua_shParser";
import { Opt_assign_rhsContext } from "./lua_shParser";
import { RangeContext } from "./lua_shParser";
import { Range_tailContext } from "./lua_shParser";
import { ElseifContext } from "./lua_shParser";
import { Else__x_Context } from "./lua_shParser";
import { ExpContext } from "./lua_shParser";
import { BinexpContext } from "./lua_shParser";
import { BinseqContext } from "./lua_shParser";
import { BinoperandContext } from "./lua_shParser";
import { UnaryexpContext } from "./lua_shParser";
import { ExponentContext } from "./lua_shParser";
import { PrefixexpContext } from "./lua_shParser";
import { AtomContext } from "./lua_shParser";
import { Nempty_seplist_o__i__s__i__s_exp_p_Context } from "./lua_shParser";
import { Allow_empty_o_nempty_seplist_o__i__s__i__s_exp_p__p_Context } from "./lua_shParser";
import { Seplist_o__i__s__i__s_exp_p_Context } from "./lua_shParser";
import { ArgsContext } from "./lua_shParser";
import { Opt_o_funcname_p_Context } from "./lua_shParser";
import { Opt_o_parlist_p_Context } from "./lua_shParser";
import { FunctiondefContext } from "./lua_shParser";
import { VarargsContext } from "./lua_shParser";
import { Nempty_seplist_o__i__s__i__s_name_p_Context } from "./lua_shParser";
import { ParlistContext } from "./lua_shParser";
import { Nempty_seplist_o_fieldsep_s_field_p_Context } from "./lua_shParser";
import { Opt_o_fieldsep_p_Context } from "./lua_shParser";
import { TableconstructorContext } from "./lua_shParser";
import { FuncnameContext } from "./lua_shParser";
import { FieldContext } from "./lua_shParser";
import { FieldsepContext } from "./lua_shParser";
import { BinopContext } from "./lua_shParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `lua_shParser`.
 */
export interface lua_shListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `lua_shParser.start`.
	 * @param ctx the parse tree
	 */
	enterStart?: (ctx: StartContext) => void;
	/**
	 * Exit a parse tree produced by `lua_shParser.start`.
	 * @param ctx the parse tree
	 */
	exitStart?: (ctx: StartContext) => void;

	/**
	 * Enter a parse tree produced by `lua_shParser.start__y_`.
	 * @param ctx the parse tree
	 */
	enterStart__y_?: (ctx: Start__y_Context) => void;
	/**
	 * Exit a parse tree produced by `lua_shParser.start__y_`.
	 * @param ctx the parse tree
	 */
	exitStart__y_?: (ctx: Start__y_Context) => void;

	/**
	 * Enter a parse tree produced by `lua_shParser.nempty_list_o_stat_p_`.
	 * @param ctx the parse tree
	 */
	enterNempty_list_o_stat_p_?: (ctx: Nempty_list_o_stat_p_Context) => void;
	/**
	 * Exit a parse tree produced by `lua_shParser.nempty_list_o_stat_p_`.
	 * @param ctx the parse tree
	 */
	exitNempty_list_o_stat_p_?: (ctx: Nempty_list_o_stat_p_Context) => void;

	/**
	 * Enter a parse tree produced by `lua_shParser.allow_empty_o_nempty_list_o_stat_p__p_`.
	 * @param ctx the parse tree
	 */
	enterAllow_empty_o_nempty_list_o_stat_p__p_?: (ctx: Allow_empty_o_nempty_list_o_stat_p__p_Context) => void;
	/**
	 * Exit a parse tree produced by `lua_shParser.allow_empty_o_nempty_list_o_stat_p__p_`.
	 * @param ctx the parse tree
	 */
	exitAllow_empty_o_nempty_list_o_stat_p__p_?: (ctx: Allow_empty_o_nempty_list_o_stat_p__p_Context) => void;

	/**
	 * Enter a parse tree produced by `lua_shParser.list_o_stat_p_`.
	 * @param ctx the parse tree
	 */
	enterList_o_stat_p_?: (ctx: List_o_stat_p_Context) => void;
	/**
	 * Exit a parse tree produced by `lua_shParser.list_o_stat_p_`.
	 * @param ctx the parse tree
	 */
	exitList_o_stat_p_?: (ctx: List_o_stat_p_Context) => void;

	/**
	 * Enter a parse tree produced by `lua_shParser.opt_o_retstat_p_`.
	 * @param ctx the parse tree
	 */
	enterOpt_o_retstat_p_?: (ctx: Opt_o_retstat_p_Context) => void;
	/**
	 * Exit a parse tree produced by `lua_shParser.opt_o_retstat_p_`.
	 * @param ctx the parse tree
	 */
	exitOpt_o_retstat_p_?: (ctx: Opt_o_retstat_p_Context) => void;

	/**
	 * Enter a parse tree produced by `lua_shParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `lua_shParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `lua_shParser.retcolon`.
	 * @param ctx the parse tree
	 */
	enterRetcolon?: (ctx: RetcolonContext) => void;
	/**
	 * Exit a parse tree produced by `lua_shParser.retcolon`.
	 * @param ctx the parse tree
	 */
	exitRetcolon?: (ctx: RetcolonContext) => void;

	/**
	 * Enter a parse tree produced by `lua_shParser.retstat`.
	 * @param ctx the parse tree
	 */
	enterRetstat?: (ctx: RetstatContext) => void;
	/**
	 * Exit a parse tree produced by `lua_shParser.retstat`.
	 * @param ctx the parse tree
	 */
	exitRetstat?: (ctx: RetstatContext) => void;

	/**
	 * Enter a parse tree produced by `lua_shParser.name`.
	 * @param ctx the parse tree
	 */
	enterName?: (ctx: NameContext) => void;
	/**
	 * Exit a parse tree produced by `lua_shParser.name`.
	 * @param ctx the parse tree
	 */
	exitName?: (ctx: NameContext) => void;

	/**
	 * Enter a parse tree produced by `lua_shParser.nempty_list_o_elseif_p_`.
	 * @param ctx the parse tree
	 */
	enterNempty_list_o_elseif_p_?: (ctx: Nempty_list_o_elseif_p_Context) => void;
	/**
	 * Exit a parse tree produced by `lua_shParser.nempty_list_o_elseif_p_`.
	 * @param ctx the parse tree
	 */
	exitNempty_list_o_elseif_p_?: (ctx: Nempty_list_o_elseif_p_Context) => void;

	/**
	 * Enter a parse tree produced by `lua_shParser.allow_empty_o_nempty_list_o_elseif_p__p_`.
	 * @param ctx the parse tree
	 */
	enterAllow_empty_o_nempty_list_o_elseif_p__p_?: (ctx: Allow_empty_o_nempty_list_o_elseif_p__p_Context) => void;
	/**
	 * Exit a parse tree produced by `lua_shParser.allow_empty_o_nempty_list_o_elseif_p__p_`.
	 * @param ctx the parse tree
	 */
	exitAllow_empty_o_nempty_list_o_elseif_p__p_?: (ctx: Allow_empty_o_nempty_list_o_elseif_p__p_Context) => void;

	/**
	 * Enter a parse tree produced by `lua_shParser.list_o_elseif_p_`.
	 * @param ctx the parse tree
	 */
	enterList_o_elseif_p_?: (ctx: List_o_elseif_p_Context) => void;
	/**
	 * Exit a parse tree produced by `lua_shParser.list_o_elseif_p_`.
	 * @param ctx the parse tree
	 */
	exitList_o_elseif_p_?: (ctx: List_o_elseif_p_Context) => void;

	/**
	 * Enter a parse tree produced by `lua_shParser.opt_o_else_p_`.
	 * @param ctx the parse tree
	 */
	enterOpt_o_else_p_?: (ctx: Opt_o_else_p_Context) => void;
	/**
	 * Exit a parse tree produced by `lua_shParser.opt_o_else_p_`.
	 * @param ctx the parse tree
	 */
	exitOpt_o_else_p_?: (ctx: Opt_o_else_p_Context) => void;

	/**
	 * Enter a parse tree produced by `lua_shParser.nempty_seplist_o__i__s__i__s__i_name_k__p_`.
	 * @param ctx the parse tree
	 */
	enterNempty_seplist_o__i__s__i__s__i_name_k__p_?: (ctx: Nempty_seplist_o__i__s__i__s__i_name_k__p_Context) => void;
	/**
	 * Exit a parse tree produced by `lua_shParser.nempty_seplist_o__i__s__i__s__i_name_k__p_`.
	 * @param ctx the parse tree
	 */
	exitNempty_seplist_o__i__s__i__s__i_name_k__p_?: (ctx: Nempty_seplist_o__i__s__i__s__i_name_k__p_Context) => void;

	/**
	 * Enter a parse tree produced by `lua_shParser.stat`.
	 * @param ctx the parse tree
	 */
	enterStat?: (ctx: StatContext) => void;
	/**
	 * Exit a parse tree produced by `lua_shParser.stat`.
	 * @param ctx the parse tree
	 */
	exitStat?: (ctx: StatContext) => void;

	/**
	 * Enter a parse tree produced by `lua_shParser.opt_assign_rhs`.
	 * @param ctx the parse tree
	 */
	enterOpt_assign_rhs?: (ctx: Opt_assign_rhsContext) => void;
	/**
	 * Exit a parse tree produced by `lua_shParser.opt_assign_rhs`.
	 * @param ctx the parse tree
	 */
	exitOpt_assign_rhs?: (ctx: Opt_assign_rhsContext) => void;

	/**
	 * Enter a parse tree produced by `lua_shParser.range`.
	 * @param ctx the parse tree
	 */
	enterRange?: (ctx: RangeContext) => void;
	/**
	 * Exit a parse tree produced by `lua_shParser.range`.
	 * @param ctx the parse tree
	 */
	exitRange?: (ctx: RangeContext) => void;

	/**
	 * Enter a parse tree produced by `lua_shParser.range_tail`.
	 * @param ctx the parse tree
	 */
	enterRange_tail?: (ctx: Range_tailContext) => void;
	/**
	 * Exit a parse tree produced by `lua_shParser.range_tail`.
	 * @param ctx the parse tree
	 */
	exitRange_tail?: (ctx: Range_tailContext) => void;

	/**
	 * Enter a parse tree produced by `lua_shParser.elseif`.
	 * @param ctx the parse tree
	 */
	enterElseif?: (ctx: ElseifContext) => void;
	/**
	 * Exit a parse tree produced by `lua_shParser.elseif`.
	 * @param ctx the parse tree
	 */
	exitElseif?: (ctx: ElseifContext) => void;

	/**
	 * Enter a parse tree produced by `lua_shParser.else__x_`.
	 * @param ctx the parse tree
	 */
	enterElse__x_?: (ctx: Else__x_Context) => void;
	/**
	 * Exit a parse tree produced by `lua_shParser.else__x_`.
	 * @param ctx the parse tree
	 */
	exitElse__x_?: (ctx: Else__x_Context) => void;

	/**
	 * Enter a parse tree produced by `lua_shParser.exp`.
	 * @param ctx the parse tree
	 */
	enterExp?: (ctx: ExpContext) => void;
	/**
	 * Exit a parse tree produced by `lua_shParser.exp`.
	 * @param ctx the parse tree
	 */
	exitExp?: (ctx: ExpContext) => void;

	/**
	 * Enter a parse tree produced by `lua_shParser.binexp`.
	 * @param ctx the parse tree
	 */
	enterBinexp?: (ctx: BinexpContext) => void;
	/**
	 * Exit a parse tree produced by `lua_shParser.binexp`.
	 * @param ctx the parse tree
	 */
	exitBinexp?: (ctx: BinexpContext) => void;

	/**
	 * Enter a parse tree produced by `lua_shParser.binseq`.
	 * @param ctx the parse tree
	 */
	enterBinseq?: (ctx: BinseqContext) => void;
	/**
	 * Exit a parse tree produced by `lua_shParser.binseq`.
	 * @param ctx the parse tree
	 */
	exitBinseq?: (ctx: BinseqContext) => void;

	/**
	 * Enter a parse tree produced by `lua_shParser.binoperand`.
	 * @param ctx the parse tree
	 */
	enterBinoperand?: (ctx: BinoperandContext) => void;
	/**
	 * Exit a parse tree produced by `lua_shParser.binoperand`.
	 * @param ctx the parse tree
	 */
	exitBinoperand?: (ctx: BinoperandContext) => void;

	/**
	 * Enter a parse tree produced by `lua_shParser.unaryexp`.
	 * @param ctx the parse tree
	 */
	enterUnaryexp?: (ctx: UnaryexpContext) => void;
	/**
	 * Exit a parse tree produced by `lua_shParser.unaryexp`.
	 * @param ctx the parse tree
	 */
	exitUnaryexp?: (ctx: UnaryexpContext) => void;

	/**
	 * Enter a parse tree produced by `lua_shParser.exponent`.
	 * @param ctx the parse tree
	 */
	enterExponent?: (ctx: ExponentContext) => void;
	/**
	 * Exit a parse tree produced by `lua_shParser.exponent`.
	 * @param ctx the parse tree
	 */
	exitExponent?: (ctx: ExponentContext) => void;

	/**
	 * Enter a parse tree produced by `lua_shParser.prefixexp`.
	 * @param ctx the parse tree
	 */
	enterPrefixexp?: (ctx: PrefixexpContext) => void;
	/**
	 * Exit a parse tree produced by `lua_shParser.prefixexp`.
	 * @param ctx the parse tree
	 */
	exitPrefixexp?: (ctx: PrefixexpContext) => void;

	/**
	 * Enter a parse tree produced by `lua_shParser.atom`.
	 * @param ctx the parse tree
	 */
	enterAtom?: (ctx: AtomContext) => void;
	/**
	 * Exit a parse tree produced by `lua_shParser.atom`.
	 * @param ctx the parse tree
	 */
	exitAtom?: (ctx: AtomContext) => void;

	/**
	 * Enter a parse tree produced by `lua_shParser.nempty_seplist_o__i__s__i__s_exp_p_`.
	 * @param ctx the parse tree
	 */
	enterNempty_seplist_o__i__s__i__s_exp_p_?: (ctx: Nempty_seplist_o__i__s__i__s_exp_p_Context) => void;
	/**
	 * Exit a parse tree produced by `lua_shParser.nempty_seplist_o__i__s__i__s_exp_p_`.
	 * @param ctx the parse tree
	 */
	exitNempty_seplist_o__i__s__i__s_exp_p_?: (ctx: Nempty_seplist_o__i__s__i__s_exp_p_Context) => void;

	/**
	 * Enter a parse tree produced by `lua_shParser.allow_empty_o_nempty_seplist_o__i__s__i__s_exp_p__p_`.
	 * @param ctx the parse tree
	 */
	enterAllow_empty_o_nempty_seplist_o__i__s__i__s_exp_p__p_?: (ctx: Allow_empty_o_nempty_seplist_o__i__s__i__s_exp_p__p_Context) => void;
	/**
	 * Exit a parse tree produced by `lua_shParser.allow_empty_o_nempty_seplist_o__i__s__i__s_exp_p__p_`.
	 * @param ctx the parse tree
	 */
	exitAllow_empty_o_nempty_seplist_o__i__s__i__s_exp_p__p_?: (ctx: Allow_empty_o_nempty_seplist_o__i__s__i__s_exp_p__p_Context) => void;

	/**
	 * Enter a parse tree produced by `lua_shParser.seplist_o__i__s__i__s_exp_p_`.
	 * @param ctx the parse tree
	 */
	enterSeplist_o__i__s__i__s_exp_p_?: (ctx: Seplist_o__i__s__i__s_exp_p_Context) => void;
	/**
	 * Exit a parse tree produced by `lua_shParser.seplist_o__i__s__i__s_exp_p_`.
	 * @param ctx the parse tree
	 */
	exitSeplist_o__i__s__i__s_exp_p_?: (ctx: Seplist_o__i__s__i__s_exp_p_Context) => void;

	/**
	 * Enter a parse tree produced by `lua_shParser.args`.
	 * @param ctx the parse tree
	 */
	enterArgs?: (ctx: ArgsContext) => void;
	/**
	 * Exit a parse tree produced by `lua_shParser.args`.
	 * @param ctx the parse tree
	 */
	exitArgs?: (ctx: ArgsContext) => void;

	/**
	 * Enter a parse tree produced by `lua_shParser.opt_o_funcname_p_`.
	 * @param ctx the parse tree
	 */
	enterOpt_o_funcname_p_?: (ctx: Opt_o_funcname_p_Context) => void;
	/**
	 * Exit a parse tree produced by `lua_shParser.opt_o_funcname_p_`.
	 * @param ctx the parse tree
	 */
	exitOpt_o_funcname_p_?: (ctx: Opt_o_funcname_p_Context) => void;

	/**
	 * Enter a parse tree produced by `lua_shParser.opt_o_parlist_p_`.
	 * @param ctx the parse tree
	 */
	enterOpt_o_parlist_p_?: (ctx: Opt_o_parlist_p_Context) => void;
	/**
	 * Exit a parse tree produced by `lua_shParser.opt_o_parlist_p_`.
	 * @param ctx the parse tree
	 */
	exitOpt_o_parlist_p_?: (ctx: Opt_o_parlist_p_Context) => void;

	/**
	 * Enter a parse tree produced by `lua_shParser.functiondef`.
	 * @param ctx the parse tree
	 */
	enterFunctiondef?: (ctx: FunctiondefContext) => void;
	/**
	 * Exit a parse tree produced by `lua_shParser.functiondef`.
	 * @param ctx the parse tree
	 */
	exitFunctiondef?: (ctx: FunctiondefContext) => void;

	/**
	 * Enter a parse tree produced by `lua_shParser.varargs`.
	 * @param ctx the parse tree
	 */
	enterVarargs?: (ctx: VarargsContext) => void;
	/**
	 * Exit a parse tree produced by `lua_shParser.varargs`.
	 * @param ctx the parse tree
	 */
	exitVarargs?: (ctx: VarargsContext) => void;

	/**
	 * Enter a parse tree produced by `lua_shParser.nempty_seplist_o__i__s__i__s_name_p_`.
	 * @param ctx the parse tree
	 */
	enterNempty_seplist_o__i__s__i__s_name_p_?: (ctx: Nempty_seplist_o__i__s__i__s_name_p_Context) => void;
	/**
	 * Exit a parse tree produced by `lua_shParser.nempty_seplist_o__i__s__i__s_name_p_`.
	 * @param ctx the parse tree
	 */
	exitNempty_seplist_o__i__s__i__s_name_p_?: (ctx: Nempty_seplist_o__i__s__i__s_name_p_Context) => void;

	/**
	 * Enter a parse tree produced by `lua_shParser.parlist`.
	 * @param ctx the parse tree
	 */
	enterParlist?: (ctx: ParlistContext) => void;
	/**
	 * Exit a parse tree produced by `lua_shParser.parlist`.
	 * @param ctx the parse tree
	 */
	exitParlist?: (ctx: ParlistContext) => void;

	/**
	 * Enter a parse tree produced by `lua_shParser.nempty_seplist_o_fieldsep_s_field_p_`.
	 * @param ctx the parse tree
	 */
	enterNempty_seplist_o_fieldsep_s_field_p_?: (ctx: Nempty_seplist_o_fieldsep_s_field_p_Context) => void;
	/**
	 * Exit a parse tree produced by `lua_shParser.nempty_seplist_o_fieldsep_s_field_p_`.
	 * @param ctx the parse tree
	 */
	exitNempty_seplist_o_fieldsep_s_field_p_?: (ctx: Nempty_seplist_o_fieldsep_s_field_p_Context) => void;

	/**
	 * Enter a parse tree produced by `lua_shParser.opt_o_fieldsep_p_`.
	 * @param ctx the parse tree
	 */
	enterOpt_o_fieldsep_p_?: (ctx: Opt_o_fieldsep_p_Context) => void;
	/**
	 * Exit a parse tree produced by `lua_shParser.opt_o_fieldsep_p_`.
	 * @param ctx the parse tree
	 */
	exitOpt_o_fieldsep_p_?: (ctx: Opt_o_fieldsep_p_Context) => void;

	/**
	 * Enter a parse tree produced by `lua_shParser.tableconstructor`.
	 * @param ctx the parse tree
	 */
	enterTableconstructor?: (ctx: TableconstructorContext) => void;
	/**
	 * Exit a parse tree produced by `lua_shParser.tableconstructor`.
	 * @param ctx the parse tree
	 */
	exitTableconstructor?: (ctx: TableconstructorContext) => void;

	/**
	 * Enter a parse tree produced by `lua_shParser.funcname`.
	 * @param ctx the parse tree
	 */
	enterFuncname?: (ctx: FuncnameContext) => void;
	/**
	 * Exit a parse tree produced by `lua_shParser.funcname`.
	 * @param ctx the parse tree
	 */
	exitFuncname?: (ctx: FuncnameContext) => void;

	/**
	 * Enter a parse tree produced by `lua_shParser.field`.
	 * @param ctx the parse tree
	 */
	enterField?: (ctx: FieldContext) => void;
	/**
	 * Exit a parse tree produced by `lua_shParser.field`.
	 * @param ctx the parse tree
	 */
	exitField?: (ctx: FieldContext) => void;

	/**
	 * Enter a parse tree produced by `lua_shParser.fieldsep`.
	 * @param ctx the parse tree
	 */
	enterFieldsep?: (ctx: FieldsepContext) => void;
	/**
	 * Exit a parse tree produced by `lua_shParser.fieldsep`.
	 * @param ctx the parse tree
	 */
	exitFieldsep?: (ctx: FieldsepContext) => void;

	/**
	 * Enter a parse tree produced by `lua_shParser.binop`.
	 * @param ctx the parse tree
	 */
	enterBinop?: (ctx: BinopContext) => void;
	/**
	 * Exit a parse tree produced by `lua_shParser.binop`.
	 * @param ctx the parse tree
	 */
	exitBinop?: (ctx: BinopContext) => void;
}


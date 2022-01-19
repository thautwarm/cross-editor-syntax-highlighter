// Generated from .\src\SH.g4 by ANTLR 4.9.0-SNAPSHOT


import { SH } from "./SH_require"


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { StartContext } from "./SHParser";
import { Start__y_Context } from "./SHParser";
import { OpContext } from "./SHParser";
import { VersionContext } from "./SHParser";
import { SpecifierContext } from "./SHParser";
import { Specifier_setContext } from "./SHParser";
import { CommentContext } from "./SHParser";
import { IdContext } from "./SHParser";
import { List_o_component_p_Context } from "./SHParser";
import { CompContext } from "./SHParser";
import { List_o_comment_p_Context } from "./SHParser";
import { ComponentContext } from "./SHParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `SHParser`.
 */
export interface SHListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `SHParser.start`.
	 * @param ctx the parse tree
	 */
	enterStart?: (ctx: StartContext) => void;
	/**
	 * Exit a parse tree produced by `SHParser.start`.
	 * @param ctx the parse tree
	 */
	exitStart?: (ctx: StartContext) => void;

	/**
	 * Enter a parse tree produced by `SHParser.start__y_`.
	 * @param ctx the parse tree
	 */
	enterStart__y_?: (ctx: Start__y_Context) => void;
	/**
	 * Exit a parse tree produced by `SHParser.start__y_`.
	 * @param ctx the parse tree
	 */
	exitStart__y_?: (ctx: Start__y_Context) => void;

	/**
	 * Enter a parse tree produced by `SHParser.op`.
	 * @param ctx the parse tree
	 */
	enterOp?: (ctx: OpContext) => void;
	/**
	 * Exit a parse tree produced by `SHParser.op`.
	 * @param ctx the parse tree
	 */
	exitOp?: (ctx: OpContext) => void;

	/**
	 * Enter a parse tree produced by `SHParser.version`.
	 * @param ctx the parse tree
	 */
	enterVersion?: (ctx: VersionContext) => void;
	/**
	 * Exit a parse tree produced by `SHParser.version`.
	 * @param ctx the parse tree
	 */
	exitVersion?: (ctx: VersionContext) => void;

	/**
	 * Enter a parse tree produced by `SHParser.specifier`.
	 * @param ctx the parse tree
	 */
	enterSpecifier?: (ctx: SpecifierContext) => void;
	/**
	 * Exit a parse tree produced by `SHParser.specifier`.
	 * @param ctx the parse tree
	 */
	exitSpecifier?: (ctx: SpecifierContext) => void;

	/**
	 * Enter a parse tree produced by `SHParser.specifier_set`.
	 * @param ctx the parse tree
	 */
	enterSpecifier_set?: (ctx: Specifier_setContext) => void;
	/**
	 * Exit a parse tree produced by `SHParser.specifier_set`.
	 * @param ctx the parse tree
	 */
	exitSpecifier_set?: (ctx: Specifier_setContext) => void;

	/**
	 * Enter a parse tree produced by `SHParser.comment`.
	 * @param ctx the parse tree
	 */
	enterComment?: (ctx: CommentContext) => void;
	/**
	 * Exit a parse tree produced by `SHParser.comment`.
	 * @param ctx the parse tree
	 */
	exitComment?: (ctx: CommentContext) => void;

	/**
	 * Enter a parse tree produced by `SHParser.id`.
	 * @param ctx the parse tree
	 */
	enterId?: (ctx: IdContext) => void;
	/**
	 * Exit a parse tree produced by `SHParser.id`.
	 * @param ctx the parse tree
	 */
	exitId?: (ctx: IdContext) => void;

	/**
	 * Enter a parse tree produced by `SHParser.list_o_component_p_`.
	 * @param ctx the parse tree
	 */
	enterList_o_component_p_?: (ctx: List_o_component_p_Context) => void;
	/**
	 * Exit a parse tree produced by `SHParser.list_o_component_p_`.
	 * @param ctx the parse tree
	 */
	exitList_o_component_p_?: (ctx: List_o_component_p_Context) => void;

	/**
	 * Enter a parse tree produced by `SHParser.comp`.
	 * @param ctx the parse tree
	 */
	enterComp?: (ctx: CompContext) => void;
	/**
	 * Exit a parse tree produced by `SHParser.comp`.
	 * @param ctx the parse tree
	 */
	exitComp?: (ctx: CompContext) => void;

	/**
	 * Enter a parse tree produced by `SHParser.list_o_comment_p_`.
	 * @param ctx the parse tree
	 */
	enterList_o_comment_p_?: (ctx: List_o_comment_p_Context) => void;
	/**
	 * Exit a parse tree produced by `SHParser.list_o_comment_p_`.
	 * @param ctx the parse tree
	 */
	exitList_o_comment_p_?: (ctx: List_o_comment_p_Context) => void;

	/**
	 * Enter a parse tree produced by `SHParser.component`.
	 * @param ctx the parse tree
	 */
	enterComponent?: (ctx: ComponentContext) => void;
	/**
	 * Exit a parse tree produced by `SHParser.component`.
	 * @param ctx the parse tree
	 */
	exitComponent?: (ctx: ComponentContext) => void;
}


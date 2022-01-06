// Generated from .\lua_sh.g4 by ANTLR 4.9.0-SNAPSHOT


import { isControl, isFuncDecl, isFuncCall, isUnaryOperator, isBinaryOperator, isNumber, isAttr, isVariable, isString, isLiteral, isKeyword } from "./lua_sh_require"


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { lua_shListener } from "./lua_shListener";

export class lua_shParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly T__36 = 37;
	public static readonly T__37 = 38;
	public static readonly T__38 = 39;
	public static readonly T__39 = 40;
	public static readonly T__40 = 41;
	public static readonly T__41 = 42;
	public static readonly T__42 = 43;
	public static readonly T__43 = 44;
	public static readonly T__44 = 45;
	public static readonly T__45 = 46;
	public static readonly T__46 = 47;
	public static readonly T__47 = 48;
	public static readonly T__48 = 49;
	public static readonly T__49 = 50;
	public static readonly T__50 = 51;
	public static readonly T__51 = 52;
	public static readonly T__52 = 53;
	public static readonly T__53 = 54;
	public static readonly T__54 = 55;
	public static readonly LINE_COMMENT = 56;
	public static readonly SPACE = 57;
	public static readonly NAME = 58;
	public static readonly NUMERAL = 59;
	public static readonly STR_LIT = 60;
	public static readonly NESTED_STR = 61;
	public static readonly RULE_start = 0;
	public static readonly RULE_start__y_ = 1;
	public static readonly RULE_nempty_list_o_stat_p_ = 2;
	public static readonly RULE_allow_empty_o_nempty_list_o_stat_p__p_ = 3;
	public static readonly RULE_list_o_stat_p_ = 4;
	public static readonly RULE_opt_o_retstat_p_ = 5;
	public static readonly RULE_block = 6;
	public static readonly RULE_retcolon = 7;
	public static readonly RULE_retstat = 8;
	public static readonly RULE_name = 9;
	public static readonly RULE_nempty_list_o_elseif_p_ = 10;
	public static readonly RULE_allow_empty_o_nempty_list_o_elseif_p__p_ = 11;
	public static readonly RULE_list_o_elseif_p_ = 12;
	public static readonly RULE_opt_o_else_p_ = 13;
	public static readonly RULE_nempty_seplist_o__i__s__i__s__i_name_k__p_ = 14;
	public static readonly RULE_stat = 15;
	public static readonly RULE_opt_assign_rhs = 16;
	public static readonly RULE_range = 17;
	public static readonly RULE_range_tail = 18;
	public static readonly RULE_elseif = 19;
	public static readonly RULE_else__x_ = 20;
	public static readonly RULE_exp = 21;
	public static readonly RULE_binexp = 22;
	public static readonly RULE_binseq = 23;
	public static readonly RULE_binoperand = 24;
	public static readonly RULE_unaryexp = 25;
	public static readonly RULE_exponent = 26;
	public static readonly RULE_prefixexp = 27;
	public static readonly RULE_atom = 28;
	public static readonly RULE_nempty_seplist_o__i__s__i__s_exp_p_ = 29;
	public static readonly RULE_allow_empty_o_nempty_seplist_o__i__s__i__s_exp_p__p_ = 30;
	public static readonly RULE_seplist_o__i__s__i__s_exp_p_ = 31;
	public static readonly RULE_args = 32;
	public static readonly RULE_opt_o_funcname_p_ = 33;
	public static readonly RULE_opt_o_parlist_p_ = 34;
	public static readonly RULE_functiondef = 35;
	public static readonly RULE_varargs = 36;
	public static readonly RULE_nempty_seplist_o__i__s__i__s_name_p_ = 37;
	public static readonly RULE_parlist = 38;
	public static readonly RULE_nempty_seplist_o_fieldsep_s_field_p_ = 39;
	public static readonly RULE_opt_o_fieldsep_p_ = 40;
	public static readonly RULE_tableconstructor = 41;
	public static readonly RULE_funcname = 42;
	public static readonly RULE_field = 43;
	public static readonly RULE_fieldsep = 44;
	public static readonly RULE_binop = 45;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"start", "start__y_", "nempty_list_o_stat_p_", "allow_empty_o_nempty_list_o_stat_p__p_", 
		"list_o_stat_p_", "opt_o_retstat_p_", "block", "retcolon", "retstat", 
		"name", "nempty_list_o_elseif_p_", "allow_empty_o_nempty_list_o_elseif_p__p_", 
		"list_o_elseif_p_", "opt_o_else_p_", "nempty_seplist_o__i__s__i__s__i_name_k__p_", 
		"stat", "opt_assign_rhs", "range", "range_tail", "elseif", "else__x_", 
		"exp", "binexp", "binseq", "binoperand", "unaryexp", "exponent", "prefixexp", 
		"atom", "nempty_seplist_o__i__s__i__s_exp_p_", "allow_empty_o_nempty_seplist_o__i__s__i__s_exp_p__p_", 
		"seplist_o__i__s__i__s_exp_p_", "args", "opt_o_funcname_p_", "opt_o_parlist_p_", 
		"functiondef", "varargs", "nempty_seplist_o__i__s__i__s_name_p_", "parlist", 
		"nempty_seplist_o_fieldsep_s_field_p_", "opt_o_fieldsep_p_", "tableconstructor", 
		"funcname", "field", "fieldsep", "binop",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "';'", "'return'", "','", "'='", "'::'", "'break'", "'goto'", 
		"'do'", "'end'", "'while'", "'repeat'", "'until'", "'if'", "'then'", "'for'", 
		"'in'", "'local'", "'function'", "'('", "')'", "'elseif'", "'else'", "'#'", 
		"'-'", "'~'", "'not'", "'^'", "':'", "'['", "']'", "'.'", "'nil'", "'false'", 
		"'true'", "'...'", "'{'", "'}'", "'or'", "'and'", "'<'", "'>'", "'<='", 
		"'>='", "'~='", "'=='", "'|'", "'&'", "'<<'", "'>>'", "'..'", "'+'", "'*'", 
		"'/'", "'//'", "'%'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"LINE_COMMENT", "SPACE", "NAME", "NUMERAL", "STR_LIT", "NESTED_STR",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(lua_shParser._LITERAL_NAMES, lua_shParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return lua_shParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "lua_sh.g4"; }

	// @Override
	public get ruleNames(): string[] { return lua_shParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return lua_shParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(lua_shParser._ATN, this);
	}
	// @RuleVersion(0)
	public start(): StartContext {
		let _localctx: StartContext = new StartContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, lua_shParser.RULE_start);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 92;
			_localctx._v = this.start__y_();
			this.state = 93;
			this.match(lua_shParser.EOF);
			 _localctx.result =  _localctx._v.result; 
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public start__y_(): Start__y_Context {
		let _localctx: Start__y_Context = new Start__y_Context(this._ctx, this.state);
		this.enterRule(_localctx, 2, lua_shParser.RULE_start__y_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 96;
			this.block();
			 
			                _localctx.result =  0;
			            
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public nempty_list_o_stat_p_(): Nempty_list_o_stat_p_Context;
	public nempty_list_o_stat_p_(_p: number): Nempty_list_o_stat_p_Context;
	// @RuleVersion(0)
	public nempty_list_o_stat_p_(_p?: number): Nempty_list_o_stat_p_Context {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Nempty_list_o_stat_p_Context = new Nempty_list_o_stat_p_Context(this._ctx, _parentState);
		let _prevctx: Nempty_list_o_stat_p_Context = _localctx;
		let _startState: number = 4;
		this.enterRecursionRule(_localctx, 4, lua_shParser.RULE_nempty_list_o_stat_p_, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 100;
			this.stat();
			 
			                _localctx.result =  0;
			            
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 109;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Nempty_list_o_stat_p_Context(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, lua_shParser.RULE_nempty_list_o_stat_p_);
					this.state = 103;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 104;
					this.stat();
					 
					                          _localctx.result =  0;
					                      
					}
					}
				}
				this.state = 111;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public allow_empty_o_nempty_list_o_stat_p__p_(): Allow_empty_o_nempty_list_o_stat_p__p_Context {
		let _localctx: Allow_empty_o_nempty_list_o_stat_p__p_Context = new Allow_empty_o_nempty_list_o_stat_p__p_Context(this._ctx, this.state);
		this.enterRule(_localctx, 6, lua_shParser.RULE_allow_empty_o_nempty_list_o_stat_p__p_);
		try {
			this.state = 116;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				 
				                _localctx.result =  0;
				            
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 113;
				this.nempty_list_o_stat_p_(0);
				 
				                _localctx.result =  0;
				            
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public list_o_stat_p_(): List_o_stat_p_Context {
		let _localctx: List_o_stat_p_Context = new List_o_stat_p_Context(this._ctx, this.state);
		this.enterRule(_localctx, 8, lua_shParser.RULE_list_o_stat_p_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 118;
			this.allow_empty_o_nempty_list_o_stat_p__p_();
			 
			                _localctx.result =  0;
			            
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public opt_o_retstat_p_(): Opt_o_retstat_p_Context {
		let _localctx: Opt_o_retstat_p_Context = new Opt_o_retstat_p_Context(this._ctx, this.state);
		this.enterRule(_localctx, 10, lua_shParser.RULE_opt_o_retstat_p_);
		try {
			this.state = 125;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 121;
				this.retstat();
				 
				                _localctx.result =  0;
				            
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				 
				                _localctx.result =  0;
				            
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, lua_shParser.RULE_block);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 127;
			this.list_o_stat_p_();
			this.state = 128;
			this.opt_o_retstat_p_();
			 
			                _localctx.result =  0;
			            
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public retcolon(): RetcolonContext {
		let _localctx: RetcolonContext = new RetcolonContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, lua_shParser.RULE_retcolon);
		try {
			this.state = 134;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 131;
				_localctx._retcolon_0__1 = this.match(lua_shParser.T__0);
				 
				                _localctx.result =  <number> isControl(<Token> _localctx._retcolon_0__1);
				            
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				 
				                _localctx.result =  0;
				            
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public retstat(): RetstatContext {
		let _localctx: RetstatContext = new RetstatContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, lua_shParser.RULE_retstat);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 136;
			_localctx._retstat_0__1 = this.match(lua_shParser.T__1);
			this.state = 137;
			this.seplist_o__i__s__i__s_exp_p_();
			this.state = 138;
			this.retcolon();
			 
			                _localctx.result =  <number> isKeyword(<Token> _localctx._retstat_0__1);
			            
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public name(): NameContext {
		let _localctx: NameContext = new NameContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, lua_shParser.RULE_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 141;
			_localctx._name_0__1 = this.match(lua_shParser.NAME);
			 
			                _localctx.result =  <number> isVariable(<Token> _localctx._name_0__1);
			            
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public nempty_list_o_elseif_p_(): Nempty_list_o_elseif_p_Context;
	public nempty_list_o_elseif_p_(_p: number): Nempty_list_o_elseif_p_Context;
	// @RuleVersion(0)
	public nempty_list_o_elseif_p_(_p?: number): Nempty_list_o_elseif_p_Context {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Nempty_list_o_elseif_p_Context = new Nempty_list_o_elseif_p_Context(this._ctx, _parentState);
		let _prevctx: Nempty_list_o_elseif_p_Context = _localctx;
		let _startState: number = 20;
		this.enterRecursionRule(_localctx, 20, lua_shParser.RULE_nempty_list_o_elseif_p_, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 145;
			this.elseif();
			 
			                _localctx.result =  0;
			            
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 154;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Nempty_list_o_elseif_p_Context(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, lua_shParser.RULE_nempty_list_o_elseif_p_);
					this.state = 148;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 149;
					this.elseif();
					 
					                          _localctx.result =  0;
					                      
					}
					}
				}
				this.state = 156;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public allow_empty_o_nempty_list_o_elseif_p__p_(): Allow_empty_o_nempty_list_o_elseif_p__p_Context {
		let _localctx: Allow_empty_o_nempty_list_o_elseif_p__p_Context = new Allow_empty_o_nempty_list_o_elseif_p__p_Context(this._ctx, this.state);
		this.enterRule(_localctx, 22, lua_shParser.RULE_allow_empty_o_nempty_list_o_elseif_p__p_);
		try {
			this.state = 161;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case lua_shParser.T__8:
			case lua_shParser.T__21:
				this.enterOuterAlt(_localctx, 1);
				{
				 
				                _localctx.result =  0;
				            
				}
				break;
			case lua_shParser.T__20:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 158;
				this.nempty_list_o_elseif_p_(0);
				 
				                _localctx.result =  0;
				            
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public list_o_elseif_p_(): List_o_elseif_p_Context {
		let _localctx: List_o_elseif_p_Context = new List_o_elseif_p_Context(this._ctx, this.state);
		this.enterRule(_localctx, 24, lua_shParser.RULE_list_o_elseif_p_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 163;
			this.allow_empty_o_nempty_list_o_elseif_p__p_();
			 
			                _localctx.result =  0;
			            
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public opt_o_else_p_(): Opt_o_else_p_Context {
		let _localctx: Opt_o_else_p_Context = new Opt_o_else_p_Context(this._ctx, this.state);
		this.enterRule(_localctx, 26, lua_shParser.RULE_opt_o_else_p_);
		try {
			this.state = 170;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case lua_shParser.T__21:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 166;
				this.else__x_();
				 
				                _localctx.result =  0;
				            
				}
				break;
			case lua_shParser.T__8:
				this.enterOuterAlt(_localctx, 2);
				{
				 
				                _localctx.result =  0;
				            
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public nempty_seplist_o__i__s__i__s__i_name_k__p_(): Nempty_seplist_o__i__s__i__s__i_name_k__p_Context;
	public nempty_seplist_o__i__s__i__s__i_name_k__p_(_p: number): Nempty_seplist_o__i__s__i__s__i_name_k__p_Context;
	// @RuleVersion(0)
	public nempty_seplist_o__i__s__i__s__i_name_k__p_(_p?: number): Nempty_seplist_o__i__s__i__s__i_name_k__p_Context {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Nempty_seplist_o__i__s__i__s__i_name_k__p_Context = new Nempty_seplist_o__i__s__i__s__i_name_k__p_Context(this._ctx, _parentState);
		let _prevctx: Nempty_seplist_o__i__s__i__s__i_name_k__p_Context = _localctx;
		let _startState: number = 28;
		this.enterRecursionRule(_localctx, 28, lua_shParser.RULE_nempty_seplist_o__i__s__i__s__i_name_k__p_, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 173;
			this.match(lua_shParser.NAME);
			 
			                _localctx.result =  0;
			            
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 182;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Nempty_seplist_o__i__s__i__s__i_name_k__p_Context(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, lua_shParser.RULE_nempty_seplist_o__i__s__i__s__i_name_k__p_);
					this.state = 176;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 177;
					this.match(lua_shParser.T__2);
					this.state = 178;
					this.match(lua_shParser.NAME);
					 
					                          _localctx.result =  0;
					                      
					}
					}
				}
				this.state = 184;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stat(): StatContext {
		let _localctx: StatContext = new StatContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, lua_shParser.RULE_stat);
		try {
			this.state = 264;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 185;
				this.match(lua_shParser.T__0);
				 
				                _localctx.result =  0;
				            
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 187;
				this.nempty_seplist_o__i__s__i__s_exp_p_(0);
				this.state = 188;
				this.match(lua_shParser.T__3);
				this.state = 189;
				this.nempty_seplist_o__i__s__i__s_exp_p_(0);
				 
				                _localctx.result =  0;
				            
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 192;
				this.exp();
				 
				                _localctx.result =  0;
				            
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 195;
				_localctx._stat_3__1 = this.match(lua_shParser.T__4);
				this.state = 196;
				this.match(lua_shParser.NAME);
				this.state = 197;
				_localctx._stat_3__3 = this.match(lua_shParser.T__4);
				 
				                let _ : number = <number> isControl(<Token> _localctx._stat_3__1);
				                _localctx.result =  <number> isControl(<Token> _localctx._stat_3__3);
				            
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 199;
				_localctx._stat_4__1 = this.match(lua_shParser.T__5);
				 
				                _localctx.result =  <number> isKeyword(<Token> _localctx._stat_4__1);
				            
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 201;
				_localctx._stat_5__1 = this.match(lua_shParser.T__6);
				this.state = 202;
				_localctx._stat_5__2 = this.match(lua_shParser.NAME);
				 
				                let ___98_ : number = <number> isKeyword(<Token> _localctx._stat_5__1);
				                _localctx.result =  <number> isControl(<Token> _localctx._stat_5__2);
				            
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 204;
				_localctx._stat_6__1 = this.match(lua_shParser.T__7);
				this.state = 205;
				this.block();
				this.state = 206;
				_localctx._stat_6__3 = this.match(lua_shParser.T__8);
				 
				                let ___98___103_ : number = <number> isKeyword(<Token> _localctx._stat_6__1);
				                _localctx.result =  <number> isKeyword(<Token> _localctx._stat_6__3);
				            
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 209;
				_localctx._stat_7__1 = this.match(lua_shParser.T__9);
				this.state = 210;
				this.exp();
				this.state = 211;
				_localctx._stat_7__3 = this.match(lua_shParser.T__7);
				this.state = 212;
				this.block();
				this.state = 213;
				_localctx._stat_7__5 = this.match(lua_shParser.T__8);
				 
				                let ___98___103___109_ : number = <number> isKeyword(<Token> _localctx._stat_7__1);
				                let ___98___103___109___115_ : number = <number> isKeyword(<Token> _localctx._stat_7__3);
				                _localctx.result =  <number> isKeyword(<Token> _localctx._stat_7__5);
				            
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 216;
				_localctx._stat_8__1 = this.match(lua_shParser.T__10);
				this.state = 217;
				this.block();
				this.state = 218;
				_localctx._stat_8__3 = this.match(lua_shParser.T__11);
				this.state = 219;
				this.exp();
				 
				                let ___98___103___109___115___121_ : number = <number> isKeyword(<Token> _localctx._stat_8__1);
				                _localctx.result =  <number> isKeyword(<Token> _localctx._stat_8__3);
				            
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 222;
				_localctx._stat_9__1 = this.match(lua_shParser.T__12);
				this.state = 223;
				this.exp();
				this.state = 224;
				_localctx._stat_9__3 = this.match(lua_shParser.T__13);
				this.state = 225;
				this.block();
				this.state = 226;
				this.list_o_elseif_p_();
				this.state = 227;
				this.opt_o_else_p_();
				this.state = 228;
				_localctx._stat_9__7 = this.match(lua_shParser.T__8);
				 
				                let ___98___103___109___115___121___101_ : number = <number> isKeyword(<Token> _localctx._stat_9__1);
				                let ___98___103___109___115___121___101___107_ : number = <number> isKeyword(<Token> _localctx._stat_9__3);
				                _localctx.result =  <number> isKeyword(<Token> _localctx._stat_9__7);
				            
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 231;
				_localctx._stat_10__1 = this.match(lua_shParser.T__14);
				this.state = 232;
				this.match(lua_shParser.NAME);
				this.state = 233;
				_localctx._stat_10__3 = this.match(lua_shParser.T__3);
				this.state = 234;
				this.range();
				this.state = 235;
				_localctx._stat_10__5 = this.match(lua_shParser.T__7);
				this.state = 236;
				this.block();
				this.state = 237;
				_localctx._stat_10__7 = this.match(lua_shParser.T__8);
				 
				                let ___98___103___109___115___121___101___107___113_ : number = <number> isKeyword(<Token> _localctx._stat_10__1);
				                let ___98___103___109___115___121___101___107___113___119_ : number = <number> isKeyword(<Token> _localctx._stat_10__3);
				                let ___98___103___109___115___121___101___107___113___119___99_ : number = <number> isKeyword(<Token> _localctx._stat_10__5);
				                _localctx.result =  <number> isKeyword(<Token> _localctx._stat_10__7);
				            
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 240;
				_localctx._stat_11__1 = this.match(lua_shParser.T__14);
				this.state = 241;
				this.nempty_seplist_o__i__s__i__s_name_p_(0);
				this.state = 242;
				_localctx._stat_11__3 = this.match(lua_shParser.T__15);
				this.state = 243;
				this.nempty_seplist_o__i__s__i__s_exp_p_(0);
				this.state = 244;
				_localctx._stat_11__5 = this.match(lua_shParser.T__7);
				this.state = 245;
				this.block();
				this.state = 246;
				_localctx._stat_11__7 = this.match(lua_shParser.T__8);
				 
				                let ___98___103___109___115___121___101___107___113___119___99___104_ : number = <number> isKeyword(<Token> _localctx._stat_11__1);
				                let ___98___103___109___115___121___101___107___113___119___99___104___110_ : number = <number> isKeyword(<Token> _localctx._stat_11__3);
				                let ___98___103___109___115___121___101___107___113___119___99___104___110___116_ : number = <number> isKeyword(<Token> _localctx._stat_11__5);
				                _localctx.result =  <number> isKeyword(<Token> _localctx._stat_11__7);
				            
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 249;
				_localctx._stat_12__1 = this.match(lua_shParser.T__16);
				this.state = 250;
				_localctx._stat_12__2 = this.match(lua_shParser.T__17);
				this.state = 251;
				this.funcname(0);
				this.state = 252;
				_localctx._stat_12__4 = this.match(lua_shParser.T__18);
				this.state = 253;
				this.opt_o_parlist_p_();
				this.state = 254;
				_localctx._stat_12__6 = this.match(lua_shParser.T__19);
				this.state = 255;
				this.block();
				this.state = 256;
				_localctx._stat_12__8 = this.match(lua_shParser.T__8);
				 
				                let ___98___103___109___115___121___101___107___113___119___99___104___110___116___122_ : number = <number> isKeyword(<Token> _localctx._stat_12__1);
				                let ___98___103___109___115___121___101___107___113___119___99___104___110___116___122___102_ : number = <number> isKeyword(<Token> _localctx._stat_12__2);
				                let ___98___103___109___115___121___101___107___113___119___99___104___110___116___122___102___108_ : number = <number> isKeyword(<Token> _localctx._stat_12__4);
				                let ___98___103___109___115___121___101___107___113___119___99___104___110___116___122___102___108___114_ : number = <number> isKeyword(<Token> _localctx._stat_12__6);
				                _localctx.result =  <number> isKeyword(<Token> _localctx._stat_12__8);
				            
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 259;
				_localctx._stat_13__1 = this.match(lua_shParser.T__16);
				this.state = 260;
				this.nempty_seplist_o__i__s__i__s__i_name_k__p_(0);
				this.state = 261;
				this.opt_assign_rhs();
				 
				                _localctx.result =  <number> isKeyword(<Token> _localctx._stat_13__1);
				            
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public opt_assign_rhs(): Opt_assign_rhsContext {
		let _localctx: Opt_assign_rhsContext = new Opt_assign_rhsContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, lua_shParser.RULE_opt_assign_rhs);
		try {
			this.state = 271;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 266;
				this.match(lua_shParser.T__3);
				this.state = 267;
				this.nempty_seplist_o__i__s__i__s_exp_p_(0);
				 
				                _localctx.result =  0;
				            
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				 
				                _localctx.result =  0;
				            
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public range(): RangeContext {
		let _localctx: RangeContext = new RangeContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, lua_shParser.RULE_range);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 273;
			this.exp();
			this.state = 274;
			this.match(lua_shParser.T__2);
			this.state = 275;
			this.exp();
			this.state = 276;
			this.range_tail();
			 
			                _localctx.result =  0;
			            
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public range_tail(): Range_tailContext {
		let _localctx: Range_tailContext = new Range_tailContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, lua_shParser.RULE_range_tail);
		try {
			this.state = 284;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case lua_shParser.T__2:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 279;
				this.match(lua_shParser.T__2);
				this.state = 280;
				this.exp();
				 
				                _localctx.result =  0;
				            
				}
				break;
			case lua_shParser.T__7:
				this.enterOuterAlt(_localctx, 2);
				{
				 
				                _localctx.result =  0;
				            
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elseif(): ElseifContext {
		let _localctx: ElseifContext = new ElseifContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, lua_shParser.RULE_elseif);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 286;
			_localctx._elseif_0__1 = this.match(lua_shParser.T__20);
			this.state = 287;
			this.exp();
			this.state = 288;
			_localctx._elseif_0__3 = this.match(lua_shParser.T__13);
			this.state = 289;
			this.block();
			 
			                let ___98___103___109___115___121___101___107___113___119___99___104___110___116___122___102___108___114___120_ : number = <number> isKeyword(<Token> _localctx._elseif_0__1);
			                _localctx.result =  <number> isKeyword(<Token> _localctx._elseif_0__3);
			            
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public else__x_(): Else__x_Context {
		let _localctx: Else__x_Context = new Else__x_Context(this._ctx, this.state);
		this.enterRule(_localctx, 40, lua_shParser.RULE_else__x_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 292;
			_localctx._else__x__0__1 = this.match(lua_shParser.T__21);
			this.state = 293;
			this.block();
			 
			                _localctx.result =  <number> isKeyword(<Token> _localctx._else__x__0__1);
			            
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exp(): ExpContext {
		let _localctx: ExpContext = new ExpContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, lua_shParser.RULE_exp);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 296;
			this.binexp();
			 
			                _localctx.result =  0;
			            
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public binexp(): BinexpContext {
		let _localctx: BinexpContext = new BinexpContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, lua_shParser.RULE_binexp);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 299;
			this.binseq(0);
			 
			                _localctx.result =  0;
			            
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public binseq(): BinseqContext;
	public binseq(_p: number): BinseqContext;
	// @RuleVersion(0)
	public binseq(_p?: number): BinseqContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: BinseqContext = new BinseqContext(this._ctx, _parentState);
		let _prevctx: BinseqContext = _localctx;
		let _startState: number = 46;
		this.enterRecursionRule(_localctx, 46, lua_shParser.RULE_binseq, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 303;
			this.binoperand();
			 
			                _localctx.result =  0;
			            
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 313;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new BinseqContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, lua_shParser.RULE_binseq);
					this.state = 306;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 307;
					this.binop();
					this.state = 308;
					this.binoperand();
					 
					                          _localctx.result =  0;
					                      
					}
					}
				}
				this.state = 315;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public binoperand(): BinoperandContext {
		let _localctx: BinoperandContext = new BinoperandContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, lua_shParser.RULE_binoperand);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 316;
			this.unaryexp();
			 
			                _localctx.result =  0;
			            
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unaryexp(): UnaryexpContext {
		let _localctx: UnaryexpContext = new UnaryexpContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, lua_shParser.RULE_unaryexp);
		try {
			this.state = 338;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case lua_shParser.T__22:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 319;
				_localctx._unaryexp_0__1 = this.match(lua_shParser.T__22);
				this.state = 320;
				this.exponent();
				 
				                _localctx.result =  <number> isUnaryOperator(<Token> _localctx._unaryexp_0__1);
				            
				}
				break;
			case lua_shParser.T__23:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 323;
				_localctx._unaryexp_1__1 = this.match(lua_shParser.T__23);
				this.state = 324;
				this.exponent();
				 
				                _localctx.result =  <number> isUnaryOperator(<Token> _localctx._unaryexp_1__1);
				            
				}
				break;
			case lua_shParser.T__24:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 327;
				_localctx._unaryexp_2__1 = this.match(lua_shParser.T__24);
				this.state = 328;
				this.exponent();
				 
				                _localctx.result =  <number> isUnaryOperator(<Token> _localctx._unaryexp_2__1);
				            
				}
				break;
			case lua_shParser.T__25:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 331;
				_localctx._unaryexp_3__1 = this.match(lua_shParser.T__25);
				this.state = 332;
				this.exponent();
				 
				                _localctx.result =  <number> isUnaryOperator(<Token> _localctx._unaryexp_3__1);
				            
				}
				break;
			case lua_shParser.T__17:
			case lua_shParser.T__18:
			case lua_shParser.T__31:
			case lua_shParser.T__32:
			case lua_shParser.T__33:
			case lua_shParser.T__34:
			case lua_shParser.T__35:
			case lua_shParser.NAME:
			case lua_shParser.NUMERAL:
			case lua_shParser.STR_LIT:
			case lua_shParser.NESTED_STR:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 335;
				this.exponent();
				 
				                _localctx.result =  0;
				            
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exponent(): ExponentContext {
		let _localctx: ExponentContext = new ExponentContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, lua_shParser.RULE_exponent);
		try {
			this.state = 348;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 340;
				this.prefixexp(0);
				this.state = 341;
				_localctx._exponent_0__2 = this.match(lua_shParser.T__26);
				this.state = 342;
				this.exponent();
				 
				                _localctx.result =  <number> isBinaryOperator(<Token> _localctx._exponent_0__2);
				            
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 345;
				this.prefixexp(0);
				 
				                _localctx.result =  0;
				            
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public prefixexp(): PrefixexpContext;
	public prefixexp(_p: number): PrefixexpContext;
	// @RuleVersion(0)
	public prefixexp(_p?: number): PrefixexpContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: PrefixexpContext = new PrefixexpContext(this._ctx, _parentState);
		let _prevctx: PrefixexpContext = _localctx;
		let _startState: number = 54;
		this.enterRecursionRule(_localctx, 54, lua_shParser.RULE_prefixexp, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 361;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case lua_shParser.NAME:
				{
				this.state = 351;
				_localctx._prefixexp_0__1 = this.match(lua_shParser.NAME);
				 
				                _localctx.result =  <number> isVariable(<Token> _localctx._prefixexp_0__1);
				            
				}
				break;
			case lua_shParser.T__18:
				{
				this.state = 353;
				this.match(lua_shParser.T__18);
				this.state = 354;
				this.exp();
				this.state = 355;
				this.match(lua_shParser.T__19);
				 
				                _localctx.result =  0;
				            
				}
				break;
			case lua_shParser.T__17:
			case lua_shParser.T__31:
			case lua_shParser.T__32:
			case lua_shParser.T__33:
			case lua_shParser.T__34:
			case lua_shParser.T__35:
			case lua_shParser.NUMERAL:
			case lua_shParser.STR_LIT:
			case lua_shParser.NESTED_STR:
				{
				this.state = 358;
				this.atom();
				 
				                _localctx.result =  0;
				            
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 385;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 383;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
					case 1:
						{
						_localctx = new PrefixexpContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, lua_shParser.RULE_prefixexp);
						this.state = 363;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 364;
						this.args();
						 
						                          _localctx.result =  0;
						                      
						}
						break;

					case 2:
						{
						_localctx = new PrefixexpContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, lua_shParser.RULE_prefixexp);
						this.state = 367;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 368;
						this.match(lua_shParser.T__27);
						this.state = 369;
						_localctx._prefixexp_3__3 = this.match(lua_shParser.NAME);
						this.state = 370;
						this.args();
						 
						                          _localctx.result =  <number> isAttr(<Token> _localctx._prefixexp_3__3);
						                      
						}
						break;

					case 3:
						{
						_localctx = new PrefixexpContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, lua_shParser.RULE_prefixexp);
						this.state = 373;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 374;
						this.match(lua_shParser.T__28);
						this.state = 375;
						this.exp();
						this.state = 376;
						this.match(lua_shParser.T__29);
						 
						                          _localctx.result =  0;
						                      
						}
						break;

					case 4:
						{
						_localctx = new PrefixexpContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, lua_shParser.RULE_prefixexp);
						this.state = 379;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 380;
						this.match(lua_shParser.T__30);
						this.state = 381;
						_localctx._prefixexp_5__3 = this.match(lua_shParser.NAME);
						 
						                          _localctx.result =  <number> isAttr(<Token> _localctx._prefixexp_5__3);
						                      
						}
						break;
					}
					}
				}
				this.state = 387;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public atom(): AtomContext {
		let _localctx: AtomContext = new AtomContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, lua_shParser.RULE_atom);
		try {
			this.state = 408;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case lua_shParser.T__31:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 388;
				_localctx._atom_0__1 = this.match(lua_shParser.T__31);
				 
				                _localctx.result =  <number> isLiteral(<Token> _localctx._atom_0__1);
				            
				}
				break;
			case lua_shParser.T__32:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 390;
				_localctx._atom_1__1 = this.match(lua_shParser.T__32);
				 
				                _localctx.result =  <number> isLiteral(<Token> _localctx._atom_1__1);
				            
				}
				break;
			case lua_shParser.T__33:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 392;
				_localctx._atom_2__1 = this.match(lua_shParser.T__33);
				 
				                _localctx.result =  <number> isLiteral(<Token> _localctx._atom_2__1);
				            
				}
				break;
			case lua_shParser.NUMERAL:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 394;
				_localctx._atom_3__1 = this.match(lua_shParser.NUMERAL);
				 
				                _localctx.result =  <number> isNumber(<Token> _localctx._atom_3__1);
				            
				}
				break;
			case lua_shParser.STR_LIT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 396;
				_localctx._atom_4__1 = this.match(lua_shParser.STR_LIT);
				 
				                _localctx.result =  <number> isString(<Token> _localctx._atom_4__1);
				            
				}
				break;
			case lua_shParser.NESTED_STR:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 398;
				_localctx._atom_5__1 = this.match(lua_shParser.NESTED_STR);
				 
				                _localctx.result =  <number> isString(<Token> _localctx._atom_5__1);
				            
				}
				break;
			case lua_shParser.T__34:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 400;
				_localctx._atom_6__1 = this.match(lua_shParser.T__34);
				 
				                _localctx.result =  <number> isControl(<Token> _localctx._atom_6__1);
				            
				}
				break;
			case lua_shParser.T__17:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 402;
				this.functiondef();
				 
				                _localctx.result =  0;
				            
				}
				break;
			case lua_shParser.T__35:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 405;
				this.tableconstructor();
				 
				                _localctx.result =  0;
				            
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public nempty_seplist_o__i__s__i__s_exp_p_(): Nempty_seplist_o__i__s__i__s_exp_p_Context;
	public nempty_seplist_o__i__s__i__s_exp_p_(_p: number): Nempty_seplist_o__i__s__i__s_exp_p_Context;
	// @RuleVersion(0)
	public nempty_seplist_o__i__s__i__s_exp_p_(_p?: number): Nempty_seplist_o__i__s__i__s_exp_p_Context {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Nempty_seplist_o__i__s__i__s_exp_p_Context = new Nempty_seplist_o__i__s__i__s_exp_p_Context(this._ctx, _parentState);
		let _prevctx: Nempty_seplist_o__i__s__i__s_exp_p_Context = _localctx;
		let _startState: number = 58;
		this.enterRecursionRule(_localctx, 58, lua_shParser.RULE_nempty_seplist_o__i__s__i__s_exp_p_, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 411;
			this.exp();
			 
			                _localctx.result =  0;
			            
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 421;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Nempty_seplist_o__i__s__i__s_exp_p_Context(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, lua_shParser.RULE_nempty_seplist_o__i__s__i__s_exp_p_);
					this.state = 414;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 415;
					this.match(lua_shParser.T__2);
					this.state = 416;
					this.exp();
					 
					                          _localctx.result =  0;
					                      
					}
					}
				}
				this.state = 423;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public allow_empty_o_nempty_seplist_o__i__s__i__s_exp_p__p_(): Allow_empty_o_nempty_seplist_o__i__s__i__s_exp_p__p_Context {
		let _localctx: Allow_empty_o_nempty_seplist_o__i__s__i__s_exp_p__p_Context = new Allow_empty_o_nempty_seplist_o__i__s__i__s_exp_p__p_Context(this._ctx, this.state);
		this.enterRule(_localctx, 60, lua_shParser.RULE_allow_empty_o_nempty_seplist_o__i__s__i__s_exp_p__p_);
		try {
			this.state = 428;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				 
				                _localctx.result =  0;
				            
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 425;
				this.nempty_seplist_o__i__s__i__s_exp_p_(0);
				 
				                _localctx.result =  0;
				            
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public seplist_o__i__s__i__s_exp_p_(): Seplist_o__i__s__i__s_exp_p_Context {
		let _localctx: Seplist_o__i__s__i__s_exp_p_Context = new Seplist_o__i__s__i__s_exp_p_Context(this._ctx, this.state);
		this.enterRule(_localctx, 62, lua_shParser.RULE_seplist_o__i__s__i__s_exp_p_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 430;
			this.allow_empty_o_nempty_seplist_o__i__s__i__s_exp_p__p_();
			 
			                _localctx.result =  0;
			            
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public args(): ArgsContext {
		let _localctx: ArgsContext = new ArgsContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, lua_shParser.RULE_args);
		try {
			this.state = 443;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case lua_shParser.T__18:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 433;
				_localctx._args_0__1 = this.match(lua_shParser.T__18);
				this.state = 434;
				this.seplist_o__i__s__i__s_exp_p_();
				this.state = 435;
				_localctx._args_0__3 = this.match(lua_shParser.T__19);
				 
				                let ___98___103___109___115___121___101___107___113___119___99___104___110___116___122___102___108___114___120___100_ : number = <number> isFuncCall(<Token> _localctx._args_0__1);
				                _localctx.result =  <number> isFuncCall(<Token> _localctx._args_0__3);
				            
				}
				break;
			case lua_shParser.T__35:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 438;
				this.tableconstructor();
				 
				                _localctx.result =  0;
				            
				}
				break;
			case lua_shParser.STR_LIT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 441;
				_localctx._args_2__1 = this.match(lua_shParser.STR_LIT);
				 
				                _localctx.result =  <number> isString(<Token> _localctx._args_2__1);
				            
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public opt_o_funcname_p_(): Opt_o_funcname_p_Context {
		let _localctx: Opt_o_funcname_p_Context = new Opt_o_funcname_p_Context(this._ctx, this.state);
		this.enterRule(_localctx, 66, lua_shParser.RULE_opt_o_funcname_p_);
		try {
			this.state = 449;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case lua_shParser.NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 445;
				this.funcname(0);
				 
				                _localctx.result =  0;
				            
				}
				break;
			case lua_shParser.T__18:
				this.enterOuterAlt(_localctx, 2);
				{
				 
				                _localctx.result =  0;
				            
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public opt_o_parlist_p_(): Opt_o_parlist_p_Context {
		let _localctx: Opt_o_parlist_p_Context = new Opt_o_parlist_p_Context(this._ctx, this.state);
		this.enterRule(_localctx, 68, lua_shParser.RULE_opt_o_parlist_p_);
		try {
			this.state = 455;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case lua_shParser.T__34:
			case lua_shParser.NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 451;
				this.parlist();
				 
				                _localctx.result =  0;
				            
				}
				break;
			case lua_shParser.T__19:
				this.enterOuterAlt(_localctx, 2);
				{
				 
				                _localctx.result =  0;
				            
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functiondef(): FunctiondefContext {
		let _localctx: FunctiondefContext = new FunctiondefContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, lua_shParser.RULE_functiondef);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 457;
			_localctx._functiondef_0__1 = this.match(lua_shParser.T__17);
			this.state = 458;
			this.opt_o_funcname_p_();
			this.state = 459;
			_localctx._functiondef_0__3 = this.match(lua_shParser.T__18);
			this.state = 460;
			this.opt_o_parlist_p_();
			this.state = 461;
			_localctx._functiondef_0__5 = this.match(lua_shParser.T__19);
			this.state = 462;
			this.block();
			this.state = 463;
			_localctx._functiondef_0__7 = this.match(lua_shParser.T__8);
			 
			                let ___98___103___109___115___121___101___107___113___119___99___104___110___116___122___102___108___114___120___100___106_ : number = <number> isKeyword(<Token> _localctx._functiondef_0__1);
			                let ___98___103___109___115___121___101___107___113___119___99___104___110___116___122___102___108___114___120___100___106___112_ : number = <number> isKeyword(<Token> _localctx._functiondef_0__7);
			                let ___98___103___109___115___121___101___107___113___119___99___104___110___116___122___102___108___114___120___100___106___112___118_ : number = <number> isFuncDecl(<Token> _localctx._functiondef_0__3);
			                _localctx.result =  <number> isFuncDecl(<Token> _localctx._functiondef_0__5);
			            
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public varargs(): VarargsContext {
		let _localctx: VarargsContext = new VarargsContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, lua_shParser.RULE_varargs);
		try {
			this.state = 470;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case lua_shParser.T__2:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 466;
				this.match(lua_shParser.T__2);
				this.state = 467;
				_localctx._varargs_0__2 = this.match(lua_shParser.T__34);
				 
				                _localctx.result =  <number> isControl(<Token> _localctx._varargs_0__2);
				            
				}
				break;
			case lua_shParser.T__19:
				this.enterOuterAlt(_localctx, 2);
				{
				 
				                _localctx.result =  0;
				            
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public nempty_seplist_o__i__s__i__s_name_p_(): Nempty_seplist_o__i__s__i__s_name_p_Context;
	public nempty_seplist_o__i__s__i__s_name_p_(_p: number): Nempty_seplist_o__i__s__i__s_name_p_Context;
	// @RuleVersion(0)
	public nempty_seplist_o__i__s__i__s_name_p_(_p?: number): Nempty_seplist_o__i__s__i__s_name_p_Context {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Nempty_seplist_o__i__s__i__s_name_p_Context = new Nempty_seplist_o__i__s__i__s_name_p_Context(this._ctx, _parentState);
		let _prevctx: Nempty_seplist_o__i__s__i__s_name_p_Context = _localctx;
		let _startState: number = 74;
		this.enterRecursionRule(_localctx, 74, lua_shParser.RULE_nempty_seplist_o__i__s__i__s_name_p_, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 473;
			this.name();
			 
			                _localctx.result =  0;
			            
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 483;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Nempty_seplist_o__i__s__i__s_name_p_Context(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, lua_shParser.RULE_nempty_seplist_o__i__s__i__s_name_p_);
					this.state = 476;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 477;
					this.match(lua_shParser.T__2);
					this.state = 478;
					this.name();
					 
					                          _localctx.result =  0;
					                      
					}
					}
				}
				this.state = 485;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parlist(): ParlistContext {
		let _localctx: ParlistContext = new ParlistContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, lua_shParser.RULE_parlist);
		try {
			this.state = 492;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case lua_shParser.T__34:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 486;
				this.match(lua_shParser.T__34);
				 
				                _localctx.result =  0;
				            
				}
				break;
			case lua_shParser.NAME:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 488;
				this.nempty_seplist_o__i__s__i__s_name_p_(0);
				this.state = 489;
				this.varargs();
				 
				                _localctx.result =  0;
				            
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public nempty_seplist_o_fieldsep_s_field_p_(): Nempty_seplist_o_fieldsep_s_field_p_Context;
	public nempty_seplist_o_fieldsep_s_field_p_(_p: number): Nempty_seplist_o_fieldsep_s_field_p_Context;
	// @RuleVersion(0)
	public nempty_seplist_o_fieldsep_s_field_p_(_p?: number): Nempty_seplist_o_fieldsep_s_field_p_Context {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Nempty_seplist_o_fieldsep_s_field_p_Context = new Nempty_seplist_o_fieldsep_s_field_p_Context(this._ctx, _parentState);
		let _prevctx: Nempty_seplist_o_fieldsep_s_field_p_Context = _localctx;
		let _startState: number = 78;
		this.enterRecursionRule(_localctx, 78, lua_shParser.RULE_nempty_seplist_o_fieldsep_s_field_p_, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 495;
			this.field();
			 
			                _localctx.result =  0;
			            
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 505;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Nempty_seplist_o_fieldsep_s_field_p_Context(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, lua_shParser.RULE_nempty_seplist_o_fieldsep_s_field_p_);
					this.state = 498;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 499;
					this.fieldsep();
					this.state = 500;
					this.field();
					 
					                          _localctx.result =  0;
					                      
					}
					}
				}
				this.state = 507;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public opt_o_fieldsep_p_(): Opt_o_fieldsep_p_Context {
		let _localctx: Opt_o_fieldsep_p_Context = new Opt_o_fieldsep_p_Context(this._ctx, this.state);
		this.enterRule(_localctx, 80, lua_shParser.RULE_opt_o_fieldsep_p_);
		try {
			this.state = 512;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case lua_shParser.T__0:
			case lua_shParser.T__2:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 508;
				this.fieldsep();
				 
				                _localctx.result =  0;
				            
				}
				break;
			case lua_shParser.T__36:
				this.enterOuterAlt(_localctx, 2);
				{
				 
				                _localctx.result =  0;
				            
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tableconstructor(): TableconstructorContext {
		let _localctx: TableconstructorContext = new TableconstructorContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, lua_shParser.RULE_tableconstructor);
		try {
			this.state = 523;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 514;
				this.match(lua_shParser.T__35);
				this.state = 515;
				this.nempty_seplist_o_fieldsep_s_field_p_(0);
				this.state = 516;
				this.opt_o_fieldsep_p_();
				this.state = 517;
				this.match(lua_shParser.T__36);
				 
				                _localctx.result =  0;
				            
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 520;
				this.match(lua_shParser.T__35);
				this.state = 521;
				this.match(lua_shParser.T__36);
				 
				                _localctx.result =  0;
				            
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public funcname(): FuncnameContext;
	public funcname(_p: number): FuncnameContext;
	// @RuleVersion(0)
	public funcname(_p?: number): FuncnameContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: FuncnameContext = new FuncnameContext(this._ctx, _parentState);
		let _prevctx: FuncnameContext = _localctx;
		let _startState: number = 84;
		this.enterRecursionRule(_localctx, 84, lua_shParser.RULE_funcname, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 526;
			_localctx._funcname_2__1 = this.match(lua_shParser.NAME);
			 
			                _localctx.result =  <number> isVariable(<Token> _localctx._funcname_2__1);
			            
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 539;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 537;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
					case 1:
						{
						_localctx = new FuncnameContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, lua_shParser.RULE_funcname);
						this.state = 529;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 530;
						this.match(lua_shParser.T__30);
						this.state = 531;
						_localctx._funcname_0__3 = this.match(lua_shParser.NAME);
						 
						                          _localctx.result =  <number> isAttr(<Token> _localctx._funcname_0__3);
						                      
						}
						break;

					case 2:
						{
						_localctx = new FuncnameContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, lua_shParser.RULE_funcname);
						this.state = 533;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 534;
						this.match(lua_shParser.T__27);
						this.state = 535;
						_localctx._funcname_1__3 = this.match(lua_shParser.NAME);
						 
						                          _localctx.result =  <number> isAttr(<Token> _localctx._funcname_1__3);
						                      
						}
						break;
					}
					}
				}
				this.state = 541;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public field(): FieldContext {
		let _localctx: FieldContext = new FieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, lua_shParser.RULE_field);
		try {
			this.state = 557;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 542;
				this.match(lua_shParser.T__28);
				this.state = 543;
				this.exp();
				this.state = 544;
				this.match(lua_shParser.T__29);
				this.state = 545;
				this.match(lua_shParser.T__3);
				this.state = 546;
				this.exp();
				 
				                _localctx.result =  0;
				            
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 549;
				_localctx._field_1__1 = this.match(lua_shParser.NAME);
				this.state = 550;
				this.match(lua_shParser.T__3);
				this.state = 551;
				this.exp();
				 
				                _localctx.result =  <number> isAttr(<Token> _localctx._field_1__1);
				            
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 554;
				this.exp();
				 
				                _localctx.result =  0;
				            
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldsep(): FieldsepContext {
		let _localctx: FieldsepContext = new FieldsepContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, lua_shParser.RULE_fieldsep);
		try {
			this.state = 563;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case lua_shParser.T__2:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 559;
				this.match(lua_shParser.T__2);
				 
				                _localctx.result =  0;
				            
				}
				break;
			case lua_shParser.T__0:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 561;
				this.match(lua_shParser.T__0);
				 
				                _localctx.result =  0;
				            
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public binop(): BinopContext {
		let _localctx: BinopContext = new BinopContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, lua_shParser.RULE_binop);
		try {
			this.state = 605;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case lua_shParser.T__37:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 565;
				_localctx._binop_0__1 = this.match(lua_shParser.T__37);
				 
				                _localctx.result =  <number> isBinaryOperator(<Token> _localctx._binop_0__1);
				            
				}
				break;
			case lua_shParser.T__38:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 567;
				_localctx._binop_1__1 = this.match(lua_shParser.T__38);
				 
				                _localctx.result =  <number> isBinaryOperator(<Token> _localctx._binop_1__1);
				            
				}
				break;
			case lua_shParser.T__39:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 569;
				_localctx._binop_2__1 = this.match(lua_shParser.T__39);
				 
				                _localctx.result =  <number> isBinaryOperator(<Token> _localctx._binop_2__1);
				            
				}
				break;
			case lua_shParser.T__40:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 571;
				_localctx._binop_3__1 = this.match(lua_shParser.T__40);
				 
				                _localctx.result =  <number> isBinaryOperator(<Token> _localctx._binop_3__1);
				            
				}
				break;
			case lua_shParser.T__41:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 573;
				_localctx._binop_4__1 = this.match(lua_shParser.T__41);
				 
				                _localctx.result =  <number> isBinaryOperator(<Token> _localctx._binop_4__1);
				            
				}
				break;
			case lua_shParser.T__42:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 575;
				_localctx._binop_5__1 = this.match(lua_shParser.T__42);
				 
				                _localctx.result =  <number> isBinaryOperator(<Token> _localctx._binop_5__1);
				            
				}
				break;
			case lua_shParser.T__43:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 577;
				_localctx._binop_6__1 = this.match(lua_shParser.T__43);
				 
				                _localctx.result =  <number> isBinaryOperator(<Token> _localctx._binop_6__1);
				            
				}
				break;
			case lua_shParser.T__44:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 579;
				_localctx._binop_7__1 = this.match(lua_shParser.T__44);
				 
				                _localctx.result =  <number> isBinaryOperator(<Token> _localctx._binop_7__1);
				            
				}
				break;
			case lua_shParser.T__45:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 581;
				_localctx._binop_8__1 = this.match(lua_shParser.T__45);
				 
				                _localctx.result =  <number> isBinaryOperator(<Token> _localctx._binop_8__1);
				            
				}
				break;
			case lua_shParser.T__24:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 583;
				_localctx._binop_9__1 = this.match(lua_shParser.T__24);
				 
				                _localctx.result =  <number> isBinaryOperator(<Token> _localctx._binop_9__1);
				            
				}
				break;
			case lua_shParser.T__46:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 585;
				_localctx._binop_10__1 = this.match(lua_shParser.T__46);
				 
				                _localctx.result =  <number> isBinaryOperator(<Token> _localctx._binop_10__1);
				            
				}
				break;
			case lua_shParser.T__47:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 587;
				_localctx._binop_11__1 = this.match(lua_shParser.T__47);
				 
				                _localctx.result =  <number> isBinaryOperator(<Token> _localctx._binop_11__1);
				            
				}
				break;
			case lua_shParser.T__48:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 589;
				_localctx._binop_12__1 = this.match(lua_shParser.T__48);
				 
				                _localctx.result =  <number> isBinaryOperator(<Token> _localctx._binop_12__1);
				            
				}
				break;
			case lua_shParser.T__49:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 591;
				_localctx._binop_13__1 = this.match(lua_shParser.T__49);
				 
				                _localctx.result =  <number> isBinaryOperator(<Token> _localctx._binop_13__1);
				            
				}
				break;
			case lua_shParser.T__50:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 593;
				_localctx._binop_14__1 = this.match(lua_shParser.T__50);
				 
				                _localctx.result =  <number> isBinaryOperator(<Token> _localctx._binop_14__1);
				            
				}
				break;
			case lua_shParser.T__23:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 595;
				_localctx._binop_15__1 = this.match(lua_shParser.T__23);
				 
				                _localctx.result =  <number> isBinaryOperator(<Token> _localctx._binop_15__1);
				            
				}
				break;
			case lua_shParser.T__51:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 597;
				_localctx._binop_16__1 = this.match(lua_shParser.T__51);
				 
				                _localctx.result =  <number> isBinaryOperator(<Token> _localctx._binop_16__1);
				            
				}
				break;
			case lua_shParser.T__52:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 599;
				_localctx._binop_17__1 = this.match(lua_shParser.T__52);
				 
				                _localctx.result =  <number> isBinaryOperator(<Token> _localctx._binop_17__1);
				            
				}
				break;
			case lua_shParser.T__53:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 601;
				_localctx._binop_18__1 = this.match(lua_shParser.T__53);
				 
				                _localctx.result =  <number> isBinaryOperator(<Token> _localctx._binop_18__1);
				            
				}
				break;
			case lua_shParser.T__54:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 603;
				_localctx._binop_19__1 = this.match(lua_shParser.T__54);
				 
				                _localctx.result =  <number> isBinaryOperator(<Token> _localctx._binop_19__1);
				            
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 2:
			return this.nempty_list_o_stat_p__sempred(_localctx as Nempty_list_o_stat_p_Context, predIndex);

		case 10:
			return this.nempty_list_o_elseif_p__sempred(_localctx as Nempty_list_o_elseif_p_Context, predIndex);

		case 14:
			return this.nempty_seplist_o__i__s__i__s__i_name_k__p__sempred(_localctx as Nempty_seplist_o__i__s__i__s__i_name_k__p_Context, predIndex);

		case 23:
			return this.binseq_sempred(_localctx as BinseqContext, predIndex);

		case 27:
			return this.prefixexp_sempred(_localctx as PrefixexpContext, predIndex);

		case 29:
			return this.nempty_seplist_o__i__s__i__s_exp_p__sempred(_localctx as Nempty_seplist_o__i__s__i__s_exp_p_Context, predIndex);

		case 37:
			return this.nempty_seplist_o__i__s__i__s_name_p__sempred(_localctx as Nempty_seplist_o__i__s__i__s_name_p_Context, predIndex);

		case 39:
			return this.nempty_seplist_o_fieldsep_s_field_p__sempred(_localctx as Nempty_seplist_o_fieldsep_s_field_p_Context, predIndex);

		case 42:
			return this.funcname_sempred(_localctx as FuncnameContext, predIndex);
		}
		return true;
	}
	private nempty_list_o_stat_p__sempred(_localctx: Nempty_list_o_stat_p_Context, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private nempty_list_o_elseif_p__sempred(_localctx: Nempty_list_o_elseif_p_Context, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private nempty_seplist_o__i__s__i__s__i_name_k__p__sempred(_localctx: Nempty_seplist_o__i__s__i__s__i_name_k__p_Context, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private binseq_sempred(_localctx: BinseqContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private prefixexp_sempred(_localctx: PrefixexpContext, predIndex: number): boolean {
		switch (predIndex) {
		case 4:
			return this.precpred(this._ctx, 5);

		case 5:
			return this.precpred(this._ctx, 4);

		case 6:
			return this.precpred(this._ctx, 3);

		case 7:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private nempty_seplist_o__i__s__i__s_exp_p__sempred(_localctx: Nempty_seplist_o__i__s__i__s_exp_p_Context, predIndex: number): boolean {
		switch (predIndex) {
		case 8:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private nempty_seplist_o__i__s__i__s_name_p__sempred(_localctx: Nempty_seplist_o__i__s__i__s_name_p_Context, predIndex: number): boolean {
		switch (predIndex) {
		case 9:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private nempty_seplist_o_fieldsep_s_field_p__sempred(_localctx: Nempty_seplist_o_fieldsep_s_field_p_Context, predIndex: number): boolean {
		switch (predIndex) {
		case 10:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private funcname_sempred(_localctx: FuncnameContext, predIndex: number): boolean {
		switch (predIndex) {
		case 11:
			return this.precpred(this._ctx, 3);

		case 12:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03?\u0262\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03" +
		"\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x07\x04n\n\x04\f\x04\x0E\x04q\v\x04\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x05\x05w\n\x05\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x05\x07\x80\n\x07\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x05\t" +
		"\x89\n\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x07\f\x9B\n\f\f\f\x0E\f\x9E\v\f\x03\r" +
		"\x03\r\x03\r\x03\r\x05\r\xA4\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x05\x0F\xAD\n\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x07\x10\xB7\n\x10\f\x10\x0E\x10\xBA\v\x10" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\u010B" +
		"\n\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u0112\n\x12\x03" +
		"\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03" +
		"\x14\x03\x14\x05\x14\u011F\n\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x18" +
		"\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19" +
		"\x03\x19\x03\x19\x07\x19\u013A\n\x19\f\x19\x0E\x19\u013D\v\x19\x03\x1A" +
		"\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B" +
		"\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B" +
		"\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u0155\n\x1B\x03\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u015F\n\x1C\x03\x1D\x03\x1D" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
		"\x05\x1D\u016C\n\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03" +
		"\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03" +
		"\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x07\x1D\u0182\n\x1D\f\x1D\x0E\x1D" +
		"\u0185\v\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03" +
		"\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03" +
		"\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u019B\n\x1E\x03\x1F\x03\x1F\x03\x1F" +
		"\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x07\x1F\u01A6\n\x1F\f" +
		"\x1F\x0E\x1F\u01A9\v\x1F\x03 \x03 \x03 \x03 \x05 \u01AF\n \x03!\x03!\x03" +
		"!\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x05\"\u01BE" +
		"\n\"\x03#\x03#\x03#\x03#\x05#\u01C4\n#\x03$\x03$\x03$\x03$\x05$\u01CA" +
		"\n$\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03&\x03&\x03&\x03&\x05" +
		"&\u01D9\n&\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x07\'" +
		"\u01E4\n\'\f\'\x0E\'\u01E7\v\'\x03(\x03(\x03(\x03(\x03(\x03(\x05(\u01EF" +
		"\n(\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x07)\u01FA\n)\f)\x0E" +
		")\u01FD\v)\x03*\x03*\x03*\x03*\x05*\u0203\n*\x03+\x03+\x03+\x03+\x03+" +
		"\x03+\x03+\x03+\x03+\x05+\u020E\n+\x03,\x03,\x03,\x03,\x03,\x03,\x03," +
		"\x03,\x03,\x03,\x03,\x03,\x07,\u021C\n,\f,\x0E,\u021F\v,\x03-\x03-\x03" +
		"-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x05-\u0230" +
		"\n-\x03.\x03.\x03.\x03.\x05.\u0236\n.\x03/\x03/\x03/\x03/\x03/\x03/\x03" +
		"/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03" +
		"/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03" +
		"/\x03/\x03/\x03/\x03/\x03/\x05/\u0260\n/\x03/\x02\x02\v\x06\x16\x1E08" +
		"<LPV0\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02" +
		"\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02" +
		"(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02" +
		"D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02\x02" +
		"\x02\x02\u0282\x02^\x03\x02\x02\x02\x04b\x03\x02\x02\x02\x06e\x03\x02" +
		"\x02\x02\bv\x03\x02\x02\x02\nx\x03\x02\x02\x02\f\x7F\x03\x02\x02\x02\x0E" +
		"\x81\x03\x02\x02\x02\x10\x88\x03\x02\x02\x02\x12\x8A\x03\x02\x02\x02\x14" +
		"\x8F\x03\x02\x02\x02\x16\x92\x03\x02\x02\x02\x18\xA3\x03\x02\x02\x02\x1A" +
		"\xA5\x03\x02\x02\x02\x1C\xAC\x03\x02\x02\x02\x1E\xAE\x03\x02\x02\x02 " +
		"\u010A\x03\x02\x02\x02\"\u0111\x03\x02\x02\x02$\u0113\x03\x02\x02\x02" +
		"&\u011E\x03\x02\x02\x02(\u0120\x03\x02\x02\x02*\u0126\x03\x02\x02\x02" +
		",\u012A\x03\x02\x02\x02.\u012D\x03\x02\x02\x020\u0130\x03\x02\x02\x02" +
		"2\u013E\x03\x02\x02\x024\u0154\x03\x02\x02\x026\u015E\x03\x02\x02\x02" +
		"8\u016B\x03\x02\x02\x02:\u019A\x03\x02\x02\x02<\u019C\x03\x02\x02\x02" +
		">\u01AE\x03\x02\x02\x02@\u01B0\x03\x02\x02\x02B\u01BD\x03\x02\x02\x02" +
		"D\u01C3\x03\x02\x02\x02F\u01C9\x03\x02\x02\x02H\u01CB\x03\x02\x02\x02" +
		"J\u01D8\x03\x02\x02\x02L\u01DA\x03\x02\x02\x02N\u01EE\x03\x02\x02\x02" +
		"P\u01F0\x03\x02\x02\x02R\u0202\x03\x02\x02\x02T\u020D\x03\x02\x02\x02" +
		"V\u020F\x03\x02\x02\x02X\u022F\x03\x02\x02\x02Z\u0235\x03\x02\x02\x02" +
		"\\\u025F\x03\x02\x02\x02^_\x05\x04\x03\x02_`\x07\x02\x02\x03`a\b\x02\x01" +
		"\x02a\x03\x03\x02\x02\x02bc\x05\x0E\b\x02cd\b\x03\x01\x02d\x05\x03\x02" +
		"\x02\x02ef\b\x04\x01\x02fg\x05 \x11\x02gh\b\x04\x01\x02ho\x03\x02\x02" +
		"\x02ij\f\x03\x02\x02jk\x05 \x11\x02kl\b\x04\x01\x02ln\x03\x02\x02\x02" +
		"mi\x03\x02\x02\x02nq\x03\x02\x02\x02om\x03\x02\x02\x02op\x03\x02\x02\x02" +
		"p\x07\x03\x02\x02\x02qo\x03\x02\x02\x02rw\b\x05\x01\x02st\x05\x06\x04" +
		"\x02tu\b\x05\x01\x02uw\x03\x02\x02\x02vr\x03\x02\x02\x02vs\x03\x02\x02" +
		"\x02w\t\x03\x02\x02\x02xy\x05\b\x05\x02yz\b\x06\x01\x02z\v\x03\x02\x02" +
		"\x02{|\x05\x12\n\x02|}\b\x07\x01\x02}\x80\x03\x02\x02\x02~\x80\b\x07\x01" +
		"\x02\x7F{\x03\x02\x02\x02\x7F~\x03\x02\x02\x02\x80\r\x03\x02\x02\x02\x81" +
		"\x82\x05\n\x06\x02\x82\x83\x05\f\x07\x02\x83\x84\b\b\x01\x02\x84\x0F\x03" +
		"\x02\x02\x02\x85\x86\x07\x03\x02\x02\x86\x89\b\t\x01\x02\x87\x89\b\t\x01" +
		"\x02\x88\x85\x03\x02\x02\x02\x88\x87\x03\x02\x02\x02\x89\x11\x03\x02\x02" +
		"\x02\x8A\x8B\x07\x04\x02\x02\x8B\x8C\x05@!\x02\x8C\x8D\x05\x10\t\x02\x8D" +
		"\x8E\b\n\x01\x02\x8E\x13\x03\x02\x02\x02\x8F\x90\x07<\x02\x02\x90\x91" +
		"\b\v\x01\x02\x91\x15\x03\x02\x02\x02\x92\x93\b\f\x01\x02\x93\x94\x05(" +
		"\x15\x02\x94\x95\b\f\x01\x02\x95\x9C\x03\x02\x02\x02\x96\x97\f\x03\x02" +
		"\x02\x97\x98\x05(\x15\x02\x98\x99\b\f\x01\x02\x99\x9B\x03\x02\x02\x02" +
		"\x9A\x96\x03\x02\x02\x02\x9B\x9E\x03\x02\x02\x02\x9C\x9A\x03\x02\x02\x02" +
		"\x9C\x9D\x03\x02\x02\x02\x9D\x17\x03\x02\x02\x02\x9E\x9C\x03\x02\x02\x02" +
		"\x9F\xA4\b\r\x01\x02\xA0\xA1\x05\x16\f\x02\xA1\xA2\b\r\x01\x02\xA2\xA4" +
		"\x03\x02\x02\x02\xA3\x9F\x03\x02\x02\x02\xA3\xA0\x03\x02\x02\x02\xA4\x19" +
		"\x03\x02\x02\x02\xA5\xA6\x05\x18\r\x02\xA6\xA7\b\x0E\x01\x02\xA7\x1B\x03" +
		"\x02\x02\x02\xA8\xA9\x05*\x16\x02\xA9\xAA\b\x0F\x01\x02\xAA\xAD\x03\x02" +
		"\x02\x02\xAB\xAD\b\x0F\x01\x02\xAC\xA8\x03\x02\x02\x02\xAC\xAB\x03\x02" +
		"\x02\x02\xAD\x1D\x03\x02\x02\x02\xAE\xAF\b\x10\x01\x02\xAF\xB0\x07<\x02" +
		"\x02\xB0\xB1\b\x10\x01\x02\xB1\xB8\x03\x02\x02\x02\xB2\xB3\f\x03\x02\x02" +
		"\xB3\xB4\x07\x05\x02\x02\xB4\xB5\x07<\x02\x02\xB5\xB7\b\x10\x01\x02\xB6" +
		"\xB2\x03\x02\x02\x02\xB7\xBA\x03\x02\x02\x02\xB8\xB6\x03\x02\x02\x02\xB8" +
		"\xB9\x03\x02\x02\x02\xB9\x1F\x03\x02\x02\x02\xBA\xB8\x03\x02\x02\x02\xBB" +
		"\xBC\x07\x03\x02\x02\xBC\u010B\b\x11\x01\x02\xBD\xBE\x05<\x1F\x02\xBE" +
		"\xBF\x07\x06\x02\x02\xBF\xC0\x05<\x1F\x02\xC0\xC1\b\x11\x01\x02\xC1\u010B" +
		"\x03\x02\x02\x02\xC2\xC3\x05,\x17\x02\xC3\xC4\b\x11\x01\x02\xC4\u010B" +
		"\x03\x02\x02\x02\xC5\xC6\x07\x07\x02\x02\xC6\xC7\x07<\x02\x02\xC7\xC8" +
		"\x07\x07\x02\x02\xC8\u010B\b\x11\x01\x02\xC9\xCA\x07\b\x02\x02\xCA\u010B" +
		"\b\x11\x01\x02\xCB\xCC\x07\t\x02\x02\xCC\xCD\x07<\x02\x02\xCD\u010B\b" +
		"\x11\x01\x02\xCE\xCF\x07\n\x02\x02\xCF\xD0\x05\x0E\b\x02\xD0\xD1\x07\v" +
		"\x02\x02\xD1\xD2\b\x11\x01\x02\xD2\u010B\x03\x02\x02\x02\xD3\xD4\x07\f" +
		"\x02\x02\xD4\xD5\x05,\x17\x02\xD5\xD6\x07\n\x02\x02\xD6\xD7\x05\x0E\b" +
		"\x02\xD7\xD8\x07\v\x02\x02\xD8\xD9\b\x11\x01\x02\xD9\u010B\x03\x02\x02" +
		"\x02\xDA\xDB\x07\r\x02\x02\xDB\xDC\x05\x0E\b\x02\xDC\xDD\x07\x0E\x02\x02" +
		"\xDD\xDE\x05,\x17\x02\xDE\xDF\b\x11\x01\x02\xDF\u010B\x03\x02\x02\x02" +
		"\xE0\xE1\x07\x0F\x02\x02\xE1\xE2\x05,\x17\x02\xE2\xE3\x07\x10\x02\x02" +
		"\xE3\xE4\x05\x0E\b\x02\xE4\xE5\x05\x1A\x0E\x02\xE5\xE6\x05\x1C\x0F\x02" +
		"\xE6\xE7\x07\v\x02\x02\xE7\xE8\b\x11\x01\x02\xE8\u010B\x03\x02\x02\x02" +
		"\xE9\xEA\x07\x11\x02\x02\xEA\xEB\x07<\x02\x02\xEB\xEC\x07\x06\x02\x02" +
		"\xEC\xED\x05$\x13\x02\xED\xEE\x07\n\x02\x02\xEE\xEF\x05\x0E\b\x02\xEF" +
		"\xF0\x07\v\x02\x02\xF0\xF1\b\x11\x01\x02\xF1\u010B\x03\x02\x02\x02\xF2" +
		"\xF3\x07\x11\x02\x02\xF3\xF4\x05L\'\x02\xF4\xF5\x07\x12\x02\x02\xF5\xF6" +
		"\x05<\x1F\x02\xF6\xF7\x07\n\x02\x02\xF7\xF8\x05\x0E\b\x02\xF8\xF9\x07" +
		"\v\x02\x02\xF9\xFA\b\x11\x01\x02\xFA\u010B\x03\x02\x02\x02\xFB\xFC\x07" +
		"\x13\x02\x02\xFC\xFD\x07\x14\x02\x02\xFD\xFE\x05V,\x02\xFE\xFF\x07\x15" +
		"\x02\x02\xFF\u0100\x05F$\x02\u0100\u0101\x07\x16\x02\x02\u0101\u0102\x05" +
		"\x0E\b\x02\u0102\u0103\x07\v\x02\x02\u0103\u0104\b\x11\x01\x02\u0104\u010B" +
		"\x03\x02\x02\x02\u0105\u0106\x07\x13\x02\x02\u0106\u0107\x05\x1E\x10\x02" +
		"\u0107\u0108\x05\"\x12\x02\u0108\u0109\b\x11\x01\x02\u0109\u010B\x03\x02" +
		"\x02\x02\u010A\xBB\x03\x02\x02\x02\u010A\xBD\x03\x02\x02\x02\u010A\xC2" +
		"\x03\x02\x02\x02\u010A\xC5\x03\x02\x02\x02\u010A\xC9\x03\x02\x02\x02\u010A" +
		"\xCB\x03\x02\x02\x02\u010A\xCE\x03\x02\x02\x02\u010A\xD3\x03\x02\x02\x02" +
		"\u010A\xDA\x03\x02\x02\x02\u010A\xE0\x03\x02\x02\x02\u010A\xE9\x03\x02" +
		"\x02\x02\u010A\xF2\x03\x02\x02\x02\u010A\xFB\x03\x02\x02\x02\u010A\u0105" +
		"\x03\x02\x02\x02\u010B!\x03\x02\x02\x02\u010C\u010D\x07\x06\x02\x02\u010D" +
		"\u010E\x05<\x1F\x02\u010E\u010F\b\x12\x01\x02\u010F\u0112\x03\x02\x02" +
		"\x02\u0110\u0112\b\x12\x01\x02\u0111\u010C\x03\x02\x02\x02\u0111\u0110" +
		"\x03\x02\x02\x02\u0112#\x03\x02\x02\x02\u0113\u0114\x05,\x17\x02\u0114" +
		"\u0115\x07\x05\x02\x02\u0115\u0116\x05,\x17\x02\u0116\u0117\x05&\x14\x02" +
		"\u0117\u0118\b\x13\x01\x02\u0118%\x03\x02\x02\x02\u0119\u011A\x07\x05" +
		"\x02\x02\u011A\u011B\x05,\x17\x02\u011B\u011C\b\x14\x01\x02\u011C\u011F" +
		"\x03\x02\x02\x02\u011D\u011F\b\x14\x01\x02\u011E\u0119\x03\x02\x02\x02" +
		"\u011E\u011D\x03\x02\x02\x02\u011F\'\x03\x02\x02\x02\u0120\u0121\x07\x17" +
		"\x02\x02\u0121\u0122\x05,\x17\x02\u0122\u0123\x07\x10\x02\x02\u0123\u0124" +
		"\x05\x0E\b\x02\u0124\u0125\b\x15\x01\x02\u0125)\x03\x02\x02\x02\u0126" +
		"\u0127\x07\x18\x02\x02\u0127\u0128\x05\x0E\b\x02\u0128\u0129\b\x16\x01" +
		"\x02\u0129+\x03\x02\x02\x02\u012A\u012B\x05.\x18\x02\u012B\u012C\b\x17" +
		"\x01\x02\u012C-\x03\x02\x02\x02\u012D\u012E\x050\x19\x02\u012E\u012F\b" +
		"\x18\x01\x02\u012F/\x03\x02\x02\x02\u0130\u0131\b\x19\x01\x02\u0131\u0132" +
		"\x052\x1A\x02\u0132\u0133\b\x19\x01\x02\u0133\u013B\x03\x02\x02\x02\u0134" +
		"\u0135\f\x04\x02\x02\u0135\u0136\x05\\/\x02\u0136\u0137\x052\x1A\x02\u0137" +
		"\u0138\b\x19\x01\x02\u0138\u013A\x03\x02\x02\x02\u0139\u0134\x03\x02\x02" +
		"\x02\u013A\u013D\x03\x02\x02\x02\u013B\u0139\x03\x02\x02\x02\u013B\u013C" +
		"\x03\x02\x02\x02\u013C1\x03\x02\x02\x02\u013D\u013B\x03\x02\x02\x02\u013E" +
		"\u013F\x054\x1B\x02\u013F\u0140\b\x1A\x01\x02\u01403\x03\x02\x02\x02\u0141" +
		"\u0142\x07\x19\x02\x02\u0142\u0143\x056\x1C\x02\u0143\u0144\b\x1B\x01" +
		"\x02\u0144\u0155\x03\x02\x02\x02\u0145\u0146\x07\x1A\x02\x02\u0146\u0147" +
		"\x056\x1C\x02\u0147\u0148\b\x1B\x01\x02\u0148\u0155\x03\x02\x02\x02\u0149" +
		"\u014A\x07\x1B\x02\x02\u014A\u014B\x056\x1C\x02\u014B\u014C\b\x1B\x01" +
		"\x02\u014C\u0155\x03\x02\x02\x02\u014D\u014E\x07\x1C\x02\x02\u014E\u014F" +
		"\x056\x1C\x02\u014F\u0150\b\x1B\x01\x02\u0150\u0155\x03\x02\x02\x02\u0151" +
		"\u0152\x056\x1C\x02\u0152\u0153\b\x1B\x01\x02\u0153\u0155\x03\x02\x02" +
		"\x02\u0154\u0141\x03\x02\x02\x02\u0154\u0145\x03\x02\x02\x02\u0154\u0149" +
		"\x03\x02\x02\x02\u0154\u014D\x03\x02\x02\x02\u0154\u0151\x03\x02\x02\x02" +
		"\u01555\x03\x02\x02\x02\u0156\u0157\x058\x1D\x02\u0157\u0158\x07\x1D\x02" +
		"\x02\u0158\u0159\x056\x1C\x02\u0159\u015A\b\x1C\x01\x02\u015A\u015F\x03" +
		"\x02\x02\x02\u015B\u015C\x058\x1D\x02\u015C\u015D\b\x1C\x01\x02\u015D" +
		"\u015F\x03\x02\x02\x02\u015E\u0156\x03\x02\x02\x02\u015E\u015B\x03\x02" +
		"\x02\x02\u015F7\x03\x02\x02\x02\u0160\u0161\b\x1D\x01\x02\u0161\u0162" +
		"\x07<\x02\x02\u0162\u016C\b\x1D\x01\x02\u0163\u0164\x07\x15\x02\x02\u0164" +
		"\u0165\x05,\x17\x02\u0165\u0166\x07\x16\x02\x02\u0166\u0167\b\x1D\x01" +
		"\x02\u0167\u016C\x03\x02\x02\x02\u0168\u0169\x05:\x1E\x02\u0169\u016A" +
		"\b\x1D\x01\x02\u016A\u016C\x03\x02\x02\x02\u016B\u0160\x03\x02\x02\x02" +
		"\u016B\u0163\x03\x02\x02\x02\u016B\u0168\x03\x02\x02\x02\u016C\u0183\x03" +
		"\x02\x02\x02\u016D\u016E\f\x07\x02\x02\u016E\u016F\x05B\"\x02\u016F\u0170" +
		"\b\x1D\x01\x02\u0170\u0182\x03\x02\x02\x02\u0171\u0172\f\x06\x02\x02\u0172" +
		"\u0173\x07\x1E\x02\x02\u0173\u0174\x07<\x02\x02\u0174\u0175\x05B\"\x02" +
		"\u0175\u0176\b\x1D\x01\x02\u0176\u0182\x03\x02\x02\x02\u0177\u0178\f\x05" +
		"\x02\x02\u0178\u0179\x07\x1F\x02\x02\u0179\u017A\x05,\x17\x02\u017A\u017B" +
		"\x07 \x02\x02\u017B\u017C\b\x1D\x01\x02\u017C\u0182\x03\x02\x02\x02\u017D" +
		"\u017E\f\x04\x02\x02\u017E\u017F\x07!\x02\x02\u017F\u0180\x07<\x02\x02" +
		"\u0180\u0182\b\x1D\x01\x02\u0181\u016D\x03\x02\x02\x02\u0181\u0171\x03" +
		"\x02\x02\x02\u0181\u0177\x03\x02\x02\x02\u0181\u017D\x03\x02\x02\x02\u0182" +
		"\u0185\x03\x02\x02\x02\u0183\u0181\x03\x02\x02\x02\u0183\u0184\x03\x02" +
		"\x02\x02\u01849\x03\x02\x02\x02\u0185\u0183\x03\x02\x02\x02\u0186\u0187" +
		"\x07\"\x02\x02\u0187\u019B\b\x1E\x01\x02\u0188\u0189\x07#\x02\x02\u0189" +
		"\u019B\b\x1E\x01\x02\u018A\u018B\x07$\x02\x02\u018B\u019B\b\x1E\x01\x02" +
		"\u018C\u018D\x07=\x02\x02\u018D\u019B\b\x1E\x01\x02\u018E\u018F\x07>\x02" +
		"\x02\u018F\u019B\b\x1E\x01\x02\u0190\u0191\x07?\x02\x02\u0191\u019B\b" +
		"\x1E\x01\x02\u0192\u0193\x07%\x02\x02\u0193\u019B\b\x1E\x01\x02\u0194" +
		"\u0195\x05H%\x02\u0195\u0196\b\x1E\x01\x02\u0196\u019B\x03\x02\x02\x02" +
		"\u0197\u0198\x05T+\x02\u0198\u0199\b\x1E\x01\x02\u0199\u019B\x03\x02\x02" +
		"\x02\u019A\u0186\x03\x02\x02\x02\u019A\u0188\x03\x02\x02\x02\u019A\u018A" +
		"\x03\x02\x02\x02\u019A\u018C\x03\x02\x02\x02\u019A\u018E\x03\x02\x02\x02" +
		"\u019A\u0190\x03\x02\x02\x02\u019A\u0192\x03\x02\x02\x02\u019A\u0194\x03" +
		"\x02\x02\x02\u019A\u0197\x03\x02\x02\x02\u019B;\x03\x02\x02\x02\u019C" +
		"\u019D\b\x1F\x01\x02\u019D\u019E\x05,\x17\x02\u019E\u019F\b\x1F\x01\x02" +
		"\u019F\u01A7\x03\x02\x02\x02\u01A0\u01A1\f\x03\x02\x02\u01A1\u01A2\x07" +
		"\x05\x02\x02\u01A2\u01A3\x05,\x17\x02\u01A3\u01A4\b\x1F\x01\x02\u01A4" +
		"\u01A6\x03\x02\x02\x02\u01A5\u01A0\x03\x02\x02\x02\u01A6\u01A9\x03\x02" +
		"\x02\x02\u01A7\u01A5\x03\x02\x02\x02\u01A7\u01A8\x03\x02\x02\x02\u01A8" +
		"=\x03\x02\x02\x02\u01A9\u01A7\x03\x02\x02\x02\u01AA\u01AF\b \x01\x02\u01AB" +
		"\u01AC\x05<\x1F\x02\u01AC\u01AD\b \x01\x02\u01AD\u01AF\x03\x02\x02\x02" +
		"\u01AE\u01AA\x03\x02\x02\x02\u01AE\u01AB\x03\x02\x02\x02\u01AF?\x03\x02" +
		"\x02\x02\u01B0\u01B1\x05> \x02\u01B1\u01B2\b!\x01\x02\u01B2A\x03\x02\x02" +
		"\x02\u01B3\u01B4\x07\x15\x02\x02\u01B4\u01B5\x05@!\x02\u01B5\u01B6\x07" +
		"\x16\x02\x02\u01B6\u01B7\b\"\x01\x02\u01B7\u01BE\x03\x02\x02\x02\u01B8" +
		"\u01B9\x05T+\x02\u01B9\u01BA\b\"\x01\x02\u01BA\u01BE\x03\x02\x02\x02\u01BB" +
		"\u01BC\x07>\x02\x02\u01BC\u01BE\b\"\x01\x02\u01BD\u01B3\x03\x02\x02\x02" +
		"\u01BD\u01B8\x03\x02\x02\x02\u01BD\u01BB\x03\x02\x02\x02\u01BEC\x03\x02" +
		"\x02\x02\u01BF\u01C0\x05V,\x02\u01C0\u01C1\b#\x01\x02\u01C1\u01C4\x03" +
		"\x02\x02\x02\u01C2\u01C4\b#\x01\x02\u01C3\u01BF\x03\x02\x02\x02\u01C3" +
		"\u01C2\x03\x02\x02\x02\u01C4E\x03\x02\x02\x02\u01C5\u01C6\x05N(\x02\u01C6" +
		"\u01C7\b$\x01\x02\u01C7\u01CA\x03\x02\x02\x02\u01C8\u01CA\b$\x01\x02\u01C9" +
		"\u01C5\x03\x02\x02\x02\u01C9\u01C8\x03\x02\x02\x02\u01CAG\x03\x02\x02" +
		"\x02\u01CB\u01CC\x07\x14\x02\x02\u01CC\u01CD\x05D#\x02\u01CD\u01CE\x07" +
		"\x15\x02\x02\u01CE\u01CF\x05F$\x02\u01CF\u01D0\x07\x16\x02\x02\u01D0\u01D1" +
		"\x05\x0E\b\x02\u01D1\u01D2\x07\v\x02\x02\u01D2\u01D3\b%\x01\x02\u01D3" +
		"I\x03\x02\x02\x02\u01D4\u01D5\x07\x05\x02\x02\u01D5\u01D6\x07%\x02\x02" +
		"\u01D6\u01D9\b&\x01\x02\u01D7\u01D9\b&\x01\x02\u01D8\u01D4\x03\x02\x02" +
		"\x02\u01D8\u01D7\x03\x02\x02\x02\u01D9K\x03\x02\x02\x02\u01DA\u01DB\b" +
		"\'\x01\x02\u01DB\u01DC\x05\x14\v\x02\u01DC\u01DD\b\'\x01\x02\u01DD\u01E5" +
		"\x03\x02\x02\x02\u01DE\u01DF\f\x03\x02\x02\u01DF\u01E0\x07\x05\x02\x02" +
		"\u01E0\u01E1\x05\x14\v\x02\u01E1\u01E2\b\'\x01\x02\u01E2\u01E4\x03\x02" +
		"\x02\x02\u01E3\u01DE\x03\x02\x02\x02\u01E4\u01E7\x03\x02\x02\x02\u01E5" +
		"\u01E3\x03\x02\x02\x02\u01E5\u01E6\x03\x02\x02\x02\u01E6M\x03\x02\x02" +
		"\x02\u01E7\u01E5\x03\x02\x02\x02\u01E8\u01E9\x07%\x02\x02\u01E9\u01EF" +
		"\b(\x01\x02\u01EA\u01EB\x05L\'\x02\u01EB\u01EC\x05J&\x02\u01EC\u01ED\b" +
		"(\x01\x02\u01ED\u01EF\x03\x02\x02\x02\u01EE\u01E8\x03\x02\x02\x02\u01EE" +
		"\u01EA\x03\x02\x02\x02\u01EFO\x03\x02\x02\x02\u01F0\u01F1\b)\x01\x02\u01F1" +
		"\u01F2\x05X-\x02\u01F2\u01F3\b)\x01\x02\u01F3\u01FB\x03\x02\x02\x02\u01F4" +
		"\u01F5\f\x03\x02\x02\u01F5\u01F6\x05Z.\x02\u01F6\u01F7\x05X-\x02\u01F7" +
		"\u01F8\b)\x01\x02\u01F8\u01FA\x03\x02\x02\x02\u01F9\u01F4\x03\x02\x02" +
		"\x02\u01FA\u01FD\x03\x02\x02\x02\u01FB\u01F9\x03\x02\x02\x02\u01FB\u01FC" +
		"\x03\x02\x02\x02\u01FCQ\x03\x02\x02\x02\u01FD\u01FB\x03\x02\x02\x02\u01FE" +
		"\u01FF\x05Z.\x02\u01FF\u0200\b*\x01\x02\u0200\u0203\x03\x02\x02\x02\u0201" +
		"\u0203\b*\x01\x02\u0202\u01FE\x03\x02\x02\x02\u0202\u0201\x03\x02\x02" +
		"\x02\u0203S\x03\x02\x02\x02\u0204\u0205\x07&\x02\x02\u0205\u0206\x05P" +
		")\x02\u0206\u0207\x05R*\x02\u0207\u0208\x07\'\x02\x02\u0208\u0209\b+\x01" +
		"\x02\u0209\u020E\x03\x02\x02\x02\u020A\u020B\x07&\x02\x02\u020B\u020C" +
		"\x07\'\x02\x02\u020C\u020E\b+\x01\x02\u020D\u0204\x03\x02\x02\x02\u020D" +
		"\u020A\x03\x02\x02\x02\u020EU\x03\x02\x02\x02\u020F\u0210\b,\x01\x02\u0210" +
		"\u0211\x07<\x02\x02\u0211\u0212\b,\x01\x02\u0212\u021D\x03\x02\x02\x02" +
		"\u0213\u0214\f\x05\x02\x02\u0214\u0215\x07!\x02\x02\u0215\u0216\x07<\x02" +
		"\x02\u0216\u021C\b,\x01\x02\u0217\u0218\f\x04\x02\x02\u0218\u0219\x07" +
		"\x1E\x02\x02\u0219\u021A\x07<\x02\x02\u021A\u021C\b,\x01\x02\u021B\u0213" +
		"\x03\x02\x02\x02\u021B\u0217\x03\x02\x02\x02\u021C\u021F\x03\x02\x02\x02" +
		"\u021D\u021B\x03\x02\x02\x02\u021D\u021E\x03\x02\x02\x02\u021EW\x03\x02" +
		"\x02\x02\u021F\u021D\x03\x02\x02\x02\u0220\u0221\x07\x1F\x02\x02\u0221" +
		"\u0222\x05,\x17\x02\u0222\u0223\x07 \x02\x02\u0223\u0224\x07\x06\x02\x02" +
		"\u0224\u0225\x05,\x17\x02\u0225\u0226\b-\x01\x02\u0226\u0230\x03\x02\x02" +
		"\x02\u0227\u0228\x07<\x02\x02\u0228\u0229\x07\x06\x02\x02\u0229\u022A" +
		"\x05,\x17\x02\u022A\u022B\b-\x01\x02\u022B\u0230\x03\x02\x02\x02\u022C" +
		"\u022D\x05,\x17\x02\u022D\u022E\b-\x01\x02\u022E\u0230\x03\x02\x02\x02" +
		"\u022F\u0220\x03\x02\x02\x02\u022F\u0227\x03\x02\x02\x02\u022F\u022C\x03" +
		"\x02\x02\x02\u0230Y\x03\x02\x02\x02\u0231\u0232\x07\x05\x02\x02\u0232" +
		"\u0236\b.\x01\x02\u0233\u0234\x07\x03\x02\x02\u0234\u0236\b.\x01\x02\u0235" +
		"\u0231\x03\x02\x02\x02\u0235\u0233\x03\x02\x02\x02\u0236[\x03\x02\x02" +
		"\x02\u0237\u0238\x07(\x02\x02\u0238\u0260\b/\x01\x02\u0239\u023A\x07)" +
		"\x02\x02\u023A\u0260\b/\x01\x02\u023B\u023C\x07*\x02\x02\u023C\u0260\b" +
		"/\x01\x02\u023D\u023E\x07+\x02\x02\u023E\u0260\b/\x01\x02\u023F\u0240" +
		"\x07,\x02\x02\u0240\u0260\b/\x01\x02\u0241\u0242\x07-\x02\x02\u0242\u0260" +
		"\b/\x01\x02\u0243\u0244\x07.\x02\x02\u0244\u0260\b/\x01\x02\u0245\u0246" +
		"\x07/\x02\x02\u0246\u0260\b/\x01\x02\u0247\u0248\x070\x02\x02\u0248\u0260" +
		"\b/\x01\x02\u0249\u024A\x07\x1B\x02\x02\u024A\u0260\b/\x01\x02\u024B\u024C" +
		"\x071\x02\x02\u024C\u0260\b/\x01\x02\u024D\u024E\x072\x02\x02\u024E\u0260" +
		"\b/\x01\x02\u024F\u0250\x073";
	private static readonly _serializedATNSegment1: string =
		"\x02\x02\u0250\u0260\b/\x01\x02\u0251\u0252\x074\x02\x02\u0252\u0260\b" +
		"/\x01\x02\u0253\u0254\x075\x02\x02\u0254\u0260\b/\x01\x02\u0255\u0256" +
		"\x07\x1A\x02\x02\u0256\u0260\b/\x01\x02\u0257\u0258\x076\x02\x02\u0258" +
		"\u0260\b/\x01\x02\u0259\u025A\x077\x02\x02\u025A\u0260\b/\x01\x02\u025B" +
		"\u025C\x078\x02\x02\u025C\u0260\b/\x01\x02\u025D\u025E\x079\x02\x02\u025E" +
		"\u0260\b/\x01\x02\u025F\u0237\x03\x02\x02\x02\u025F\u0239\x03\x02\x02" +
		"\x02\u025F\u023B\x03\x02\x02\x02\u025F\u023D\x03\x02\x02\x02\u025F\u023F" +
		"\x03\x02\x02\x02\u025F\u0241\x03\x02\x02\x02\u025F\u0243\x03\x02\x02\x02" +
		"\u025F\u0245\x03\x02\x02\x02\u025F\u0247\x03\x02\x02\x02\u025F\u0249\x03" +
		"\x02\x02\x02\u025F\u024B\x03\x02\x02\x02\u025F\u024D\x03\x02\x02\x02\u025F" +
		"\u024F\x03\x02\x02\x02\u025F\u0251\x03\x02\x02\x02\u025F\u0253\x03\x02" +
		"\x02\x02\u025F\u0255\x03\x02\x02\x02\u025F\u0257\x03\x02\x02\x02\u025F" +
		"\u0259\x03\x02\x02\x02\u025F\u025B\x03\x02\x02\x02\u025F\u025D\x03\x02" +
		"\x02\x02\u0260]\x03\x02\x02\x02$ov\x7F\x88\x9C\xA3\xAC\xB8\u010A\u0111" +
		"\u011E\u013B\u0154\u015E\u016B\u0181\u0183\u019A\u01A7\u01AE\u01BD\u01C3" +
		"\u01C9\u01D8\u01E5\u01EE\u01FB\u0202\u020D\u021B\u021D\u022F\u0235\u025F";
	public static readonly _serializedATN: string = Utils.join(
		[
			lua_shParser._serializedATNSegment0,
			lua_shParser._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!lua_shParser.__ATN) {
			lua_shParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(lua_shParser._serializedATN));
		}

		return lua_shParser.__ATN;
	}

}

export class StartContext extends ParserRuleContext {
	public result: number;
	public _v!: Start__y_Context;
	public EOF(): TerminalNode { return this.getToken(lua_shParser.EOF, 0); }
	public start__y_(): Start__y_Context {
		return this.getRuleContext(0, Start__y_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lua_shParser.RULE_start; }
	// @Override
	public enterRule(listener: lua_shListener): void {
		if (listener.enterStart) {
			listener.enterStart(this);
		}
	}
	// @Override
	public exitRule(listener: lua_shListener): void {
		if (listener.exitStart) {
			listener.exitStart(this);
		}
	}
}


export class Start__y_Context extends ParserRuleContext {
	public result: number;
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lua_shParser.RULE_start__y_; }
	// @Override
	public enterRule(listener: lua_shListener): void {
		if (listener.enterStart__y_) {
			listener.enterStart__y_(this);
		}
	}
	// @Override
	public exitRule(listener: lua_shListener): void {
		if (listener.exitStart__y_) {
			listener.exitStart__y_(this);
		}
	}
}


export class Nempty_list_o_stat_p_Context extends ParserRuleContext {
	public result: number;
	public stat(): StatContext {
		return this.getRuleContext(0, StatContext);
	}
	public nempty_list_o_stat_p_(): Nempty_list_o_stat_p_Context | undefined {
		return this.tryGetRuleContext(0, Nempty_list_o_stat_p_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lua_shParser.RULE_nempty_list_o_stat_p_; }
	// @Override
	public enterRule(listener: lua_shListener): void {
		if (listener.enterNempty_list_o_stat_p_) {
			listener.enterNempty_list_o_stat_p_(this);
		}
	}
	// @Override
	public exitRule(listener: lua_shListener): void {
		if (listener.exitNempty_list_o_stat_p_) {
			listener.exitNempty_list_o_stat_p_(this);
		}
	}
}


export class Allow_empty_o_nempty_list_o_stat_p__p_Context extends ParserRuleContext {
	public result: number;
	public nempty_list_o_stat_p_(): Nempty_list_o_stat_p_Context | undefined {
		return this.tryGetRuleContext(0, Nempty_list_o_stat_p_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lua_shParser.RULE_allow_empty_o_nempty_list_o_stat_p__p_; }
	// @Override
	public enterRule(listener: lua_shListener): void {
		if (listener.enterAllow_empty_o_nempty_list_o_stat_p__p_) {
			listener.enterAllow_empty_o_nempty_list_o_stat_p__p_(this);
		}
	}
	// @Override
	public exitRule(listener: lua_shListener): void {
		if (listener.exitAllow_empty_o_nempty_list_o_stat_p__p_) {
			listener.exitAllow_empty_o_nempty_list_o_stat_p__p_(this);
		}
	}
}


export class List_o_stat_p_Context extends ParserRuleContext {
	public result: number;
	public allow_empty_o_nempty_list_o_stat_p__p_(): Allow_empty_o_nempty_list_o_stat_p__p_Context {
		return this.getRuleContext(0, Allow_empty_o_nempty_list_o_stat_p__p_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lua_shParser.RULE_list_o_stat_p_; }
	// @Override
	public enterRule(listener: lua_shListener): void {
		if (listener.enterList_o_stat_p_) {
			listener.enterList_o_stat_p_(this);
		}
	}
	// @Override
	public exitRule(listener: lua_shListener): void {
		if (listener.exitList_o_stat_p_) {
			listener.exitList_o_stat_p_(this);
		}
	}
}


export class Opt_o_retstat_p_Context extends ParserRuleContext {
	public result: number;
	public retstat(): RetstatContext | undefined {
		return this.tryGetRuleContext(0, RetstatContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lua_shParser.RULE_opt_o_retstat_p_; }
	// @Override
	public enterRule(listener: lua_shListener): void {
		if (listener.enterOpt_o_retstat_p_) {
			listener.enterOpt_o_retstat_p_(this);
		}
	}
	// @Override
	public exitRule(listener: lua_shListener): void {
		if (listener.exitOpt_o_retstat_p_) {
			listener.exitOpt_o_retstat_p_(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public result: number;
	public list_o_stat_p_(): List_o_stat_p_Context {
		return this.getRuleContext(0, List_o_stat_p_Context);
	}
	public opt_o_retstat_p_(): Opt_o_retstat_p_Context {
		return this.getRuleContext(0, Opt_o_retstat_p_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lua_shParser.RULE_block; }
	// @Override
	public enterRule(listener: lua_shListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: lua_shListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
}


export class RetcolonContext extends ParserRuleContext {
	public result: number;
	public _retcolon_0__1!: Token;
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lua_shParser.RULE_retcolon; }
	// @Override
	public enterRule(listener: lua_shListener): void {
		if (listener.enterRetcolon) {
			listener.enterRetcolon(this);
		}
	}
	// @Override
	public exitRule(listener: lua_shListener): void {
		if (listener.exitRetcolon) {
			listener.exitRetcolon(this);
		}
	}
}


export class RetstatContext extends ParserRuleContext {
	public result: number;
	public _retstat_0__1!: Token;
	public seplist_o__i__s__i__s_exp_p_(): Seplist_o__i__s__i__s_exp_p_Context {
		return this.getRuleContext(0, Seplist_o__i__s__i__s_exp_p_Context);
	}
	public retcolon(): RetcolonContext {
		return this.getRuleContext(0, RetcolonContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lua_shParser.RULE_retstat; }
	// @Override
	public enterRule(listener: lua_shListener): void {
		if (listener.enterRetstat) {
			listener.enterRetstat(this);
		}
	}
	// @Override
	public exitRule(listener: lua_shListener): void {
		if (listener.exitRetstat) {
			listener.exitRetstat(this);
		}
	}
}


export class NameContext extends ParserRuleContext {
	public result: number;
	public _name_0__1!: Token;
	public NAME(): TerminalNode { return this.getToken(lua_shParser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lua_shParser.RULE_name; }
	// @Override
	public enterRule(listener: lua_shListener): void {
		if (listener.enterName) {
			listener.enterName(this);
		}
	}
	// @Override
	public exitRule(listener: lua_shListener): void {
		if (listener.exitName) {
			listener.exitName(this);
		}
	}
}


export class Nempty_list_o_elseif_p_Context extends ParserRuleContext {
	public result: number;
	public elseif(): ElseifContext {
		return this.getRuleContext(0, ElseifContext);
	}
	public nempty_list_o_elseif_p_(): Nempty_list_o_elseif_p_Context | undefined {
		return this.tryGetRuleContext(0, Nempty_list_o_elseif_p_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lua_shParser.RULE_nempty_list_o_elseif_p_; }
	// @Override
	public enterRule(listener: lua_shListener): void {
		if (listener.enterNempty_list_o_elseif_p_) {
			listener.enterNempty_list_o_elseif_p_(this);
		}
	}
	// @Override
	public exitRule(listener: lua_shListener): void {
		if (listener.exitNempty_list_o_elseif_p_) {
			listener.exitNempty_list_o_elseif_p_(this);
		}
	}
}


export class Allow_empty_o_nempty_list_o_elseif_p__p_Context extends ParserRuleContext {
	public result: number;
	public nempty_list_o_elseif_p_(): Nempty_list_o_elseif_p_Context | undefined {
		return this.tryGetRuleContext(0, Nempty_list_o_elseif_p_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lua_shParser.RULE_allow_empty_o_nempty_list_o_elseif_p__p_; }
	// @Override
	public enterRule(listener: lua_shListener): void {
		if (listener.enterAllow_empty_o_nempty_list_o_elseif_p__p_) {
			listener.enterAllow_empty_o_nempty_list_o_elseif_p__p_(this);
		}
	}
	// @Override
	public exitRule(listener: lua_shListener): void {
		if (listener.exitAllow_empty_o_nempty_list_o_elseif_p__p_) {
			listener.exitAllow_empty_o_nempty_list_o_elseif_p__p_(this);
		}
	}
}


export class List_o_elseif_p_Context extends ParserRuleContext {
	public result: number;
	public allow_empty_o_nempty_list_o_elseif_p__p_(): Allow_empty_o_nempty_list_o_elseif_p__p_Context {
		return this.getRuleContext(0, Allow_empty_o_nempty_list_o_elseif_p__p_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lua_shParser.RULE_list_o_elseif_p_; }
	// @Override
	public enterRule(listener: lua_shListener): void {
		if (listener.enterList_o_elseif_p_) {
			listener.enterList_o_elseif_p_(this);
		}
	}
	// @Override
	public exitRule(listener: lua_shListener): void {
		if (listener.exitList_o_elseif_p_) {
			listener.exitList_o_elseif_p_(this);
		}
	}
}


export class Opt_o_else_p_Context extends ParserRuleContext {
	public result: number;
	public else__x_(): Else__x_Context | undefined {
		return this.tryGetRuleContext(0, Else__x_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lua_shParser.RULE_opt_o_else_p_; }
	// @Override
	public enterRule(listener: lua_shListener): void {
		if (listener.enterOpt_o_else_p_) {
			listener.enterOpt_o_else_p_(this);
		}
	}
	// @Override
	public exitRule(listener: lua_shListener): void {
		if (listener.exitOpt_o_else_p_) {
			listener.exitOpt_o_else_p_(this);
		}
	}
}


export class Nempty_seplist_o__i__s__i__s__i_name_k__p_Context extends ParserRuleContext {
	public result: number;
	public NAME(): TerminalNode { return this.getToken(lua_shParser.NAME, 0); }
	public nempty_seplist_o__i__s__i__s__i_name_k__p_(): Nempty_seplist_o__i__s__i__s__i_name_k__p_Context | undefined {
		return this.tryGetRuleContext(0, Nempty_seplist_o__i__s__i__s__i_name_k__p_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lua_shParser.RULE_nempty_seplist_o__i__s__i__s__i_name_k__p_; }
	// @Override
	public enterRule(listener: lua_shListener): void {
		if (listener.enterNempty_seplist_o__i__s__i__s__i_name_k__p_) {
			listener.enterNempty_seplist_o__i__s__i__s__i_name_k__p_(this);
		}
	}
	// @Override
	public exitRule(listener: lua_shListener): void {
		if (listener.exitNempty_seplist_o__i__s__i__s__i_name_k__p_) {
			listener.exitNempty_seplist_o__i__s__i__s__i_name_k__p_(this);
		}
	}
}


export class StatContext extends ParserRuleContext {
	public result: number;
	public _stat_3__1!: Token;
	public _stat_3__3!: Token;
	public _stat_4__1!: Token;
	public _stat_5__1!: Token;
	public _stat_5__2!: Token;
	public _stat_6__1!: Token;
	public _stat_6__3!: Token;
	public _stat_7__1!: Token;
	public _stat_7__3!: Token;
	public _stat_7__5!: Token;
	public _stat_8__1!: Token;
	public _stat_8__3!: Token;
	public _stat_9__1!: Token;
	public _stat_9__3!: Token;
	public _stat_9__7!: Token;
	public _stat_10__1!: Token;
	public _stat_10__3!: Token;
	public _stat_10__5!: Token;
	public _stat_10__7!: Token;
	public _stat_11__1!: Token;
	public _stat_11__3!: Token;
	public _stat_11__5!: Token;
	public _stat_11__7!: Token;
	public _stat_12__1!: Token;
	public _stat_12__2!: Token;
	public _stat_12__4!: Token;
	public _stat_12__6!: Token;
	public _stat_12__8!: Token;
	public _stat_13__1!: Token;
	public nempty_seplist_o__i__s__i__s_exp_p_(): Nempty_seplist_o__i__s__i__s_exp_p_Context[];
	public nempty_seplist_o__i__s__i__s_exp_p_(i: number): Nempty_seplist_o__i__s__i__s_exp_p_Context;
	public nempty_seplist_o__i__s__i__s_exp_p_(i?: number): Nempty_seplist_o__i__s__i__s_exp_p_Context | Nempty_seplist_o__i__s__i__s_exp_p_Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Nempty_seplist_o__i__s__i__s_exp_p_Context);
		} else {
			return this.getRuleContext(i, Nempty_seplist_o__i__s__i__s_exp_p_Context);
		}
	}
	public exp(): ExpContext | undefined {
		return this.tryGetRuleContext(0, ExpContext);
	}
	public NAME(): TerminalNode | undefined { return this.tryGetToken(lua_shParser.NAME, 0); }
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public list_o_elseif_p_(): List_o_elseif_p_Context | undefined {
		return this.tryGetRuleContext(0, List_o_elseif_p_Context);
	}
	public opt_o_else_p_(): Opt_o_else_p_Context | undefined {
		return this.tryGetRuleContext(0, Opt_o_else_p_Context);
	}
	public range(): RangeContext | undefined {
		return this.tryGetRuleContext(0, RangeContext);
	}
	public nempty_seplist_o__i__s__i__s_name_p_(): Nempty_seplist_o__i__s__i__s_name_p_Context | undefined {
		return this.tryGetRuleContext(0, Nempty_seplist_o__i__s__i__s_name_p_Context);
	}
	public funcname(): FuncnameContext | undefined {
		return this.tryGetRuleContext(0, FuncnameContext);
	}
	public opt_o_parlist_p_(): Opt_o_parlist_p_Context | undefined {
		return this.tryGetRuleContext(0, Opt_o_parlist_p_Context);
	}
	public nempty_seplist_o__i__s__i__s__i_name_k__p_(): Nempty_seplist_o__i__s__i__s__i_name_k__p_Context | undefined {
		return this.tryGetRuleContext(0, Nempty_seplist_o__i__s__i__s__i_name_k__p_Context);
	}
	public opt_assign_rhs(): Opt_assign_rhsContext | undefined {
		return this.tryGetRuleContext(0, Opt_assign_rhsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lua_shParser.RULE_stat; }
	// @Override
	public enterRule(listener: lua_shListener): void {
		if (listener.enterStat) {
			listener.enterStat(this);
		}
	}
	// @Override
	public exitRule(listener: lua_shListener): void {
		if (listener.exitStat) {
			listener.exitStat(this);
		}
	}
}


export class Opt_assign_rhsContext extends ParserRuleContext {
	public result: number;
	public nempty_seplist_o__i__s__i__s_exp_p_(): Nempty_seplist_o__i__s__i__s_exp_p_Context | undefined {
		return this.tryGetRuleContext(0, Nempty_seplist_o__i__s__i__s_exp_p_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lua_shParser.RULE_opt_assign_rhs; }
	// @Override
	public enterRule(listener: lua_shListener): void {
		if (listener.enterOpt_assign_rhs) {
			listener.enterOpt_assign_rhs(this);
		}
	}
	// @Override
	public exitRule(listener: lua_shListener): void {
		if (listener.exitOpt_assign_rhs) {
			listener.exitOpt_assign_rhs(this);
		}
	}
}


export class RangeContext extends ParserRuleContext {
	public result: number;
	public exp(): ExpContext[];
	public exp(i: number): ExpContext;
	public exp(i?: number): ExpContext | ExpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpContext);
		} else {
			return this.getRuleContext(i, ExpContext);
		}
	}
	public range_tail(): Range_tailContext {
		return this.getRuleContext(0, Range_tailContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lua_shParser.RULE_range; }
	// @Override
	public enterRule(listener: lua_shListener): void {
		if (listener.enterRange) {
			listener.enterRange(this);
		}
	}
	// @Override
	public exitRule(listener: lua_shListener): void {
		if (listener.exitRange) {
			listener.exitRange(this);
		}
	}
}


export class Range_tailContext extends ParserRuleContext {
	public result: number;
	public exp(): ExpContext | undefined {
		return this.tryGetRuleContext(0, ExpContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lua_shParser.RULE_range_tail; }
	// @Override
	public enterRule(listener: lua_shListener): void {
		if (listener.enterRange_tail) {
			listener.enterRange_tail(this);
		}
	}
	// @Override
	public exitRule(listener: lua_shListener): void {
		if (listener.exitRange_tail) {
			listener.exitRange_tail(this);
		}
	}
}


export class ElseifContext extends ParserRuleContext {
	public result: number;
	public _elseif_0__1!: Token;
	public _elseif_0__3!: Token;
	public exp(): ExpContext {
		return this.getRuleContext(0, ExpContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lua_shParser.RULE_elseif; }
	// @Override
	public enterRule(listener: lua_shListener): void {
		if (listener.enterElseif) {
			listener.enterElseif(this);
		}
	}
	// @Override
	public exitRule(listener: lua_shListener): void {
		if (listener.exitElseif) {
			listener.exitElseif(this);
		}
	}
}


export class Else__x_Context extends ParserRuleContext {
	public result: number;
	public _else__x__0__1!: Token;
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lua_shParser.RULE_else__x_; }
	// @Override
	public enterRule(listener: lua_shListener): void {
		if (listener.enterElse__x_) {
			listener.enterElse__x_(this);
		}
	}
	// @Override
	public exitRule(listener: lua_shListener): void {
		if (listener.exitElse__x_) {
			listener.exitElse__x_(this);
		}
	}
}


export class ExpContext extends ParserRuleContext {
	public result: number;
	public binexp(): BinexpContext {
		return this.getRuleContext(0, BinexpContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lua_shParser.RULE_exp; }
	// @Override
	public enterRule(listener: lua_shListener): void {
		if (listener.enterExp) {
			listener.enterExp(this);
		}
	}
	// @Override
	public exitRule(listener: lua_shListener): void {
		if (listener.exitExp) {
			listener.exitExp(this);
		}
	}
}


export class BinexpContext extends ParserRuleContext {
	public result: number;
	public binseq(): BinseqContext {
		return this.getRuleContext(0, BinseqContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lua_shParser.RULE_binexp; }
	// @Override
	public enterRule(listener: lua_shListener): void {
		if (listener.enterBinexp) {
			listener.enterBinexp(this);
		}
	}
	// @Override
	public exitRule(listener: lua_shListener): void {
		if (listener.exitBinexp) {
			listener.exitBinexp(this);
		}
	}
}


export class BinseqContext extends ParserRuleContext {
	public result: number;
	public binseq(): BinseqContext | undefined {
		return this.tryGetRuleContext(0, BinseqContext);
	}
	public binop(): BinopContext | undefined {
		return this.tryGetRuleContext(0, BinopContext);
	}
	public binoperand(): BinoperandContext {
		return this.getRuleContext(0, BinoperandContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lua_shParser.RULE_binseq; }
	// @Override
	public enterRule(listener: lua_shListener): void {
		if (listener.enterBinseq) {
			listener.enterBinseq(this);
		}
	}
	// @Override
	public exitRule(listener: lua_shListener): void {
		if (listener.exitBinseq) {
			listener.exitBinseq(this);
		}
	}
}


export class BinoperandContext extends ParserRuleContext {
	public result: number;
	public unaryexp(): UnaryexpContext {
		return this.getRuleContext(0, UnaryexpContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lua_shParser.RULE_binoperand; }
	// @Override
	public enterRule(listener: lua_shListener): void {
		if (listener.enterBinoperand) {
			listener.enterBinoperand(this);
		}
	}
	// @Override
	public exitRule(listener: lua_shListener): void {
		if (listener.exitBinoperand) {
			listener.exitBinoperand(this);
		}
	}
}


export class UnaryexpContext extends ParserRuleContext {
	public result: number;
	public _unaryexp_0__1!: Token;
	public _unaryexp_1__1!: Token;
	public _unaryexp_2__1!: Token;
	public _unaryexp_3__1!: Token;
	public exponent(): ExponentContext {
		return this.getRuleContext(0, ExponentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lua_shParser.RULE_unaryexp; }
	// @Override
	public enterRule(listener: lua_shListener): void {
		if (listener.enterUnaryexp) {
			listener.enterUnaryexp(this);
		}
	}
	// @Override
	public exitRule(listener: lua_shListener): void {
		if (listener.exitUnaryexp) {
			listener.exitUnaryexp(this);
		}
	}
}


export class ExponentContext extends ParserRuleContext {
	public result: number;
	public _exponent_0__2!: Token;
	public prefixexp(): PrefixexpContext {
		return this.getRuleContext(0, PrefixexpContext);
	}
	public exponent(): ExponentContext | undefined {
		return this.tryGetRuleContext(0, ExponentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lua_shParser.RULE_exponent; }
	// @Override
	public enterRule(listener: lua_shListener): void {
		if (listener.enterExponent) {
			listener.enterExponent(this);
		}
	}
	// @Override
	public exitRule(listener: lua_shListener): void {
		if (listener.exitExponent) {
			listener.exitExponent(this);
		}
	}
}


export class PrefixexpContext extends ParserRuleContext {
	public result: number;
	public _prefixexp_0__1!: Token;
	public _prefixexp_3__3!: Token;
	public _prefixexp_5__3!: Token;
	public NAME(): TerminalNode | undefined { return this.tryGetToken(lua_shParser.NAME, 0); }
	public exp(): ExpContext | undefined {
		return this.tryGetRuleContext(0, ExpContext);
	}
	public prefixexp(): PrefixexpContext | undefined {
		return this.tryGetRuleContext(0, PrefixexpContext);
	}
	public args(): ArgsContext | undefined {
		return this.tryGetRuleContext(0, ArgsContext);
	}
	public atom(): AtomContext | undefined {
		return this.tryGetRuleContext(0, AtomContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lua_shParser.RULE_prefixexp; }
	// @Override
	public enterRule(listener: lua_shListener): void {
		if (listener.enterPrefixexp) {
			listener.enterPrefixexp(this);
		}
	}
	// @Override
	public exitRule(listener: lua_shListener): void {
		if (listener.exitPrefixexp) {
			listener.exitPrefixexp(this);
		}
	}
}


export class AtomContext extends ParserRuleContext {
	public result: number;
	public _atom_0__1!: Token;
	public _atom_1__1!: Token;
	public _atom_2__1!: Token;
	public _atom_3__1!: Token;
	public _atom_4__1!: Token;
	public _atom_5__1!: Token;
	public _atom_6__1!: Token;
	public NUMERAL(): TerminalNode | undefined { return this.tryGetToken(lua_shParser.NUMERAL, 0); }
	public STR_LIT(): TerminalNode | undefined { return this.tryGetToken(lua_shParser.STR_LIT, 0); }
	public NESTED_STR(): TerminalNode | undefined { return this.tryGetToken(lua_shParser.NESTED_STR, 0); }
	public functiondef(): FunctiondefContext | undefined {
		return this.tryGetRuleContext(0, FunctiondefContext);
	}
	public tableconstructor(): TableconstructorContext | undefined {
		return this.tryGetRuleContext(0, TableconstructorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lua_shParser.RULE_atom; }
	// @Override
	public enterRule(listener: lua_shListener): void {
		if (listener.enterAtom) {
			listener.enterAtom(this);
		}
	}
	// @Override
	public exitRule(listener: lua_shListener): void {
		if (listener.exitAtom) {
			listener.exitAtom(this);
		}
	}
}


export class Nempty_seplist_o__i__s__i__s_exp_p_Context extends ParserRuleContext {
	public result: number;
	public exp(): ExpContext {
		return this.getRuleContext(0, ExpContext);
	}
	public nempty_seplist_o__i__s__i__s_exp_p_(): Nempty_seplist_o__i__s__i__s_exp_p_Context | undefined {
		return this.tryGetRuleContext(0, Nempty_seplist_o__i__s__i__s_exp_p_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lua_shParser.RULE_nempty_seplist_o__i__s__i__s_exp_p_; }
	// @Override
	public enterRule(listener: lua_shListener): void {
		if (listener.enterNempty_seplist_o__i__s__i__s_exp_p_) {
			listener.enterNempty_seplist_o__i__s__i__s_exp_p_(this);
		}
	}
	// @Override
	public exitRule(listener: lua_shListener): void {
		if (listener.exitNempty_seplist_o__i__s__i__s_exp_p_) {
			listener.exitNempty_seplist_o__i__s__i__s_exp_p_(this);
		}
	}
}


export class Allow_empty_o_nempty_seplist_o__i__s__i__s_exp_p__p_Context extends ParserRuleContext {
	public result: number;
	public nempty_seplist_o__i__s__i__s_exp_p_(): Nempty_seplist_o__i__s__i__s_exp_p_Context | undefined {
		return this.tryGetRuleContext(0, Nempty_seplist_o__i__s__i__s_exp_p_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lua_shParser.RULE_allow_empty_o_nempty_seplist_o__i__s__i__s_exp_p__p_; }
	// @Override
	public enterRule(listener: lua_shListener): void {
		if (listener.enterAllow_empty_o_nempty_seplist_o__i__s__i__s_exp_p__p_) {
			listener.enterAllow_empty_o_nempty_seplist_o__i__s__i__s_exp_p__p_(this);
		}
	}
	// @Override
	public exitRule(listener: lua_shListener): void {
		if (listener.exitAllow_empty_o_nempty_seplist_o__i__s__i__s_exp_p__p_) {
			listener.exitAllow_empty_o_nempty_seplist_o__i__s__i__s_exp_p__p_(this);
		}
	}
}


export class Seplist_o__i__s__i__s_exp_p_Context extends ParserRuleContext {
	public result: number;
	public allow_empty_o_nempty_seplist_o__i__s__i__s_exp_p__p_(): Allow_empty_o_nempty_seplist_o__i__s__i__s_exp_p__p_Context {
		return this.getRuleContext(0, Allow_empty_o_nempty_seplist_o__i__s__i__s_exp_p__p_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lua_shParser.RULE_seplist_o__i__s__i__s_exp_p_; }
	// @Override
	public enterRule(listener: lua_shListener): void {
		if (listener.enterSeplist_o__i__s__i__s_exp_p_) {
			listener.enterSeplist_o__i__s__i__s_exp_p_(this);
		}
	}
	// @Override
	public exitRule(listener: lua_shListener): void {
		if (listener.exitSeplist_o__i__s__i__s_exp_p_) {
			listener.exitSeplist_o__i__s__i__s_exp_p_(this);
		}
	}
}


export class ArgsContext extends ParserRuleContext {
	public result: number;
	public _args_0__1!: Token;
	public _args_0__3!: Token;
	public _args_2__1!: Token;
	public seplist_o__i__s__i__s_exp_p_(): Seplist_o__i__s__i__s_exp_p_Context | undefined {
		return this.tryGetRuleContext(0, Seplist_o__i__s__i__s_exp_p_Context);
	}
	public tableconstructor(): TableconstructorContext | undefined {
		return this.tryGetRuleContext(0, TableconstructorContext);
	}
	public STR_LIT(): TerminalNode | undefined { return this.tryGetToken(lua_shParser.STR_LIT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lua_shParser.RULE_args; }
	// @Override
	public enterRule(listener: lua_shListener): void {
		if (listener.enterArgs) {
			listener.enterArgs(this);
		}
	}
	// @Override
	public exitRule(listener: lua_shListener): void {
		if (listener.exitArgs) {
			listener.exitArgs(this);
		}
	}
}


export class Opt_o_funcname_p_Context extends ParserRuleContext {
	public result: number;
	public funcname(): FuncnameContext | undefined {
		return this.tryGetRuleContext(0, FuncnameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lua_shParser.RULE_opt_o_funcname_p_; }
	// @Override
	public enterRule(listener: lua_shListener): void {
		if (listener.enterOpt_o_funcname_p_) {
			listener.enterOpt_o_funcname_p_(this);
		}
	}
	// @Override
	public exitRule(listener: lua_shListener): void {
		if (listener.exitOpt_o_funcname_p_) {
			listener.exitOpt_o_funcname_p_(this);
		}
	}
}


export class Opt_o_parlist_p_Context extends ParserRuleContext {
	public result: number;
	public parlist(): ParlistContext | undefined {
		return this.tryGetRuleContext(0, ParlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lua_shParser.RULE_opt_o_parlist_p_; }
	// @Override
	public enterRule(listener: lua_shListener): void {
		if (listener.enterOpt_o_parlist_p_) {
			listener.enterOpt_o_parlist_p_(this);
		}
	}
	// @Override
	public exitRule(listener: lua_shListener): void {
		if (listener.exitOpt_o_parlist_p_) {
			listener.exitOpt_o_parlist_p_(this);
		}
	}
}


export class FunctiondefContext extends ParserRuleContext {
	public result: number;
	public _functiondef_0__1!: Token;
	public _functiondef_0__3!: Token;
	public _functiondef_0__5!: Token;
	public _functiondef_0__7!: Token;
	public opt_o_funcname_p_(): Opt_o_funcname_p_Context {
		return this.getRuleContext(0, Opt_o_funcname_p_Context);
	}
	public opt_o_parlist_p_(): Opt_o_parlist_p_Context {
		return this.getRuleContext(0, Opt_o_parlist_p_Context);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lua_shParser.RULE_functiondef; }
	// @Override
	public enterRule(listener: lua_shListener): void {
		if (listener.enterFunctiondef) {
			listener.enterFunctiondef(this);
		}
	}
	// @Override
	public exitRule(listener: lua_shListener): void {
		if (listener.exitFunctiondef) {
			listener.exitFunctiondef(this);
		}
	}
}


export class VarargsContext extends ParserRuleContext {
	public result: number;
	public _varargs_0__2!: Token;
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lua_shParser.RULE_varargs; }
	// @Override
	public enterRule(listener: lua_shListener): void {
		if (listener.enterVarargs) {
			listener.enterVarargs(this);
		}
	}
	// @Override
	public exitRule(listener: lua_shListener): void {
		if (listener.exitVarargs) {
			listener.exitVarargs(this);
		}
	}
}


export class Nempty_seplist_o__i__s__i__s_name_p_Context extends ParserRuleContext {
	public result: number;
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	public nempty_seplist_o__i__s__i__s_name_p_(): Nempty_seplist_o__i__s__i__s_name_p_Context | undefined {
		return this.tryGetRuleContext(0, Nempty_seplist_o__i__s__i__s_name_p_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lua_shParser.RULE_nempty_seplist_o__i__s__i__s_name_p_; }
	// @Override
	public enterRule(listener: lua_shListener): void {
		if (listener.enterNempty_seplist_o__i__s__i__s_name_p_) {
			listener.enterNempty_seplist_o__i__s__i__s_name_p_(this);
		}
	}
	// @Override
	public exitRule(listener: lua_shListener): void {
		if (listener.exitNempty_seplist_o__i__s__i__s_name_p_) {
			listener.exitNempty_seplist_o__i__s__i__s_name_p_(this);
		}
	}
}


export class ParlistContext extends ParserRuleContext {
	public result: number;
	public nempty_seplist_o__i__s__i__s_name_p_(): Nempty_seplist_o__i__s__i__s_name_p_Context | undefined {
		return this.tryGetRuleContext(0, Nempty_seplist_o__i__s__i__s_name_p_Context);
	}
	public varargs(): VarargsContext | undefined {
		return this.tryGetRuleContext(0, VarargsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lua_shParser.RULE_parlist; }
	// @Override
	public enterRule(listener: lua_shListener): void {
		if (listener.enterParlist) {
			listener.enterParlist(this);
		}
	}
	// @Override
	public exitRule(listener: lua_shListener): void {
		if (listener.exitParlist) {
			listener.exitParlist(this);
		}
	}
}


export class Nempty_seplist_o_fieldsep_s_field_p_Context extends ParserRuleContext {
	public result: number;
	public field(): FieldContext {
		return this.getRuleContext(0, FieldContext);
	}
	public nempty_seplist_o_fieldsep_s_field_p_(): Nempty_seplist_o_fieldsep_s_field_p_Context | undefined {
		return this.tryGetRuleContext(0, Nempty_seplist_o_fieldsep_s_field_p_Context);
	}
	public fieldsep(): FieldsepContext | undefined {
		return this.tryGetRuleContext(0, FieldsepContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lua_shParser.RULE_nempty_seplist_o_fieldsep_s_field_p_; }
	// @Override
	public enterRule(listener: lua_shListener): void {
		if (listener.enterNempty_seplist_o_fieldsep_s_field_p_) {
			listener.enterNempty_seplist_o_fieldsep_s_field_p_(this);
		}
	}
	// @Override
	public exitRule(listener: lua_shListener): void {
		if (listener.exitNempty_seplist_o_fieldsep_s_field_p_) {
			listener.exitNempty_seplist_o_fieldsep_s_field_p_(this);
		}
	}
}


export class Opt_o_fieldsep_p_Context extends ParserRuleContext {
	public result: number;
	public fieldsep(): FieldsepContext | undefined {
		return this.tryGetRuleContext(0, FieldsepContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lua_shParser.RULE_opt_o_fieldsep_p_; }
	// @Override
	public enterRule(listener: lua_shListener): void {
		if (listener.enterOpt_o_fieldsep_p_) {
			listener.enterOpt_o_fieldsep_p_(this);
		}
	}
	// @Override
	public exitRule(listener: lua_shListener): void {
		if (listener.exitOpt_o_fieldsep_p_) {
			listener.exitOpt_o_fieldsep_p_(this);
		}
	}
}


export class TableconstructorContext extends ParserRuleContext {
	public result: number;
	public nempty_seplist_o_fieldsep_s_field_p_(): Nempty_seplist_o_fieldsep_s_field_p_Context | undefined {
		return this.tryGetRuleContext(0, Nempty_seplist_o_fieldsep_s_field_p_Context);
	}
	public opt_o_fieldsep_p_(): Opt_o_fieldsep_p_Context | undefined {
		return this.tryGetRuleContext(0, Opt_o_fieldsep_p_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lua_shParser.RULE_tableconstructor; }
	// @Override
	public enterRule(listener: lua_shListener): void {
		if (listener.enterTableconstructor) {
			listener.enterTableconstructor(this);
		}
	}
	// @Override
	public exitRule(listener: lua_shListener): void {
		if (listener.exitTableconstructor) {
			listener.exitTableconstructor(this);
		}
	}
}


export class FuncnameContext extends ParserRuleContext {
	public result: number;
	public _funcname_2__1!: Token;
	public _funcname_0__3!: Token;
	public _funcname_1__3!: Token;
	public funcname(): FuncnameContext | undefined {
		return this.tryGetRuleContext(0, FuncnameContext);
	}
	public NAME(): TerminalNode { return this.getToken(lua_shParser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lua_shParser.RULE_funcname; }
	// @Override
	public enterRule(listener: lua_shListener): void {
		if (listener.enterFuncname) {
			listener.enterFuncname(this);
		}
	}
	// @Override
	public exitRule(listener: lua_shListener): void {
		if (listener.exitFuncname) {
			listener.exitFuncname(this);
		}
	}
}


export class FieldContext extends ParserRuleContext {
	public result: number;
	public _field_1__1!: Token;
	public exp(): ExpContext[];
	public exp(i: number): ExpContext;
	public exp(i?: number): ExpContext | ExpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpContext);
		} else {
			return this.getRuleContext(i, ExpContext);
		}
	}
	public NAME(): TerminalNode | undefined { return this.tryGetToken(lua_shParser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lua_shParser.RULE_field; }
	// @Override
	public enterRule(listener: lua_shListener): void {
		if (listener.enterField) {
			listener.enterField(this);
		}
	}
	// @Override
	public exitRule(listener: lua_shListener): void {
		if (listener.exitField) {
			listener.exitField(this);
		}
	}
}


export class FieldsepContext extends ParserRuleContext {
	public result: number;
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lua_shParser.RULE_fieldsep; }
	// @Override
	public enterRule(listener: lua_shListener): void {
		if (listener.enterFieldsep) {
			listener.enterFieldsep(this);
		}
	}
	// @Override
	public exitRule(listener: lua_shListener): void {
		if (listener.exitFieldsep) {
			listener.exitFieldsep(this);
		}
	}
}


export class BinopContext extends ParserRuleContext {
	public result: number;
	public _binop_0__1!: Token;
	public _binop_1__1!: Token;
	public _binop_2__1!: Token;
	public _binop_3__1!: Token;
	public _binop_4__1!: Token;
	public _binop_5__1!: Token;
	public _binop_6__1!: Token;
	public _binop_7__1!: Token;
	public _binop_8__1!: Token;
	public _binop_9__1!: Token;
	public _binop_10__1!: Token;
	public _binop_11__1!: Token;
	public _binop_12__1!: Token;
	public _binop_13__1!: Token;
	public _binop_14__1!: Token;
	public _binop_15__1!: Token;
	public _binop_16__1!: Token;
	public _binop_17__1!: Token;
	public _binop_18__1!: Token;
	public _binop_19__1!: Token;
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return lua_shParser.RULE_binop; }
	// @Override
	public enterRule(listener: lua_shListener): void {
		if (listener.enterBinop) {
			listener.enterBinop(this);
		}
	}
	// @Override
	public exitRule(listener: lua_shListener): void {
		if (listener.exitBinop) {
			listener.exitBinop(this);
		}
	}
}



// Generated from .\src\SH.g4 by ANTLR 4.9.0-SNAPSHOT


import { SH } from "./SH_require"


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

import { SHListener } from "./SHListener";

export class SHParser extends Parser {
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
	public static readonly VERSION = 16;
	public static readonly EXP = 17;
	public static readonly STR = 18;
	public static readonly SPACE = 19;
	public static readonly LINE_COMMENT = 20;
	public static readonly ID = 21;
	public static readonly RULE_start = 0;
	public static readonly RULE_start__y_ = 1;
	public static readonly RULE_op = 2;
	public static readonly RULE_version = 3;
	public static readonly RULE_specifier = 4;
	public static readonly RULE_specifier_set = 5;
	public static readonly RULE_comment = 6;
	public static readonly RULE_id = 7;
	public static readonly RULE_list_o_component_p_ = 8;
	public static readonly RULE_comp = 9;
	public static readonly RULE_list_o_comment_p_ = 10;
	public static readonly RULE_component = 11;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"start", "start__y_", "op", "version", "specifier", "specifier_set", "comment", 
		"id", "list_o_component_p_", "comp", "list_o_comment_p_", "component",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'format'", "'=='", "'!='", "'>'", "'<'", "'>='", "'<='", "'~'", 
		"'^'", "'&&'", "'true'", "'false'", "'null'", "'{'", "'}'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "VERSION", "EXP", "STR", "SPACE", "LINE_COMMENT", 
		"ID",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(SHParser._LITERAL_NAMES, SHParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return SHParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "SH.g4"; }

	// @Override
	public get ruleNames(): string[] { return SHParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return SHParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(SHParser._ATN, this);
	}
	// @RuleVersion(0)
	public start(): StartContext {
		let _localctx: StartContext = new StartContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, SHParser.RULE_start);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 24;
			_localctx._v = this.start__y_();
			this.state = 25;
			this.match(SHParser.EOF);
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
		this.enterRule(_localctx, 2, SHParser.RULE_start__y_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 28;
			_localctx._start__y__0__1 = this.match(SHParser.T__0);
			this.state = 29;
			this.version();
			this.state = 30;
			this.component();
			 
			                _localctx.result =  <number> SH(<Token> _localctx._start__y__0__1, <string> "namespace");
			            
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
	public op(): OpContext {
		let _localctx: OpContext = new OpContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, SHParser.RULE_op);
		try {
			this.state = 49;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SHParser.T__1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 33;
				_localctx._op_0__1 = this.match(SHParser.T__1);
				 
				                _localctx.result =  <number> SH(<Token> _localctx._op_0__1, <string> "operator");
				            
				}
				break;
			case SHParser.T__2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 35;
				_localctx._op_1__1 = this.match(SHParser.T__2);
				 
				                _localctx.result =  <number> SH(<Token> _localctx._op_1__1, <string> "operator");
				            
				}
				break;
			case SHParser.T__3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 37;
				_localctx._op_2__1 = this.match(SHParser.T__3);
				 
				                _localctx.result =  <number> SH(<Token> _localctx._op_2__1, <string> "operator");
				            
				}
				break;
			case SHParser.T__4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 39;
				_localctx._op_3__1 = this.match(SHParser.T__4);
				 
				                _localctx.result =  <number> SH(<Token> _localctx._op_3__1, <string> "operator");
				            
				}
				break;
			case SHParser.T__5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 41;
				_localctx._op_4__1 = this.match(SHParser.T__5);
				 
				                _localctx.result =  <number> SH(<Token> _localctx._op_4__1, <string> "operator");
				            
				}
				break;
			case SHParser.T__6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 43;
				_localctx._op_5__1 = this.match(SHParser.T__6);
				 
				                _localctx.result =  <number> SH(<Token> _localctx._op_5__1, <string> "operator");
				            
				}
				break;
			case SHParser.T__7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 45;
				_localctx._op_6__1 = this.match(SHParser.T__7);
				 
				                _localctx.result =  <number> SH(<Token> _localctx._op_6__1, <string> "operator");
				            
				}
				break;
			case SHParser.T__8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 47;
				_localctx._op_7__1 = this.match(SHParser.T__8);
				 
				                _localctx.result =  <number> SH(<Token> _localctx._op_7__1, <string> "operator");
				            
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
	public version(): VersionContext {
		let _localctx: VersionContext = new VersionContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, SHParser.RULE_version);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 51;
			_localctx._version_0__1 = this.match(SHParser.VERSION);
			 
			                _localctx.result =  <number> SH(<Token> _localctx._version_0__1, <string> "regexp");
			            
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
	public specifier(): SpecifierContext {
		let _localctx: SpecifierContext = new SpecifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, SHParser.RULE_specifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 54;
			this.op();
			this.state = 55;
			this.version();
			 
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

	public specifier_set(): Specifier_setContext;
	public specifier_set(_p: number): Specifier_setContext;
	// @RuleVersion(0)
	public specifier_set(_p?: number): Specifier_setContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Specifier_setContext = new Specifier_setContext(this._ctx, _parentState);
		let _prevctx: Specifier_setContext = _localctx;
		let _startState: number = 10;
		this.enterRecursionRule(_localctx, 10, SHParser.RULE_specifier_set, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 59;
			this.specifier();
			 
			                _localctx.result =  0;
			            
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 69;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Specifier_setContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, SHParser.RULE_specifier_set);
					this.state = 62;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 63;
					_localctx._specifier_set_1__2 = this.match(SHParser.T__9);
					this.state = 64;
					this.specifier();
					 
					                          _localctx.result =  <number> SH(<Token> _localctx._specifier_set_1__2, <string> "enum");
					                      
					}
					}
				}
				this.state = 71;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
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
	public comment(): CommentContext {
		let _localctx: CommentContext = new CommentContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, SHParser.RULE_comment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 72;
			_localctx._comment_0__1 = this.match(SHParser.LINE_COMMENT);
			 
			                _localctx.result =  <number> SH(<Token> _localctx._comment_0__1, <string> "comment");
			            
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
	public id(): IdContext {
		let _localctx: IdContext = new IdContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, SHParser.RULE_id);
		try {
			this.state = 79;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SHParser.T__0:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 75;
				_localctx._id_0__1 = this.match(SHParser.T__0);
				 
				                _localctx.result =  <number> SH(<Token> _localctx._id_0__1, <string> "variable");
				            
				}
				break;
			case SHParser.ID:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 77;
				_localctx._id_1__1 = this.match(SHParser.ID);
				 
				                _localctx.result =  <number> SH(<Token> _localctx._id_1__1, <string> "variable");
				            
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

	public list_o_component_p_(): List_o_component_p_Context;
	public list_o_component_p_(_p: number): List_o_component_p_Context;
	// @RuleVersion(0)
	public list_o_component_p_(_p?: number): List_o_component_p_Context {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: List_o_component_p_Context = new List_o_component_p_Context(this._ctx, _parentState);
		let _prevctx: List_o_component_p_Context = _localctx;
		let _startState: number = 16;
		this.enterRecursionRule(_localctx, 16, SHParser.RULE_list_o_component_p_, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 82;
			this.component();
			 
			                _localctx.result =  0;
			            
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 91;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new List_o_component_p_Context(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, SHParser.RULE_list_o_component_p_);
					this.state = 85;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 86;
					this.component();
					 
					                          _localctx.result =  0;
					                      
					}
					}
				}
				this.state = 93;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
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
	public comp(): CompContext {
		let _localctx: CompContext = new CompContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, SHParser.RULE_comp);
		try {
			this.state = 122;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 94;
				_localctx._comp_0__1 = this.match(SHParser.EXP);
				 
				                _localctx.result =  <number> SH(<Token> _localctx._comp_0__1, <string> "number");
				            
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 96;
				_localctx._comp_1__1 = this.match(SHParser.STR);
				 
				                _localctx.result =  <number> SH(<Token> _localctx._comp_1__1, <string> "string");
				            
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 98;
				_localctx._comp_2__1 = this.match(SHParser.T__10);
				 
				                _localctx.result =  <number> SH(<Token> _localctx._comp_2__1, <string> "struct");
				            
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 100;
				_localctx._comp_3__1 = this.match(SHParser.T__11);
				 
				                _localctx.result =  <number> SH(<Token> _localctx._comp_3__1, <string> "struct");
				            
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 102;
				_localctx._comp_4__1 = this.match(SHParser.T__12);
				 
				                _localctx.result =  <number> SH(<Token> _localctx._comp_4__1, <string> "struct");
				            
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 104;
				this.version();
				 
				                _localctx.result =  0;
				            
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 107;
				this.specifier_set(0);
				 
				                _localctx.result =  0;
				            
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 110;
				this.id();
				this.state = 111;
				this.comp();
				 
				                _localctx.result =  0;
				            
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 114;
				_localctx._comp_8__1 = this.match(SHParser.T__13);
				this.state = 115;
				this.list_o_component_p_(0);
				this.state = 116;
				_localctx._comp_8__3 = this.match(SHParser.T__14);
				 
				                let _ : number = <number> SH(<Token> _localctx._comp_8__1, <string> "class");
				                _localctx.result =  <number> SH(<Token> _localctx._comp_8__3, <string> "class");
				            
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 119;
				_localctx._comp_9__1 = this.match(SHParser.T__13);
				this.state = 120;
				_localctx._comp_9__2 = this.match(SHParser.T__14);
				 
				                let ___98_ : number = <number> SH(<Token> _localctx._comp_9__1, <string> "class");
				                _localctx.result =  <number> SH(<Token> _localctx._comp_9__2, <string> "class");
				            
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

	public list_o_comment_p_(): List_o_comment_p_Context;
	public list_o_comment_p_(_p: number): List_o_comment_p_Context;
	// @RuleVersion(0)
	public list_o_comment_p_(_p?: number): List_o_comment_p_Context {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: List_o_comment_p_Context = new List_o_comment_p_Context(this._ctx, _parentState);
		let _prevctx: List_o_comment_p_Context = _localctx;
		let _startState: number = 20;
		this.enterRecursionRule(_localctx, 20, SHParser.RULE_list_o_comment_p_, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 125;
			this.comment();
			 
			                _localctx.result =  0;
			            
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 134;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new List_o_comment_p_Context(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, SHParser.RULE_list_o_comment_p_);
					this.state = 128;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 129;
					this.comment();
					 
					                          _localctx.result =  0;
					                      
					}
					}
				}
				this.state = 136;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
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
	public component(): ComponentContext {
		let _localctx: ComponentContext = new ComponentContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, SHParser.RULE_component);
		try {
			this.state = 144;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SHParser.T__0:
			case SHParser.T__1:
			case SHParser.T__2:
			case SHParser.T__3:
			case SHParser.T__4:
			case SHParser.T__5:
			case SHParser.T__6:
			case SHParser.T__7:
			case SHParser.T__8:
			case SHParser.T__10:
			case SHParser.T__11:
			case SHParser.T__12:
			case SHParser.T__13:
			case SHParser.VERSION:
			case SHParser.EXP:
			case SHParser.STR:
			case SHParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 137;
				this.comp();
				 
				                _localctx.result =  0;
				            
				}
				break;
			case SHParser.LINE_COMMENT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 140;
				this.list_o_comment_p_(0);
				this.state = 141;
				this.comp();
				 
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 5:
			return this.specifier_set_sempred(_localctx as Specifier_setContext, predIndex);

		case 8:
			return this.list_o_component_p__sempred(_localctx as List_o_component_p_Context, predIndex);

		case 10:
			return this.list_o_comment_p__sempred(_localctx as List_o_comment_p_Context, predIndex);
		}
		return true;
	}
	private specifier_set_sempred(_localctx: Specifier_setContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private list_o_component_p__sempred(_localctx: List_o_component_p_Context, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private list_o_comment_p__sempred(_localctx: List_o_comment_p_Context, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x17\x95\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x044\n\x04\x03" +
		"\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07F\n\x07\f" +
		"\x07\x0E\x07I\v\x07\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x05\tR\n" +
		"\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x07\n\\\n\n\f\n\x0E" +
		"\n_\v\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v}\n\v\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x07\f\x87\n\f\f\f\x0E\f\x8A\v\f\x03\r\x03\r\x03\r" +
		"\x03\r\x03\r\x03\r\x03\r\x05\r\x93\n\r\x03\r\x02\x02\x05\f\x12\x16\x0E" +
		"\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14" +
		"\x02\x16\x02\x18\x02\x02\x02\x02\x9D\x02\x1A\x03\x02\x02\x02\x04\x1E\x03" +
		"\x02\x02\x02\x063\x03\x02\x02\x02\b5\x03\x02\x02\x02\n8\x03\x02\x02\x02" +
		"\f<\x03\x02\x02\x02\x0EJ\x03\x02\x02\x02\x10Q\x03\x02\x02\x02\x12S\x03" +
		"\x02\x02\x02\x14|\x03\x02\x02\x02\x16~\x03\x02\x02\x02\x18\x92\x03\x02" +
		"\x02\x02\x1A\x1B\x05\x04\x03\x02\x1B\x1C\x07\x02\x02\x03\x1C\x1D\b\x02" +
		"\x01\x02\x1D\x03\x03\x02\x02\x02\x1E\x1F\x07\x03\x02\x02\x1F \x05\b\x05" +
		"\x02 !\x05\x18\r\x02!\"\b\x03\x01\x02\"\x05\x03\x02\x02\x02#$\x07\x04" +
		"\x02\x02$4\b\x04\x01\x02%&\x07\x05\x02\x02&4\b\x04\x01\x02\'(\x07\x06" +
		"\x02\x02(4\b\x04\x01\x02)*\x07\x07\x02\x02*4\b\x04\x01\x02+,\x07\b\x02" +
		"\x02,4\b\x04\x01\x02-.\x07\t\x02\x02.4\b\x04\x01\x02/0\x07\n\x02\x020" +
		"4\b\x04\x01\x0212\x07\v\x02\x0224\b\x04\x01\x023#\x03\x02\x02\x023%\x03" +
		"\x02\x02\x023\'\x03\x02\x02\x023)\x03\x02\x02\x023+\x03\x02\x02\x023-" +
		"\x03\x02\x02\x023/\x03\x02\x02\x0231\x03\x02\x02\x024\x07\x03\x02\x02" +
		"\x0256\x07\x12\x02\x0267\b\x05\x01\x027\t\x03\x02\x02\x0289\x05\x06\x04" +
		"\x029:\x05\b\x05\x02:;\b\x06\x01\x02;\v\x03\x02\x02\x02<=\b\x07\x01\x02" +
		"=>\x05\n\x06\x02>?\b\x07\x01\x02?G\x03\x02\x02\x02@A\f\x03\x02\x02AB\x07" +
		"\f\x02\x02BC\x05\n\x06\x02CD\b\x07\x01\x02DF\x03\x02\x02\x02E@\x03\x02" +
		"\x02\x02FI\x03\x02\x02\x02GE\x03\x02\x02\x02GH\x03\x02\x02\x02H\r\x03" +
		"\x02\x02\x02IG\x03\x02\x02\x02JK\x07\x16\x02\x02KL\b\b\x01\x02L\x0F\x03" +
		"\x02\x02\x02MN\x07\x03\x02\x02NR\b\t\x01\x02OP\x07\x17\x02\x02PR\b\t\x01" +
		"\x02QM\x03\x02\x02\x02QO\x03\x02\x02\x02R\x11\x03\x02\x02\x02ST\b\n\x01" +
		"\x02TU\x05\x18\r\x02UV\b\n\x01\x02V]\x03\x02\x02\x02WX\f\x03\x02\x02X" +
		"Y\x05\x18\r\x02YZ\b\n\x01\x02Z\\\x03\x02\x02\x02[W\x03\x02\x02\x02\\_" +
		"\x03\x02\x02\x02][\x03\x02\x02\x02]^\x03\x02\x02\x02^\x13\x03\x02\x02" +
		"\x02_]\x03\x02\x02\x02`a\x07\x13\x02\x02a}\b\v\x01\x02bc\x07\x14\x02\x02" +
		"c}\b\v\x01\x02de\x07\r\x02\x02e}\b\v\x01\x02fg\x07\x0E\x02\x02g}\b\v\x01" +
		"\x02hi\x07\x0F\x02\x02i}\b\v\x01\x02jk\x05\b\x05\x02kl\b\v\x01\x02l}\x03" +
		"\x02\x02\x02mn\x05\f\x07\x02no\b\v\x01\x02o}\x03\x02\x02\x02pq\x05\x10" +
		"\t\x02qr\x05\x14\v\x02rs\b\v\x01\x02s}\x03\x02\x02\x02tu\x07\x10\x02\x02" +
		"uv\x05\x12\n\x02vw\x07\x11\x02\x02wx\b\v\x01\x02x}\x03\x02\x02\x02yz\x07" +
		"\x10\x02\x02z{\x07\x11\x02\x02{}\b\v\x01\x02|`\x03\x02\x02\x02|b\x03\x02" +
		"\x02\x02|d\x03\x02\x02\x02|f\x03\x02\x02\x02|h\x03\x02\x02\x02|j\x03\x02" +
		"\x02\x02|m\x03\x02\x02\x02|p\x03\x02\x02\x02|t\x03\x02\x02\x02|y\x03\x02" +
		"\x02\x02}\x15\x03\x02\x02\x02~\x7F\b\f\x01\x02\x7F\x80\x05\x0E\b\x02\x80" +
		"\x81\b\f\x01\x02\x81\x88\x03\x02\x02\x02\x82\x83\f\x03\x02\x02\x83\x84" +
		"\x05\x0E\b\x02\x84\x85\b\f\x01\x02\x85\x87\x03\x02\x02\x02\x86\x82\x03" +
		"\x02\x02\x02\x87\x8A\x03\x02\x02\x02\x88\x86\x03\x02\x02\x02\x88\x89\x03" +
		"\x02\x02\x02\x89\x17\x03\x02\x02\x02\x8A\x88\x03\x02\x02\x02\x8B\x8C\x05" +
		"\x14\v\x02\x8C\x8D\b\r\x01\x02\x8D\x93\x03\x02\x02\x02\x8E\x8F\x05\x16" +
		"\f\x02\x8F\x90\x05\x14\v\x02\x90\x91\b\r\x01\x02\x91\x93\x03\x02\x02\x02" +
		"\x92\x8B\x03\x02\x02\x02\x92\x8E\x03\x02\x02\x02\x93\x19\x03\x02\x02\x02" +
		"\t3GQ]|\x88\x92";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SHParser.__ATN) {
			SHParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SHParser._serializedATN));
		}

		return SHParser.__ATN;
	}

}

export class StartContext extends ParserRuleContext {
	public result: number;
	public _v!: Start__y_Context;
	public EOF(): TerminalNode { return this.getToken(SHParser.EOF, 0); }
	public start__y_(): Start__y_Context {
		return this.getRuleContext(0, Start__y_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHParser.RULE_start; }
	// @Override
	public enterRule(listener: SHListener): void {
		if (listener.enterStart) {
			listener.enterStart(this);
		}
	}
	// @Override
	public exitRule(listener: SHListener): void {
		if (listener.exitStart) {
			listener.exitStart(this);
		}
	}
}


export class Start__y_Context extends ParserRuleContext {
	public result: number;
	public _start__y__0__1!: Token;
	public version(): VersionContext {
		return this.getRuleContext(0, VersionContext);
	}
	public component(): ComponentContext {
		return this.getRuleContext(0, ComponentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHParser.RULE_start__y_; }
	// @Override
	public enterRule(listener: SHListener): void {
		if (listener.enterStart__y_) {
			listener.enterStart__y_(this);
		}
	}
	// @Override
	public exitRule(listener: SHListener): void {
		if (listener.exitStart__y_) {
			listener.exitStart__y_(this);
		}
	}
}


export class OpContext extends ParserRuleContext {
	public result: number;
	public _op_0__1!: Token;
	public _op_1__1!: Token;
	public _op_2__1!: Token;
	public _op_3__1!: Token;
	public _op_4__1!: Token;
	public _op_5__1!: Token;
	public _op_6__1!: Token;
	public _op_7__1!: Token;
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHParser.RULE_op; }
	// @Override
	public enterRule(listener: SHListener): void {
		if (listener.enterOp) {
			listener.enterOp(this);
		}
	}
	// @Override
	public exitRule(listener: SHListener): void {
		if (listener.exitOp) {
			listener.exitOp(this);
		}
	}
}


export class VersionContext extends ParserRuleContext {
	public result: number;
	public _version_0__1!: Token;
	public VERSION(): TerminalNode { return this.getToken(SHParser.VERSION, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHParser.RULE_version; }
	// @Override
	public enterRule(listener: SHListener): void {
		if (listener.enterVersion) {
			listener.enterVersion(this);
		}
	}
	// @Override
	public exitRule(listener: SHListener): void {
		if (listener.exitVersion) {
			listener.exitVersion(this);
		}
	}
}


export class SpecifierContext extends ParserRuleContext {
	public result: number;
	public op(): OpContext {
		return this.getRuleContext(0, OpContext);
	}
	public version(): VersionContext {
		return this.getRuleContext(0, VersionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHParser.RULE_specifier; }
	// @Override
	public enterRule(listener: SHListener): void {
		if (listener.enterSpecifier) {
			listener.enterSpecifier(this);
		}
	}
	// @Override
	public exitRule(listener: SHListener): void {
		if (listener.exitSpecifier) {
			listener.exitSpecifier(this);
		}
	}
}


export class Specifier_setContext extends ParserRuleContext {
	public result: number;
	public _specifier_set_1__2!: Token;
	public specifier(): SpecifierContext {
		return this.getRuleContext(0, SpecifierContext);
	}
	public specifier_set(): Specifier_setContext | undefined {
		return this.tryGetRuleContext(0, Specifier_setContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHParser.RULE_specifier_set; }
	// @Override
	public enterRule(listener: SHListener): void {
		if (listener.enterSpecifier_set) {
			listener.enterSpecifier_set(this);
		}
	}
	// @Override
	public exitRule(listener: SHListener): void {
		if (listener.exitSpecifier_set) {
			listener.exitSpecifier_set(this);
		}
	}
}


export class CommentContext extends ParserRuleContext {
	public result: number;
	public _comment_0__1!: Token;
	public LINE_COMMENT(): TerminalNode { return this.getToken(SHParser.LINE_COMMENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHParser.RULE_comment; }
	// @Override
	public enterRule(listener: SHListener): void {
		if (listener.enterComment) {
			listener.enterComment(this);
		}
	}
	// @Override
	public exitRule(listener: SHListener): void {
		if (listener.exitComment) {
			listener.exitComment(this);
		}
	}
}


export class IdContext extends ParserRuleContext {
	public result: number;
	public _id_0__1!: Token;
	public _id_1__1!: Token;
	public ID(): TerminalNode | undefined { return this.tryGetToken(SHParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHParser.RULE_id; }
	// @Override
	public enterRule(listener: SHListener): void {
		if (listener.enterId) {
			listener.enterId(this);
		}
	}
	// @Override
	public exitRule(listener: SHListener): void {
		if (listener.exitId) {
			listener.exitId(this);
		}
	}
}


export class List_o_component_p_Context extends ParserRuleContext {
	public result: number;
	public component(): ComponentContext {
		return this.getRuleContext(0, ComponentContext);
	}
	public list_o_component_p_(): List_o_component_p_Context | undefined {
		return this.tryGetRuleContext(0, List_o_component_p_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHParser.RULE_list_o_component_p_; }
	// @Override
	public enterRule(listener: SHListener): void {
		if (listener.enterList_o_component_p_) {
			listener.enterList_o_component_p_(this);
		}
	}
	// @Override
	public exitRule(listener: SHListener): void {
		if (listener.exitList_o_component_p_) {
			listener.exitList_o_component_p_(this);
		}
	}
}


export class CompContext extends ParserRuleContext {
	public result: number;
	public _comp_0__1!: Token;
	public _comp_1__1!: Token;
	public _comp_2__1!: Token;
	public _comp_3__1!: Token;
	public _comp_4__1!: Token;
	public _comp_8__1!: Token;
	public _comp_8__3!: Token;
	public _comp_9__1!: Token;
	public _comp_9__2!: Token;
	public EXP(): TerminalNode | undefined { return this.tryGetToken(SHParser.EXP, 0); }
	public STR(): TerminalNode | undefined { return this.tryGetToken(SHParser.STR, 0); }
	public version(): VersionContext | undefined {
		return this.tryGetRuleContext(0, VersionContext);
	}
	public specifier_set(): Specifier_setContext | undefined {
		return this.tryGetRuleContext(0, Specifier_setContext);
	}
	public id(): IdContext | undefined {
		return this.tryGetRuleContext(0, IdContext);
	}
	public comp(): CompContext | undefined {
		return this.tryGetRuleContext(0, CompContext);
	}
	public list_o_component_p_(): List_o_component_p_Context | undefined {
		return this.tryGetRuleContext(0, List_o_component_p_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHParser.RULE_comp; }
	// @Override
	public enterRule(listener: SHListener): void {
		if (listener.enterComp) {
			listener.enterComp(this);
		}
	}
	// @Override
	public exitRule(listener: SHListener): void {
		if (listener.exitComp) {
			listener.exitComp(this);
		}
	}
}


export class List_o_comment_p_Context extends ParserRuleContext {
	public result: number;
	public comment(): CommentContext {
		return this.getRuleContext(0, CommentContext);
	}
	public list_o_comment_p_(): List_o_comment_p_Context | undefined {
		return this.tryGetRuleContext(0, List_o_comment_p_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHParser.RULE_list_o_comment_p_; }
	// @Override
	public enterRule(listener: SHListener): void {
		if (listener.enterList_o_comment_p_) {
			listener.enterList_o_comment_p_(this);
		}
	}
	// @Override
	public exitRule(listener: SHListener): void {
		if (listener.exitList_o_comment_p_) {
			listener.exitList_o_comment_p_(this);
		}
	}
}


export class ComponentContext extends ParserRuleContext {
	public result: number;
	public comp(): CompContext {
		return this.getRuleContext(0, CompContext);
	}
	public list_o_comment_p_(): List_o_comment_p_Context | undefined {
		return this.tryGetRuleContext(0, List_o_comment_p_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return SHParser.RULE_component; }
	// @Override
	public enterRule(listener: SHListener): void {
		if (listener.enterComponent) {
			listener.enterComponent(this);
		}
	}
	// @Override
	public exitRule(listener: SHListener): void {
		if (listener.exitComponent) {
			listener.exitComponent(this);
		}
	}
}



"use strict";
// Generated from .\src\SH.g4 by ANTLR 4.9.0-SNAPSHOT
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentContext = exports.List_o_comment_p_Context = exports.CompContext = exports.List_o_component_p_Context = exports.IdContext = exports.CommentContext = exports.Specifier_setContext = exports.SpecifierContext = exports.VersionContext = exports.OpContext = exports.Start__y_Context = exports.StartContext = exports.SHParser = void 0;
const SH_require_1 = require("./SH_require");
const ATN_1 = require("antlr4ts/atn/ATN");
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const FailedPredicateException_1 = require("antlr4ts/FailedPredicateException");
const NoViableAltException_1 = require("antlr4ts/NoViableAltException");
const Parser_1 = require("antlr4ts/Parser");
const ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
const ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
const RecognitionException_1 = require("antlr4ts/RecognitionException");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = require("antlr4ts/misc/Utils");
class SHParser extends Parser_1.Parser {
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(SHParser._ATN, this);
    }
    // @Override
    // @NotNull
    get vocabulary() {
        return SHParser.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace
    // @Override
    get grammarFileName() { return "SH.g4"; }
    // @Override
    get ruleNames() { return SHParser.ruleNames; }
    // @Override
    get serializedATN() { return SHParser._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new FailedPredicateException_1.FailedPredicateException(this, predicate, message);
    }
    // @RuleVersion(0)
    start() {
        let _localctx = new StartContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, SHParser.RULE_start);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 24;
                _localctx._v = this.start__y_();
                this.state = 25;
                this.match(SHParser.EOF);
                _localctx.result = _localctx._v.result;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    start__y_() {
        let _localctx = new Start__y_Context(this._ctx, this.state);
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
                _localctx.result = (0, SH_require_1.SH)(_localctx._start__y__0__1, "namespace");
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    op() {
        let _localctx = new OpContext(this._ctx, this.state);
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
                        _localctx.result = (0, SH_require_1.SH)(_localctx._op_0__1, "operator");
                    }
                    break;
                case SHParser.T__2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 35;
                        _localctx._op_1__1 = this.match(SHParser.T__2);
                        _localctx.result = (0, SH_require_1.SH)(_localctx._op_1__1, "operator");
                    }
                    break;
                case SHParser.T__3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 37;
                        _localctx._op_2__1 = this.match(SHParser.T__3);
                        _localctx.result = (0, SH_require_1.SH)(_localctx._op_2__1, "operator");
                    }
                    break;
                case SHParser.T__4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 39;
                        _localctx._op_3__1 = this.match(SHParser.T__4);
                        _localctx.result = (0, SH_require_1.SH)(_localctx._op_3__1, "operator");
                    }
                    break;
                case SHParser.T__5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 41;
                        _localctx._op_4__1 = this.match(SHParser.T__5);
                        _localctx.result = (0, SH_require_1.SH)(_localctx._op_4__1, "operator");
                    }
                    break;
                case SHParser.T__6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 43;
                        _localctx._op_5__1 = this.match(SHParser.T__6);
                        _localctx.result = (0, SH_require_1.SH)(_localctx._op_5__1, "operator");
                    }
                    break;
                case SHParser.T__7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 45;
                        _localctx._op_6__1 = this.match(SHParser.T__7);
                        _localctx.result = (0, SH_require_1.SH)(_localctx._op_6__1, "operator");
                    }
                    break;
                case SHParser.T__8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 47;
                        _localctx._op_7__1 = this.match(SHParser.T__8);
                        _localctx.result = (0, SH_require_1.SH)(_localctx._op_7__1, "operator");
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    version() {
        let _localctx = new VersionContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, SHParser.RULE_version);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 51;
                _localctx._version_0__1 = this.match(SHParser.VERSION);
                _localctx.result = (0, SH_require_1.SH)(_localctx._version_0__1, "regexp");
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    specifier() {
        let _localctx = new SpecifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, SHParser.RULE_specifier);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 54;
                this.op();
                this.state = 55;
                this.version();
                _localctx.result = 0;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    specifier_set(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new Specifier_setContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 10;
        this.enterRecursionRule(_localctx, 10, SHParser.RULE_specifier_set, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 59;
                    this.specifier();
                    _localctx.result = 0;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 69;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
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
                                _localctx.result = (0, SH_require_1.SH)(_localctx._specifier_set_1__2, "enum");
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    // @RuleVersion(0)
    comment() {
        let _localctx = new CommentContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, SHParser.RULE_comment);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 72;
                _localctx._comment_0__1 = this.match(SHParser.LINE_COMMENT);
                _localctx.result = (0, SH_require_1.SH)(_localctx._comment_0__1, "comment");
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    id() {
        let _localctx = new IdContext(this._ctx, this.state);
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
                        _localctx.result = (0, SH_require_1.SH)(_localctx._id_0__1, "variable");
                    }
                    break;
                case SHParser.ID:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 77;
                        _localctx._id_1__1 = this.match(SHParser.ID);
                        _localctx.result = (0, SH_require_1.SH)(_localctx._id_1__1, "variable");
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    list_o_component_p_(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new List_o_component_p_Context(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 16;
        this.enterRecursionRule(_localctx, 16, SHParser.RULE_list_o_component_p_, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 82;
                    this.component();
                    _localctx.result = 0;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 91;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
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
                                _localctx.result = 0;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    // @RuleVersion(0)
    comp() {
        let _localctx = new CompContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, SHParser.RULE_comp);
        try {
            this.state = 122;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 4, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 94;
                        _localctx._comp_0__1 = this.match(SHParser.EXP);
                        _localctx.result = (0, SH_require_1.SH)(_localctx._comp_0__1, "number");
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 96;
                        _localctx._comp_1__1 = this.match(SHParser.STR);
                        _localctx.result = (0, SH_require_1.SH)(_localctx._comp_1__1, "string");
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 98;
                        _localctx._comp_2__1 = this.match(SHParser.T__10);
                        _localctx.result = (0, SH_require_1.SH)(_localctx._comp_2__1, "struct");
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 100;
                        _localctx._comp_3__1 = this.match(SHParser.T__11);
                        _localctx.result = (0, SH_require_1.SH)(_localctx._comp_3__1, "struct");
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 102;
                        _localctx._comp_4__1 = this.match(SHParser.T__12);
                        _localctx.result = (0, SH_require_1.SH)(_localctx._comp_4__1, "struct");
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 104;
                        this.version();
                        _localctx.result = 0;
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 107;
                        this.specifier_set(0);
                        _localctx.result = 0;
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 110;
                        this.id();
                        this.state = 111;
                        this.comp();
                        _localctx.result = 0;
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
                        let _ = (0, SH_require_1.SH)(_localctx._comp_8__1, "class");
                        _localctx.result = (0, SH_require_1.SH)(_localctx._comp_8__3, "class");
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 119;
                        _localctx._comp_9__1 = this.match(SHParser.T__13);
                        this.state = 120;
                        _localctx._comp_9__2 = this.match(SHParser.T__14);
                        let ___98_ = (0, SH_require_1.SH)(_localctx._comp_9__1, "class");
                        _localctx.result = (0, SH_require_1.SH)(_localctx._comp_9__2, "class");
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    list_o_comment_p_(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new List_o_comment_p_Context(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 20;
        this.enterRecursionRule(_localctx, 20, SHParser.RULE_list_o_comment_p_, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 125;
                    this.comment();
                    _localctx.result = 0;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 134;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
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
                                _localctx.result = 0;
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    // @RuleVersion(0)
    component() {
        let _localctx = new ComponentContext(this._ctx, this.state);
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
                        _localctx.result = 0;
                    }
                    break;
                case SHParser.LINE_COMMENT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 140;
                        this.list_o_comment_p_(0);
                        this.state = 141;
                        this.comp();
                        _localctx.result = 0;
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    sempred(_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 5:
                return this.specifier_set_sempred(_localctx, predIndex);
            case 8:
                return this.list_o_component_p__sempred(_localctx, predIndex);
            case 10:
                return this.list_o_comment_p__sempred(_localctx, predIndex);
        }
        return true;
    }
    specifier_set_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    list_o_component_p__sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 1:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    list_o_comment_p__sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 2:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    static get _ATN() {
        if (!SHParser.__ATN) {
            SHParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(SHParser._serializedATN));
        }
        return SHParser.__ATN;
    }
}
exports.SHParser = SHParser;
SHParser.T__0 = 1;
SHParser.T__1 = 2;
SHParser.T__2 = 3;
SHParser.T__3 = 4;
SHParser.T__4 = 5;
SHParser.T__5 = 6;
SHParser.T__6 = 7;
SHParser.T__7 = 8;
SHParser.T__8 = 9;
SHParser.T__9 = 10;
SHParser.T__10 = 11;
SHParser.T__11 = 12;
SHParser.T__12 = 13;
SHParser.T__13 = 14;
SHParser.T__14 = 15;
SHParser.VERSION = 16;
SHParser.EXP = 17;
SHParser.STR = 18;
SHParser.SPACE = 19;
SHParser.LINE_COMMENT = 20;
SHParser.ID = 21;
SHParser.RULE_start = 0;
SHParser.RULE_start__y_ = 1;
SHParser.RULE_op = 2;
SHParser.RULE_version = 3;
SHParser.RULE_specifier = 4;
SHParser.RULE_specifier_set = 5;
SHParser.RULE_comment = 6;
SHParser.RULE_id = 7;
SHParser.RULE_list_o_component_p_ = 8;
SHParser.RULE_comp = 9;
SHParser.RULE_list_o_comment_p_ = 10;
SHParser.RULE_component = 11;
// tslint:disable:no-trailing-whitespace
SHParser.ruleNames = [
    "start", "start__y_", "op", "version", "specifier", "specifier_set", "comment",
    "id", "list_o_component_p_", "comp", "list_o_comment_p_", "component",
];
SHParser._LITERAL_NAMES = [
    undefined, "'format'", "'=='", "'!='", "'>'", "'<'", "'>='", "'<='", "'~'",
    "'^'", "'&&'", "'true'", "'false'", "'null'", "'{'", "'}'",
];
SHParser._SYMBOLIC_NAMES = [
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, undefined, undefined,
    undefined, undefined, "VERSION", "EXP", "STR", "SPACE", "LINE_COMMENT",
    "ID",
];
SHParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(SHParser._LITERAL_NAMES, SHParser._SYMBOLIC_NAMES, []);
SHParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x17\x95\x04\x02" +
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
class StartContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    EOF() { return this.getToken(SHParser.EOF, 0); }
    start__y_() {
        return this.getRuleContext(0, Start__y_Context);
    }
    // @Override
    get ruleIndex() { return SHParser.RULE_start; }
    // @Override
    enterRule(listener) {
        if (listener.enterStart) {
            listener.enterStart(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStart) {
            listener.exitStart(this);
        }
    }
}
exports.StartContext = StartContext;
class Start__y_Context extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    version() {
        return this.getRuleContext(0, VersionContext);
    }
    component() {
        return this.getRuleContext(0, ComponentContext);
    }
    // @Override
    get ruleIndex() { return SHParser.RULE_start__y_; }
    // @Override
    enterRule(listener) {
        if (listener.enterStart__y_) {
            listener.enterStart__y_(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStart__y_) {
            listener.exitStart__y_(this);
        }
    }
}
exports.Start__y_Context = Start__y_Context;
class OpContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return SHParser.RULE_op; }
    // @Override
    enterRule(listener) {
        if (listener.enterOp) {
            listener.enterOp(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOp) {
            listener.exitOp(this);
        }
    }
}
exports.OpContext = OpContext;
class VersionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    VERSION() { return this.getToken(SHParser.VERSION, 0); }
    // @Override
    get ruleIndex() { return SHParser.RULE_version; }
    // @Override
    enterRule(listener) {
        if (listener.enterVersion) {
            listener.enterVersion(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitVersion) {
            listener.exitVersion(this);
        }
    }
}
exports.VersionContext = VersionContext;
class SpecifierContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    op() {
        return this.getRuleContext(0, OpContext);
    }
    version() {
        return this.getRuleContext(0, VersionContext);
    }
    // @Override
    get ruleIndex() { return SHParser.RULE_specifier; }
    // @Override
    enterRule(listener) {
        if (listener.enterSpecifier) {
            listener.enterSpecifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSpecifier) {
            listener.exitSpecifier(this);
        }
    }
}
exports.SpecifierContext = SpecifierContext;
class Specifier_setContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    specifier() {
        return this.getRuleContext(0, SpecifierContext);
    }
    specifier_set() {
        return this.tryGetRuleContext(0, Specifier_setContext);
    }
    // @Override
    get ruleIndex() { return SHParser.RULE_specifier_set; }
    // @Override
    enterRule(listener) {
        if (listener.enterSpecifier_set) {
            listener.enterSpecifier_set(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSpecifier_set) {
            listener.exitSpecifier_set(this);
        }
    }
}
exports.Specifier_setContext = Specifier_setContext;
class CommentContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    LINE_COMMENT() { return this.getToken(SHParser.LINE_COMMENT, 0); }
    // @Override
    get ruleIndex() { return SHParser.RULE_comment; }
    // @Override
    enterRule(listener) {
        if (listener.enterComment) {
            listener.enterComment(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitComment) {
            listener.exitComment(this);
        }
    }
}
exports.CommentContext = CommentContext;
class IdContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    ID() { return this.tryGetToken(SHParser.ID, 0); }
    // @Override
    get ruleIndex() { return SHParser.RULE_id; }
    // @Override
    enterRule(listener) {
        if (listener.enterId) {
            listener.enterId(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitId) {
            listener.exitId(this);
        }
    }
}
exports.IdContext = IdContext;
class List_o_component_p_Context extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    component() {
        return this.getRuleContext(0, ComponentContext);
    }
    list_o_component_p_() {
        return this.tryGetRuleContext(0, List_o_component_p_Context);
    }
    // @Override
    get ruleIndex() { return SHParser.RULE_list_o_component_p_; }
    // @Override
    enterRule(listener) {
        if (listener.enterList_o_component_p_) {
            listener.enterList_o_component_p_(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitList_o_component_p_) {
            listener.exitList_o_component_p_(this);
        }
    }
}
exports.List_o_component_p_Context = List_o_component_p_Context;
class CompContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    EXP() { return this.tryGetToken(SHParser.EXP, 0); }
    STR() { return this.tryGetToken(SHParser.STR, 0); }
    version() {
        return this.tryGetRuleContext(0, VersionContext);
    }
    specifier_set() {
        return this.tryGetRuleContext(0, Specifier_setContext);
    }
    id() {
        return this.tryGetRuleContext(0, IdContext);
    }
    comp() {
        return this.tryGetRuleContext(0, CompContext);
    }
    list_o_component_p_() {
        return this.tryGetRuleContext(0, List_o_component_p_Context);
    }
    // @Override
    get ruleIndex() { return SHParser.RULE_comp; }
    // @Override
    enterRule(listener) {
        if (listener.enterComp) {
            listener.enterComp(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitComp) {
            listener.exitComp(this);
        }
    }
}
exports.CompContext = CompContext;
class List_o_comment_p_Context extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    comment() {
        return this.getRuleContext(0, CommentContext);
    }
    list_o_comment_p_() {
        return this.tryGetRuleContext(0, List_o_comment_p_Context);
    }
    // @Override
    get ruleIndex() { return SHParser.RULE_list_o_comment_p_; }
    // @Override
    enterRule(listener) {
        if (listener.enterList_o_comment_p_) {
            listener.enterList_o_comment_p_(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitList_o_comment_p_) {
            listener.exitList_o_comment_p_(this);
        }
    }
}
exports.List_o_comment_p_Context = List_o_comment_p_Context;
class ComponentContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    comp() {
        return this.getRuleContext(0, CompContext);
    }
    list_o_comment_p_() {
        return this.tryGetRuleContext(0, List_o_comment_p_Context);
    }
    // @Override
    get ruleIndex() { return SHParser.RULE_component; }
    // @Override
    enterRule(listener) {
        if (listener.enterComponent) {
            listener.enterComponent(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitComponent) {
            listener.exitComponent(this);
        }
    }
}
exports.ComponentContext = ComponentContext;
//# sourceMappingURL=SHParser.js.map
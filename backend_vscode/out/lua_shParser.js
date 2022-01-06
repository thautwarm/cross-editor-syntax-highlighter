"use strict";
// Generated from .\lua_sh.g4 by ANTLR 4.9.0-SNAPSHOT
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinopContext = exports.FieldsepContext = exports.FieldContext = exports.FuncnameContext = exports.TableconstructorContext = exports.Opt_o_fieldsep_p_Context = exports.Nempty_seplist_o_fieldsep_s_field_p_Context = exports.ParlistContext = exports.Nempty_seplist_o__i__s__i__s_name_p_Context = exports.VarargsContext = exports.FunctiondefContext = exports.Opt_o_parlist_p_Context = exports.Opt_o_funcname_p_Context = exports.ArgsContext = exports.Seplist_o__i__s__i__s_exp_p_Context = exports.Allow_empty_o_nempty_seplist_o__i__s__i__s_exp_p__p_Context = exports.Nempty_seplist_o__i__s__i__s_exp_p_Context = exports.AtomContext = exports.PrefixexpContext = exports.ExponentContext = exports.UnaryexpContext = exports.BinoperandContext = exports.BinseqContext = exports.BinexpContext = exports.ExpContext = exports.Else__x_Context = exports.ElseifContext = exports.Range_tailContext = exports.RangeContext = exports.Opt_assign_rhsContext = exports.StatContext = exports.Nempty_seplist_o__i__s__i__s__i_name_k__p_Context = exports.Opt_o_else_p_Context = exports.List_o_elseif_p_Context = exports.Allow_empty_o_nempty_list_o_elseif_p__p_Context = exports.Nempty_list_o_elseif_p_Context = exports.NameContext = exports.RetstatContext = exports.RetcolonContext = exports.BlockContext = exports.Opt_o_retstat_p_Context = exports.List_o_stat_p_Context = exports.Allow_empty_o_nempty_list_o_stat_p__p_Context = exports.Nempty_list_o_stat_p_Context = exports.Start__y_Context = exports.StartContext = exports.lua_shParser = void 0;
const lua_sh_require_1 = require("./lua_sh_require");
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
class lua_shParser extends Parser_1.Parser {
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(lua_shParser._ATN, this);
    }
    // @Override
    // @NotNull
    get vocabulary() {
        return lua_shParser.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace
    // @Override
    get grammarFileName() { return "lua_sh.g4"; }
    // @Override
    get ruleNames() { return lua_shParser.ruleNames; }
    // @Override
    get serializedATN() { return lua_shParser._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new FailedPredicateException_1.FailedPredicateException(this, predicate, message);
    }
    // @RuleVersion(0)
    start() {
        let _localctx = new StartContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, lua_shParser.RULE_start);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 92;
                _localctx._v = this.start__y_();
                this.state = 93;
                this.match(lua_shParser.EOF);
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
        this.enterRule(_localctx, 2, lua_shParser.RULE_start__y_);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 96;
                this.block();
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
    nempty_list_o_stat_p_(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new Nempty_list_o_stat_p_Context(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 4;
        this.enterRecursionRule(_localctx, 4, lua_shParser.RULE_nempty_list_o_stat_p_, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 100;
                    this.stat();
                    _localctx.result = 0;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 109;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
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
                                _localctx.result = 0;
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
    allow_empty_o_nempty_list_o_stat_p__p_() {
        let _localctx = new Allow_empty_o_nempty_list_o_stat_p__p_Context(this._ctx, this.state);
        this.enterRule(_localctx, 6, lua_shParser.RULE_allow_empty_o_nempty_list_o_stat_p__p_);
        try {
            this.state = 116;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 1, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        _localctx.result = 0;
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 113;
                        this.nempty_list_o_stat_p_(0);
                        _localctx.result = 0;
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
    list_o_stat_p_() {
        let _localctx = new List_o_stat_p_Context(this._ctx, this.state);
        this.enterRule(_localctx, 8, lua_shParser.RULE_list_o_stat_p_);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 118;
                this.allow_empty_o_nempty_list_o_stat_p__p_();
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
    opt_o_retstat_p_() {
        let _localctx = new Opt_o_retstat_p_Context(this._ctx, this.state);
        this.enterRule(_localctx, 10, lua_shParser.RULE_opt_o_retstat_p_);
        try {
            this.state = 125;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 121;
                        this.retstat();
                        _localctx.result = 0;
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        _localctx.result = 0;
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
    block() {
        let _localctx = new BlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, lua_shParser.RULE_block);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 127;
                this.list_o_stat_p_();
                this.state = 128;
                this.opt_o_retstat_p_();
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
    retcolon() {
        let _localctx = new RetcolonContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, lua_shParser.RULE_retcolon);
        try {
            this.state = 134;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 3, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 131;
                        _localctx._retcolon_0__1 = this.match(lua_shParser.T__0);
                        _localctx.result = (0, lua_sh_require_1.isControl)(_localctx._retcolon_0__1);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        _localctx.result = 0;
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
    retstat() {
        let _localctx = new RetstatContext(this._ctx, this.state);
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
                _localctx.result = (0, lua_sh_require_1.isKeyword)(_localctx._retstat_0__1);
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
    name() {
        let _localctx = new NameContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, lua_shParser.RULE_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 141;
                _localctx._name_0__1 = this.match(lua_shParser.NAME);
                _localctx.result = (0, lua_sh_require_1.isVariable)(_localctx._name_0__1);
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
    nempty_list_o_elseif_p_(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new Nempty_list_o_elseif_p_Context(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 20;
        this.enterRecursionRule(_localctx, 20, lua_shParser.RULE_nempty_list_o_elseif_p_, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 145;
                    this.elseif();
                    _localctx.result = 0;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 154;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
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
                                _localctx.result = 0;
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
    allow_empty_o_nempty_list_o_elseif_p__p_() {
        let _localctx = new Allow_empty_o_nempty_list_o_elseif_p__p_Context(this._ctx, this.state);
        this.enterRule(_localctx, 22, lua_shParser.RULE_allow_empty_o_nempty_list_o_elseif_p__p_);
        try {
            this.state = 161;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case lua_shParser.T__8:
                case lua_shParser.T__21:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        _localctx.result = 0;
                    }
                    break;
                case lua_shParser.T__20:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 158;
                        this.nempty_list_o_elseif_p_(0);
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
    // @RuleVersion(0)
    list_o_elseif_p_() {
        let _localctx = new List_o_elseif_p_Context(this._ctx, this.state);
        this.enterRule(_localctx, 24, lua_shParser.RULE_list_o_elseif_p_);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 163;
                this.allow_empty_o_nempty_list_o_elseif_p__p_();
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
    opt_o_else_p_() {
        let _localctx = new Opt_o_else_p_Context(this._ctx, this.state);
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
                        _localctx.result = 0;
                    }
                    break;
                case lua_shParser.T__8:
                    this.enterOuterAlt(_localctx, 2);
                    {
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
    // @RuleVersion(0)
    nempty_seplist_o__i__s__i__s__i_name_k__p_(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new Nempty_seplist_o__i__s__i__s__i_name_k__p_Context(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 28;
        this.enterRecursionRule(_localctx, 28, lua_shParser.RULE_nempty_seplist_o__i__s__i__s__i_name_k__p_, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 173;
                    this.match(lua_shParser.NAME);
                    _localctx.result = 0;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 182;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
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
                                _localctx.result = 0;
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
    stat() {
        let _localctx = new StatContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, lua_shParser.RULE_stat);
        try {
            this.state = 264;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 8, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 185;
                        this.match(lua_shParser.T__0);
                        _localctx.result = 0;
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
                        _localctx.result = 0;
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 192;
                        this.exp();
                        _localctx.result = 0;
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
                        let _ = (0, lua_sh_require_1.isControl)(_localctx._stat_3__1);
                        _localctx.result = (0, lua_sh_require_1.isControl)(_localctx._stat_3__3);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 199;
                        _localctx._stat_4__1 = this.match(lua_shParser.T__5);
                        _localctx.result = (0, lua_sh_require_1.isKeyword)(_localctx._stat_4__1);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 201;
                        _localctx._stat_5__1 = this.match(lua_shParser.T__6);
                        this.state = 202;
                        _localctx._stat_5__2 = this.match(lua_shParser.NAME);
                        let ___98_ = (0, lua_sh_require_1.isKeyword)(_localctx._stat_5__1);
                        _localctx.result = (0, lua_sh_require_1.isControl)(_localctx._stat_5__2);
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
                        let ___98___103_ = (0, lua_sh_require_1.isKeyword)(_localctx._stat_6__1);
                        _localctx.result = (0, lua_sh_require_1.isKeyword)(_localctx._stat_6__3);
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
                        let ___98___103___109_ = (0, lua_sh_require_1.isKeyword)(_localctx._stat_7__1);
                        let ___98___103___109___115_ = (0, lua_sh_require_1.isKeyword)(_localctx._stat_7__3);
                        _localctx.result = (0, lua_sh_require_1.isKeyword)(_localctx._stat_7__5);
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
                        let ___98___103___109___115___121_ = (0, lua_sh_require_1.isKeyword)(_localctx._stat_8__1);
                        _localctx.result = (0, lua_sh_require_1.isKeyword)(_localctx._stat_8__3);
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
                        let ___98___103___109___115___121___101_ = (0, lua_sh_require_1.isKeyword)(_localctx._stat_9__1);
                        let ___98___103___109___115___121___101___107_ = (0, lua_sh_require_1.isKeyword)(_localctx._stat_9__3);
                        _localctx.result = (0, lua_sh_require_1.isKeyword)(_localctx._stat_9__7);
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
                        let ___98___103___109___115___121___101___107___113_ = (0, lua_sh_require_1.isKeyword)(_localctx._stat_10__1);
                        let ___98___103___109___115___121___101___107___113___119_ = (0, lua_sh_require_1.isKeyword)(_localctx._stat_10__3);
                        let ___98___103___109___115___121___101___107___113___119___99_ = (0, lua_sh_require_1.isKeyword)(_localctx._stat_10__5);
                        _localctx.result = (0, lua_sh_require_1.isKeyword)(_localctx._stat_10__7);
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
                        let ___98___103___109___115___121___101___107___113___119___99___104_ = (0, lua_sh_require_1.isKeyword)(_localctx._stat_11__1);
                        let ___98___103___109___115___121___101___107___113___119___99___104___110_ = (0, lua_sh_require_1.isKeyword)(_localctx._stat_11__3);
                        let ___98___103___109___115___121___101___107___113___119___99___104___110___116_ = (0, lua_sh_require_1.isKeyword)(_localctx._stat_11__5);
                        _localctx.result = (0, lua_sh_require_1.isKeyword)(_localctx._stat_11__7);
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
                        let ___98___103___109___115___121___101___107___113___119___99___104___110___116___122_ = (0, lua_sh_require_1.isKeyword)(_localctx._stat_12__1);
                        let ___98___103___109___115___121___101___107___113___119___99___104___110___116___122___102_ = (0, lua_sh_require_1.isKeyword)(_localctx._stat_12__2);
                        let ___98___103___109___115___121___101___107___113___119___99___104___110___116___122___102___108_ = (0, lua_sh_require_1.isKeyword)(_localctx._stat_12__4);
                        let ___98___103___109___115___121___101___107___113___119___99___104___110___116___122___102___108___114_ = (0, lua_sh_require_1.isKeyword)(_localctx._stat_12__6);
                        _localctx.result = (0, lua_sh_require_1.isKeyword)(_localctx._stat_12__8);
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
                        _localctx.result = (0, lua_sh_require_1.isKeyword)(_localctx._stat_13__1);
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
    opt_assign_rhs() {
        let _localctx = new Opt_assign_rhsContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, lua_shParser.RULE_opt_assign_rhs);
        try {
            this.state = 271;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 9, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 266;
                        this.match(lua_shParser.T__3);
                        this.state = 267;
                        this.nempty_seplist_o__i__s__i__s_exp_p_(0);
                        _localctx.result = 0;
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        _localctx.result = 0;
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
    range() {
        let _localctx = new RangeContext(this._ctx, this.state);
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
    range_tail() {
        let _localctx = new Range_tailContext(this._ctx, this.state);
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
                        _localctx.result = 0;
                    }
                    break;
                case lua_shParser.T__7:
                    this.enterOuterAlt(_localctx, 2);
                    {
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
    // @RuleVersion(0)
    elseif() {
        let _localctx = new ElseifContext(this._ctx, this.state);
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
                let ___98___103___109___115___121___101___107___113___119___99___104___110___116___122___102___108___114___120_ = (0, lua_sh_require_1.isKeyword)(_localctx._elseif_0__1);
                _localctx.result = (0, lua_sh_require_1.isKeyword)(_localctx._elseif_0__3);
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
    else__x_() {
        let _localctx = new Else__x_Context(this._ctx, this.state);
        this.enterRule(_localctx, 40, lua_shParser.RULE_else__x_);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 292;
                _localctx._else__x__0__1 = this.match(lua_shParser.T__21);
                this.state = 293;
                this.block();
                _localctx.result = (0, lua_sh_require_1.isKeyword)(_localctx._else__x__0__1);
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
    exp() {
        let _localctx = new ExpContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, lua_shParser.RULE_exp);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 296;
                this.binexp();
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
    binexp() {
        let _localctx = new BinexpContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, lua_shParser.RULE_binexp);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 299;
                this.binseq(0);
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
    binseq(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new BinseqContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 46;
        this.enterRecursionRule(_localctx, 46, lua_shParser.RULE_binseq, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 303;
                    this.binoperand();
                    _localctx.result = 0;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 313;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
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
                                _localctx.result = 0;
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
    binoperand() {
        let _localctx = new BinoperandContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, lua_shParser.RULE_binoperand);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 316;
                this.unaryexp();
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
    unaryexp() {
        let _localctx = new UnaryexpContext(this._ctx, this.state);
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
                        _localctx.result = (0, lua_sh_require_1.isUnaryOperator)(_localctx._unaryexp_0__1);
                    }
                    break;
                case lua_shParser.T__23:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 323;
                        _localctx._unaryexp_1__1 = this.match(lua_shParser.T__23);
                        this.state = 324;
                        this.exponent();
                        _localctx.result = (0, lua_sh_require_1.isUnaryOperator)(_localctx._unaryexp_1__1);
                    }
                    break;
                case lua_shParser.T__24:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 327;
                        _localctx._unaryexp_2__1 = this.match(lua_shParser.T__24);
                        this.state = 328;
                        this.exponent();
                        _localctx.result = (0, lua_sh_require_1.isUnaryOperator)(_localctx._unaryexp_2__1);
                    }
                    break;
                case lua_shParser.T__25:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 331;
                        _localctx._unaryexp_3__1 = this.match(lua_shParser.T__25);
                        this.state = 332;
                        this.exponent();
                        _localctx.result = (0, lua_sh_require_1.isUnaryOperator)(_localctx._unaryexp_3__1);
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
    // @RuleVersion(0)
    exponent() {
        let _localctx = new ExponentContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, lua_shParser.RULE_exponent);
        try {
            this.state = 348;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 13, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 340;
                        this.prefixexp(0);
                        this.state = 341;
                        _localctx._exponent_0__2 = this.match(lua_shParser.T__26);
                        this.state = 342;
                        this.exponent();
                        _localctx.result = (0, lua_sh_require_1.isBinaryOperator)(_localctx._exponent_0__2);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 345;
                        this.prefixexp(0);
                        _localctx.result = 0;
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
    prefixexp(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new PrefixexpContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 54;
        this.enterRecursionRule(_localctx, 54, lua_shParser.RULE_prefixexp, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 361;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case lua_shParser.NAME:
                        {
                            this.state = 351;
                            _localctx._prefixexp_0__1 = this.match(lua_shParser.NAME);
                            _localctx.result = (0, lua_sh_require_1.isVariable)(_localctx._prefixexp_0__1);
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
                            _localctx.result = 0;
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
                            _localctx.result = 0;
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 385;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 383;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 15, this._ctx)) {
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
                                        _localctx.result = 0;
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
                                        _localctx.result = (0, lua_sh_require_1.isAttr)(_localctx._prefixexp_3__3);
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
                                        _localctx.result = 0;
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
                                        _localctx.result = (0, lua_sh_require_1.isAttr)(_localctx._prefixexp_5__3);
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
    atom() {
        let _localctx = new AtomContext(this._ctx, this.state);
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
                        _localctx.result = (0, lua_sh_require_1.isLiteral)(_localctx._atom_0__1);
                    }
                    break;
                case lua_shParser.T__32:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 390;
                        _localctx._atom_1__1 = this.match(lua_shParser.T__32);
                        _localctx.result = (0, lua_sh_require_1.isLiteral)(_localctx._atom_1__1);
                    }
                    break;
                case lua_shParser.T__33:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 392;
                        _localctx._atom_2__1 = this.match(lua_shParser.T__33);
                        _localctx.result = (0, lua_sh_require_1.isLiteral)(_localctx._atom_2__1);
                    }
                    break;
                case lua_shParser.NUMERAL:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 394;
                        _localctx._atom_3__1 = this.match(lua_shParser.NUMERAL);
                        _localctx.result = (0, lua_sh_require_1.isNumber)(_localctx._atom_3__1);
                    }
                    break;
                case lua_shParser.STR_LIT:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 396;
                        _localctx._atom_4__1 = this.match(lua_shParser.STR_LIT);
                        _localctx.result = (0, lua_sh_require_1.isString)(_localctx._atom_4__1);
                    }
                    break;
                case lua_shParser.NESTED_STR:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 398;
                        _localctx._atom_5__1 = this.match(lua_shParser.NESTED_STR);
                        _localctx.result = (0, lua_sh_require_1.isString)(_localctx._atom_5__1);
                    }
                    break;
                case lua_shParser.T__34:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 400;
                        _localctx._atom_6__1 = this.match(lua_shParser.T__34);
                        _localctx.result = (0, lua_sh_require_1.isControl)(_localctx._atom_6__1);
                    }
                    break;
                case lua_shParser.T__17:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 402;
                        this.functiondef();
                        _localctx.result = 0;
                    }
                    break;
                case lua_shParser.T__35:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 405;
                        this.tableconstructor();
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
    // @RuleVersion(0)
    nempty_seplist_o__i__s__i__s_exp_p_(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new Nempty_seplist_o__i__s__i__s_exp_p_Context(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 58;
        this.enterRecursionRule(_localctx, 58, lua_shParser.RULE_nempty_seplist_o__i__s__i__s_exp_p_, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 411;
                    this.exp();
                    _localctx.result = 0;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 421;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
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
                                _localctx.result = 0;
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
    allow_empty_o_nempty_seplist_o__i__s__i__s_exp_p__p_() {
        let _localctx = new Allow_empty_o_nempty_seplist_o__i__s__i__s_exp_p__p_Context(this._ctx, this.state);
        this.enterRule(_localctx, 60, lua_shParser.RULE_allow_empty_o_nempty_seplist_o__i__s__i__s_exp_p__p_);
        try {
            this.state = 428;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 19, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        _localctx.result = 0;
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 425;
                        this.nempty_seplist_o__i__s__i__s_exp_p_(0);
                        _localctx.result = 0;
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
    seplist_o__i__s__i__s_exp_p_() {
        let _localctx = new Seplist_o__i__s__i__s_exp_p_Context(this._ctx, this.state);
        this.enterRule(_localctx, 62, lua_shParser.RULE_seplist_o__i__s__i__s_exp_p_);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 430;
                this.allow_empty_o_nempty_seplist_o__i__s__i__s_exp_p__p_();
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
    args() {
        let _localctx = new ArgsContext(this._ctx, this.state);
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
                        let ___98___103___109___115___121___101___107___113___119___99___104___110___116___122___102___108___114___120___100_ = (0, lua_sh_require_1.isFuncCall)(_localctx._args_0__1);
                        _localctx.result = (0, lua_sh_require_1.isFuncCall)(_localctx._args_0__3);
                    }
                    break;
                case lua_shParser.T__35:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 438;
                        this.tableconstructor();
                        _localctx.result = 0;
                    }
                    break;
                case lua_shParser.STR_LIT:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 441;
                        _localctx._args_2__1 = this.match(lua_shParser.STR_LIT);
                        _localctx.result = (0, lua_sh_require_1.isString)(_localctx._args_2__1);
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
    opt_o_funcname_p_() {
        let _localctx = new Opt_o_funcname_p_Context(this._ctx, this.state);
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
                        _localctx.result = 0;
                    }
                    break;
                case lua_shParser.T__18:
                    this.enterOuterAlt(_localctx, 2);
                    {
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
    // @RuleVersion(0)
    opt_o_parlist_p_() {
        let _localctx = new Opt_o_parlist_p_Context(this._ctx, this.state);
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
                        _localctx.result = 0;
                    }
                    break;
                case lua_shParser.T__19:
                    this.enterOuterAlt(_localctx, 2);
                    {
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
    // @RuleVersion(0)
    functiondef() {
        let _localctx = new FunctiondefContext(this._ctx, this.state);
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
                let ___98___103___109___115___121___101___107___113___119___99___104___110___116___122___102___108___114___120___100___106_ = (0, lua_sh_require_1.isKeyword)(_localctx._functiondef_0__1);
                let ___98___103___109___115___121___101___107___113___119___99___104___110___116___122___102___108___114___120___100___106___112_ = (0, lua_sh_require_1.isKeyword)(_localctx._functiondef_0__7);
                let ___98___103___109___115___121___101___107___113___119___99___104___110___116___122___102___108___114___120___100___106___112___118_ = (0, lua_sh_require_1.isFuncDecl)(_localctx._functiondef_0__3);
                _localctx.result = (0, lua_sh_require_1.isFuncDecl)(_localctx._functiondef_0__5);
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
    varargs() {
        let _localctx = new VarargsContext(this._ctx, this.state);
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
                        _localctx.result = (0, lua_sh_require_1.isControl)(_localctx._varargs_0__2);
                    }
                    break;
                case lua_shParser.T__19:
                    this.enterOuterAlt(_localctx, 2);
                    {
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
    // @RuleVersion(0)
    nempty_seplist_o__i__s__i__s_name_p_(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new Nempty_seplist_o__i__s__i__s_name_p_Context(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 74;
        this.enterRecursionRule(_localctx, 74, lua_shParser.RULE_nempty_seplist_o__i__s__i__s_name_p_, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 473;
                    this.name();
                    _localctx.result = 0;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 483;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
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
                                _localctx.result = 0;
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
    parlist() {
        let _localctx = new ParlistContext(this._ctx, this.state);
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
                        _localctx.result = 0;
                    }
                    break;
                case lua_shParser.NAME:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 488;
                        this.nempty_seplist_o__i__s__i__s_name_p_(0);
                        this.state = 489;
                        this.varargs();
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
    // @RuleVersion(0)
    nempty_seplist_o_fieldsep_s_field_p_(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new Nempty_seplist_o_fieldsep_s_field_p_Context(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 78;
        this.enterRecursionRule(_localctx, 78, lua_shParser.RULE_nempty_seplist_o_fieldsep_s_field_p_, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 495;
                    this.field();
                    _localctx.result = 0;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 505;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
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
                                _localctx.result = 0;
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
    opt_o_fieldsep_p_() {
        let _localctx = new Opt_o_fieldsep_p_Context(this._ctx, this.state);
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
                        _localctx.result = 0;
                    }
                    break;
                case lua_shParser.T__36:
                    this.enterOuterAlt(_localctx, 2);
                    {
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
    // @RuleVersion(0)
    tableconstructor() {
        let _localctx = new TableconstructorContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, lua_shParser.RULE_tableconstructor);
        try {
            this.state = 523;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 28, this._ctx)) {
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
                        _localctx.result = 0;
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 520;
                        this.match(lua_shParser.T__35);
                        this.state = 521;
                        this.match(lua_shParser.T__36);
                        _localctx.result = 0;
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
    funcname(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new FuncnameContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 84;
        this.enterRecursionRule(_localctx, 84, lua_shParser.RULE_funcname, _p);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 526;
                    _localctx._funcname_2__1 = this.match(lua_shParser.NAME);
                    _localctx.result = (0, lua_sh_require_1.isVariable)(_localctx._funcname_2__1);
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 539;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 537;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 29, this._ctx)) {
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
                                        _localctx.result = (0, lua_sh_require_1.isAttr)(_localctx._funcname_0__3);
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
                                        _localctx.result = (0, lua_sh_require_1.isAttr)(_localctx._funcname_1__3);
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
    field() {
        let _localctx = new FieldContext(this._ctx, this.state);
        this.enterRule(_localctx, 86, lua_shParser.RULE_field);
        try {
            this.state = 557;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 31, this._ctx)) {
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
                        _localctx.result = 0;
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
                        _localctx.result = (0, lua_sh_require_1.isAttr)(_localctx._field_1__1);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 554;
                        this.exp();
                        _localctx.result = 0;
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
    fieldsep() {
        let _localctx = new FieldsepContext(this._ctx, this.state);
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
                        _localctx.result = 0;
                    }
                    break;
                case lua_shParser.T__0:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 561;
                        this.match(lua_shParser.T__0);
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
    // @RuleVersion(0)
    binop() {
        let _localctx = new BinopContext(this._ctx, this.state);
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
                        _localctx.result = (0, lua_sh_require_1.isBinaryOperator)(_localctx._binop_0__1);
                    }
                    break;
                case lua_shParser.T__38:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 567;
                        _localctx._binop_1__1 = this.match(lua_shParser.T__38);
                        _localctx.result = (0, lua_sh_require_1.isBinaryOperator)(_localctx._binop_1__1);
                    }
                    break;
                case lua_shParser.T__39:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 569;
                        _localctx._binop_2__1 = this.match(lua_shParser.T__39);
                        _localctx.result = (0, lua_sh_require_1.isBinaryOperator)(_localctx._binop_2__1);
                    }
                    break;
                case lua_shParser.T__40:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 571;
                        _localctx._binop_3__1 = this.match(lua_shParser.T__40);
                        _localctx.result = (0, lua_sh_require_1.isBinaryOperator)(_localctx._binop_3__1);
                    }
                    break;
                case lua_shParser.T__41:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 573;
                        _localctx._binop_4__1 = this.match(lua_shParser.T__41);
                        _localctx.result = (0, lua_sh_require_1.isBinaryOperator)(_localctx._binop_4__1);
                    }
                    break;
                case lua_shParser.T__42:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 575;
                        _localctx._binop_5__1 = this.match(lua_shParser.T__42);
                        _localctx.result = (0, lua_sh_require_1.isBinaryOperator)(_localctx._binop_5__1);
                    }
                    break;
                case lua_shParser.T__43:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 577;
                        _localctx._binop_6__1 = this.match(lua_shParser.T__43);
                        _localctx.result = (0, lua_sh_require_1.isBinaryOperator)(_localctx._binop_6__1);
                    }
                    break;
                case lua_shParser.T__44:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 579;
                        _localctx._binop_7__1 = this.match(lua_shParser.T__44);
                        _localctx.result = (0, lua_sh_require_1.isBinaryOperator)(_localctx._binop_7__1);
                    }
                    break;
                case lua_shParser.T__45:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 581;
                        _localctx._binop_8__1 = this.match(lua_shParser.T__45);
                        _localctx.result = (0, lua_sh_require_1.isBinaryOperator)(_localctx._binop_8__1);
                    }
                    break;
                case lua_shParser.T__24:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 583;
                        _localctx._binop_9__1 = this.match(lua_shParser.T__24);
                        _localctx.result = (0, lua_sh_require_1.isBinaryOperator)(_localctx._binop_9__1);
                    }
                    break;
                case lua_shParser.T__46:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 585;
                        _localctx._binop_10__1 = this.match(lua_shParser.T__46);
                        _localctx.result = (0, lua_sh_require_1.isBinaryOperator)(_localctx._binop_10__1);
                    }
                    break;
                case lua_shParser.T__47:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 587;
                        _localctx._binop_11__1 = this.match(lua_shParser.T__47);
                        _localctx.result = (0, lua_sh_require_1.isBinaryOperator)(_localctx._binop_11__1);
                    }
                    break;
                case lua_shParser.T__48:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 589;
                        _localctx._binop_12__1 = this.match(lua_shParser.T__48);
                        _localctx.result = (0, lua_sh_require_1.isBinaryOperator)(_localctx._binop_12__1);
                    }
                    break;
                case lua_shParser.T__49:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 591;
                        _localctx._binop_13__1 = this.match(lua_shParser.T__49);
                        _localctx.result = (0, lua_sh_require_1.isBinaryOperator)(_localctx._binop_13__1);
                    }
                    break;
                case lua_shParser.T__50:
                    this.enterOuterAlt(_localctx, 15);
                    {
                        this.state = 593;
                        _localctx._binop_14__1 = this.match(lua_shParser.T__50);
                        _localctx.result = (0, lua_sh_require_1.isBinaryOperator)(_localctx._binop_14__1);
                    }
                    break;
                case lua_shParser.T__23:
                    this.enterOuterAlt(_localctx, 16);
                    {
                        this.state = 595;
                        _localctx._binop_15__1 = this.match(lua_shParser.T__23);
                        _localctx.result = (0, lua_sh_require_1.isBinaryOperator)(_localctx._binop_15__1);
                    }
                    break;
                case lua_shParser.T__51:
                    this.enterOuterAlt(_localctx, 17);
                    {
                        this.state = 597;
                        _localctx._binop_16__1 = this.match(lua_shParser.T__51);
                        _localctx.result = (0, lua_sh_require_1.isBinaryOperator)(_localctx._binop_16__1);
                    }
                    break;
                case lua_shParser.T__52:
                    this.enterOuterAlt(_localctx, 18);
                    {
                        this.state = 599;
                        _localctx._binop_17__1 = this.match(lua_shParser.T__52);
                        _localctx.result = (0, lua_sh_require_1.isBinaryOperator)(_localctx._binop_17__1);
                    }
                    break;
                case lua_shParser.T__53:
                    this.enterOuterAlt(_localctx, 19);
                    {
                        this.state = 601;
                        _localctx._binop_18__1 = this.match(lua_shParser.T__53);
                        _localctx.result = (0, lua_sh_require_1.isBinaryOperator)(_localctx._binop_18__1);
                    }
                    break;
                case lua_shParser.T__54:
                    this.enterOuterAlt(_localctx, 20);
                    {
                        this.state = 603;
                        _localctx._binop_19__1 = this.match(lua_shParser.T__54);
                        _localctx.result = (0, lua_sh_require_1.isBinaryOperator)(_localctx._binop_19__1);
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
            case 2:
                return this.nempty_list_o_stat_p__sempred(_localctx, predIndex);
            case 10:
                return this.nempty_list_o_elseif_p__sempred(_localctx, predIndex);
            case 14:
                return this.nempty_seplist_o__i__s__i__s__i_name_k__p__sempred(_localctx, predIndex);
            case 23:
                return this.binseq_sempred(_localctx, predIndex);
            case 27:
                return this.prefixexp_sempred(_localctx, predIndex);
            case 29:
                return this.nempty_seplist_o__i__s__i__s_exp_p__sempred(_localctx, predIndex);
            case 37:
                return this.nempty_seplist_o__i__s__i__s_name_p__sempred(_localctx, predIndex);
            case 39:
                return this.nempty_seplist_o_fieldsep_s_field_p__sempred(_localctx, predIndex);
            case 42:
                return this.funcname_sempred(_localctx, predIndex);
        }
        return true;
    }
    nempty_list_o_stat_p__sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    nempty_list_o_elseif_p__sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 1:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    nempty_seplist_o__i__s__i__s__i_name_k__p__sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 2:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    binseq_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 3:
                return this.precpred(this._ctx, 2);
        }
        return true;
    }
    prefixexp_sempred(_localctx, predIndex) {
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
    nempty_seplist_o__i__s__i__s_exp_p__sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 8:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    nempty_seplist_o__i__s__i__s_name_p__sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 9:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    nempty_seplist_o_fieldsep_s_field_p__sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 10:
                return this.precpred(this._ctx, 1);
        }
        return true;
    }
    funcname_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 11:
                return this.precpred(this._ctx, 3);
            case 12:
                return this.precpred(this._ctx, 2);
        }
        return true;
    }
    static get _ATN() {
        if (!lua_shParser.__ATN) {
            lua_shParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(lua_shParser._serializedATN));
        }
        return lua_shParser.__ATN;
    }
}
exports.lua_shParser = lua_shParser;
lua_shParser.T__0 = 1;
lua_shParser.T__1 = 2;
lua_shParser.T__2 = 3;
lua_shParser.T__3 = 4;
lua_shParser.T__4 = 5;
lua_shParser.T__5 = 6;
lua_shParser.T__6 = 7;
lua_shParser.T__7 = 8;
lua_shParser.T__8 = 9;
lua_shParser.T__9 = 10;
lua_shParser.T__10 = 11;
lua_shParser.T__11 = 12;
lua_shParser.T__12 = 13;
lua_shParser.T__13 = 14;
lua_shParser.T__14 = 15;
lua_shParser.T__15 = 16;
lua_shParser.T__16 = 17;
lua_shParser.T__17 = 18;
lua_shParser.T__18 = 19;
lua_shParser.T__19 = 20;
lua_shParser.T__20 = 21;
lua_shParser.T__21 = 22;
lua_shParser.T__22 = 23;
lua_shParser.T__23 = 24;
lua_shParser.T__24 = 25;
lua_shParser.T__25 = 26;
lua_shParser.T__26 = 27;
lua_shParser.T__27 = 28;
lua_shParser.T__28 = 29;
lua_shParser.T__29 = 30;
lua_shParser.T__30 = 31;
lua_shParser.T__31 = 32;
lua_shParser.T__32 = 33;
lua_shParser.T__33 = 34;
lua_shParser.T__34 = 35;
lua_shParser.T__35 = 36;
lua_shParser.T__36 = 37;
lua_shParser.T__37 = 38;
lua_shParser.T__38 = 39;
lua_shParser.T__39 = 40;
lua_shParser.T__40 = 41;
lua_shParser.T__41 = 42;
lua_shParser.T__42 = 43;
lua_shParser.T__43 = 44;
lua_shParser.T__44 = 45;
lua_shParser.T__45 = 46;
lua_shParser.T__46 = 47;
lua_shParser.T__47 = 48;
lua_shParser.T__48 = 49;
lua_shParser.T__49 = 50;
lua_shParser.T__50 = 51;
lua_shParser.T__51 = 52;
lua_shParser.T__52 = 53;
lua_shParser.T__53 = 54;
lua_shParser.T__54 = 55;
lua_shParser.LINE_COMMENT = 56;
lua_shParser.SPACE = 57;
lua_shParser.NAME = 58;
lua_shParser.NUMERAL = 59;
lua_shParser.STR_LIT = 60;
lua_shParser.NESTED_STR = 61;
lua_shParser.RULE_start = 0;
lua_shParser.RULE_start__y_ = 1;
lua_shParser.RULE_nempty_list_o_stat_p_ = 2;
lua_shParser.RULE_allow_empty_o_nempty_list_o_stat_p__p_ = 3;
lua_shParser.RULE_list_o_stat_p_ = 4;
lua_shParser.RULE_opt_o_retstat_p_ = 5;
lua_shParser.RULE_block = 6;
lua_shParser.RULE_retcolon = 7;
lua_shParser.RULE_retstat = 8;
lua_shParser.RULE_name = 9;
lua_shParser.RULE_nempty_list_o_elseif_p_ = 10;
lua_shParser.RULE_allow_empty_o_nempty_list_o_elseif_p__p_ = 11;
lua_shParser.RULE_list_o_elseif_p_ = 12;
lua_shParser.RULE_opt_o_else_p_ = 13;
lua_shParser.RULE_nempty_seplist_o__i__s__i__s__i_name_k__p_ = 14;
lua_shParser.RULE_stat = 15;
lua_shParser.RULE_opt_assign_rhs = 16;
lua_shParser.RULE_range = 17;
lua_shParser.RULE_range_tail = 18;
lua_shParser.RULE_elseif = 19;
lua_shParser.RULE_else__x_ = 20;
lua_shParser.RULE_exp = 21;
lua_shParser.RULE_binexp = 22;
lua_shParser.RULE_binseq = 23;
lua_shParser.RULE_binoperand = 24;
lua_shParser.RULE_unaryexp = 25;
lua_shParser.RULE_exponent = 26;
lua_shParser.RULE_prefixexp = 27;
lua_shParser.RULE_atom = 28;
lua_shParser.RULE_nempty_seplist_o__i__s__i__s_exp_p_ = 29;
lua_shParser.RULE_allow_empty_o_nempty_seplist_o__i__s__i__s_exp_p__p_ = 30;
lua_shParser.RULE_seplist_o__i__s__i__s_exp_p_ = 31;
lua_shParser.RULE_args = 32;
lua_shParser.RULE_opt_o_funcname_p_ = 33;
lua_shParser.RULE_opt_o_parlist_p_ = 34;
lua_shParser.RULE_functiondef = 35;
lua_shParser.RULE_varargs = 36;
lua_shParser.RULE_nempty_seplist_o__i__s__i__s_name_p_ = 37;
lua_shParser.RULE_parlist = 38;
lua_shParser.RULE_nempty_seplist_o_fieldsep_s_field_p_ = 39;
lua_shParser.RULE_opt_o_fieldsep_p_ = 40;
lua_shParser.RULE_tableconstructor = 41;
lua_shParser.RULE_funcname = 42;
lua_shParser.RULE_field = 43;
lua_shParser.RULE_fieldsep = 44;
lua_shParser.RULE_binop = 45;
// tslint:disable:no-trailing-whitespace
lua_shParser.ruleNames = [
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
lua_shParser._LITERAL_NAMES = [
    undefined, "';'", "'return'", "','", "'='", "'::'", "'break'", "'goto'",
    "'do'", "'end'", "'while'", "'repeat'", "'until'", "'if'", "'then'", "'for'",
    "'in'", "'local'", "'function'", "'('", "')'", "'elseif'", "'else'", "'#'",
    "'-'", "'~'", "'not'", "'^'", "':'", "'['", "']'", "'.'", "'nil'", "'false'",
    "'true'", "'...'", "'{'", "'}'", "'or'", "'and'", "'<'", "'>'", "'<='",
    "'>='", "'~='", "'=='", "'|'", "'&'", "'<<'", "'>>'", "'..'", "'+'", "'*'",
    "'/'", "'//'", "'%'",
];
lua_shParser._SYMBOLIC_NAMES = [
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
lua_shParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(lua_shParser._LITERAL_NAMES, lua_shParser._SYMBOLIC_NAMES, []);
lua_shParser._serializedATNSegments = 2;
lua_shParser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03?\u0262\x04\x02" +
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
lua_shParser._serializedATNSegment1 = "\x02\x02\u0250\u0260\b/\x01\x02\u0251\u0252\x074\x02\x02\u0252\u0260\b" +
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
lua_shParser._serializedATN = Utils.join([
    lua_shParser._serializedATNSegment0,
    lua_shParser._serializedATNSegment1,
], "");
class StartContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    EOF() { return this.getToken(lua_shParser.EOF, 0); }
    start__y_() {
        return this.getRuleContext(0, Start__y_Context);
    }
    // @Override
    get ruleIndex() { return lua_shParser.RULE_start; }
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
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    // @Override
    get ruleIndex() { return lua_shParser.RULE_start__y_; }
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
class Nempty_list_o_stat_p_Context extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    stat() {
        return this.getRuleContext(0, StatContext);
    }
    nempty_list_o_stat_p_() {
        return this.tryGetRuleContext(0, Nempty_list_o_stat_p_Context);
    }
    // @Override
    get ruleIndex() { return lua_shParser.RULE_nempty_list_o_stat_p_; }
    // @Override
    enterRule(listener) {
        if (listener.enterNempty_list_o_stat_p_) {
            listener.enterNempty_list_o_stat_p_(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNempty_list_o_stat_p_) {
            listener.exitNempty_list_o_stat_p_(this);
        }
    }
}
exports.Nempty_list_o_stat_p_Context = Nempty_list_o_stat_p_Context;
class Allow_empty_o_nempty_list_o_stat_p__p_Context extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    nempty_list_o_stat_p_() {
        return this.tryGetRuleContext(0, Nempty_list_o_stat_p_Context);
    }
    // @Override
    get ruleIndex() { return lua_shParser.RULE_allow_empty_o_nempty_list_o_stat_p__p_; }
    // @Override
    enterRule(listener) {
        if (listener.enterAllow_empty_o_nempty_list_o_stat_p__p_) {
            listener.enterAllow_empty_o_nempty_list_o_stat_p__p_(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAllow_empty_o_nempty_list_o_stat_p__p_) {
            listener.exitAllow_empty_o_nempty_list_o_stat_p__p_(this);
        }
    }
}
exports.Allow_empty_o_nempty_list_o_stat_p__p_Context = Allow_empty_o_nempty_list_o_stat_p__p_Context;
class List_o_stat_p_Context extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    allow_empty_o_nempty_list_o_stat_p__p_() {
        return this.getRuleContext(0, Allow_empty_o_nempty_list_o_stat_p__p_Context);
    }
    // @Override
    get ruleIndex() { return lua_shParser.RULE_list_o_stat_p_; }
    // @Override
    enterRule(listener) {
        if (listener.enterList_o_stat_p_) {
            listener.enterList_o_stat_p_(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitList_o_stat_p_) {
            listener.exitList_o_stat_p_(this);
        }
    }
}
exports.List_o_stat_p_Context = List_o_stat_p_Context;
class Opt_o_retstat_p_Context extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    retstat() {
        return this.tryGetRuleContext(0, RetstatContext);
    }
    // @Override
    get ruleIndex() { return lua_shParser.RULE_opt_o_retstat_p_; }
    // @Override
    enterRule(listener) {
        if (listener.enterOpt_o_retstat_p_) {
            listener.enterOpt_o_retstat_p_(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOpt_o_retstat_p_) {
            listener.exitOpt_o_retstat_p_(this);
        }
    }
}
exports.Opt_o_retstat_p_Context = Opt_o_retstat_p_Context;
class BlockContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    list_o_stat_p_() {
        return this.getRuleContext(0, List_o_stat_p_Context);
    }
    opt_o_retstat_p_() {
        return this.getRuleContext(0, Opt_o_retstat_p_Context);
    }
    // @Override
    get ruleIndex() { return lua_shParser.RULE_block; }
    // @Override
    enterRule(listener) {
        if (listener.enterBlock) {
            listener.enterBlock(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBlock) {
            listener.exitBlock(this);
        }
    }
}
exports.BlockContext = BlockContext;
class RetcolonContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return lua_shParser.RULE_retcolon; }
    // @Override
    enterRule(listener) {
        if (listener.enterRetcolon) {
            listener.enterRetcolon(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitRetcolon) {
            listener.exitRetcolon(this);
        }
    }
}
exports.RetcolonContext = RetcolonContext;
class RetstatContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    seplist_o__i__s__i__s_exp_p_() {
        return this.getRuleContext(0, Seplist_o__i__s__i__s_exp_p_Context);
    }
    retcolon() {
        return this.getRuleContext(0, RetcolonContext);
    }
    // @Override
    get ruleIndex() { return lua_shParser.RULE_retstat; }
    // @Override
    enterRule(listener) {
        if (listener.enterRetstat) {
            listener.enterRetstat(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitRetstat) {
            listener.exitRetstat(this);
        }
    }
}
exports.RetstatContext = RetstatContext;
class NameContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    NAME() { return this.getToken(lua_shParser.NAME, 0); }
    // @Override
    get ruleIndex() { return lua_shParser.RULE_name; }
    // @Override
    enterRule(listener) {
        if (listener.enterName) {
            listener.enterName(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitName) {
            listener.exitName(this);
        }
    }
}
exports.NameContext = NameContext;
class Nempty_list_o_elseif_p_Context extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    elseif() {
        return this.getRuleContext(0, ElseifContext);
    }
    nempty_list_o_elseif_p_() {
        return this.tryGetRuleContext(0, Nempty_list_o_elseif_p_Context);
    }
    // @Override
    get ruleIndex() { return lua_shParser.RULE_nempty_list_o_elseif_p_; }
    // @Override
    enterRule(listener) {
        if (listener.enterNempty_list_o_elseif_p_) {
            listener.enterNempty_list_o_elseif_p_(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNempty_list_o_elseif_p_) {
            listener.exitNempty_list_o_elseif_p_(this);
        }
    }
}
exports.Nempty_list_o_elseif_p_Context = Nempty_list_o_elseif_p_Context;
class Allow_empty_o_nempty_list_o_elseif_p__p_Context extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    nempty_list_o_elseif_p_() {
        return this.tryGetRuleContext(0, Nempty_list_o_elseif_p_Context);
    }
    // @Override
    get ruleIndex() { return lua_shParser.RULE_allow_empty_o_nempty_list_o_elseif_p__p_; }
    // @Override
    enterRule(listener) {
        if (listener.enterAllow_empty_o_nempty_list_o_elseif_p__p_) {
            listener.enterAllow_empty_o_nempty_list_o_elseif_p__p_(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAllow_empty_o_nempty_list_o_elseif_p__p_) {
            listener.exitAllow_empty_o_nempty_list_o_elseif_p__p_(this);
        }
    }
}
exports.Allow_empty_o_nempty_list_o_elseif_p__p_Context = Allow_empty_o_nempty_list_o_elseif_p__p_Context;
class List_o_elseif_p_Context extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    allow_empty_o_nempty_list_o_elseif_p__p_() {
        return this.getRuleContext(0, Allow_empty_o_nempty_list_o_elseif_p__p_Context);
    }
    // @Override
    get ruleIndex() { return lua_shParser.RULE_list_o_elseif_p_; }
    // @Override
    enterRule(listener) {
        if (listener.enterList_o_elseif_p_) {
            listener.enterList_o_elseif_p_(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitList_o_elseif_p_) {
            listener.exitList_o_elseif_p_(this);
        }
    }
}
exports.List_o_elseif_p_Context = List_o_elseif_p_Context;
class Opt_o_else_p_Context extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    else__x_() {
        return this.tryGetRuleContext(0, Else__x_Context);
    }
    // @Override
    get ruleIndex() { return lua_shParser.RULE_opt_o_else_p_; }
    // @Override
    enterRule(listener) {
        if (listener.enterOpt_o_else_p_) {
            listener.enterOpt_o_else_p_(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOpt_o_else_p_) {
            listener.exitOpt_o_else_p_(this);
        }
    }
}
exports.Opt_o_else_p_Context = Opt_o_else_p_Context;
class Nempty_seplist_o__i__s__i__s__i_name_k__p_Context extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    NAME() { return this.getToken(lua_shParser.NAME, 0); }
    nempty_seplist_o__i__s__i__s__i_name_k__p_() {
        return this.tryGetRuleContext(0, Nempty_seplist_o__i__s__i__s__i_name_k__p_Context);
    }
    // @Override
    get ruleIndex() { return lua_shParser.RULE_nempty_seplist_o__i__s__i__s__i_name_k__p_; }
    // @Override
    enterRule(listener) {
        if (listener.enterNempty_seplist_o__i__s__i__s__i_name_k__p_) {
            listener.enterNempty_seplist_o__i__s__i__s__i_name_k__p_(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNempty_seplist_o__i__s__i__s__i_name_k__p_) {
            listener.exitNempty_seplist_o__i__s__i__s__i_name_k__p_(this);
        }
    }
}
exports.Nempty_seplist_o__i__s__i__s__i_name_k__p_Context = Nempty_seplist_o__i__s__i__s__i_name_k__p_Context;
class StatContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    nempty_seplist_o__i__s__i__s_exp_p_(i) {
        if (i === undefined) {
            return this.getRuleContexts(Nempty_seplist_o__i__s__i__s_exp_p_Context);
        }
        else {
            return this.getRuleContext(i, Nempty_seplist_o__i__s__i__s_exp_p_Context);
        }
    }
    exp() {
        return this.tryGetRuleContext(0, ExpContext);
    }
    NAME() { return this.tryGetToken(lua_shParser.NAME, 0); }
    block() {
        return this.tryGetRuleContext(0, BlockContext);
    }
    list_o_elseif_p_() {
        return this.tryGetRuleContext(0, List_o_elseif_p_Context);
    }
    opt_o_else_p_() {
        return this.tryGetRuleContext(0, Opt_o_else_p_Context);
    }
    range() {
        return this.tryGetRuleContext(0, RangeContext);
    }
    nempty_seplist_o__i__s__i__s_name_p_() {
        return this.tryGetRuleContext(0, Nempty_seplist_o__i__s__i__s_name_p_Context);
    }
    funcname() {
        return this.tryGetRuleContext(0, FuncnameContext);
    }
    opt_o_parlist_p_() {
        return this.tryGetRuleContext(0, Opt_o_parlist_p_Context);
    }
    nempty_seplist_o__i__s__i__s__i_name_k__p_() {
        return this.tryGetRuleContext(0, Nempty_seplist_o__i__s__i__s__i_name_k__p_Context);
    }
    opt_assign_rhs() {
        return this.tryGetRuleContext(0, Opt_assign_rhsContext);
    }
    // @Override
    get ruleIndex() { return lua_shParser.RULE_stat; }
    // @Override
    enterRule(listener) {
        if (listener.enterStat) {
            listener.enterStat(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStat) {
            listener.exitStat(this);
        }
    }
}
exports.StatContext = StatContext;
class Opt_assign_rhsContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    nempty_seplist_o__i__s__i__s_exp_p_() {
        return this.tryGetRuleContext(0, Nempty_seplist_o__i__s__i__s_exp_p_Context);
    }
    // @Override
    get ruleIndex() { return lua_shParser.RULE_opt_assign_rhs; }
    // @Override
    enterRule(listener) {
        if (listener.enterOpt_assign_rhs) {
            listener.enterOpt_assign_rhs(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOpt_assign_rhs) {
            listener.exitOpt_assign_rhs(this);
        }
    }
}
exports.Opt_assign_rhsContext = Opt_assign_rhsContext;
class RangeContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    exp(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpContext);
        }
        else {
            return this.getRuleContext(i, ExpContext);
        }
    }
    range_tail() {
        return this.getRuleContext(0, Range_tailContext);
    }
    // @Override
    get ruleIndex() { return lua_shParser.RULE_range; }
    // @Override
    enterRule(listener) {
        if (listener.enterRange) {
            listener.enterRange(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitRange) {
            listener.exitRange(this);
        }
    }
}
exports.RangeContext = RangeContext;
class Range_tailContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    exp() {
        return this.tryGetRuleContext(0, ExpContext);
    }
    // @Override
    get ruleIndex() { return lua_shParser.RULE_range_tail; }
    // @Override
    enterRule(listener) {
        if (listener.enterRange_tail) {
            listener.enterRange_tail(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitRange_tail) {
            listener.exitRange_tail(this);
        }
    }
}
exports.Range_tailContext = Range_tailContext;
class ElseifContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    exp() {
        return this.getRuleContext(0, ExpContext);
    }
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    // @Override
    get ruleIndex() { return lua_shParser.RULE_elseif; }
    // @Override
    enterRule(listener) {
        if (listener.enterElseif) {
            listener.enterElseif(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitElseif) {
            listener.exitElseif(this);
        }
    }
}
exports.ElseifContext = ElseifContext;
class Else__x_Context extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    // @Override
    get ruleIndex() { return lua_shParser.RULE_else__x_; }
    // @Override
    enterRule(listener) {
        if (listener.enterElse__x_) {
            listener.enterElse__x_(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitElse__x_) {
            listener.exitElse__x_(this);
        }
    }
}
exports.Else__x_Context = Else__x_Context;
class ExpContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    binexp() {
        return this.getRuleContext(0, BinexpContext);
    }
    // @Override
    get ruleIndex() { return lua_shParser.RULE_exp; }
    // @Override
    enterRule(listener) {
        if (listener.enterExp) {
            listener.enterExp(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExp) {
            listener.exitExp(this);
        }
    }
}
exports.ExpContext = ExpContext;
class BinexpContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    binseq() {
        return this.getRuleContext(0, BinseqContext);
    }
    // @Override
    get ruleIndex() { return lua_shParser.RULE_binexp; }
    // @Override
    enterRule(listener) {
        if (listener.enterBinexp) {
            listener.enterBinexp(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBinexp) {
            listener.exitBinexp(this);
        }
    }
}
exports.BinexpContext = BinexpContext;
class BinseqContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    binseq() {
        return this.tryGetRuleContext(0, BinseqContext);
    }
    binop() {
        return this.tryGetRuleContext(0, BinopContext);
    }
    binoperand() {
        return this.getRuleContext(0, BinoperandContext);
    }
    // @Override
    get ruleIndex() { return lua_shParser.RULE_binseq; }
    // @Override
    enterRule(listener) {
        if (listener.enterBinseq) {
            listener.enterBinseq(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBinseq) {
            listener.exitBinseq(this);
        }
    }
}
exports.BinseqContext = BinseqContext;
class BinoperandContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    unaryexp() {
        return this.getRuleContext(0, UnaryexpContext);
    }
    // @Override
    get ruleIndex() { return lua_shParser.RULE_binoperand; }
    // @Override
    enterRule(listener) {
        if (listener.enterBinoperand) {
            listener.enterBinoperand(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBinoperand) {
            listener.exitBinoperand(this);
        }
    }
}
exports.BinoperandContext = BinoperandContext;
class UnaryexpContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    exponent() {
        return this.getRuleContext(0, ExponentContext);
    }
    // @Override
    get ruleIndex() { return lua_shParser.RULE_unaryexp; }
    // @Override
    enterRule(listener) {
        if (listener.enterUnaryexp) {
            listener.enterUnaryexp(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitUnaryexp) {
            listener.exitUnaryexp(this);
        }
    }
}
exports.UnaryexpContext = UnaryexpContext;
class ExponentContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    prefixexp() {
        return this.getRuleContext(0, PrefixexpContext);
    }
    exponent() {
        return this.tryGetRuleContext(0, ExponentContext);
    }
    // @Override
    get ruleIndex() { return lua_shParser.RULE_exponent; }
    // @Override
    enterRule(listener) {
        if (listener.enterExponent) {
            listener.enterExponent(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExponent) {
            listener.exitExponent(this);
        }
    }
}
exports.ExponentContext = ExponentContext;
class PrefixexpContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    NAME() { return this.tryGetToken(lua_shParser.NAME, 0); }
    exp() {
        return this.tryGetRuleContext(0, ExpContext);
    }
    prefixexp() {
        return this.tryGetRuleContext(0, PrefixexpContext);
    }
    args() {
        return this.tryGetRuleContext(0, ArgsContext);
    }
    atom() {
        return this.tryGetRuleContext(0, AtomContext);
    }
    // @Override
    get ruleIndex() { return lua_shParser.RULE_prefixexp; }
    // @Override
    enterRule(listener) {
        if (listener.enterPrefixexp) {
            listener.enterPrefixexp(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPrefixexp) {
            listener.exitPrefixexp(this);
        }
    }
}
exports.PrefixexpContext = PrefixexpContext;
class AtomContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    NUMERAL() { return this.tryGetToken(lua_shParser.NUMERAL, 0); }
    STR_LIT() { return this.tryGetToken(lua_shParser.STR_LIT, 0); }
    NESTED_STR() { return this.tryGetToken(lua_shParser.NESTED_STR, 0); }
    functiondef() {
        return this.tryGetRuleContext(0, FunctiondefContext);
    }
    tableconstructor() {
        return this.tryGetRuleContext(0, TableconstructorContext);
    }
    // @Override
    get ruleIndex() { return lua_shParser.RULE_atom; }
    // @Override
    enterRule(listener) {
        if (listener.enterAtom) {
            listener.enterAtom(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAtom) {
            listener.exitAtom(this);
        }
    }
}
exports.AtomContext = AtomContext;
class Nempty_seplist_o__i__s__i__s_exp_p_Context extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    exp() {
        return this.getRuleContext(0, ExpContext);
    }
    nempty_seplist_o__i__s__i__s_exp_p_() {
        return this.tryGetRuleContext(0, Nempty_seplist_o__i__s__i__s_exp_p_Context);
    }
    // @Override
    get ruleIndex() { return lua_shParser.RULE_nempty_seplist_o__i__s__i__s_exp_p_; }
    // @Override
    enterRule(listener) {
        if (listener.enterNempty_seplist_o__i__s__i__s_exp_p_) {
            listener.enterNempty_seplist_o__i__s__i__s_exp_p_(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNempty_seplist_o__i__s__i__s_exp_p_) {
            listener.exitNempty_seplist_o__i__s__i__s_exp_p_(this);
        }
    }
}
exports.Nempty_seplist_o__i__s__i__s_exp_p_Context = Nempty_seplist_o__i__s__i__s_exp_p_Context;
class Allow_empty_o_nempty_seplist_o__i__s__i__s_exp_p__p_Context extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    nempty_seplist_o__i__s__i__s_exp_p_() {
        return this.tryGetRuleContext(0, Nempty_seplist_o__i__s__i__s_exp_p_Context);
    }
    // @Override
    get ruleIndex() { return lua_shParser.RULE_allow_empty_o_nempty_seplist_o__i__s__i__s_exp_p__p_; }
    // @Override
    enterRule(listener) {
        if (listener.enterAllow_empty_o_nempty_seplist_o__i__s__i__s_exp_p__p_) {
            listener.enterAllow_empty_o_nempty_seplist_o__i__s__i__s_exp_p__p_(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAllow_empty_o_nempty_seplist_o__i__s__i__s_exp_p__p_) {
            listener.exitAllow_empty_o_nempty_seplist_o__i__s__i__s_exp_p__p_(this);
        }
    }
}
exports.Allow_empty_o_nempty_seplist_o__i__s__i__s_exp_p__p_Context = Allow_empty_o_nempty_seplist_o__i__s__i__s_exp_p__p_Context;
class Seplist_o__i__s__i__s_exp_p_Context extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    allow_empty_o_nempty_seplist_o__i__s__i__s_exp_p__p_() {
        return this.getRuleContext(0, Allow_empty_o_nempty_seplist_o__i__s__i__s_exp_p__p_Context);
    }
    // @Override
    get ruleIndex() { return lua_shParser.RULE_seplist_o__i__s__i__s_exp_p_; }
    // @Override
    enterRule(listener) {
        if (listener.enterSeplist_o__i__s__i__s_exp_p_) {
            listener.enterSeplist_o__i__s__i__s_exp_p_(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSeplist_o__i__s__i__s_exp_p_) {
            listener.exitSeplist_o__i__s__i__s_exp_p_(this);
        }
    }
}
exports.Seplist_o__i__s__i__s_exp_p_Context = Seplist_o__i__s__i__s_exp_p_Context;
class ArgsContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    seplist_o__i__s__i__s_exp_p_() {
        return this.tryGetRuleContext(0, Seplist_o__i__s__i__s_exp_p_Context);
    }
    tableconstructor() {
        return this.tryGetRuleContext(0, TableconstructorContext);
    }
    STR_LIT() { return this.tryGetToken(lua_shParser.STR_LIT, 0); }
    // @Override
    get ruleIndex() { return lua_shParser.RULE_args; }
    // @Override
    enterRule(listener) {
        if (listener.enterArgs) {
            listener.enterArgs(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitArgs) {
            listener.exitArgs(this);
        }
    }
}
exports.ArgsContext = ArgsContext;
class Opt_o_funcname_p_Context extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    funcname() {
        return this.tryGetRuleContext(0, FuncnameContext);
    }
    // @Override
    get ruleIndex() { return lua_shParser.RULE_opt_o_funcname_p_; }
    // @Override
    enterRule(listener) {
        if (listener.enterOpt_o_funcname_p_) {
            listener.enterOpt_o_funcname_p_(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOpt_o_funcname_p_) {
            listener.exitOpt_o_funcname_p_(this);
        }
    }
}
exports.Opt_o_funcname_p_Context = Opt_o_funcname_p_Context;
class Opt_o_parlist_p_Context extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    parlist() {
        return this.tryGetRuleContext(0, ParlistContext);
    }
    // @Override
    get ruleIndex() { return lua_shParser.RULE_opt_o_parlist_p_; }
    // @Override
    enterRule(listener) {
        if (listener.enterOpt_o_parlist_p_) {
            listener.enterOpt_o_parlist_p_(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOpt_o_parlist_p_) {
            listener.exitOpt_o_parlist_p_(this);
        }
    }
}
exports.Opt_o_parlist_p_Context = Opt_o_parlist_p_Context;
class FunctiondefContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    opt_o_funcname_p_() {
        return this.getRuleContext(0, Opt_o_funcname_p_Context);
    }
    opt_o_parlist_p_() {
        return this.getRuleContext(0, Opt_o_parlist_p_Context);
    }
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    // @Override
    get ruleIndex() { return lua_shParser.RULE_functiondef; }
    // @Override
    enterRule(listener) {
        if (listener.enterFunctiondef) {
            listener.enterFunctiondef(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFunctiondef) {
            listener.exitFunctiondef(this);
        }
    }
}
exports.FunctiondefContext = FunctiondefContext;
class VarargsContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return lua_shParser.RULE_varargs; }
    // @Override
    enterRule(listener) {
        if (listener.enterVarargs) {
            listener.enterVarargs(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitVarargs) {
            listener.exitVarargs(this);
        }
    }
}
exports.VarargsContext = VarargsContext;
class Nempty_seplist_o__i__s__i__s_name_p_Context extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    name() {
        return this.getRuleContext(0, NameContext);
    }
    nempty_seplist_o__i__s__i__s_name_p_() {
        return this.tryGetRuleContext(0, Nempty_seplist_o__i__s__i__s_name_p_Context);
    }
    // @Override
    get ruleIndex() { return lua_shParser.RULE_nempty_seplist_o__i__s__i__s_name_p_; }
    // @Override
    enterRule(listener) {
        if (listener.enterNempty_seplist_o__i__s__i__s_name_p_) {
            listener.enterNempty_seplist_o__i__s__i__s_name_p_(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNempty_seplist_o__i__s__i__s_name_p_) {
            listener.exitNempty_seplist_o__i__s__i__s_name_p_(this);
        }
    }
}
exports.Nempty_seplist_o__i__s__i__s_name_p_Context = Nempty_seplist_o__i__s__i__s_name_p_Context;
class ParlistContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    nempty_seplist_o__i__s__i__s_name_p_() {
        return this.tryGetRuleContext(0, Nempty_seplist_o__i__s__i__s_name_p_Context);
    }
    varargs() {
        return this.tryGetRuleContext(0, VarargsContext);
    }
    // @Override
    get ruleIndex() { return lua_shParser.RULE_parlist; }
    // @Override
    enterRule(listener) {
        if (listener.enterParlist) {
            listener.enterParlist(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitParlist) {
            listener.exitParlist(this);
        }
    }
}
exports.ParlistContext = ParlistContext;
class Nempty_seplist_o_fieldsep_s_field_p_Context extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    field() {
        return this.getRuleContext(0, FieldContext);
    }
    nempty_seplist_o_fieldsep_s_field_p_() {
        return this.tryGetRuleContext(0, Nempty_seplist_o_fieldsep_s_field_p_Context);
    }
    fieldsep() {
        return this.tryGetRuleContext(0, FieldsepContext);
    }
    // @Override
    get ruleIndex() { return lua_shParser.RULE_nempty_seplist_o_fieldsep_s_field_p_; }
    // @Override
    enterRule(listener) {
        if (listener.enterNempty_seplist_o_fieldsep_s_field_p_) {
            listener.enterNempty_seplist_o_fieldsep_s_field_p_(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNempty_seplist_o_fieldsep_s_field_p_) {
            listener.exitNempty_seplist_o_fieldsep_s_field_p_(this);
        }
    }
}
exports.Nempty_seplist_o_fieldsep_s_field_p_Context = Nempty_seplist_o_fieldsep_s_field_p_Context;
class Opt_o_fieldsep_p_Context extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    fieldsep() {
        return this.tryGetRuleContext(0, FieldsepContext);
    }
    // @Override
    get ruleIndex() { return lua_shParser.RULE_opt_o_fieldsep_p_; }
    // @Override
    enterRule(listener) {
        if (listener.enterOpt_o_fieldsep_p_) {
            listener.enterOpt_o_fieldsep_p_(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOpt_o_fieldsep_p_) {
            listener.exitOpt_o_fieldsep_p_(this);
        }
    }
}
exports.Opt_o_fieldsep_p_Context = Opt_o_fieldsep_p_Context;
class TableconstructorContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    nempty_seplist_o_fieldsep_s_field_p_() {
        return this.tryGetRuleContext(0, Nempty_seplist_o_fieldsep_s_field_p_Context);
    }
    opt_o_fieldsep_p_() {
        return this.tryGetRuleContext(0, Opt_o_fieldsep_p_Context);
    }
    // @Override
    get ruleIndex() { return lua_shParser.RULE_tableconstructor; }
    // @Override
    enterRule(listener) {
        if (listener.enterTableconstructor) {
            listener.enterTableconstructor(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTableconstructor) {
            listener.exitTableconstructor(this);
        }
    }
}
exports.TableconstructorContext = TableconstructorContext;
class FuncnameContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    funcname() {
        return this.tryGetRuleContext(0, FuncnameContext);
    }
    NAME() { return this.getToken(lua_shParser.NAME, 0); }
    // @Override
    get ruleIndex() { return lua_shParser.RULE_funcname; }
    // @Override
    enterRule(listener) {
        if (listener.enterFuncname) {
            listener.enterFuncname(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFuncname) {
            listener.exitFuncname(this);
        }
    }
}
exports.FuncnameContext = FuncnameContext;
class FieldContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    exp(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpContext);
        }
        else {
            return this.getRuleContext(i, ExpContext);
        }
    }
    NAME() { return this.tryGetToken(lua_shParser.NAME, 0); }
    // @Override
    get ruleIndex() { return lua_shParser.RULE_field; }
    // @Override
    enterRule(listener) {
        if (listener.enterField) {
            listener.enterField(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitField) {
            listener.exitField(this);
        }
    }
}
exports.FieldContext = FieldContext;
class FieldsepContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return lua_shParser.RULE_fieldsep; }
    // @Override
    enterRule(listener) {
        if (listener.enterFieldsep) {
            listener.enterFieldsep(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFieldsep) {
            listener.exitFieldsep(this);
        }
    }
}
exports.FieldsepContext = FieldsepContext;
class BinopContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return lua_shParser.RULE_binop; }
    // @Override
    enterRule(listener) {
        if (listener.enterBinop) {
            listener.enterBinop(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBinop) {
            listener.exitBinop(this);
        }
    }
}
exports.BinopContext = BinopContext;
//# sourceMappingURL=lua_shParser.js.map
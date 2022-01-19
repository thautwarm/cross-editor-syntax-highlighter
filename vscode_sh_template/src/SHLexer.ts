// Generated from .\src\SH.g4 by ANTLR 4.9.0-SNAPSHOT


import { SH } from "./SH_require"


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class SHLexer extends Lexer {
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

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "LINE_END", "DIGIT", 
		"INT", "VERSION", "FLT", "EXP", "STR", "SPACE", "LINE_COMMENT", "ID_CHAR", 
		"ID",
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
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(SHLexer._LITERAL_NAMES, SHLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return SHLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(SHLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "SH.g4"; }

	// @Override
	public get ruleNames(): string[] { return SHLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return SHLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return SHLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return SHLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x17\xAE\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03" +
		"\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03" +
		"\x07\x03\b\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\v\x03\f" +
		"\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03" +
		"\x11\x03\x12\x03\x12\x03\x13\x06\x13o\n\x13\r\x13\x0E\x13p\x03\x14\x03" +
		"\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14y\n\x14\x05\x14{\n\x14\x03" +
		"\x15\x03\x15\x03\x15\x05\x15\x80\n\x15\x03\x16\x05\x16\x83\n\x16\x03\x16" +
		"\x03\x16\x03\x16\x05\x16\x88\n\x16\x03\x17\x03\x17\x03\x17\x03\x17\x07" +
		"\x17\x8E\n\x17\f\x17\x0E\x17\x91\v\x17\x03\x17\x03\x17\x03\x18\x06\x18" +
		"\x96\n\x18\r\x18\x0E\x18\x97\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x07" +
		"\x19\x9F\n\x19\f\x19\x0E\x19\xA2\v\x19\x03\x1A\x05\x1A\xA5\n\x1A\x03\x1B" +
		"\x03\x1B\x03\x1B\x07\x1B\xAA\n\x1B\f\x1B\x0E\x1B\xAD\v\x1B\x02\x02\x02" +
		"\x1C\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F" +
		"\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F" +
		"\x1D\x02\x10\x1F\x02\x11!\x02\x02#\x02\x02%\x02\x02\'\x02\x12)\x02\x02" +
		"+\x02\x13-\x02\x14/\x02\x151\x02\x163\x02\x025\x02\x17\x03\x02\t\x04\x02" +
		"\f\f\x0F\x0F\x03\x022;\x04\x02GGgg\x03\x02$$\x05\x02\v\f\x0F\x0F\"\"\x06" +
		"\x02C\\aac|\u4E02\u9FA7\x04\x02//2;\x02\xB4\x02\x03\x03\x02\x02\x02\x02" +
		"\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02" +
		"\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11" +
		"\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17" +
		"\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D" +
		"\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02+\x03" +
		"\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02\x02\x02\x021\x03\x02\x02" +
		"\x02\x025\x03\x02\x02\x02\x037\x03\x02\x02\x02\x05>\x03\x02\x02\x02\x07" +
		"A\x03\x02\x02\x02\tD\x03\x02\x02\x02\vF\x03\x02\x02\x02\rH\x03\x02\x02" +
		"\x02\x0FK\x03\x02\x02\x02\x11N\x03\x02\x02\x02\x13P\x03\x02\x02\x02\x15" +
		"R\x03\x02\x02\x02\x17U\x03\x02\x02\x02\x19Z\x03\x02\x02\x02\x1B`\x03\x02" +
		"\x02\x02\x1De\x03\x02\x02\x02\x1Fg\x03\x02\x02\x02!i\x03\x02\x02\x02#" +
		"k\x03\x02\x02\x02%n\x03\x02\x02\x02\'r\x03\x02\x02\x02)|\x03\x02\x02\x02" +
		"+\x82\x03\x02\x02\x02-\x89\x03\x02\x02\x02/\x95\x03\x02\x02\x021\x9B\x03" +
		"\x02\x02\x023\xA4\x03\x02\x02\x025\xA6\x03\x02\x02\x0278\x07h\x02\x02" +
		"89\x07q\x02\x029:\x07t\x02\x02:;\x07o\x02\x02;<\x07c\x02\x02<=\x07v\x02" +
		"\x02=\x04\x03\x02\x02\x02>?\x07?\x02\x02?@\x07?\x02\x02@\x06\x03\x02\x02" +
		"\x02AB\x07#\x02\x02BC\x07?\x02\x02C\b\x03\x02\x02\x02DE\x07@\x02\x02E" +
		"\n\x03\x02\x02\x02FG\x07>\x02\x02G\f\x03\x02\x02\x02HI\x07@\x02\x02IJ" +
		"\x07?\x02\x02J\x0E\x03\x02\x02\x02KL\x07>\x02\x02LM\x07?\x02\x02M\x10" +
		"\x03\x02\x02\x02NO\x07\x80\x02\x02O\x12\x03\x02\x02\x02PQ\x07`\x02\x02" +
		"Q\x14\x03\x02\x02\x02RS\x07(\x02\x02ST\x07(\x02\x02T\x16\x03\x02\x02\x02" +
		"UV\x07v\x02\x02VW\x07t\x02\x02WX\x07w\x02\x02XY\x07g\x02\x02Y\x18\x03" +
		"\x02\x02\x02Z[\x07h\x02\x02[\\\x07c\x02\x02\\]\x07n\x02\x02]^\x07u\x02" +
		"\x02^_\x07g\x02\x02_\x1A\x03\x02\x02\x02`a\x07p\x02\x02ab\x07w\x02\x02" +
		"bc\x07n\x02\x02cd\x07n\x02\x02d\x1C\x03\x02\x02\x02ef\x07}\x02\x02f\x1E" +
		"\x03\x02\x02\x02gh\x07\x7F\x02\x02h \x03\x02\x02\x02ij\t\x02\x02\x02j" +
		"\"\x03\x02\x02\x02kl\t\x03\x02\x02l$\x03\x02\x02\x02mo\x05#\x12\x02nm" +
		"\x03\x02\x02\x02op\x03\x02\x02\x02pn\x03\x02\x02\x02pq\x03\x02\x02\x02" +
		"q&\x03\x02\x02\x02rs\x07x\x02\x02sz\x05%\x13\x02tu\x070\x02\x02ux\x05" +
		"%\x13\x02vw\x070\x02\x02wy\x05%\x13\x02xv\x03\x02\x02\x02xy\x03\x02\x02" +
		"\x02y{\x03\x02\x02\x02zt\x03\x02\x02\x02z{\x03\x02\x02\x02{(\x03\x02\x02" +
		"\x02|\x7F\x05%\x13\x02}~\x070\x02\x02~\x80\x05%\x13\x02\x7F}\x03\x02\x02" +
		"\x02\x7F\x80\x03\x02\x02\x02\x80*\x03\x02\x02\x02\x81\x83\x07/\x02\x02" +
		"\x82\x81\x03\x02\x02\x02\x82\x83\x03\x02\x02\x02\x83\x84\x03\x02\x02\x02" +
		"\x84\x87\x05)\x15\x02\x85\x86\t\x04\x02\x02\x86\x88\x05%\x13\x02\x87\x85" +
		"\x03\x02\x02\x02\x87\x88\x03\x02\x02\x02\x88,\x03\x02\x02\x02\x89\x8F" +
		"\x07$\x02\x02\x8A\x8B\x07^\x02\x02\x8B\x8E\v\x02\x02\x02\x8C\x8E\n\x05" +
		"\x02\x02\x8D\x8A\x03\x02\x02\x02\x8D\x8C\x03\x02\x02\x02\x8E\x91\x03\x02" +
		"\x02\x02\x8F\x8D\x03\x02\x02\x02\x8F\x90\x03\x02\x02\x02\x90\x92\x03\x02" +
		"\x02\x02\x91\x8F\x03\x02\x02\x02\x92\x93\x07$\x02\x02\x93.\x03\x02\x02" +
		"\x02\x94\x96\t\x06\x02\x02\x95\x94\x03\x02\x02\x02\x96\x97\x03\x02\x02" +
		"\x02\x97\x95\x03\x02\x02\x02\x97\x98\x03\x02\x02\x02\x98\x99\x03\x02\x02" +
		"\x02\x99\x9A\b\x18\x02\x02\x9A0\x03\x02\x02\x02\x9B\x9C\x07/\x02\x02\x9C" +
		"\xA0\x07/\x02\x02\x9D\x9F\n\x02\x02\x02\x9E\x9D\x03\x02\x02\x02\x9F\xA2" +
		"\x03\x02\x02\x02\xA0\x9E\x03\x02\x02\x02\xA0\xA1\x03\x02\x02\x02\xA12" +
		"\x03\x02\x02\x02\xA2\xA0\x03\x02\x02\x02\xA3\xA5\t\x07\x02\x02\xA4\xA3" +
		"\x03\x02\x02\x02\xA54\x03\x02\x02\x02\xA6\xAB\x053\x1A\x02\xA7\xAA\x05" +
		"3\x1A\x02\xA8\xAA\t\b\x02\x02\xA9\xA7\x03\x02\x02\x02\xA9\xA8\x03\x02" +
		"\x02\x02\xAA\xAD\x03\x02\x02\x02\xAB\xA9\x03\x02\x02\x02\xAB\xAC\x03\x02" +
		"\x02\x02\xAC6\x03\x02\x02\x02\xAD\xAB\x03\x02\x02\x02\x10\x02pxz\x7F\x82" +
		"\x87\x8D\x8F\x97\xA0\xA4\xA9\xAB\x03\x02\x03\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SHLexer.__ATN) {
			SHLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SHLexer._serializedATN));
		}

		return SHLexer.__ATN;
	}

}

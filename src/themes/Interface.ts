export namespace ITheme {
	export type Color = string | undefined

	export enum Name {
		DEFAULT = "default"
	}

	export type List = {
		[key in Name]: Properties
	}

	export interface Properties {
		colors: Colors
	}
	export interface Colors {
		orange: Color
		red: Color
		green: Color
		blue: Color
		purple: Color
		light: NaturalColors
		dark: NaturalColors
		appleLight: NaturalColors
		appleDark: NaturalColors
	}
	export interface NaturalColors {
		white: Color,
		neutral1: Color
		neutral2: Color
		neutral3: Color
		neutral4: Color
		neutral5: Color
		neutral6: Color
		neutral7: Color
		neutral8: Color
		black: Color
	}
}

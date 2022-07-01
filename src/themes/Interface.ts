import { Property } from "csstype";

export namespace ITheme {

	export enum Name {
		DEFAULT = "default"
	}

	export type List = {
		[key in Name]: Properties
	}

	export interface Properties {
		colors: Colors
	}

	export interface BaseColors {
		orange: Property.Color
		red: Property.Color
		green: Property.Color
		blue: Property.Color
		purple: Property.Color
	}

	export interface Colors extends BaseColors {
		light: NeutralColors
		dark: NeutralColors
		appleLight: NeutralColors
		appleDark: NeutralColors
	}

	export interface NeutralColors {
		white: Property.Color
		neutral1: Property.Color
		neutral2: Property.Color
		neutral3: Property.Color
		neutral4: Property.Color
		neutral5: Property.Color
		neutral6: Property.Color
		neutral7: Property.Color
		neutral8: Property.Color
		black: Property.Color
	}
}

import { ReactElement } from "react";
import { ITheme } from "@themes/Interface";
import { Property } from "csstype";

export namespace Hook {

	export interface HOC {
		children: ReactElement
	}

	export interface ThemeProvider extends HOC {
		theme?: ITheme.Name
	}

	export interface Theme {
		color: (name: keyof ITheme.BaseColors) => Property.Color | undefined
		neutral: (name: keyof ITheme.NeutralColors) => Property.Color | undefined
		ChangeTheme: (themeName: ITheme.Name) => void
	};


}

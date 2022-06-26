import { ReactElement } from "react";
import { ITheme } from "@themes/Interface";

export namespace Hook {
	export interface HOC {
		children: ReactElement
	}

	export interface ThemeProvider extends HOC {
		theme?: ITheme.Name
	}

	export interface Theme {
		colors: ITheme.Colors
		ChangeTheme: (themeName: ITheme.Name) => void
	};


}

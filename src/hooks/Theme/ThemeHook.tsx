import { createContext, useContext, useState } from "react";
import { Hook } from "@hooks/Interface";
import Themes from "@themes/index";
import { ITheme } from "@themes/Interface";

const ThemeContext = createContext<Hook.Theme>({
	colors: Themes[ITheme.Name.DEFAULT].colors,
	ChangeTheme: () => {}
});

const ThemeHook = (defaultTheme?: ITheme.Name) : Hook.Theme => {
	const themeInstance = Themes[defaultTheme || ITheme.Name.DEFAULT];
	const [theme, setTheme] = useState<ITheme.Properties>(themeInstance);


	const ChangeTheme = (themeName: ITheme.Name) => {
		setTheme(Themes[themeName || ITheme.Name.DEFAULT]);
	};

	return {
		colors: theme.colors,
		ChangeTheme
	};

};

export const useTheme = () => useContext<Hook.Theme>(ThemeContext);

export const ThemeProvider = ({ theme, children } : Hook.ThemeProvider ) => {
	return (
		<ThemeContext.Provider value={ThemeHook(theme)}>
			{children}
		</ThemeContext.Provider>
	);
};

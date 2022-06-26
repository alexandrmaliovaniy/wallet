import { ILayout } from "@layouts/Interface";

import "@styles/StyleReset.scss";

const StyleReset = ({ children } : ILayout.HOC ) => {
	return children;
};

export default StyleReset;

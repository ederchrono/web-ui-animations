import welcome from '~/slides/welcome.mdx';
import features from '~/slides/features.mdx';
import wizeTheme from '~/slides/wize-theme.mdx';
import final from '~/slides/final.mdx';

export { default as theme } from './wizeline-theme';
export default [...welcome, ...features, ...wizeTheme, ...final];

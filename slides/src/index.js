import welcome from '~/slides/welcome.mdx'
import intro from '~/slides/intro.mdx'
import importance from '~/slides/importance.mdx'
import examples from '~/slides/examples.mdx'
import communication from '~/slides/communication.mdx'
import final from '~/slides/final.mdx'

export { default as theme } from './wizeline-theme'
export default [
  ...welcome,
  ...intro,
  ...importance,
  ...communication,
  ...examples,
  ...final
]

// why animation is important
// we stopped making animation
// animation as a first class citizen
// success cases
// Do's and dont's of animation
// Get used to animation lingo
// transition != animation
// initial state, end state
// easings
// sequence
// types of animations
// programatic
// css & js
// frame by frame

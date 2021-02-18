import { MDXProvider } from '@mdx-js/react';
import { Deck, Slide, Notes, mdxComponentMap } from 'spectacle';
import { Gitgraph, Orientation, TemplateName } from '@gitgraph/react';

import './App.css';
import slides, { notes } from './slides.mdx';

function App() {
  return (
    /*
    <Deck>
      <Slide>
        <Heading>Welcome to Spectacle</Heading>
        <Gitgraph options={{
          orientation: Orientation.Horizontal,
          template: TemplateName.BlackArrow,
        }}>
        {(gitgraph) => {
          // Simulate git commands with Gitgraph API.
          const master = gitgraph.branch("master");
          master.commit("Initial commit");

          const develop = master.branch("develop");
          develop.commit("Add TypeScript");

          const aFeature = develop.branch("a-feature");
          aFeature
            .commit("Make it work")
            .commit("Make it right")
            .commit("Make it fast");

          develop.merge(aFeature);
          develop.commit("Prepare v1");

          master.merge(develop).tag("v1.0.0");
        }}
      </Gitgraph>
      </Slide>
    </Deck>
    */
    <MDXProvider components={mdxComponentMap}>
      <Deck>
        {slides
          .map((MDXSlide, i) => [MDXSlide, notes[i]])
          .map(([MDXSlide, MDXNote], i) => (
            <Slide key={`slide-${i}`} slideNum={i}>
              <MDXSlide />
              <Notes>
                <MDXNote />
              </Notes>
            </Slide>
          ))}
      </Deck>
    </MDXProvider>
  );
}

export default App;

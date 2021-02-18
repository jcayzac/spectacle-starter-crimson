import { Gitgraph, Orientation, TemplateName } from '@gitgraph/react';

const GitExample1 = () => (
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
)

export default GitExample1;

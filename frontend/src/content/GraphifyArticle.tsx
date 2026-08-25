import type { ReactNode } from "react";

const CodeBlock = ({ children }: { children: string }) => (
  <pre className="surface my-8 overflow-x-auto p-5 text-[13px] leading-relaxed text-foreground/90">
    <code className="font-mono">{children}</code>
  </pre>
);

const PromptCard = ({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) => (
  <div className="surface p-5">
    <p className="mono-tag text-xs text-primary mb-3">{label}</p>
    <p className="text-foreground/90 leading-relaxed">{children}</p>
  </div>
);

const GraphifyArticle = () => {
  return (
    <div className="blog-prose">
      <p>
        You open Claude Code in the morning and carefully explain your project
        architecture. In the afternoon you switch to Cursor. You explain it
        again. Later you try Codex or Aider — and explain it{" "}
        <em>again</em>.
      </p>
      <p>
        Every new agent starts from zero. You waste tokens. You waste time. And
        different models often give inconsistent answers because they never saw
        the same context.
      </p>
      <p>
        This is the classic “AI has no long-term memory” problem.{" "}
        <strong>Graphify solves it.</strong>
      </p>

      <h2>What is Graphify?</h2>
      <p>
        Graphify is an open-source tool that turns your entire codebase into a{" "}
        <strong>queryable knowledge graph</strong>.
      </p>
      <p>
        Instead of forcing the AI to read dozens of files every time, it builds
        a structured map of:
      </p>
      <ul>
        <li>Functions and classes</li>
        <li>How they call each other</li>
        <li>Imports and dependencies</li>
        <li>Key relationships across the project</li>
      </ul>
      <p>
        That map becomes <strong>persistent memory</strong> any AI coding agent
        can use. The screenshot above is a real Graphify view — communities of
        related code, clustered and labeled, sitting on disk as files you can
        commit.
      </p>

      <h2>Why this is powerful for multiple agents</h2>
      <p>
        Once the graph exists, every agent — Claude Code, Cursor, Codex, Aider,
        Gemini CLI — can read the <strong>same</strong> memory.
      </p>

      <div className="not-prose my-10 overflow-x-auto surface">
        <table className="w-full min-w-[32rem] text-sm">
          <thead>
            <tr className="border-b border-white/[0.08]">
              <th className="text-left px-5 py-4 heading-font font-medium text-foreground">
                Without Graphify
              </th>
              <th className="text-left px-5 py-4 heading-font font-medium text-foreground">
                With Graphify
              </th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            {[
              ["Every agent starts from zero", "Every agent starts with the same map"],
              [
                "You re-explain architecture every time",
                "Architecture is already known",
              ],
              ["High token usage", "Dramatically lower token usage"],
              [
                "Inconsistent answers across tools",
                "Consistent structural understanding",
              ],
              [
                "Knowledge dies when the chat ends",
                "Knowledge lives in graphify-out/",
              ],
            ].map(([left, right]) => (
              <tr key={left} className="border-b border-white/[0.06] last:border-0">
                <td className="px-5 py-3.5 align-top">{left}</td>
                <td className="px-5 py-3.5 align-top text-foreground/90">{right}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p>
        The graph is just files — <code>graph.json</code>,{" "}
        <code>GRAPH_REPORT.md</code>, <code>graph.html</code>. You can commit
        them to Git. Now your entire team, and every AI tool they use, shares
        the same understanding of the project.
      </p>

      <h2>A real example</h2>
      <p>
        Say you have a production dashboard that mixes a React frontend, a
        FastAPI backend, and live sensor data.
      </p>

      <div className="not-prose grid gap-4 my-8">
        <PromptCard label="Without Graphify — you type this, then type it again">
          The OEE calculation happens in oee_service.py. It reads from
          sensor_stream. The downtime reasons come from ctc_reason…
        </PromptCard>
        <PromptCard label="With Graphify — you just ask">
          How does OEE get calculated, and where do downtime reasons come from?
        </PromptCard>
      </div>

      <p>
        Any agent can answer because it can traverse the graph instead of
        guessing. You stop being the human memory bus between tools.
      </p>

      <h2>How to set it up</h2>

      <h3>
        <span className="section-index mr-3">01</span>
        Install Graphify
      </h3>
      <p>
        The PyPI package is <code>graphifyy</code> — two y’s. The CLI you run is
        still <code>graphify</code>.
      </p>
      <CodeBlock>{`uv tool install graphifyy
# or
pip install graphifyy`}</CodeBlock>

      <h3>
        <span className="section-index mr-3">02</span>
        Register it with your AI tools
      </h3>
      <p>
        This works with Claude Code, Cursor, Codex, Aider, Gemini CLI, and
        others.
      </p>
      <CodeBlock>{`graphify install`}</CodeBlock>

      <h3>
        <span className="section-index mr-3">03</span>
        Build the graph inside your project
      </h3>
      <p>Open the project in any supported agent and run:</p>
      <CodeBlock>{`/graphify .`}</CodeBlock>
      <p>It creates a folder that is the actual memory:</p>
      <CodeBlock>{`graphify-out/
├── graph.json          ← the actual memory
├── GRAPH_REPORT.md     ← human-readable summary
└── graph.html          ← interactive visual map`}</CodeBlock>

      <h3>
        <span className="section-index mr-3">04</span>
        Share it with the team
      </h3>
      <CodeBlock>{`git add graphify-out/
git commit -m "Add project knowledge graph"`}</CodeBlock>
      <p>
        Every teammate, and every AI agent they use, now has the same memory.
      </p>

      <h3>
        <span className="section-index mr-3">05</span>
        Keep it updated
      </h3>
      <p>When the code changes in a meaningful way:</p>
      <CodeBlock>{`/graphify . --update`}</CodeBlock>

      <h2>Best practices</h2>
      <ul>
        <li>
          <strong>Commit the graph.</strong> Treat <code>graphify-out/</code>{" "}
          like documentation.
        </li>
        <li>
          <strong>Use it for onboarding.</strong> New teammates — and new AI
          sessions — get architectural context immediately.
        </li>
        <li>
          <strong>Ask structural questions.</strong> Graphify shines on
          “what depends on this?”, “how does data flow from sensors to the
          dashboard?”, and “what breaks if I change this service?”
        </li>
        <li>
          <strong>Mix agents on purpose.</strong> Claude for deep reasoning,
          Cursor for fast edits, Codex for generation — all reading the same
          graph.
        </li>
      </ul>

      <h2>Advanced: a mega-brain</h2>
      <p>
        Want one graph that covers multiple projects? Graphify can merge graphs
        and keep a global registry, so you can ask cross-project questions from
        a single place. That is especially useful when you maintain several
        related services.
      </p>

      <h2>Final thoughts</h2>
      <p>
        The biggest hidden cost of AI coding is <strong>re-explaining context</strong>.
        Graphify removes that cost.
      </p>
      <p>
        You build the map once. Every agent, every teammate, every future
        session starts with the same shared understanding.
      </p>
      <p>Less repetition. Fewer tokens. Better consistency. That’s the real power.</p>
      <p>
        Try it on your next project. Once you ask a deep architectural question
        and get a precise answer without re-explaining anything, you will not go
        back.
      </p>

      <p>
        <a
          href="https://github.com/Graphify-Labs/graphify"
          target="_blank"
          rel="noreferrer"
        >
          Graphify on GitHub
        </a>
        {" · "}
        <a href="https://pypi.org/project/graphifyy/" target="_blank" rel="noreferrer">
          graphifyy on PyPI
        </a>
      </p>
    </div>
  );
};

export default GraphifyArticle;

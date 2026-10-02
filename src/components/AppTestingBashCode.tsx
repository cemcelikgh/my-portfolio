import type { JSX } from 'react'
import type { BundledLanguage } from 'shiki'
import { toJsxRuntime } from 'hast-util-to-jsx-runtime'
import { Fragment } from 'react'
import { jsx, jsxs } from 'react/jsx-runtime'
import { codeToHast } from 'shiki'

function AppTestingBashCode() {
  return (
    <div>
      <CodeBlock lang="bash">
{`PASS  src/App.test.js
  √ renders without crashing (25ms)
  √ Header should display (25ms)
  √ emoji list should load (15ms)
  √ the searched emoji should filter (22ms)
  √ click event should copy (9ms)

Test Suites: 1 passed, 1 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        2.789s
Ran all test suites.`}
      </CodeBlock>
    </div>
  )
}

interface Props {
  children: string
  lang: BundledLanguage
}

async function CodeBlock(props: Props) {
  const out = await codeToHast(props.children, {
    lang: props.lang,
    theme: 'slack-dark'
  })

  return toJsxRuntime(out, {
    Fragment,
    jsx,
    jsxs,
    components: {
      pre: props => <pre data-custom-codeblock {...props} />
    },
  }) as JSX.Element
}

export default AppTestingBashCode;

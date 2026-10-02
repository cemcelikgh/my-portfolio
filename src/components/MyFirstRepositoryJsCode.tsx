import type { JSX } from 'react'
import type { BundledLanguage } from 'shiki'
import { toJsxRuntime } from 'hast-util-to-jsx-runtime'
import { Fragment } from 'react'
import { jsx, jsxs } from 'react/jsx-runtime'
import { codeToHast } from 'shiki'

function MyFirstRepositoryJsCode() {
  return (
    <div>
      <CodeBlock lang="js">
        console.log("Merhaba Dünya");
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

export default MyFirstRepositoryJsCode;

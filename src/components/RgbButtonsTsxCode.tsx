import type { JSX } from 'react'
import type { BundledLanguage } from 'shiki'
import { toJsxRuntime } from 'hast-util-to-jsx-runtime'
import { Fragment } from 'react'
import { jsx, jsxs } from 'react/jsx-runtime'
import { codeToHast } from 'shiki'

function RgbButtonsTsxCode() {
  return (
    <div>
      <CodeBlock lang="tsx">
{`import React, { Component } from 'react';

import Button from 'red-green-blue-buttons';
import 'red-green-blue-buttons/dist/index.css';

class Example extends Component {
  render() {
    return <Button type='green' text='ON' />
  }
}`}
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

export default RgbButtonsTsxCode;

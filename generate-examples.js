const fs = require('fs')
const path = require('path')
const systemDocs = require('system-docs')
const RebassNative = require('./dist')

const keys = Object.keys(RebassNative)

const examples = fs.readdirSync(
  path.join(__dirname, './examples/jsx')
)
  .reduce((a, b) => Object.assign({}, a, {
    [path.basename(b, path.extname(b))]: path.join(__dirname, './examples/jsx', b)
  }), {})

const template = ({
  components = []
}) => `
# Components
<details>
  <summary>Table of Contents</summary>
  <ul>
    ${components.map(({ name }) => `<li><a href='#${name.toLowerCase()}'>${name}</a></li>`).join('\n')}
  </ul>
</details>
${components
    .map(comp => {
      if (!comp.example) console.log(`no example for:`, comp.name)
      return comp
    })
    .map(({ name, props, example, extension }) => (
      `## ${name}
${extension ? `Extends [${extension}](#${extension.toLowerCase()})\n` : ''}
${'```.jsx\n' + example + '\n```\n\n'}
${props.length ? '### Props\n' : ''}
${props.map(prop => (
        `- \`${prop.name}\``
      )).join('\n')}
`)).join('\n')}
`.replace(/\n\n+/g, '\n\n')

const propBlacklist = {
  m: true,
  mt: true,
  mr: true,
  mb: true,
  ml: true,
  mx: true,
  my: true,
  p: true,
  pt: true,
  pr: true,
  pb: true,
  pl: true,
  px: true,
  py: true,
  color: true,
  bg: true,
  w: true,
  f: true
}

const moduleBlacklist = {
  createColors: true,
  invertTheme: true
}

const components = keys
  .filter(key => !moduleBlacklist[key])
  .map(key => {
    const Component = RebassNative[key]
    const {
      propTypes = {},
      defaultProps = {}
    } = Component || {}

    let extension
    if (defaultProps && defaultProps.is) {
      extension = typeof defaultProps.is === 'function'
        ? defaultProps.is.displayName
        : null
    }

    let example
    if (examples[key]) {
      example = fs.readFileSync(examples[key], 'utf8')
    }

    const props = Object.keys(propTypes)
      .filter(key => !propBlacklist[key])
      .map(key => ({
        name: key
      }))

    return {
      name: key,
      extension,
      Component,
      props,
      example
    }
  })
  .filter(c => typeof c.Component === 'function')

const content = template({ components })

fs.writeFileSync(path.join(__dirname, 'docs', 'components', 'list.md'), content)

const propsTableColumns = [
  'prop',
  'default',
  'theme key'
  // 'style type'
]
const createMarkdownPropsTable = docs => {
  const { propTypes = {}, defaultProps = {} } = docs
  const keys = Object.keys(propTypes)
  if (!keys.length) return ''

  const head = [
    propsTableColumns.join(' | '),
    propsTableColumns.map(n => '---').join('|')
  ].join('\n')
  const rows = keys.map(key => {
    const prop = propTypes[key] || {}
    return [
      key,
      defaultProps[key] || '',
      prop.themeKey || 'N/A'
      // prop.styleType || 'N/A'
    ].join(' | ')
  })

  return [ head, ...rows ].join('\n')
}

const createJsxPropsTable = docs => {
  const { propTypes = {}, defaultProps = {} } = docs
  const keys = Object.keys(propTypes)
  if (!keys.length) return ''

  const Column = `RebassNative.Column flexGrow={1} width={1/${propsTableColumns.length}}`
  const head = `
    ${propsTableColumns.map(col => `<${Column}>
        <RebassNative.Lead>${col}</RebassNative.Lead>
      </RebassNative.Column>`).join('\n')}
  `
  const rows = keys.map(key => {
    const prop = propTypes[key] || {}
    return `
    ${[
    key,
    defaultProps[key] || '',
    prop.themeKey || 'N/A'
    // prop.styleType || 'N/A'
  ].map(col => `<${Column}>${col}</RebassNative.Column>`).join('\n')}
    `
  })

  return [
    '<RebassNative.Row flexWrap="wrap" justifyContent="space-between" px={4}>',
    head,
    ...rows,
    '</RebassNative.Row>'
  ].join('\n')
}

const getName = component => component.displayName ||
  component.name ||
  component

const getMarkdownExtensions = ({ extensions = [] }, originalName) => {
  if (!extensions.length) return ''
  const names = extensions.map(getName)
  const links = names.map(name => `[${name}](${name === originalName
    ? `http://jxnblk.com/rebass/components/${name}`
    : `/components/${name}`})`)
  return 'Extends: ' + links.join(' > ')
}

const getJsxExtensions = ({ extensions = [] }, originalName) => {
  if (!extensions.length) return ''
  const names = extensions.map(getName)
  const links = names
    .map(name => `<RebassNative.ButtonOutline onPress={() => {
    ${name === originalName
    ? `// open http://jxnblk.com/rebass/components/${name}`
    : `this.props.navigation.navigate('${name}Screen')`}
  }}>${name}</RebassNative.ButtonOutline>`)
  return links.join('<RebassNative.Text> → </RebassNative.Text>')
}

// build individual component files
Object.keys(RebassNative)
  .filter(name => name[0].toUpperCase() === name[0])
  .forEach(name => {
    if (name === 'index') return
    const docs = systemDocs(RebassNative[name])
    const example = examples[name] ? fs.readFileSync(examples[name], 'utf8')
      : (docs.extensions || []).map(getName).some(ext => ext === 'Text')
        ? `<${name} children="Example"/>` : `<${name}/>`
    const table = createMarkdownPropsTable(docs)
    const extensions = getMarkdownExtensions(docs, name)
    const content = [
      '# ' + name,
      '```.jsx\n' + example + '\n```\n\n',
      extensions,
      table
    ]
      .filter(Boolean)
      .join('\n\n')
    const file = path.join(__dirname, 'docs', 'components', name + '.md')
    fs.writeFileSync(file, content)

    fs.writeFileSync(path.join(__dirname, 'examples', 'app', 'screens', name + 'Screen.js'), `
import React from 'react';
import {ScrollView} from 'react-native'
import * as RebassNative from 'rebass-native'

export class ${name}Screen extends React.Component {
  static navigationOptions = {
    title: '${name}',
  };
  render () {
    return (
      <ScrollView>
        <RebassNative.Subhead mx={4} my={2}>Demo</RebassNative.Subhead>
        <RebassNative.Banner bg="white">
        ${example.replace(/<\//g, '</RebassNative.').replace(/(<)([^/])/g, '<RebassNative.$2')}
        </RebassNative.Banner>

        <RebassNative.Subhead mx={4} my={2}>Code</RebassNative.Subhead>
        <RebassNative.Code bg="black" color="lime" p={4}>{\`${example}\`}</RebassNative.Code>

        <RebassNative.Subhead mx={4} my={2}>Inheritance</RebassNative.Subhead>
        <RebassNative.Flex px={4} flexDirection="row">${getJsxExtensions(docs, name)}</RebassNative.Flex>

        <RebassNative.Subhead mx={4} my={2}>Props</RebassNative.Subhead>
        ${createJsxPropsTable(docs)}
      </ScrollView>
    )
  }
}
    `)
  })

console.log('Generated docs/components/list.md')

fs.writeFileSync(path.join(__dirname, 'examples', 'app', 'RootStack.js'), `
import { createStackNavigator } from 'react-navigation'
import {IndexScreen} from './IndexScreen.js'
${components
    .map(getName)
    .map(name => `import {${name}Screen} from './screens/${name}Screen.js'`)
    .join('\n')}

export const RootStack = createStackNavigator(
  {
    IndexScreen,
    ${components.map(getName).map(name => `${name}Screen`).join(',\n    ')}
  },
  {
    initialRouteName: 'IndexScreen'
  }
)
`)

fs.writeFileSync(path.join(__dirname, 'examples', 'app', 'IndexScreen.js'), `

import React, { Component } from 'react'
import {
  Flex,
  ButtonTransparent
} from 'rebass-native'
import {ScrollView} from 'react-native'

export class IndexScreen extends Component {
  static navigationOptions = {
    title: 'Rebass Native',
  };
  render () {
    return (<ScrollView>
      ${components.map(getName).map(name => `
      <ButtonTransparent
        textProps={{color: 'black', textAlign: 'left'}}
        onPress={() => this.props.navigation.navigate('${name}Screen')}
      >${name}</ButtonTransparent>
      `).join('\n')}
    </ScrollView>)
  }
}

`)

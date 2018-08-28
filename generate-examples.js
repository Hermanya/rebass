const fs = require('fs')
const path = require('path')
const systemDocs = require('system-docs')
const RebassNative = require('./dist')

const filename = path.join(__dirname, 'docs', 'components', 'list.md')

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

fs.writeFileSync(filename, content)

const createPropsTable = docs => {
  const { propTypes = {}, defaultProps = {} } = docs
  const keys = Object.keys(propTypes)
  if (!keys.length) return ''
  const cols = [
    'prop',
    'default',
    'theme key',
    'style type'
  ]
  const head = [
    cols.join(' | '),
    cols.map(n => '---').join('|')
  ].join('\n')
  const rows = keys.map(key => {
    const prop = propTypes[key] || {}
    return [
      key,
      defaultProps[key] || '',
      prop.themeKey || 'N/A',
      prop.styleType || 'N/A'
    ].join(' | ')
  })

  return [ head, ...rows ].join('\n')
}

const getName = component => component.displayName ||
  component.name ||
  component

const getExtensions = ({ extensions = [] }, originalName) => {
  if (!extensions.length) return ''
  const names = extensions.map(getName)
  const links = names.map(name => `[${name}](${name === originalName
    ? `http://jxnblk.com/rebass/components/${name}`
    : `/components/${name}`})`)
  return 'Extends: ' + links.join(' > ')
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
    const table = createPropsTable(docs)
    const extensions = getExtensions(docs, name)
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
import RebassNative from 'rebass-native'

export const ${name}Screen = () => <RebassNative.Box>
  <RebassNative.Heading>${name}</RebassNative.Heading>
  ${example.replace(/<\//i, '</RebassNative.').replace(/(<)([^/])/i, '<RebassNative.$2')}
  <RebassNative.Code>{\`${example}\`}</RebassNative.Code>
  <RebassNative.Text>{\`${extensions}\`}</RebassNative.Text>
  <RebassNative.Pre>{\`${table}\`}</RebassNative.Pre>
</RebassNative.Box>
    `)
  })

console.log('Generated docs/components/list.md')

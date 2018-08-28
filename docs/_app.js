import React from 'react'
import { Provider as RefunkProvider } from 'refunk'
import {
  SidebarLayout,
  ScopeProvider
} from '@compositor/x0/components'
import sortBy from 'lodash.sortby'
import pkg from '../package.json'
import * as Rebass from '../src'
import { photo } from './_constants'

const scope = {
  ...Rebass,
  photo
}

const navOrder = [
  'Rebass',
  'getting-started',
  'props',
  'grid-system',
  'theming',
  'extending',
  'server-side-rendering',
  'colors',
  'components'
]

const createNav = routes => [
  ...sortBy([...routes]
    .map(route => {
      if (route.name !== 'index') return route
      return {
        ...route,
        name: 'Components',
        path: '/components'
      }
    }), a => {
    const index = navOrder.indexOf(a.name)
    return index < 0 ? Infinity : index
  }),
  {
    key: 'github',
    name: 'GitHub',
    path: 'https://github.com/hermanya/rebass-native'
  },
  {
    key: 'rebass',
    name: 'Rebass for web',
    path: 'https://github.com/jxnblk/rebass'
  },
  {
    key: 'jxnblk',
    name: 'Based on work of Jxnblk',
    path: 'https://jxnblk.com'
  }
]

export default class extends React.Component {
  render () {
    const {
      routes,
      route,
      children
    } = this.props
    const nav = createNav(routes)

    const disableLayout = route && route.props && route.props.layout === false

    return (
      <ScopeProvider scope={scope}>
        <RefunkProvider pkg={pkg}>
          <Rebass.Provider>
            {disableLayout ? (
              children
            ) : (
              <SidebarLayout
                {...this.props}
                title='Rebass Native'
                routes={nav}
              />
            )}
          </Rebass.Provider>
        </RefunkProvider>
      </ScopeProvider>
    )
  }
}

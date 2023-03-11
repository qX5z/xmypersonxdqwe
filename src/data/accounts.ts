import { IconProp } from '@fortawesome/fontawesome-svg-core'

export interface Account {
  name: string
  href?: string
  icon?: IconProp
  copyEmail?: () => void
}

export const AccountData: Account[] = [
  {
    name: 'GitHub',
    href: 'https://github.com/spatz1337',
  },
  {
    name: 'Google',
    href: 'https://discord.com/users/934593001865510982',
  },
  {
    name: 'Email',
    icon: ['fas', 'envelope'],
  },
]

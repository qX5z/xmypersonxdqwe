import { IconProp } from '@fortawesome/fontawesome-svg-core'

export interface Project {
  title: string
  description: string
  href?: string
  icon: IconProp
}

export const ProjectData: Project[] = [
  {
    title: 'itsnebula.net',
    description:
      "The website you're currently on! Forked from ven.earth, made with Next.js and utilises serverless functions.",
    href: 'https://github.com/itsnebulalol/itsnebula.net',
    icon: ['fas', 'home'],
  },
  {
    title: 'palera1n',
    description:
      "palera1n is an iOS 15.x-16.x jailbreak for checkm8 devices",
    href: 'https://github.com/palera1n/palera1n',
    icon: ['fas', 'droplet'],
  },
  {
    title: 'zyno.us',
    description:
      "The privacy respecting self hosted services.",
    href: 'https://zyno.us',
    icon: ['fas', 'wifi'],
  },
  {
    title: 'last.fm-discord',
    description:
      "Show your last.fm playing status on Discord.",
    href: 'https://github.com/itsnebulalol/last.fm-discord',
    icon: ['fas', 'music'],
  },
  {
    title: 'Permasigner',
    description:
      "Permanently sign IPAs on jailbroken iDevices (persists on stock).",
    href: 'https://github.com/itsnebulalol/permasigner',
    icon: ['fas', 'pen'],
  },
]

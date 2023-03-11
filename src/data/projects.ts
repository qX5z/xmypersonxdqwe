import { IconProp } from '@fortawesome/fontawesome-svg-core'

export interface Project {
  title: string
  description: string
  href?: string
  icon: IconProp
}

export const ProjectData: Project[] = [
  {
    title: 'erensezen.com.tr',
    description:
      "you met this boy % i work on c#, c++, async, js, php % i write code and it brings money",
    href: 'https://github.com/spatz1337/spatz',
    icon: ['fas', 'wifi'],
  },
  {
    title: 'Spotify',
    description:
      "spotify artist page",
    href: 'https://open.spotify.com/artist/281tNutqcHbRPVf1qEjeAR?si=b10da26933424969',
    icon: ['fas', 'music'],
  }
]

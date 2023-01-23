import { MainLayout } from 'layouts/MainLayout'
import { GenericMeta } from 'components/GenericMeta'
import { v4 as uuidv4 } from 'uuid'
import { useTheme } from 'next-themes'
import dynamic from 'next/dynamic'
import toast from 'react-hot-toast'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconName } from '@fortawesome/fontawesome-svg-core'
import { Account, AccountData } from 'data/accounts'
import { NowPlayingCard } from 'components/NowPlayingCard'
const Time = dynamic(() => import('components/Time'), {
  ssr: false,
})

const SocialLink = ({ name, href, icon, copyEmail }: Account) => {
  return (
    <a
      aria-label={name}
      onClick={() => copyEmail && copyEmail()}
      className="cursor-pointer fill-current focus:outline-none transition duration-300 ease-in-out hover:text-indigo-900 dark:hover:text-indigo-200"
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <FontAwesomeIcon size="1x" icon={icon ? icon : ['fab', name.toLowerCase() as IconName]} />
    </a>
  )
}

const Home = () => {
  const { theme } = useTheme()

  const copyEmail = () => {
    navigator.clipboard.writeText('legal@spatz1337.dev')
    theme === 'dark'
      ? toast.success('Copied email to clipboard!', {
          style: {
            background: '#333',
            color: '#fff',
          },
        })
      : toast.success('Copied email to clipboard!')
  }

  return (
    <>
      <a rel="me" href="https://discord.com/users/934593001865510982" style={{"display": "none"}}></a>
      <GenericMeta title="Spatz" description="CISSP & Cyber Sec# from the Deutschland." />

      <MainLayout margin={false}>
        <h1 className="text-6xl font-bold">Spatz</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-sm mt-2">
        CISSP & Cyber Sec# from the Deutschland.
        </p>
        <div className="grid grid-flow-col w-48 mt-3 text-lg">
          {AccountData.map((account) => (
            <SocialLink
              key={uuidv4()}
              name={account.name}
              href={account.href}
              icon={account.icon}
              copyEmail={copyEmail}
            />
          ))}
        </div>
        <div className="grid my-8 gap-2">
          <Time />
        </div>
        <div>
          <NowPlayingCard />
        </div>
      </MainLayout>
    </>
  )
}

export default Home

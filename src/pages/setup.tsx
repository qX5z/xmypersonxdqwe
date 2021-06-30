import { MainLayout } from '../layouts/MainLayout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { v4 as uuidv4 } from 'uuid'
import { ComponentData, Component } from '../data/setup'

export const ComponentText = ({ type, href, name }: Component) => {
  return (
    <li>
      <span>{type}</span>
      <FontAwesomeIcon className="mx-2" icon={['far', 'caret-right']} />
      <a rel="noopener noreferrer" target="_blank" href={href}>
        {name}
      </a>
    </li>
  )
}

const Setup = () => {
  return (
    <MainLayout title="Setup" description="Information about my setup.">
      <article className="max-w-none w-full prose prose-lg dark:prose-dark">
        <div>
          <h3>PC</h3>
          <ul>
            {ComponentData.map((component) => (
              <ComponentText
                key={uuidv4()}
                type={component.type}
                href={component.href}
                name={component.name}
              />
            ))}
          </ul>
        </div>
        <div>
          <h3>Laptop</h3>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.apple.com/uk/macbook-pro-13/"
          >
            Apple MacBook Pro (M1)
          </a>
        </div>
      </article>
    </MainLayout>
  )
}

export default Setup
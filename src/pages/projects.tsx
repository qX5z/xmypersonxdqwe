import { MainLayout } from 'layouts/MainLayout'
import { v4 as uuidv4 } from 'uuid'
import { ProjectData } from 'data/projects'
import { ProjectCard } from 'components/ProjectCard'

const Projects = () => {
  return (
    <MainLayout
      title="a.k.a eren sezen"
      description="Deutscher Cybersicherheitsexperte"
    >
      <div className="grid gap-6">
        {ProjectData.map((project) => (
          <ProjectCard
            key={uuidv4()}
            title={project.title}
            description={project.description}
            icon={project.icon}
            href={project.href}
          />
        ))}
      </div>
    </MainLayout>
  )
}

export default Projects

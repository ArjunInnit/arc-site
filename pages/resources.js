import siteMetadata from '@/data/siteMetadata'
import resourcesData from '@/data/resourcesData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'

export default function Resources() {
  return (
    <>
      <PageSEO
        title={`Resources - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-center text-4xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-left md:text-6xl md:leading-14">
            Resources
          </h1>
        </div>
        <div className="container py-12">
          <div className="m-4 flex flex-wrap justify-center md:justify-start">
            {resourcesData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

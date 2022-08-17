import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { allMembersData } from '@/data/membersData'
import TeamCard from '@/components/TeamCard'

export default function Team() {
  return (
    <>
      <PageSEO title={`Team - ${siteMetadata.title}`} />
      <div className="flex flex-col items-start justify-start md:mt-24 md:flex-row md:flex-wrap md:items-center md:justify-center md:space-x-6">
        {allMembersData.map((member) => {
          return (
            <TeamCard
              key={member.id}
              title={member.name}
              description={member.quote}
              imgSrc={member.imgsrc}
              href={member.facebook}
              github={member.github}
              linkedin={member.linkedin}
              facebook={member.facebook}
            />
          )
        })}
      </div>
    </>
  )
}

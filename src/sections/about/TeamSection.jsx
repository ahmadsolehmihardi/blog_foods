import TeamMemberRow from '../../components/team/TeamMemberRow'
import teamMembers from '../../data/teamMembers'

function TeamSection() {
  return (
    <section className="bg-white px-6 py-16 sm:px-8 lg:px-13">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="text-3xl font-black uppercase tracking-wide text-[#252525]">
            Our Team
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#6a625b]">
            A small team behind the recipes, photos, notes, and details that
            keep Oliva running smoothly.
          </p>
        </div>

        <div className="mt-12 space-y-12">
          {teamMembers.map((member) => (
            <TeamMemberRow key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection

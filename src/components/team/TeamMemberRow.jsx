function TeamMemberRow({ member }) {
  return (
    <article className="grid gap-5 sm:grid-cols-[120px_1fr] sm:items-center">
      <img
        src={member.image}
        alt={member.name}
        className="h-28 w-28 rounded-full object-cover"
        loading="lazy"
      />

      <div>
        <h3 className="text-sm font-black uppercase tracking-widest text-[#7b3f64]">
          {member.name}
        </h3>
        <p className="mt-1 text-xs font-bold uppercase tracking-wide text-[#9b928b]">
          {member.role}
        </p>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-[#6a625b]">
          {member.bio}
        </p>
      </div>
    </article>
  )
}

export default TeamMemberRow

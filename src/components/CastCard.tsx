import type { CastMember } from '../data/movies'

function CastCard({ member }: { member: CastMember }) {
  return (
    <figure className="cast-member">
      <img src={member.photo} alt={`Portrait of ${member.name}`} />
      <figcaption>
        <span className="cast-name">{member.name}</span>
        <span className="cast-role">{member.role}</span>
      </figcaption>
    </figure>
  )
}

export default CastCard

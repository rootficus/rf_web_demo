'use client'

import TeamIntro from './TeamIntro'
import TeamStackList from './TeamStackList'
import TeamVisual from './TeamVisual'
import TeamCTA from './TeamCTA'

const AndroidTeamSection = () => (
  <section className="py-16 space-y-16 text-center">
    {/* Introductory heading and description */}
    <TeamIntro />

    {/* Grid of Android tech skills */}
    <TeamStackList />

    {/* Visual or illustration of the team */}
    <TeamVisual />

    {/* Call to action for hiring or contact */}
    <TeamCTA />
  </section>
)

export default AndroidTeamSection

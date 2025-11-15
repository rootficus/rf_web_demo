// components/service/TeamStackList.tsx
'use client'
import SkillItem from '@/components/atoms/SkillItem'

const skills = [
  'Java', 'Kotlin', 'Android SDK', 'Android Studio', 'XML', 'Material Design',
  'Gradle', 'SQLite', 'RESTful APIs', 'Git', 'Firebase', 'Retrofit',
  'Dagger 2', 'Espresso', 'MVVM Architecture', 'LiveData',
  'Room Persistence Library', 'Data Binding', 'Jetpack Compose'
]

const TeamStackList = () => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6 justify-items-center">
    {skills.map((skill, idx) => (
      <SkillItem key={idx} skill={skill} />
    ))}
  </div>
)

export default TeamStackList

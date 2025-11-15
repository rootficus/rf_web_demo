'use client'

const skills = [
  'Java', 'Kotlin', 'Android SDK', 'Android Studio', 'XML', 'Material Design',
  'Gradle', 'SQLite', 'RESTful APIs', 'Git', 'Firebase', 'Retrofit',
  'Dagger 2', 'Espresso', 'MVVM Architecture', 'LiveData',
  'Room Persistence Library', 'Data Binding', 'Jetpack Compose'
]

export default function AndroidSkillSection() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full max-w-5xl">
      {skills.map((skill) => (
        <div
          key={skill}
          className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-center text-sm font-medium text-gray-800 shadow-sm"
        >
          {skill}
        </div>
      ))}
    </div>
  )
}

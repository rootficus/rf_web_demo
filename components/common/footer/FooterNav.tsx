const FooterNav = () => (
  <ul className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
    {['About us', 'Web Development', 'App Development', 'Blog', 'Licenses', 'Contact'].map((item, idx) => (
      <li key={idx}>{item}</li>
    ))}
  </ul>
)

export default FooterNav
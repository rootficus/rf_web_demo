import Button from '@/components/atoms/Button'

const ContactLinks = () => (
  <div className="flex flex-wrap justify-center gap-4 mt-6">
    {['Book a demo', 'Hire Staff', 'Launching your Idea'].map((label, idx) => (
      <Button key={idx} label={label} />
    ))}
  </div>
)

export default ContactLinks
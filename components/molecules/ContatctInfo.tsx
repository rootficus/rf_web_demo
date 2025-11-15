const ContactInfo = () => (
  <div className="text-center space-y-4">
    <p className="text-lg text-gray-700">
      <strong>Address:</strong> 2774 Oak Drive, Plattsburgh, New York
    </p>
    <p className="text-lg text-gray-700">
      <strong>Phone:</strong> <a href="tel:5185643200">518-564-3200</a>
    </p>
    <p className="text-lg text-gray-700">
      <strong>Email:</strong>{' '}
      <a href="mailto:contact@RFBite.com" className="underline">
        contact@RFBite.com
      </a>
    </p>
  </div>
)

export default ContactInfo
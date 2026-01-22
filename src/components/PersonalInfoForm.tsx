interface PersonalInfoFormProps {
  formData: {
    name: string
    phone: string
    whiteCard: string
  }
  onChange: (field: string, value: string) => void
  onReviewAndSign: () => void
}

function PersonalInfoForm({ formData, onChange, onReviewAndSign }: PersonalInfoFormProps) {
  return (
    <>
      <div className="input-row">
        <label htmlFor="name">Full Name <span className="required">*</span></label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="John Smith"
          value={formData.name}
          onChange={(e) => onChange('name', e.target.value)}
        />
      </div>

      <div className="input-row">
        <label htmlFor="phone">Phone Number <span className="required">*</span></label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          placeholder="0412 345 678"
          value={formData.phone}
          onChange={(e) => onChange('phone', e.target.value)}
        />
      </div>

      <div className="input-row">
        <label htmlFor="whiteCard">White Card Number <span className="required">*</span></label>
        <input
          type="text"
          id="whiteCard"
          name="whiteCard"
          required
          placeholder="WC123456"
          value={formData.whiteCard}
          onChange={(e) => onChange('whiteCard', e.target.value)}
        />
        <div className="button-row">
          <button type="button" className="submit-btn" onClick={onReviewAndSign}>
            Review and Sign
          </button>
        </div>
      </div>
    </>
  )
}

export default PersonalInfoForm


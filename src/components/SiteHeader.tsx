interface SiteInfo {
  Name: string
  Address: string
  SiteContact: string
}

interface SiteHeaderProps {
  siteInfo: SiteInfo | null
  onDownloadVCard: () => void
}

function SiteHeader({ siteInfo, onDownloadVCard }: SiteHeaderProps) {
  const formatDate = () => {
    const today = new Date()
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December']

    const dayName = days[today.getDay()]
    const day = today.getDate()
    const monthName = months[today.getMonth()]

    let daySuffix = 'th'
    if (day === 1 || day === 21 || day === 31) {
      daySuffix = 'st'
    } else if (day === 2 || day === 22) {
      daySuffix = 'nd'
    } else if (day === 3 || day === 23) {
      daySuffix = 'rd'
    }

    return `${dayName}, ${day}${daySuffix} of ${monthName}`
  }

  const getContactName = () => {
    if (!siteInfo?.SiteContact) return '...'
    const contactParts = siteInfo.SiteContact.split(' - ')
    return contactParts[0] || siteInfo.SiteContact
  }

  return (
    <div className="two-col">
      <img 
        src="/JSBLogo.jpg" 
        alt="JSB Logo" 
        style={{ maxHeight: '150px', maxWidth: '50%', aspectRatio: '4/1' }} 
      />
      
      <div className="input-container">
        <div className="data-row">
          <label>Site:</label>
          <span id="siteDisplay">{siteInfo?.Name || '...'}</span>
        </div>
        <div className="data-row">
          <label>Site Address:</label>
          <span id="siteAddress">{siteInfo?.Address || '...'}</span>
        </div>
        <div className="data-row">
          <label>Date:</label>
          <span id="dateDisplay">{formatDate()}</span>
        </div>
        <div className="data-row">
          <label>Site Contact:</label>
          <button 
            type="button" 
            className="modal-btn" 
            onClick={onDownloadVCard}
            id="contactButton"
          >
            {getContactName()}
          </button>
        </div>
      </div>
    </div>
  )
}

export default SiteHeader


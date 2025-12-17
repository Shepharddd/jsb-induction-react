import { useState, useEffect } from 'react'
import './App.css'
import SiteHeader from './components/SiteHeader'
import PersonalInfoForm from './components/PersonalInfoForm'
import SubmitModal from './components/SubmitModal'
import Loading from './components/Loading'
import Toast from './components/Toast'

interface SiteInfo {
  Name: string
  Address: string
  SiteContact: string
}

interface InductionData {
  [key: string]: string
}

interface ToastState {
  message: string
  type: 'success' | 'error'
  show: boolean
}

function App() {
  const [siteInfo, setSiteInfo] = useState<SiteInfo | null>(null)
  const [inductionData, setInductionData] = useState<InductionData | null>(null)
  const [loading, setLoading] = useState(true)
  const [toast, setToast] = useState<ToastState>({ message: '', type: 'success', show: false })
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    whiteCard: ''
  })

  useEffect(() => {
    init()
  }, [])

  async function init() {
    const params = new URLSearchParams(window.location.search)
    const site_param = params.get('site') || 'JSBHQ'

    try {
      const { siteInfo: fetchedSiteInfo, inductionData: fetchedInductionData } = await fetchSiteData(site_param)
      setSiteInfo(fetchedSiteInfo)
      setInductionData(fetchedInductionData)
    } catch (error) {
      console.error('Error initializing app:', error)
      showToast('Error loading site data', 'error')
    } finally {
      setLoading(false)
    }
  }

  async function fetchSiteData(site: string) {
    try {
      const response = await fetch(
        `https://default68237f8abf3c425bb92b9518c6d4bf.18.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/93c563fe47744e2990ec3ed2d3fc2ce0/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=1QzeWw_UP5WztZtyg4XqP-gsRsdqMQtm2R0hmU1xkXE`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ site: site })
        }
      )

      const data = await response.json()

      return {
        siteInfo: data.siteInfo || null,
        inductionData: data.inductionData || null
      }
    } catch (error) {
      console.error('Error fetching site data from API:', error)
      throw error
    }
  }

  function showToast(message: string, type: 'success' | 'error' = 'success') {
    setToast({ message, type, show: true })
    setTimeout(() => {
      setToast({ message, type, show: false })
    }, 3000)
  }

  function handleFormChange(field: string, value: string) {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  function handleOpenModal() {
    // Validate form first
    if (!formData.name || !formData.phone || !formData.whiteCard) {
      showToast('Please fill in all required fields', 'error')
      return
    }
    setIsModalOpen(true)
  }

  function handleCloseModal() {
    setIsModalOpen(false)
  }

  function handleResetForm() {
    setFormData({
      name: '',
      phone: '',
      whiteCard: ''
    })
  }

  async function handleSubmitForm(signature: string | null) {
    if (!signature) {
      showToast('Please provide a signature before submitting.', 'error')
      setIsModalOpen(true) // Reopen modal if signature is missing
      return
    }
    // Parse date from display
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

    const dateText = `${dayName}, ${day}${daySuffix} of ${monthName}`
    let parsedDate = new Date()

    const match = dateText.match(/(\d+)(?:st|nd|rd|th)\s+of\s+(\w+)/)
    if (match) {
      const dayNum = parseInt(match[1], 10)
      const monthNameMatch = match[2]
      const monthsList = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December']
      const month = monthsList.indexOf(monthNameMatch)

      if (month !== -1) {
        const year = new Date().getFullYear()
        parsedDate = new Date(year, month, dayNum)
      }
    }

    const submitData = {
      date: parsedDate ? parsedDate.toISOString() : dateText,
      site: siteInfo?.Name || '',
      fullName: formData.name,
      phoneNumber: formData.phone,
      whiteCardNumber: formData.whiteCard,
      signature: signature,
      timestamp: new Date().toISOString()
    }

    setLoading(true)
    setIsModalOpen(false)

    try {
      const response = await fetch(
        'https://default68237f8abf3c425bb92b9518c6d4bf.18.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/95a3332058cc435ba3dc09ec8454ab2e/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=uQZO00H7wt1z8RHqtiLH5mhVO30CboF2_wSHvH9uB-U',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(submitData)
        }
      )

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      showToast('Form submitted successfully!', 'success')
      handleResetForm()
    } catch (error) {
      console.error('Error submitting form:', error)
      showToast('Error submitting form. Please try again.', 'error')
    } finally {
      setLoading(false)
    }
  }

  function downloadVCard() {
    if (!siteInfo?.SiteContact) {
      showToast('Site information not available', 'error')
      return
    }

    const contactParts = siteInfo.SiteContact.split(' - ')
    const name = contactParts[0] || siteInfo.SiteContact
    const phone = contactParts[1] ? contactParts[1].trim().replace(/\s/g, '') : ''

    if (!phone) {
      showToast('Phone number not available', 'error')
      return
    }

    const site = siteInfo.Name

    const vCardContent = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      `FN:${name}`,
      `TEL;TYPE=CELL:${phone}`,
      'END:VCARD'
    ].join('\n')

    const blob = new Blob([vCardContent], { type: 'text/vcard' })
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `${name.replace(/\s/g, '_')}_${site}.vcf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)
  }

  return (
    <>
      <Loading show={loading} />
      <Toast message={toast.message} type={toast.type} show={toast.show} />
      
      <form id="inductionForm" className="induction-form">
        <div className="section">
          <SiteHeader 
            siteInfo={siteInfo}
            onDownloadVCard={downloadVCard}
          />
        </div>

        <div className="section">
          <div className="section-header">
            <h2>Personal Information</h2>
          </div>
          <div className="combined-sections">
            <div className="combined-section-item">
              <div className="form-group">
                <PersonalInfoForm
                  formData={formData}
                  onChange={handleFormChange}
                  onReset={handleResetForm}
                  onReviewAndSign={handleOpenModal}
                />
              </div>
            </div>
          </div>
        </div>
      </form>

      <SubmitModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        inductionData={inductionData}
        formData={formData}
        siteInfo={siteInfo}
        onSubmit={handleSubmitForm}
      />
    </>
  )
}

export default App

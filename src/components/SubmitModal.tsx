import { useEffect, useRef, useState } from 'react'
import SignaturePad from 'signature_pad'
import InductionContent from './InductionContent'

interface SiteInfo {
  Name: string
  Address: string
  SiteContact: string
}

interface SubmitModalProps {
  isOpen: boolean
  onClose: () => void
  inductionData: { [key: string]: string } | null
  formData: {
    name: string
    phone: string
    whiteCard: string
  }
  siteInfo: SiteInfo | null
  onSubmit: (signature: string | null) => void
}

function SubmitModal({ isOpen, onClose, inductionData, onSubmit }: SubmitModalProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const signaturePadRef = useRef<SignaturePad | null>(null)
  const [termsAccepted, setTermsAccepted] = useState(false)

  useEffect(() => {
    if (isOpen) {
      // Prevent body scrolling when modal is open
      document.body.style.overflow = 'hidden'
      
      // Initialize signature pad after a short delay to ensure canvas is rendered
      setTimeout(() => {
        if (canvasRef.current) {
          initSignaturePad()
        }
      }, 100)
    } else {
      // Restore body scrolling when modal is closed
      document.body.style.overflow = ''
      
      if (signaturePadRef.current) {
        signaturePadRef.current.clear()
      }
      
      // Reset terms acceptance when modal closes
      setTermsAccepted(false)
    }

    return () => {
      document.body.style.overflow = ''
      if (signaturePadRef.current) {
        signaturePadRef.current.clear()
      }
    }
  }, [isOpen])

  function initSignaturePad() {
    const canvas = canvasRef.current
    if (!canvas) return

    if (signaturePadRef.current) {
      signaturePadRef.current.clear()
      signaturePadRef.current = null
    }

    const rect = canvas.getBoundingClientRect()
    const ratio = Math.max(window.devicePixelRatio || 1, 1)
    
    // Use 100px height on mobile (max-width: 768px), 200px otherwise
    const isMobile = window.matchMedia('(max-width: 768px)').matches
    const canvasHeight = isMobile ? 100 : 200
    
    canvas.width = rect.width * ratio
    canvas.height = canvasHeight * ratio
    canvas.style.width = rect.width + 'px'
    canvas.style.height = `${canvasHeight}px`

    const ctx = canvas.getContext('2d')
    if (ctx) {
      ctx.scale(ratio, ratio)
    }

    signaturePadRef.current = new SignaturePad(canvas, {
      backgroundColor: 'rgb(255, 255, 255)',
      penColor: 'rgb(0, 0, 0)',
      minWidth: 2,
      maxWidth: 3
    })
  }

  function clearSignature() {
    if (signaturePadRef.current) {
      signaturePadRef.current.clear()
    }
  }

  function handleSubmit() {
    if (!termsAccepted) {
      alert('Please accept the terms and conditions before submitting.')
      return
    }

    if (!signaturePadRef.current || signaturePadRef.current.isEmpty()) {
      onSubmit(null)
      return
    }

    const signature = signaturePadRef.current.toDataURL('image/png')
    onSubmit(signature)
  }

  if (!isOpen) return null

  return (
    <div className="modal" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-content modal-content-large">
        <div className="modal-header">
          <h3>Review and Sign</h3>
          <span className="modal-close" onClick={onClose}>&times;</span>
        </div>
        <div className="modal-body modal-body-pdf">
          <div id="inductionContent" className="induction-content">
            <InductionContent inductionData={inductionData} />
          </div>
          
          <div style={{ marginTop: '0px', paddingTop: '0px' }}>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  style={{ width: '14px', height: '14px', cursor: 'pointer' }}
                />
                <span style={{ fontSize: '12px', color: '#333' }}>
                  I have read and accept the terms and conditions
                </span>
              </label>
            </div>
            

            <div className="signature-container">
              <div className="signature-container-header">
                <p className="signature-note">Please sign below</p>
                <button 
                  type="button" 
                  className="clear-signature-x" 
                  onClick={clearSignature}
                  aria-label="Clear signature"
                >
                  Clear
                </button>
              </div>

              <canvas ref={canvasRef} id="signatureCanvas" width={600} height={200}></canvas>
            </div>

            {/* <p className="terms-agreement-text" style={{ marginTop: '20px' }}>By submitting this form you agree to all the terms and conditions</p> */}
            <button type="button" className="submit-btn" onClick={handleSubmit} style={{ width: '100%', marginTop: '10px' }}>
              Submit Induction Form
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubmitModal


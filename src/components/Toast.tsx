interface ToastProps {
  message: string
  type: 'success' | 'error'
  show: boolean
}

function Toast({ message, type, show }: ToastProps) {
  if (!show || !message) return null

  return (
    <div style={{
      position: 'fixed',
      top: '20px',
      right: '20px',
      backgroundColor: type === 'success' ? '#28a745' : '#dc3545',
      color: 'white',
      padding: '15px 20px',
      borderRadius: '2px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      zIndex: 10000,
      maxWidth: '300px',
      animation: 'slideIn 0.3s ease-out'
    }}>
      {message}
    </div>
  )
}

export default Toast


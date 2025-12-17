interface LoadingProps {
  show: boolean
}

function Loading({ show }: LoadingProps) {
  if (!show) return null

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '20px 40px',
        borderRadius: '8px',
        fontSize: '18px',
        color: '#002512'
      }}>
        Loading...
      </div>
    </div>
  )
}

export default Loading


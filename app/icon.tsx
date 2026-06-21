import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          borderRadius: '8px',
          border: '2px solid #0B132B',
        }}
      >
        <span style={{ color: '#0B132B' }}>D</span>
        <span style={{ color: '#E84A33' }}>p</span>
      </div>
    ),
    { ...size }
  )
}

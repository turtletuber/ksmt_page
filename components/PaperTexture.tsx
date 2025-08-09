'use client'
import { useEffect, useState } from 'react'

export interface PaperTextureProps {
  type?: 'kraft' | 'newsprint' | 'notebook' | 'aged' | 'stained' | 'canvas' | 'parchment'
  intensity?: 'subtle' | 'medium' | 'strong'
  className?: string
  children?: React.ReactNode
  overlay?: boolean
}

export default function PaperTexture({
  type = 'kraft',
  intensity = 'medium',
  className = '',
  children,
  overlay = false,
}: PaperTextureProps) {
  const [noisePattern, setNoisePattern] = useState<string>('')

  useEffect(() => {
    // Generate SVG noise pattern for paper texture
    const generateNoisePattern = () => {
      const svg = `
        <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch"/>
            <feColorMatrix in="turbulence" type="saturate" values="0"/>
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" opacity="0.4"/>
        </svg>
      `
      return `data:image/svg+xml;base64,${btoa(svg)}`
    }

    setNoisePattern(generateNoisePattern())
  }, [])

  const getBackgroundStyles = () => {
    const intensityMap = {
      subtle: 0.3,
      medium: 0.5,
      strong: 0.7,
    }
    
    const opacity = intensityMap[intensity]

    switch (type) {
      case 'kraft':
        return {
          background: `
            radial-gradient(circle at 25% 25%, rgba(244, 228, 188, ${opacity}) 0%, rgba(230, 211, 167, ${opacity * 0.8}) 50%, rgba(212, 193, 156, ${opacity * 0.6}) 100%),
            url(${noisePattern})
          `,
          backgroundBlendMode: 'multiply' as const,
        }

      case 'newsprint':
        return {
          background: `
            linear-gradient(45deg, rgba(250, 250, 249, ${opacity}) 25%, transparent 25%, transparent 75%, rgba(250, 250, 249, ${opacity}) 75%),
            linear-gradient(-45deg, rgba(250, 250, 249, ${opacity}) 25%, transparent 25%, transparent 75%, rgba(250, 250, 249, ${opacity}) 75%),
            url(${noisePattern}),
            #f8f9fa
          `,
          backgroundSize: '6px 6px, 6px 6px, 100px 100px, 100%',
        }

      case 'notebook':
        return {
          background: `
            repeating-linear-gradient(
              transparent,
              transparent 23px,
              rgba(229, 231, 235, ${opacity}) 23px,
              rgba(229, 231, 235, ${opacity}) 25px
            ),
            linear-gradient(90deg, rgba(239, 68, 68, ${opacity * 0.8}) 0px, rgba(239, 68, 68, ${opacity * 0.8}) 2px, transparent 2px),
            url(${noisePattern}),
            #fefefe
          `,
          backgroundSize: '100% 100%, 100% 100%, 80px 80px, 100%',
        }

      case 'aged':
        return {
          background: `
            radial-gradient(ellipse at top, rgba(250, 247, 240, ${opacity}) 0%, rgba(245, 240, 232, ${opacity * 0.9}) 30%, rgba(237, 229, 211, ${opacity * 0.7}) 100%),
            radial-gradient(circle at 60% 40%, rgba(139, 69, 19, ${opacity * 0.1}) 0%, transparent 50%),
            radial-gradient(circle at 20% 80%, rgba(160, 82, 45, ${opacity * 0.08}) 0%, transparent 40%),
            url(${noisePattern})
          `,
          backgroundBlendMode: 'normal, multiply, multiply, overlay' as const,
        }

      case 'stained':
        return {
          background: `
            radial-gradient(circle at 30% 20%, rgba(101, 67, 33, ${opacity * 0.15}) 0%, transparent 25%),
            radial-gradient(circle at 80% 60%, rgba(139, 69, 19, ${opacity * 0.12}) 0%, transparent 30%),
            radial-gradient(circle at 20% 80%, rgba(160, 82, 45, ${opacity * 0.1}) 0%, transparent 35%),
            radial-gradient(circle at 70% 90%, rgba(92, 51, 23, ${opacity * 0.08}) 0%, transparent 20%),
            url(${noisePattern}),
            #faf7f0
          `,
          backgroundBlendMode: 'multiply' as const,
        }

      case 'canvas':
        return {
          background: `
            repeating-linear-gradient(
              0deg,
              rgba(255, 255, 255, ${opacity * 0.8}) 0px,
              rgba(248, 248, 248, ${opacity}) 1px,
              rgba(255, 255, 255, ${opacity * 0.8}) 2px
            ),
            repeating-linear-gradient(
              90deg,
              rgba(255, 255, 255, ${opacity * 0.8}) 0px,
              rgba(248, 248, 248, ${opacity}) 1px,
              rgba(255, 255, 255, ${opacity * 0.8}) 2px
            ),
            url(${noisePattern}),
            #f9f9f9
          `,
          backgroundSize: '2px 2px, 2px 2px, 120px 120px, 100%',
        }

      case 'parchment':
        return {
          background: `
            radial-gradient(ellipse at center, rgba(245, 240, 230, ${opacity}) 0%, rgba(235, 228, 215, ${opacity * 0.9}) 70%, rgba(220, 210, 190, ${opacity * 0.8}) 100%),
            radial-gradient(circle at 40% 30%, rgba(139, 69, 19, ${opacity * 0.08}) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(160, 82, 45, ${opacity * 0.06}) 0%, transparent 30%),
            url(${noisePattern})
          `,
          backgroundBlendMode: 'normal, multiply, multiply, overlay' as const,
        }

      default:
        return {
          background: `url(${noisePattern}), #faf7f0`,
        }
    }
  }

  if (overlay) {
    return (
      <div 
        className={`absolute inset-0 pointer-events-none ${className}`}
        style={{
          ...getBackgroundStyles(),
          zIndex: 1,
        }}
      />
    )
  }

  return (
    <div 
      className={`relative ${className}`}
      style={getBackgroundStyles()}
    >
      {children}
    </div>
  )
}

// Utility component for layered paper backgrounds
export function LayeredPaperBackground({ 
  layers = ['aged', 'stained'], 
  className = '',
  children 
}: { 
  layers?: Array<'kraft' | 'newsprint' | 'notebook' | 'aged' | 'stained' | 'canvas' | 'parchment'>
  className?: string
  children?: React.ReactNode 
}) {
  return (
    <div className={`relative ${className}`}>
      {layers.map((layer, index) => (
        <PaperTexture
          key={index}
          type={layer}
          intensity="subtle"
          overlay
          className={`opacity-${Math.max(20, 60 - index * 15)}`}
        />
      ))}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
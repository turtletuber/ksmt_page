'use client'
import { useEffect, useState } from 'react'
import { generateTornPath, generateRandomRotation, generateRandomOffset } from '@/lib/tornPaperUtils'

export interface TornPaperCardProps {
  children: React.ReactNode
  className?: string
  paperType?: 'kraft' | 'newsprint' | 'aged' | 'stained' | 'cream'
  torn?: 'all' | 'top' | 'bottom' | 'left' | 'right' | 'none'
  hover?: boolean
  roughness?: number
  maxRotation?: number
  shadow?: 'light' | 'medium' | 'heavy'
  style?: React.CSSProperties
}

export default function TornPaperCard({
  children,
  className = '',
  paperType = 'cream',
  torn = 'all',
  hover = true,
  roughness = 0.3,
  maxRotation = 2,
  shadow = 'medium',
  style = {},
}: TornPaperCardProps) {
  const [clipPath, setClipPath] = useState<string>('')
  const [rotation, setRotation] = useState<number>(0)
  const [offset, setOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    // Create a seed based on component props to ensure consistency
    const seed = `${paperType}-${torn}-${roughness}-${maxRotation}`.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
    
    // Generate unique torn path for this instance
    const path = generateTornPath(100, 100, torn, { roughness, seed })
    setClipPath(path)
    
    // Generate random rotation and offset
    setRotation(generateRandomRotation(maxRotation, seed))
    setOffset(generateRandomOffset(3, seed + 50))
  }, [paperType, torn, roughness, maxRotation])

  const getPaperBackground = () => {
    switch (paperType) {
      case 'kraft':
        return 'radial-gradient(circle at 25% 25%, #f4e4bc 0%, #e6d3a7 50%, #d4c19c 100%)'
      case 'newsprint':
        return `
          linear-gradient(45deg, #fafaf9 25%, transparent 25%, transparent 75%, #fafaf9 75%, #fafaf9),
          linear-gradient(-45deg, #fafaf9 25%, transparent 25%, transparent 75%, #fafaf9 75%, #fafaf9),
          #f8f9fa
        `
      case 'aged':
        return 'radial-gradient(ellipse at top, #faf7f0 0%, #f5f0e8 30%, #ede5d3 100%)'
      case 'stained':
        return `
          radial-gradient(circle at 60% 40%, rgba(139, 69, 19, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 20% 80%, rgba(160, 82, 45, 0.08) 0%, transparent 40%),
          #faf7f0
        `
      default:
        return '#faf7f0'
    }
  }

  const getShadow = () => {
    const shadows = {
      light: '0 2px 4px rgba(0, 0, 0, 0.1)',
      medium: '0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.1)',
      heavy: '0 8px 16px rgba(0, 0, 0, 0.2), 0 2px 4px rgba(0, 0, 0, 0.15)'
    }
    return shadows[shadow]
  }

  const getHoverShadow = () => {
    const shadows = {
      light: '0 4px 8px rgba(0, 0, 0, 0.15)',
      medium: '0 8px 20px rgba(0, 0, 0, 0.25), 0 2px 4px rgba(0, 0, 0, 0.15)',
      heavy: '0 16px 32px rgba(0, 0, 0, 0.3), 0 4px 8px rgba(0, 0, 0, 0.2)'
    }
    return shadows[shadow]
  }

  return (
    <div
      className={`relative transition-all duration-300 ease-out ${className}`}
      style={{
        transform: `translate(${offset.x}px, ${offset.y}px) rotate(${rotation}deg) ${
          isHovered ? 'translateY(-6px)' : ''
        }`,
        transformOrigin: 'center',
        willChange: 'transform, box-shadow',
        ...style,
      }}
      onMouseEnter={() => hover && setIsHovered(true)}
      onMouseLeave={() => hover && setIsHovered(false)}
    >
      <div
        style={{
          clipPath: torn !== 'none' ? clipPath : 'none',
          background: getPaperBackground(),
          backgroundSize: paperType === 'newsprint' ? '8px 8px' : 'cover',
          boxShadow: isHovered ? getHoverShadow() : getShadow(),
          transition: 'box-shadow 0.3s ease-out',
        }}
        className="relative p-4 md:p-6 lg:p-8"
      >
        {/* Paper texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            background: `
              radial-gradient(circle at 20% 50%, rgba(0, 0, 0, 0.02) 0%, transparent 20%),
              radial-gradient(circle at 80% 20%, rgba(139, 69, 19, 0.03) 0%, transparent 15%),
              radial-gradient(circle at 40% 80%, rgba(160, 82, 45, 0.02) 0%, transparent 25%)
            `,
            clipPath: torn !== 'none' ? clipPath : 'none',
          }}
        />
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </div>
  )
}
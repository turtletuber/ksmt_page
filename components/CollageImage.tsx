'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { generateTornPath, generateRandomRotation, generateTapePosition } from '@/lib/tornPaperUtils'

export interface CollageImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  torn?: 'all' | 'top' | 'bottom' | 'left' | 'right' | 'none'
  tape?: boolean
  tapeStyle?: 'clear' | 'yellowed' | 'scotch'
  pin?: boolean
  hover?: boolean
  roughness?: number
  maxRotation?: number
  priority?: boolean
  sizes?: string
  fill?: boolean
}

export default function CollageImage({
  src,
  alt,
  width,
  height,
  className = '',
  torn = 'all',
  tape = true,
  tapeStyle = 'yellowed',
  pin = false,
  hover = true,
  roughness = 0.4,
  maxRotation = 4,
  priority = false,
  sizes,
  fill = false,
}: CollageImageProps) {
  const [clipPath, setClipPath] = useState<string>('')
  const [rotation, setRotation] = useState<number>(0)
  const [tapePositions, setTapePositions] = useState<Array<{ top: string; left: string; rotation: number }>>([])
  const [pinPosition, setPinPosition] = useState<{ top: string; left: string; rotation: number }>({ top: '10px', left: '10px', rotation: 0 })
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    // Create a seed based on the image src to ensure consistency
    const seed = src.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
    
    // Generate unique torn path for this image
    if (torn !== 'none') {
      const path = generateTornPath(100, 100, torn, { roughness, seed })
      setClipPath(path)
    }
    
    // Generate random rotation
    setRotation(generateRandomRotation(maxRotation, seed))
    
    // Generate tape positions (1-3 pieces of tape)
    if (tape) {
      const numTapes = Math.floor((seed % 2) + 1) // 1 or 2 pieces based on seed
      const tapes = []
      for (let i = 0; i < numTapes; i++) {
        tapes.push(generateTapePosition(seed + i))
      }
      setTapePositions(tapes)
    }
    
    // Generate pin position
    if (pin) {
      setPinPosition({
        top: (seed % 2) === 0 ? '8px' : '12px',
        left: ((seed + 1) % 2) === 0 ? '8px' : '12px',
        rotation: generateRandomRotation(30, seed + 100)
      })
    }
  }, [src, torn, roughness, maxRotation, tape, pin])

  const getTapeBackground = () => {
    switch (tapeStyle) {
      case 'clear':
        return 'rgba(255, 255, 255, 0.8)'
      case 'yellowed':
        return 'rgba(255, 248, 220, 0.9)'
      case 'scotch':
        return 'rgba(255, 255, 255, 0.6)'
      default:
        return 'rgba(255, 248, 220, 0.9)'
    }
  }

  const imageProps = {
    src,
    alt,
    priority,
    sizes,
    className: `object-cover ${className || ''}`,
    style: {
      clipPath: torn !== 'none' ? clipPath : 'none',
    },
    onError: (e: any) => {
      console.error('Image failed to load:', src, e)
    },
    onLoad: () => {
      console.log('Image loaded successfully:', src)
    },
    ...(fill ? { fill: true } : { width, height }),
  }

  return (
    <div
      className="relative transition-all duration-300 ease-out"
      style={{
        transform: `rotate(${rotation}deg) ${isHovered ? 'translateY(-4px) scale(1.02)' : ''}`,
        transformOrigin: 'center',
        willChange: 'transform, box-shadow',
      }}
      onMouseEnter={() => hover && setIsHovered(true)}
      onMouseLeave={() => hover && setIsHovered(false)}
    >
      {/* Image container */}
      <div
        className="relative"
        style={{
          boxShadow: isHovered 
            ? '0 8px 20px rgba(0, 0, 0, 0.25), 0 2px 4px rgba(0, 0, 0, 0.15)'
            : '0 4px 8px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.1)',
          transition: 'box-shadow 0.3s ease-out',
        }}
      >
        <Image {...imageProps} />
        
        {/* Paper texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            background: `
              radial-gradient(circle at 30% 40%, rgba(139, 69, 19, 0.05) 0%, transparent 30%),
              radial-gradient(circle at 70% 60%, rgba(160, 82, 45, 0.03) 0%, transparent 25%)
            `,
            clipPath: torn !== 'none' ? clipPath : 'none',
            mixBlendMode: 'multiply',
          }}
        />
      </div>

      {/* Tape effects */}
      {tape && tapePositions.map((pos, index) => (
        <div
          key={index}
          className="absolute pointer-events-none"
          style={{
            top: pos.top,
            left: pos.left,
            transform: `rotate(${pos.rotation}deg)`,
            zIndex: 10,
          }}
        >
          <div
            style={{
              width: '45px',
              height: '20px',
              background: getTapeBackground(),
              border: '1px solid rgba(0, 0, 0, 0.1)',
              borderRadius: '2px',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
              opacity: 0.9,
            }}
          />
          {/* Tape texture lines */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: `
                repeating-linear-gradient(
                  90deg,
                  transparent 0px,
                  rgba(0, 0, 0, 0.1) 1px,
                  transparent 2px,
                  transparent 8px
                )
              `,
              borderRadius: '2px',
            }}
          />
        </div>
      ))}

      {/* Pin effect */}
      {pin && (
        <div
          className="absolute pointer-events-none"
          style={{
            top: pinPosition.top,
            left: pinPosition.left,
            transform: `rotate(${pinPosition.rotation}deg)`,
            zIndex: 10,
          }}
        >
          {/* Pin head */}
          <div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #ff4444 0%, #cc2222 100%)',
              border: '1px solid rgba(0, 0, 0, 0.2)',
              boxShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
            }}
            role="img"
            aria-label="Push pin"
          />
          {/* Pin point shadow */}
          <div
            className="absolute"
            style={{
              top: '6px',
              left: '3px',
              width: '2px',
              height: '4px',
              background: 'rgba(0, 0, 0, 0.3)',
              borderRadius: '0 0 1px 1px',
            }}
          />
        </div>
      )}

      {/* Fold marks (subtle) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: `
            linear-gradient(45deg, transparent 30%, rgba(0, 0, 0, 0.05) 50%, transparent 70%),
            linear-gradient(-45deg, transparent 60%, rgba(0, 0, 0, 0.03) 80%, transparent 90%)
          `,
          clipPath: torn !== 'none' ? clipPath : 'none',
          mixBlendMode: 'multiply',
        }}
      />
    </div>
  )
}
'use client'
import { useEffect, useState } from 'react'
import { generateRandomRotation } from '@/lib/tornPaperUtils'

export interface ScrapbookTextProps {
  children: React.ReactNode
  variant?: 'newspaper' | 'magazine' | 'handwritten' | 'typewriter' | 'ransom'
  highlight?: boolean
  highlightColor?: 'yellow' | 'pink' | 'green' | 'blue'
  underline?: boolean
  torn?: boolean
  className?: string
  as?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'div'
  maxRotation?: number
}

export default function ScrapbookText({
  children,
  variant = 'magazine',
  highlight = false,
  highlightColor = 'yellow',
  underline = false,
  torn = false,
  className = '',
  as: Component = 'p',
  maxRotation = 1,
}: ScrapbookTextProps) {
  const [rotation, setRotation] = useState<number>(0)
  const [letterRotations, setLetterRotations] = useState<number[]>([])

  useEffect(() => {
    // Create a seed based on content and variant to ensure consistency
    const contentStr = typeof children === 'string' ? children : String(children)
    const seed = `${variant}-${contentStr}`.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
    
    setRotation(generateRandomRotation(maxRotation, seed))
    
    // For ransom note effect, generate rotation for each character
    if (variant === 'ransom' && typeof children === 'string') {
      const rotations = children.split('').map((_, index) => generateRandomRotation(8, seed + index))
      setLetterRotations(rotations)
    }
  }, [maxRotation, variant, children])

  const getFontClass = () => {
    switch (variant) {
      case 'newspaper':
        return 'font-newspaper'
      case 'handwritten':
        return 'font-handwritten'
      case 'typewriter':
        return 'font-mono'
      case 'ransom':
        return 'font-display font-bold'
      default:
        return 'font-magazine'
    }
  }

  const getHighlightClass = () => {
    if (!highlight) return ''
    
    switch (highlightColor) {
      case 'pink':
        return 'highlight-pink'
      case 'green':
        return 'bg-green-200'
      case 'blue':
        return 'bg-blue-200'
      default:
        return 'highlight-yellow'
    }
  }

  const getTextStyles = () => {
    const baseStyles: React.CSSProperties = {
      transform: `rotate(${rotation}deg)`,
      transformOrigin: 'center',
    }

    if (underline) {
      baseStyles.textDecoration = 'underline'
      baseStyles.textDecorationStyle = 'wavy'
      baseStyles.textDecorationColor = 'rgba(0, 0, 0, 0.6)'
    }

    if (torn) {
      baseStyles.clipPath = 'polygon(2% 8%, 15% 4%, 28% 9%, 42% 5%, 58% 8%, 72% 3%, 85% 7%, 98% 4%, 96% 18%, 99% 32%, 95% 47%, 98% 62%, 94% 77%, 97% 91%, 83% 94%, 68% 97%, 54% 93%, 39% 96%, 25% 92%, 11% 95%, 4% 81%, 1% 67%, 5% 53%, 2% 38%, 6% 24%)'
      baseStyles.padding = '0.5rem'
    }

    return baseStyles
  }

  // Ransom note effect - each character styled differently
  if (variant === 'ransom' && typeof children === 'string') {
    const fonts = ['font-newspaper', 'font-magazine', 'font-handwritten', 'font-display']
    const colors = ['text-black', 'text-gray-800', 'text-red-600', 'text-blue-600', 'text-green-600']
    const sizes = ['text-sm', 'text-base', 'text-lg']
    
    return (
      <Component
        className={`inline-block ${className}`}
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        {children.split('').map((char, index) => {
          if (char === ' ') return <span key={index}>&nbsp;</span>
          
          const fontClass = fonts[index % fonts.length]
          const colorClass = colors[index % colors.length]
          const sizeClass = sizes[index % sizes.length]
          const charRotation = letterRotations[index] || 0
          
          return (
            <span
              key={index}
              className={`inline-block ${fontClass} ${colorClass} ${sizeClass} ${getHighlightClass()}`}
              style={{
                transform: `rotate(${charRotation}deg)`,
                transformOrigin: 'center',
                margin: '0 1px',
              }}
            >
              {char}
            </span>
          )
        })}
      </Component>
    )
  }

  return (
    <Component
      className={`${getFontClass()} ${getHighlightClass()} ${className}`}
      style={getTextStyles()}
    >
      {children}
    </Component>
  )
}

// Utility component for mixed typography headlines
export function MixedHeadline({ children, className = '' }: { children: string; className?: string }) {
  const words = children.split(' ')
  const variants: Array<'newspaper' | 'magazine' | 'handwritten' | 'typewriter'> = [
    'newspaper', 'magazine', 'handwritten', 'typewriter'
  ]
  const highlights: Array<'yellow' | 'pink' | 'green' | 'blue' | undefined> = [
    'yellow', 'pink', 'green', 'blue', undefined, undefined
  ]
  
  // Create seed from the text content
  const seed = children.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)

  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      {words.map((word, index) => {
        // Use seeded random for consistent highlighting
        const shouldHighlight = ((seed + index) % 10) > 6
        return (
          <ScrapbookText
            key={index}
            variant={variants[index % variants.length]}
            highlight={shouldHighlight}
            highlightColor={highlights[index % highlights.length]}
            as="span"
            maxRotation={3}
            className="text-2xl md:text-4xl lg:text-6xl font-bold"
          >
            {word}
          </ScrapbookText>
        )
      })}
    </div>
  )
}
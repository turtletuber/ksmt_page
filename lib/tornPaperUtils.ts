// Utility functions for generating torn paper effects

export interface TornEdgeConfig {
  roughness: number // 0-1, how rough the tear is
  seed: number // random seed for consistent generation
  points: number // number of points in the path
}

export function generateTornPath(
  width: number,
  height: number,
  side: 'top' | 'bottom' | 'left' | 'right' | 'all' | 'none' = 'all',
  config: Partial<TornEdgeConfig> = {}
): string {
  const { roughness = 0.3, seed = Math.random(), points = 15 } = config
  
  // Seeded random function
  let randomSeed = seed
  const seededRandom = () => {
    randomSeed = (randomSeed * 9301 + 49297) % 233280
    return randomSeed / 233280
  }

  const createTornEdge = (startX: number, startY: number, endX: number, endY: number) => {
    const segments = []
    const distance = Math.sqrt((endX - startX) ** 2 + (endY - startY) ** 2)
    const maxTear = distance * roughness * 0.1
    
    for (let i = 0; i <= points; i++) {
      const progress = i / points
      const x = startX + (endX - startX) * progress
      const y = startY + (endY - startY) * progress
      
      // Add randomness perpendicular to the edge
      const perpX = -(endY - startY) / distance
      const perpY = (endX - startX) / distance
      const tearAmount = (seededRandom() - 0.5) * maxTear * Math.sin(progress * Math.PI)
      
      const tornX = x + perpX * tearAmount
      const tornY = y + perpY * tearAmount
      
      segments.push(`${Math.round(tornX)}% ${Math.round(tornY)}%`)
    }
    return segments
  }

  let pathPoints: string[] = []

  if (side === 'none') {
    return 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
  }

  if (side === 'all') {
    // Top edge (left to right) - torn
    pathPoints = pathPoints.concat(createTornEdge(0, 5, 100, 5))
    
    // Right edge (top to bottom) - torn
    pathPoints = pathPoints.concat(createTornEdge(95, 5, 95, 100))
    
    // Bottom edge (right to left) - torn
    pathPoints = pathPoints.concat(createTornEdge(95, 95, 5, 95))
    
    // Left edge (bottom to top) - torn
    pathPoints = pathPoints.concat(createTornEdge(5, 95, 5, 5))
  } else {
    // Start with clean rectangle
    pathPoints = ['0% 0%', '100% 0%', '100% 100%', '0% 100%']
    
    // Replace specific edge with torn version
    if (side === 'top') {
      pathPoints = createTornEdge(0, 0, 100, 0)
        .concat(['100% 100%', '0% 100%'])
    } else if (side === 'bottom') {
      pathPoints = ['0% 0%', '100% 0%']
        .concat(createTornEdge(100, 100, 0, 100))
    } else if (side === 'left') {
      pathPoints = createTornEdge(0, 0, 0, 100)
        .concat(['100% 100%', '100% 0%'])
    } else if (side === 'right') {
      pathPoints = ['0% 0%', '100% 0%']
        .concat(createTornEdge(100, 0, 100, 100))
        .concat(['0% 100%'])
    }
  }

  return `polygon(${pathPoints.join(', ')})`
}

// Create a seeded random function to avoid hydration mismatches
function seededRandom(seed: number) {
  let x = Math.sin(seed++) * 10000
  return x - Math.floor(x)
}

export function generateRandomRotation(maxDegrees: number = 3, seed?: number): number {
  const random = seed ? seededRandom(seed) : Math.random()
  return (random - 0.5) * 2 * maxDegrees
}

export function generateRandomOffset(maxPixels: number = 5, seed?: number): { x: number; y: number } {
  const random1 = seed ? seededRandom(seed) : Math.random()
  const random2 = seed ? seededRandom(seed + 1) : Math.random()
  return {
    x: (random1 - 0.5) * 2 * maxPixels,
    y: (random2 - 0.5) * 2 * maxPixels,
  }
}

export function generateTapePosition(seed?: number): { top: string; left: string; rotation: number } {
  const positions = [
    { top: '-5px', left: '10%' },
    { top: '-5px', left: '80%' },
    { top: '80%', left: '-5px' },
    { top: '80%', left: '90%' },
  ]
  
  const random = seed ? seededRandom(seed) : Math.random()
  const position = positions[Math.floor(random * positions.length)]
  return {
    ...position,
    rotation: generateRandomRotation(15, seed ? seed + 10 : undefined)
  }
}

export const paperTextures = {
  kraft: 'radial-gradient(circle at 25% 25%, #f4e4bc 0%, #e6d3a7 50%, #d4c19c 100%)',
  newsprint: 'linear-gradient(45deg, #fafaf9 25%, transparent 25%, transparent 75%, #fafaf9 75%, #fafaf9), linear-gradient(-45deg, #fafaf9 25%, transparent 25%, transparent 75%, #fafaf9 75%, #fafaf9)',
  notebook: 'repeating-linear-gradient(transparent, transparent 24px, #e5e7eb 24px, #e5e7eb 26px)',
  aged: 'radial-gradient(ellipse at top, #faf7f0 0%, #f5f0e8 30%, #ede5d3 100%)',
  stained: 'radial-gradient(circle at 60% 40%, rgba(139, 69, 19, 0.1) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(160, 82, 45, 0.08) 0%, transparent 40%)',
}
interface ProgressiveBlurProps {
  height?: number
  zIndex?: number
}

export default function ProgressiveBlur({
  height = 200,
  zIndex = 999,
}: ProgressiveBlurProps) {
  const layers = [
    { blur: 0.25, mask: 'transparent 0%, black 12.5%, black 25%, transparent 37.5%' },
    { blur: 0.5, mask: 'transparent 12.5%, black 25%, black 37.5%, transparent 50%' },
    { blur: 1, mask: 'transparent 25%, black 37.5%, black 50%, transparent 62.5%' },
    { blur: 2, mask: 'transparent 37.5%, black 50%, black 62.5%, transparent 75%' },
    { blur: 4, mask: 'transparent 50%, black 62.5%, black 75%, transparent 87.5%' },
    { blur: 8, mask: 'transparent 62.5%, black 75%, black 87.5%, transparent 100%' },
    { blur: 16, mask: 'transparent 75%, black 87.5%, black 100%' },
    { blur: 32, mask: 'transparent 87.5%, black 100%' },
  ]

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        height: `${height}px`,
        zIndex: zIndex,
        pointerEvents: 'none',
      }}
    >
      {layers.map((layer, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            inset: 0,
            backdropFilter: `blur(${layer.blur}px)`,
            WebkitBackdropFilter: `blur(${layer.blur}px)`,
            maskImage: `linear-gradient(to bottom, ${layer.mask})`,
            WebkitMaskImage: `linear-gradient(to bottom, ${layer.mask})`,
          }}
        />
      ))}
    </div>
  )
}

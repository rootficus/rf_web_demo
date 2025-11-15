'use client'
import * as React from 'react'

interface HeadingProps {
  text: string
  level?: 1 | 2 | 3
  gradient?: boolean
  align?: 'left' | 'center' | 'right'
  className?: string
}

const Heading = ({
  text,
  level = 1,
  gradient = false,
  align = 'center',
  className = '',
}: HeadingProps): React.ReactElement => {
  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements
  const base = 'font-bold font-poppins'
  const size = {
    1: 'text-heading-lg',
    2: 'text-heading-md',
    3: 'text-[32px] leading-[40px]',
  }
  const style = gradient
    ? 'bg-gradient-to-r from-foreground to-muted text-transparent bg-clip-text'
    : 'text-foreground'

  return (
    <Tag className={`${base} ${size[level]} ${style} text-${align} ${className}`}>
      {text}
    </Tag>
  )
}

export default Heading

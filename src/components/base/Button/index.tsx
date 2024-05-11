import React from 'react'

type Props = {
    text: string
    color?: 'primary' | 'secondary' | 'transparent' | 'transparent-bordered'
    size?: 'sm' | 'md' | 'lg'
    className?: string
    fullWidth?: boolean
    onClick?: () => void
}

const Button: React.FC<Props> = ({
    text,
    color = 'primary',
    size = 'md',
    className,
    fullWidth = false,
    onClick,
}) => {
    const colorStyle = (color: string) => {
        switch (color) {
            case 'primary':
                return 'bg-primary hover:bg-primary/90 text-light'
            case 'secondary':
                return 'bg-light hover:bg-light/95 text-primary'
            case 'transparent':
                return 'bg-transparent hover:bg-light/15 text-light'
            case 'transparent-bordered':
                return 'bg-transparent border border-light hover:bg-light/15 text-light'
        }
    }

    const sizeStyle = (size: string) => {
        switch (size) {
            case 'sm':
                return 'py-1 px-2 text-sm'
            case 'md':
                return 'py-1.5 px-4'
            case 'lg':
                return 'py-2 px-6 text-lg'
        }
    }

    return (
        <button
            onClick={onClick}
            className={`${colorStyle(color)} ${sizeStyle(size)} ${fullWidth && 'w-full'} ${className} rounded-lg transition-all active:scale-95 `}
        >
            {text}
        </button>
    )
}

export default Button
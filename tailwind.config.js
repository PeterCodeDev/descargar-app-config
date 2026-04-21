// Reemplazando el contenido de style.css con Tailwind CSS Config JS
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            "colors": {
                "on-secondary": "#313030",
                "tertiary-fixed": "#c3f400",
                "on-tertiary-fixed": "#161e00",
                "secondary-fixed": "#e5e2e1",
                "surface-container": "#201f1f",
                "error-container": "#93000a",
                "inverse-primary": "#004ced",
                "primary-fixed": "#dde1ff",
                "inverse-on-surface": "#313030",
                "background": "#131313",
                "on-primary-fixed-variant": "#0038b6",
                "on-secondary-fixed": "#1c1b1b",
                "outline": "#8d90a2",
                "secondary": "#c8c6c5",
                "surface-bright": "#393939",
                "secondary-fixed-dim": "#c8c6c5",
                "surface": "#131313",
                "surface-container-lowest": "#0e0e0e",
                "surface-tint": "#b7c4ff",
                "error": "#ffb4ab",
                "on-primary-container": "#dfe3ff",
                "on-tertiary-container": "#c5f600",
                "tertiary": "#abd600",
                "on-tertiary-fixed-variant": "#3c4d00",
                "on-background": "#e5e2e1",
                "surface-container-high": "#2a2a2a",
                "surface-container-low": "#1c1b1b",
                "tertiary-fixed-dim": "#abd600",
                "secondary-container": "#4a4949",
                "on-primary": "#002682",
                "surface-container-highest": "#353534",
                "surface-dim": "#131313",
                "on-surface-variant": "#c3c5d9",
                "primary-container": "#0052ff",
                "tertiary-container": "#576e00",
                "on-primary-fixed": "#001452",
                "primary-fixed-dim": "#b7c4ff",
                "surface-variant": "#353534",
                "inverse-surface": "#e5e2e1",
                "primary": "#b7c4ff",
                "on-error-container": "#ffdad6",
                "on-surface": "#e5e2e1",
                "on-error": "#690005",
                "on-secondary-container": "#bab8b7",
                "outline-variant": "#434656",
                "on-secondary-fixed-variant": "#474646",
                "on-tertiary": "#283500"
            },
            "borderRadius": {
                "DEFAULT": "0.125rem",
                "lg": "0.25rem",
                "xl": "0.5rem",
                "full": "0.75rem"
            },
            "fontFamily": {
                "headline": ["Inter", "sans-serif"],
                "body": ["Manrope", "sans-serif"],
                "label": ["Manrope", "sans-serif"]
            },
            "animation": {
                'fade-up': 'fadeUp 0.8s ease-out forwards',
                'slide-in': 'slideIn 0.8s ease-out forwards',
            },
            "keyframes": {
                fadeUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideIn: {
                    '0%': { opacity: '0', transform: 'translateX(-20px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                }
            }
        }
    }
}

import CSS from 'csstype';

// Utils
export const NoPadding: CSS.Properties = { padding: 0 } 
export const NoMargin: CSS.Properties = { margin: 0 } 

// Theme Options
export const PrimaryColour: CSS.Properties = { color: '#72EFDD' }
export const PrimaryColourBG: CSS.Properties = { backgroundColor: '#72EFDD' }

// Layout elements
export const MainContainer: CSS.Properties = {
    padding: '.5vw 3vw',
}

export const LandingSectionLayout: CSS.Properties = {
    height: 'calc(100vh - 8vw)',
    width: '100%',
    backgroundColor: '#1A1A1A',
    padding: '32px',
    marginBottom: '4vw'
} 

export const ContentSection: CSS.Properties = {
    padding: '25vh 0px',
}
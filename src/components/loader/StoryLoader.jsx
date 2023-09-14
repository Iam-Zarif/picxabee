import ContentLoader from 'react-content-loader'

const StoryLoader = props => (
  
    <ContentLoader
        speed={1}
        width='fit'
        height={160}
        // viewBox="0 0 340 160"
        backgroundColor="#f3f3f3"
        foregroundColor="#8d8686"
        {...props}
    >
        <rect x="0" y="0" rx="5" ry="5" width="112" height="144" />
        <rect x="119" y="0" rx="5" ry="5" width="112" height="144" />
        <rect x="238" y="0" rx="5" ry="5" width="112" height="144" />
        <rect x="357" y="0" rx="5" ry="5" width="112" height="144" />
        <rect x="476" y="0" rx="5" ry="5" width="112" height="144" />
        <rect x="595" y="0" rx="5" ry="5" width="112" height="144" />
        <rect x="714" y="0" rx="5" ry="5" width="112" height="144" />
    </ContentLoader>
)

export default StoryLoader;
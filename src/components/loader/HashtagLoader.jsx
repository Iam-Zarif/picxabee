import ContentLoader from 'react-content-loader'

const HashtagLoader = props => (
    <ContentLoader
        speed={1}
        viewBox="0 0 340 84"
        {...props}
    >
        <rect x="0" y="0" rx="3" ry="3" width="67" height="18" />
        <rect x="76" y="0" rx="3" ry="3" width="140" height="18" />
        <rect x="122" y="48" rx="3" ry="3" width="53" height="18" />
        <rect x="188" y="48" rx="3" ry="3" width="75" height="18" />
        <rect x="0" y="48" rx="3" ry="3" width="100" height="18" />
        <rect x="227" y="1" rx="3" ry="3" width="37" height="18" />
        <rect x="0" y="25" rx="3" ry="3" width="140" height="18" />
        <rect x="152" y="26" rx="3" ry="3" width="110" height="18" />
    </ContentLoader>
)
export default HashtagLoader;